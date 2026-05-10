import React from 'react';

const VidPastTheory = () => {
  return (
    <div className="theory-container">
      <div className="theory-block">
        <h3 className="theory-block-title">Thể ở thì Quá khứ: Ý nghĩa và Cách dùng</h3>
        <p>Để hiểu rõ bản chất, hãy so sánh 4 trường hợp điển hình nhất trong thì Quá khứ:</p>
        
        <table className="theory-table">
          <thead>
            <tr>
              <th>Thể</th>
              <th>Ý nghĩa</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style={{ color: '#ffb74d' }}>НСВ</strong></td>
              <td><strong>1. Quá trình ("lâu/mất bao lâu")</strong></td>
              <td>Он <strong>долго (три часа) читал</strong> книгу.<br/><em style={{ color: 'var(--text-secondary)' }}>Anh ấy đã đọc sách mất 3 tiếng đồng hồ.</em></td>
            </tr>
            <tr>
              <td><strong style={{ color: '#ffb74d' }}>НСВ</strong></td>
              <td><strong>2. Lặp lại ("nhiều lần")</strong></td>
              <td><strong>Каждый день</strong> он <strong>читает (читал)</strong> газеты.<br/><em style={{ color: 'var(--text-secondary)' }}>Mỗi ngày anh ấy đều đọc báo.</em></td>
            </tr>
            <tr>
              <td><strong style={{ color: '#ffb74d' }}>НСВ</strong></td>
              <td><strong>3. Sự kiện/Sự thật ("Đã từng làm chưa?")</strong></td>
              <td>— Ты <strong>читал</strong> роман «Война и мир»?<br/>— Да, <strong>читал</strong>. (— Нет, не <strong>читал</strong>).</td>
            </tr>
            <tr>
              <td><strong style={{ color: '#64b5f6' }}>СВ</strong></td>
              <td><strong>4. Kết quả/Hoàn tất ("Xong")</strong></td>
              <td>Он <strong>уже прочитал</strong> эту книгу.<br/><em style={{ color: 'var(--text-secondary)' }}>Anh ấy đã đọc xong cuốn sách này rồi.</em></td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: '1.5rem' }}>
          <h4>Chú ý đặc biệt về ý nghĩa "Sự kiện" (Факт) của НСВ</h4>
          <p>Đây thường là phần khó nhất đối với người học. Sự khác biệt giữa <em>НСВ (Sự kiện)</em> và <em>СВ (Kết quả)</em> nằm ở sắc thái:</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px', background: 'rgba(255, 183, 77, 0.1)', borderLeft: '4px solid #ffb74d', padding: '1.2rem', borderRadius: '4px' }}>
              <h5 style={{ color: '#ffb74d', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Sử dụng НСВ: Nhấn mạnh Hành động (Đang bận)</h5>
              <p><em>Вчера вечером я стирал, готовил ужин, потом смотрел телевизор и делал домашнее задание.</em></p>
              <p style={{ fontSize: '0.95rem', marginTop: '0.8rem' }}>➔ Nghĩa là: Tôi đã <strong>bận rộn</strong> làm những việc đó (không quan trọng là đã xong hay chưa, chỉ biết là tôi có thực hiện hành động và tôi không rảnh).</p>
              <p style={{ fontSize: '0.95rem', marginTop: '0.8rem' }}><em>Я пил кофе утром.</em> ➔ Tôi đã uống cafe sáng nay (chỉ nói về sự kiện đã diễn ra, tôi đã làm việc đó).</p>
            </div>
            <div style={{ flex: 1, minWidth: '300px', background: 'rgba(100, 181, 246, 0.1)', borderLeft: '4px solid #64b5f6', padding: '1.2rem', borderRadius: '4px' }}>
              <h5 style={{ color: '#64b5f6', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Sử dụng СВ: Nhấn mạnh Kết quả (Đã rảnh/Đã xong)</h5>
              <p><em>Я постирал, приготовил ужин, посмотрел телевизор и сделал домашнее задание.</em></p>
              <p style={{ fontSize: '0.95rem', marginTop: '0.8rem' }}>➔ Nghĩa là: Tôi đã làm <strong>xong hết</strong> mọi việc. Tôi đã tự do rồi! (Ура! Освободился!)</p>
              <p style={{ fontSize: '0.95rem', marginTop: '0.8rem' }}><em>Я уже выпил кофе.</em> ➔ Kết quả nằm trong bụng.<br/><em>Я запомнил новые слова.</em> ➔ Kết quả nằm trong đầu.</p>
            </div>
          </div>
          
          <div className="theory-note" style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.05)', padding: '1.2rem', borderRadius: '8px' }}>
            <strong style={{ fontSize: '1.1rem', color: 'var(--accent-color)' }}>Tóm lại (Luật bất thành văn):</strong>
            <ul style={{ marginTop: '0.8rem', marginBottom: 0, gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
              <li>Ý nghĩa <strong>"Kết quả"</strong> ➔ Thuộc độc quyền của <strong>СВ</strong>.</li>
              <li>Ý nghĩa <strong>"Sự kiện (Факт)"</strong> ➔ Thuộc độc quyền của <strong>НСВ</strong>.</li>
              <li>Ý nghĩa <strong>"Quá trình"</strong> và <strong>"Lặp lại"</strong> ➔ 90-95% thuộc về <strong>НСВ</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidPastTheory;
