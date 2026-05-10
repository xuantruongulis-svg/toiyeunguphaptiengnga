import React from 'react';

const ImperativeTheory = () => {
  return (
    <div className="theory-container">
      {/* 1. ВИД ГЛАГОЛА В ИНФИНИТИВЕ */}
      <div className="theory-block">
        <h3 className="theory-block-title">I. THỂ CỦA ĐỘNG TỪ Ở DẠNG NGUYÊN THỂ (ВИД ГЛАГОЛА В ИНФИНИТИВЕ)</h3>
        <p>
          <strong>Quy tắc chung (Общее правило):</strong> Như chúng ta đã biết, tất cả các động từ 
          <strong style={{ color: '#64b5f6' }}> СВ</strong> (hoàn thành thể) đều đặc trưng bởi một ý nghĩa — 
          <strong> «kết quả»</strong> (hoặc một hành động đơn lẻ cũng là kết quả), trong khi động từ 
          <strong style={{ color: '#ffb74d' }}> НСВ</strong> (chưa hoàn thành thể) có ba ý nghĩa — 
          <strong> «quá trình», «lặp lại», «sự kiện/sự thật»</strong>. Khi chọn động từ, bạn hãy luôn bắt đầu suy nghĩ từ СВ: Ý tưởng chính có phải là "kết quả" hay không?
        </p>
        <p>
          Để thuận tiện và nhanh chóng (tạo phản xạ tự động), dưới đây là một số khuyến nghị về các trường hợp 
          chắc chắn sử dụng НСВ hoặc СВ.
        </p>
        
        <table className="theory-table">
          <thead>
            <tr>
              <th colSpan="2" style={{ textAlign: 'center', backgroundColor: 'rgba(255, 183, 77, 0.1)' }}>
                <strong style={{ color: '#ffb74d' }}>НСВ</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: '40%' }}>
                <strong>1. Các động từ mang nghĩa «bắt đầu» hoặc «kết thúc/dừng» + Động từ nguyên thể НСВ</strong>
              </td>
              <td>
                <ul style={{ margin: 0, paddingLeft: '1rem', color: 'var(--text-secondary)' }}>
                  <li>Я начинаю (начал, начну) учить русский язык. <em>(Tôi bắt đầu học tiếng Nga)</em></li>
                  <li>Он стал учить русский язык. <em>(Anh ấy đã bắt đầu học tiếng Nga)</em></li>
                  <li>Он принялся учить русский язык. <em>(Anh ấy đã bắt tay vào học tiếng Nga)</em></li>
                  <li>Он кончает (кончил) курить. <em>(Anh ấy đang/đã kết thúc việc hút thuốc)</em></li>
                  <li>Он бросил курить. <em>(Anh ấy đã bỏ hút thuốc)</em></li>
                  <li>Он перестал курить. <em>(Anh ấy đã ngừng hút thuốc)</em></li>
                  <li>Он продолжает (продолжил) говорить об этом. <em>(Anh ấy tiếp tục nói về điều đó)</em></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <strong>2. Trong các cấu trúc mang ý nghĩa «không cần thiết phải làm gì» + Động từ nguyên thể НСВ</strong>
              </td>
              <td>
                <ul style={{ margin: 0, paddingLeft: '1rem', color: 'var(--text-secondary)' }}>
                  <li>Не надо говорить ей об этом! <em>(Không cần/đừng nói với cô ấy về điều này!)</em></li>
                  <li>Не нужно курить здесь! <em>(Không cần/đừng hút thuốc ở đây!)</em></li>
                  <li>Не стоит делать этого! <em>(Không đáng/không nên làm điều đó!)</em></li>
                  <li>Не следует так делать. <em>(Không nên làm như vậy)</em></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="theory-table" style={{ marginTop: '1.5rem' }}>
          <thead>
            <tr>
              <th colSpan="2" style={{ textAlign: 'center', backgroundColor: 'rgba(100, 181, 246, 0.1)' }}>
                <strong style={{ color: '#64b5f6' }}>СВ</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: '40%' }}>
                <strong>1. Các động từ và cấu trúc mang ý nghĩa «đạt được kết quả thành công» + Động từ nguyên thể СВ</strong>
              </td>
              <td>
                <ul style={{ margin: 0, paddingLeft: '1rem', color: 'var(--text-secondary)' }}>
                  <li>Я сумел купить билет. <em>(Tôi đã mua được vé - thành công)</em></li>
                  <li>Он успел купить билет. <em>(Anh ấy đã kịp mua vé)</em></li>
                  <li>Ему удалось купить билет. <em>(Anh ấy đã thành công trong việc mua vé)</em></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2. ВИД ГЛАГОЛА В ИМПЕРАТИВЕ */}
      <div className="theory-block" style={{ marginTop: '2rem' }}>
        <h3 className="theory-block-title">II. THỂ CỦA ĐỘNG TỪ Ở THỨC MỆNH LỆNH (ВИД ГЛАГОЛА В ИМПЕРАТИВЕ)</h3>
        <p>
          Quy tắc chung về ý nghĩa vẫn được giữ nguyên cho thức mệnh lệnh: <strong style={{ color: '#ffb74d' }}>НСВ</strong> (quá trình, nhiều lần, sự việc) 
          và <strong style={{ color: '#64b5f6' }}>СВ</strong> (kết quả). Dưới đây là các khuyến nghị chi tiết:
        </p>

        <table className="theory-table">
          <thead>
            <tr>
              <th>Ý nghĩa</th>
              <th>Sử dụng Thể (Вид)</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="2"><strong>«Cần làm (Надо делать/сделать)»</strong></td>
              <td>
                <strong><span style={{ color: '#64b5f6' }}>СВ</span> — chiếm đến 80%</strong><br/>
                <em style={{ color: 'var(--text-secondary)' }}>Hành động hướng tới kết quả</em>
              </td>
              <td>
                Открой окно! <em>(Hãy mở cửa sổ ra!)</em><br/>
                Принесите кофе! <em>(Hãy mang cà phê đến đây!)</em>
              </td>
            </tr>
            <tr>
              <td>
                <strong><span style={{ color: '#ffb74d' }}>НСВ</span> — khoảng 20%</strong><br/>
                <em style={{ color: 'var(--text-secondary)' }}>Khi hành động cần phải xảy ra ngay lập tức</em>
              </td>
              <td>
                Звоните в милицию! <em>(Gọi cảnh sát ngay!)</em><br/>
                Берите ручку и записывайте! <em>(Cầm bút lên và ghi chép ngay!)</em>
              </td>
            </tr>
            <tr>
              <td><strong>«Không cần/Không được làm (Не надо делать)»</strong></td>
              <td>
                <strong>Chỉ sử dụng <span style={{ color: '#ffb74d' }}>НСВ</span></strong>
              </td>
              <td>
                Не открывай окно! <em>(Đừng mở cửa sổ!)</em><br/>
                Не приносите кофе! <em>(Đừng mang cà phê tới!)</em>
              </td>
            </tr>
          </tbody>
        </table>

        <h4 style={{ color: 'var(--accent-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
          * Cấu trúc đặc biệt: Смотри(те) не + Mệnh lệnh
        </h4>
        <p>
          Cấu trúc này mang ý nghĩa cảnh báo, tức là <strong>«cẩn thận đấy! / coi chừng!»</strong>. <br/>
          Thông thường (90% trường hợp) sẽ dùng <strong style={{ color: '#64b5f6' }}>СВ</strong> (kết quả đơn lẻ). Rất hiếm khi dùng <strong style={{ color: '#ffb74d' }}>НСВ</strong> (hành động lặp lại).
        </p>
        <ul style={{ color: 'var(--text-secondary)' }}>
          <li>Смотрите не опоздайте на самолёт! <em>(Coi chừng bị trễ chuyến bay đấy! - СВ)</em></li>
          <li>Смотри не опаздывай на занятия, как ты обычно опаздываешь! <em>(Coi chừng đừng có đi học trễ như bạn vẫn thường làm nhé! - НСВ)</em></li>
        </ul>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
          Lưu ý: Trong văn nói, "смотри(те) не" thường bị rút gọn thành "не". Ví dụ: "Смотри не забудь тетрадь!" biến thành "Не забудь тетрадь!" (Đừng quên vở!). Hình thức này trông giống như "не + НСВ" nhưng thực chất là cấu trúc cảnh báo nên dùng СВ. Hãy chú ý đến ngữ cảnh!
        </p>
      </div>

      {/* 3. ОБРАЗОВАНИЕ ФОРМ ИМПЕРАТИВА */}
      <div className="theory-block" style={{ marginTop: '2rem' }}>
        <h3 className="theory-block-title">III. CÁCH THÀNH LẬP THỨC MỆNH LỆNH (ОБРАЗОВАНИЕ ФОРМ ИМПЕРАТИВА)</h3>
        
        <table className="theory-table">
          <thead>
            <tr>
              <th style={{ width: '40%' }}>Quy tắc</th>
              <th>Đuôi kết thúc</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Nếu nguyên thể kết thúc bằng -ИТЬ:</strong><br/>- Trọng âm rơi vào <strong>-ить</strong><br/>- Trọng âm <strong>không</strong> rơi vào <strong>-ить</strong></td>
              <td><br/><strong>-И</strong><br/><strong>-Ь</strong></td>
              <td><br/>люб<strong style={{ color: 'var(--accent-color)' }}>ить</strong> — люб<strong>и(те)</strong>, ход<strong style={{ color: 'var(--accent-color)' }}>ить</strong> — ход<strong>и(те)</strong><br/>гот<strong style={{ color: 'var(--accent-color)' }}>о</strong>вить — готов<strong>ь(те)</strong>, ст<strong style={{ color: 'var(--accent-color)' }}>а</strong>вить — став<strong>ь(те)</strong></td>
            </tr>
            <tr>
              <td><strong>2. Nếu nguyên thể KHÔNG kết thúc bằng -ИТЬ:</strong><br/>Xét dạng ngôi "я" (số ít, ngôi thứ nhất):<br/>- Nếu trọng âm rơi vào âm tiết cuối (đuôi)<br/>- Nếu trọng âm <strong>không</strong> rơi vào âm tiết cuối</td>
              <td><br/><br/><br/><strong>-И</strong><br/><strong>-Ь</strong></td>
              <td><br/><br/>смотр<strong style={{ color: 'var(--accent-color)' }}>ю</strong> — смотр<strong>и(те)</strong>, ид<strong style={{ color: 'var(--accent-color)' }}>у</strong> — ид<strong>и(те)</strong><br/>б<strong style={{ color: 'var(--accent-color)' }}>у</strong>ду — буд<strong>ь(те)</strong>, пл<strong style={{ color: 'var(--accent-color)' }}>а</strong>чу — не плач<strong>ь(те)</strong></td>
            </tr>
            <tr>
              <td><strong>3. Nếu ở ngôi "я", xuất hiện âm [й] (y ngắn) trong phát âm:</strong></td>
              <td><strong>-Й</strong></td>
              <td>
                читаю [чита<strong>й</strong>у] — чита<strong>й(те)</strong><br/>
                пою [па<strong>й</strong>у] — по<strong>й(те)</strong><br/>
                пью [п<strong>й</strong>у] — пе<strong>й(те)</strong><br/>
                рисую [рису<strong>й</strong>у] — рису<strong>й(те)</strong>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(255, 82, 82, 0.1)', borderLeft: '4px solid #ff5252', borderRadius: '4px' }}>
          <strong>* Ngoại lệ (Исключения):</strong>
          <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' }}>
            <li>есть <em>(ăn)</em> — <strong>ешь(те)</strong></li>
            <li>давать <em>(cho, đưa)</em> — <strong>давай(те)</strong></li>
            <li>дать <em>(cho, đưa - СВ)</em> — <strong>дай(те)</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImperativeTheory;
