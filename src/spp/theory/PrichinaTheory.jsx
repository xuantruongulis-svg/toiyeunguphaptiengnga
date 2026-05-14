import React from 'react';

export default function PrichinaTheory() {
  return (
    <div className="theory-container">
      <h3>2. QUAN HỆ NGUYÊN NHÂN (Причина)</h3>
      <p>Chỉ ra hiện tượng này là nguyên nhân/cơ sở sinh ra hiện tượng kia (hệ quả).</p>

      <div className="theory-table-wrapper">
        <table className="theory-table">
          <thead>
            <tr>
              <th>Nhóm liên từ</th>
              <th>Cách dùng & Đặc điểm</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="2"><strong>Nhóm liên từ phổ biến, trung tính</strong></td>
              <td><strong>потому что</strong> (Bởi vì): <strong>KHÔNG</strong> đứng ở đầu câu, trừ khi đi kèm các tiểu từ nhấn mạnh (именно, только, видимо...).</td>
              <td>Мы предпочли лететь на самолёте, потому что на поезде дорога отняла бы слишком много времени. <br/><em>(Chúng tôi chọn đi máy bay, bởi vì đi tàu sẽ mất quá nhiều thời gian.)</em></td>
            </tr>
            <tr>
              <td><strong>так как, поскольку</strong> (Vì, bởi vì): Có thể đứng ở đầu hoặc giữa câu.</td>
              <td>Так как у кассирши не было сдачи, мне пришлось разменять деньги... <br/><em>(Vì thu ngân không có tiền lẻ, tôi phải đi đổi tiền...)</em></td>
            </tr>
            <tr>
              <td rowSpan="2"><strong>Nguyên nhân mang tính tích cực / tiêu cực</strong></td>
              <td><strong>благодаря тому что</strong> (Nhờ có - Tích cực)</td>
              <td>Благодаря тому что пожарные приехали вовремя, огонь удалось погасить. <br/><em>(Nhờ lính cứu hỏa đến kịp, ngọn lửa đã được dập tắt.)</em></td>
            </tr>
            <tr>
              <td><strong>из-за того что</strong> (Tại vì - Tiêu cực)</td>
              <td>Ее не допустили к экзаменам, из-за того что она опоздала... <br/><em>(Cô ấy không được thi, tại vì cô ấy nộp tài liệu muộn...)</em></td>
            </tr>
            <tr>
              <td><strong>Nguyên nhân gây ra trạng thái, hành động vô thức</strong></td>
              <td>Dùng <strong>оттого что</strong> (Do, bởi).</td>
              <td>Она почувствовала себя плохо, оттого что очень устала... <br/><em>(Cô ấy thấy trong người không khỏe, do đã quá mệt...)</em></td>
            </tr>
            <tr>
              <td><strong>Nhóm liên từ phong cách sách vở / hành chính</strong></td>
              <td><strong>вследствие того что, в результате того что, ввиду того что, в связи с тем что, в силу того что</strong> (Do, bởi, do hậu quả của...). Thường dùng trong đơn từ, báo cáo.</td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Điều kiện - Nguyên nhân (Khẩu ngữ)</strong></td>
              <td>Dùng <strong>раз</strong> (Một khi đã, đã... thì). Thể hiện sự bất ngờ, không mong muốn, hoặc đưa ra kết luận logic.</td>
              <td>Раз вы не сделали работу к сроку, придётся вам посидеть в выходные. <br/><em>(Một khi các anh chưa làm xong việc đúng hạn, thì các anh sẽ phải ở lại làm vào cuối tuần.)</em></td>
            </tr>
            <tr>
              <td><strong>Cổ thể / Sách vở</strong></td>
              <td><strong>ибо</strong> (Bởi vì - luôn đứng ở vế sau).</td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Nhóm "Nếu không thì" (Cấu trúc giả định nguyên nhân)</strong></td>
              <td>Vế đầu đưa ra hành động, vế sau dùng liên từ <strong>иначе, в противном случае</strong> (văn viết) hoặc <strong>а то, а не то, не то</strong> (khẩu ngữ) để chỉ hậu quả.</td>
              <td>Надень шапку, а то простудишься. <br/><em>(Đội mũ vào, nếu không thì sẽ bị cảm đấy.)</em></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="theory-note">
        <strong>Lưu ý:</strong> Có thể rút gọn mệnh đề nguyên nhân bằng Trạng động từ (деепричастный оборот) nếu cùng một chủ ngữ.<br/><br/>
        <em>Ví dụ:</em> Хорошо зная английский язык, он переводит... = Так как он хорошо знает английский язык... (Vì biết rõ tiếng Anh, anh ấy dịch...)
      </div>
    </div>
  );
}
