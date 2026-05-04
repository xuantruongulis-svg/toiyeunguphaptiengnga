import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const govoritCards = [
  { verb: 'выговаривать — выговорить', meaning: '1) (НСВ) mắng mỏ ai vì điều gì: за опоздание\n2) phát âm, thốt ra: трудное слово\n3) (khẩu ngữ) trong hợp đồng thỏa thuận về điều gì: себе право отсрочки' },
  { verb: 'выговориться (СВ)', meaning: '(khẩu ngữ) nói hết, thổ lộ hết: выговориться до конца' },
  { verb: 'договаривать — договорить', meaning: 'nói cho xong, nói hết: до конца' },
  { verb: 'договариваться — договориться', meaning: '1) đi đến thỏa thuận: о встрече\n2) (kết quả tiêu cực) nói đến mức thái quá, dẫn đến chuyện không hay: до нелепостей' },
  { verb: 'заговаривать — заговорить', meaning: '1) (СВ) bắt đầu nói\n2) (СВ, nghĩa bóng) bắt đầu thể hiện ra: совесть заговорила\n3) (thường СВ) làm mệt bằng lời nói nhiều: заговорить собеседника\n4) tác động bằng thần chú, bùa mê: заговорить боль' },
  { verb: 'заговариваться — заговориться', meaning: '1) (НСВ) nói lảm nhảm, nói vô nghĩa\n2) mải mê nói chuyện quên thời gian' },
  { verb: 'наговаривать — наговорить', meaning: '1) (СВ) nói nhiều thứ linh tinh: чепухи\n2) vu khống, đặt điều: на соседа\n3) thu âm giọng nói: на диктофон' },
  { verb: 'наговориться (СВ)', meaning: 'nói chuyện thỏa thích, nói đã đời' },
  { verb: 'оговаривать — оговорить', meaning: '1) vu oan cho ai: соседа\n2) (chính thức) thỏa thuận, thống nhất trước: сроки' },
  { verb: 'оговариваться — оговориться', meaning: '1) (chính thức) được thỏa thuận thêm: срок поставки\n2) (thường СВ) lỡ lời, nói nhầm' },
  { verb: 'обговаривать — обговорить', meaning: '(khẩu ngữ) thảo luận, bàn bạc về: это дело' },
  { verb: 'отговаривать — отговорить', meaning: 'thuyết phục không làm gì đó: от поездки' },
  { verb: 'отговариваться — отговориться', meaning: 'lấy cớ, thoái thác: своей занятостью' },
  { verb: 'переговорить (СВ)', meaning: '1) trao đổi ngắn gọn: с другом\n2) nói nhiều hơn/át tiếng người khác: своих оппонентов' },
  { verb: 'говорить — поговорить', meaning: '1) (СВ) nói chuyện một lúc: минуты две\n2) thảo luận: о делах' },
  { verb: 'говориться (НСВ)', meaning: '(về lời nói, câu chữ) được nói ra, được phát biểu' },
  { verb: 'подговаривать — подговорить', meaning: 'xúi giục bí mật làm gì đó: на преступление' },
  { verb: 'приговаривать (НСВ)', meaning: 'vừa làm vừa lầm bầm nói' },
  { verb: 'приговаривать — приговорить', meaning: '(luật) tuyên án: к тюремному заключению' },
  { verb: 'проговаривать — проговорить', meaning: '1) thốt ra, nói (thường nhỏ): что-то неслышно\n2) (СВ) nói suốt, nói lâu: весь вечер' },
  { verb: 'проговариваться — проговориться', meaning: '(thường СВ) lỡ miệng tiết lộ điều không nên nói: о своих намерениях' },
  { verb: 'разговаривать (НСВ)', meaning: 'trò chuyện: о музыке' },
  { verb: 'разговорить (СВ)', meaning: '(khẩu ngữ) làm cho ai đó muốn nói chuyện, khơi gợi: попутчика' },
  { verb: 'разговориться (СВ)', meaning: 'bắt đầu trò chuyện, say sưa trò chuyện: с соседями' },
  { verb: 'сговариваться — сговориться', meaning: '(khẩu ngữ, thường СВ) thỏa thuận, dàn xếp với nhau' },
  { verb: 'уговаривать — уговорить', meaning: 'thuyết phục, nài nỉ ai làm gì: поехать за город' },
  { verb: 'уговариваться — уговориться', meaning: '(khẩu ngữ, thường СВ) đi đến thỏa thuận: пойти в театр' },
];

