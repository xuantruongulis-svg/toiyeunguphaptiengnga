import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const chitatCards = [
  { verb: 'вчитываться — вчитаться', meaning: 'Đọc kỹ, thấm hiểu bằng cách đọc: вчитаться в текст, в строки' },
  { verb: 'вычитывать — вычитать', meaning: '1) biết được qua việc đọc: вычитать новость из газеты\n2) đọc soát, hiệu đính: вычитать рукопись' },
  { verb: 'дочитывать — дочитать', meaning: 'Đọc đến hết, đọc nốt: дочитать книгу до конца' },
  { verb: 'зачитывать — зачитать', meaning: '1) (chính thức) đọc to cho mọi người nghe: зачитать доклад, приговор\n2) (khẩu ngữ) mượn đọc rồi không trả: зачитать книгу' },
  { verb: 'зачитываться — зачитаться', meaning: 'Mải mê đọc sách, bị cuốn hút: зачитаться романами' },
  { verb: 'начитаться (СВ)', meaning: 'Đọc nhiều, đọc thỏa thích: начитаться детективов' },
  { verb: 'отчитывать — отчитать', meaning: '(khẩu ngữ) mắng mỏ nghiêm khắc: отчитать за провинность' },
  { verb: 'отчитываться — отчитаться', meaning: 'Báo cáo, giải trình bằng lời hoặc văn bản: отчитаться перед начальником' },
  { verb: 'перечитывать — перечитать', meaning: '1) đọc lại lần nữa: перечитать роман\n2) đọc rất nhiều: перечитать все романы Толстого' },
  { verb: 'почитать (СВ)', meaning: 'Đọc một chút, một lúc; hoặc đọc một tác giả: почитать Пушкина, классику' },
  { verb: 'почитывать (НСВ)', meaning: 'Thỉnh thoảng đọc, đọc không thường xuyên' },
  { verb: 'подчитать (СВ)', meaning: '(khẩu ngữ) đọc thêm để bổ sung kiến thức' },
  { verb: 'читать — прочитать', meaning: '1) đọc văn bản: прочитать книгу, ноты\n2) đọc to, ngâm: читать стихи\n3) (nghĩa bóng) thuyết giáo: читать нотации\n4) giảng bài: читать лекцию\n5) (СВ) đọc lâu: читать всю ночь' },
  { verb: 'читаться (НСВ)', meaning: '(ngôi 1 & 2 không dùng)\n1) có thể đọc được: надпись читается с трудом\n2) (безл.) có hứng đọc: Мне сегодня не читается.' },
];

export default function ChitatTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом ЧИТАТЬ</h3>
          <span className="subtitle">Các động từ phái sinh từ ЧИТАТЬ — đọc</span>
        </div>

        <div className="exercise-tabs" style={{ marginBottom: '1.5rem', justifyContent: 'center' }}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={chitatCards} />
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
                    <td><span className="verb-name">вчитываться — вчитаться</span></td>
                    <td>
                      Đọc kỹ, thấm hiểu, suy ngẫm qua đọc: <span className="ex">вчитаться в текст, в строки</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">вычитывать — вычитать</span></td>
                    <td>
                      1) biết được qua việc đọc: <span className="ex">вычитать новость из газеты</span><br/>
                      2) đọc soát, hiệu đính: <span className="ex">вычитать рукопись</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">дочитывать — дочитать</span></td>
                    <td>
                      Đọc đến hết, đọc nốt: <span className="ex">дочитать книгу до конца</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">зачитывать — зачитать</span></td>
                    <td>
                      1) (chính thức) đọc to, công bố cho mọi người nghe: <span className="ex">зачитать доклад, приговор</span><br/>
                      2) (khẩu ngữ) mượn sách rồi không trả: <span className="ex">зачитать чужую книгу</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">зачитываться — зачитаться</span></td>
                    <td>
                      Mải mê đọc sách, bị cuốn hút: <span className="ex">зачитаться романами, детективами</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">начитаться (СВ)</span></td>
                    <td>
                      Đọc nhiều, đọc no nê: <span className="ex">начитаться детективов, классики</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">отчитывать — отчитать</span></td>
                    <td>
                      (khẩu ngữ) mắng mỏ nghiêm khắc: <span className="ex">отчитать студента за провинность</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">отчитываться — отчитаться</span></td>
                    <td>
                      Báo cáo, giải trình (miệng hoặc văn bản): <span className="ex">отчитаться перед начальником о результатах</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">перечитывать — перечитать</span></td>
                    <td>
                      1) đọc lại lần nữa: <span className="ex">перечитать роман</span><br/>
                      2) đọc rất nhiều thứ: <span className="ex">перечитать все романы Толстого</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">почитать (СВ)</span></td>
                    <td>
                      Đọc một chút, một lúc; hoặc đọc tác phẩm của ai: <span className="ex">почитать Пушкина, почитать детям на ночь</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">почитывать (НСВ)</span></td>
                    <td>
                      Thỉnh thoảng đọc, đọc không thường xuyên: <span className="ex">почитывать газеты по утрам</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">подчитать (СВ)</span></td>
                    <td>
                      (khẩu ngữ) đọc thêm để bổ sung: <span className="ex">подчитать материал к экзамену</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">читать — прочитать</span></td>
                    <td>
                      1) đọc văn bản: <span className="ex">прочитать книгу, ноты</span><br/>
                      2) đọc to, ngâm thơ: <span className="ex">читать стихи</span><br/>
                      3) (nghĩa bóng) thuyết giáo, giảng đạo: <span className="ex">читать нотации</span><br/>
                      4) giảng bài: <span className="ex">читать лекцию</span><br/>
                      5) (СВ) đọc suốt/lâu: <span className="ex">читал всю ночь</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">читаться (НСВ)</span></td>
                    <td>
                      (ngôi 1 &amp; 2 không dùng)<br/>
                      1) có thể đọc được, dễ/khó đọc: <span className="ex">надпись читается с трудом</span><br/>
                      2) (безл.) có hứng đọc: <span className="ex">Мне сегодня не читается.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="theory-note">
              <h4>💡 Chú ý các cặp dễ nhầm:</h4>
              <ul>
                <li>• <strong>зачитать доклад</strong> (đọc to báo cáo) ≠ <strong>зачитать книгу</strong> (mượn không trả — khẩu ngữ)</li>
                <li>• <strong>зачитаться романами</strong> (mải mê đọc) ≠ <strong>начитаться детективов</strong> (đọc nhiều, đọc no nê)</li>
                <li>• <strong>перечитать роман</strong> (đọc lại 1 cuốn) ≠ <strong>перечитать все романы</strong> (đọc nhiều — hết cuốn này đến cuốn khác)</li>
                <li>• <strong>отчитать за провинность</strong> (mắng) ≠ <strong>отчитаться перед начальником</strong> (báo cáo)</li>
                <li>• <strong>вчитаться в текст</strong> (thấm hiểu qua đọc) ≠ <strong>вычитать из газеты</strong> (biết được qua việc đọc)</li>
                <li>• <strong>читать нотации</strong> (thuyết giáo — nghĩa bóng) ≠ <strong>читать лекцию</strong> (giảng bài chính thức)</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
