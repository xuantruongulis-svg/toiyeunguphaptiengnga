import React, { useState, useEffect } from 'react';
import './AIAssistant.css';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

export default function AIAssistant() {
  const [selection, setSelection] = useState({ text: "", x: 0, y: 0 });
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [currentQuery, setCurrentQuery] = useState("");

  useEffect(() => {
    const handleMouseUp = (e) => {
      // Không hiện nút nếu đang click trong vùng AI assistant
      if (e.target.closest('.ai-result-modal') || e.target.closest('.ai-fab')) return;

      const selectedText = window.getSelection().toString().trim();
      if (selectedText && selectedText.length > 1) {
        const range = window.getSelection().getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setSelection({
          text: selectedText,
          x: rect.left + window.scrollX + (rect.width / 2),
          y: rect.top + window.scrollY - 45
        });
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    const handleMouseDown = (e) => {
      if (!e.target.closest('.ai-result-modal') && !e.target.closest('.ai-fab') && !e.target.closest('.ai-floating-btn')) {
        // Chỉ ẩn kết quả nếu click hoàn toàn ngoài vùng AI
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const askGemini = async (queryText) => {
    if (!API_KEY) {
      setResult("⚠️ Chưa có API Key!\n\nHãy mở file .env và thêm dòng:\nVITE_GEMINI_API_KEY=your_key_here\n\nLấy key miễn phí tại: https://aistudio.google.com/app/apikey");
      setShowResult(true);
      return;
    }

    if (!queryText) return;

    setCurrentQuery(queryText);
    setLoading(true);
    setShowResult(true);
    setShowButton(false);

    const prompt = `Bạn là một chuyên gia ngôn ngữ tiếng Nga. Hãy giải đáp/giải thích phần văn bản hoặc câu hỏi sau đây: "${queryText}". 
Nếu người dùng hỏi về một từ/câu cụ thể, yêu cầu:
1. Nghĩa của từ/câu này là gì?
2. Nếu là động từ, hãy cho biết đây là động từ gì (phái sinh từ đâu), cặp động từ (NSV/SV), và cách chia ở thời hiện tại/quá khứ nếu cần.
3. Giải thích ngắn gọn cách dùng.
Nếu là câu hỏi chung, hãy trả lời tự nhiên.
Trả lời bằng tiếng Việt, trình bày đẹp mắt, dễ hiểu.`;

    // Danh sách các model theo yêu cầu (Ưu tiên thế hệ 3.1 mới nhất)
    // Danh sách model tương thích với API Key hiện tại
    const models = [
      "gemini-2.5-flash",        // Hoạt động tốt nhất hiện tại
      "gemini-2.5-flash-lite",
      "gemini-2.0-flash",
    ];

    try {
      let lastError = null;

      for (const modelName of models) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;

          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }]
            })
          });

          const data = await res.json();

          if (data.error) {
            // Nếu hết quota (429) hoặc model không tồn tại (404), thử model tiếp theo
            if (data.error.code === 429 || data.error.code === 404) {
              lastError = `[${modelName}] ${data.error.message}`;
              continue;
            }
            setResult(`❌ Lỗi từ Gemini API:\n\nMã lỗi: ${data.error.code}\nNội dung: ${data.error.message}`);
            return;
          }

          if (data.candidates && data.candidates[0]) {
            setResult(data.candidates[0].content.parts[0].text);
            return; // Thành công → thoát
          }
        } catch (fetchErr) {
          lastError = fetchErr.message;
          continue;
        }
      }

      // Nếu tất cả model đều thất bại
      setResult(`⚠️ Tất cả model Gemini đều đã hết quota miễn phí.\n\n💡 Giải pháp:\n1. Đợi khoảng 1 phút rồi thử lại\n2. Tạo API Key mới tại: https://aistudio.google.com/app/apikey\n   → Bấm "Create API key in new project"\n3. Dán key mới vào file .env\n\nChi tiết lỗi: ${lastError || "Quota exceeded"}`);
    } catch (error) {
      console.error("AI Error:", error);
      setResult(`❌ Lỗi kết nối:\n\n${error.message}\n\nHãy kiểm tra kết nối mạng và thử lại.`);
    } finally {
      setLoading(false);
    }
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      askGemini(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="ai-assistant-container">
      {showButton && (
        <button
          className="ai-floating-btn"
          style={{ left: selection.x, top: selection.y }}
          onClick={() => askGemini(selection.text)}
        >
          <span className="ai-icon">✨</span> Hỏi Gemini
        </button>
      )}

      {/* Nút FAB cố định ở góc màn hình */}
      <button
        className={`ai-fab ${showResult ? 'active' : ''}`}
        onClick={() => setShowResult(!showResult)}
        title="Trợ lý AI"
      >
        <span className="ai-icon-fab">🤖</span>
      </button>

      {showResult && (
        <div className="ai-result-modal">
          <div className="ai-result-header">
            <div className="ai-title">
              <span className="ai-icon-large">🤖</span>
              <span>Trợ lý Gemini AI</span>
            </div>
            <button className="ai-close" onClick={() => setShowResult(false)}>&times;</button>
          </div>
          <div className="ai-result-body">
            {loading ? (
              <div className="ai-loader">
                <div className="spinner"></div>
                <p>Gemini đang suy nghĩ...</p>
              </div>
            ) : (
              <div className="ai-markdown-content">
                {currentQuery && <div className="selected-snippet">Bạn hỏi: "{currentQuery}"</div>}
                <div className="ai-text-answer">{result}</div>
              </div>
            )}
            {!currentQuery && !loading && (
              <div className="ai-welcome">
                <span className="ai-icon-large">👋</span>
                <p>Xin chào! Tôi có thể giúp gì cho bạn?<br />Hãy bôi đen một từ tiếng Nga hoặc nhập câu hỏi xuống bên dưới.</p>
              </div>
            )}
          </div>
          <div className="ai-result-footer">
            <form onSubmit={handleManualSubmit} className="ai-input-form">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nhập câu hỏi của bạn..."
                className="ai-input"
              />
              <button type="submit" className="ai-send-btn">➤</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
