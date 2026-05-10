// Задание 1 - Questions 21-30
export const exam3_task1_part2 = [
  {
    num: 21,
    sentence: "На улице сегодня очень холодно. Пожалуйста, не … окно!",
    viet: "Ngoài trời hôm nay rất lạnh. Làm ơn đừng … cửa sổ!",
    options: ["А) открой", "Б) открывай", "В) откройте", "Г) открываете"],
    correct: "Б) открывай",
    correctShort: "открывай",
    full: "На улице сегодня очень холодно. Пожалуйста, не открывай окно!",
    explanation: "Mệnh lệnh phủ định (đừng làm gì - «не») yêu cầu dùng động từ CHƯA HOÀN THÀNH. Đối tượng giao tiếp là bạn bè (ngôi ТЫ).",
    analysis: [
      { opt: "А) открой", note: "Mệnh lệnh hoàn thành (dùng khi khẳng định: Hãy mở ra). Sai." },
      { opt: "Б) открывай", note: "✅ Mệnh lệnh chưa hoàn thành ngôi ТЫ." },
      { opt: "В) откройте", note: "Mệnh lệnh hoàn thành ngôi ВЫ. Sai." },
      { opt: "Г) открываете", note: "Hiện tại ngôi ВЫ. Sai." }
    ]
  },
  {
    num: 22,
    sentence: "Ребята, … сегодня вечером в кино на комедию!",
    viet: "Các bạn, tối nay chúng ta hãy … đi xem phim hài ở rạp nhé!",
    options: ["А) пойдёмте", "Б) идёмте", "В) ходите", "Г) сходите"],
    correct: "А) пойдёмте",
    correctShort: "пойдёмте",
    full: "Ребята, пойдёмте сегодня вечером в кино на комедию!",
    explanation: "Để rủ rê cả nhóm cùng thực hiện (Let's go), dùng đuôi -ТЕ gắn vào động từ thời tương lai ngôi МЫ («Пойдём» + «те» = «Пойдёмте»).",
    analysis: [
      { opt: "А) пойдёмте", note: "✅ Hãy cùng đi (rủ rê)." },
      { opt: "Б) идёмте", note: "Thường dùng khi hành động sắp sửa diễn ra ngay lập tức. Ít tự nhiên hơn." },
      { opt: "В) ходите", note: "Mệnh lệnh/Hiện tại đa hướng. Sai." },
      { opt: "Г) сходите", note: "Mệnh lệnh ngôi ВЫ (Các bạn hãy đi đi - người nói không tham gia). Sai." }
    ]
  },
  {
    num: 23,
    sentence: "Девушка, … сейчас рядом со мной, прекрасно говорит по-русски.",
    viet: "Cô gái, (người đang) … cạnh tôi bây giờ, nói tiếng Nga rất giỏi.",
    options: ["А) сидевшая", "Б) сидящая", "В) сидеемая", "Г) сидя"],
    correct: "Б) сидящая",
    correctShort: "сидящая",
    full: "Девушка, сидящая сейчас рядом со мной, прекрасно говорит по-русски.",
    explanation: "Hành động đang diễn ra («сейчас») do chủ thể TỰ thực hiện -> Phân từ CHỦ ĐỘNG thời HIỆN TẠI. Bổ nghĩa cho «Девушка» -> сидящая.",
    analysis: [
      { opt: "А) сидевшая", note: "Phân từ quá khứ (đã ngồi). Sai thời gian." },
      { opt: "Б) сидящая", note: "✅ Phân từ chủ động hiện tại giống cái." },
      { opt: "В) сидеемая", note: "Sai ngữ pháp (không tồn tại)." },
      { opt: "Г) сидя", note: "Trạng động từ (trong khi ngồi). Sai." }
    ]
  },
  {
    num: 24,
    sentence: "Студент, блестяще … экзамен по математике, был очень рад.",
    viet: "Cậu sinh viên, (người đã) … xuất sắc kỳ thi toán, đã rất vui mừng.",
    options: ["А) сдавший", "Б) сдающий", "В) сданный", "Г) сдав"],
    correct: "А) сдавший",
    correctShort: "сдавший",
    full: "Студент, блестяще сдавший экзамен по математике, был очень рад.",
    explanation: "Hành động đã hoàn tất trong quá khứ do chủ thể TỰ thực hiện -> Phân từ CHỦ ĐỘNG QUÁ KHỨ. «Сдать» -> сдавший.",
    analysis: [
      { opt: "А) сдавший", note: "✅ Phân từ chủ động quá khứ." },
      { opt: "Б) сдающий", note: "Đang thi (hiện tại). Sai thời gian." },
      { opt: "В) сданный", note: "Được thi đỗ (Bị động). Sai." },
      { opt: "Г) сдав", note: "Sau khi thi (Trạng động từ). Sai từ loại." }
    ]
  },
  {
    num: 25,
    sentence: "Вчера я купил книгу, … известным современным писателем.",
    viet: "Hôm qua tôi đã mua cuốn sách, (cuốn sách được) … bởi một nhà văn đương đại nổi tiếng.",
    options: ["А) написанная", "Б) написавшую", "В) написанную", "Г) написанной"],
    correct: "В) написанную",
    correctShort: "написанную",
    full: "Вчера я купил книгу, написанную известным современным писателем.",
    explanation: "Cuốn sách BỊ/ĐƯỢC viết -> Phân từ BỊ ĐỘNG QUÁ KHỨ («написанный»). Hợp với «книгу» (Cách 4, giống cái) -> написанную.",
    analysis: [
      { opt: "А) написанная", note: "Cách 1 giống cái. Sai cách." },
      { opt: "Б) написавшую", note: "Phân từ chủ động Cách 4 (Cuốn sách đã tự viết -> sai logic)." },
      { opt: "В) написанную", note: "✅ Phân từ bị động Cách 4 giống cái." },
      { opt: "Г) написанной", note: "Cách 2/3/5/6 giống cái. Sai." }
    ]
  },
  {
    num: 26,
    sentence: "Эта важная статья была … в прошлом месяце в журнале «Наука».",
    viet: "Bài báo quan trọng này đã được … vào tháng trước trên tạp chí «Khoa học».",
    options: ["А) опубликована", "Б) опубликованная", "В) опубликовал", "Г) опубликовано"],
    correct: "А) опубликована",
    correctShort: "опубликована",
    full: "Эта важная статья была опубликована в прошлом месяце в журнале «Наука».",
    explanation: "Trong cấu trúc bị động với động từ TO BE («была»), ta dùng phân từ bị động DẠNG NGẮN. «Статья» (giống cái) -> опубликована.",
    analysis: [
      { opt: "А) опубликована", note: "✅ Dạng ngắn giống cái." },
      { opt: "Б) опубликованная", note: "Dạng dài (dùng làm định ngữ đứng cạnh danh từ). Sai." },
      { opt: "В) опубликовал", note: "Động từ chủ động quá khứ. Sai." },
      { opt: "Г) опубликовано", note: "Dạng ngắn giống trung. Sai." }
    ]
  },
  {
    num: 27,
    sentence: "… телевизор, дедушка быстро заснул в кресле.",
    viet: "… tivi, người ông đã nhanh chóng ngủ thiếp đi trên ghế bành.",
    options: ["А) Посмотрев", "Б) Смотря", "В) Смотревший", "Г) Смотрев"],
    correct: "Б) Смотря",
    correctShort: "Смотря",
    full: "Смотря телевизор, дедушка быстро заснул в кресле.",
    explanation: "Hành động «xem» diễn ra SONG SONG (làm nền) cho hành động «ngủ thiếp đi». Dùng Trạng động từ CHƯA HOÀN THÀNH (Смотря).",
    analysis: [
      { opt: "А) Посмотрев", note: "Sau khi xem xong (Hoàn thành). Sai." },
      { opt: "Б) Смотря", note: "✅ Trong khi xem (chưa hoàn thành)." },
      { opt: "В) Смотревший", note: "Phân từ chủ động. Sai." },
      { opt: "Г) Смотрев", note: "Ít dùng/Cổ. Sai." }
    ]
  },
  {
    num: 28,
    sentence: "… другу длинное письмо, она пошла на почту, чтобы отправить его.",
    viet: "… cho người bạn một bức thư dài, cô ấy đã đi đến bưu điện để gửi nó.",
    options: ["А) Писав", "Б) Писавшую", "В) Написав", "Г) Написавшую"],
    correct: "В) Написав",
    correctShort: "Написав",
    full: "Написав другу длинное письмо, она пошла на почту, чтобы отправить его.",
    explanation: "Phải viết thư XONG thì mới đi gửi. Hành động thứ nhất hoàn tất trước. Dùng Trạng động từ HOÀN THÀNH (Написав).",
    analysis: [
      { opt: "А) Писав", note: "Đang viết (chưa hoàn thành). Sai." },
      { opt: "Б) Писавшую", note: "Phân từ chủ động. Sai." },
      { opt: "В) Написав", note: "✅ Sau khi viết xong." },
      { opt: "Г) Написавшую", note: "Phân từ chủ động. Sai." }
    ]
  },
  {
    num: 29,
    sentence: "Мы с удовольствием слушали музыку, … из открытого окна.",
    viet: "Chúng tôi say sưa nghe tiếng nhạc, (tiếng nhạc đang) … từ cửa sổ mở.",
    options: ["А) звучавшую", "Б) звучащую", "В) звуча", "Г) звучащая"],
    correct: "Б) звучащую",
    correctShort: "звучащую",
    full: "Мы с удовольствием слушали музыку, звучащую из открытого окна.",
    explanation: "Nhạc tự vang lên TẠI THỜI ĐIỂM ĐÓ -> Phân từ CHỦ ĐỘNG HIỆN TẠI (звучащий). Hợp với «музыку» (Cách 4) -> звучащую.",
    analysis: [
      { opt: "А) звучавшую", note: "Đã vang lên (Quá khứ). Sai." },
      { opt: "Б) звучащую", note: "✅ Phân từ chủ động hiện tại Cách 4." },
      { opt: "В) звуча", note: "Trạng động từ. Sai." },
      { opt: "Г) звучащая", note: "Cách 1 giống cái. Sai cách." }
    ]
  },
  {
    num: 30,
    sentence: "Внимательно … новый грамматический материал, студенты начали делать упражнения.",
    viet: "(Sau khi) Cẩn thận … tài liệu ngữ pháp mới, các sinh viên bắt đầu làm bài tập.",
    options: ["А) изучая", "Б) изучив", "В) изучивший", "Г) изучаемый"],
    correct: "Б) изучив",
    correctShort: "изучив",
    full: "Внимательно изучив новый грамматический материал, студенты начали делать упражнения.",
    explanation: "Hành động nghiên cứu phải HOÀN TẤT TRƯỚC rồi mới làm bài tập. Dùng Trạng động từ HOÀN THÀNH (Изучив).",
    analysis: [
      { opt: "А) изучая", note: "Trong khi đang học (chưa hoàn thành). Sai." },
      { opt: "Б) изучив", note: "✅ Sau khi học xong." },
      { opt: "В) изучивший", note: "Phân từ chủ động quá khứ. Sai." },
      { opt: "Г) изучаемый", note: "Phân từ bị động hiện tại. Sai." }
    ]
  }
];
