import React from 'react';

const PryamayaRechTheory = () => {
  return (
    <div className="theory-content pryamaya-rech-theory">
      <div className="theory-section">
        <h3 className="section-title" style={{ color: 'var(--accent-color)', fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(100, 181, 246, 0.3)', paddingBottom: '0.5rem' }}>
          PHẦN 1: KHÁI NIỆM CƠ BẢN
        </h3>

        <h4>1. Lời nói trực tiếp (Прямая речь)</h4>
        <p>Là cách trích dẫn nguyên văn lời nói của người khác.</p>

        <p><strong>Ví dụ:</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Николай сказал: «Вера приезжает завтра».</div>
            <div className="vn">🇻🇳 Nikolai nói: "Vera sẽ đến vào ngày mai."</div>
          </div>
          <div className="example-item mt-2">
            <div className="ru">🇷🇺 «Вера приезжает завтра», — сказал Николай.</div>
          </div>
        </div>

        <div className="note-box mt-3">
          💡 <strong>Lưu ý cấu trúc:</strong> Nếu phần dẫn lời nằm ở cuối câu, vị ngữ luôn đảo lên đứng trước chủ ngữ (<strong>сказал Николай</strong> thay vì Николай сказал).
        </div>

        <h4 className="mt-4">2. Lời nói gián tiếp (Косвенная речь)</h4>
        <p>Là cách thuật lại lời của người khác dưới dạng một mệnh đề phụ giải thích.</p>

        <p><strong>Ví dụ:</strong></p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Николай сказал, что Вера приезжает завтра.</div>
            <div className="vn">🇻🇳 Nikolai nói rằng Vera sẽ đến vào ngày mai.</div>
          </div>
        </div>
      </div>

      <div className="theory-section">
        <h3 className="section-title mt-5" style={{ color: 'var(--accent-color)', fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(100, 181, 246, 0.3)', paddingBottom: '0.5rem' }}>
          PHẦN 2: 5 QUY TẮC THAY ĐỔI KHI CHUYỂN TỪ TRỰC TIẾP SANG GIÁN TIẾP
        </h3>
        <p>Khi chuyển câu, chúng ta phải nối hai vế bằng liên từ (thường là <strong>что</strong>) và thực hiện các bước thay đổi sau:</p>

        <h5 className="sub-heading mt-4">🔄 Quy tắc 1: Đổi đại từ nhân xưng và sở hữu</h5>
        <p>Phải đổi đại từ sao cho phù hợp với ngôi của người đang thuật lại.</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Отец сказал: «Я вернусь вечером».</div>
            <div className="vn">🇻🇳 Bố nói: "Tôi sẽ về..."</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Отец сказал, что он вернётся вечером.</div>
            <div className="vn">🇻🇳 Bố nói rằng ông ấy sẽ về...</div>
          </div>
          <div className="example-item mt-3">
            <div className="ru">🇷🇺 Сестра написала мне: «Я привезу твои книги».</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Сестра написала мне, что она привезёт мои книги.</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">🔄 Quy tắc 2: Đổi hình thức của động từ</h5>
        <p>Động từ phải chia theo Chủ ngữ mới (sau khi đã đổi ở Quy tắc 1).</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Мать обещала детям: «Я возьму вас в зоопарк».</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Мать обещала детям, что возьмёт их в зоопарк.</div>
            <div className="note">(возьму {"->"} возьмёт)</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">🔄 Quy tắc 3: Lược bỏ thán từ và từ xưng hô</h5>
        <p>Trong lời nói gián tiếp, các từ gọi đáp, cảm thán bị loại bỏ.</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Саша крикнул: «Эй! Ребята! Выезд завтра утром!»</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Саша крикнул, что выезд завтра утром.</div>
            <div className="note">(Bỏ đi "Ê! Các cậu!")</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">🔄 Quy tắc 4: Câu mệnh lệnh chuyển thành cấu trúc «чтобы»</h5>
        <p>Nếu câu trực tiếp là câu cầu khiến, liên từ "что" đổi thành "чтобы" + động từ chia ở quá khứ.</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Таня сказала мне: «Купи к ужину хлеба».</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Таня сказала мне, чтобы я купила к ужину хлеба.</div>
            <div className="vn">🇻🇳 Tanya bảo tôi mua bánh mì...</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">🔄 Quy tắc 5: Tránh nhầm lẫn chủ ngữ bằng «тот, та, те»</h5>
        <p>Nếu chủ ngữ ở 2 vế trùng giới tính và số lượng (ví dụ: Anh ấy bảo em trai rằng anh ấy/em ấy...), ta dùng đại từ chỉ định <strong>тот, та, те</strong> thay cho <strong>он, она, они</strong> ở mệnh đề phụ để chỉ người tiếp nhận hành động.</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Он сказал брату: «Напиши письмо отцу».</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Он сказал брату, чтобы тот написал письмо отцу.</div>
            <div className="vn">🇻🇳 Anh ấy bảo em trai để nó (em trai) viết thư...</div>
          </div>
        </div>
      </div>

      <div className="theory-section">
        <h3 className="section-title mt-5" style={{ color: 'var(--accent-color)', fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(100, 181, 246, 0.3)', paddingBottom: '0.5rem' }}>
          PHẦN 3: CÂU HỎI GIÁN TIẾP (Косвенный вопрос)
        </h3>
        <p>Câu hỏi gián tiếp có cấu trúc như một câu kể bình thường. Cách chuyển phụ thuộc vào từ loại của câu hỏi gốc.</p>

        <h4 className="mt-4">📌 Loại 1: Câu hỏi CÓ TỪ ĐỂ HỎI (кто, что, как, где, почему,...)</h4>
        <div className="rule-box">
          👉 <strong>Cách làm:</strong> Giữ nguyên từ để hỏi làm từ nối. Đổi đại từ và động từ (như Phần 2). Bỏ dấu chấm hỏi.
        </div>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Он спросил: «Когда открывается почта?»</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Он спросил, когда открывается почта.</div>
          </div>
        </div>

        <h4 className="mt-4">📌 Loại 2: Câu hỏi KHÔNG CÓ TỪ ĐỂ HỎI (Câu hỏi Yes/No)</h4>
        <div className="rule-box">
          👉 <strong>Cách làm:</strong> Dùng tiểu từ <strong>«ли»</strong> (có nghĩa là "liệu có... không").
          <br/><strong>Vị trí của «ли»:</strong> Đứng ngay sau từ mang trọng tâm của câu hỏi (thường là động từ chính).
        </div>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Он спросил: «Виктор приедет в этом году в Москву?»</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Он спросил, приедет ли Виктор в этом году в Москву.</div>
            <div className="vn">🇻🇳 Anh ấy hỏi liệu Viktor có đến...</div>
          </div>
        </div>

        <div className="note-box mt-3">
          <strong>Lưu ý với động từ tình thái/liên kết:</strong> «ли» đứng ngay sau các từ này.
          <br/><br/>
          🇷🇺 Он спросил: «Вы хотите поехать летом на Байкал?»
          <br/>➡️ 🇷🇺 Он спросил, хотят ли они поехать летом на Байкал.
        </div>

        <h4 className="mt-5">📌 Các trường hợp nâng cao và biến đổi nghĩa</h4>

        <h5 className="sub-heading mt-4">1. Đi kèm động từ tri giác, cảm xúc, mong muốn (Không chắc chắn)</h5>
        <p>Các động từ như хотеть знать, не знать, слышать (не), волноваться thường đi kèm cấu trúc <strong>«ли»</strong>.</p>
        <ul className="theory-list">
          <li>🇷🇺 Я не знаю, вернётся ли Анатолий к субботе. <i>(🇻🇳 Tôi không biết liệu...)</i></li>
          <li>🇷🇺 Родители очень волнуются, поступит ли сын в университет. <i>(🇻🇳 Bố mẹ lo lắng liệu...)</i></li>
        </ul>

        <h5 className="sub-heading mt-4">2. Khi câu hỏi mang trọng âm logic ở thành phần khác (không phải động từ)</h5>
        <p>Tiểu từ <strong>«ли»</strong> đi theo sau thành phần được nhấn mạnh đó.</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Она спросила: «Виктор давно приехал?»</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Она спросила, давно ли приехал Виктор.</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">3. Khi vị ngữ là một Danh từ ➡️ Dùng cấu trúc «не … ли» (Sự giả định)</h5>
        <p>Khi dùng «не ... ли», câu không còn mang nghĩa "không biết", mà mang nghĩa "phỏng đoán".</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Он спросил: «Вы — журналист?»</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Он спросил, не журналист ли я.</div>
            <div className="vn">🇻🇳 Anh ấy hỏi liệu tôi có phải là nhà báo không.</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">4. Khi có đại từ/phó từ phủ định ➡️ Mất đi nghĩa phủ định</h5>
        <p>Các từ никогда, никто... biến thành когда-нибудь, кто-нибудь...</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Он спросил: «Вы никогда не ездили в Суздаль?»</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Он спросил, ездили ли мы когда-нибудь в Суздаль.</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">5. Vị ngữ mang nghĩa trạng thái tiêu cực (недоволен, неправилен, нездоров)</h5>
        <p>Phủ định "не" bị bỏ đi, chuyển thành sự nghi ngờ.</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Он спросил: «Коля нездоров?»</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Он спросил, здоров ли Коля.</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">6. Câu hỏi chứa từ tình thái (должен, нужно, стоит)</h5>
        <p>Có thể biến đổi thành Cấu trúc Động từ nguyên thể (Инфинитив). Thường dùng động từ thể chưa hoàn thành (НСВ).</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Коля спросил: «Мне нужно ехать прямо сегодня?»</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Коля спросил, нужно ли ему ехать...</div>
            <div className="note">HOẶC:</div>
            <div className="ru">🇷🇺 Коля спросил, ехать ли ему прямо сегодня.</div>
          </div>
        </div>

        <h5 className="sub-heading mt-4">7. Đặc biệt: Từ tình thái phủ định «не нужно / не надо»</h5>
        <p>Khi chuyển sang gián tiếp, câu mang nghĩa khuyên nhủ/suy tính, và động từ nguyên thể chuyển sang thể hoàn thành (СВ).</p>
        <div className="example-group">
          <div className="example-item">
            <div className="ru">🇷🇺 Она спросила: «Мне не надо браться за перевод этой книги?»</div>
            <div className="arrow-down">⬇️</div>
            <div className="ru">🇷🇺 Она спросила, не взяться ли ей за перевод этой книги.</div>
            <div className="vn">🇻🇳 Cô ấy tự hỏi liệu cô ấy có nên bắt tay vào dịch...</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PryamayaRechTheory;
