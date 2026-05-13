import React from 'react';

const DeeprichastieTheorySV = () => {
  return (
    <div className="theory-container" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
      <div className="theory-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', background: 'var(--accent-gradient, linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
          ДЕЕПРИЧАСТИЯ СВ (TRẠNG ĐỘNG TỪ CB)
        </h1>
        <p className="theory-subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-secondary, #a0aec0)' }}>Cấu tạo và cách sử dụng Trạng động từ thể hoàn thành</p>
      </div>

      <div className="theory-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Section 1: Introduction */}
        <section style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#ce93d8', marginBottom: '1.5rem', borderBottom: '1px solid rgba(206, 147, 216, 0.3)', paddingBottom: '0.5rem' }}>
            1. Đặc điểm chung (Общие характеристики)
          </h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            Giống như phân từ, trạng động từ là <b>một dạng của động từ</b>. Trạng động từ mang đặc điểm của cả <b>động từ</b> và <b>trạng từ</b>. Đặc biệt, trạng động từ <b>không biến đổi</b> (не изменяются).
          </p>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            Vì trạng động từ biểu thị một hành động phụ (thứ yếu) so với động từ chính, nó luôn <b>hướng tới cùng một chủ thể hành động</b> với động từ chính.
          </p>
          
          <div style={{ background: 'rgba(206, 147, 216, 0.1)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ce93d8', marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><span style={{ color: '#fff' }}><b>Разыграв</b> партию, они пошли домой = Они разыграли партию и пошли домой.</span></p>
            <p style={{ color: '#a0aec0', fontStyle: 'italic', margin: 0 }}>Sau khi đánh xong ván cờ, họ đi về nhà = Họ đã đánh xong ván cờ và đi về nhà.</p>
          </div>
        </section>

        {/* Section 2: Formation SV */}
        <section style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#ce93d8', marginBottom: '1.5rem', borderBottom: '1px solid rgba(206, 147, 216, 0.3)', paddingBottom: '0.5rem' }}>
            2. Hậu tố Trạng động từ CB (Суффиксы деепричастий СВ)
          </h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Trạng động từ CB được cấu tạo từ động từ thể hoàn thành.
          </p>
          
          <div style={{ background: 'rgba(206, 147, 216, 0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(206, 147, 216, 0.1)' }}>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <b style={{ color: '#ce93d8', fontSize: '1.4rem', minWidth: '80px' }}>-В</b> 
                <span style={{ color: '#e2e8f0' }}>разыграв, помыв</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <b style={{ color: '#ce93d8', fontSize: '1.4rem', minWidth: '80px' }}>-ВШИ</b> 
                <span style={{ color: '#e2e8f0' }}>разыгравшись, умывшись</span>
              </li>
              <hr style={{ width: '100%', border: 0, borderBottom: '1px solid rgba(255,255,255,0.05)' }} />
              <li style={{ color: '#a0aec0', fontSize: '0.9rem' }}><i>Các hình thức ít gặp:</i></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <b style={{ color: '#a0aec0', fontSize: '1.2rem', minWidth: '80px' }}>*-ШИ</b> 
                <span style={{ color: '#a0aec0' }}>замёрзши, испёкши</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Note */}
        <section style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <p style={{ lineHeight: '1.7', margin: 0 }}>
            Trạng động từ CB thường biểu thị một hành động đã hoàn thành trước hành động chính trong câu.
          </p>
        </section>

      </div>
    </div>
  );
};

export default DeeprichastieTheorySV;
