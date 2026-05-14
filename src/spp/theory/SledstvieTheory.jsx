import React from 'react';

export default function SledstvieTheory() {
  return (
    <div className="theory-container">
      <h3>5. QUAN HỆ HỆ QUẢ (Следствие)</h3>
      <p>Chỉ ra vế thứ nhất là nguyên nhân, vế thứ hai là kết quả/hậu quả. Liên từ hệ quả <strong>CHỈ</strong> đứng ở vế thứ hai.</p>

      <div className="theory-table-wrapper">
        <table className="theory-table">
          <thead>
            <tr>
              <th>Loại liên từ</th>
              <th>Liên từ</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Liên từ thông thường</strong></td>
              <td><strong>и, поэтому (и поэтому), так что</strong> (Vì vậy, cho nên).<br/><br/><em>Có thể kết hợp các từ nhấn mạnh: потому, оттого, тогда, тем самым.</em></td>
              <td>Вокзал недалеко от их дома, так что они успеют на поезд. <br/><em>(Nhà ga cách nhà họ không xa, cho nên họ sẽ kịp chuyến tàu.)</em></td>
            </tr>
            <tr>
              <td><strong>Phong cách sách vở</strong></td>
              <td><strong>в результате чего, вследствие чего, в связи с чем, благодаря чему</strong></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Kết luận mang tính logic</strong></td>
              <td>Dùng <strong>значит</strong> (trung tính), <strong>следовательно</strong> (sách vở) - Có nghĩa là, suy ra là.</td>
              <td>Свет в окнах не горит, значит, дома никого нет. <br/><em>(Đèn cửa sổ không sáng, có nghĩa là không có ai ở nhà.)</em></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Sự kết hợp giữa MỨC ĐỘ và HỆ QUẢ:</h4>
      <p>Dùng cấu trúc <strong>так / такой ... что</strong> (Quá/Đến nỗi... đến mức).</p>
      <div className="theory-table-wrapper">
        <table className="theory-table">
          <tbody>
            <tr>
              <td><strong>так</strong> + Tính từ ngắn đuôi / Trạng từ / Động từ.</td>
              <td>Солнце сияло так ярко, что глазам было больно смотреть. <br/><em>(Mặt trời chói sáng đến mức khiến mắt bị đau khi nhìn.)</em></td>
            </tr>
            <tr>
              <td><strong>такой</strong> + Tính từ đầy đủ / Một số danh từ đặc biệt (cỡ tốc độ, sức mạnh, sự bừa bộn...).</td>
              <td>Эта девочка такая непоседа, что и минуты на месте не посидит. <br/><em>(Cô bé này hiếu động đến mức một phút cũng không ngồi yên được.)</em></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Hệ quả bị giới hạn bởi định mức (Đủ/Không đủ/Quá mức):</h4>
      <p>Dùng <strong>достаточно, недостаточно, довольно, слишком, не столько + чтобы</strong>.</p>
      <ul>
        <li><strong>Ví dụ:</strong> Больной слишком слаб, чтобы ехать так далеко. <em>(Bệnh nhân quá yếu để có thể đi xa như vậy. -&gt; Yếu nên kết quả là KHÔNG THỂ đi).</em></li>
      </ul>
    </div>
  );
}
