import React from 'react';

export default function UslovieTheory() {
  return (
    <div className="theory-container">
      <h3>3. QUAN HỆ ĐIỀU KIỆN (Условие)</h3>
      <p>Sự thực hiện của tình huống này phụ thuộc vào tình huống kia.</p>

      <h4>3.1. Điều kiện có thực (Реальное условие)</h4>
      <p>Dùng liên từ <strong>если</strong> (Nếu) hoặc <strong>в том случае если</strong> (Trong trường hợp). Thường dùng thì Tương lai ở cả 2 vế, hoặc Thức mệnh lệnh ở vế chính.</p>
      <ul>
        <li><strong>Ví dụ:</strong> Если завтра будет хорошая погода, мы поедем за город. <em>(Nếu ngày mai thời tiết đẹp, chúng ta sẽ đi ra ngoại ô.)</em></li>
      </ul>
      <div className="theory-note">
        <strong>Lưu ý:</strong> Mệnh đề phụ если có thể rút gọn thành Động từ nguyên thể (Инфинитив) nếu chủ thể mang tính khái quát.<br/>
        <em>Ví dụ:</em> Если встать в пять часов утра, то можно увидеть рассвет. <em>(Nếu thức dậy lúc 5 giờ sáng, thì có thể ngắm bình minh.)</em>
      </div>

      <h4>3.2. Điều kiện không có thực (Нереальное условие)</h4>
      <p>Chỉ sự việc có thể xảy ra nhưng thực tế <strong>ĐÃ KHÔNG</strong> xảy ra. Dùng liên từ <strong>если бы</strong> ở vế phụ + động từ quá khứ, và tiểu từ <strong>бы</strong> + động từ quá khứ ở vế chính.</p>
      <ul>
        <li><strong>Ví dụ:</strong> Если бы мы пришли пораньше, то достали бы билеты. <em>(Nếu chúng tôi đến sớm hơn, thì chúng tôi đã mua được vé rồi. -&gt; Thực tế là đến muộn và không có vé).</em></li>
      </ul>

      <h5>Cấu trúc đặc biệt:</h5>
      <div className="theory-table-wrapper">
        <table className="theory-table">
          <tbody>
            <tr>
              <td>Dùng <strong>Thức mệnh lệnh</strong> thay thế cho Если бы</td>
              <td>Поверни он направо, и аварии не случилось бы. = Если бы он повернул... <br/><em>(Giá như anh ta rẽ phải, thì tai nạn đã không xảy ra).</em></td>
            </tr>
            <tr>
              <td>Dùng <strong>Danh từ/Đại từ</strong></td>
              <td>Если бы не сестра, он бы не окончил института. <br/><em>(Nếu không có chị gái, anh ấy đã không tốt nghiệp được đại học).</em></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
