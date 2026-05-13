import React from 'react';

const DeeprichastieTheoryNSV = () => {
  return (
    <div className="theory-container" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
      <div className="theory-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', background: 'var(--accent-gradient, linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
          ДЕЕПРИЧАСТИЯ НСВ (TRẠNG ĐỘNG TỪ HCB)
        </h1>
        <p className="theory-subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-secondary, #a0aec0)' }}>Cấu tạo và cách sử dụng Trạng động từ thể chưa hoàn thành</p>
      </div>

      <div className="theory-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Section 1: Introduction */}
        <section style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#ff6b6b', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 107, 107, 0.3)', paddingBottom: '0.5rem' }}>
            1. Đặc điểm chung (Общие характеристики)
          </h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            Giống như phân từ, trạng động từ là <b>một dạng của động từ</b>. Trạng động từ mang đặc điểm của cả <b>động từ</b> và <b>trạng từ</b>. Đặc biệt, trạng động từ <b>không biến đổi</b> (не изменяются).
          </p>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            Vì trạng động từ biểu thị một hành động phụ (thứ yếu) so với động từ chính, nó luôn <b>hướng tới cùng một chủ thể hành động</b> với động từ chính.
          </p>
          
          <div style={{ background: 'rgba(255, 107, 107, 0.1)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ff6b6b', marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><span style={{ color: '#fff' }}>Он слушал меня, <b>не говоря</b> ни слова = Он слушал меня и <b>не говорил</b> ни слова.</span></p>
            <p style={{ color: '#a0aec0', fontStyle: 'italic', margin: 0 }}>Anh ấy nghe tôi mà không nói một lời nào = Anh ấy nghe tôi và đã không nói một lời nào.</p>
          </div>
        </section>

        {/* Section 2: Time Category */}
        <section style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#4facfe', marginBottom: '1.5rem', borderBottom: '1px solid rgba(79, 172, 254, 0.3)', paddingBottom: '0.5rem' }}>
            2. Phạm trù thời gian (Категория времени)
          </h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            Trạng động từ <b>không có phạm trù thời gian (thì)</b>. Trạng động từ chỉ có được ý nghĩa thời gian nhất định khi nằm trong câu, phụ thuộc vào động từ chính:
          </p>
          
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1rem' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#e2e8f0' }}>
              <li>Он <b style={{ color: '#ff6b6b' }}>слушает</b> меня, не говоря ни слова. <span style={{ color: '#a0aec0' }}>(Hiện tại)</span></li>
              <li>Он <b style={{ color: '#ff6b6b' }}>слушал</b> меня, не говоря ни слова. <span style={{ color: '#a0aec0' }}>(Quá khứ)</span></li>
              <li>Он <b style={{ color: '#ff6b6b' }}>будет слушать</b> меня, не говоря ни слова. <span style={{ color: '#a0aec0' }}>(Tương lai)</span></li>
            </ul>
          </div>
        </section>

        {/* Section 3: Formation NSV */}
        <section style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#ff6b6b', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 107, 107, 0.3)', paddingBottom: '0.5rem' }}>
            3. Hậu tố Trạng động từ HCB (Суффиксы деепричастий НСВ)
          </h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Trạng động từ HCB được cấu tạo từ động từ thể chưa hoàn thành.
          </p>
          
          <div style={{ background: 'rgba(255, 107, 107, 0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 107, 107, 0.1)' }}>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <b style={{ color: '#ff6b6b', fontSize: '1.4rem', minWidth: '60px' }}>-А</b> 
                <span style={{ color: '#e2e8f0' }}>крича, дыша</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <b style={{ color: '#ff6b6b', fontSize: '1.4rem', minWidth: '60px' }}>-Я</b> 
                <span style={{ color: '#e2e8f0' }}>думая, неся</span>
              </li>
              <hr style={{ width: '100%', border: 0, borderBottom: '1px solid rgba(255,255,255,0.05)' }} />
              <li style={{ color: '#a0aec0', fontSize: '0.9rem' }}><i>Các hình thức ít gặp (khẩu ngữ/cổ):</i></li>
              <li><b style={{ color: '#a0aec0' }}>*-УЧИ</b>: будучи, едучи</li>
              <li><b style={{ color: '#a0aec0' }}>*-ЮЧИ</b>: играючи, умеючи¹</li>
              <li><b style={{ color: '#a0aec0' }}>*-В</b>: не быв, не знав</li>
              <li><b style={{ color: '#a0aec0' }}>*-ВШИ</b>: знавши, не евши</li>
            </ul>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', borderLeft: '3px solid #a0aec0' }}>
            <p style={{ fontSize: '0.9rem', color: '#a0aec0', margin: 0 }}>
              ¹ Các hình thức với hậu tố <i>-учи, -ючи</i> mang tính khẩu ngữ và ít được sử dụng. Về mặt lịch sử, chúng là trạng động từ, nhưng hiện nay thường được dùng như trạng từ.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DeeprichastieTheoryNSV;
