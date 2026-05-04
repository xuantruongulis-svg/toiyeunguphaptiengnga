import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const slushatCards = [
  { verb: 'вслушаться', meaning: 'Lắng tai và chú ý để nghe và hiểu' },
  { verb: 'выслушать', meaning: '1) Nghe đến hết\n2) Khám bệnh bằng cách nghe' },
  { verb: 'дослушать', meaning: 'Nghe nốt cho hết' },
  { verb: 'заслушать', meaning: 'Nghe công khai/trang trọng (báo cáo)' },
  { verb: 'заслушаться', meaning: 'Mải mê nghe vì quá hay' },
  { verb: 'наслушаться', meaning: 'Nghe rất nhiều, nghe đủ' },
  { verb: 'ослушаться', meaning: 'Không tuân theo, cãi lời' },
  { verb: 'слушать', meaning: '1) Nghe nhạc\n2) Xét xử\n3) Học/Nghe giảng\n4) Khám bệnh\n5) Nghe theo lời khuyên' },
  { verb: 'слушаться', meaning: 'Làm theo lời khuyên/mệnh lệnh' },
  { verb: 'подслушать', meaning: 'Nghe lén chuyện người khác' },
  { verb: 'прислушаться', meaning: '1) Lắng tai nghe\n2) Để tâm/lưu ý tới ý kiến' },
  { verb: 'прослушать', meaning: '1) Nghe trọn khóa\n2) Khám bệnh\n3) Nghe sót/bỏ lỡ' }
];

export default function SlushatTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом СЛУШАТЬ</h3>
          <span className="subtitle">Động từ phái sinh từ СЛУШАТЬ — nghe</span>
        </div>

        <div className="exercise-tabs" style={{marginBottom: '1.5rem', justifyContent: 'center'}}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={slushatCards} />
        ) : (
          <>
            <div className="verb-list-box">
              <strong>Danh sách:</strong> вслушаться, выслушать, дослушать, заслушать, заслушаться, наслушаться, ослушаться, слушать, слушаться, подслушать, прислушаться, прослушать
            </div>

            <div className="theory-table-container">
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>Động từ (НСВ — СВ)</th>
                    <th>Nghĩa & Ví dụ (Nga–Việt)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="verb-name">вслушиваться<br/>— вслушаться</span></td>
                    <td>
                      Lắng tai và chú ý để nghe và hiểu: <span className="ex">в разговор</span> (vào cuộc nói chuyện).
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">выслушивать<br/>— выслушать</span></td>
                    <td>
                      1. Nghe đến hết: <span className="ex">выслушать посетителя</span> (nghe khách nói hết).<br/>
                      2. (Chuyên môn) Khám bệnh bằng cách nghe: <span className="ex">выслушать лёгкие</span> (nghe phổi).
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">дослушивать<br/>— дослушать</span></td>
                    <td>
                      Nghe nốt cho hết: <span className="ex">дослушать до конца</span> (nghe nốt đến cuối).
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">заслушивать<br/>— заслушать</span></td>
                    <td>
                      (Trang trọng) Nghe công khai cái được công bố: <span className="ex">заслушать докладчика</span> (nghe người báo cáo).
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">заслушиваться<br/>— заслушаться</span></td>
                    <td>
                      Mải mê nghe: <span className="ex">заслушаться рассказом</span> (mải mê nghe câu chuyện).
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">наслушаться (СВ)</span></td>
                    <td>
                      Nghe rất nhiều, nghe đủ: <span className="ex">наслушаться песен</span> (nghe đủ các bài hát).
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">ослушаться (СВ)</span></td>
                    <td>
                      (Khẩu ngữ) Không tuân theo yêu cầu, mệnh lệnh: <span className="ex">ослушаться родителей</span> (cãi lời bố mẹ).
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">слушать</span></td>
                    <td>
                      1. Nghe: <span className="ex">слушать музыку.</span><br/>
                      2. Xét xử công khai: <span className="ex">слушать дело в суде.</span><br/>
                      3. (СВ: прослушать) Học/nghe giảng: <span className="ex">курс высшей математики.</span><br/>
                      4. (СВ: прослушать/послушать) Khám bệnh: <span className="ex">слушать больного.</span><br/>
                      5. (СВ: послушать) Nghe theo lời khuyên: <span className="ex">слушать отца.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">слушаться<br/>— послушаться</span></td>
                    <td>
                      Làm theo lời khuyên, mệnh lệnh: <span className="ex">слушаться родителей.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">подслушивать<br/>— подслушать</span></td>
                    <td>
                      Nghe lén chuyện của người khác: <span className="ex">подслушать чей-то разговор.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">прислушиваться<br/>— прислушаться</span></td>
                    <td>
                      1. Lắng tai nghe để nghe được: <span className="ex">прислушаться к разговору.</span><br/>
                      2. Để tâm, lưu ý tới: <span className="ex">прислушаться к мнению</span> (lưu ý tới ý kiến).
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">прослушивать<br/>— прослушать</span></td>
                    <td>
                      1. Nghe trọn từ đầu đến cuối: <span className="ex">прослушать курс лекций.</span><br/>
                      2. (Chuyên môn) Khám bệnh: <span className="ex">прослушать лёгкие.</span><br/>
                      3. Nghe sót, bỏ lỡ: <span className="ex">прослушать объяснение</span> (nghe sót lời giải thích).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
