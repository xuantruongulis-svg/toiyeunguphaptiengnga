import React from 'react';

export default function VremyaTheory() {
  return (
    <div className="theory-container">
      <h3>1. QUAN HỆ THỜI GIAN (Время)</h3>
      <p>Trong câu phức, các sự kiện có thể xảy ra đồng thời (одновременно) hoặc nối tiếp nhau (следовать одно за другим).</p>
      
      <h4>1.1. Sự đồng thời (Одновременность)</h4>
      <p>Biểu đạt bằng liên từ <strong>Когда</strong> (Khi) hoặc <strong>Пока</strong> (Trong khi, chừng nào).</p>
      <div className="theory-table-wrapper">
        <table className="theory-table">
          <thead>
            <tr>
              <th>Loại đồng thời</th>
              <th>Cách dùng</th>
              <th>Ví dụ</th>
              <th>Giải thích</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Đồng thời hoàn toàn</td>
              <td>Dùng liên từ <strong>когда</strong> với động từ Thể chưa hoàn thành (НСВ) ở cả 2 vế.</td>
              <td>Когда он рассказывает о своих поездках, все с интересом слушают его. <br/><em>(Khi anh ấy kể về những chuyến đi của mình, mọi người đều lắng nghe với sự thích thú.)</em></td>
              <td>Hành động "kể" và "lắng nghe" diễn ra song song cùng một lúc.</td>
            </tr>
            <tr>
              <td>Đồng thời một phần</td>
              <td>Dùng <strong>когда</strong> kết hợp các thì khác nhau.</td>
              <td>Когда он вошёл в комнату, все сидели за столом и обедали. <br/><em>(Khi anh ấy bước vào phòng, mọi người đang ngồi ở bàn và ăn trưa.)</em></td>
              <td>Hành động "bước vào" (ngắn, Thể hoàn thành) cắt ngang hoặc xảy ra giữa lúc hành động "ngồi ăn" (kéo dài, Thể chưa hoàn thành) đang diễn ra.</td>
            </tr>
            <tr>
              <td>Hành động này nằm trong khung thời gian của hành động kia</td>
              <td>Dùng liên từ <strong>пока</strong>. Thường cả 2 vế dùng НСВ.</td>
              <td>Пока семья жила за городом, дети каждый день бегали на речку. <br/><em>(Trong khi gia đình sống ở ngoại ô, bọn trẻ ngày nào cũng chạy ra sông.)</em></td>
              <td><strong>Lưu ý:</strong> Nếu dùng Thể hoàn thành (СВ) với пока, ý nghĩa cơ bản không đổi, nhưng nó nhấn mạnh kết quả/quá trình hoàn tất trong một khung thời gian.<br/><br/><strong>So sánh:</strong> Пока мы доехали до Клина, экскурсовод рассказал нам о Чайковском (Kể trong lúc đang đi trên đường) khác với Когда мы доехали... (Đến nơi rồi mới kể).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>1.2. Sự nối tiếp (Следование)</h4>
      <p>Một sự kiện xảy ra trước hoặc sau sự kiện kia.</p>
      <div className="theory-table-wrapper">
        <table className="theory-table">
          <thead>
            <tr>
              <th>Loại nối tiếp</th>
              <th>Cách dùng</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nối tiếp thông thường</td>
              <td>Dùng <strong>когда</strong> với Thể hoàn thành (СВ) ở cả 2 vế.</td>
              <td>Когда отец вернулся с работы, все сели ужинать. <br/><em>(Khi bố đi làm về, mọi người ngồi vào bàn ăn tối.)</em></td>
            </tr>
            <tr>
              <td>Hành động ở vế chính xảy ra <strong>TRƯỚC</strong> vế phụ</td>
              <td>Dùng <strong>до того как</strong>, <strong>перед тем как</strong>, <strong>прежде чем</strong> (Trước khi).<br/><br/><strong>Phân biệt:</strong> <em>Перед тем как</em> chỉ khoảng thời gian очень ngắn ngay sát sự kiện. <em>Прежде чем</em> ngoài thời gian còn mang sắc thái điều kiện/sự cần thiết (phải làm gì trước).</td>
              <td>Выключи свет, прежде чем (перед тем как) ляжешь спать. <br/><em>(Hãy tắt đèn trước khi đi ngủ.)</em></td>
            </tr>
            <tr>
              <td>Hành động ở vế chính kéo dài và <strong>BỊ NGẮT</strong> bởi vế phụ</td>
              <td>Dùng <strong>пока не</strong> (Cho đến khi). Vế chính thường dùng НСВ, vế phụ dùng СВ.</td>
              <td>Я долго бродил по лесу, пока не вышел на поляну. <br/><em>(Tôi đã đi lang thang trong rừng rất lâu, cho đến khi đi ra được bãi vắng.)</em></td>
            </tr>
            <tr>
              <td>Hành động ở vế chính xảy ra <strong>SAU</strong> vế phụ</td>
              <td>Dùng <strong>после того как</strong> (Sau khi) hoặc <strong>с тех пор как</strong> (Kể từ khi).<br/><br/><strong>Đặc trưng của с тех пор как:</strong> Hành động ở vế phụ xảy ra trong quá khứ và "kéo dài" ảnh hưởng đến tận hiện tại. Không dùng thì tương lai ở vế phụ và không dùng thức mệnh lệnh ở vế chính.</td>
              <td>После того как все легли спать, в дверь кто-то постучал. <br/><em>(Sau khi mọi người đã đi ngủ, có ai đó gõ cửa.)</em><br/><br/>С тех пор как он поселился в нашем доме, я часто встречаю его. <br/><em>(Kể từ khi anh ấy chuyển đến tòa nhà của chúng tôi, tôi thường xuyên gặp anh ấy.)</em></td>
            </tr>
            <tr>
              <td>Nối tiếp ngay lập tức (Rất nhanh)</td>
              <td>Dùng <strong>как только</strong>, <strong>едва... как</strong>, <strong>лишь только</strong>, <strong>не успели... как</strong>, <strong>стоило... как</strong> (Ngay khi, vừa mới... thì). Thường dùng Thể hoàn thành (СВ) ở thì quá khứ.</td>
              <td>Как только прозвенел звонок, все ребята выбежали из класса. <br/><em>(Ngay khi chuông reo, tất cả bọn trẻ ùa ra khỏi lớp.)</em></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
