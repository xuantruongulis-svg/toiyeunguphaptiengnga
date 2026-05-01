import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const pisatCards = [
  { verb: 'вписывать — вписать', meaning: 'Viết vào, ghi thêm vào bên trong: вписать слово в бланк\n(toán học) nội tiếp hình này trong hình kia' },
  { verb: 'вписываться — вписаться', meaning: '(ngôi 1 & 2 không dùng) hòa hợp với môi trường xung quanh: вписаться в интерьер' },
  { verb: 'выписывать — выписать', meaning: '1) trích ra từ đâu: цитату из книги\n2) viết để cấp cho ai: счёт, рецепт\n3) đặt mua, đặt hàng: газету, журнал' },
  { verb: 'выписываться — выписаться', meaning: 'Ra khỏi danh sách, xuất viện, hủy đăng ký: выписаться из больницы' },
  { verb: 'дописывать — дописать', meaning: 'Viết nốt, hoàn thành bài viết: дописать письмо до конца' },
  { verb: 'дописаться (СВ)', meaning: '(tiêu cực) viết đến mức gây ra hậu quả xấu' },
  { verb: 'записывать — записать', meaning: '1) ghi lại để nhớ: номер телефона\n2) thu âm, thu hình: песню, фильм\n3) đưa vào danh sách: записать в кружок' },
  { verb: 'записываться — записаться', meaning: 'Đăng ký, ghi tên vào danh sách: записаться на приём к врачу' },
  { verb: 'исписывать — исписать', meaning: 'Viết đầy, phủ đầy chữ: исписать весь лист бумаги' },
  { verb: 'исписаться (СВ)', meaning: '1) (về bút, bút chì) hết mực, cùn\n2) (nghĩa bóng, về nhà văn) cạn kiệt tài năng, sáng tạo' },
  { verb: 'писать — написать', meaning: '1) để lại ký hiệu chữ viết: написать по-русски\n2) sáng tác: написать роман\n3) (hội họa) vẽ: написать картину' },
  { verb: 'писаться (НСВ)', meaning: '(ngôi 1 & 2 không dùng)\n1) được thể hiện: в газетах\n2) (безл.) có hứng viết: Мне не пишется.' },
  { verb: 'надписывать — надписать', meaning: 'Viết lên trên hoặc phía ngoài: надписать книгу, посылку' },
  { verb: 'описывать — описать', meaning: '1) miêu tả bằng lời: описать события\n2) (chính thức) lập danh sách: описать имущество\n3) (toán học) ngoại tiếp: описать окружность\n4) di chuyển theo đường cong: описать дугу' },
  { verb: 'описаться (СВ)', meaning: 'Lỡ tay viết nhầm, mắc lỗi chính tả ngẫu nhiên' },
  { verb: 'отписывать — отписать', meaning: '(cổ) viết; chuyển nhượng: дом в наследство' },
  { verb: 'отписаться (СВ)', meaning: 'Đối phó bằng văn bản qua loa, trả lời cho xong chuyện' },
  { verb: 'переписывать — переписать', meaning: '1) chép lại, sao lại: текст\n2) lập danh sách: присутствующих' },
  { verb: 'переписываться (НСВ)', meaning: 'Trao đổi thư từ với nhau: переписываться с другом' },
  { verb: 'подписывать — подписать', meaning: '1) ký xác nhận: контракт\n2) đăng ký báo/tạp chí cho ai: подписать на газету' },
  { verb: 'подписываться — подписаться', meaning: '1) đặt chữ ký: подписаться под документом\n2) đăng ký theo dõi: подписаться на газету' },
  { verb: 'предписывать — предписать', meaning: '(chính thức) ra lệnh, chỉ định (thường cho bác sĩ, cấp trên): предписать диету' },
  { verb: 'приписывать — приписать', meaning: '1) viết thêm vào: приписать несколько слов\n2) quy cho ai: приписать стихотворение Пушкину\n3) đưa vào diện quản lý của: приписать к призывному участку' },
  { verb: 'прописывать — прописать', meaning: '1) đăng ký cư trú chính thức: по этому адресу\n2) (bác sĩ) kê đơn thuốc: лекарство\n3) viết lâu: всю ночь' },
  { verb: 'прописываться — прописаться', meaning: 'Đăng ký cư trú chính thức cho bản thân: в Москве' },
  { verb: 'расписывать — расписать', meaning: '1) phân công, chia lịch: все дни\n2) (nghĩa bóng) tô vẽ thêm, nói cường điệu: свои подвиги\n3) (hội họa) vẽ trang trí lên: потолок' },
  { verb: 'расписываться — расписаться', meaning: '1) ký xác nhận: в ведомости; в своей беспомощности\n2) (khẩu ngữ) đăng ký kết hôn: расписаться с кем-либо' },
  { verb: 'списывать — списать', meaning: '1) sao chép: расписание\n2) (hội họa) sao chép: копию\n3) (văn học) lấy hình mẫu từ: характер героя\n4) chép bài/đáp án của người khác: контрольную у товарища\n5) (hàng hải) cho ra khỏi danh sách tàu: на берег' },
  { verb: 'списываться — списаться', meaning: '1) liên lạc qua thư: с родными\n2) (hàng hải) xin rời tàu: на берег' },
  { verb: 'уписать — уписать', meaning: '1) (khẩu ngữ) nhét vừa vào: весь текст на одной странице\n2) (thông tục) ăn hết nhanh gọn: весь пирог' },
];

