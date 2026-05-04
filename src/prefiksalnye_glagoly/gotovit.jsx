import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const gotovitCards = [
  { verb: 'заготавливать — заготовить', meaning: 'Chuẩn bị trước để dự trữ\n(giấy tờ, củi cho mùa đông)' },
  { verb: 'изготавливать (изготовлять) — изготовить', meaning: 'Chế tạo, sản xuất ra' },
  { verb: 'наготавливать — наготовить', meaning: 'Nấu/chuẩn bị với số lượng lớn' },
  { verb: '(наготовиться СВ)', meaning: 'Cố tình làm phiền (vd: cứ phải nấu mãi không hết cho các vị)' },
  { verb: 'подготавливать (подготовлять) — подготовить', meaning: '1) Chuẩn bị, sắp xếp\n2) Dạy/huấn luyện ai\n3) Báo trước, thông báo (để chuẩn bị tâm lý)' },
  { verb: 'готовить НСВ', meaning: '1) Chuẩn bị, làm sẵn\n2) Làm bài vở\n3) Nấu ăn' },
  { verb: 'готовиться НСВ', meaning: '1) Chuẩn bị cho bản thân\n2) Sắp xảy ra (không dùng ở ngôi 1, 2)' },
  { verb: 'приготовить СВ', meaning: 'Nấu nướng, chuẩn bị (Động từ СВ vạn năng, dùng được với mọi đối tượng)' },
  { verb: 'приготовиться СВ', meaning: 'Chuẩn bị tâm thế/hành động' },
  { verb: 'сготовить СВ', meaning: 'Nấu xong (thức ăn)' },
  { verb: '(уготовить СВ)', meaning: '(cũ) Tương đương приготовить / подготовить (dành cho số phận)' }
];

export default function GotovitTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом ГОТОВИТЬ</h3>
          <span className="subtitle">Động từ phái sinh từ ГОТОВИТЬ — nấu, chuẩn bị</span>
        </div>

        <div className="exercise-tabs" style={{marginBottom: '1.5rem', justifyContent: 'center'}}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={gotovitCards} />
        ) : (
          <>
            <div className="verb-list-box">
              <strong>Danh sách:</strong> заготовить, изготовить, наготовить, (наготовиться), подготовить, готовить(ся), приготовить, приготовиться, сготовить, (уготовить)
            </div>

            <div className="theory-table-container">
          <table className="theory-table">
            <thead>
              <tr>
                <th>Cặp động từ</th>
                <th>Nghĩa & Ví dụ (Nga–Việt)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="verb-name">заготавливать — заготовить</span></td>
                <td>
                  <div className="verb-meaning">
                    Chuẩn bị trước để dự trữ
                    <div className="example-block">
                      заготовить справки; дрова на зиму<br/>
                      — chuẩn bị giấy tờ; củi cho mùa đông
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">изготавливать (изготовлять) — изготовить</span></td>
                <td>
                  <div className="verb-meaning">
                    Chế tạo, sản xuất ra
                    <div className="example-block">
                      изготовить макет корабля — chế tạo mô hình tàu thủy
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">наготавливать — наготовить</span></td>
                <td>
                  <div className="verb-meaning">
                    <span className="tag tag-sb">thường dùng СВ</span> Nấu/chuẩn bị với số lượng lớn
                    <div className="example-block">
                      наготовить еды — nấu nhiều đồ ăn
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">(наготовиться СВ)</span></td>
                <td>
                  <div className="verb-meaning">
                    <span className="tag tag-razg">razg.</span> Cố tình làm phiền: 
                    <div className="example-block">
                      не наготовишься на вас еды — cứ phải nấu mãi không hết cho các vị
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">подготавливать (подготовлять) — подготовить</span></td>
                <td>
                  <div className="verb-meaning">
                    1) Chuẩn bị, sắp xếp: <span className="ex">подготовить доклад</span><br/>
                    2) Dạy/huấn luyện ai: <span className="ex">подготовить друга к экзаменам</span><br/>
                    3) Báo trước, thông báo: <span className="ex">подготовить друга к неприятному известию</span>
                    <div className="example-block">
                      — chuẩn bị tâm lý cho bạn trước tin xấu
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">готовить НСВ</span></td>
                <td>
                  <div className="verb-meaning">
                    1) (СВ: подготовить, приготовить) Chuẩn bị, làm sẵn: <span className="ex">готовить машину</span><br/>
                    2) (СВ: подготовить, приготовить) Làm bài vở: <span className="ex">готовить уроки</span><br/>
                    3) (СВ: подготовить, приготовить) Nấu ăn: <span className="ex">готовить суп</span><br/>
                    4) (СВ: сготовить) Nấu xong: <span className="ex">готовить обед</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">готовиться НСВ</span></td>
                <td>
                  <div className="verb-meaning">
                    1) (СВ: подготовиться, приготовиться) Chuẩn bị cho bản thân: <span className="ex">готовиться к лекции</span><br/>
                    2) (1 và 2 лицо không dùng) Sắp xảy ra: <span className="ex">готовятся важные события</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">приготовить СВ</span></td>
                <td>
                  <div className="verb-meaning">
                    Động từ СВ vạn năng: nấu nướng, chuẩn bị
                    <div className="example-block">
                      приготовить суп / сюрприз / доклад — nấu súp / chuẩn bị bất ngờ / chuẩn bị báo cáo
                    </div>
                    <small className="note">Phổ quát nhất trong nhóm — dùng được với mọi đối tượng</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">приготовиться СВ</span></td>
                <td>
                  <div className="verb-meaning">
                    Chuẩn bị tâm thế/hành động: <span className="ex">приготовиться к наказанию</span>
                    <div className="example-block">
                      — chuẩn bị tinh thần chịu phạt
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">сготовить СВ</span></td>
                <td>
                  <div className="verb-meaning">
                    Nấu xong (thức ăn): <span className="ex">сготовить обед</span>
                    <div className="example-block">
                      <strong>Lưu ý:</strong> <em>подготовить суп</em> — SAI; dùng <em>приготовить / сготовить суп</em>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">(уготовить СВ)</span></td>
                <td>
                  <div className="verb-meaning">
                    <span className="tag tag-ust">cũ</span> Tương đương приготовить / подготовить
                    <div className="example-block">
                      уготовить печальную участь — dành cho số phận buồn thảm
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="theory-note">
          <h4>💡 Lưu ý quan trọng về kết hợp từ (Lexical Collocation):</h4>
          <ul>
            <li>• <strong>суп</strong> — готовить / <strong>приготовить</strong> / сготовить ✓ | <em>подготовить суп</em> ✗</li>
            <li>• <strong>доклад / ученика</strong> — готовить / подготовить / приготовить ✓</li>
            <li>• Prefix <strong>под-</strong> nghiêng về văn phong <span className="tag tag-ofic">chính thức</span> hơn prefix <strong>при-</strong></li>
          </ul>
        </div>
        </>
        )}
      </div>
    </div>
  );
}
