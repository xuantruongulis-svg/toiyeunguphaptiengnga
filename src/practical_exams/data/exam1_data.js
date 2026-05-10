// Задание 1 - Questions 1-20 (Multiple choice)
export const exam1_task1 = [
  {
    num: 1,
    sentence: "Он приехал в Москву ненадолго, только …",
    viet: "Anh ấy đến Moscow không lâu, chỉ …",
    options: ["А) неделю", "Б) за неделю", "В) на неделю", "Г) неделя"],
    correct: "В) на неделю",
    correctShort: "на неделю",
    full: "Он приехал в Москву ненадолго, только на неделю.",
    explanation: "Khi nói về khoảng thời gian dự định cho một hành động sau khi đến một nơi nào đó (bao lâu), ta dùng giới từ НА + Cách 4 (Accusative).",
    analysis: [
      { opt: "А) неделю", note: "Cách 4 không giới từ — chỉ tổng thời gian kéo dài của hành động (VD: Я работал всю неделю)." },
      { opt: "Б) за неделю", note: "За + Cách 4 — chỉ thời gian cần thiết để HOÀN THÀNH hành động (VD: прочитал книгу за неделю)." },
      { opt: "В) на неделю", note: "✅ НА + Cách 4 — chỉ thời gian DỰ ĐỊNH cho hành động sau khi đến." },
      { opt: "Г) неделя", note: "Cách 1 (Nominative) — dùng làm chủ ngữ, không hợp ngữ cảnh." }
    ]
  },
  {
    num: 2,
    sentence: "До университета недалеко — … пешком!",
    viet: "Đến trường đại học không xa — … đi bộ!",
    options: ["А) полчаса", "Б) за полчаса", "В) на полчаса", "Г) получасу"],
    correct: "А) полчаса",
    correctShort: "полчаса",
    full: "До университета недалеко — полчаса пешком!",
    explanation: "\"Полчаса\" đóng vai trò chủ ngữ ngầm định (mất nửa giờ), ở Cách 1/4 không giới từ để chỉ lượng thời gian cần cho việc di chuyển.",
    analysis: [
      { opt: "А) полчаса", note: "✅ Không giới từ — chỉ thời gian cần thiết để đi (mất nửa giờ đi bộ)." },
      { opt: "Б) за полчаса", note: "За + Cách 4 — hoàn thành trong nửa giờ. Không phù hợp ngữ cảnh mô tả khoảng cách." },
      { opt: "В) на полчаса", note: "На + Cách 4 — dành cho nửa giờ (mục đích/thời gian dự định). Không phù hợp." },
      { opt: "Г) получасу", note: "Cách 3 (Dative). Không phù hợp ngữ cảnh." }
    ]
  },
  {
    num: 3,
    sentence: "Пожалуйста, … ваш паспорт!",
    viet: "Làm ơn, … hộ chiếu của bạn!",
    options: ["А) дать", "Б) дай", "В) дайте", "Г) дам"],
    correct: "В) дайте",
    correctShort: "дайте",
    full: "Пожалуйста, дайте ваш паспорт!",
    explanation: "Câu mệnh lệnh lịch sự với «Пожалуйста» và đại từ sở hữu «ваш» (ngôi Вы). Cần mệnh lệnh thức ngôi số nhiều/lịch sự.",
    analysis: [
      { opt: "А) дать", note: "Nguyên thể (Infinitive). Không dùng làm mệnh lệnh trực tiếp." },
      { opt: "Б) дай", note: "Mệnh lệnh thức ngôi ТЫ (số ít). Không phù hợp với «ваш»." },
      { opt: "В) дайте", note: "✅ Mệnh lệnh thức ngôi ВЫ (số nhiều/lịch sự). Phù hợp với «ваш»." },
      { opt: "Г) дам", note: "Tương lai đơn ngôi Я (Tôi sẽ cho). Sai ngôi và nghĩa." }
    ]
  },
  {
    num: 4,
    sentence: "Ты идёшь в кафе? Пожалуйста, … мне кофе.",
    viet: "Bạn đi quán cà phê à? Làm ơn, … cho tôi cà phê.",
    options: ["А) брать", "Б) бери", "В) возьми", "Г) взять"],
    correct: "В) возьми",
    correctShort: "возьми",
    full: "Ты идёшь в кафе? Пожалуйста, возьми мне кофе.",
    explanation: "Đang nói chuyện với ngôi ТЫ → cần mệnh lệnh thức ngôi số ít. Hành động nhờ lấy/mua mang về một lần → dùng động từ hoàn thành ВЗЯТЬ.",
    analysis: [
      { opt: "А) брать", note: "Nguyên thể chưa hoàn thành. Không dùng làm mệnh lệnh trực tiếp." },
      { opt: "Б) бери", note: "Mệnh lệnh chưa hoàn thành. Ít dùng cho hành động nhờ vả cụ thể một lần." },
      { opt: "В) возьми", note: "✅ Mệnh lệnh hoàn thành ngôi ТЫ. Phù hợp cho yêu cầu cụ thể, hoàn tất một lần." },
      { opt: "Г) взять", note: "Nguyên thể hoàn thành. Không dùng trực tiếp làm mệnh lệnh." }
    ]
  },
  {
    num: 5,
    sentence: "Это подарок … .",
    viet: "Đây là món quà … .",
    options: ["А) тебя", "Б) для тебя", "В) тобой", "Г) ты"],
    correct: "Б) для тебя",
    correctShort: "для тебя",
    full: "Это подарок для тебя.",
    explanation: "Cấu trúc «món quà dành cho ai»: подарок ДЛЯ + Cách 2 (Genitive). «Ты» ở Cách 2 là «тебя».",
    analysis: [
      { opt: "А) тебя", note: "Cách 2/4 nhưng THIẾU giới từ «для»." },
      { opt: "Б) для тебя", note: "✅ ДЛЯ + Cách 2 — dành cho ai." },
      { opt: "В) тобой", note: "Cách 5 (Instrumental). Sai." },
      { opt: "Г) ты", note: "Cách 1 (Nominative). Sai." }
    ]
  },
  {
    num: 6,
    sentence: "Желаю … здоровья и счастья!",
    viet: "Chúc … sức khỏe và hạnh phúc!",
    options: ["А) вы", "Б) вам", "В) вас", "Г) вами"],
    correct: "Б) вам",
    correctShort: "вам",
    full: "Желаю вам здоровья и счастья!",
    explanation: "Cấu trúc: ЖЕЛАТЬ + Cách 3 (ai) + Cách 2 (cái gì). «Вы» ở Cách 3 (Dative) là «вам».",
    analysis: [
      { opt: "А) вы", note: "Cách 1 (Nominative). Sai." },
      { opt: "Б) вам", note: "✅ Cách 3 (Dative) của «вы»." },
      { opt: "В) вас", note: "Cách 2/4. Sai." },
      { opt: "Г) вами", note: "Cách 5 (Instrumental). Sai." }
    ]
  },
  {
    num: 7,
    sentence: "Не … здесь, пожалуйста!",
    viet: "Làm ơn không … ở đây!",
    options: ["А) курите", "Б) покурите", "В) курят", "Г) покурил"],
    correct: "А) курите",
    correctShort: "курите",
    full: "Не курите здесь, пожалуйста!",
    explanation: "Mệnh lệnh phủ định (cấm đoán chung) → dùng động từ CHƯA HOÀN THÀNH (imperfective). Ngôi lịch sự ВЫ.",
    analysis: [
      { opt: "А) курите", note: "✅ Mệnh lệnh chưa hoàn thành ngôi ВЫ — cấm đoán chung, phổ biến trong biển báo." },
      { opt: "Б) покурите", note: "Mệnh lệnh hoàn thành — thường mang nghĩa «hút một chút đi», không phù hợp cấm đoán." },
      { opt: "В) курят", note: "Hiện tại ngôi 3 số nhiều (Họ hút). Không phải mệnh lệnh." },
      { opt: "Г) покурил", note: "Quá khứ giống đực. Sai." }
    ]
  },
  {
    num: 8,
    sentence: "Наша фирма предполагает повысить цены … .",
    viet: "Công ty chúng tôi dự định tăng giá … .",
    options: ["А) нашей продукции", "Б) Наша продукция", "В) для нашей продукции", "Г) на нашу продукцию"],
    correct: "Г) на нашу продукцию",
    correctShort: "на нашу продукцию",
    full: "Наша фирма предполагает повысить цены на нашу продукцию.",
    explanation: "Cấu trúc cố định: ЦЕНЫ НА + Cách 4 (Accusative). «наша продукция» → Cách 4 là «нашу продукцию».",
    analysis: [
      { opt: "А) нашей продукции", note: "Cách 2/3/6. Có thể nói «цены нашей продукции» nhưng «цены на» tự nhiên hơn trong thương mại." },
      { opt: "Б) Наша продукция", note: "Cách 1 (Nominative). Sai hoàn toàn." },
      { opt: "В) для нашей продукции", note: "«Dành cho sản phẩm». Sai giới từ." },
      { opt: "Г) на нашу продукцию", note: "✅ НА + Cách 4 — cấu trúc đúng." }
    ]
  },
  {
    num: 9,
    sentence: "Этот университет считается … .",
    viet: "Trường đại học này được coi là … .",
    options: ["А) один из лучших", "Б) одному из лучших", "В) одним из лучших", "Г) одного из лучших"],
    correct: "В) одним из лучших",
    correctShort: "одним из лучших",
    full: "Этот университет считается одним из лучших.",
    explanation: "Động từ СЧИТАТЬСЯ (được coi là) đi với Cách 5 (Instrumental). «один» ở Cách 5 là «одним».",
    analysis: [
      { opt: "А) один из лучших", note: "Cách 1. Sai." },
      { opt: "Б) одному из лучших", note: "Cách 3. Sai." },
      { opt: "В) одним из лучших", note: "✅ Cách 5 (Instrumental) — dùng sau «считаться»." },
      { opt: "Г) одного из лучших", note: "Cách 2. Sai." }
    ]
  },
  {
    num: 10,
    sentence: "В сборник по грамматике включены … .",
    viet: "Trong tuyển tập ngữ pháp có bao gồm … .",
    options: ["А) различным упражнениям", "Б) различные упражнения", "В) из различных упражнений", "Г) с различными упражнениями"],
    correct: "Б) различные упражнения",
    correctShort: "различные упражнения",
    full: "В сборник по грамматике включены различные упражнения.",
    explanation: "Câu bị động: «Cái gì được bao gồm» → Chủ ngữ ở Cách 1 (Nominative). «Упражнения» số nhiều Cách 1.",
    analysis: [
      { opt: "А) различным упражнениям", note: "Cách 3. Sai." },
      { opt: "Б) различные упражнения", note: "✅ Cách 1 (Nominative) — chủ ngữ của câu bị động." },
      { opt: "В) из различных упражнений", note: "Cách 2 với «из». Sai." },
      { opt: "Г) с различными упражнениями", note: "Cách 5. Sai." }
    ]
  },
  {
    num: 11,
    sentence: "Книга стоит тысячу … .",
    viet: "Cuốn sách giá một ngàn … .",
    options: ["А) рубля", "Б) рубли", "В) рубль", "Г) рублей"],
    correct: "Г) рублей",
    correctShort: "рублей",
    full: "Книга стоит тысячу рублей.",
    explanation: "Sau số ngàn «тысяча» (Cách 4: тысячу), danh từ đi kèm ở Cách 2 số nhiều (Genitive Plural).",
    analysis: [
      { opt: "А) рубля", note: "Cách 2 số ÍT — dùng sau 2, 3, 4." },
      { opt: "Б) рубли", note: "Cách 1/4 số nhiều. Sai." },
      { opt: "В) рубль", note: "Cách 1/4 số ít — dùng sau 1. Sai." },
      { opt: "Г) рублей", note: "✅ Cách 2 số nhiều — dùng sau 5, 6... và sau «тысяча»." }
    ]
  },
  {
    num: 12,
    sentence: "Этот дом принадлежит … .",
    viet: "Ngôi nhà này thuộc về … .",
    options: ["А) известному артисту", "Б) к известному артисту", "В) для известного артиста", "Г) известный артист"],
    correct: "А) известному артисту",
    correctShort: "известному артисту",
    full: "Этот дом принадлежит известному артисту.",
    explanation: "Động từ ПРИНАДЛЕЖАТЬ (thuộc về ai) yêu cầu Cách 3 (Dative) KHÔNG giới từ.",
    analysis: [
      { opt: "А) известному артисту", note: "✅ Cách 3 không giới từ — đúng sau «принадлежать»." },
      { opt: "Б) к известному артисту", note: "Cách 3 có «к». Không dùng với «принадлежать»." },
      { opt: "В) для известного артиста", note: "Cách 2 với «для». Sai." },
      { opt: "Г) известный артист", note: "Cách 1. Sai." }
    ]
  },
  {
    num: 13,
    sentence: "… ко мне в гости!",
    viet: "… đến chơi nhà tôi nhé!",
    options: ["А) Уходи", "Б) Приходи", "В) Выходи", "Г) Подходи"],
    correct: "Б) Приходи",
    correctShort: "Приходи",
    full: "Приходи ко мне в гости!",
    explanation: "«Приходить/прийти в гости» là thành ngữ có nghĩa đến chơi nhà ai. Lời mời dùng mệnh lệnh thức.",
    analysis: [
      { opt: "А) Уходи", note: "Đi khỏi (Go away). Sai nghĩa." },
      { opt: "Б) Приходи", note: "✅ Đến chơi (Come visit). Đúng." },
      { opt: "В) Выходи", note: "Đi ra (Go out). Sai nghĩa." },
      { opt: "Г) Подходи", note: "Tiến lại gần (Approach). Sai nghĩa." }
    ]
  },
  {
    num: 14,
    sentence: "Туристы остановились отдохнуть … .",
    viet: "Khách du lịch dừng lại để nghỉ ngơi … .",
    options: ["А) несколько минут", "Б) за несколько минут", "В) на несколько минут", "Г) без нескольких минут"],
    correct: "В) на несколько минут",
    correctShort: "на несколько минут",
    full: "Туристы остановились отдохнуть на несколько минут.",
    explanation: "Thời gian dự định cho hành động nghỉ ngơi → НА + Cách 4 (Accusative).",
    analysis: [
      { opt: "А) несколько минут", note: "Không giới từ — chỉ tổng thời gian diễn ra. Ít tự nhiên trong ngữ cảnh này." },
      { opt: "Б) за несколько минут", note: "ЗА — thời gian để hoàn thành. Không phù hợp." },
      { opt: "В) на несколько минут", note: "✅ НА + Cách 4 — thời gian DỰ ĐỊNH nghỉ ngơi." },
      { opt: "Г) без нескольких минут", note: "«Kém vài phút» — thường dùng chỉ giờ. Không phù hợp." }
    ]
  },
  {
    num: 15,
    sentence: "Ты бывал в …?",
    viet: "Bạn đã từng ở … chưa?",
    options: ["А) Петербурге", "Б) Петербурга", "В) Петербургом", "Г) Петербург"],
    correct: "А) Петербурге",
    correctShort: "Петербурге",
    full: "Ты бывал в Петербурге?",
    explanation: "Giới từ В chỉ địa điểm (ở đâu) → Cách 6 (Prepositional). «Петербург» → «Петербурге».",
    analysis: [
      { opt: "А) Петербурге", note: "✅ Cách 6 — «в» + địa điểm." },
      { opt: "Б) Петербурга", note: "Cách 2. Sai." },
      { opt: "В) Петербургом", note: "Cách 5. Sai." },
      { opt: "Г) Петербург", note: "Cách 1/4. Sai." }
    ]
  },
  {
    num: 16,
    sentence: "Я буду действовать согласно … .",
    viet: "Tôi sẽ hành động theo … .",
    options: ["А) закона", "Б) закону", "В) по закону", "Г) закон"],
    correct: "Б) закону",
    correctShort: "закону",
    full: "Я буду действовать согласно закону.",
    explanation: "Giới từ СОГЛАСНО (theo như, phù hợp với) yêu cầu Cách 3 (Dative). «закон» → «закону».",
    analysis: [
      { opt: "А) закона", note: "Cách 2. Sai." },
      { opt: "Б) закону", note: "✅ Cách 3 (Dative) — dùng sau «согласно»." },
      { opt: "В) по закону", note: "«По» cũng nghĩa «theo luật» nhưng không đi sau «согласно» (lặp nghĩa)." },
      { opt: "Г) закон", note: "Cách 1. Sai." }
    ]
  },
  {
    num: 17,
    sentence: "Я много знаю … .",
    viet: "Tôi biết nhiều … .",
    options: ["А) Россия", "Б) Россию", "В) о России", "Г) с Россией"],
    correct: "В) о России",
    correctShort: "о России",
    full: "Я много знаю о России.",
    explanation: "«Знать» (biết) về chủ đề gì → О/ОБ + Cách 6. «Россия» → «о России».",
    analysis: [
      { opt: "А) Россия", note: "Cách 1. Sai." },
      { opt: "Б) Россию", note: "Cách 4 — biết nước Nga như biết một người, nhưng «знать о» tự nhiên hơn khi nói về kiến thức." },
      { opt: "В) о России", note: "✅ О + Cách 6 — biết về (chủ đề/thông tin)." },
      { opt: "Г) с Россией", note: "Cách 5. Sai." }
    ]
  },
  {
    num: 18,
    sentence: "В этом городе нет … ?",
    viet: "Ở thành phố này không có … ?",
    options: ["А) большому театру", "Б) большого театра", "В) большой театр", "Г) большим театром"],
    correct: "Б) большого театра",
    correctShort: "большого театра",
    full: "В этом городе нет большого театра?",
    explanation: "Từ phủ định НЕТ luôn yêu cầu danh từ ở Cách 2 (Genitive). «большой театр» → «большого театра».",
    analysis: [
      { opt: "А) большому театру", note: "Cách 3. Sai." },
      { opt: "Б) большого театра", note: "✅ Cách 2 (Genitive) — bắt buộc sau «нет»." },
      { opt: "В) большой театр", note: "Cách 1. Sai." },
      { opt: "Г) большим театром", note: "Cách 5. Sai." }
    ]
  },
  {
    num: 19,
    sentence: "Я ходил в музей … .",
    viet: "Tôi đã đi bảo tàng … .",
    options: ["А) мои друзья", "Б) моим друзьям", "В) с моими друзьями", "Г) у моих друзей"],
    correct: "В) с моими друзьями",
    correctShort: "с моими друзьями",
    full: "Я ходил в музей с моими друзьями.",
    explanation: "Cùng với ai → С + Cách 5 (Instrumental). «мои друзья» → «с моими друзьями».",
    analysis: [
      { opt: "А) мои друзья", note: "Cách 1. Sai." },
      { opt: "Б) моим друзьям", note: "Cách 3. Sai." },
      { opt: "В) с моими друзьями", note: "✅ С + Cách 5 — cùng với ai đó." },
      { opt: "Г) у моих друзей", note: "Ở chỗ bạn (Cách 2 với «у»). Sai nghĩa." }
    ]
  },
  {
    num: 20,
    sentence: "Уже семь часов. …, а то опоздаешь в университет!",
    viet: "Đã bảy giờ rồi. … đi, nếu không bạn sẽ muộn học!",
    options: ["А) Встать", "Б) Встает", "В) Вставал", "Г) Вставай"],
    correct: "Г) Вставай",
    correctShort: "Вставай",
    full: "Уже семь часов. Вставай, а то опоздаешь в университет!",
    explanation: "Câu giục giã. Mệnh lệnh thức của «вставать» (chưa hoàn thành) ngôi ТЫ để hối thúc hành động cần làm ngay.",
    analysis: [
      { opt: "А) Встать", note: "Nguyên thể. Không dùng trực tiếp làm mệnh lệnh." },
      { opt: "Б) Встает", note: "Hiện tại ngôi 3 số ít. Sai." },
      { opt: "В) Вставал", note: "Quá khứ. Sai." },
      { opt: "Г) Вставай", note: "✅ Mệnh lệnh chưa hoàn thành ngôi ТЫ — hối thúc đúng ngữ cảnh." }
    ]
  }
];
