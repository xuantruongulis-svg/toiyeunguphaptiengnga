import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const slyshatCards = [
  { verb: 'ослышаться (СВ)', meaning: 'Nghe nhầm, hiểu nhầm bằng tai' },
  { verb: 'слышаться (НСВ)', meaning: 'Vang lên, nghe thấy từ đâu đó' },
  { verb: 'послышаться (СВ)', meaning: 'Thoáng nghe thấy, ngỡ như nghe thấy (vô nhân xưng)' },
  { verb: 'прослышать (СВ)', meaning: 'Nghe phong thanh, nghe đồn' },
  { verb: 'расслышать (СВ)', meaning: 'Nghe rõ, phân biệt rõ bằng tai' },
  { verb: 'услышать (СВ)', meaning: '1) Nghe thấy âm thanh\n2) Nghe tin\n3) Cảm nhận được mùi (khẩu ngữ)' }
];

export default function SlyshatTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом СЛЫШАТЬ</h3>
          <span className="subtitle">Động từ phái sinh từ СЛЫШАТЬ — nghe</span>
        </div>

        <div className="exercise-tabs" style={{marginBottom: '1.5rem', justifyContent: 'center'}}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={slyshatCards} />
        ) : (
          <>
            <div className="verb-list-box">
              <strong>Danh sách:</strong> ослышаться, слышаться, послышаться, прослышать, расслышать, услышать
            </div>

            <div className="theory-table-container">
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>Động từ</th>
                    <th>Nghĩa & Ví dụ (Nga–Việt)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="verb-name">слышать (НСВ)</span></td>
                    <td>
                      Nghĩa gốc: nghe, có khả năng nghe.<br/>
                      <span className="ex">Я слышал, что она скоро приедет.</span> = Tôi nghe nói cô ấy sắp đến.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">ослышаться (СВ)</span></td>
                    <td>
                      <span className="tag tag-razg">razg.</span> Nghe nhầm, hiểu nhầm bằng tai.<br/>
                      <span className="ex">Я не ослышался?</span> = Tôi không nghe nhầm chứ?
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">слышаться (НСВ)</span></td>
                    <td>
                      Vang lên, nghe thấy từ đâu đó, có âm thanh vọng lại.<br/>
                      <span className="ex">Издалека слышится песня.</span> = Từ xa vang lại tiếng hát.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">послышаться (СВ)</span></td>
                    <td>
                      Thoáng nghe thấy, ngỡ như nghe thấy; thường dùng vô nhân xưng.<br/>
                      <span className="ex">Мне послышался шум.</span> = Tôi tưởng như nghe thấy tiếng động.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">прослышать (СВ)</span></td>
                    <td>
                      <span className="tag tag-razg">razg.</span> Nghe phong thanh, nghe đồn, biết qua lời đồn.<br/>
                      <span className="ex">Он уже прослышал о твоих планах.</span> = Anh ấy đã nghe phong thanh về kế hoạch của bạn rồi.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">расслышать (СВ)</span></td>
                    <td>
                      Nghe rõ, phân biệt rõ bằng tai.<br/>
                      <span className="ex">Я не расслышал ваш вопрос.</span> = Tôi không nghe rõ câu hỏi của anh/chị.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">услышать (СВ)</span></td>
                    <td>
                      1. Nghe thấy âm thanh: <span className="ex">Мы услышали звонок.</span> = Chúng tôi nghe thấy tiếng chuông.<br/>
                      2. Biết được, nghe tin: <span className="ex">Я услышал, что он уезжает.</span> = Tôi nghe nói anh ấy sắp đi.<br/>
                      3. <span className="tag tag-razg">razg.</span> Cảm nhận được mùi: <span className="ex">В лесу можно услышать много запахов.</span> = Trong rừng có thể “nghe thấy” nhiều mùi hương.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="theory-note">
              <h4>📌 Ghi nhớ nhanh:</h4>
              <ul>
                <li>• <strong>расслышать</strong> = nghe rõ</li>
                <li>• <strong>ослышаться</strong> = nghe nhầm</li>
                <li>• <strong>послышаться</strong> = tưởng như nghe thấy</li>
                <li>• <strong>прослышать</strong> = nghe đồn</li>
                <li>• <strong>услышать</strong> = nghe thấy / nghe tin</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
