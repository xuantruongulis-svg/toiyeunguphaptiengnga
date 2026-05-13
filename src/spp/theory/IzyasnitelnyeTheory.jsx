import React from 'react';

const IzyasnitelnyeTheory = () => {
  return (
    <div className="theory-content izyasnitelnye-theory">
      <div className="theory-section">
        <h4>1. Sự tương ứng giữa mệnh đề giải thích (liên từ "чтобы") và câu đơn (động từ nguyên thể)</h4>
        <div className="rule-box">
          <strong>Quy tắc:</strong> Có sự tương ứng giữa mệnh đề giải thích với liên từ чтобы và câu đơn — với động từ nguyên thể (инфинитив).
          <br /><i>(Существует соотносительность изъяснительных предложений с союзом чтобы и простых — с инфинитивом.)</i>
        </div>

        <p><strong>Hãy so sánh (Сравните):</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Я хочу поехать в Петербург.</div>
            <div className="vn">🇻🇳 Tôi muốn đi Peterburg.</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Я хочу, чтобы Вера поехала в Петербург.</div>
            <div className="vn">🇻🇳 Tôi muốn Vera đi Peterburg.</div>
          </div>
          
          <div className="example-item mt-3">
            <div className="ru">🇷🇺 Она хочет поступить в университет.</div>
            <div className="vn">🇻🇳 Cô ấy muốn vào đại học.</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Она хочет, чтобы её сын поступил в университет.</div>
            <div className="vn">🇻🇳 Cô ấy muốn con trai cô ấy vào đại học.</div>
          </div>
        </div>
      </div>

      <div className="theory-section">
        <h4>2. Sự khác biệt về chủ thể hành động (Trường hợp thứ nhất và thứ hai)</h4>
        <div className="rule-box">
          <strong>Quy tắc:</strong>
          <ul>
            <li>Trong trường hợp thứ nhất (câu đơn), ý muốn và hành động đề cập đến cùng một người. <i>(В первом случае желание и действие относятся к одному лицу).</i></li>
            <li>Trong trường hợp thứ hai (câu phức), ý muốn đề cập đến một người, còn hành động — đến người khác. <i>(во втором — желание относится к одному лицу, а действие — к другому).</i></li>
          </ul>
          <p style={{ marginTop: '0.5rem' }}>Các động từ như <strong>просить</strong> (cầu xin, yêu cầu), <strong>требовать</strong> (đòi hỏi), <strong>приказать</strong> (ra lệnh) và tương tự giả định có hai chủ thể hành động.</p>
        </div>

        <p><strong>Hãy so sánh (Сравните):</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Я попросил Виктора купить мне проездной.</div>
            <div className="vn">🇻🇳 Tôi đã yêu cầu Viktor mua cho tôi vé tháng.</div>
            <div className="note">(Trong câu đơn, người thứ hai đóng vai trò là bổ ngữ - Виктора)</div>
          </div>
          <div className="example-item mt-3">
            <div className="ru">🇷🇺 Я попросил Виктора, чтобы он купил мне проездной.</div>
            <div className="vn">🇻🇳 Tôi đã yêu cầu Viktor để anh ấy mua cho tôi vé tháng.</div>
            <div className="note">(Trong câu phức, người thứ hai đóng vai trò là chủ ngữ - он, они)</div>
          </div>
        </div>

        <div className="note-box mt-3">
          💡 <strong>Lưu ý:</strong> Người mà lời yêu cầu, mệnh lệnh, lời khuyên, v.v. hướng đến có thể không được nêu ra trong câu, mà chỉ được ngầm hiểu. <i>(Лицо, к которому обращены просьба, приказ, совет и т.д., может быть не названо в предложении, а только подразумеваться.)</i>
        </div>
      </div>

      <div className="theory-section">
        <h4>3. Trường hợp không dùng câu đơn với nguyên thể</h4>
        <div className="rule-box">
          <strong>Quy tắc:</strong> Xin lưu ý: khi người không được nêu tên, trong câu với чтобы sử dụng dạng bị động hoặc sử dụng câu nhân xưng bất định.
          <br/><i>(Обратите внимание: когда лицо не названо, в предложении с чтобы употребляется пассив или употребляется неопределённо-личное предложение.)</i>
        </div>

        <p><strong>Ví dụ:</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Турфирма предлагает заказывать авиабилеты заранее.</div>
            <div className="vn">🇻🇳 Công ty du lịch đề nghị đặt vé máy bay trước.</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Турфирма предлагает, чтобы авиабилеты заказывали (заказывались) заранее.</div>
            <div className="vn">🇻🇳 Công ty du lịch đề nghị để vé máy bay được đặt trước.</div>
          </div>
          <div className="example-item mt-3">
            <div className="ru">🇷🇺 Петя просит поверить ему и на этот раз.</div>
            <div className="vn">🇻🇳 Petya yêu cầu hãy tin anh ấy lần này nữa.</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Петя просит, чтобы ему поверили и на этот раз.</div>
            <div className="vn">🇻🇳 Petya yêu cầu để lần này nữa người ta tin anh ấy.</div>
          </div>
        </div>
      </div>

      <div className="theory-section">
        <h4>4. Các trường hợp mệnh đề phụ với "чтобы" KHÔNG tương ứng với câu đơn</h4>
        <p>Mệnh đề giải thích với liên từ чтобы không tương ứng với câu đơn trong những trường hợp sau <i>(Изъяснительное предложение с союзом чтобы не соотносится с простым в следующих случаях)</i>:</p>

        <h5 className="sub-heading">A. Chủ ngữ trong mệnh đề phụ được thể hiện bằng đại từ "никто" (không ai)</h5>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Он требует, чтобы его никто не беспокоил во время работы.</div>
            <div className="vn">🇻🇳 Anh ấy yêu cầu để không ai làm phiền anh ấy trong khi làm việc.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Отец просит, чтобы никто не звонил ему после двенадцати часов.</div>
            <div className="vn">🇻🇳 Cha yêu cầu để không ai gọi cho ông sau mười hai giờ.</div>
          </div>
        </div>

        <h5 className="sub-heading mt-3">B. Chủ ngữ trong mệnh đề phụ KHÔNG chỉ người</h5>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Дирекция требует, чтобы сигнализация работала исправно.</div>
            <div className="vn">🇻🇳 Ban giám đốc yêu cầu để hệ thống báo động hoạt động tốt.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Дирекция требует, чтобы прожектора горели круглосуточно.</div>
            <div className="vn">🇻🇳 Ban giám đốc yêu cầu để đèn pha chiếu sáng suốt ngày đêm.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Дирекция требует, чтобы двери открывались автоматически.</div>
            <div className="vn">🇻🇳 Ban giám đốc yêu cầu để cửa mở tự động.</div>
          </div>
        </div>
      </div>

      <div className="theory-section">
        <h4>5. Trường hợp không tương ứng khi sự thúc đẩy hướng trực tiếp đến người đối thoại</h4>
        <div className="rule-box">
          <strong>Quy tắc:</strong> Câu đơn với nguyên thể không tương ứng với mệnh đề giải thích với liên từ чтобы nếu sự thúc đẩy hướng trực tiếp đến người đối thoại / những người đối thoại.
          <br/><i>(Простое предложение с инфинитивом не соотносится с изъяснительным предложением с союзом чтобы, если побуждение обращено непосредственно к собеседнику/собеседникам).</i>
        </div>

        <p><strong>Ví dụ (Chỉ dùng câu đơn):</strong></p>
        <div className="example-group">
          <div className="example-item"><div className="ru">🇷🇺 Прошу соблюдать тишину.</div><div className="vn">🇻🇳 Tôi yêu cầu giữ trật tự.</div></div>
          <div className="example-item mt-2"><div className="ru">🇷🇺 Прошу всех встать.</div><div className="vn">🇻🇳 Tôi yêu cầu tất cả đứng dậy.</div></div>
          <div className="example-item mt-2"><div className="ru">🇷🇺 Прошу всех посторонних выйти.</div><div className="vn">🇻🇳 Tôi yêu cầu tất cả người ngoài ra ngoài.</div></div>
          <div className="example-item mt-2"><div className="ru">🇷🇺 Приказываю всем освободить помещение.</div><div className="vn">🇻🇳 Tôi ra lệnh cho tất cả giải phóng căn phòng.</div></div>
          <div className="example-item mt-2"><div className="ru">🇷🇺 Требую соблюдать все формальности.</div><div className="vn">🇻🇳 Tôi yêu cầu tuân thủ mọi thủ tục.</div></div>
        </div>

        <p className="mt-3"><strong>Hãy so sánh (Khi không hướng trực tiếp đến người đối thoại):</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Они предлагают объединить обе фирмы.</div>
            <div className="vn">🇻🇳 Họ đề nghị hợp nhất cả hai công ty.</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Они рекомендуют нам объединить обе фирмы (чтобы мы объединили обе фирмы).</div>
            <div className="vn">🇻🇳 Họ khuyên chúng tôi hợp nhất cả hai công ty (để chúng tôi hợp nhất cả hai công ty).</div>
          </div>
        </div>
      </div>

      <div className="theory-section">
        <h4>6. Sử dụng "что" và "чтобы" với các từ chỉ sự lo sợ, mong muốn, nghi ngờ, v.v.</h4>

        <h5 className="sub-heading">A. Với các từ mang nghĩa không mong muốn, lo sợ (бояться...)</h5>
        <p>Có thể dùng cả liên từ что và чтобы, nhưng cần lưu ý:</p>
        <ul className="theory-list">
          <li>Liên từ чтобы xuất hiện nếu có sự lo sợ với sự phủ định (nghĩa là lo sợ điều không mong muốn xảy ra).</li>
        </ul>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Родители боятся, что дети заблудятся в лесу.</div>
            <div className="vn">🇻🇳 Bố mẹ sợ rằng bọn trẻ sẽ lạc trong rừng.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Родители боятся, чтобы дети не заблудились в лесу.</div>
            <div className="vn">🇻🇳 Bố mẹ sợ để bọn trẻ không bị lạc trong rừng.</div>
            <div className="note">(Thay cho "чтобы" có thể dùng "как бы": Родители боятся, как бы дети не заблудились в лесу).</div>
          </div>
        </div>

        <ul className="theory-list mt-3">
          <li>Nếu có phủ định trong mệnh đề chính, thì CHỈ dùng liên từ что.</li>
        </ul>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Родители не боятся, что дети заблудятся в лесу.</div>
            <div className="vn">🇻🇳 Bố mẹ không sợ rằng bọn trẻ sẽ lạc trong rừng.</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">B. Với các từ chỉ sự nghi ngờ (сомневаться, сомнительно, маловероятно...)</h5>
        <p>Dùng cả liên từ что và чтобы, nhưng liên từ чтобы mang sắc thái khả năng xảy ra sự việc ít hơn.</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Я сомневаюсь, что он приедет вовремя.</div>
            <div className="vn">🇻🇳 Tôi nghi ngờ rằng anh ấy sẽ đến đúng giờ.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Я сомневаюсь, чтобы он приехал вовремя.</div>
            <div className="vn">🇻🇳 Tôi nghi ngờ liệu anh ấy có đến đúng giờ không.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Маловероятно, что он поступит в университет (чтобы он поступил в университет).</div>
            <div className="vn">🇻🇳 Khó có khả năng rằng anh ấy sẽ vào đại học / để anh ấy vào đại học.</div>
          </div>
        </div>
        <div className="note-box mt-2">
          💡 <strong>Lưu ý:</strong> Khi có phủ định trong mệnh đề chính, CHỈ có thể dùng liên từ что.
          <br/>🇷🇺 Я не сомневаюсь, что он приедет вовремя.
          <br/>🇻🇳 Tôi không nghi ngờ rằng anh ấy sẽ đến đúng giờ.
        </div>

        <h5 className="sub-heading mt-4">C. Với các từ mang nghĩa tri giác, hoạt động tư duy (видеть, слышать, помнить...)</h5>
        <p>Thường dùng liên từ что, nhưng nếu có phủ định với động từ và đó là câu hỏi, thì có thể xuất hiện liên từ чтобы.</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Мы видели, что кто-то вышел из зала.</div>
            <div className="vn">🇻🇳 Chúng tôi đã thấy rằng ai đó đã ra khỏi phòng.</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Мы не видели, чтобы кто-нибудь выходил из зала.</div>
            <div className="vn">🇻🇳 Chúng tôi không thấy rằng có ai đó ra khỏi phòng.</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Вы видели, чтобы кто-нибудь выходил из зала?</div>
            <div className="vn">🇻🇳 Bạn có thấy rằng có ai đó ra khỏi phòng không?</div>
          </div>

          <div className="example-item mt-3">
            <div className="ru">🇷🇺 Я слышал, что в этой реке водится рыба.</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Я не слышал, чтобы в этой реке водилась рыба?</div>
          </div>

          <div className="example-item mt-3">
            <div className="ru">🇷🇺 Я помню, что он хорошо играл в шахматы.</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Я не помню, чтобы он хорошо играл в шахматы.</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Кто-нибудь помнит, чтобы он хорошо играл в шахматы?</div>
          </div>
        </div>
      </div>

      <div className="theory-section">
        <h4>7. Mệnh đề giải thích với từ nối hoặc liên từ "как"</h4>
        <p>Liên từ как được dùng trong 4 trường hợp <i>(употребляются в четырёх случаях)</i>:</p>

        <h5 className="sub-heading">Trường hợp 1: Có nghĩa "bằng cách nào" (каким образом)</h5>
        <div className="example-group">
          <div className="example-item"><div className="ru">🇷🇺 Он рассказал, как это случилось.</div><div className="vn">🇻🇳 Anh ấy kể chuyện đó đã xảy ra như thế nào.</div></div>
          <div className="example-item mt-2"><div className="ru">🇷🇺 Скажите, как пройти к цирку?</div><div className="vn">🇻🇳 Xin chỉ cho tôi cách đi đến rạp xiếc?</div></div>
          <div className="example-item mt-2"><div className="ru">🇷🇺 Она спросила, как пишется это слово.</div><div className="vn">🇻🇳 Cô ấy hỏi từ đó được viết như thế nào.</div></div>
        </div>

        <h5 className="sub-heading mt-3">Trường hợp 2: Có nghĩa đánh giá (оценочное значение)</h5>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Интересно, как он учится (как ему живётся, как он плавает, как он себя чувствует).</div>
            <div className="vn">🇻🇳 Thú vị là anh ấy học thế nào (anh ấy sống ra sao, anh ấy bơi thế nào, anh ấy cảm thấy thế nào).</div>
          </div>
        </div>

        <h5 className="sub-heading mt-3">Trường hợp 3: Có nghĩa "đến mức độ nào" (насколько)</h5>
        <p><i>(Thường kết hợp với trạng từ và tính từ ngắn)</i></p>

        <h5 className="sub-heading mt-3">Trường hợp 4: Thể hiện quá trình trong nhận thức của ai đó</h5>
        <p>"Как" không bộc lộ nghĩa từ vựng đặc biệt, nhưng cho thấy đó là một quá trình. Các từ dựa vào trong mệnh đề chính thường là: видеть (thấy), слышать (nghe), наблюдать (quan sát), следить (theo dõi)...</p>

        <p><strong>Hãy so sánh việc sử dụng liên từ "что" và "как":</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Он видел, что во двор въехала машина.</div>
            <div className="vn">🇻🇳 Anh ấy thấy rằng một chiếc xe đã vào sân. - <i>Kết quả</i></div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Он видел, как во двор въехала машина.</div>
            <div className="vn">🇻🇳 Anh ấy thấy cách chiếc xe vào sân. - <i>Quá trình</i></div>
          </div>
          <div className="example-item mt-2"><div className="ru">🇷🇺 Я заметил, что / как на подоконник сел голубь.</div></div>
          <div className="example-item mt-2"><div className="ru">🇷🇺 Мы услышали, что / как часы пробили полночь.</div></div>
        </div>

        <div className="note-box mt-3">
          💡 <strong>Lưu ý quan trọng:</strong>
          <br/><br/>
          <strong>1. Với các từ dựa vào chỉ sự quan sát có mục đích hoặc tri giác chủ động, CHỈ dùng liên từ как.</strong>
          <ul className="theory-list mt-2">
            <li>🇷🇺 Он смотрел, как медленно заходит солнце. <i>(🇻🇳 Anh ấy đã ngắm nhìn mặt trời lặn một cách chậm rãi.)</i></li>
            <li>🇷🇺 Я наблюдал, как по подоконнику ходят голуби.</li>
            <li>🇷🇺 Я слушал, как часы бьют полночь.</li>
            <li>🇷🇺 Он следил, как над цветущим кустом кружились бабочки.</li>
          </ul>
          
          <strong style={{ display: 'inline-block', marginTop: '0.8rem' }}>2. Nếu không có sự hình dung tình huống trong sự phát triển, liên từ как KHÔNG được dùng.</strong>
          <ul className="theory-list mt-2">
            <li>🇷🇺 Он не заметил, что (как) его сын вырос. <i>(🇻🇳 Anh ấy không nhận thấy rằng con trai mình đã lớn / đã lớn như thế nào.)</i></li>
            <li>🇷🇺 Он не заметил, что (как) его сын стал взрослым.</li>
            <li>🇷🇺 Он не заметил, что его сын уже взрослый. <i>(🇻🇳 Anh ấy không nhận thấy rằng con trai mình đã lớn rồi. - Chỉ dùng "что")</i></li>
          </ul>
        </div>
      </div>

      <div className="theory-section">
        <h4>8. Mệnh đề giải thích với "будто", "как будто" (Chỉ thông tin không đáng tin cậy)</h4>
        <div className="rule-box">
          <strong>Quy tắc:</strong> Nội dung của mệnh đề phụ có thể không hoàn toàn đáng tin cậy từ quan điểm của người nói, nghĩa là người nói không chắc chắn thông tin đó phù hợp với thực tế. Các liên từ будто, как будто (như là, nghe như thể, tựa như) thường được dùng khi nói về tin đồn, giấc mơ, cảm giác.
        </div>

        <p><strong>Hãy so sánh:</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Он сказал, что экзамен перенесли на осень <span style={{color: '#4ade80'}}>(реальный факт)</span>.</div>
            <div className="vn">🇻🇳 Anh ấy nói rằng kỳ thi đã được chuyển sang mùa thu (sự kiện có thật).</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Он сказал, будто экзамен перенесли на осень <span style={{color: '#f87171'}}>(предполагаемый факт)</span>.</div>
            <div className="vn">🇻🇳 Anh ấy nói rằng (nghe như thể) kỳ thi đã được chuyển sang mùa thu (sự kiện giả định).</div>
          </div>
        </div>

        <p className="mt-3"><strong>Ví dụ khác:</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Я слышал, будто в Москву приезжает премьер-министр Великобритании.</div>
            <div className="vn">🇻🇳 Tôi nghe nói rằng (nghe như thể) thủ tướng Anh sắp đến Moscow.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Мне приснилось, будто я летаю над городом.</div>
            <div className="vn">🇻🇳 Tôi mơ thấy rằng (như thể) tôi đang bay trên thành phố.</div>
          </div>
        </div>

        <p className="mt-3"><strong>Các từ dựa vào thường gặp:</strong></p>
        <ul className="theory-list">
          <li><strong>Nhóm nói/viết:</strong> говорить, сказать, сообщить, передать, рассказать, написать...</li>
          <li><strong>Nhóm suy nghĩ/tưởng tượng:</strong> думать, считать, вообразить, представить, предположить, полагать...</li>
          <li><strong>Nhóm giả vờ:</strong> притвориться, сделать вид...</li>
          <li><strong>Nhóm cảm giác/giấc mơ:</strong> слышать, чувствовать, почувствовать, сниться, присниться...</li>
        </ul>

        <div className="note-box mt-3">
          💡 <strong>Lưu ý với động từ казаться/показаться (dường như):</strong>
          <br/>Có thể dùng với cả liên từ что và будто. Nếu dùng будто, ý nghĩa không đáng tin cậy được thể hiện mạnh hơn.
          <br/><br/>
          🇷🇺 Ночью всё видится иначе, и в темноте кажется, что (будто) за каждым кустом кто-то стоит.
          <br/>🇻🇳 Ban đêm mọi thứ đều nhìn khác đi, và trong bóng tối dường như rằng (như thể) sau mỗi bụi cây có ai đó đang đứng.
        </div>
      </div>
    </div>
  );
};

export default IzyasnitelnyeTheory;