export default function GovorItTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом ГОВОРИТЬ</h3>
          <span className="subtitle">Các động từ phái sinh từ ГОВОРИТЬ — nói</span>
        </div>

        <div className="exercise-tabs" style={{ marginBottom: '1.5rem', justifyContent: 'center' }}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={govoritCards} />
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
                    <td><span className="verb-name">выговаривать — выговорить</span></td>
                    <td>
                      1) (НСВ) mắng mỏ, quở trách: <span className="ex">выговаривать за опоздание</span><br/>
                      2) phát âm, thốt ra: <span className="ex">выговорить трудное слово</span><br/>
                      3) (khẩu ngữ) trong hợp đồng thỏa thuận về điều gì cho mình: <span className="ex">выговорить себе право отсрочки</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">выговориться (СВ)</span></td>
                    <td>
                      (khẩu ngữ) nói hết tất cả, thổ lộ hết: <span className="ex">выговориться до конца</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">договаривать — договорить</span></td>
                    <td>
                      Nói cho xong, nói đến hết: <span className="ex">договорить до конца</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">договариваться — договориться</span></td>
                    <td>
                      1) đi đến thỏa thuận: <span className="ex">договориться о встрече</span><br/>
                      2) (kết quả tiêu cực) nói đến mức thái quá, dẫn đến điều vô lý: <span className="ex">договориться до нелепостей</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">заговаривать — заговорить</span></td>
                    <td>
                      1) (СВ) bắt đầu nói<br/>
                      2) (СВ, nghĩa bóng, ngôi 1 &amp; 2 không dùng) bắt đầu thể hiện ra: <span className="ex">совесть заговорила</span><br/>
                      3) (thường СВ) làm mệt bằng lời nói: <span className="ex">заговорить собеседника</span><br/>
                      4) tác động bằng thần chú, bùa mê: <span className="ex">заговорить боль</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">заговариваться — заговориться</span></td>
                    <td>
                      1) (НСВ) nói lảm nhảm, nói vô nghĩa<br/>
                      2) mải mê trò chuyện, nói quên thời gian
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">наговаривать — наговорить</span></td>
                    <td>
                      1) (СВ) nói nhiều linh tinh: <span className="ex">наговорить чепухи</span><br/>
                      2) vu khống, đặt điều cho ai: <span className="ex">наговорить на соседа</span><br/>
                      3) thu âm giọng nói: <span className="ex">наговорить на диктофон</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">наговориться (СВ)</span></td>
                    <td>
                      Nói chuyện thỏa thích, nói đã đời: <span className="ex">наконец-то наговорились!</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">оговаривать — оговорить</span></td>
                    <td>
                      1) vu oan, đặt điều cho ai: <span className="ex">оговорить соседа</span><br/>
                      2) (chính thức) thỏa thuận, thống nhất trước: <span className="ex">оговорить сроки</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">оговариваться — оговориться</span></td>
                    <td>
                      1) (chính thức) được thỏa thuận thêm: <span className="ex">срок поставки оговаривается</span><br/>
                      2) (thường СВ) lỡ lời, nói nhầm không cố ý
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">обговаривать — обговорить</span></td>
                    <td>
                      (khẩu ngữ) thảo luận, bàn bạc về: <span className="ex">обговорить это дело</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">отговаривать — отговорить</span></td>
                    <td>
                      Thuyết phục ai đó không làm gì: <span className="ex">отговорить от поездки</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">отговариваться — отговориться</span></td>
                    <td>
                      Lấy cớ, thoái thác, viện lý do: <span className="ex">отговориться своей занятостью</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">переговорить (СВ)</span></td>
                    <td>
                      1) trao đổi ngắn gọn với ai: <span className="ex">переговорить с другом</span><br/>
                      2) nói át tiếng, nói nhiều hơn người khác: <span className="ex">переговорить своих оппонентов</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">говорить — поговорить</span></td>
                    <td>
                      1) (СВ) nói chuyện một lúc: <span className="ex">поговорить минуты две</span><br/>
                      2) thảo luận về: <span className="ex">поговорить о делах</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">говориться (НСВ)</span></td>
                    <td>
                      (về lời nói) được nói ra, được phát biểu: <span className="ex">Как говорится в пословице...</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">подговаривать — подговорить</span></td>
                    <td>
                      Xúi giục bí mật làm gì: <span className="ex">подговорить на преступление</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">приговаривать (НСВ)</span></td>
                    <td>
                      Vừa làm vừa lầm bầm nói: <span className="ex">Она работала, приговаривая что-то.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">приговаривать — приговорить</span></td>
                    <td>
                      (luật pháp) tuyên án, kết án: <span className="ex">приговорить к тюремному заключению</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">проговаривать — проговорить</span></td>
                    <td>
                      1) thốt ra, nói (thường nhỏ/khó nghe): <span className="ex">проговорить что-то неслышно</span><br/>
                      2) (СВ) nói suốt, nói lâu: <span className="ex">проговорить весь вечер</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">проговариваться — проговориться</span></td>
                    <td>
                      (thường СВ) lỡ miệng, vô tình tiết lộ: <span className="ex">проговориться о своих намерениях</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">разговаривать (НСВ)</span></td>
                    <td>
                      Trò chuyện, đàm thoại: <span className="ex">разговаривать о музыке</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">разговорить (СВ)</span></td>
                    <td>
                      (khẩu ngữ) khơi gợi, làm cho ai đó muốn nói chuyện: <span className="ex">разговорить попутчика</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">разговориться (СВ)</span></td>
                    <td>
                      Bắt đầu trò chuyện, say sưa trò chuyện: <span className="ex">разговориться с соседями</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">сговариваться — сговориться</span></td>
                    <td>
                      (khẩu ngữ, thường СВ) thỏa thuận với nhau, thông đồng: <span className="ex">Они сговорились заранее.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">уговаривать — уговорить</span></td>
                    <td>
                      Thuyết phục, nài nỉ ai làm gì: <span className="ex">уговорить поехать за город</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">уговариваться — уговориться</span></td>
                    <td>
                      (khẩу ngữ, thường СВ) đi đến thỏa thuận: <span className="ex">уговориться пойти в театр</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="theory-note">
              <h4>💡 Chú ý các cặp dễ nhầm:</h4>
              <ul>
                <li>• <strong>договориться о чём</strong> (thỏa thuận) ≠ <strong>договориться до чего</strong> (nói quá trớn, gây hậu quả xấu)</li>
                <li>• <strong>оговорить соседа</strong> (vu oan) ≠ <strong>оговорить сроки</strong> (thỏa thuận chính thức)</li>
                <li>• <strong>отговорить кого от чего</strong> (thuyết phục không làm) ≠ <strong>уговорить кого сделать что</strong> (thuyết phục làm)</li>
                <li>• <strong>наговорить на кого</strong> (vu khống) ≠ <strong>наговорить на диктофон</strong> (thu âm)</li>
                <li>• <strong>приговаривать</strong> (lầm bầm nói) ≠ <strong>приговорить к чему</strong> (tuyên án — luật pháp)</li>
                <li>• <strong>проговориться</strong> (lỡ miệng) ≠ <strong>оговориться</strong> (nói nhầm lỡ lời)</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
