import React from 'react';

const SopostavlenieTheory = () => {
  return (
    <div className="theory-container">
      <div className="theory-block">
        <h3 className="theory-block-title">1. Khái niệm chung (Общее понятие)</h3>
        <p>
          <strong>Сопоставление</strong> — такая связь между ситуациями, при которой устанавливаются различия между двумя парами компонентов.
        </p>
        <p>
          <strong>Đối chiếu</strong> — là một loại liên kết giữa các tình huống, trong đó thiết lập sự khác biệt giữa hai cặp thành phần.
        </p>

        <div className="example-box" style={{ marginTop: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
          <h4 style={{ color: '#3b82f6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>💡</span> Ví dụ (Например):
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>
              <div style={{ color: '#e2e8f0', fontWeight: '500' }}>Зимой у нас холодно, а летом жарко.</div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', fontStyle: 'italic' }}>Mùa đông ở chỗ chúng tôi thì lạnh, còn mùa hè thì nóng.</div>
            </li>
            <li>
              <div style={{ color: '#e2e8f0', fontWeight: '500' }}>Брат работает, а сестра учится.</div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', fontStyle: 'italic' }}>Anh trai làm việc, còn em gái đi học.</div>
            </li>
            <li>
              <div style={{ color: '#e2e8f0', fontWeight: '500' }}>Мужчину зовут Павел, а жену — Марина.</div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', fontStyle: 'italic' }}>Người chồng tên là Pavel, còn người vợ tên là Marina.</div>
            </li>
          </ul>
        </div>

        <div className="theory-note" style={{ marginTop: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', padding: '1.2rem', borderRadius: '10px' }}>
          <p>
            При сопоставлении обычно наблюдается лексический и структурный параллелизм сравниваемых компонентов. Часто они образуют двусоставную конструкцию.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Khi đối chiếu, thường thấy sự song song về cấu trúc và từ vựng của các thành phần được so sánh. Chúng thường tạo thành một cấu trúc gồm hai thành phần.
          </p>
          <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '6px', textAlign: 'center' }}>
              <strong>Зимой холодно — летом жарко</strong>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '6px', textAlign: 'center' }}>
              <strong>Брат работает — сестра учится</strong>
            </div>
          </div>
        </div>

        <p style={{ marginTop: '1.5rem' }}>
          Сопоставляться могут различные предикативные единицы: пространственные, временные, предметные; внешние и внутренние характеристики человека, его действия, явления природы.
        </p>
        <p>
          Có thể đối chiếu các đơn vị vị ngữ khác nhau: không gian, thời gian, sự vật; các đặc điểm bên ngoài và bên trong của con người, hành động của người đó, các hiện tượng thiên nhiên.
        </p>

        <table className="theory-table" style={{ marginTop: '1.5rem' }}>
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Tiếng Nga (Русский)</th>
              <th>Tiếng Việt (Вьетнамский)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Раньше он жил с родителями, а теперь он живёт один.</td>
              <td>Trước kia anh ấy sống cùng bố mẹ, còn bây giờ anh ấy sống một mình.</td>
            </tr>
            <tr>
              <td>С утра она уходила на работу, а по вечерам она занималась дома.</td>
              <td>Buổi sáng cô ấy đi làm, còn buổi tối cô ấy học ở nhà.</td>
            </tr>
            <tr>
              <td>Книги у него были новые, а пластинки старые.</td>
              <td>Sách của anh ấy thì mới, còn đĩa than thì cũ.</td>
            </tr>
            <tr>
              <td>Слева от дороги была гора, а справа — море.</td>
              <td>Bên trái con đường là núi, còn bên phải là biển.</td>
            </tr>
            <tr>
              <td>С утра было солнечно, а вечером пошёл дождь.</td>
              <td>Buổi sáng trời nắng, còn buổi tối trời đổ mưa.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="theory-block" style={{ marginTop: '3rem' }}>
        <h3 className="theory-block-title">2. Liên từ «а» với tư cách là liên từ đối chiếu chính (Союз «а» как основной союз сопоставления)</h3>
        <p>
          Основным союзом сопоставления является союз <strong>А</strong>. Слова, связывающие компоненты сопоставления, часто синонимичны, а иногда полностью совпадают.
        </p>
        <p>
          Liên từ đối chiếu chính là liên từ <strong>"А"</strong> (còn, mà). Các từ liên kết các thành phần đối chiếu thường đồng nghĩa, và đôi khi trùng khớp hoàn toàn.
        </p>

        <div className="example-box" style={{ marginTop: '1rem', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px' }}>
          <p>— Мне нравится классическая музыка, <strong>а</strong> он предпочитает современную.</p>
          <p>— На одной стороне улицы стоят жилые дома, <strong>а</strong> на другой расположены торговые палатки и павильоны.</p>
        </div>

        <div className="theory-note warning" style={{ marginTop: '1.5rem', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #f59e0b', padding: '1.2rem' }}>
          <strong>Lưu ý về lược bỏ từ (Эллипсис):</strong>
          <p style={{ marginTop: '0.5rem' }}>
            При совпадении связывающих слов второе обычно опускается, а на письме это передаётся при помощи тире.
          </p>
          <p>
            Khi các từ liên kết trùng khớp nhau, từ thứ hai thường được lược bỏ, và trong văn viết điều này được thể hiện bằng dấu gạch ngang.
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#94a3b8' }}>Мужчину зовут Павел, а жену зовут Марина.</span>
              <span style={{ color: '#3b82f6' }}>➔</span>
              <strong>Мужчину зовут Павел, а жену — Марина.</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#94a3b8' }}>Нина пошла в кино, а Николай пошёл на стадион.</span>
              <span style={{ color: '#3b82f6' }}>➔</span>
              <strong>Нина пошла в кино, а Николай — на стадион.</strong>
            </div>
          </div>
        </div>

        <div className="theory-note" style={{ marginTop: '1.5rem' }}>
          <p>
            В сопоставительных предложениях никогда не употребляется союз <strong>И</strong>. Компоненты сопоставления могут быть выражены одним словом или несколькими.
          </p>
          <p>
            Trong các câu đối chiếu, không bao giờ sử dụng liên từ <strong>"И"</strong> (và). Các thành phần đối chiếu có thể được biểu đạt bằng một từ hoặc nhiều từ.
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '1rem', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px' }}>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>
              <div>Я работаю в школе учительницей, <strong>а</strong> сестра — в поликлинике медсестрой.</div>
            </li>
            <li>
              <div>Он устал и лёг на траву, <strong>а</strong> она тихо пошла вдоль берега по воде.</div>
            </li>
            <li>
              <div>Чтобы научиться плавать, надо войти в воду, <strong>а</strong> чтобы научиться ездить на велосипеде, надо сесть на него и поехать.</div>
            </li>
          </ul>
        </div>

        <div className="theory-note" style={{ marginTop: '1.5rem', border: '1px dashed #3b82f6' }}>
          <p>
            В сложном предложении, где не две, а больше единиц сопоставления, последний присоединяется союзом <strong>а</strong>, и этим союзом подчёркивается отличие последней части от предыдущих.
          </p>
          <p>
            Trong một câu phức, nơi không phải có hai mà có nhiều hơn các đơn vị đối chiếu, đơn vị cuối cùng được nối bằng liên từ <strong>"а"</strong>, và liên từ này nhấn mạnh sự khác biệt của phần cuối cùng so với các phần trước đó.
          </p>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#cbd5e1' }}>
            «Зима у нас длинная, затяжная, лето поражает короне зимы, <strong>а</strong> осень проходит мгновенно и оставляет впечатление промелькнувшей за окном золотой этины.» (Паустовский)
          </p>
        </div>
      </div>

      <div className="theory-block" style={{ marginTop: '3rem' }}>
        <h3 className="theory-block-title">3. Liên từ «а» trong các câu đơn (Союз «а» в простых предложениях)</h3>
        <p>
          В простых предложениях союз <strong>а</strong> выступает в той же функции: передаёт различие между людьми, предметами, явлениями, действиями.
        </p>
        <p>
          Trong các câu đơn, liên từ <strong>"а"</strong> cũng đóng cùng một chức năng: truyền đạt sự khác biệt giữa con người, sự vật, hiện tượng, hành động.
        </p>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
          {[
            { ru: 'Он не физик, а химик.', vi: 'Anh ấy không phải là nhà vật lý, mà là nhà hóa học.' },
            { ru: 'Это не магазин, а аптека.', vi: 'Đây không phải là cửa hàng, mà là hiệu thuốc.' },
            { ru: 'У неё сестра, а не брат.', vi: 'Cô ấy có em gái, chứ không phải em trai.' },
            { ru: 'Он ездил в Москву не зимой, а летом.', vi: 'Anh ấy đã đi Mát-xcơ-va không phải vào mùa đông, mà vào mùa hè.' },
            { ru: 'У неё плащ чёрный, а не серый.', vi: 'Áo choàng của cô ấy màu đen, chứ không phải màu xám.' },
            { ru: 'Он не поехал на автобусе, а пошёл пешком.', vi: 'Anh ấy đã không đi xe buýt, mà đi bộ.' }
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: '#e2e8f0', fontWeight: '500', marginBottom: '0.3rem' }}>{item.ru}</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{item.vi}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="theory-block" style={{ marginTop: '3rem' }}>
        <h3 className="theory-block-title">4. Đối chiếu trong các thể thống nhất hội thoại (Сопоставление в диалогических единствах)</h3>
        <p>
          Если в диалогических единствах вторая реплика представлена вопросом, она начинается союзом <strong>и</strong> или <strong>а</strong>. Эти союзы в целом сохраняют своё смысловое различие: присоединение, тождество или сопоставление.
        </p>
        <p>
          Nếu trong các thể thống nhất hội thoại, lời đáp thứ hai được thể hiện bằng một câu hỏi, thì nó bắt đầu bằng liên từ <strong>"и"</strong> hoặc <strong>"а"</strong>. Nhìn chung, các liên từ này giữ nguyên sự khác biệt về mặt ý nghĩa của chúng.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>4.1. Vai trò giao tiếp khác nhau (Разная коммуникативная роль)</h4>
          <p>
            Союзы <strong>и</strong> или <strong>а</strong> обычно играют разную коммуникативную роль: при <strong>и</strong> — это предположение тождества, при <strong>а</strong> — это введение какого-то нового, другого аспекта коммуникации, это новый поворот темы.
          </p>
          
          <table className="theory-table" style={{ marginTop: '1rem' }}>
            <thead>
              <tr>
                <th style={{ width: '50%' }}>Liên từ "И" (Giả định đồng nhất)</th>
                <th>Liên từ "А" (Khía cạnh mới)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  — Мы вчера ходили на концерт.<br/>
                  — <strong>И</strong> Нина была? (Нина тоже?)
                </td>
                <td>
                  — Мы вчера ходили на концерт.<br/>
                  — <strong>А</strong> Нина была? (Đối tượng mới)
                </td>
              </tr>
              <tr>
                <td>
                  — Собаки прекрасно понимают человека.<br/>
                  — <strong>И</strong> кошки? (Кошки тоже?)
                </td>
                <td>
                  — Собаки прекрасно понимают человека.<br/>
                  — <strong>А</strong> кошки? (Đối tượng mới)
                </td>
              </tr>
              <tr>
                <td>
                  — Сегодня мы отдыхаем.<br/>
                  — <strong>И</strong> завтра? (Cũng vậy?)
                </td>
                <td>
                  — Сегодня we отдыхаем.<br/>
                  — <strong>А</strong> завтра? (Có thể là khác)
                </td>
              </tr>
              <tr>
                <td>
                  — Здесь остановка автобуса.<br/>
                  — <strong>И</strong> трамвая? (Cũng vậy?)
                </td>
                <td>
                  — Здесь остановка автобуса.<br/>
                  — <strong>А</strong> трамвая? (Về đối tượng khác)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="theory-note" style={{ marginTop: '1rem', background: 'rgba(59, 130, 246, 0.05)' }}>
             <p>— Никто не отвечает!</p>
             <p>— <strong>А</strong> телефон правильный? (Ý nghĩ về sự đồng nhất không còn thích hợp)</p>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>4.2. Hệ quả của thông báo đầu tiên (Следствие первого сообщения)</h4>
          <p>
            Если во второй реплике речь идет о том, что является следствием первого сообщения, то употребляется только союз <strong>и</strong>.
          </p>
          <div className="example-box" style={{ marginTop: '1rem', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px' }}>
            <p>— Я не успел его предупредить. — <strong>И</strong> он опоздал?</p>
            <p>— Он совсем не готовился к экзаменам. — <strong>И</strong> провалился?</p>
            <p>— Было так скользко! — <strong>И</strong> она упала?</p>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>4.3. Ý nghĩa ngạc nhiên, hoang mang (Значение удивления, недоумения)</h4>
          <p>
            В зависимости от интонации (ИК) в реплике с союзом <strong>и</strong> может выражаться дополнительное значение удивления, которое «накладывается» на значение ожидаемого следствия.
          </p>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Ngữ điệu ИК-3 (Hỏi thông thường)</div>
              <p>— И она пошла? (Hỏi xem có đi không)</p>
              <p>— И они согласились? (Hỏi xác nhận)</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
              <div style={{ color: '#3b82f6', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Ngữ điệu ИК-4 (Ngạc nhiên)</div>
              <p>— <strong>И она пошла?!</strong> (Ngạc nhiên vì cô ấy đi)</p>
              <p>— <strong>И они согласились?!</strong> (Hoang mang vì họ đồng ý)</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>4.4. Sự hiện diện của từ để hỏi (Наличие вопросительного слова)</h4>
          <p>
            Если вторая реплика имеет в своем составе вопросительное слово (кто, что, где, куда, как, какой, зачем), она может «открываться» союзом <strong>и</strong> (phát triển chủ đề) hoặc <strong>а</strong> (hướng đi mới).
          </p>
          <div className="example-box" style={{ marginTop: '1rem', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px' }}>
             <p>— Мы едем в Петербург.</p>
             <p>— <strong>И</strong> когда вы едете? (Tiếp tục chủ đề thời gian)</p>
             <p>— <strong>А</strong> когда вы едете? (Chuyển sang một thông tin mới cần biết)</p>
          </div>
          <div className="theory-note warning" style={{ marginTop: '1rem' }}>
            Но при вопросительных словах <strong>почему</strong> и <strong>зачем</strong> обычно употребляется союз <strong>а</strong>.
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '6px' }}>
              <p>— А почему в экономический?</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '6px' }}>
              <p>— А зачем он туда поехал?</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '6px' }}>
              <p>— А почему у первого?</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '6px' }}>
              <p>— А зачем он ему?</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>4.5. Tiểu từ «не» trong lời đáp thứ hai (Частица «не» во второй реплике)</h4>
          <p>
            Если во второй реплике выражено предложение с частицей <strong>не</strong>, которая в данном случае không mang ý nghĩa phủ định thực sự, thì người ta thường sử dụng liên từ <strong>а</strong>.
          </p>
          <div className="example-box" style={{ marginTop: '1rem', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px' }}>
            <p>— Вчера мне звонил Коля. — <strong>А</strong> Мина не звонил?</p>
            <p>— Завтра принесу словарь. — <strong>А</strong> ты не забудешь?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SopostavlenieTheory;
