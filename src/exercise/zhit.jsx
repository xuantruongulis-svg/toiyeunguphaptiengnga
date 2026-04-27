import React, { useState } from 'react';
import { ex65, ex66, ex67, ex68, ex69 } from './zhit_data.js';

function QuizQuestion({ q, index }) {
  const [selected, setSelected] = useState(null);
  const isCorrect = selected === q.correct;
  const answered = selected !== null;
  return (
    <div className={`quiz-item ${answered ? (isCorrect ? 'correct' : 'wrong') : ''}`}>
      <div className="quiz-q">
        <span className="quiz-num">{index + 1}</span>
        <span dangerouslySetInnerHTML={{ __html: q.sentence.replace('…', '<span class="quiz-blank">___</span>') }} />
      </div>
      <div className="quiz-options">
        {q.options.map(opt => (
          <button key={opt}
            className={`quiz-opt ${selected === opt ? (opt === q.correct ? 'opt-correct' : 'opt-wrong') : ''} ${answered && opt === q.correct ? 'opt-correct' : ''}`}
            onClick={() => !answered && setSelected(opt)} disabled={answered}>
            {opt}
          </button>
        ))}
      </div>
      {answered && (
        <div className={`quiz-result ${isCorrect ? 'res-correct' : 'res-wrong'}`}>
          <div className="res-header">{isCorrect ? '✅ Chính xác!' : `❌ Sai! Đáp án: ${q.correct}`}</div>
          <div className="res-viet">{q.viet}</div>
          <div className="res-why">{q.why}</div>
        </div>
      )}
    </div>
  );
}

function AnalysisItem({ item, index }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="analysis-item">
      <div className="analysis-q">
        <span className="quiz-num">{index + 1}</span>
        <span>{item.sentence || item.prompt}</span>
      </div>
      {!revealed ? (
        <button className="reveal-btn" onClick={() => setRevealed(true)}>Xem đáp án</button>
      ) : (
        <div className="analysis-answer">
          <div className="res-header">✔ {item.ans}</div>
          <div className="res-viet">{item.viet}</div>
          <div className="res-why">{item.why}</div>
        </div>
      )}
    </div>
  );
}

export default function Exercise() {
  const [tab, setTab] = useState('ex68');
  return (
    <div className="exercise-wrapper">
      <div className="exercise-tabs">
        <button className={`ex-tab ${tab === 'ex65' ? 'active' : ''}`} onClick={() => setTab('ex65')}>📖 Bài 65</button>
        <button className={`ex-tab ${tab === 'ex66' ? 'active' : ''}`} onClick={() => setTab('ex66')}>📖 Bài 66</button>
        <button className={`ex-tab ${tab === 'ex67' ? 'active' : ''}`} onClick={() => setTab('ex67')}>🔄 Bài 67</button>
        <button className={`ex-tab ${tab === 'ex68' ? 'active' : ''}`} onClick={() => setTab('ex68')}>🎯 Bài 68</button>
        <button className={`ex-tab ${tab === 'ex69' ? 'active' : ''}`} onClick={() => setTab('ex69')}>💬 Bài 69</button>
      </div>

      {tab === 'ex65' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 65 — Đọc và phân tích</h3>
            <p>Theo dõi cách dùng các động từ phái sinh từ ЖИТЬ.</p>
          </div>
          {ex65.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}

      {tab === 'ex66' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 66 — Đọc và phân tích (tiếp)</h3>
            <p>Theo dõi cách dùng các động từ phái sinh từ ЖИТЬ.</p>
          </div>
          {ex66.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}

      {tab === 'ex67' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 67 — Có thể thay thế không?</h3>
            <p>Phân tích khả năng hoán đổi giữa các biến thể.</p>
          </div>
          {ex67.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}

      {tab === 'ex68' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 68 — Chọn dạng đúng</h3>
            <p>Mỗi câu chọn 1 trong 2 phương án. Kết quả hiện ngay sau khi chọn.</p>
          </div>
          {ex68.map((q, i) => <QuizQuestion key={q.id} q={q} index={i} />)}
        </div>
      )}

      {tab === 'ex69' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 69 — Soạn hội thoại</h3>
            <p>Trả lời câu hỏi bằng các động từ phái sinh từ ЖИТЬ.</p>
          </div>
          {ex69.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}

      <div className="theory-note" style={{ marginTop: '3rem' }}>
        <h4>📌 Tóm tắt nhanh nghĩa các động từ quan trọng với ЖИТЬ</h4>
        <ul>
          <li>• <strong>жить</strong> = sống, ở | <strong>проживать</strong> = cư trú (hành chính)</li>
          <li>• <strong>прожить</strong> = sống qua quãng thời gian | <strong>пожить</strong> = sống một thời gian ngắn</li>
          <li>• <strong>дожить до</strong> = sống tới mốc | <strong>зажить</strong> = bắt đầu sống; vết thương lành</li>
          <li>• <strong>выжить</strong> = sống sót | <strong>пережить</strong> = sống lâu hơn; chịu đựng/vượt qua</li>
          <li>• <strong>ужиться с кем</strong> = sống hòa hợp | <strong>обжиться</strong> = quen, ổn định nơi mới</li>
          <li>• <strong>нажить</strong> = tích lũy / chuốc lấy | <strong>нажиться</strong> = làm giàu</li>
          <li>• <strong>ожить</strong> = sống lại, hồi sinh | <strong>изжить</strong> = loại bỏ dần</li>
          <li>• <strong>разжиться</strong> = kiếm xoay được | <strong>сжиться с чем</strong> = quen dần với điều gì</li>
        </ul>
      </div>
    </div>
  );
}
