import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const dumatCards = [
  { verb: 'вдуматься', meaning: 'Suy nghĩ sâu, nghiền ngẫm kỹ' },
  { verb: 'вздумать', meaning: 'Bỗng nảy ra ý muốn, đột ngột quyết làm gì' },
  { verb: 'вздуматься (vô nhân xưng)', meaning: 'Bỗng nảy ra trong đầu (khẩu ngữ)' },
  { verb: 'выдумать', meaning: '1) Bịa ra điều không thật\n2) Nghĩ ra, sáng chế ra' },
  { verb: 'додуматься', meaning: 'Suy ra, nghĩ tới mức rút ra kết luận' },
  { verb: 'задумать', meaning: '1) Dự định, ấp ủ\n2) Nghĩ chọn (số, điều gì)' },
  { verb: 'задуматься', meaning: '1) Trầm ngâm, suy tư\n2) Không ngần ngại làm gì' },
  { verb: 'надумать', meaning: 'Quyết định sau khi đã suy nghĩ' },
  { verb: 'одуматься', meaning: 'Tỉnh ra, nghĩ lại và đổi ý sau khi nhận ra sai' },
  { verb: 'обдумать', meaning: 'Cân nhắc kỹ, suy xét kỹ trước khi quyết định' },
  { verb: 'передумать', meaning: '1) Nghĩ qua rất nhiều điều\n2) Đổi ý sau khi đã suy nghĩ' },
  { verb: 'подумать', meaning: 'Nghĩ một lúc, cân nhắc ngắn' },
  { verb: 'придумать', meaning: 'Nghĩ ra, sáng tạo ra, tìm ra cách làm' },
  { verb: 'продумать', meaning: '1) Suy tính kỹ lưỡng, tính hết các bước\n2) Nghĩ rất lâu' },
  { verb: 'раздумать', meaning: '1) Lưỡng lự\n2) Đổi ý, không làm nữa' }
];

