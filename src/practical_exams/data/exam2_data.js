// Задание 1 - Questions 1-20 (Multiple choice)
export const exam2_task1 = [
  {
    num: 1,
    sentence: "Вчера на лекции не было … .",
    viet: "Hôm qua ở buổi học không có … .",
    options: ["А) наш новый преподаватель", "Б) нашего нового преподавателя", "В) нашему новому преподавателю", "Г) нашим новым преподавателем"],
    correct: "Б) нашего нового преподавателя",
    correctShort: "нашего нового преподавателя",
    full: "Вчера на лекции не было нашего нового преподавателя.",
    explanation: "Cấu trúc phủ định với «не было» (trong quá khứ) yêu cầu danh từ đứng sau ở Cách 2 (Genitive).",
    analysis: [
      { opt: "А) наш новый преподаватель", note: "Cách 1 (Nominative). Sai." },
      { opt: "Б) нашего нового преподавателя", note: "✅ Cách 2 (Genitive) — bắt buộc sau «не было»." },
      { opt: "В) нашему новому преподавателю", note: "Cách 3 (Dative). Sai." },
      { opt: "Г) нашим новым преподавателем", note: "Cách 5 (Instrumental). Sai." }
    ]
  },
  {
    num: 2,
    sentence: "Мы пешком дошли … за 20 минут.",
    viet: "Chúng tôi đi bộ đến … trong vòng 20 phút.",
    options: ["А) до станции", "Б) к станции", "В) на станцию", "Г) около станции"],
    correct: "А) до станции",
    correctShort: "до станции",
    full: "Мы пешком дошли до станции за 20 минут.",
    explanation: "Động từ дойти (đi đến tận nơi, đạt tới) luôn đi với giới từ до + Cách 2 (Genitive).",
    analysis: [
      { opt: "А) до станции", note: "✅ ДО + Cách 2 — đi đến tận nơi." },
      { opt: "Б) к станции", note: "«к» + Cách 3 (đi về phía nhà ga, dùng với подойти)." },
      { opt: "В) на станцию", note: "«на» + Cách 4 (đi lên nhà ga, dùng với пойти/прийти)." },
      { opt: "Г) около станции", note: "«gần nhà ga», không chỉ hướng đi đến đích." }
    ]
  },
  {
    num: 3,
    sentence: "Я часто звоню … , чтобы узнать, как у неё дела.",
    viet: "Tôi thường gọi điện cho … để biết tình hình cô ấy thế nào.",
    options: ["А) моя старшая сестра", "Б) моей старшей сестрой", "В) моей старшей сестре", "Г) мою старшую сестру"],
    correct: "В) моей старшей сестре",
    correctShort: "моей старшей сестре",
    full: "Я часто звоню моей старшей сестре, чтобы узнать, как у неё дела.",
    explanation: "Động từ звонить/позвонить (gọi điện cho ai) yêu cầu Cách 3 (Dative) không có giới từ.",
    analysis: [
      { opt: "А) моя старшая сестра", note: "Cách 1. Sai." },
      { opt: "Б) моей старшей сестрой", note: "Cách 5. Sai." },
      { opt: "В) моей старшей сестре", note: "✅ Cách 3 (Dative) — đối tượng được gọi điện." },
      { opt: "Г) мою старшую сестру", note: "Cách 4. Sai." }
    ]
  },
  {
    num: 4,
    sentence: "… нужно много заниматься, чтобы успешно сдать экзамен.",
    viet: "… cần phải học nhiều để thi đỗ thành công.",
    options: ["А) Этот студент", "Б) Этому студенту", "В) Этого студента", "Г) Об этом студенте"],
    correct: "Б) Этому студенту",
    correctShort: "Этому студенту",
    full: "Этому студенту нужно много заниматься, чтобы успешно сдать экзамен.",
    explanation: "Các từ chỉ trạng thái hoặc sự cần thiết như нужно, надо, можно, нельзя yêu cầu chủ thể (người cần/phải làm gì) ở Cách 3 (Dative).",
    analysis: [
      { opt: "А) Этот студент", note: "Cách 1. Sai." },
      { opt: "Б) Этому студенту", note: "✅ Cách 3 (Dative) — chủ thể của «нужно»." },
      { opt: "В) Этого студента", note: "Cách 2/4. Sai." },
      { opt: "Г) Об этом студенте", note: "Cách 6 với giới từ «об». Sai." }
    ]
  },
  {
    num: 5,
    sentence: "Вчера вечером мы долго гуляли … .",
    viet: "Tối hôm qua chúng tôi đã đi dạo rất lâu … .",
    options: ["А) в старом парке", "Б) по старому парку", "В) к старому парку", "Г) старым парком"],
    correct: "Б) по старому парку",
    correctShort: "по старому парку",
    full: "Вчера вечером мы долго гуляли по старому парку.",
    explanation: "Động từ «гулять» (đi dạo) trên một không gian, bề mặt rộng thường dùng giới từ по + Cách 3 (Dative) để diễn tả đi dạo dọc theo/khắp nơi.",
    analysis: [
      { opt: "А) в старом парке", note: "Cách 6 (đi dạo ở trong công viên) — cũng đúng nhưng «по парку» nhấn mạnh sự di chuyển trên bề mặt rộng." },
      { opt: "Б) по старому парку", note: "✅ ПО + Cách 3 — dạo chơi khắp không gian." },
      { opt: "В) к старому парку", note: "Đến phía công viên (không hợp nghĩa đi dạo lâu). Sai." },
      { opt: "Г) старым парком", note: "Cách 5. Sai." }
    ]
  },
  {
    num: 6,
    sentence: "Мы изучаем русский язык … .",
    viet: "Chúng tôi học tiếng Nga … .",
    options: ["А) каждый день", "Б) каждому дню", "В) каждого дня", "Г) в каждом дне"],
    correct: "А) каждый день",
    correctShort: "каждый день",
    full: "Мы изучаем русский язык каждый день.",
    explanation: "Cụm từ chỉ thời gian lặp lại (mỗi ngày, mỗi tuần...) dùng Cách 4 (Accusative) không có giới từ. «Каждый день» ở Cách 4 giống hệt Cách 1.",
    analysis: [
      { opt: "А) каждый день", note: "✅ Cách 4 chỉ thời gian lặp lại." },
      { opt: "Б) каждому дню", note: "Cách 3. Sai." },
      { opt: "В) каждого дня", note: "Cách 2. Sai." },
      { opt: "Г) в каждом дне", note: "Cách 6. Sai cấu trúc thời gian." }
    ]
  },
  {
    num: 7,
    sentence: "Летом мы планируем поехать отдыхать … .",
    viet: "Vào mùa hè, chúng tôi dự định đi nghỉ … .",
    options: ["А) в море", "Б) к морю", "В) на море", "Г) на морю"],
    correct: "В) на море",
    correctShort: "на море",
    full: "Летом мы планируем поехать отдыхать на море.",
    explanation: "Trả lời cho câu hỏi «Куда?» (Đi đâu), danh từ «море» yêu cầu giới từ НА + Cách 4 (Accusative). «Море» (giống trung) giữ nguyên.",
    analysis: [
      { opt: "А) в море", note: "Ra giữa biển/xuống lòng biển (thường dùng cho tàu thuyền)." },
      { opt: "Б) к морю", note: "Đi đến hướng biển. Ít dùng cho việc đi nghỉ." },
      { opt: "В) на море", note: "✅ НА + Cách 4 — đi ra biển nghỉ mát." },
      { opt: "Г) на морю", note: "Sai ngữ pháp (đuôi -ю không đi với на chỉ hướng)." }
    ]
  },
  {
    num: 8,
    sentence: "Анна не любит сладкое, поэтому она пьёт чай … .",
    viet: "Anna không thích đồ ngọt, vì vậy cô ấy uống trà … .",
    options: ["А) с сахаром", "Б) без сахара", "В) о сахаре", "Г) к сахару"],
    correct: "Б) без сахара",
    correctShort: "без сахара",
    full: "Анна не любит сладкое, поэтому она пьёт чай без сахара.",
    explanation: "Giới từ БЕЗ (không có) yêu cầu Cách 2 (Genitive). «Сахар» -> «сахара».",
    analysis: [
      { opt: "А) с сахаром", note: "Với đường (Cách 5) -> mâu thuẫn nghĩa." },
      { opt: "Б) без сахара", note: "✅ БЕЗ + Cách 2 — không đường." },
      { opt: "В) о сахаре", note: "Về đường (Cách 6). Sai." },
      { opt: "Г) к сахару", note: "Tới đường (Cách 3). Sai." }
    ]
  },
  {
    num: 9,
    sentence: "На вечеринке мы познакомились с … .",
    viet: "Tại bữa tiệc, chúng tôi đã làm quen với … .",
    options: ["А) новый иностранный студент", "Б) нового иностранного студента", "В) новым иностранным студентом", "Г) новому иностранному студенту"],
    correct: "В) новым иностранным студентом",
    correctShort: "новым иностранным студентом",
    full: "На вечеринке мы познакомились с новым иностранным студентом.",
    explanation: "Động từ знакомиться/познакомиться (làm quen với ai) đi với giới từ С + Cách 5 (Instrumental).",
    analysis: [
      { opt: "А) новый иностранный студент", note: "Cách 1. Sai." },
      { opt: "Б) нового иностранного студента", note: "Cách 2/4. Sai." },
      { opt: "В) новым иностранным студентом", note: "✅ С + Cách 5 — cùng với ai." },
      { opt: "Г) новому иностранному студенту", note: "Cách 3. Sai." }
    ]
  },
  {
    num: 10,
    sentence: "На уроке мы говорили … .",
    viet: "Trong lớp, chúng tôi đã nói chuyện … .",
    options: ["А) о русской литературе", "Б) о русскую литературу", "В) с русской литературой", "Г) русской литературе"],
    correct: "А) о русской литературе",
    correctShort: "о русской литературе",
    full: "На уроке мы говорили о русской литературе.",
    explanation: "Động từ говорить (nói về cái gì) đi với giới từ О/ОБ + Cách 6 (Prepositional).",
    analysis: [
      { opt: "А) о русской литературе", note: "✅ О + Cách 6 — về văn học Nga." },
      { opt: "Б) о русскую литературу", note: "Sai cách (đây là Cách 4)." },
      { opt: "В) с русской литературой", note: "Với văn học Nga (Cách 5) -> không hợp nghĩa." },
      { opt: "Г) русской литературе", note: "Cách 3. Sai." }
    ]
  },
  {
    num: 11,
    sentence: "Мои бабушка и дедушка сейчас живут … .",
    viet: "Ông bà tôi hiện đang sống … .",
    options: ["А) на юге", "Б) в юге", "В) на юг", "Г) к югу"],
    correct: "А) на юге",
    correctShort: "на юге",
    full: "Мои бабушка и дедушка сейчас живут на юге.",
    explanation: "Chỉ địa điểm ở phương hướng (bắc, trung, nam, tây, đông) trả lời câu hỏi «Где?», dùng giới từ НА + Cách 6 (Prepositional).",
    analysis: [
      { opt: "А) на юге", note: "✅ НА + Cách 6 — ở miền nam." },
      { opt: "Б) в юге", note: "Sai giới từ (không dùng «в» với phương hướng)." },
      { opt: "В) на юг", note: "Cách 4 (Chỉ hướng đi «Куда?»). Sai." },
      { opt: "Г) к югу", note: "Về phía nam (Cách 3). Sai." }
    ]
  },
  {
    num: 12,
    sentence: "Каждый день я … на работу на автобусе.",
    viet: "Mỗi ngày tôi … đi làm bằng xe buýt.",
    options: ["А) иду", "Б) езжу", "В) еду", "Г) хожу"],
    correct: "Б) езжу",
    correctShort: "езжу",
    full: "Каждый день я езжу на работу на автобусе.",
    explanation: "«Каждый день» chỉ hành động lặp đi lặp lại thường xuyên -> dùng động từ đa hướng. Đi bằng xe buýt -> ездить (ngôi я: езжу).",
    analysis: [
      { opt: "А) иду", note: "Đang đi bộ (đơn hướng). Sai." },
      { opt: "Б) езжу", note: "✅ Đa hướng bằng phương tiện — đúng với «каждый день»." },
      { opt: "В) еду", note: "Đang đi bằng xe (đơn hướng). Sai." },
      { opt: "Г) хожу", note: "Đi bộ lặp lại (đa hướng). Sai phương tiện." }
    ]
  },
  {
    num: 13,
    sentence: "Завтра утром мы … в Санкт-Петербург на поезде.",
    viet: "Sáng mai chúng tôi … đến Saint Petersburg bằng tàu hỏa.",
    options: ["А) ездим", "Б) поедем", "В) пойдём", "Г) приедем"],
    correct: "Б) поедем",
    correctShort: "поедем",
    full: "Завтра утром мы поедем в Санкт-Петербург на поезде.",
    explanation: "Chuyến đi trong tương lai («Завтра»), một lần cụ thể bằng phương tiện, dùng động từ hoàn thành ПОЕХАТЬ (ngôi мы: поедем).",
    analysis: [
      { opt: "А) ездим", note: "Hiện tại đa hướng. Sai." },
      { opt: "Б) поедем", note: "✅ Tương lai hoàn thành, nhấn mạnh việc khởi hành đi." },
      { opt: "В) пойдём", note: "Sẽ đi bộ. Sai phương tiện." },
      { opt: "Г) приедем", note: "Sẽ đến nơi. «Поедем» tự nhiên hơn khi nhấn mạnh khởi hành đi." }
    ]
  },
  {
    num: 14,
    sentence: "Птичка … в окно, полетала по комнате и села на стол.",
    viet: "Chú chim nhỏ … vào qua cửa sổ, bay quanh phòng và đậu xuống bàn.",
    options: ["А) вылетела", "Б) перелетела", "В) влетела", "Г) долетела"],
    correct: "В) влетела",
    correctShort: "влетела",
    full: "Птичка влетела в окно, полетала по комнате и села на стол.",
    explanation: "Hành động bay «vào trong» (в окно) dùng tiền tố В- (в/во- có nghĩa là vào trong).",
    analysis: [
      { opt: "А) вылетела", note: "Bay ra (вы-). Sai." },
      { opt: "Б) перелетела", note: "Bay qua (пере-). Sai." },
      { opt: "В) влетела", note: "✅ Bay vào (в-)." },
      { opt: "Г) долетела", note: "Bay đến tận nơi (до-). Sai." }
    ]
  },
  {
    num: 15,
    sentence: "Мы … улицу и вошли в большой торговый центр.",
    viet: "Chúng tôi … con phố và đi vào trung tâm thương mại lớn.",
    options: ["А) перешли", "Б) подошли", "В) отошли", "Г) дошли"],
    correct: "А) перешли",
    correctShort: "перешли",
    full: "Мы перешли улицу и вошли в большой торговый центр.",
    explanation: "Hành động băng qua, vượt qua một không gian (con phố) dùng tiền tố ПЕРЕ-. «Перейти улицу» là cụm cố định (băng qua đường).",
    analysis: [
      { opt: "А) перешли", note: "✅ Băng qua (пере-)." },
      { opt: "Б) подошли", note: "Đến gần (под-). Sai." },
      { opt: "В) отошли", note: "Rời xa một chút (от-). Sai." },
      { opt: "Г) дошли", note: "Đi đến tận nơi (до-). Sai." }
    ]
  },
  {
    num: 16,
    sentence: "Вчера вечером я очень устал и просто долго … телевизор.",
    viet: "Tối qua tôi rất mệt và chỉ … xem TV rất lâu.",
    options: ["А) посмотрел", "Б) смотрел", "В) смотрю", "Г) посмотрю"],
    correct: "Б) смотрел",
    correctShort: "смотрел",
    full: "Вчера вечером я очень устал и просто долго смотрел телевизор.",
    explanation: "Từ khóa ДОЛГО (lâu) chỉ quá trình, độ dài của hành động. Do đó dùng động từ CHƯA HOÀN THÀNH (смотрел).",
    analysis: [
      { opt: "А) посмотрел", note: "Quá khứ hoàn thành (nhấn mạnh kết quả xong). Không đi với «долго»." },
      { opt: "Б) смотрел", note: "✅ Quá khứ chưa hoàn thành — diễn tả quá trình dài." },
      { opt: "В) смотрю", note: "Hiện tại. Sai thời gian." },
      { opt: "Г) посмотрю", note: "Tương lai hoàn thành. Sai." }
    ]
  },
  {
    num: 17,
    sentence: "Когда я … эту книгу, я обязательно дам её тебе.",
    viet: "Khi tôi (đọc xong) … cuốn sách này, tôi nhất định sẽ đưa nó cho bạn.",
    options: ["А) читаю", "Б) читал", "В) прочитаю", "Г) прочитывал"],
    correct: "В) прочитаю",
    correctShort: "прочитаю",
    full: "Когда я прочитаю эту книгу, я обязательно дам её тебе.",
    explanation: "Điều kiện «Когда» yêu cầu hành động phải HOÀN TẤT thì mới có thể thực hiện hành động sau («дам»). Cần động từ tương lai HOÀN THÀNH.",
    analysis: [
      { opt: "А) читаю", note: "Hiện tại chưa hoàn thành. Sai." },
      { opt: "Б) читал", note: "Quá khứ chưa hoàn thành. Sai." },
      { opt: "В) прочитаю", note: "✅ Tương lai hoàn thành — đọc xong sẽ đưa." },
      { opt: "Г) прочитывал", note: "Quá khứ chưa hoàn thành. Sai." }
    ]
  },
  {
    num: 18,
    sentence: "Преподаватель вошёл в аудиторию, и студенты начали … новый текст.",
    viet: "Giảng viên bước vào giảng đường, và sinh viên bắt đầu … bài khóa mới.",
    options: ["А) перевести", "Б) переводить", "В) переводили", "Г) переведут"],
    correct: "Б) переводить",
    correctShort: "переводить",
    full: "Преподаватель вошёл в аудиторию, и студенты начали переводить новый текст.",
    explanation: "Sau các động từ chỉ sự BẮT ĐẦU (начинать/начать), LUÔN dùng động từ nguyên thể CHƯA HOÀN THÀNH.",
    analysis: [
      { opt: "А) перевести", note: "Nguyên thể hoàn thành. Sai." },
      { opt: "Б) переводить", note: "✅ Nguyên thể chưa hoàn thành." },
      { opt: "В) переводили", note: "Quá khứ. Sai." },
      { opt: "Г) переведут", note: "Tương lai hoàn thành. Sai." }
    ]
  },
  {
    num: 19,
    sentence: "Я уже … это упражнение! Ты можешь его проверить?",
    viet: "Tôi đã … bài tập này rồi! Bạn có thể kiểm tra nó được không?",
    options: ["А) делал", "Б) сделал", "В) делаю", "Г) делать"],
    correct: "Б) сделал",
    correctShort: "сделал",
    full: "Я уже сделал это упражнение! Ты можешь его проверить?",
    explanation: "Từ «уже» và ngữ cảnh yêu cầu kiểm tra cho thấy hành động ĐÃ HOÀN TẤT có kết quả -> dùng động từ hoàn thành (сделал).",
    analysis: [
      { opt: "А) делал", note: "Đã làm (nhưng không rõ xong chưa). Sai ý." },
      { opt: "Б) сделал", note: "✅ Hoàn thành quá khứ — đã làm xong." },
      { opt: "В) делаю", note: "Hiện tại. Sai." },
      { opt: "Г) делать", note: "Nguyên thể. Sai." }
    ]
  },
  {
    num: 20,
    sentence: "Извините, … мне, пожалуйста, где находится ближайшая аптека?",
    viet: "Xin lỗi, làm ơn … cho tôi biết hiệu thuốc gần nhất ở đâu?",
    options: ["А) скажи", "Б) говори", "В) скажите", "Г) говорите"],
    correct: "В) скажите",
    correctShort: "скажите",
    full: "Извините, скажите мне, пожалуйста, где находится ближайшая аптека?",
    explanation: "Yêu cầu lịch sự lấy thông tin cụ thể dùng mệnh lệnh thức của động từ hoàn thành (сказать) ở ngôi ВЫ (скажите).",
    analysis: [
      { opt: "А) скажи", note: "Mệnh lệnh ngôi ТЫ. Không hợp lịch sự." },
      { opt: "Б) говори", note: "Mệnh lệnh chưa hoàn thành. Không dùng cho lấy thông tin một lần." },
      { opt: "В) скажите", note: "✅ Mệnh lệnh hoàn thành ngôi ВЫ." },
      { opt: "Г) говорите", note: "Mệnh lệnh chưa hoàn thành ngôi ВЫ. Sai." }
    ]
  }
];
