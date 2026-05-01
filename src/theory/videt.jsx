import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const videtCards = [
  { verb: 'видеть (НСВ)', meaning: '1) Nhìn thấy\n2) Khả năng thị giác\n3) Chứng kiến\n4) Thấy ra lỗi' },
  { verb: 'увидеть (СВ)', meaning: 'Vừa nhìn thấy' },
  { verb: 'видеться (НСВ)', meaning: 'Gặp nhau' },
  { verb: 'повидаться (СВ)', meaning: 'Gặp lại / Gặp một thời gian ngắn' },
  { verb: 'перевидать (СВ)', meaning: 'Đã thấy rất nhiều, từng trải nhiều' },
  { verb: 'предвидеть (НСВ)', meaning: 'Dự đoán trước, lường trước' },
  { verb: 'предвидеться (НСВ)', meaning: 'Được dự báo sẽ có (vô nhân xưng)' },
  { verb: 'привидеться (СВ)', meaning: 'Hiện ra trong tưởng tượng, mơ thấy' },
  { verb: 'завидеть (СВ)', meaning: 'Trông thấy từ xa, chợt thấy' },
  { verb: 'свидеться (СВ)', meaning: 'Gặp lại nhau' }
];

export default function VidetTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом ВИДЕТЬ</h3>
          <span className="subtitle">Động từ phái sinh từ ВИДЕТЬ — nhìn thấy</span>
        </div>

        <div className="exercise-tabs" style={{marginBottom: '1.5rem', justifyContent: 'center'}}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={videtCards} />
        ) : (
          <>
            <div className="verb-list-box">
              <strong>Danh sách:</strong> видеть, увидеть, видеться, повидаться, перевидать, предвидеть, предвидеться, привидеться, завидеть, свидеться
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
                    <td><span className="verb-name">видеть (НСВ)</span></td>
                    <td>
                      1. Có khả năng nhìn: <span className="ex">Он плохо видит.</span> = Anh ấy nhìn kém.<br/>
                      2. Nhìn thấy bằng mắt: <span className="ex">Я вижу лес.</span> = Tôi nhìn thấy khu rừng.<br/>
                      3. Gặp ai: <span className="ex">Я давно не видел друга.</span> = Tôi lâu rồi không gặp bạn.<br/>
                      4. Trải qua, chứng kiến: <span className="ex">Он многое видел в жизни.</span> = Anh ấy đã chứng kiến nhiều điều.<br/>
                      5. Nhận ra ý thức: <span className="ex">Я вижу свою ошибку.</span> = Tôi thấy ra lỗi của mình.
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">смотреть (НСВ) vs видеть</span></td>
                    <td>
                      <strong>смотреть</strong> = nhìn (hành động, quá trình): <span className="ex">Я смотрю на море.</span> (Đang nhìn biển)<br/>
                      <strong>видеть</strong> = thấy (kết quả cảm nhận): <span className="ex">Я вижу море.</span> (Nhìn thấy biển)
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">видеться / увидеться</span></td>
                    <td>
                      Gặp nhau: <span className="ex">Мы с ним давно không виделись.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">повидаться / свидеться</span></td>
                    <td>
                      Gặp lại nhau (thường mang sắc thái văn phong): <span className="ex">Даст Бог, когда-нибудь свидимся.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">предвидеть (НСВ)</span></td>
                    <td>
                      Lường trước điều gì (+ đối cách): <span className="ex">Предвижу некоторые осложнения.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">предвидеться (НСВ)</span></td>
                    <td>
                      (Vô nhân xưng) Điều gì được dự báo (+ cách 1): <span className="ex">Ничего неожиданного не предвидится.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">привидеться (СВ)</span></td>
                    <td>
                      Tưởng như thấy / Mơ thấy: <span className="ex">Мне привиделось что-то во сне.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">завидеть (СВ)</span></td>
                    <td>
                      Chợt thấy từ xa: <span className="ex">Завидев хозяина, собака залаяла.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">перевидать (СВ)</span></td>
                    <td>
                      Đã thấy rất nhiều: <span className="ex">Многое ông ấy перевидал на своём веку.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="theory-note">
              <h4>💡 Mẫu dùng cần nhớ:</h4>
              <ul>
                <li>• <strong>видеть кого/что</strong> + đối cách: thấy ai/cái gì</li>
                <li>• <strong>видеться с кем</strong> + tạo cách: gặp ai</li>
                <li>• <strong>предвидеть что</strong>: lường trước điều gì</li>
                <li>• <strong>предвидеться что</strong>: điều gì được dự báo</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
