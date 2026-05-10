import React from 'react';

const VidConceptTheory = () => {
  return (
    <div className="theory-container">
      <div className="theory-block">
        <h3 className="theory-block-title">Khái niệm về thể (Понятие вида)</h3>
        <p>Tất cả các động từ trong tiếng Nga đều có thể: <strong>Chưa hoàn thành (НСВ)</strong> hoặc <strong>Hoàn thành (СВ)</strong>.</p>
        <table className="theory-table">
          <thead>
            <tr>
              <th>Thể của động từ (Вид глагола)</th>
              <th>Ý nghĩa (Значение)</th>
              <th>Ví dụ (Пример)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>НСВ</strong><br/>(Несовершенный вид)</td>
              <td>Thể hiện hành động đang trong quá trình diễn ra (в процессе его протекания).</td>
              <td>Он читает книгу.<br/><em>(Anh ấy đang đọc sách.)</em></td>
            </tr>
            <tr>
              <td><strong>СВ</strong><br/>(Совершенный вид)</td>
              <td>Thể hiện hành động bị giới hạn bởi một giới hạn/kết quả (результат/предел).</td>
              <td>Он прочитал книгу.<br/><em>(Anh ấy đã đọc xong sách.)</em></td>
            </tr>
          </tbody>
        </table>
        
        <div className="theory-note warning" style={{ marginTop: '1rem', background: 'rgba(255, 165, 0, 0.1)', borderLeft: '4px solid orange', padding: '1rem' }}>
          <strong>Lưu ý:</strong> Chúng ta thường dùng từ "kết quả" (результат) để chỉ sự "kết thúc", "hoàn thành". Tuy nhiên, trong ngữ pháp tiếng Nga, từ "giới hạn" (предел) chính xác hơn, đặc biệt đối với các động từ bị giới hạn về thời gian (như <em>полежать</em> - nằm một lát) hoặc động từ chỉ hành động xảy ra một lần (như <em>крикнуть</em> - hét lên một tiếng).
        </div>
      </div>

      <div className="theory-block" style={{ marginTop: '2rem' }}>
        <h3 className="theory-block-title">1. Động từ hai thể (Двувидовые глаголы)</h3>
        <p>Là một nhóm nhỏ các động từ có thể mang nghĩa cả <strong>НСВ</strong> lẫn <strong>СВ</strong> tùy thuộc vào ngữ cảnh.</p>
        <ul>
          <li><strong>Ví dụ:</strong> исследовать (nghiên cứu), использовать (sử dụng), атаковать (tấn công), госпитализировать (nhập viện),...</li>
          <li><strong>Ngữ cảnh quyết định thể:</strong>
            <ul>
              <li><em>Сейчас мы используем многие материалы.</em> (НСВ - Hiện tại chúng ta đang sử dụng...)</li>
              <li><em>Мы используем данные материалы завтра.</em> (СВ - Ngày mai chúng ta sẽ sử dụng...)</li>
            </ul>
          </li>
          <li><strong>Phân từ:</strong> Chúng tạo ra phân từ của cả НСВ và СВ (VD: исследующий, исследовавший, исследованный).</li>
          <li><strong>Mở rộng:</strong> Một số động từ hai thể có thể tạo cặp thể bằng cách thêm tiền tố/hậu tố: <em>жениться — пожениться, арестовывать — арестовать, организовывать — организовать</em>...</li>
        </ul>
      </div>

      <div className="theory-block" style={{ marginTop: '2rem' }}>
        <h3 className="theory-block-title">2. Động từ đơn thể (Одновидовые глаголы)</h3>
        <p>Là các động từ <strong>không có cặp thể</strong> và chỉ được sử dụng ở một thể duy nhất.</p>
        
        <table className="theory-table">
          <thead>
            <tr>
              <th>Chỉ có НСВ (Только НСВ)</th>
              <th>Chỉ có СВ (Только СВ)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Nhóm lớn, thường mang nghĩa "tồn tại" và "đặc điểm":</p>
                <p><strong>Ví dụ:</strong> находиться, быть, стоять, сиять, иметь, значить, зависеть, обожать, существовать, идти, ехать, лететь...</p>
                <div className="theory-note" style={{ marginTop: '1rem', background: 'rgba(0, 150, 255, 0.1)', padding: '1rem', borderRadius: '8px' }}>
                  <strong>Thực hành:</strong> Về mặt học thuật (Hàn lâm), nhiều động từ chỉ có thể НСВ (vd: желать, любить, петь, пить...). Nhưng trong thực tế học tiếng Nga cho người nước ngoài, chúng vẫn được ghép cặp với СВ để dễ nhớ và áp dụng:
                  <ul style={{ marginTop: '0.5rem' }}>
                    <li>желать — пожелать</li>
                    <li>мечтать — помечтать</li>
                    <li>любить — полюбить</li>
                    <li>есть — поесть, съесть</li>
                    <li>пить — выпить, попить</li>
                    <li>радоваться — обрадоваться</li>
                  </ul>
                </div>
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <p>Nhóm rất nhỏ:</p>
                <p><strong>Ví dụ:</strong> закричать (hét lên), развеселиться (trở nên vui vẻ), промолчать (im lặng), расплакаться (bật khóc), побыть (ở lại một lát), погостить (làm khách một thời gian), погулять (đi dạo một chút)...</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="theory-block" style={{ marginTop: '2rem' }}>
        <h3 className="theory-block-title">3. Cặp thể tương quan (Видовые пары)</h3>
        <p>Đa số động từ trong tiếng Nga tạo thành các cặp thể. Có 3 cách tạo cặp thể chính:</p>
        
        <table className="theory-table">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Cách tạo (Способ)</th>
              <th style={{ width: '25%' }}>Ví dụ (НСВ ➔ СВ)</th>
              <th>Đặc điểm & Từ vựng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>1. Thêm tiền tố</strong><br/>
                (Перфективация)
              </td>
              <td>
                читать ➔ <strong>про</strong>читать<br/>
                делать ➔ <strong>с</strong>делать<br/>
                писать ➔ <strong>на</strong>писать
              </td>
              <td>
                <p><strong>Từ vựng cơ bản:</strong> петь - спеть, пить - выпить, мыть - помыть, видеть - увидеть, ждать - подождать, учить - выучить...</p>
                <p><em>Ngoại lệ (Không thêm tiền tố):</em> покупать ➔ купить</p>
                <p style={{ marginTop: '0.5rem' }}><strong>Từ vựng mở rộng:</strong> кипятить - вскипятить, лечить - вылечить, сохнуть - высохнуть, строить - построить, шутить - пошутить...</p>
                <div className="theory-note" style={{ marginTop: '0.5rem', fontStyle: 'italic', color: '#ccc' }}>
                  Một số cặp có thể dùng nhiều tiền tố tùy phong cách (trang trọng/hội thoại): <em>менять — обменять/поменять, платить — оплатить/заплатить, пачкать — испачкать/запачкать</em>...
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>2. Thay đổi hậu tố</strong><br/>
                (Имперфективация)
              </td>
              <td>
                да<strong>ва</strong>ть ➔ дать<br/>
                реш<strong>а</strong>ть ➔ реш<strong>и</strong>ть<br/>
                рассказ<strong>ыва</strong>ть ➔ рассказ<strong>а</strong>ть
              </td>
              <td>
                <p><strong>Từ vựng cơ bản:</strong> открывать - открыть, забывать - забыть, понимать - понять, начинать - начать, выбирать - выбрать, отдыхать - отдохнуть...</p>
                <p style={{ marginTop: '0.5rem' }}><strong>Cách dùng với các cách (Падежи):</strong></p>
                <ul style={{ paddingLeft: '1.2rem', marginBottom: 0 }}>
                  <li><em>Với Cách 2:</em> лишать(ся) - лишить(ся), достигать - достигнуть, добиваться - добиться...</li>
                  <li><em>Với Cách 4:</em> бросать - бросить, встречать - встретить, одевать - одеть...</li>
                  <li><em>Với Cách 3:</em> проигрывать - проиграть, разрешать - разрешить...</li>
                  <li><em>Với Cách 5:</em> заниматься - заняться, увлекаться - увлечься...</li>
                  <li><em>Với Cách 6:</em> ошибаться - ошибиться, признаваться - признаться...</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <strong>3. Biến đổi hoàn toàn gốc từ</strong><br/>
                (Супплетивные пары)
              </td>
              <td>
                <strong>говорить</strong> ➔ <strong>сказать</strong>
              </td>
              <td>
                <p>Số lượng rất ít nhưng dùng cực kỳ phổ biến:</p>
                <ul>
                  <li>брать ➔ взять (lấy)</li>
                  <li>класть ➔ положить (đặt, để)</li>
                  <li>искать ➔ найти (tìm kiếm)</li>
                  <li>ловить ➔ поймать (bắt)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VidConceptTheory;
