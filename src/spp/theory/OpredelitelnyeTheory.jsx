import React from 'react';

const OpredelitelnyeTheory = () => {
  return (
    <div className="theory-content opredelitelnye-theory">
      <div className="theory-section">
        <h3 className="section-title" style={{ color: 'var(--accent-color)', fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(100, 181, 246, 0.3)', paddingBottom: '0.5rem' }}>
          PHẦN 1: KIẾN THỨC CƠ BẢN VỀ MỆNH ĐỀ XÁC ĐỊNH
        </h3>

        <h4>1. Khái niệm chung (Общие понятия)</h4>
        <p>Sự vật, con người, sự kiện có thể được mô tả bằng một từ hoặc một cụm từ.</p>
        <div className="rule-box" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
          <i>RU: Предмет, человек, событие могут быть охарактеризованы одним словом или словосочетанием.</i>
        </div>

        <p><strong>Ví dụ:</strong> Quả táo đỏ, ngôi nhà cao, người tốt, buổi biểu diễn thú vị, trận động đất kỳ lạ, cô gái tóc dài, chàng trai cao lớn, v.v.</p>
        <p style={{ color: '#a0aec0', fontSize: '0.9rem', marginTop: '-0.5rem' }}>
          <i>Например: Красное яблоко, высокий дом, хороший человек, интересный спектакль, странное землетрясение, девушка с длинными волосами, парень высокого роста и т.д.</i>
        </p>

        <p className="mt-3">Nhưng nếu để mô tả cần một tình huống, người ta dùng mệnh đề xác định.</p>
        <div className="rule-box" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
          <i>RU: Но если для характеристики требуется ситуация, употребляется определительное предложение.</i>
        </div>

        <p><strong>Ví dụ:</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 На берегу он встретил девушку, которая ему очень понравилась.</div>
            <div className="vn">🇻🇳 Trên bờ anh ấy gặp cô gái mà anh ấy rất thích.</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">Cơ chế hình thành:</h5>
        <div className="note-box">
          Hai câu <i>(Anh ấy gặp cô gái. Cô gái này anh ấy rất thích. / Он встретил девушку. Эта девушка ему очень понравилась.)</i> được liên kết bằng đại từ <strong>который (которая, которое, которые)</strong>.<br/><br/>
          Từ này thay thế cho danh từ trong câu thứ hai và hòa hợp với nó về giống và số.<br/><br/>
          Dạng cách của từ который phụ thuộc vào vị trí của nó trong vế phụ.<br/><br/>
          <i>RU: Два предложения связываются местоименным словом который (которая, которое, которые). Это слово является заменителем существительного во втором предложении и согласуется с ним в роде и числе. Падежная форма слова который зависит от той позиции, которую оно занимает в придаточной части.</i>
        </div>

        <p className="mt-4"><strong>Ví dụ thực hành:</strong></p>
        <ul className="theory-list">
          <li><strong>который</strong> sẽ học ở nhóm của chúng ta. <i>(который будет учиться в нашей группе.)</i></li>
          <li>Tôi biết sinh viên <strong>mà</strong> có máy quay phim. <i>(Я знаю студента, <strong>у которого</strong> есть видеокамера.)</i></li>
          <li><strong>mà</strong> hôm qua đã gửi fax từ Luân Đôn. <i>(<strong>которому</strong> вчера прислали факс из Лондона.)</i></li>
          <li><strong>mà</strong> bạn hỏi thăm. <i>(<strong>о котором</strong> вы спрашивали.)</i></li>
        </ul>

        <h4 className="mt-5">2. Thì của động từ trong vế phụ (Время глагола)</h4>
        <div className="rule-box">
          <strong>Quy tắc:</strong> Thì của vị ngữ trong vế phụ không phụ thuộc vào thì của vị ngữ trong vế chính.
          <br/><i>(RU: Время сказуемого в придаточной части не зависит от времени сказуемого в главной части.)</i>
        </div>

        <p><strong>Ví dụ:</strong></p>
        <ul className="theory-list">
          <li>Tôi biết sinh viên <strong>đang học</strong> tiếng Trung. <i>(Я знаю студента, который <strong>изучает</strong> китайский язык.)</i></li>
          <li>Tôi đã thấy sinh viên <strong>đã học</strong> tiếng Trung. <i>(Я видел студента, который <strong>изучал</strong> китайский язык.)</i></li>
          <li>Tôi biết sinh viên <strong>sẽ học</strong> tiếng Trung. <i>(Я знаю студента, который <strong>будет изучать</strong> китайский язык.)</i></li>
        </ul>

        <h4 className="mt-5">3. Vị trí của từ "который"</h4>
        <div className="rule-box">
          <strong>Quy tắc:</strong> Từ который không phải lúc nào cũng ở đầu mệnh đề phụ.
          <br/><i>(RU: Слово который не всегда находится в начале придаточного предложения.)</i>
        </div>

        <p><strong>Ví dụ:</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 На книжной полке выступал писатель, <strong>книги которого</strong> я очень люблю.</div>
            <div className="vn">🇻🇳 Trên giá sách đang phát biểu nhà văn, người mà tôi rất thích sách của ông ấy.</div>
          </div>
          <div className="example-item mt-3">
            <div className="ru">🇷🇺 По дороге шли мальчики, <strong>старший из которых</strong> нёс удочку.</div>
            <div className="vn">🇻🇳 Trên đường có mấy cậu bé đi qua, người lớn tuổi nhất trong số đó cầm cần câu.</div>
          </div>
          <div className="example-item mt-3">
            <div className="ru">🇷🇺 В Москву приехал известный итальянский инженер, <strong>с интересом к которому</strong> передавали в вечерних новостях.</div>
            <div className="vn">🇻🇳 Một kỹ sư người Italia nổi tiếng đã đến Moskva, mà bản tin buổi tối đưa tin với sự quan tâm về ông ấy.</div>
          </div>
        </div>
      </div>

      <div className="theory-section">
        <h3 className="section-title mt-5" style={{ color: 'var(--accent-color)', fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(100, 181, 246, 0.3)', paddingBottom: '0.5rem' }}>
          PHẦN 2: MỆNH ĐỀ XÁC ĐỊNH CHỈ SỰ TƯƠNG ĐỒNG
        </h3>

        <h4>4. Mệnh đề xác định chỉ sự giống nhau, tương tự (với "какой")</h4>
        <div className="rule-box">
          Mệnh đề xác định có thể chỉ sự giống nhau, tương tự. Trong trường hợp này, vế phụ được nối với vế chính bằng từ nối <strong>какой</strong>.
          <br/><i>(RU: Определительные предложения могут указывать на сходство, подобие. В этом случае придаточная часть присоединяется к главной с помощью союзного слова какой.)</i>
        </div>

        <p><strong>Ví dụ:</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Она ходит в платьях, <strong>какие</strong> носили в прошлом веке.</div>
            <div className="vn">🇻🇳 Cô ấy mặc những chiếc váy như đã mặc ở thế kỷ trước.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 В ресторане подавали блюдо, <strong>какое</strong> готовят только в этой провинции.</div>
            <div className="vn">🇻🇳 Trong nhà hàng họ phục vụ món ăn mà chỉ nấu ở tỉnh này.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Она попробовала фрукты, <strong>каких</strong> никогда не пробовала.</div>
            <div className="vn">🇻🇳 Cô ấy đã nếm những loại quả mà cô ấy chưa bao giờ nếm.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Это был специалист, <strong>каких</strong> теперь не встретить.</div>
            <div className="vn">🇻🇳 Đó là một chuyên gia mà bây giờ khó gặp.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Это была удача, о <strong>какой</strong> можно только мечтать.</div>
            <div className="vn">🇻🇳 Đó là một may mắn mà người ta chỉ có thể mơ ước.</div>
          </div>
        </div>
      </div>

      <div className="theory-section">
        <h3 className="section-title mt-5" style={{ color: 'var(--accent-color)', fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(100, 181, 246, 0.3)', paddingBottom: '0.5rem' }}>
          PHẦN 3: MỆNH ĐỀ XÁC ĐỊNH – TƯƠNG LIÊN<br/>(ОПРЕДЕЛИТЕЛЬНО-СООТНОСИТЕЛЬНЫЕ ПРЕДЛОЖЕНИЯ)
        </h3>

        <h4>5. Khái niệm chung</h4>
        <div className="rule-box">
          Có một loại câu có thể gọi là mệnh đề xác định – tương liên.
          <br/>Trong loại câu phức này, hai tình huống được tương quan với nhau, trong đó không nêu tên cụ thể người, vật, dấu hiệu, hoàn cảnh nhưng có sự chỉ định về chúng. Phương tiện liên kết các vế là các đại từ: từ chỉ định ở một vế và từ nghi vấn ở vế kia.
          <br/><br/>
          <i>(RU: Есть тип предложений, который можно назвать определительно-соотносительным. В данном типе сложных предложений соотносятся две ситуации, в которых не называются лица, предметы, признаки, обстоятельства, но содержится указание на них. Средствами связи частей служат местоименные слова: указательные в одной части и вопросительные – в другой.)</i>
        </div>

        <p><strong>Ví dụ:</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 В комнату вошёл <strong>тот, о ком</strong> мы только что говорили.</div>
            <div className="vn">🇻🇳 Người mà chúng ta vừa nói đến bước vào phòng.</div>
          </div>
          <div className="example-item mt-3">
            <div className="ru">🇷🇺 Вера нашла в ящике стола <strong>то, что</strong> так долго искала.</div>
            <div className="vn">🇻🇳 Vera đã tìm thấy trong ngăn bàn thứ mà cô ấy đã tìm kiếm bấy lâu.</div>
          </div>
        </div>

        <div className="note-box mt-3">
          Trong những câu này, người ta nói về một người nào đó hoặc một vật nào đó, nhưng không biết cụ thể đó là ai hoặc là gì. Những câu này gần với mệnh đề xác định, điều này được chứng minh gián tiếp qua khả năng biến đổi của chúng:
          <br/><br/>
          <strong>So sánh:</strong><br/>
          В комнату вошёл <strong>человек, о котором</strong> мы только что говорили.<br/>
          Вера нашла <strong>вещь, которую</strong> искала.
          <br/><br/>
          Tuy nhiên, những sự thay thế như vậy không phải lúc nào cũng có thể và không phải lúc nào cũng phù hợp.<br/>
          <strong>Ví dụ:</strong><br/>
          🇷🇺 Человек с годами, конечно, меняется. Но <strong>то, что</strong> было в него заложено изначально, не продаётся.<br/>
          🇻🇳 Con người tất nhiên thay đổi theo năm tháng. Nhưng cái đã được đặt vào anh ta từ ban đầu thì không bán được.
        </div>

        <h4 className="mt-5">6. Lý do sử dụng cấu trúc này</h4>
        <p>Sự cần thiết sử dụng các câu xác định – tương liên được quyết định bởi một số lý do:</p>
        <ul className="theory-list">
          <li>Người nói không muốn gọi tên cụ thể người hay vật.</li>
          <li>Người nói không biết tên gọi chính xác.</li>
          <li>Thích hợp trong trường hợp tình huống thực tế có sự không xác định.</li>
        </ul>
        <div className="rule-box mt-2">
          <i>(RU: Необходимость употребления определительно-соотносительных предложений обусловлена рядом причин: говорящий не хочет конкретно называть лицо или предмет, он не знает точного наименования, названия. Подобные конструкции уместны и в тех случаях, когда в реальной ситуации имеется неопределённость.)</i>
        </div>

        <p className="mt-3"><strong>Ví dụ:</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Дайте не <strong>то, чем</strong> разливают суп.</div>
            <div className="vn">🇻🇳 Đưa tôi không phải cái để múc canh.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Передайте журнал <strong>тому, кто</strong> будет дежурить сегодня.</div>
            <div className="vn">🇻🇳 Hãy đưa tạp chí cho người trực hôm nay.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Вы его найдёте <strong>там, где</strong> он жил раньше.</div>
            <div className="vn">🇻🇳 Bạn sẽ tìm thấy anh ấy ở nơi anh ấy sống trước đây.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 <strong>Тот, кто</strong> стоит справа, вам директор?</div>
            <div className="vn">🇻🇳 Người đứng bên phải là giám đốc của bạn phải không?</div>
          </div>
        </div>

        <h4 className="mt-5">7. Các cặp đại từ tương liên (Коррелятивные пары)</h4>
        <p>Các đại từ tạo thành các cặp tương liên <i>(Местоименные слова образуют коррелятивные пары)</i>.</p>

        <h5 className="sub-heading">A. Chỉ người (Лица):</h5>
        <p>Dùng các đại từ tương liên <strong>тот (та, те) – кто</strong>; <strong>тот (та, те) – который (какой)</strong> ở các dạng cách tương ứng.</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Наконец появился <strong>тот, с кем</strong> мы должны были встретиться, – <strong>кому</strong> надо было передать документы.</div>
            <div className="vn">🇻🇳 Cuối cùng đã xuất hiện người mà chúng tôi phải gặp – người cần được giao tài liệu.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Мы не встретили <strong>тех, о ком</strong> было столько разговоров.</div>
            <div className="vn">🇻🇳 Chúng tôi đã không gặp những người mà người ta đã nói nhiều về họ.</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">B. Chỉ sự vật, hiện tượng (Предметы, явления):</h5>
        <p>Dùng đại từ <strong>то… что</strong>.</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Я взял только <strong>то, что</strong> мне разрешали.</div>
            <div className="vn">🇻🇳 Tôi chỉ lấy những gì người ta cho phép tôi.</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 Он не знает <strong>того, чем</strong> мы занимаемся.</div>
            <div className="vn">🇻🇳 Anh ấy không biết việc chúng tôi đang làm.</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">C. Chỉ địa điểm và thời gian (Место и время):</h5>
        <p>Dùng các đại từ <strong>там, туда, оттуда … где, куда, откуда</strong>; <strong>тогда … когда</strong> với những tổ hợp khác nhau.</p>

        <h4 className="mt-5">8. Trường hợp bắt buộc dùng đại từ chỉ định</h4>
        <div className="rule-box">
          <strong>Quy tắc:</strong> Đại từ chỉ định bắt buộc trong trường hợp này nếu đi kèm với chúng là các từ <strong>именно, самый</strong> (chính, đúng, thật đúng) cũng như tiểu từ phủ định <strong>не</strong>.
          <br/><i>(RU: Указательные местоимения обязательны в этом случае, если при них употребляются слова именно, самый, а также отрицательная частица не.)</i>
        </div>

        <p><strong>Ví dụ:</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 В справочнике нашли <strong>тот</strong> институт, <strong>который</strong> был им нужен.</div>
            <div className="vn">🇻🇳 Trong sổ tay họ đã tìm thấy đúng cái viện mà họ cần.</div>
          </div>
          <div className="example-item mt-3">
            <div className="ru">🇷🇺 Она купила <strong>именно такую</strong> куртку, <strong>какую</strong> хотела.</div>
            <div className="vn">🇻🇳 Cô ấy đã mua chính cái áo khoác như cô ấy mong muốn.</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OpredelitelnyeTheory;
