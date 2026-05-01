import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const skazatCards = [
  { verb: 'высказывать — высказать', meaning: 'Diễn đạt bằng lời, bày tỏ: высказать мысль, мнение, предложение' },
  { verb: 'высказываться — высказаться', meaning: 'Bày tỏ ý kiến của mình về điều gì: высказаться по докладу, по этому вопросу' },
  { verb: 'досказывать — досказать', meaning: '(khẩu ngữ, thường СВ) kể nốt, nói cho xong: досказать сказку до конца' },
  { verb: 'сказываться — сказаться', meaning: '1) (thường СВ) tự xưng là ai: сказаться больным\n2) (ngôi 1 & 2 không dùng) có ảnh hưởng, tác động: сказаться на здоровье' },
  { verb: 'пересказывать — пересказать', meaning: '1) kể lại bằng lời của mình: пересказать текст\n2) (khẩu ngữ) kể chi tiết về nhiều thứ: пересказать новости' },
  { verb: 'подсказывать — подсказать', meaning: '1) nói nhỏ bí mật cho ai (trong thi cử): подсказать на экзамене другу\n2) (nghĩa bóng) gợi ý, mách nước: подсказать как поступить' },
  { verb: 'предсказывать — предсказать', meaning: 'Nói trước, tiên đoán: предсказать судьбу, будущее' },
  { verb: 'рассказывать — рассказать', meaning: 'Kể, tường thuật bằng lời: рассказать обо всём, о своей жизни' },
  { verb: 'рассказываться (НСВ)', meaning: '(ngôi 1 & 2 không dùng) có nội dung, nói về: В романе рассказывается о любви.' },
];

export default function SkazatTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом СКАЗАТЬ</h3>
          <span className="subtitle">Các động từ phái sinh từ СКАЗАТЬ — nói, kể</span>
        </div>

        <div className="exercise-tabs" style={{ marginBottom: '1.5rem', justifyContent: 'center' }}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={skazatCards} />
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
                    <td><span className="verb-name">высказывать — высказать</span></td>
                    <td>
                      Diễn đạt bằng lời, bày tỏ: <span className="ex">высказать мысль, мнение, предложение</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">высказываться — высказаться</span></td>
                    <td>
                      Bày tỏ ý kiến của mình về điều gì: <span className="ex">высказаться по докладу, по этому вопросу</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">досказывать — досказать</span></td>
                    <td>
                      (khẩu ngữ, thường СВ) kể nốt, nói cho đến hết: <span className="ex">досказать сказку до конца</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">сказываться — сказаться</span></td>
                    <td>
                      1) (thường СВ) tự xưng là ai đó: <span className="ex">сказаться больным</span><br/>
                      2) (ngôi 1 &amp; 2 không dùng) có ảnh hưởng, tác động lên: <span className="ex">Усталость сказалась на здоровье.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">пересказывать — пересказать</span></td>
                    <td>
                      1) kể lại bằng lời của mình: <span className="ex">пересказать текст, содержание фильма</span><br/>
                      2) (khẩu ngữ) kể tỉ mỉ về nhiều thứ: <span className="ex">пересказать все новости</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">подсказывать — подсказать</span></td>
                    <td>
                      1) nói nhỏ bí mật cho ai (trong thi cử): <span className="ex">подсказать на экзамене другу</span><br/>
                      2) (nghĩa bóng) gợi ý, mách nước, chỉ cách: <span className="ex">подсказать как поступить</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">предсказывать — предсказать</span></td>
                    <td>
                      Nói trước, tiên đoán: <span className="ex">предсказать судьбу, предсказать погоду</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">рассказывать — рассказать</span></td>
                    <td>
                      Kể, tường thuật bằng lời: <span className="ex">рассказать обо всём, рассказать о своей жизни</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">рассказываться (НСВ)</span></td>
                    <td>
                      (ngôi 1 &amp; 2 không dùng) được kể về, nội dung là: <span className="ex">В романе рассказывается о любви.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="theory-note">
              <h4>💡 Chú ý các cặp dễ nhầm:</h4>
              <ul>
                <li>• <strong>высказать что</strong> (bày tỏ điều gì) vs <strong>высказаться по чему</strong> (phát biểu ý kiến về điều gì — phản thân)</li>
                <li>• <strong>подсказать другу</strong> (mách bài, nhắc nhở) vs <strong>подсказать как поступить</strong> (gợi ý giải pháp)</li>
                <li>• <strong>пересказать текст</strong> (kể lại bằng lời mình) vs <strong>рассказать о чём</strong> (kể/tường thuật nói chung)</li>
                <li>• <strong>сказаться больным</strong> (giả vờ ốm, tự khai) vs <strong>сказаться на здоровье</strong> (ảnh hưởng đến sức khỏe — nghĩa khác hoàn toàn)</li>
                <li>• <strong>рассказываться</strong> (ngôi 1 &amp; 2 không dùng): <em>В книге рассказывается о...</em> — cấu trúc thụ động về nội dung tác phẩm</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
