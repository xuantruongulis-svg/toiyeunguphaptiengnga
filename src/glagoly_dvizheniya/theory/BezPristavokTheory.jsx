import React from 'react';

const BezPristavokTheory = () => {
  return (
    <div className="theory-container">
      <div className="theory-header">
        <h2>Động từ chuyển động cơ bản (Không có tiền tố - Без префиксов)</h2>
        <p className="highlight-text">
          <strong>Nguyên tắc cốt lõi:</strong> Tất cả các động từ chuyển động không có tiền tố đều thuộc <strong>Thể chưa hoàn thành (НСВ - несовершенный вид)</strong>. Các cặp động từ chúng ta học thường là các cặp ghép theo logic ý nghĩa.
        </p>
      </div>

      <div className="theory-section">
        <h3>Phân loại theo hướng di chuyển</h3>
        <p>Động từ chuyển động cơ bản được chia làm 2 nhóm theo hướng di chuyển:</p>
        <div className="comparison-grid">
          <div className="comparison-box">
            <h4>Nhóm I (Đi một hướng - однонаправленное)</h4>
            <p>Biểu thị hành động đang di chuyển theo một hướng cụ thể, vào một thời điểm cụ thể (đang trên đường đi).</p>
          </div>
          <div className="comparison-box">
            <h4>Nhóm II (Đi nhiều hướng / Khứ hồi / Thói quen - разнонаправленное)</h4>
            <p>Biểu thị hành động đi lại nhiều lần (thói quen), đi khứ hồi (đi rồi về), đi theo nhiều hướng khác nhau, hoặc khả năng vận động nói chung.</p>
          </div>
        </div>
      </div>

      <div className="theory-section">
        <h3>1. Phân loại và cách chia động từ (Спряжение)</h3>
        <p>Nắm vững 5 cặp nội động từ (không tác động lên vật khác) và 3 cặp ngoại động từ (có mang/dắt/chở vật hoặc người). Việc nắm rõ cách chia động từ ở thì hiện tại và quá khứ là ngữ pháp bắt buộc tối thiểu.</p>
        
        <h4>A. Nội động từ (Непереходные глаголы) - 5 cặp:</h4>
        <div className="table-responsive">
          <table className="theory-table">
            <thead>
              <tr>
                <th>Cặp động từ (Nhóm I — Nhóm II)</th>
                <th>Ý nghĩa</th>
                <th>Nhóm I (Hiện tại & Quá khứ)</th>
                <th>Nhóm II (Hiện tại & Quá khứ)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>идти — ходить</strong></td>
                <td>Đi bộ</td>
                <td>я иду, ты идёшь... <br/><em>(quá khứ: шёл, шла, шли)</em></td>
                <td>я хожу, ты ходишь... <br/><em>(quá khứ: ходил, ходила...)</em></td>
              </tr>
              <tr>
                <td><strong>ехать — ездить</strong></td>
                <td>Đi bằng phương tiện</td>
                <td>я еду, ты едешь...</td>
                <td>я езжу, ты ездишь...</td>
              </tr>
              <tr>
                <td><strong>бежать — бегать</strong></td>
                <td>Chạy</td>
                <td>я бегу, ты бежишь...</td>
                <td>я бегаю, ты бегаешь...</td>
              </tr>
              <tr>
                <td><strong>лететь — летать</strong></td>
                <td>Bay</td>
                <td>я лечу, ты летишь...</td>
                <td>я летаю, ты летаешь...</td>
              </tr>
              <tr>
                <td><strong>плыть — плавать</strong></td>
                <td>Bơi, đi đường thủy</td>
                <td>я плыву, ты плывёшь...</td>
                <td>я плаваю, ты плаваешь...</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 style={{marginTop: '2rem'}}>B. Ngoại động từ (Переходные глаголы) - 3 cặp:</h4>
        <div className="table-responsive">
          <table className="theory-table">
            <thead>
              <tr>
                <th>Cặp động từ (Nhóm I — Nhóm II)</th>
                <th>Ý nghĩa</th>
                <th>Nhóm I (Hiện tại & Quá khứ)</th>
                <th>Nhóm II (Hiện tại & Quá khứ)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>нести — носить</strong></td>
                <td>Mang, xách, bế (trên tay/người)</td>
                <td>я несу, ты несёшь... <br/><em>(quá khứ: нёс, несла, несли)</em></td>
                <td>я ношу, ты носишь...</td>
              </tr>
              <tr>
                <td><strong>везти — возить</strong></td>
                <td>Chở, vận chuyển bằng phương tiện</td>
                <td>я везу, ты везёшь... <br/><em>(quá khứ: вёз, везла, везли)</em></td>
                <td>я вожу, ты возишь...</td>
              </tr>
              <tr>
                <td><strong>вести — водить</strong></td>
                <td>Dắt, dẫn đi</td>
                <td>я веду, ты ведёшь... <br/><em>(quá khứ: вёл, вела, вели)</em></td>
                <td>я вожу, ты <strong>водишь</strong>...</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="note-text"><em>Lưu ý:</em> Mặc dù "возить" và "водить" khi chia ở ngôi "Я" đều là "я вожу", nhưng ngôi "Ты" sẽ khác nhau: "ты <strong>возишь</strong>" vs "ты <strong>водишь</strong>".</p>
      </div>

      <div className="theory-section">
        <h3>2. Các quy tắc sử dụng cốt lõi (Общее правило)</h3>
        
        <div className="rule-box">
          <h4>Quy tắc 1: Sự khác biệt về hướng đi</h4>
          <ul>
            <li><strong>Nhóm I:</strong> Я иду в университет. <em>(Tôi đang trên đường đi đến trường đại học - chỉ một hướng.)</em></li>
            <li><strong>Nhóm I:</strong> Я иду из университета домой. <em>(Tôi đang từ trường về nhà - chỉ một hướng.)</em></li>
            <li><strong>Nhóm II:</strong> Я каждый день хожу в университет. <em>(Ngày nào tôi cũng đi đến trường - thói quen, lặp lại.)</em></li>
            <li><strong>Nhóm II:</strong> Я люблю ходить по городу пешком. <em>(Tôi thích đi dạo bộ quanh thành phố - đi nhiều hướng.)</em></li>
          </ul>
        </div>

        <div className="rule-box">
          <h4>Quy tắc 2: Quy luật về thì (Thời gian)</h4>
          <p>Để sử dụng đúng, cần nhớ sự tương quan logic rất chặt chẽ giữa thời gian và nhóm động từ:</p>
          <ul>
            <li><strong>Hôm qua (quá khứ):</strong> Dùng Nhóm II (НСВ) ➔ <em>вчера ходил, ездил</em> (có nghĩa là đã đi đến đó và đã về / đã từng ở đó).</li>
            <li><strong>Bây giờ (hiện tại):</strong> Dùng Nhóm I (НСВ) ➔ <em>сейчас иду, еду</em> (đang trên đường đi).</li>
            <li><strong>Ngày mai (tương lai):</strong> Phải thêm tiền tố để tạo thành Thể hoàn thành (СВ) ➔ <em>завтра пойду hoặc схожу, поеду hoặc съезжу</em> (muốn có kết quả của việc đi).</li>
          </ul>
        </div>

        <div className="rule-box">
          <h4>Quy tắc 3: Đi bộ (идти) vs Đi phương tiện (ехать)</h4>
          <ul>
            <li>Nếu di chuyển trong cùng một thành phố (khoảng cách gần), người Nga thường dùng <strong>идти (ходить)</strong>: <br/><em>Вчера мы ходили в гости. (Hôm qua chúng tôi đã đi chơi/làm khách.)</em></li>
            <li>Nếu nhắc đến phương tiện cụ thể hoặc đi xa, bắt buộc dùng <strong>ехать (ездить)</strong>: <br/><em>Сначала поедем на метро, потом на автобусе. (Đầu tiên chúng ta sẽ đi bằng tàu điện ngầm, sau đó bằng xe buýt.)</em></li>
          </ul>
        </div>

        <div className="rule-box">
          <h4>Quy tắc 4: Hiện tại mang nghĩa tương lai gần</h4>
          <p>Nếu hành động chắc chắn sẽ xảy ra trong tương lai rất gần, có thể dùng thì hiện tại của Nhóm I:</p>
          <ul>
            <li><em>Вечером я иду в театр.</em> (Tối nay tôi sẽ đi xem kịch.)</li>
            <li><em>Завтра я еду в Москву.</em> (Ngày mai tôi sẽ đi Moscow.)</li>
          </ul>
        </div>

        <div className="rule-box">
          <h4>Quy tắc 5: Nói về Kỹ năng và Khả năng</h4>
          <p>Khi nói ai đó biết/không biết làm một hành động nào đó (kỹ năng), <strong>luôn sử dụng Nhóm II</strong>:</p>
          <ul>
            <li><em>Я не умею плавать.</em> (Tôi không biết bơi.)</li>
            <li><em>Птенец ещё не умеет летать.</em> (Chim non vẫn chưa biết bay.)</li>
          </ul>
        </div>
      </div>

      <div className="theory-section">
        <h3>3. Quy tắc ngữ pháp kết hợp từ (Cách)</h3>
        <ul>
          <li><strong>Nhóm I thường đi với Cách 4 (Винительный падеж)</strong> để chỉ đích đến cụ thể: <br/><em>Я лечу в Москву. (Tôi đang bay tới Moscow.)</em></li>
          <li><strong>Nhóm II có thể kết hợp với các cách khác</strong> để chỉ vị trí, quá trình: <br/><em>Я люблю плавать в бассейне. (Tôi thích bơi trong hồ bơi - Cách 6.)</em><br/><em>Птицы летают в небе. (Những chú chim bay lượn trên trời - Cách 6.)</em></li>
        </ul>
      </div>

      <div className="theory-section">
        <h3>4. Cách phân biệt nhóm ngoại động từ (Mang, Chở, Dắt)</h3>
        <ul className="examples-list">
          <li><strong>Нести/Носить (Bằng tay/sức người):</strong> <br/><em>Он несёт портфель.</em> (Anh ấy đang xách cặp.) <br/><em>Папа несёт ребёнка на руках.</em> (Bố đang bế đứa trẻ trên tay.)</li>
          <li><strong>Вести/Водить (Dắt, dẫn đường):</strong> <br/><em>Он ведёт друга к врачу.</em> (Anh ấy đang dẫn người bạn đến bác sĩ.) <br/><em>Мама ведёт ребёнка за руку.</em> (Mẹ đang dắt tay đứa trẻ.)</li>
          <li><strong>Везти/Возить (Chở bằng xe/phương tiện):</strong> <br/><em>Он везёт друга на велосипеде.</em> (Anh ấy đang chở bạn bằng xe đạp.) <br/><em>Мама везёт ребёнка в коляске.</em> (Mẹ đang đẩy/chở em bé trong xe nôi.)</li>
        </ul>
      </div>

      <div className="theory-section">
        <h3>5. Nghĩa bóng (Переносное значение)</h3>
        <p>Một đặc trưng lớn của động từ chuyển động là chúng được dùng rất nhiều trong cụm từ cố định mang nghĩa bóng. Hãy học thuộc các cách diễn đạt sau:</p>
        <div className="idiom-grid">
          <div className="idiom-item"><strong>Идти:</strong> Идёт дождь (Trời mưa); Тебе идёт этот цвет (Màu này hợp với bạn đấy); Идёт урок (Giờ học đang diễn ra).</div>
          <div className="idiom-item"><strong>Бежать/Лететь:</strong> Как быстро бежит (летит) время! (Thời gian trôi/bay nhanh quá!).</div>
          <div className="idiom-item"><strong>Ходить:</strong> Часы не ходят (Đồng hồ chết/không chạy); Он ходит в очках (Anh ấy đeo kính).</div>
          <div className="idiom-item"><strong>Вести:</strong> Учитель ведёт урок (Giáo viên giảng bài); Ребёнок плохо себя ведёт (Đứa trẻ cư xử tồi / hư).</div>
          <div className="idiom-item"><strong>Водить:</strong> Ты хорошо водишь машину (Bạn lái xe giỏi đấy).</div>
          <div className="idiom-item"><strong>Везти:</strong> Мне часто везёт (Tôi thường hay gặp may mắn).</div>
          <div className="idiom-item"><strong>Плавать:</strong> На экзамене плавал (Bị ấp úng / lúng túng / "bơi" trong phòng thi).</div>
        </div>
      </div>
      
    </div>
  );
};

export default BezPristavokTheory;