export default function DumatTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом ДУМАТЬ</h3>
          <span className="subtitle">Động từ phái sinh từ ДУМАТЬ — nghĩ, suy nghĩ</span>
        </div>

        <div className="exercise-tabs" style={{marginBottom: '1.5rem', justifyContent: 'center'}}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={dumatCards} />
        ) : (
          <>
            <div className="verb-list-box">
              <strong>Danh sách:</strong> вдуматься, вздумать, вздуматься, выдумать, додуматься, задумать, задуматься, надумать, одуматься, обдумать, передумать, подумать, придумать, продумать, раздумать
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
                    <td><span className="verb-name">думать (НСВ)</span></td>
                    <td>
                      1. Suy nghĩ: <span className="ex">думать о жизни</span> = nghĩ về cuộc đời<br/>
                      2. Có ý kiến, cho rằng<br/>
                      3. <span className="tag tag-razg">razg.</span> Nghi ngờ ai: <span className="ex">думать на соседа</span><br/>
                      4. <span className="tag tag-razg">razg.</span> Có ý định: <span className="ex">Я думаю остаться дома.</span><br/>
                      5. Quan tâm: <span className="ex">Подумай о детям!</span> = Hãy nghĩ đến bọn trẻ.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">вдуматься (СВ)</span></td>
                    <td>
                      Suy nghĩ sâu, nghiền ngẫm kỹ. <span className="tag tag-ofic">в ...</span><br/>
                      <span className="ex">Вдумайтесь в смысл текста.</span> = Hãy suy ngẫm kỹ ý nghĩa của văn bản.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">вздумать (СВ)</span></td>
                    <td>
                      Bỗng nảy ra ý muốn, đột nhiên quyết làm gì.<br/>
                      <span className="ex">Он вздумал уехать ночью.</span> = Anh ta bỗng muốn đi vào ban đêm.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">вздуматься (СВ)</span></td>
                    <td>
                      <span className="tag tag-razg">razg.</span> Vô nhân xưng: bỗng nảy ra trong đầu.<br/>
                      <span className="ex">Ему вздумалось погулять.</span> = Tự nhiên anh ta nổi hứng đi dạo.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">выдумать (СВ)</span></td>
                    <td>
                      1. Bịa ra điều không thật: <span className="ex">Не выдумывай!</span> = Đừng bịa nữa.<br/>
                      2. Nghĩ ra, sáng chế ra: <span className="ex">Он выдумал новую игру.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">додуматься (СВ)</span></td>
                    <td>
                      Suy ra, nghĩ tới mức rút ra kết luận (đôi khi có sắc thái mỉa mai). <span className="tag tag-ofic">до ...</span><br/>
                      <span className="ex">Я бы до этого не додумался.</span> = Tôi chẳng đời nào nghĩ ra đến mức đó.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">задумать (СВ)</span></td>
                    <td>
                      1. Dự định, ấp ủ: <span className="ex">Мы задумали поездку.</span><br/>
                      2. Nghĩ chọn: <span className="ex">Задумайте число.</span> = Hãy nghĩ sẵn một con số.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">задуматься (СВ)</span></td>
                    <td>
                      1. Trầm ngâm, suy tư: <span className="ex">Он задумался над проблемой.</span><br/>
                      2. (Phủ định) Không ngần ngại: <span className="ex">Он không задумался сказать правду.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">надумать (СВ)</span></td>
                    <td>
                      <span className="tag tag-razg">razg.</span> Sau khi nghĩ thì quyết định.<br/>
                      <span className="ex">Он надумал уехать.</span> = Anh ấy quyết định ra đi.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">одуматься (СВ)</span></td>
                    <td>
                      Tỉnh ra, nghĩ lại và đổi ý sau khi nhận ra sai.<br/>
                      <span className="ex">Он хотел уйти, но потом одумался.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">обдумать (СВ)</span></td>
                    <td>
                      Cân nhắc kỹ, suy xét kỹ trước khi quyết định.<br/>
                      <span className="ex">Надо обдумать ответ.</span> = Cần suy nghĩ kỹ câu trả lời.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">передумать (СВ)</span></td>
                    <td>
                      1. Nghĩ qua rất nhiều điều: <span className="ex">Он передумал обо всём.</span><br/>
                      2. Đổi ý: <span className="ex">Ты не передумаешь?</span> = Bạn sẽ không đổi ý chứ?
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">подумать (СВ)</span></td>
                    <td>
                      Nghĩ một lúc, cân nhắc ngắn.<br/>
                      <span className="ex">Он подумал с минуту.</span> = Anh ấy suy nghĩ khoảng một phút.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">придумать (СВ)</span></td>
                    <td>
                      Nghĩ ra, sáng tạo ra, tìm ra cách làm.<br/>
                      <span className="ex">Придумай что-нибудь интересное.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">продумать (СВ)</span></td>
                    <td>
                      1. Suy tính kỹ lưỡng: <span className="ex">Надо продумать план.</span><br/>
                      2. Nghĩ rất lâu: <span className="ex">Он продумал всю ночь.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">раздумать (СВ)</span></td>
                    <td>
                      1. Lưỡng lự: <span className="ex">Хватит раздумывать.</span><br/>
                      2. Đổi ý, bỏ ý định: <span className="ex">Он раздумал ехать.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="theory-note">
              <h4>📌 Phân biệt nhanh:</h4>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.9rem'}}>
                <div>• <strong>подумать</strong>: nghĩ một chút</div>
                <div>• <strong>обдумать</strong>: cân nhắc kỹ</div>
                <div>• <strong>продумать</strong>: tính kỹ toàn bộ</div>
                <div>• <strong>задуматься</strong>: trầm ngâm / suy tư</div>
                <div>• <strong>вдуматься</strong>: đào sâu vào ý nghĩa</div>
                <div>• <strong>передумать</strong>: đổi ý</div>
                <div>• <strong>раздумать</strong>: bỏ ý định</div>
                <div>• <strong>придумать</strong>: nghĩ ra</div>
                <div>• <strong>выдумать</strong>: bịa ra</div>
                <div>• <strong>додуматься</strong>: nghĩ ra đến mức...</div>
                <div>• <strong>одуматься</strong>: tỉnh ngộ</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
