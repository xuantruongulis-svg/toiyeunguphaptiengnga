import React from 'react';

const MestoimenieTheory = () => {
  return (
    <div className="theory-container">
      {/* TỔNG QUAN */}
      <div className="theory-block">
        <h3 className="theory-block-title">TỔNG QUAN CÁC LOẠI ĐẠI TỪ (МЕСТОИМЕНИЕ)</h3>
        <p>
          Đại từ (Местоимение) trong tiếng Nga được chia thành nhiều loại khác nhau tùy thuộc vào chức năng và ý nghĩa. 
          Dưới đây là phân loại tổng quan và chi tiết về 5 nhóm đại từ quan trọng nhất.
        </p>
        <table className="theory-table">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Tên tiếng Nga</th>
              <th style={{ width: '25%' }}>Tên tiếng Việt</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Личные</strong></td>
              <td>Đại từ nhân xưng</td>
              <td>я, ты, он, она, мы... <em style={{ color: 'var(--text-secondary)' }}>(tôi, bạn, anh ấy...)</em></td>
            </tr>
            <tr>
              <td><strong>2. Притяжательные</strong></td>
              <td>Đại từ sở hữu</td>
              <td>мой, твой, его... <em style={{ color: 'var(--text-secondary)' }}>(của tôi, của bạn, của anh ấy...)</em></td>
            </tr>
            <tr>
              <td><strong>3. Указательные</strong></td>
              <td>Đại từ chỉ định</td>
              <td>этот, тот, такой... <em style={{ color: 'var(--text-secondary)' }}>(này, kia, như thế...)</em></td>
            </tr>
            <tr>
              <td><strong>4. Вопросительные</strong></td>
              <td>Đại từ nghi vấn</td>
              <td>кто?, что?, какой?... <em style={{ color: 'var(--text-secondary)' }}>(ai?, cái gì?, nào?...)</em></td>
            </tr>
            <tr>
              <td><strong>5. Относительные</strong></td>
              <td>Đại từ liên kết mệnh đề</td>
              <td>который, чей, кто... <em style={{ color: 'var(--text-secondary)' }}>(người mà, của người mà...)</em></td>
            </tr>
            <tr>
              <td><strong>6. Отрицательные</strong></td>
              <td>Đại từ phủ định</td>
              <td>никто, ничто, никакой <em style={{ color: 'var(--text-secondary)' }}>(không ai, không gì, không nào)</em></td>
            </tr>
            <tr>
              <td><strong>7. Неопределённые</strong></td>
              <td>Đại từ không xác định</td>
              <td>кто-то, что-нибудь... <em style={{ color: 'var(--text-secondary)' }}>(ai đó, thứ gì đó...)</em></td>
            </tr>
            <tr>
              <td><strong>8. Возвратное</strong></td>
              <td>Đại từ phản thân</td>
              <td>себя <em style={{ color: 'var(--text-secondary)' }}>(chính mình)</em></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 1. ĐẠI TỪ NHÂN XƯNG */}
      <div className="theory-block" style={{ marginTop: '2rem' }}>
        <h3 className="theory-block-title">1. ĐẠI TỪ NHÂN XƯNG (Личные местоимения)</h3>
        <p>Đại từ nhân xưng biến đổi theo 6 cách (Падежи) trong tiếng Nga.</p>
        <table className="theory-table">
          <thead>
            <tr>
              <th>Cách / Ngôi</th>
              <th>Я (Tôi)</th>
              <th>Ты (Bạn)</th>
              <th>Он (Anh ấy)</th>
              <th>Она (Cô ấy)</th>
              <th>Мы (Chúng tôi)</th>
              <th>Вы (Các bạn/Ngài)</th>
              <th>Они (Họ)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Danh cách (И.п)</strong></td>
              <td>я</td><td>ты</td><td>он</td><td>она</td><td>мы</td><td>вы</td><td>они</td>
            </tr>
            <tr>
              <td><strong>Sinh cách (Р.п)</strong></td>
              <td>меня</td><td>тебя</td><td>его</td><td>её</td><td>нас</td><td>вас</td><td>их</td>
            </tr>
            <tr>
              <td><strong>Tặng cách (Д.п)</strong></td>
              <td>мне</td><td>тебе</td><td>ему</td><td>ей</td><td>нам</td><td>вам</td><td>им</td>
            </tr>
            <tr>
              <td><strong>Đối cách (В.п)</strong></td>
              <td>меня</td><td>тебя</td><td>его</td><td>её</td><td>нас</td><td>вас</td><td>их</td>
            </tr>
            <tr>
              <td><strong>Tạo cách (Т.п)</strong></td>
              <td>мной</td><td>тобой</td><td>им</td><td>ею</td><td>нами</td><td>вами</td><td>ими</td>
            </tr>
            <tr>
              <td><strong>Giới cách (П.п)</strong></td>
              <td>обо мне</td><td>о тебе</td><td>о нём</td><td>о ней</td><td>о нас</td><td>о вас</td><td>о них</td>
            </tr>
          </tbody>
        </table>
        
        <div style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
          <strong>Ví dụ:</strong>
          <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>
            <li><strong>И.п:</strong> Я студент. <em>(Tôi là sinh viên.)</em></li>
            <li><strong>Р.п:</strong> У меня есть брат. <em>(Tôi có một người anh trai.)</em></li>
            <li><strong>Д.п:</strong> Позвони мне завтра. <em>(Hãy gọi cho tôi vào ngày mai.)</em></li>
          </ul>
        </div>
      </div>

      {/* 2. ĐẠI TỪ SỞ HỮU */}
      <div className="theory-block" style={{ marginTop: '2rem' }}>
        <h3 className="theory-block-title">2. ĐẠI TỪ SỞ HỮU (Притяжательные местоимения)</h3>
        <p>Đại từ sở hữu dùng để chỉ sự sở hữu, biến đổi theo giống, số và cách (trừ <strong>его, её, их</strong> luôn giữ nguyên).</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>мой, моя, моё, мои</strong> — của tôi</li>
              <li><strong>твой, твоя, твоё, твои</strong> — của bạn (thân mật)</li>
              <li><strong>его</strong> — của anh ấy</li>
              <li><strong>её</strong> — của cô ấy</li>
            </ul>
          </div>
          <div>
            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              <li><strong>наш, наша, наше, наши</strong> — của chúng tôi</li>
              <li><strong>ваш, ваша, ваше, ваши</strong> — của các bạn / của ông/bà</li>
              <li><strong>их</strong> — của họ</li>
              <li><strong>свой, своя, своё, свои</strong> — của chính mình (dùng cho mọi ngôi để nhấn mạnh)</li>
            </ul>
          </div>
        </div>

        <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Bảng biến cách mẫu cho "МОЙ" (Của tôi)</h4>
        <table className="theory-table">
          <thead>
            <tr>
              <th>Cách</th>
              <th>Giống đực<br/><em style={{ fontSize: '0.85em', fontWeight: 'normal' }}>(друг - Bạn bè)</em></th>
              <th>Giống cái<br/><em style={{ fontSize: '0.85em', fontWeight: 'normal' }}>(книга - Sách)</em></th>
              <th>Giống trung<br/><em style={{ fontSize: '0.85em', fontWeight: 'normal' }}>(письмо - Bức thư)</em></th>
              <th>Số nhiều<br/><em style={{ fontSize: '0.85em', fontWeight: 'normal' }}>(друзья - Những người bạn)</em></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>И.п</strong></td>
              <td>мой друг</td><td>моя книга</td><td>моё письмо</td><td>мои друзья</td>
            </tr>
            <tr>
              <td><strong>Р.п</strong></td>
              <td>моего друга</td><td>моей книги</td><td>моего письма</td><td>моих друзей</td>
            </tr>
            <tr>
              <td><strong>Д.п</strong></td>
              <td>моему другу</td><td>моей книге</td><td>моему письму</td><td>моим друзьям</td>
            </tr>
            <tr>
              <td><strong>В.п</strong></td>
              <td>моего друга<strong>*</strong></td><td>мою книгу</td><td>моё письмо</td><td>моих друзей<strong>*</strong></td>
            </tr>
            <tr>
              <td><strong>Т.п</strong></td>
              <td>моим другом</td><td>моей книгой</td><td>моим письмом</td><td>моими друзьями</td>
            </tr>
            <tr>
              <td><strong>П.п</strong></td>
              <td>о моём друге</td><td>о моей книге</td><td>о моём письме</td><td>о моих друзьях</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginTop: '0.5rem' }}>
          * Chú ý: Ở Đối cách (В.п), nếu danh từ chỉ động vật/người thì biến đổi giống Р.п; nếu chỉ đồ vật/sự vật thì giữ nguyên như И.п.
        </p>
      </div>

      {/* 3. ĐẠI TỪ CHỈ ĐỊNH */}
      <div className="theory-block" style={{ marginTop: '2rem' }}>
        <h3 className="theory-block-title">3. ĐẠI TỪ CHỈ ĐỊNH (Указательные местоимения)</h3>
        <p>Dùng để chỉ vị trí, tính chất hoặc số lượng của sự vật.</p>
        
        <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>этот, эта, это, эти:</strong> này (chỉ đối tượng ở gần)<br/>
            <em style={{ color: 'var(--text-secondary)' }}>Ví dụ: этот студент (sinh viên này), эта книга (quyển sách này).</em>
          </li>
          <li style={{ marginBottom: '0.5rem' }}><strong>тот, та, то, те:</strong> kia, đó (chỉ đối tượng ở xa hoặc đã nhắc đến)<br/>
            <em style={{ color: 'var(--text-secondary)' }}>Ví dụ: тот дом (ngôi nhà kia), та машина (cái xe kia).</em>
          </li>
          <li style={{ marginBottom: '0.5rem' }}><strong>такой, такая, такое, такие:</strong> như thế này, như thế<br/>
            <em style={{ color: 'var(--text-secondary)' }}>Ví dụ: такая погода (thời tiết như thế này).</em>
          </li>
          <li style={{ marginBottom: '0.5rem' }}><strong>столько:</strong> bấy nhiêu (chỉ số lượng)<br/>
            <em style={{ color: 'var(--text-secondary)' }}>Ví dụ: столько людей (bấy nhiêu người).</em>
          </li>
          <li><strong>сам, сама, само, сами:</strong> tự, chính (nhấn mạnh chủ thể)<br/>
            <em style={{ color: 'var(--text-secondary)' }}>Ví dụ: он сам сказал (chính anh ấy đã nói).</em>
          </li>
        </ul>

        <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Bảng biến cách mẫu cho "ЭТОТ" (Này)</h4>
        <table className="theory-table">
          <thead>
            <tr>
              <th>Cách</th>
              <th>Giống đực</th>
              <th>Giống cái</th>
              <th>Giống trung</th>
              <th>Số nhiều</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>И.п</strong></td><td>этот</td><td>эта</td><td>это</td><td>эти</td></tr>
            <tr><td><strong>Р.п</strong></td><td>этого</td><td>этой</td><td>этого</td><td>этих</td></tr>
            <tr><td><strong>Д.п</strong></td><td>этому</td><td>этой</td><td>этому</td><td>этим</td></tr>
            <tr><td><strong>В.п</strong></td><td>этот / этого<strong>*</strong></td><td>эту</td><td>это</td><td>эти / этих<strong>*</strong></td></tr>
            <tr><td><strong>Т.п</strong></td><td>этим</td><td>этой</td><td>этим</td><td>этими</td></tr>
            <tr><td><strong>П.п</strong></td><td>об этом</td><td>об этой</td><td>об этом</td><td>об этих</td></tr>
          </tbody>
        </table>
      </div>

      {/* 4. ĐẠI TỪ NGHI VẤN */}
      <div className="theory-block" style={{ marginTop: '2rem' }}>
        <h3 className="theory-block-title">4. ĐẠI TỪ NGHI VẤN (Вопросительные местоимения)</h3>
        <p>Dùng để đặt câu hỏi.</p>
        <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>кто</strong> (ai) 👉 Кто это? <em style={{ color: 'var(--text-secondary)' }}>(Ai đây?)</em></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>что</strong> (cái gì) 👉 Что ты делаешь? <em style={{ color: 'var(--text-secondary)' }}>(Bạn đang làm gì?)</em></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>какой / какая / какое / какие</strong> (nào, loại nào) 👉 Какой фильм ты смотришь? <em style={{ color: 'var(--text-secondary)' }}>(Bạn đang xem phim nào?)</em></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>чей / чья / чьё / чьи</strong> (của ai) 👉 Чья это книга? <em style={{ color: 'var(--text-secondary)' }}>(Đây là sách của ai?)</em></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>который / которая / которое / которые</strong> (cái nào trong số...) 👉 В который час мы встретимся? <em style={{ color: 'var(--text-secondary)' }}>(Chúng ta sẽ gặp nhau lúc mấy giờ?)</em></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>сколько</strong> (bao nhiêu) 👉 Сколько стоит эта книга? <em style={{ color: 'var(--text-secondary)' }}>(Quyển sách này giá bao nhiêu?)</em></li>
          <li><strong>каков / какова / каковы</strong> (như thế nào, tính chất gì) 👉 Каков результат? <em style={{ color: 'var(--text-secondary)' }}>(Kết quả như thế nào?)</em></li>
        </ul>
      </div>

      {/* 5. ĐẠI TỪ LIÊN KẾT */}
      <div className="theory-block" style={{ marginTop: '2rem' }}>
        <h3 className="theory-block-title">5. ĐẠI TỪ LIÊN KẾT / TƯƠNG ĐỐI (Относительные местоимения)</h3>
        <p>
          Về hình thức giống hệt đại từ nghi vấn, nhưng được dùng để nối mệnh đề phụ với mệnh đề chính trong câu phức. 
          <em style={{ color: 'var(--text-secondary)' }}> (Tài liệu cũng bao gồm một số trạng từ liên kết chỉ nơi chốn).</em>
        </p>
        
        <table className="theory-table">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Đại từ / Trạng từ</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>кто</strong><br/><em style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>(người mà)</em></td>
              <td>Я знаю человека, <strong>кто</strong> живёт рядом со мной.<br/><em style={{ color: 'var(--text-secondary)' }}>(Tôi biết người mà sống gần tôi.)</em></td>
            </tr>
            <tr>
              <td><strong>что / какой</strong><br/><em style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>(cái mà, điều mà, loại mà)</em></td>
              <td>
                Я прочитал всё, <strong>что</strong> ты написал. <em style={{ color: 'var(--text-secondary)' }}>(Tôi đã đọc tất cả những gì bạn viết.)</em><br/><br/>
                Это фильм, <strong>какой</strong> мы смотрели вчера. <em style={{ color: 'var(--text-secondary)' }}>(Đây là bộ phim mà chúng ta xem hôm qua.)</em>
              </td>
            </tr>
            <tr>
              <td><strong>чей</strong><br/><em style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>(của người mà, của cái mà)</em></td>
              <td>Это студент, <strong>чья</strong> работа лучшая.<br/><em style={{ color: 'var(--text-secondary)' }}>(Đây là sinh viên mà bài làm của bạn ấy là tốt nhất.)</em></td>
            </tr>
            <tr>
              <td><strong>который</strong><br/><em style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>(người mà, cái mà - rất phổ biến trong văn viết)</em></td>
              <td>Это книга, <strong>которую</strong> я купил.<br/><em style={{ color: 'var(--text-secondary)' }}>(Đây là quyển sách mà tôi đã mua.)</em></td>
            </tr>
            <tr>
              <td><strong>где</strong><br/><em style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>(nơi mà)</em></td>
              <td>Это город, <strong>где</strong> я родился.<br/><em style={{ color: 'var(--text-secondary)' }}>(Đây là thành phố nơi tôi sinh ra.)</em></td>
            </tr>
            <tr>
              <td><strong>куда</strong><br/><em style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>(nơi mà - chỉ hướng đi tới)</em></td>
              <td>Это дом, <strong>куда</strong> мы переехали.<br/><em style={{ color: 'var(--text-secondary)' }}>(Đây là ngôi nhà mà chúng tôi đã chuyển đến.)</em></td>
            </tr>
            <tr>
              <td><strong>откуда</strong><br/><em style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>(nơi mà - chỉ nguồn gốc/hướng đi ra)</em></td>
              <td>Это деревня, <strong>откуда</strong> приехал мой отец.<br/><em style={{ color: 'var(--text-secondary)' }}>(Đây là ngôi làng nơi bố tôi sinh ra/đến từ đó.)</em></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 6. ĐẠI TỪ XÁC ĐỊNH */}
      <div className="theory-block" style={{ marginTop: '2rem' }}>
        <h3 className="theory-block-title">6. ĐẠI TỪ XÁC ĐỊNH (Определительные местоимения)</h3>
        <p>
          Đại từ xác định dùng để chỉ tính chất tổng thể, bao quát của sự vật hoặc người. 
          Dưới đây là bảng biến cách của đại từ <strong>все</strong> (tất cả mọi người / tất cả).
        </p>
        
        <table className="theory-table">
          <thead>
            <tr>
              <th style={{ width: '20%' }}>Cách</th>
              <th style={{ width: '30%' }}>Dạng biến đổi</th>
              <th>Câu hỏi tương ứng (Vietnamese)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>И.п.</strong></td>
              <td><strong>все</strong></td>
              <td>ai? (tất cả mọi người)</td>
            </tr>
            <tr>
              <td><strong>Р.п.</strong></td>
              <td><strong>всех</strong></td>
              <td>của ai? / từ ai?</td>
            </tr>
            <tr>
              <td><strong>Д.п.</strong></td>
              <td><strong>всем</strong></td>
              <td>cho ai? / tới ai?</td>
            </tr>
            <tr>
              <td><strong>В.п.</strong></td>
              <td><strong>всех</strong></td>
              <td>ai? (tác động lên ai)</td>
            </tr>
            <tr>
              <td><strong>Т.п.</strong></td>
              <td><strong>всеми</strong></td>
              <td>với ai? / bởi ai?</td>
            </tr>
            <tr>
              <td><strong>П.п.</strong></td>
              <td><strong>обо всех</strong></td>
              <td>về ai? (về tất cả mọi người)</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
          <strong>Ghi chú:</strong> Ngoài "все", nhóm này còn bao gồm các đại từ khác như: 
          <em> весь, вся, всё, каждый, любой, самый, иной...</em>
        </div>
      </div>
    </div>
  );
};

export default MestoimenieTheory;
