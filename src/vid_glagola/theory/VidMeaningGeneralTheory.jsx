import React from 'react';

const VidMeaningGeneralTheory = () => {
  return (
    <div className="theory-container">
      <div className="theory-block">
        <h3 className="theory-block-title">Ý nghĩa của các thể (Значение видов)</h3>
        <p>Không phải tất cả các động từ đều có cặp thể. Tuy nhiên, với những động từ có cặp, chúng khác nhau cơ bản về mặt thời gian và ý nghĩa:</p>
        
        <table className="theory-table">
          <thead>
            <tr>
              <th style={{ width: '50%' }}>НСВ (Chưa hoàn thành)</th>
              <th style={{ width: '50%' }}>СВ (Hoàn thành)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Các thì:</strong> Hiện tại, Quá khứ, Tương lai.<br/>
                <em>Ví dụ: я читаю, читал, буду читать.</em>
              </td>
              <td>
                <strong>Các thì:</strong> Chỉ có Quá khứ, Tương lai (không có thì Hiện tại).<br/>
                <em>Ví dụ: я съел — я съем.</em>
              </td>
            </tr>
            <tr>
              <td>
                <strong>3 Ý nghĩa chính:</strong>
                <ul style={{ marginTop: '0.5rem' }}>
                  <li>Quá trình (Процесс)</li>
                  <li>Hành động lặp lại (Регулярное действие)</li>
                  <li>Sự kiện/Sự thật (Факт)</li>
                </ul>
              </td>
              <td>
                <strong>1 Ý nghĩa chính:</strong>
                <ul style={{ marginTop: '0.5rem' }}>
                  <li>Kết quả/Hoàn tất (Результат/Финиш)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className="theory-note" style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.05)', padding: '1.2rem', borderRadius: '8px' }}>
          <p style={{ margin: 0 }}>Để học tốt cách dùng Thể của động từ, cách nhanh nhất là chỉ tập trung vào <strong>các ý nghĩa chính</strong> nêu trên. Những ý nghĩa này sẽ áp dụng cho hầu hết các hình thái của động từ.</p>
        </div>
      </div>
    </div>
  );
};

export default VidMeaningGeneralTheory;
