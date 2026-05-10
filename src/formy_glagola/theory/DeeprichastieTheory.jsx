import React from 'react';

const DeeprichastieTheory = () => {
  return (
    <div className="theory-container" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
      <div className="theory-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', background: 'var(--accent-gradient, linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
          ОБРАЗОВАНИЕ И УПОТРЕБЛЕНИЕ ДЕЕПРИЧАСТИЙ
        </h1>
        <p className="theory-subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-secondary, #a0aec0)' }}>Cấu tạo và cách sử dụng Trạng động từ</p>
      </div>

      <div className="theory-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Section 1 */}
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

        {/* Section 2 */}
        <section style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#ff6b6b', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 107, 107, 0.3)', paddingBottom: '0.5rem' }}>
            2. Hai hình thức của Trạng động từ
          </h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Trạng động từ có 2 hình thức: <b>HCB</b> (thể chưa hoàn thành) và <b>CB</b> (thể hoàn thành).
          </p>
          
          <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr>
                  <th style={{ width: '50%', background: 'rgba(255, 107, 107, 0.2)', padding: '1.5rem', borderBottom: '2px solid rgba(255,255,255,0.1)', borderRight: '2px solid rgba(255,255,255,0.1)', textAlign: 'center', color: '#ff6b6b' }}>
                    Суффиксы деепричастий НСВ<br/>
                    <span style={{ fontSize: '0.9rem', color: '#a0aec0', fontWeight: 'normal' }}>(Từ động từ HCB - Thể chưa hoàn thành)</span>
                  </th>
                  <th style={{ width: '50%', background: 'rgba(156, 39, 176, 0.2)', padding: '1.5rem', borderBottom: '2px solid rgba(255,255,255,0.1)', textAlign: 'center', color: '#ce93d8' }}>
                    Суффиксы деепричастий СВ<br/>
                    <span style={{ fontSize: '0.9rem', color: '#a0aec0', fontWeight: 'normal' }}>(Từ động từ CB - Thể hoàn thành)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '1.5rem', borderRight: '2px solid rgba(255,255,255,0.1)', verticalAlign: 'top' }}>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      <li><b style={{ color: '#ff6b6b', fontSize: '1.1rem' }}>-А</b>: крича, дыша</li>
                      <li><b style={{ color: '#ff6b6b', fontSize: '1.1rem' }}>-Я</b>: думая, неся</li>
                      <li style={{ color: '#a0aec0', marginTop: '0.5rem' }}><i>Ít gặp (thường mang tính cổ/khẩu ngữ):</i></li>
                      <li><b style={{ color: '#a0aec0' }}>*-УЧИ</b>: будучи, едучи</li>
                      <li><b style={{ color: '#a0aec0' }}>*-ЮЧИ</b>: играючи, умеючи¹</li>
                      <li><b style={{ color: '#a0aec0' }}>*-В</b>: не быв, не знав</li>
                      <li><b style={{ color: '#a0aec0' }}>*-ВШИ</b>: знавши, не евши</li>
                    </ul>
                  </td>
                  <td style={{ padding: '1.5rem', verticalAlign: 'top' }}>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      <li><b style={{ color: '#ce93d8', fontSize: '1.1rem' }}>-В</b>: разыграв, помыв</li>
                      <li><b style={{ color: '#ce93d8', fontSize: '1.1rem' }}>-ВШИ</b>: разыгравшись, умывшись</li>
                      <li style={{ color: '#a0aec0', marginTop: '0.5rem' }}><i>Ít gặp:</i></li>
                      <li><b style={{ color: '#a0aec0' }}>*-ШИ</b>: замёрзши, испёкши</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
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

export default DeeprichastieTheory;
