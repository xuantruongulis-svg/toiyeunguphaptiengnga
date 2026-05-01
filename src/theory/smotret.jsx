import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const smotretCards = [
  { verb: 'всматриваться — всмотреться', meaning: 'Nhìn chằm chằm, nhìn kỹ vào ai/cái gì\n(в глаза)' },
  { verb: 'высматривать — высмотреть', meaning: '1) Cố gắng nhìn thật kỹ mọi chi tiết\n2) Ngó tìm ai/cái gì (знакомого)' },
  { verb: 'досматривать — досмотреть', meaning: '1) Xem đến cùng, xem cho xong (фильм)\n2) Khám xét (товары на границе)' },
  { verb: 'засматриваться — засмотреться', meaning: 'Mải mê ngắm nhìn, nhìn đắm đuối\n(на девушку)' },
  { verb: 'насмотреться (СВ)', meaning: 'Xem thỏa thích, ngắm đủ\n(разных фильмов)' },
  { verb: 'надсматривать (НСВ)', meaning: 'Giám sát, trông coi\n(за рабочими)' },
  { verb: 'недосмотреть (СВ)', meaning: 'Không chú ý đầy đủ, lơ là khi trông nom\n(за сыном)' },
  { verb: 'осматривать — осмотреть', meaning: '1) Tham quan, xem xét tổng thể (выставку)\n2) Khám bệnh, kiểm tra (больного)' },
  { verb: 'осматриваться — осмотреться', meaning: '1) Nhìn quanh\n2) Làm quen với môi trường mới' },
  { verb: 'пересматривать — пересмотреть', meaning: '1) Xem lại (phim)\n2) Xem xét lại (dự án)' },
  { verb: 'смотреть — посмотреть', meaning: 'Nhìn, xem, khám bệnh, chăm sóc (за больным), noi gương' },
  { verb: 'смотреться — посмотреться', meaning: '1) Soi mình (в зеркало)\n2) Trông bắt mắt, xem có vẻ hay' },
  { verb: 'подсматривать — подсмотреть', meaning: 'Nhìn lén, xem trộm\n(в щель)' },
  { verb: 'предусматривать — предусмотреть', meaning: 'Lường trước, dự trù\n(все возможные последствия)' },
  { verb: 'присматривать — присмотреть', meaning: '1) Trông nom (за ребёнком)\n2) Nhắm được, chọn được (новое пальто)' },
  { verb: 'присматриваться — присмотреться', meaning: 'Quan sát kỹ để hiểu, làm quen, thích nghi\n(к людям)' },
  { verb: 'просматривать — просмотреть', meaning: '1) Xem lướt, đọc lướt\n2) Bỏ sót (lỗi)' },
  { verb: 'просматриваться (НСВ)', meaning: 'Có thể nhìn rõ (không gian)' },
  { verb: 'рассматривать — рассмотреть', meaning: '1) Nhìn kỹ để thấy chi tiết\n2) Xem xét, thảo luận' },
  { verb: 'рассматривать (НСВ)', meaning: 'Đánh giá, nhìn nhận' },
  { verb: 'усматривать — усмотреть', meaning: '1) Theo dõi sát sao (за детьми)\n2) Nhận thấy, phát hiện ra (в этом неуважение)' }
];

export default function SmotretTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом СМОТРЕТЬ</h3>
          <span className="subtitle">Các động từ phái sinh từ СМОТРЕТЬ — nhìn, xem</span>
        </div>

        <div className="exercise-tabs" style={{marginBottom: '1.5rem', justifyContent: 'center'}}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={smotretCards} />
        ) : (
          <>
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
                    <td><span className="verb-name">всматриваться — всмотреться</span></td>
                    <td>
                      Nhìn chằm chằm, nhìn kỹ vào ai/cái gì: <span className="ex">в глаза</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">высматривать — высмотреть</span></td>
                    <td>
                      1) (khẩu ngữ) cố gắng nhìn thật kỹ: <span className="ex">все детали</span><br/>
                      2) cố gắng nhìn thấy, ngó tìm: <span className="ex">знакомого</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">досматривать — досмотреть</span></td>
                    <td>
                      1) xem đến cùng: <span className="ex">фильм</span><br/>
                      2) (chính thức) khám xét: <span className="ex">товары на границе</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">засматриваться — засмотреться</span></td>
                    <td>
                      Mải mê ngắm nhìn, nhìn đắm đuối: <span className="ex">на девушку</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">насмотреться (СВ)</span></td>
                    <td>
                      Xem thỏa thích, ngắm đủ: <span className="ex">разных фильмов</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">надсматривать (НСВ)</span></td>
                    <td>
                      (khẩu ngữ) giám sát, trông coi: <span className="ex">за рабочими</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">недосмотреть (СВ)</span></td>
                    <td>
                      Không chú ý đầy đủ, lơ là khi trông nom: <span className="ex">за сыном</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">осматривать — осмотреть</span></td>
                    <td>
                      1) xem xét xung quanh, tham quan: <span className="ex">выставку</span><br/>
                      2) khám bệnh, kiểm tra: <span className="ex">больного</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">осматриваться — осмотреться</span></td>
                    <td>
                      1) nhìn quanh mình: <span className="ex">в комнате</span><br/>
                      2) làm quen với môi trường mới: <span className="ex">в новом коллективе</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">пересматривать — пересмотреть</span></td>
                    <td>
                      1) xem lại (nhiều thứ): <span className="ex">все фильмы</span><br/>
                      2) (nghĩa bóng) xem xét lại: <span className="ex">проект</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">смотреть — посмотреть</span></td>
                    <td>
                      1) hướng mắt nhìn: <span className="ex">в окно, на улицу</span><br/>
                      2) xem, thưởng thức: <span className="ex">выставку</span><br/>
                      3) khám bệnh: <span className="ex">больного</span><br/>
                      4) chăm sóc, trông nom: <span className="ex">за больным</span><br/>
                      5) noi gương: <span className="ex">на старших</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">смотреться — посмотреться</span></td>
                    <td>
                      1) soi mình: <span className="ex">в зеркало</span><br/>
                      2) (СВ) (không dùng ở ngôi 1 và 2) về phim, kịch, đồ vật - có vẻ hay, trông bắt mắt
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">подсматривать — подсмотреть</span></td>
                    <td>
                      Nhìn lén, xem trộm: <span className="ex">в щель</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">предусматривать — предусмотреть</span></td>
                    <td>
                      Lường trước, dự trù: <span className="ex">все возможные последствия</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">присматривать — присмотреть</span></td>
                    <td>
                      1) trông nom, để ý: <span className="ex">за ребёнком</span><br/>
                      2) (khẩu ngữ) nhắm được, chọn được để mua: <span className="ex">новое пальто</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">присматриваться — присмотреться</span></td>
                    <td>
                      Quan sát kỹ để hiểu, làm quen, thích nghi: <span className="ex">к людям</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">просматривать — просмотреть</span></td>
                    <td>
                      1) xem lướt, làm quen với: <span className="ex">фильм</span><br/>
                      2) đọc lướt qua: <span className="ex">статью</span><br/>
                      3) bỏ sót: <span className="ex">ошибку</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">просматриваться (НСВ)</span></td>
                    <td>
                      Về không gian: có thể nhìn rõ, được quan sát rõ: <span className="ex">дорога</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">рассматривать — рассмотреть</span></td>
                    <td>
                      1) nhìn kỹ để thấy chi tiết: <span className="ex">надпись</span><br/>
                      2) xem xét, phân tích, thảo luận: <span className="ex">вопрос</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">*рассматривать (НСВ)</span></td>
                    <td>
                      Đánh giá, nhìn nhận: <span className="ex">эти слова как оскорбление</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">усматривать — усмотреть</span></td>
                    <td>
                      1) (khẩu ngữ) theo dõi sát sao, trông chừng: <span className="ex">за детьми</span><br/>
                      2) (chính thức) nhận thấy, phát hiện ra: <span className="ex">в этом неуважение</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="theory-note">
              <h4>💡 Chú ý các mẫu câu:</h4>
              <ul>
                <li>• <strong>смотреть за кем/чем</strong>: chăm sóc, trông coi (за больным)</li>
                <li>• <strong>смотреть на кого/что</strong>: nhìn vào (в окно), noi gương (на старших)</li>
                <li>• <strong>присматривать за кем/чем</strong>: trông nom (за ребёнком)</li>
                <li>• <strong>осматривать / рассмотреть что</strong>: luôn đi với tân ngữ trực tiếp (выставку, надпись)</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
