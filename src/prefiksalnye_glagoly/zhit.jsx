import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const zhitCards = [
  { verb: '(вживаться — вжиться)', meaning: 'Nhập tâm, hòa mình vào' },
  { verb: 'выживать — выжить', meaning: '1) Sống sót\n2) Đuổi khéo' },
  { verb: 'доживать — дожить', meaning: '1) Sống đến lúc nào đó\n2) Ở hết thời hạn còn lại' },
  { verb: 'заживать — зажить', meaning: '1) Bắt đầu cuộc sống mới\n2) Vết thương lành' },
  { verb: 'заживаться — зажиться', meaning: 'Ở lâu hơn bình thường' },
  { verb: '*изживать — изжить', meaning: 'Loại bỏ cái bất lợi' },
  { verb: '*наживать — нажить', meaning: '1) Tích lũy, kiếm được\n2) Chuốc lấy điều xấu' },
  { verb: 'наживаться — нажиться', meaning: '1) Làm giàu\n2) Ở đủ lâu' },
  { verb: '*оживать — ожить', meaning: '1) Sống lại, hồi sinh\n2) Tràn đầy sinh lực' },
  { verb: 'обживать — обжить', meaning: 'Biến thành nơi ở tiện nghi' },
  { verb: 'обживаться — обжиться', meaning: 'Quen với môi trường mới' },
  { verb: 'отживать — отжить', meaning: '1) Kết thúc cuộc đời\n2) Trở nên lỗi thời' },
  { verb: 'переживать — пережить', meaning: '1) Sống lâu hơn ai/gì\n2) Trải qua, chịu đựng\n3) Lo lắng' },
  { verb: 'пожить', meaning: 'Sống một thời gian ngắn' },
  { verb: 'жить', meaning: '1) Tồn tại, có mặt\n2) Tự nuôi sống\n3) Có quan hệ tình cảm' },
  { verb: 'житься', meaning: 'Vô nhân xưng: diễn tả cuộc sống như thế nào' },
  { verb: '*приживать — прижить', meaning: 'Sinh con ngoài giá thú' },
  { verb: '*приживаться — прижиться', meaning: 'Thích nghi với hoàn cảnh mới' },
  { verb: 'прожить', meaning: '1) Sống một khoảng thời gian dài\n2) Tiêu hết tiền' },
  { verb: 'проживать', meaning: 'Cư trú' },
  { verb: '(*проживаться — прожиться)', meaning: 'Tiêu hết tiền, hết vốn' },
  { verb: '*разживаться — разжиться', meaning: 'Làm giàu/kiếm được gì' },
  { verb: 'сживать — сжить', meaning: 'Tạo điều kiện không thể ở được' },
  { verb: 'сживаться — сжиться', meaning: 'Quen chịu đựng' },
  { verb: 'уживаться — ужиться', meaning: 'Sống hòa thuận với ai' }
];

