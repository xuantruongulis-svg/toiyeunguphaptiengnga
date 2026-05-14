import React from 'react';

export default function TselTheory() {
  return (
    <div className="theory-container">
      <h3>4. QUAN HỆ MỤC ĐÍCH (Цель)</h3>
      <p>Thể hiện mục đích của hành động. Dùng liên từ <strong>чтобы / для того чтобы</strong> (Để).</p>

      <div className="theory-block">
        <h4>Cấu trúc chung:</h4>
        <p><strong>Vế chính + чтобы + Vế phụ (Động từ chia ở thì Quá khứ hoặc Nguyên thể).</strong></p>
        <p><em>Ví dụ:</em> Лена дала мне журнал, чтобы я прочитал его в дороге. <em>(Lena đã đưa tôi cuốn tạp chí để tôi đọc trên đường đi. -&gt; Chủ ngữ khác nhau: Lena đưa, tôi đọc).</em></p>
      </div>

      <h4>Sự rút gọn bằng Động từ nguyên thể (Инфинитив):</h4>
      <p>Nếu chủ thể của cả 2 vế <strong>LÀ MỘT</strong> (Trùng nhau), ta dùng: <strong>чтобы + Động từ nguyên thể</strong>.</p>
      <p><em>Ví dụ:</em> Я купил журнал, чтобы прочитать его в дороге. <em>(TÔI mua tạp chí để TÔI đọc).</em></p>

      <h4>CÁC TRƯỜNG HỢP KHÔNG THỂ RÚT GỌN (Bắt buộc nhớ):</h4>
      <p>Dù chủ thể trùng nhau hay hướng đến một mục đích chung, nhưng <strong>KHÔNG</strong> được dùng nguyên thể trong 3 trường hợp sau:</p>
      <div className="theory-table-wrapper">
        <table className="theory-table">
          <tbody>
            <tr>
              <td>1. Vế phụ có tiểu từ phủ định <strong>не</strong></td>
              <td>Он положил деньги во внутренний карман, <strong>чтобы не потерять</strong> их. <br/><em>(Anh ấy cất tiền vào túi trong để không đánh mất chúng.)</em></td>
            </tr>
            <tr>
              <td>2. Vế chính có chủ thể <strong>không xác định / khái quát</strong></td>
              <td>Все приборы проверили, <strong>чтобы определить</strong> их качество. <br/><em>(Tất cả thiết bị đã được kiểm tra để xác định chất lượng.)</em></td>
            </tr>
            <tr>
              <td>3. Vế phụ dùng động từ <strong>chỉ trạng thái, nhận thức thụ động</strong> (nhìn, nghe)</td>
              <td>Она подошла поближе, <strong>чтобы лучше видеть и слышать</strong> молодых артистов. <br/><em>(Cô ấy tiến lại gần hơn để có thể nhìn và nghe các nghệ sĩ trẻ rõ hơn.)</em></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
