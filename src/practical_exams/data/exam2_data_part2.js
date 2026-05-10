// Задание 1 - Questions 21-30
export const exam2_task1_part2 = [
  {
    num: 21,
    sentence: "Завтра выходной. Пожалуйста, не … меня слишком рано!",
    viet: "Ngày mai là ngày nghỉ. Xin đừng … tôi quá sớm!",
    options: ["А) буди", "Б) разбуди", "В) будете", "Г) разбудите"],
    correct: "А) буди",
    correctShort: "буди",
    full: "Завтра выходной. Пожалуйста, не буди меня слишком рано!",
    explanation: "Mệnh lệnh phủ định (không được/đừng làm gì) yêu cầu dùng động từ CHƯA HOÀN THÀNH. «Будить» -> mệnh lệnh «буди» (ngôi ТЫ).",
    analysis: [
      { opt: "А) буди", note: "✅ Mệnh lệnh chưa hoàn thành ngôi ТЫ." },
      { opt: "Б) разбуди", note: "Mệnh lệnh hoàn thành. Ít dùng cho cấm đoán trực tiếp." },
      { opt: "В) будете", note: "Hiện tại/Tương lai ngôi ВЫ. Sai." },
      { opt: "Г) разбудите", note: "Mệnh lệnh hoàn thành ngôi ВЫ. Sai." }
    ]
  },
  {
    num: 22,
    sentence: "Антон, … мне, пожалуйста, словарь, который лежит на столе.",
    viet: "Anton, làm ơn … cho tớ cuốn từ điển đang nằm trên bàn.",
    options: ["А) давай", "Б) дай", "В) давать", "Г) дают"],
    correct: "Б) дай",
    correctShort: "дай",
    full: "Антон, дай мне, пожалуйста, словарь, который лежит на столе.",
    explanation: "Gọi tên bạn nên dùng ngôi ТЫ. Yêu cầu một hành động cụ thể, một lần (đưa từ điển) dùng mệnh lệnh thức của động từ HOÀN THÀNH (дать -> дай).",
    analysis: [
      { opt: "А) давай", note: "Mệnh lệnh chưa hoàn thành. Không dùng cho yêu cầu 1 lần này." },
      { opt: "Б) дай", note: "✅ Mệnh lệnh hoàn thành ngôi ТЫ." },
      { opt: "В) давать", note: "Nguyên thể. Sai." },
      { opt: "Г) дают", note: "Hiện tại ngôi họ. Sai." }
    ]
  },
  {
    num: 23,
    sentence: "Студент, … эту книгу, учится на первом курсе.",
    viet: "Sinh viên, người (đang) … cuốn sách này, học năm thứ nhất.",
    options: ["А) читавший", "Б) читающий", "В) читаемый", "Г) читанный"],
    correct: "Б) читающий",
    correctShort: "читающий",
    full: "Студент, читающий эту книгу, учится на первом курсе.",
    explanation: "Sinh viên TỰ ĐỌC -> phân từ CHỦ ĐỘNG hiện tại. «Студент» ở Cách 1 giống đực nên đuôi là -ЩИЙ.",
    analysis: [
      { opt: "А) читавший", note: "Phân từ chủ động quá khứ (đã đọc). Sai thời gian." },
      { opt: "Б) читающий", note: "✅ Phân từ chủ động hiện tại." },
      { opt: "В) читаемый", note: "Phân từ bị động hiện tại. Sai." },
      { opt: "Г) читанный", note: "Phân từ bị động quá khứ. Sai." }
    ]
  },
  {
    num: 24,
    sentence: "Девушка, … мне вчера электронное письмо, живёт в Москве.",
    viet: "Cô gái, người … cho tôi bức thư điện tử ngày hôm qua, sống ở Moscow.",
    options: ["А) пишущая", "Б) написавшая", "В) написанная", "Г) писавшая"],
    correct: "Б) написавшая",
    correctShort: "написавшая",
    full: "Девушка, написавшая мне вчера электронное письмо, живёт в Москве.",
    explanation: "Có từ «вчера» (hôm qua) -> phân từ CHỦ ĐỘNG quá khứ. Động từ hoàn thành «написать» -> «написавший». Hợp với «Девушка» -> написавшая.",
    analysis: [
      { opt: "А) пишущая", note: "Phân từ chủ động hiện tại. Sai thời gian." },
      { opt: "Б) написавшая", note: "✅ Phân từ chủ động quá khứ hoàn thành." },
      { opt: "В) написанная", note: "Bị động quá khứ. Sai." },
      { opt: "Г) писавшая", note: "Chủ động quá khứ chưa hoàn thành. Không đúng bằng kết quả đã xong." }
    ]
  },
  {
    num: 25,
    sentence: "Преподаватель подошёл к студентам, … в коридоре.",
    viet: "Giảng viên tiến đến chỗ những sinh viên, những người (đang) … ở hành lang.",
    options: ["А) стоящие", "Б) стоящих", "В) стоящим", "Г) стоящими"],
    correct: "В) стоящим",
    correctShort: "стоящим",
    full: "Преподаватель подошёл к студентам, стоящим в коридоре.",
    explanation: "Phân từ chủ động thời hiện tại phải hợp cách với «студентам» (Cách 3 số nhiều). Phân từ «стоящий» ở Cách 3 số nhiều là стоящим.",
    analysis: [
      { opt: "А) стоящие", note: "Cách 1 số nhiều. Sai." },
      { opt: "Б) стоящих", note: "Cách 2/4 số nhiều. Sai." },
      { opt: "В) стоящим", note: "✅ Cách 3 số nhiều." },
      { opt: "Г) стоящими", note: "Cách 5 số nhiều. Sai." }
    ]
  },
  {
    num: 26,
    sentence: "Письмо, … моим братом, лежало на столе.",
    viet: "Bức thư, (được) … bởi anh trai tôi, nằm trên bàn.",
    options: ["А) написавшее", "Б) написанное", "В) написавший", "Г) пишущее"],
    correct: "Б) написанное",
    correctShort: "написанное",
    full: "Письмо, написанное моим братом, лежало на столе.",
    explanation: "Bức thư ĐƯỢC viết -> dùng phân từ BỊ ĐỘNG quá khứ. «Письмо» (Cách 1, giống trung) -> đuôi -ОЕ («написанное»).",
    analysis: [
      { opt: "А) написавшее", note: "Chủ động quá khứ giống trung (tự viết). Sai." },
      { opt: "Б) написанное", note: "✅ Bị động quá khứ giống trung." },
      { opt: "В) написавший", note: "Chủ động quá khứ giống đực. Sai." },
      { opt: "Г) пишущее", note: "Chủ động hiện tại giống trung. Sai." }
    ]
  },
  {
    num: 27,
    sentence: "Эта новая школа была … в прошлом году.",
    viet: "Ngôi trường mới này được … vào năm ngoái.",
    options: ["А) построена", "Б) построенная", "В) построил", "Г) построено"],
    correct: "А) построена",
    correctShort: "построена",
    full: "Эта новая школа была построена в прошлом году.",
    explanation: "Cấu trúc bị động trong câu vị ngữ dùng phân từ bị động DẠNG NGẮN. «Школа» (giống cái) -> построена.",
    analysis: [
      { opt: "А) построена", note: "✅ Bị động dạng ngắn giống cái." },
      { opt: "Б) построенная", note: "Phân từ dạng dài (dùng làm định ngữ). Sai." },
      { opt: "В) построил", note: "Chủ động quá khứ. Sai." },
      { opt: "Г) построено", note: "Dạng ngắn giống trung. Sai." }
    ]
  },
  {
    num: 28,
    sentence: "… трудный текст, студент часто пользовался словарём.",
    viet: "… đoạn văn khó, sinh viên thường xuyên sử dụng từ điển.",
    options: ["А) Переведя", "Б) Переводя", "В) Переводивший", "Г) Переведённый"],
    correct: "Б) Переводя",
    correctShort: "Переводя",
    full: "Переводя трудный текст, студент часто пользовался словарём.",
    explanation: "Hành động dịch diễn ra SONG SONG với hành động dùng từ điển. Dùng Trạng động từ CHƯA HOÀN THÀNH (đuôi -я: переводя).",
    analysis: [
      { opt: "А) Переведя", note: "Sau khi đã dịch xong (hoàn thành). Sai nghĩa." },
      { opt: "Б) Переводя", note: "✅ Trong khi dịch (chưa hoàn thành)." },
      { opt: "В) Переводивший", note: "Phân từ chủ động quá khứ. Sai." },
      { opt: "Г) Переведённый", note: "Phân từ bị động quá khứ. Sai." }
    ]
  },
  {
    num: 29,
    sentence: "… домашнее задание, Виктор пошёл гулять с собакой.",
    viet: "… bài tập về nhà, Victor đi dạo với chó.",
    options: ["А) Делая", "Б) Сделав", "В) Сделавший", "Г) Делавший"],
    correct: "Б) Сделав",
    correctShort: "Сделав",
    full: "Сделав домашнее задание, Виктор пошёл гулять с собакой.",
    explanation: "Hành động làm bài tập phải XONG TRƯỚC rồi mới đi dạo. Dùng Trạng động từ HOÀN THÀNH (đuôi -в: сделав).",
    analysis: [
      { opt: "А) Делая", note: "Trong lúc đang làm. Sai nghĩa." },
      { opt: "Б) Сделав", note: "✅ Sau khi làm xong." },
      { opt: "В) Сделавший", note: "Phân từ chủ động quá khứ. Sai." },
      { opt: "Г) Делавший", note: "Phân từ chủ động quá khứ. Sai." }
    ]
  },
  {
    num: 30,
    sentence: "Он сидел в уютном кресле, … свежую газету.",
    viet: "Ông ấy ngồi trên chiếc ghế bành thoải mái, … tờ báo mới.",
    options: ["А) читающий", "Б) читая", "В) прочитав", "Г) прочитанный"],
    correct: "Б) читая",
    correctShort: "читая",
    full: "Он сидел в уютном кресле, читая свежую газету.",
    explanation: "Hai hành động «ngồi» và «đọc» diễn ra SONG SONG. Dùng Trạng động từ CHƯA HOÀN THÀNH (читая).",
    analysis: [
      { opt: "А) читающий", note: "Phân từ chủ động hiện tại. Sai." },
      { opt: "Б) читая", note: "✅ Trong khi đọc." },
      { opt: "В) прочитав", note: "Sau khi đọc xong. Sai nghĩa." },
      { opt: "Г) прочитанный", note: "Phân từ bị động. Sai." }
    ]
  }
];
