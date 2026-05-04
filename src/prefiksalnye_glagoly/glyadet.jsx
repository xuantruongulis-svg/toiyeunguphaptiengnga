import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const glyadetCards = [
  { verb: 'взглядывать — взглянуть', meaning: '1) Nhìn nhanh, liếc nhìn vào đâu hoặc ai: в окно\n2) Đánh giá, nhìn nhận: на дело просто' },
  { verb: 'выглядеть (НСВ)', meaning: 'Có vẻ ngoài, trông như thế nào (đi với Tính từ cách 5): усталым, прекрасно' },
  { verb: 'выглядывать — выглянуть', meaning: 'Ngó ra, thò đầu ra, ló ra từ đâu đó: из окна, из-за туч' },
  { verb: 'заглядывать — заглянуть', meaning: '1) Nhìn nhanh vào bên trong: в словарь\n2) Ghé thăm chốc lát: в гости, к другу' },
  { verb: 'оглядываться — оглянуться', meaning: '(nghĩa đen và bóng) Ngoảnh lại phía sau; nhìn lại quá khứ: на своё прошлое' },
  { verb: 'переглядываться — переглянуться', meaning: 'Đưa mắt nhìn nhau, trao đổi ánh mắt: с соседом' },
  { verb: 'приглянуться (СВ)', meaning: 'Vừa mắt, lọt vào mắt xanh của ai (кому-либо): эта вещь мне приглянулась' },
  { verb: 'проглядывать — проглянуть', meaning: 'Lộ ra, xuất hiện (thiên nhiên hoặc cảm xúc): луна проглянула, беспокойство проглядывало' },
  { verb: 'глянуть (СВ)', meaning: 'Liếc nhìn, nhìn nhanh một lần: в окно, исподлобья' },
];

export default function GlyadetTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом ГЛЯДЕТЬ</h3>
          <span className="subtitle">Các động từ phái sinh từ ГЛЯДЕТЬ — nhìn, ngó (khẩu ngữ)</span>
        </div>

        <div className="theory-intro-box" style={{background: 'rgba(99,102,241,0.07)', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '1.5rem', borderLeft: '4px solid #6366f1'}}>
          <p style={{margin: 0, lineHeight: '1.7'}}>
            Các động từ phái sinh từ <strong>ГЛЯДЕТЬ</strong> gần như trùng nghĩa với các động từ phái sinh từ <strong>СМОТРЕТЬ</strong>, nhưng thuộc về <em>văn phong khẩu ngữ (разговорный язык)</em>. Ví dụ: <em>посмотри на меня ↔ погляди на меня</em>. Trong văn phong hành chính chính thức chỉ dùng <strong>СМОТРЕТЬ</strong> (досмотреть багаж, рассмотреть проблему). Tuy nhiên, một số động từ phái sinh từ ГЛЯДЕТЬ có nghĩa riêng biệt đặc trưng.
          </p>
        </div>

        <div className="exercise-tabs" style={{marginBottom: '1.5rem', justifyContent: 'center'}}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={glyadetCards} />
        ) : (
          <>
            <div className="theory-table-container">
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>Động từ</th>
                    <th>Nghĩa &amp; Ví dụ (Nga–Việt)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="verb-name">взглядывать — взглянуть</span></td>
                    <td>
                      1) liếc nhìn, nhìn nhanh vào đâu/ai: <span className="ex">в окно, на девушку</span><br/>
                      2) nhìn nhận, đánh giá: <span className="ex">взглянуть на дело просто</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">выглядеть (НСВ)</span></td>
                    <td>
                      Có vẻ ngoài ra sao, trông như thế nào (+ Tính từ cách 5 hoặc трáng từ): <span className="ex">выглядеть усталым, прекрасно</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">выглядывать — выглянуть</span></td>
                    <td>
                      Ngó ra, thò đầu ra, ló ra từ đâu đó: <span className="ex">из окна, из-за туч, из-под кровати</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">заглядывать — заглянуть</span></td>
                    <td>
                      1) nhìn nhanh vào bên trong: <span className="ex">в словарь, в щель</span><br/>
                      2) ghé thăm chốc lát: <span className="ex">в гости, к другу</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">оглядываться — оглянуться</span></td>
                    <td>
                      (nghĩa đen) ngoảnh lại phía sau: <span className="ex">назад</span><br/>
                      (nghĩa bóng) nhìn lại quá khứ: <span className="ex">на своё прошлое</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">переглядываться — переглянуться</span></td>
                    <td>
                      Đưa mắt nhìn nhau, trao đổi ánh mắt: <span className="ex">с соседом</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">*приглянуться (СВ)</span></td>
                    <td>
                      Vừa mắt, lọt vào mắt xanh của ai: <span className="ex">Эта вещь мне приглянулась.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">*проглядывать — проглянуть</span></td>
                    <td>
                      Lộ ra, xuất hiện, toát lên: <span className="ex">Проглянула луна. / В её взгляде проглядывало беспокойство.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">глянуть (СВ)</span></td>
                    <td>
                      Liếc nhìn, nhìn nhanh một lần: <span className="ex">в окно, исподлобья</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="theory-note">
              <h4>💡 Chú ý:</h4>
              <ul>
                <li>• <strong>выглядеть + Tính từ cách 5</strong>: <em>выглядеть усталым, больным, хорошо</em></li>
                <li>• <strong>оглянуться</strong> (nhìn lại): nghĩa đen → ngoảnh lại; nghĩa bóng → nhìn lại quá khứ của mình</li>
                <li>• <strong>приглянуться кому</strong>: đi với Dative (cách 3) — <em>Она мне приглянулась</em></li>
                <li>• <strong>заглянуть к кому / в гости</strong>: ghé thăm; <strong>заглянуть в словарь</strong>: tra cứu</li>
                <li>• Động từ gốc ГЛЯДЕТЬ thường thay thế cho СМОТРЕТЬ trong <strong>khẩu ngữ</strong>, nhưng không dùng trong văn phong hành chính</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
