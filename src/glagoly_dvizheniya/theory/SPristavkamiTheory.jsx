import React from 'react';

const SPristavkamiTheory = () => {
  return (
    <div className="theory-container">
      <div className="theory-header">
        <h2>Động từ chuyển động có tiền tố (С префиксами)</h2>
        <p className="highlight-text">
          <strong>Nguyên tắc chung cốt lõi:</strong> Khi ghép tiền tố (приставки) vào động từ chuyển động:
        </p>
        <ul style={{textAlign: 'left', margin: '10px 0'}}>
            <li><strong>Tiền tố + Động từ Nhóm I = Động từ Thể Hoàn Thành (СВ).</strong> Nó mang ý nghĩa "kết quả" của một hành động.<br/><em>Ví dụ: идти (НСВ) + при = прийти (СВ - đã đến nơi).</em></li>
            <li><strong>Tiền tố + Động từ Nhóm II = Động từ Thể Chưa Hoàn Thành (НСВ).</strong> Nó mang ý nghĩa quá trình hoặc sự lặp lại.<br/><em>Ví dụ: ходить (НСВ) + при = приходить (НСВ - thường xuyên đến/đang đến).</em></li>
        </ul>
        <p style={{textAlign: 'left', marginTop: '10px'}}>
            Khác với Phần 1, ở Phần 2 này, các động từ sẽ tạo thành một <strong>Cặp Thể Ngữ Pháp (Грамматическая пара)</strong> thực sự: приходить (НСВ) — прийти (СВ).
        </p>
        <p className="note-text" style={{marginTop: '10px'}}>
            <em>(Đặc biệt chú ý hiện tượng biến đổi ngữ âm/chính tả: "идти" khi có tiền tố thường biến thành "-йти", ví dụ: прийти, войти, уйти...)</em>
        </p>
      </div>

      <div className="theory-section">
        <h3>Ý nghĩa chi tiết của các nhóm tiền tố thường gặp</h3>
        
        <div className="rule-box">
          <h4>1. Cặp tiền tố ПРИ- (Đến nơi) và У- (Rời đi hẳn)</h4>
          <p><strong>ПРИ- (Đến, chạm đích):</strong> Mang nghĩa "có mặt tại đây" (он здесь).</p>
          <ul className="examples-list">
            <li><strong>НСВ - СВ:</strong> приходить - прийти; приезжать - приехать; приносить - принести...</li>
            <li><em>Ví dụ: Он пришёл к нам в гости. (Anh ấy đã đến nhà chúng tôi làm khách - kết quả là anh ấy đang ở nhà chúng tôi). Самолёт прилетел. (Máy bay đã hạ cánh).</em></li>
          </ul>
          
          <p style={{marginTop: '15px'}}><strong>У- (Rời đi, bỏ đi mất):</strong> Mang nghĩa "đã đi khỏi đây rồi" (его здесь нет).</p>
          <ul className="examples-list">
            <li><strong>НСВ - СВ:</strong> уходить - уйти; уезжать - уехать; уносить - унести...</li>
            <li><em>Ví dụ: Его нет дома, он ушёл в институт. (Anh ấy không có nhà, anh ấy đã đi đến trường viện rồi). Она увезла сына из города на всё лето. (Cô ấy đã chở con trai rời khỏi thành phố cả mùa hè).</em></li>
          </ul>
        </div>

        <div className="rule-box">
          <h4>2. Cặp tiền tố В- / ВЫ- (Vào trong / Ra ngoài)</h4>
          <p><strong>В- (Đi vào trong):</strong></p>
          <ul className="examples-list">
            <li><strong>НСВ - СВ:</strong> входить - войти; въезжать - въехать; вносить - внести...</li>
            <li><em>Ví dụ: Он вошёл в комнату. (Anh ấy đã bước vào phòng). Птица влетела в открытое окно. (Con chim bay vào chiếc cửa sổ đang mở).</em></li>
          </ul>
          
          <p style={{marginTop: '15px'}}><strong>ВЫ- (Đi ra ngoài):</strong></p>
          <ul className="examples-list">
            <li><strong>НСВ - СВ:</strong> выходить - выйти; выезжать - выехать; выносить - вынести...</li>
            <li><em>Ví dụ: Он вышел из дома в девять утра. (Anh ấy đã bước ra khỏi nhà lúc 9 giờ sáng).</em></li>
          </ul>
        </div>

        <div className="rule-box">
          <h4>3. Tiền tố ПО- (Bắt đầu khởi hành)</h4>
          <p>Tiền tố này chỉ kết hợp với <strong>Nhóm I</strong> và luôn luôn tạo thành <strong>Thể Hoàn Thành (СВ)</strong>. Nó mang nghĩa "điểm xuất phát", "bắt đầu đi" (старт). Chúng không tạo thành cặp thể ngữ pháp.</p>
          <ul className="examples-list">
            <li><em>Ví dụ: Он пошёл в магазин. (Anh ấy đã bắt đầu đi tới cửa hàng).</em></li>
            <li><em>Завтра он поедет в Москву. (Ngày mai anh ấy sẽ lên đường đi Moscow).</em></li>
            <li><em>Почему мы остановились? Поехали! (Tại sao chúng ta lại dừng lại? Đi tiếp thôi!).</em></li>
          </ul>
        </div>

        <div className="rule-box">
          <h4>4. Cặp tiền tố ПОД- (Tiến lại gần) và ОТ- (Lùi ra xa / Mang đi)</h4>
          <p><strong>ПОД- (Đến gần một người/vật nào đó):</strong></p>
          <ul className="examples-list">
            <li><strong>НСВ - СВ:</strong> подходить - подойти; подъезжать - подъехать...</li>
            <li><em>Ví dụ: Подойди, пожалуйста, ко мне! (Xin hãy bước lại gần tôi!). Дети подбежали к отцу. (Bọn trẻ chạy ùa tới chỗ người cha).</em></li>
          </ul>
          
          <p style={{marginTop: '15px'}}><strong>ОТ- (Lùi ra xa, tránh ra):</strong></p>
          <ul className="examples-list">
            <li><strong>НСВ - СВ:</strong> отходить - отойти; отъезжать - отъехать...</li>
            <li><em>Ví dụ: Отойди от меня! (Hãy tránh xa tôi ra!).</em></li>
          </ul>
          <p className="note-text" style={{marginTop: '10px'}}>
            <strong>Lưu ý với ngoại động từ (носить, возить, водить):</strong> Tiền tố <strong>от-</strong> mang ý nghĩa "đem cái gì đến cho ai, dắt ai đi đến đâu đích xác".<br/>
            <em>Ví dụ: Отнеси пальто в химчистку. (Hãy đem cái áo khoác này đến tiệm giặt khô). Отведи ребёнка в детский сад. (Hãy dắt đứa trẻ đến trường mầm non).</em>
          </p>
        </div>

        <div className="rule-box">
          <h4>5. Tiền tố ПЕРЕ- (Băng qua, Chuyển chỗ)</h4>
          <p>Mang ý nghĩa vượt qua một chướng ngại vật (đường cái, con sông) hoặc chuyển từ nơi này sang nơi khác.</p>
          <ul className="examples-list">
            <li><strong>НСВ - СВ:</strong> переходить - перейти; переезжать - переехать...</li>
            <li><em>Ví dụ: Он перешёл дорогу. (Anh ấy đã băng qua đường). Мы переезжаем на другую квартиру. (Chúng tôi đang chuyển sang một căn hộ khác). Мяч перелетел через ворота. (Quả bóng bay vượt qua khung thành).</em></li>
          </ul>
        </div>

        <div className="rule-box">
          <h4>6. Tiền tố ЗА- (Ghé qua / Khuất sau)</h4>
          <p>Mang hai nghĩa chính: ghé tạt qua đâu đó một lát trên đường đi, hoặc di chuyển ra phía sau một vật thể.</p>
          <ul className="examples-list">
            <li><strong>НСВ - СВ:</strong> заходить - зайти; заезжать - заехать...</li>
            <li><em>Ví dụ (Ghé qua): По дороге домой зайду в аптеку. (Trên đường về nhà tôi sẽ ghé qua hiệu thuốc). Заходи (забегай) в гости! (Nhớ ghé chơi nhé!).</em></li>
            <li><em>Ví dụ (Khuất sau): Солнце зашло за тучу. (Mặt trời đã lặn khuất sau đám mây). Машина заехала за угол. (Chiếc xe chạy khuất sau góc tường).</em></li>
          </ul>
        </div>

        <div className="rule-box">
          <h4>7. Tiền tố ПРО- (Đi ngang qua, xuyên qua, đi thêm)</h4>
          <p>Mang ý nghĩa đi sượt qua, lướt qua ai đó/cái gì đó hoặc đi xuyên suốt không gian.</p>
          <ul className="examples-list">
            <li><strong>НСВ - СВ:</strong> проходить - пройти; проезжать - проехать...</li>
            <li><em>Ví dụ: Он прошёл мимо меня и не поздоровался. (Anh ấy đi ngang qua tôi mà không chào). Проходите в комнату. (Xin hãy đi thẳng vào phòng). Как пройти в иностранный отдел? (Làm sao để đi đến phòng đối ngoại?).</em></li>
          </ul>
        </div>

        <div className="rule-box">
          <h4>8. Tiền tố ДО- (Đi chạm mốc / Đi tới tận nơi)</h4>
          <p>Biểu thị hành động di chuyển đạt tới giới hạn/đích đến. Thường đi kèm với giới từ "до".</p>
          <ul className="examples-list">
            <li><strong>НСВ - СВ:</strong> доходить - дойти; доезжать - доехать...</li>
            <li><em>Ví dụ: Я доехал до университета за двадцать минут. (Tôi đi tới trường đại học mất 20 phút). Была такая метель, что мы с трудом дошли до дома. (Bão tuyết to đến mức chúng tôi khó khăn lắm mới về tới được tận nhà).</em></li>
          </ul>
        </div>

        <div className="rule-box">
          <h4>9. Các tiền tố khác: ОБ-, ВЗ-/ВС-, С-, РАЗ-</h4>
          <ul className="examples-list">
            <li><strong>ОБ- (Đi vòng quanh / Bao quát):</strong> Он обошёл вокруг дома. (Anh ấy đã đi một vòng quanh nhà).</li>
            <li><strong>ВЗ-/ВС- (Đi lên / Hướng lên trên):</strong> Самолёт взлетает. (Máy bay đang cất cánh). Солнце восходит. (Mặt trời đang mọc).</li>
            <li><strong>С- (Đi xuống / Hướng xuống dưới):</strong> Дети съехали с горы на санках. (Bọn trẻ trượt xe trượt tuyết từ trên núi xuống).</li>
            <li><strong>РАЗ- (Tản ra các hướng):</strong> Гости разъехались. (Khách khứa đã tản ra về hết). Дети испугались и разбежались в разные стороны. (Bọn trẻ sợ hãi и bỏ chạy tán loạn ra các hướng).</li>
          </ul>
        </div>
      </div>

      <div className="theory-section">
        <h3>TRƯỜNG HỢP ĐẶC BIỆT</h3>
        
        <div className="rule-box">
          <h4>Trường hợp 1: Tiền tố kết hợp với NHÓM II mang ý nghĩa THỜI GIAN</h4>
          <p>Chỉ có 3 tiền tố <strong>по-, про-, за-</strong> kết hợp được với Nhóm II (ходить, ездить, плавать...) để chỉ thời gian.<br/>
          <strong>Quy tắc:</strong> Luôn tạo thành động từ <strong>Thể Hoàn Thành (СВ)</strong>! (Không đổi gốc động từ).</p>
          <ul className="examples-list">
            <li><strong>ПО- + Nhóm II = Làm một chút, đi dạo một lát (немного, недолго):</strong><br/>
            <em>Ví dụ: Мы немного походили по городу. (Chúng tôi đã đi dạo quanh thành phố một lát). Я хочу поплавать в бассейне. (Tôi muốn bơi trong hồ bơi một lát).</em></li>
            <li><strong>ПРО- + Nhóm II = Dành cả một khoảng thời gian dài (долго, много времени):</strong><br/>
            <em>Ví dụ: Мы проходили по городу весь день. (Chúng tôi đã đi bộ suốt cả thành phố nguyên một ngày). Она проплавала в бассейне полдня. (Cô ấy đã bơi trong hồ bơi suốt nửa ngày trời).</em></li>
            <li><strong>ЗА- + Nhóm II = Bắt đầu một trạng thái/hành động (начало действия - ít dùng hơn):</strong><br/>
            <em>Ví dụ: Он встал и заходил по комнате. (Anh ta đứng dậy và bắt đầu đi qua đi lại trong phòng).</em></li>
          </ul>
        </div>

        <div className="rule-box">
          <h4>Trường hợp 2: Tiền tố С- với ý nghĩa KHỨ HỒI</h4>
          <p>Tiền tố <strong>с-</strong> cũng có thể kết hợp với động từ Nhóm II không chuyển tiếp (ходить, ездить, бегать, летать, плавать).</p>
          <ul className="examples-list">
            <li><strong>Quy tắc:</strong> Luôn tạo ra động từ <strong>Thể Hoàn Thành (СВ)</strong>: сходить, съездить, сбегать...</li>
            <li><strong>Ý nghĩa:</strong> Biểu thị hành động đi khứ hồi (đi rồi về ngay) hoặc thay thế cho tiền tố "по-" ở trên.</li>
            <li><em>Ví dụ: Хочу съездить в Суздаль. (Tôi muốn làm một chuyến đi chơi Suzdal (tức là đi đến đó rồi về)). Сбегай за вином! (Chạy đi mua chai rượu nhoáng cái rồi về đây nhé!). Давай сходим в театр! (Chúng mình cùng đi nhà hát đi!).</em></li>
          </ul>
        </div>
      </div>

      <div className="theory-section">
        <h3>Phần mở rộng (Nâng cao)</h3>
        <p>6 cặp động từ đặc thù dành cho người muốn học sâu hơn:</p>
        <div className="table-responsive">
          <table className="theory-table">
            <thead>
              <tr>
                <th>Cặp động từ</th>
                <th>Ý nghĩa</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>брести — бродить</strong></td><td>đi lang thang, lững thững</td></tr>
              <tr><td><strong>лезть — лазать/лазить</strong></td><td>leo, trèo, chui rúc</td></tr>
              <tr><td><strong>ползти — ползать</strong></td><td>bò, trườn</td></tr>
              <tr><td><strong>тащить — таскать</strong></td><td>lôi, kéo, xách nặng</td></tr>
              <tr><td><strong>гнать — гонять</strong></td><td>đuổi, lùa</td></tr>
              <tr><td><strong>катить — катать</strong></td><td>lăn, đẩy bánh xe</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="theory-section">
        <h3>Nghĩa bóng (Переносное значение)</h3>
        <p>Rất nhiều bài tập tập trung vào việc dùng động từ chuyển động với nghĩa bóng:</p>
        <div className="idiom-grid">
          <div className="idiom-item"><strong>Идти:</strong> Идёт дождь (Trời mưa)</div>
          <div className="idiom-item"><strong>Лететь:</strong> Время летит (Thời gian bay/trôi nhanh)</div>
          <div className="idiom-item"><strong>Ходить:</strong> Часы не ходят (Đồng hồ chết)</div>
          <div className="idiom-item"><strong>Заводиться:</strong> Машина не заводится (Xe không nổ máy)</div>
        </div>
      </div>

    </div>
  );
};

export default SPristavkamiTheory;
