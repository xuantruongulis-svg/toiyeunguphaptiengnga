import React from 'react';

const VidFutureTheory = () => {
  return (
    <div className="theory-container">
      <div className="theory-block">
        <h3 className="theory-block-title">Thể ở thì Tương lai: Ý nghĩa và Cách dùng</h3>
        <p>Hoàn toàn trùng khớp về mặt logic và ngữ pháp so với thì Quá khứ.</p>
        
        <table className="theory-table">
          <thead>
            <tr>
              <th style={{ width: '15%' }}>Thể</th>
              <th style={{ width: '25%' }}>Ý nghĩa</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style={{ color: '#ffb74d' }}>НСВ</strong></td>
              <td>1. Quá trình</td>
              <td>Он <strong>будет читать</strong> книгу два дня.<br/><em style={{ color: 'var(--text-secondary)' }}>Sẽ đọc cuốn sách mất 2 ngày</em></td>
            </tr>
            <tr>
              <td><strong style={{ color: '#ffb74d' }}>НСВ</strong></td>
              <td>2. Lặp lại</td>
              <td>По вечерам он <strong>будет читать</strong>.<br/><em style={{ color: 'var(--text-secondary)' }}>Mỗi buổi tối sẽ đọc</em></td>
            </tr>
            <tr>
              <td><strong style={{ color: '#ffb74d' }}>НСВ</strong></td>
              <td>3. Sự kiện</td>
              <td>— Он <strong>будет читать</strong> по-русски?<br/>— Будет. (— Не будет).<br/><em style={{ color: 'var(--text-secondary)' }}>Anh ấy có đọc tiếng Nga không? Có đọc.</em></td>
            </tr>
            <tr>
              <td><strong style={{ color: '#64b5f6' }}>СВ</strong></td>
              <td>4. Kết quả</td>
              <td>Он <strong>прочитает</strong> книгу за два дня.<br/><em style={{ color: 'var(--text-secondary)' }}>Sẽ đọc xong cuốn sách trong vòng 2 ngày (có kết quả)</em></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VidFutureTheory;