export default function PisatTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом ПИСАТЬ</h3>
          <span className="subtitle">Các động từ phái sinh từ ПИСАТЬ — viết</span>
        </div>

        <div className="exercise-tabs" style={{ marginBottom: '1.5rem', justifyContent: 'center' }}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={pisatCards} />
        ) : (
          <>
            <div className="theory-table-container">
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>Động từ</th>
                    <th>Nghĩa &amp; Ví dụ (Nga–Việt)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="verb-name">вписывать — вписать</span></td>
                    <td>
                      Viết vào, ghi thêm vào bên trong: <span className="ex">вписать слово в бланк</span><br/>
                      (toán học) nội tiếp hình này trong hình kia
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">вписываться — вписаться</span></td>
                    <td>
                      (ngôi 1 &amp; 2 không dùng) hòa hợp với môi trường xung quanh: <span className="ex">картина вписывается в интерьер</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">выписывать — выписать</span></td>
                    <td>
                      1) trích ra từ đâu: <span className="ex">выписать цитату из книги</span><br/>
                      2) viết để cấp phát: <span className="ex">выписать счёт, рецепт</span><br/>
                      3) đặt mua báo/tạp chí: <span className="ex">выписать газету</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">выписываться — выписаться</span></td>
                    <td>
                      Ra khỏi danh sách, xuất viện: <span className="ex">выписаться из больницы</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">дописывать — дописать</span></td>
                    <td>
                      Viết nốt, hoàn thành bài viết: <span className="ex">дописать письмо, диссертацию</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">дописаться (СВ)</span></td>
                    <td>
                      (tiêu cực) viết mà gây ra hậu quả xấu: <span className="ex">Дописался до неприятностей!</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">записывать — записать</span></td>
                    <td>
                      1) ghi lại để nhớ: <span className="ex">записать номер телефона</span><br/>
                      2) thu âm, thu hình: <span className="ex">записать песню, фильм на видео</span><br/>
                      3) đưa vào danh sách: <span className="ex">записать ребёнка в кружок</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">записываться — записаться</span></td>
                    <td>
                      Đăng ký, ghi tên vào danh sách: <span className="ex">записаться на приём к врачу</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">исписывать — исписать</span></td>
                    <td>
                      Viết đầy, phủ đầy chữ: <span className="ex">исписать весь лист бумаги</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">исписаться (СВ)</span></td>
                    <td>
                      1) (về bút) hết mực, cùn<br/>
                      2) (nghĩa bóng, về nhà văn) cạn kiệt tài năng, không còn sáng tạo
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">писать — написать</span></td>
                    <td>
                      1) viết chữ: <span className="ex">писать по-русски</span><br/>
                      2) sáng tác: <span className="ex">написать роман, письмо</span><br/>
                      3) (hội họa) vẽ tranh: <span className="ex">написать картину</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">писаться (НСВ)</span></td>
                    <td>
                      (ngôi 1 &amp; 2 không dùng)<br/>
                      1) được thể hiện bằng chữ: <span className="ex">в газетах писалось о...</span><br/>
                      2) (безл.) có hứng viết: <span className="ex">Мне сегодня не пишется.</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">надписывать — надписать</span></td>
                    <td>
                      Viết lên trên hoặc phía ngoài: <span className="ex">надписать книгу, посылку</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">описывать — описать</span></td>
                    <td>
                      1) miêu tả bằng lời: <span className="ex">описать события, природу</span><br/>
                      2) (chính thức) lập danh sách kiểm kê: <span className="ex">описать имущество</span><br/>
                      3) (toán học) ngoại tiếp: <span className="ex">описать окружность</span><br/>
                      4) di chuyển theo đường cong: <span className="ex">описать дугу</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">описаться (СВ)</span></td>
                    <td>
                      Lỡ tay viết nhầm, mắc lỗi viết không cố ý
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">отписывать — отписать</span></td>
                    <td>
                      1) (cổ) viết, soạn<br/>
                      2) chuyển nhượng bằng văn bản: <span className="ex">отписать дом в наследство</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">отписаться (СВ)</span></td>
                    <td>
                      Đối phó bằng văn bản qua loa cho xong chuyện
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">переписывать — переписать</span></td>
                    <td>
                      1) chép lại, sao lại: <span className="ex">переписать текст</span><br/>
                      2) lập danh sách: <span className="ex">переписать всех присутствующих</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">переписываться (НСВ)</span></td>
                    <td>
                      Trao đổi thư từ qua lại: <span className="ex">переписываться с другом по интернету</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">подписывать — подписать</span></td>
                    <td>
                      1) ký xác nhận: <span className="ex">подписать контракт</span><br/>
                      2) đặt báo/tạp chí cho ai: <span className="ex">подписать кого-либо на газету</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">подписываться — подписаться</span></td>
                    <td>
                      1) đặt chữ ký: <span className="ex">подписаться под документом</span><br/>
                      2) đăng ký theo dõi báo/kênh: <span className="ex">подписаться на газету</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">предписывать — предписать</span></td>
                    <td>
                      (chính thức) ra lệnh, chỉ định: <span className="ex">предписать диету, явиться в суд</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">приписывать — приписать</span></td>
                    <td>
                      1) viết thêm vào: <span className="ex">приписать несколько слов</span><br/>
                      2) quy cho, gán cho ai: <span className="ex">приписать стихотворение Пушкину</span><br/>
                      3) đưa vào diện quản lý: <span className="ex">приписать к призывному участку</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">прописывать — прописать</span></td>
                    <td>
                      1) đăng ký cư trú chính thức cho ai: <span className="ex">прописать по этому адресу</span><br/>
                      2) (bác sĩ) kê đơn: <span className="ex">прописать лекарство</span><br/>
                      3) viết lâu: <span className="ex">прописать всю ночь</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">прописываться — прописаться</span></td>
                    <td>
                      Đăng ký cư trú chính thức cho bản thân: <span className="ex">прописаться в Москве</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">расписывать — расписать</span></td>
                    <td>
                      1) phân công, lập lịch: <span className="ex">расписать все дни</span><br/>
                      2) (nghĩa bóng) tô vẽ, nói cường điệu: <span className="ex">расписать свои подвиги</span><br/>
                      3) (hội họa) vẽ trang trí: <span className="ex">расписать потолок</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">расписываться — расписаться</span></td>
                    <td>
                      1) ký xác nhận: <span className="ex">расписаться в ведомости; расписаться в своей беспомощности</span><br/>
                      2) (khẩu ngữ) đăng ký kết hôn: <span className="ex">расписаться с кем-либо</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">списывать — списать</span></td>
                    <td>
                      1) sao chép: <span className="ex">списать расписание</span><br/>
                      2) (hội họa) sao chép tác phẩm: <span className="ex">списать копию</span><br/>
                      3) (văn học) lấy hình mẫu thực: <span className="ex">списать характер героя</span><br/>
                      4) chép bài người khác: <span className="ex">списать контрольную у товарища</span><br/>
                      5) (hàng hải) cho ra khỏi tàu: <span className="ex">списать на берег</span>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">списываться — списаться</span></td>
                    <td>
                      1) liên lạc qua thư: <span className="ex">списаться с родными</span><br/>
                      2) (hàng hải) xin rời tàu
                    </td>
                  </tr>
                  <tr>
                    <td><span className="verb-name">уписать (СВ)</span></td>
                    <td>
                      1) (khẩu ngữ) nhét vừa vào: <span className="ex">уписать весь текст на одной странице</span><br/>
                      2) (thông tục) ăn hết nhanh gọn: <span className="ex">уписать весь пирог</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="theory-note">
              <h4>💡 Chú ý các cặp dễ nhầm:</h4>
              <ul>
                <li>• <strong>выписать газету</strong> (đặt mua báo) ≠ <strong>подписаться на газету</strong> (đăng ký theo dõi)</li>
                <li>• <strong>записаться на приём</strong> (đăng ký lịch hẹn) ≠ <strong>подписаться под документом</strong> (ký tên)</li>
                <li>• <strong>расписаться в ведомости</strong> (ký nhận) ≠ <strong>расписаться с кем-либо</strong> (kết hôn)</li>
                <li>• <strong>переписать текст</strong> (chép lại) ≠ <strong>переписываться с кем</strong> (trao đổi thư từ — НСВ)</li>
                <li>• <strong>списать у товарища</strong> (quay cóp) ≠ <strong>списать на берег</strong> (hàng hải: cho rời tàu)</li>
                <li>• <strong>прописать по адресу</strong> (đăng ký hộ khẩu) ≠ <strong>прописать лекарство</strong> (kê đơn thuốc)</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
