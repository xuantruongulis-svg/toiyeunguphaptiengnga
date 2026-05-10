import React from 'react';

const PrichastieTheory = () => {
  return (
    <div className="theory-container" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
      <div className="theory-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', background: 'var(--accent-gradient, linear-gradient(135deg, #00f2fe 0%, #4facfe 100%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
          ОБРАЗОВАНИЕ И УПОТРЕБЛЕНИЕ ПРИЧАСТИЙ
        </h1>
        <p className="theory-subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-secondary, #a0aec0)' }}>Cấu tạo và cách sử dụng Phân từ</p>
      </div>

      <div className="theory-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Section 1 */}
        <section style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#4facfe', marginBottom: '1.5rem', borderBottom: '1px solid rgba(79, 172, 254, 0.3)', paddingBottom: '0.5rem' }}>
            1. Đặc điểm chung (Общие характеристики)
          </h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            Về mặt ngữ pháp, phân từ không quá phức tạp: giống như trạng động từ, nó là <b>một dạng của động từ</b>. Phân từ mang đặc điểm của cả <b>động từ</b> và <b>tính từ</b>.
          </p>
          
          <div style={{ background: 'rgba(79, 172, 254, 0.1)', padding: '1rem 1.5rem', borderRadius: '12px', borderLeft: '4px solid #4facfe', marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><span style={{ color: '#fff' }}><b>думающий</b> человек = человек, <b>который думает</b></span></p>
            <p style={{ color: '#a0aec0', fontStyle: 'italic', margin: 0 }}>người đang suy nghĩ = người mà đang suy nghĩ</p>
          </div>
          
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            Phân từ biến đổi theo <b>giống, số và cách</b> (giống như tính từ):
          </p>
          
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem 1.5rem', borderRadius: '12px', marginBottom: '1rem' }}>
            <p style={{ marginBottom: '0.5rem' }}><span style={{ color: '#fff' }}>Хорошо, когда в правительстве есть много <b>думающих</b> людей.</span></p>
            <p style={{ color: '#a0aec0', fontStyle: 'italic', margin: 0 }}>Thật tốt khi trong chính phủ có nhiều người biết suy nghĩ.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#4facfe', marginBottom: '1.5rem', borderBottom: '1px solid rgba(79, 172, 254, 0.3)', paddingBottom: '0.5rem' }}>
            2. Cụm phân từ (Причастный оборот)
          </h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            Phân từ cùng với các từ phụ thuộc tạo thành <b>cụm phân từ</b>. Cụm phân từ chỉ được tách biệt (bằng dấu phẩy) khi nó <b>đứng sau</b> từ được bổ nghĩa.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
            <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #4CAF50' }}>
              <h3 style={{ fontSize: '1rem', color: '#4CAF50', marginBottom: '1rem' }}>Đứng SAU từ được bổ nghĩa (Có phẩy)</h3>
              <p style={{ marginBottom: '0.5rem', color: '#fff' }}><b>Тема</b>, <i style={{ color: '#81c784' }}>изученная нами</i>, очень интересна.</p>
              <p style={{ color: '#a0aec0', fontSize: '0.9rem', margin: 0 }}>Chủ đề <i>được chúng tôi nghiên cứu</i> rất thú vị.</p>
            </div>
            
            <div style={{ background: 'rgba(244, 67, 54, 0.1)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #F44336' }}>
              <h3 style={{ fontSize: '1rem', color: '#F44336', marginBottom: '1rem' }}>Đứng TRƯỚC từ được bổ nghĩa (Không phẩy)</h3>
              <p style={{ marginBottom: '0.5rem', color: '#fff' }}><i style={{ color: '#e57373' }}>Изученная нами</i> <b>тема</b> очень интересна.</p>
              <p style={{ color: '#a0aec0', fontSize: '0.9rem', margin: 0 }}><i>Được chúng tôi nghiên cứu</i> chủ đề rất thú vị.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#4facfe', marginBottom: '1.5rem', borderBottom: '1px solid rgba(79, 172, 254, 0.3)', paddingBottom: '0.5rem' }}>
            3. Bốn dạng của Phân từ
          </h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Phân từ có 4 dạng: hai dạng <b>chủ động</b> (действительные) và hai dạng <b>bị động</b> (страдательные).
          </p>
          
          <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr>
                  <th colSpan="2" style={{ background: 'rgba(79, 172, 254, 0.2)', padding: '1rem', borderBottom: '2px solid rgba(255,255,255,0.1)', borderRight: '2px solid rgba(255,255,255,0.1)', textAlign: 'center', color: '#4facfe' }}>
                    Активные (действительные)<br/><span style={{ fontSize: '0.9rem', color: '#a0aec0' }}>Phân từ Chủ động</span>
                  </th>
                  <th colSpan="2" style={{ background: 'rgba(255, 152, 0, 0.2)', padding: '1rem', borderBottom: '2px solid rgba(255,255,255,0.1)', textAlign: 'center', color: '#ff9800' }}>
                    Пассивные (страдательные)<br/><span style={{ fontSize: '0.9rem', color: '#a0aec0' }}>Phân từ Bị động</span>
                  </th>
                </tr>
                <tr style={{ background: 'rgba(0,0,0,0.2)' }}>
                  <th style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>Прошедшее время<br/><span style={{ fontSize: '0.8rem', color: '#a0aec0', fontWeight: 'normal' }}>(Từ động từ HCB & CB)</span></th>
                  <th style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', borderRight: '2px solid rgba(255,255,255,0.1)' }}>Настоящее время<br/><span style={{ fontSize: '0.8rem', color: '#a0aec0', fontWeight: 'normal' }}>(Chỉ từ động từ HCB)</span></th>
                  <th style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>Прошедшее время<br/><span style={{ fontSize: '0.8rem', color: '#a0aec0', fontWeight: 'normal' }}>(Từ động từ CB ngoại động)</span></th>
                  <th style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Настоящее время<br/><span style={{ fontSize: '0.8rem', color: '#a0aec0', fontWeight: 'normal' }}>(Từ động từ HCB ngoại động)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '1rem', borderRight: '1px solid rgba(255,255,255,0.1)', verticalAlign: 'top' }}>
                    <div style={{ marginBottom: '0.5rem' }}><b style={{ color: '#4facfe' }}>-ВШ-</b>: читавший, прочитавший</div>
                    <div><b style={{ color: '#4facfe' }}>-Ш-</b>: шедший, прошедший</div>
                  </td>
                  <td style={{ padding: '1rem', borderRight: '2px solid rgba(255,255,255,0.1)', verticalAlign: 'top' }}>
                    <div style={{ marginBottom: '0.5rem' }}><b style={{ color: '#4facfe' }}>-УЩ- (-ЮЩ-)</b>: бегущий, читающий</div>
                    <div><b style={{ color: '#4facfe' }}>-АЩ- (-ЯЩ-)</b>: спешащий, сидящий</div>
                  </td>
                  <td style={{ padding: '1rem', borderRight: '1px solid rgba(255,255,255,0.1)', verticalAlign: 'top' }}>
                    <div style={{ marginBottom: '0.5rem' }}><b style={{ color: '#ff9800' }}>-ЕНН- (-ЁНН-)</b>: изученный, решённый</div>
                    <div style={{ marginBottom: '0.5rem' }}><b style={{ color: '#ff9800' }}>-А/ЯНН-</b>: сыгранный, осмеянный</div>
                    <div><b style={{ color: '#ff9800' }}>-Т-</b>: открытый</div>
                  </td>
                  <td style={{ padding: '1rem', verticalAlign: 'top' }}>
                    <div style={{ marginBottom: '0.5rem' }}><b style={{ color: '#ff9800' }}>-ЕМ-</b>: изучаемый</div>
                    <div style={{ marginBottom: '0.5rem' }}><b style={{ color: '#ff9800' }}>-ОМ-</b>: искомый</div>
                    <div><b style={{ color: '#ff9800' }}>-ИМ-</b>: приводимый</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4 */}
        <section style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#4facfe', marginBottom: '1.5rem', borderBottom: '1px solid rgba(79, 172, 254, 0.3)', paddingBottom: '0.5rem' }}>
            4. Phân từ Chủ động (Активные причастия)
          </h2>
          
          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1rem', marginTop: '1rem' }}>4.1. Thời hiện tại (Настоящее время)</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            Được tạo từ động từ thể chưa hoàn thành (HCB) bằng các hậu tố: <b style={{ color: '#4facfe' }}>-ущ- (-ющ-), -ащ- (-ящ-)</b>.
          </p>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem 1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <p style={{ marginBottom: '0.5rem' }}><span style={{ color: '#fff' }}>Он обратил внимание на девушку, <b>сидящую</b> в первом ряду.</span></p>
            <p style={{ color: '#a0aec0', fontStyle: 'italic', margin: 0 }}>Anh ấy chú ý đến cô gái đang ngồi ở hàng đầu.</p>
          </div>
          <div style={{ background: '#1a202c', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
            <p style={{ color: '#a0aec0', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Cơ chế cấu tạo:</p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>сидеть — они сидят — <b>сидящий</b></li>
              <li>слышать — они слышат — <b>слышащий</b></li>
              <li>идти — они идут — <b>идущий</b></li>
              <li>изучать — они изучают — <b>изучающий</b></li>
            </ul>
          </div>

          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1rem' }}>4.2. Thời quá khứ (Прошедшее время)</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            Được tạo từ động từ HCB và CB bằng các hậu tố: <b style={{ color: '#4facfe' }}>-вш-</b> và <b style={{ color: '#4facfe' }}>-ш-</b>.
          </p>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem 1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <p style={{ marginBottom: '0.5rem' }}><span style={{ color: '#fff' }}>Он обратил внимание на девушку, <b>читавшую</b> какую-то книгу.</span></p>
            <p style={{ color: '#a0aec0', fontStyle: 'italic', margin: 0 }}>Anh ấy chú ý đến cô gái đã (đang) đọc cuốn sách nào đó.</p>
          </div>
          <div style={{ background: '#1a202c', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <p style={{ color: '#a0aec0', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Cơ chế cấu tạo:</p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>(про)читать — (про)читал — <b>(про)читавший</b></li>
              <li>сесть — сел — <b>севший</b></li>
              <li>(у)нести — (у)нёс — <b>(у)нёсший</b></li>
              <li>(вы)расти — (вы)рос — <b>(вы)росший</b></li>
            </ul>
          </div>
          <div style={{ background: 'rgba(244, 67, 54, 0.1)', padding: '1rem 1.5rem', borderRadius: '12px', borderLeft: '4px solid #F44336' }}>
            <p style={{ fontWeight: 'bold', color: '#F44336', marginBottom: '0.5rem' }}>Ngoại lệ (động từ kết thúc bằng -сти có biến đổi âm):</p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem', color: '#fff' }}>
              <li>(от)цвести — (от)цветут — <b>(от)цветший</b></li>
              <li>(при)вести — (при)ведут — <b>(при)ведший</b></li>
              <li>приобрести — приобретут — <b>приобретший</b></li>
              <li style={{ marginTop: '0.5rem' }}><i>Riêng động từ идти:</i> идти — <b>шедший</b></li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#ff9800', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 152, 0, 0.3)', paddingBottom: '0.5rem' }}>
            5. Phân từ Bị động (Пассивные причастия)
          </h2>
          
          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1rem', marginTop: '1rem' }}>5.1. Thời hiện tại (Настоящее время)</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            Được tạo từ động từ ngoại động HCB bằng các hậu tố: <b style={{ color: '#ff9800' }}>-ем-, -ом-, -им-</b>. Dạng này thường dùng trong <b>ngôn ngữ chính thức</b>. Có thể có dạng ngắn gọn đóng vai trò làm vị ngữ.
          </p>
          <div style={{ background: '#1a202c', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <p style={{ color: '#a0aec0', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Cơ chế cấu tạo:</p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>изучать — изучаем — <b>изучаемый</b></li>
              <li>переводить — переводим — <b>переводимый</b></li>
              <li>любить — любим — <b>любимый</b></li>
              <li>вести — ведём — <b>ведомый</b></li>
              <li>нести — несём — <b>несомый</b></li>
            </ul>
            <p style={{ marginTop: '1rem', color: '#ff9800' }}>Ngoại lệ: (пере)давать — <b>(пере)даваемый</b>; создавать — <b>создаваемый</b>.</p>
          </div>

          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1rem' }}>5.2. Thời quá khứ (Прошедшее время)</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            Đây là dạng phân từ <b>được sử dụng nhiều nhất</b>, đặc biệt là dạng ngắn gọn làm vị ngữ trong khẩu ngữ (VD: <i>Урок <b>закончен</b>. Окно <b>открыто</b>.</i>). Được tạo từ động từ ngoại động CB bằng các hậu tố: <b style={{ color: '#ff9800' }}>-енн-, -нн-, -т-</b>.
          </p>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem 1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <p style={{ marginBottom: '0.5rem' }}><span style={{ color: '#fff' }}><b>Купленные</b> в магазине вещи обмену и возврату не подлежат.</span></p>
            <p style={{ color: '#a0aec0', fontStyle: 'italic', margin: 0 }}>Hàng hóa đã mua tại cửa hàng không được đổi trả.</p>
          </div>
          <div style={{ background: '#1a202c', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <p style={{ color: '#a0aec0', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Cơ chế cấu tạo:</p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <li>прочитать — <b>прочитанный</b></li>
              <li>получить — <b>полученный</b></li>
              <li>решить — <b>решённый</b></li>
              <li>закрыть — <b>закрытый</b></li>
              <li>подготовить — <b>подготовленный</b></li>
              <li>встретить — <b>встреченный</b></li>
              <li>бросить — <b>брошенный</b></li>
              <li>простить — <b>прощённый</b></li>
            </ul>
          </div>
          
          <div style={{ background: 'rgba(156, 39, 176, 0.1)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #9C27B0' }}>
            <h4 style={{ color: '#E1BEE7', marginBottom: '1rem', fontSize: '1.1rem' }}>Sự biến đổi chủ thể hành động:</h4>
            <p style={{ marginBottom: '0.5rem', color: '#fff' }}>Cách 1 (Danh cách) trong mệnh đề phụ trở thành Cách 5 (Công cụ cách) trong cụm phân từ.</p>
            <p style={{ color: '#a0aec0', marginBottom: '0.5rem' }}>
              Фильм, который <b>известный режиссёр</b> поставил...<br/>
              &rarr; Фильм, поставленный <b>известным режиссёром</b>...
            </p>
            <p style={{ color: '#a0aec0', margin: 0 }}>
              <i>(Bộ phim mà đạo diễn nổi tiếng đã sản xuất... &rarr; Bộ phim được sản xuất bởi đạo diễn nổi tiếng...)</i>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PrichastieTheory;