export default function ZhitTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом ЖИТЬ</h3>
          <span className="subtitle">Động từ phái sinh từ ЖИТЬ — sống</span>
        </div>

        <div className="exercise-tabs" style={{marginBottom: '1.5rem', justifyContent: 'center'}}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={zhitCards} />
        ) : (
          <>
            <div className="verb-list-box">
              <strong>Danh sách:</strong> (вжиться), выжить, дожить, зажить, зажиться, *изжить, *нажить, нажиться, *ожить, обжить, обжиться, отжить, пережить, пожить, жить, житься, *прижить, *прижиться, прожить, *(прожиться), *разжиться, сжить, сжиться, ужиться<br/>
              <small className="note">* = ý nghĩa mới / hiếm; () = rất hiếm</small>
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
                <td><span className="verb-name">(вживаться — вжиться)</span></td>
                <td>Nhập tâm, hòa mình vào: <span className="ex">вжиться в роль (об актёре)</span><br/><span className="ex">— diễn viên nhập vai hoàn toàn</span></td>
              </tr>
              <tr>
                <td><span className="verb-name">выживать — выжить</span></td>
                <td>
                  1) Sống sót: <span className="ex">выжить после ранения</span> — sống sót sau vết thương<br/>
                  2) <span className="tag tag-razg">nói</span> Đuổi khéo: <span className="ex">выжить со службы</span> — bị đẩy khỏi chỗ làm
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">доживать — дожить</span></td>
                <td>
                  1) Sống đến lúc nào đó: <span className="ex">дожить до заморозков</span><br/>
                  2) Ở hết thời hạn còn lại: <span className="ex">дожить неделю trong санатории</span>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">заживать — зажить</span></td>
                <td>
                  1) (chỉ СВ) Bắt đầu cuộc sống mới: <span className="ex">зажить хорошо</span><br/>
                  *2) (không dùng ngôi 1, 2) Vết thương lành: <span className="ex">зажила царапина</span>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">заживаться — зажиться</span></td>
                <td><span className="tag tag-sb">thường СВ</span> Ở lâu hơn bình thường: <span className="ex">зажиться на даче</span> — ở lại nhà vườn quá lâu</td>
              </tr>
              <tr>
                <td><span className="verb-name">*изживать — изжить</span></td>
                <td>Loại bỏ cái bất lợi: <span className="ex">изжить недостатки</span> — loại bỏ những thiếu sót</td>
              </tr>
              <tr>
                <td><span className="verb-name">*наживать — нажить</span></td>
                <td>
                  1) Tích lũy, kiếm được: <span className="ex">нажить много денег</span><br/>
                  2) <span className="tag tag-razg">nói</span> Chuốc lấy điều xấu: <span className="ex">нажить ревматизм</span> — mắc bệnh thấp khớp
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">наживаться — нажиться</span></td>
                <td>
                  *1) Làm giàu: <span className="ex">нажиться на торговле оружием</span><br/>
                  2) <span className="tag tag-razg">nói</span> Ở đủ lâu: <span className="ex">нажился на даче</span> — ở đủ rồi
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">*оживать — ожить</span></td>
                <td>
                  1) Sống lại, hồi sinh: <span className="ex">ожить (о мертвеце)</span><br/>
                  2) Tràn đầy sinh lực: <span className="ex">природа ожила весной</span> — thiên nhiên hồi sinh
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">обживать — обжить</span></td>
                <td><span className="tag tag-razg">nói</span> Biến thành nơi ở tiện nghi: <span className="ex">обжить новую квартиру</span></td>
              </tr>
              <tr>
                <td><span className="verb-name">обживаться — обжиться</span></td>
                <td><span className="tag tag-razg">nói</span> Quen với môi trường mới: <span className="ex">обжиться в деревне</span></td>
              </tr>
              <tr>
                <td><span className="verb-name">отживать — отжить</span></td>
                <td>
                  1) Kết thúc cuộc đời: <span className="ex">отжить свой век</span><br/>
                  2) Trở nên lỗi thời: <span className="ex">этот обычай отжил</span>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">переживать — пережить</span></td>
                <td>
                  1) Sống lâu hơn ai/gì: <span className="ex">пережить всех друзей</span><br/>
                  *2) Trải qua, chịu đựng: <span className="ex">пережить радость</span><br/>
                  *3) (chỉ НСВ) <span className="tag tag-razg">nói</span> Lo lắng: <span className="ex">переживать за родных</span>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">пожить СВ</span></td>
                <td>Sống một thời gian ngắn: <span className="ex">пожить за городом</span></td>
              </tr>
              <tr>
                <td><span className="verb-name">жить НСВ</span></td>
                <td>
                  1) Tồn tại, có mặt: <span className="ex">жить долго (о легенде)</span><br/>
                  2) Tự nuôi sống: <span className="ex">жить своим трудом; на пенсию</span><br/>
                  *3) <span className="tag tag-razg">nói</span> Có quan hệ tình cảm
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">житься НСВ</span></td>
                <td><span className="tag tag-razg">nói</span> Vô nhân xưng: <span className="ex">живётся весело</span> — cuộc sống thật vui</td>
              </tr>
              <tr>
                <td><span className="verb-name">*приживать — прижить</span></td>
                <td><span className="tag tag-prost">bình dân</span> Sinh con ngoài giá thú: <span className="ex">прижить ребёнка</span></td>
              </tr>
              <tr>
                <td><span className="verb-name">*приживаться — прижитьcя</span></td>
                <td>Thích nghi với hoàn cảnh mới: <span className="ex">прижиться на новом месте</span></td>
              </tr>
              <tr>
                <td><span className="verb-name">прожить СВ</span></td>
                <td>
                  1) Sống một khoảng thời gian dài: <span className="ex">прожить сто лет</span><br/>
                  *2) Tiêu hết tiền: <span className="ex">прожить много денег</span>
                </td>
              </tr>
              <tr>
                <td><span className="verb-name">проживать НСВ</span></td>
                <td><span className="tag tag-ofic">hành chính</span> Cư trú: <span className="ex">проживать по адресу</span></td>
              </tr>
              <tr>
                <td><span className="verb-name">(*проживаться — прожиться)</span></td>
                <td>Tiêu hết tiền, hết vốn: <span className="ex">прожиться в командировке</span></td>
              </tr>
              <tr>
                <td><span className="verb-name">*разживаться — разжиться</span></td>
                <td><span className="tag tag-prost">bình dân</span> Làm giàu/kiếm được gì: <span className="ex">разжиться деньжатами</span></td>
              </tr>
              <tr>
                <td><span className="verb-name">сживать — сжить</span></td>
                <td><span className="tag tag-razg">nói</span> Tạo điều kiện không thể ở được: <span className="ex">сжить с квартиры</span></td>
              </tr>
              <tr>
                <td><span className="verb-name">сживаться — сжиться</span></td>
                <td>Quen chịu đựng: <span className="ex">сжиться со своим горем</span> — quen dần nỗi đau</td>
              </tr>
              <tr>
                <td><span className="verb-name">уживаться — ужиться</span></td>
                <td>Sống hòa thuận với ai: <span className="ex">ужиться с соседями</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="theory-note">
          <h4>📌 Lưu ý phong cách:</h4>
          <ul>
            <li>• <span className="tag tag-razg">разг.</span> = ngôn ngữ nói | <span className="tag tag-prost">прост.</span> = ngôn ngữ bình dân | <span className="tag tag-ofic">офиц.</span> = hành chính</li>
            <li>• Dấu <strong>*</strong> = nghĩa phát sinh mới, cần chú ý đặc biệt</li>
            <li>• <strong>НСВ</strong> = không hoàn thành | <strong>СВ</strong> = hoàn thành</li>
          </ul>
        </div>
        </>
        )}
      </div>
    </div>
  );
}
