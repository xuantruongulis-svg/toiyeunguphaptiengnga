export const mestoimenieExercises = [
  {
    id: "ex_m1", num: 1,
    title: "Упражнение 1 — Отрицательные местоимения",
    description: "Прочитайте вопросы и ответьте отрицательно. Образец: Кто вам пишет письма? — Мне никто не пишет письма.",
    type: "multiple_choice",
    questions: [
      { 
        sentence: "Кто вам рассказывал об экскурсии?", 
        options: ["Мне никто не рассказывал", "Мне ничто не рассказывало", "Мне никогда не рассказывали"], 
        correct: "Мне никто не рассказывал", 
        viet: "Ai đã kể cho bạn về chuyến tham quan? — Không có ai kể cho tôi cả.",
        why: "Субъект — лицо → никто + не" 
      },
      { 
        sentence: "Что ты купил?", 
        options: ["Я ничего не купил", "Я никого не купил", "Я нигде не купил"], 
        correct: "Я ничего не купил", 
        viet: "Bạn đã mua gì? — Tôi chẳng mua cái gì cả.",
        why: "Объект — вещь → ничего (Р.п от ничто) + не" 
      },
      { 
        sentence: "С кем ты встречался вчера?", 
        options: ["Я ни с кем не встречался", "Я никем не встречался", "Я никого не встречал"], 
        correct: "Я ни с кем не встречался", 
        viet: "Hôm qua bạn đã gặp gỡ với ai? — Tôi chẳng gặp gỡ với ai cả.",
        why: "С предлогом «с» → ни + с + кем, раздельно" 
      },
      { 
        sentence: "У кого есть ключ от этой комнаты?", 
        options: ["Ни у кого нет ключа", "Никого нет ключа", "Ничего нет ключа"], 
        correct: "Ни у кого нет ключа", 
        viet: "Ai có chìa khóa của căn phòng này? — Chẳng ai có chìa khóa cả.",
        why: "С предлогом «у» → ни + у + кого, раздельно" 
      },
      { 
        sentence: "Куда вы поедете в воскресенье?", 
        options: ["Мы никуда не поедем", "Мы нигде не поедем", "Мы ничего не поедем"], 
        correct: "Мы никуда не поедем", 
        viet: "Chủ nhật các bạn sẽ đi đâu? — Chúng tôi sẽ chẳng đi đâu cả.",
        why: "Направление → никуда + не" 
      },
      { 
        sentence: "О чём вы договорились с Виктором?", 
        options: ["Мы ни о чём не договорились", "Мы ничего не договорились", "Мы никогда не договорились"], 
        correct: "Мы ни о чём не договорились", 
        viet: "Các bạn đã thỏa thuận gì với Victor? — Chúng tôi chẳng thỏa thuận được gì cả.",
        why: "С предлогом «о» → ни + о + чём, раздельно" 
      },
    ]
  },
  {
    id: "ex_m2", num: 2,
    title: "Упражнение 2 — Вставьте не и ни",
    description: "Вместо точек вставьте частицы не и ни (слитно или раздельно).",
    type: "multiple_choice",
    questions: [
      { 
        sentence: "Мы где ... могли найти место для парковки машины.", 
        options: ["нигде не", "никогда не", "ни где"], 
        correct: "нигде не", 
        viet: "Chúng tôi đã chẳng thể tìm thấy chỗ đỗ xe ở bất cứ đâu.",
        why: "Наречие места: нигде (слитно) + не перед глаголом" 
      },
      { 
        sentence: "Джон ... когда ... ел русские пельмени.", 
        options: ["никогда не", "нигде не", "ни когда не"], 
        correct: "никогда не", 
        viet: "John chưa bao giờ ăn món sủi cảo Nga.",
        why: "Наречие времени: никогда (слитно) + не" 
      },
      { 
        sentence: "Я уже ... чему ... удивляюсь.", 
        options: ["ничему не", "никому не", "нигде не"], 
        correct: "ничему не", 
        viet: "Tôi giờ đây chẳng còn ngạc nhiên vì điều gì nữa.",
        why: "Д.п от ничто без предлога: ничему (слитно) + не" 
      },
      { 
        sentence: "Почему ты ... чего ... ешь?", 
        options: ["ничего не", "никого не", "нигде не"], 
        correct: "ничего не", 
        viet: "Tại sao bạn lại chẳng ăn gì thế?",
        why: "Р.п от ничто без предлога: ничего (слитно) + не" 
      },
      { 
        sentence: "Я ... о чём ... жалею.", 
        options: ["ни о чём не", "ничего не", "нигде не"], 
        correct: "ни о чём не", 
        viet: "Tôi chẳng hối hận về điều gì cả.",
        why: "С предлогом «о»: ни + о + чём (раздельно) + не" 
      },
    ]
  },
  {
    id: "ex_m3", num: 3,
    title: "Упражнение 3 — Отрицательные местоимения и наречия",
    description: "Вместо точек вставьте подходящие по смыслу отрицательные местоимения и наречия.",
    type: "multiple_choice",
    questions: [
      { 
        sentence: "Павел целыми днями сидит дома, ... не ходит, ... не разговаривает.", 
        options: ["никуда / ни с кем", "нигде / ни с кем", "ничего / ни с кем"], 
        correct: "никуда / ни с кем", 
        viet: "Pavel ngồi nhà cả ngày, chẳng đi đâu cả, cũng chẳng nói chuyện với ai.",
        why: "никуда (hướng đi) + ни с кем (với ai)" 
      },
      { 
        sentence: "Маша ... не была в Петербурге.", 
        options: ["никогда", "никуда", "нигде"], 
        correct: "никогда", 
        viet: "Masha chưa bao giờ đến Saint Petersburg.",
        why: "никогда (không bao giờ)" 
      },
      { 
        sentence: "Елена всё делает по-своему, ... не советуется.", 
        options: ["ни с кем", "никому", "ни с чем"], 
        correct: "ни с кем", 
        viet: "Elena luôn làm mọi việc theo ý mình, chẳng hỏi ý kiến ai cả.",
        why: "советоваться с кем-то -> ни с кем" 
      },
      { 
        sentence: "Вчера у Игоря был день рождения, но ... его не поздравил.", 
        options: ["никто", "никого", "ничего"], 
        correct: "никто", 
        viet: "Hôm qua là sinh nhật của Igor, nhưng chẳng ai chúc mừng anh ấy cả.",
        why: "Chủ ngữ (ai đó) -> никто" 
      },
      { 
        sentence: "Я долго ходила по магазинам, но так ... и не купила.", 
        options: ["ничего", "никого", "нигде"], 
        correct: "ничего", 
        viet: "Tôi đã đi mua sắm rất lâu, nhưng rốt cuộc chẳng mua được gì cả.",
        why: "Bổ ngữ (cái gì) -> ничего (Р.п)" 
      },
      { 
        sentence: "Мне кажется, Вера не любит ..., кроме себя.", 
        options: ["никого", "ничего", "никто"], 
        correct: "никого", 
        viet: "Tôi cảm thấy Vera chẳng yêu ai ngoài bản thân cô ấy.",
        why: "любить кого-то -> никого (Р.п/В.п)" 
      },
      { 
        sentence: "Мы хотели позвонить вам, но ... не было номера вашего телефона.", 
        options: ["ни у кого", "никого", "никуда"], 
        correct: "ни у кого", 
        viet: "Chúng tôi đã muốn gọi điện cho bạn, nhưng chẳng ai có số điện thoại của bạn cả.",
        why: "у кого-то есть -> ни у кого нет" 
      },
      { 
        sentence: "Ему все пишут письма, но он ... не отвечает.", 
        options: ["никому", "никто", "ничего"], 
        correct: "никому", 
        viet: "Mọi người đều viết thư cho anh ấy, nhưng anh ấy chẳng trả lời ai cả.",
        why: "отвечать кому-то -> никому (Д.п)" 
      },
    ]
  },
  {
    id: "ex_m4", num: 4,
    title: "Упражнение 4 — Частицы не и ни",
    description: "Вместо точек вставьте частицы не и ни (слитно или раздельно).",
    type: "multiple_choice",
    questions: [
      { 
        sentence: "Мы ...где ... могли найти место для парковки машины.", 
        options: ["ни / не", "не / ни", "ни / ни"], 
        correct: "ни / не", 
        viet: "Chúng tôi đã chẳng thể tìm thấy chỗ đỗ xe ở bất cứ đâu.",
        why: "нигде (viết liền) + không (đứng trước động từ)" 
      },
      { 
        sentence: "Джон ...когда ... ел русские пельмени.", 
        options: ["ни / не", "не / ни", "ни / ни"], 
        correct: "ни / не", 
        viet: "John chưa bao giờ ăn món sủi cảo Nga.",
        why: "никогда (không bao giờ - viết liền) + không" 
      },
      { 
        sentence: "Я уже ...чему ... удивляюсь.", 
        options: ["ни / не", "не / ни", "ни / ни"], 
        correct: "ни / не", 
        viet: "Tôi giờ đây chẳng còn ngạc nhiên vì điều gì nữa.",
        why: "ничему (viết liền) + không" 
      },
      { 
        sentence: "За контрольную работу ...кто ... получил отличную оценку.", 
        options: ["ни / не", "не / ни", "ни / ни"], 
        correct: "ни / не", 
        viet: "Trong bài kiểm tra, chẳng có ai nhận được điểm xuất sắc cả.",
        why: "никто (không ai - viết liền) + không" 
      },
      { 
        sentence: "Почему ты ...чего ... ешь?", 
        options: ["ни / не", "не / ни", "ни / ни"], 
        correct: "ни / не", 
        viet: "Tại sao bạn lại chẳng ăn gì thế?",
        why: "ничего (không cái gì - viết liền) + không" 
      },
      { 
        sentence: "Я ... о чём ... жалею.", 
        options: ["ни / не", "не / ни", "ни / ни"], 
        correct: "ни / не", 
        viet: "Tôi chẳng hối hận về điều gì cả.",
        why: "ни о чём (viết rời vì có giới từ 'о') + không" 
      },
      { 
        sentence: "Алексей приезжал в Москву, но ... к кому из друзей ... заходил, ... с кем ... встречался.", 
        options: ["ни / не / ни / не", "ни / ни / не / не", "не / не / ни / ни"], 
        correct: "ни / не / ни / не", 
        viet: "Alexey đã đến Moscow, nhưng chẳng ghé thăm người bạn nào và cũng chẳng gặp gỡ ai.",
        why: "ни к кому, ни с кем (viết rời) + không" 
      },
      { 
        sentence: "Скоро экзамен, а Игорь ещё ...чего ... повторил.", 
        options: ["ни / не", "не / ни", "ни / ни"], 
        correct: "ни / не", 
        viet: "Sắp thi rồi mà Igor vẫn chưa ôn tập gì cả.",
        why: "ничего (không cái gì - viết liền) + không" 
      },
    ]
  },
  {
    id: "ex_m5", num: 5,
    title: "Упражнение 5 — Антонимичность предложений (Phủ định toàn bộ)",
    description: "Chọn câu phủ định tương ứng (Antonym) cho các câu khẳng định dưới đây. Lưu ý sự thay đổi của đại từ và cấu trúc câu.",
    type: "multiple_choice",
    questions: [
      { 
        sentence: "Я всё купила. → ...", 
        options: ["Я ничего не купила", "Я не всё купила", "Я никого не купила"], 
        correct: "Я ничего не купила", 
        viet: "Tôi đã mua tất cả. → Tôi chẳng mua cái gì cả.",
        why: "всё (đối tượng vật) → ничего + не" 
      },
      { 
        sentence: "Маша обо всём рассказала родителям. → ...", 
        options: ["Маша ни о чём не рассказала родителям", "Маша ничего не рассказала", "Маша ни о ком не рассказала"], 
        correct: "Маша ни о чём не рассказала родителям", 
        viet: "Masha đã kể cho bố mẹ nghe về mọi chuyện. → Masha chẳng kể gì cho bố mẹ cả.",
        why: "обо всём (P.p) → ни о чём + не" 
      },
      { 
        sentence: "Алёша всему верит. → ...", 
        options: ["Алёша ничему не верит", "Алёша никому не верит", "Алёша ничего не верит"], 
        correct: "Алёша ничему не верит", 
        viet: "Alyosha tin vào mọi thứ. → Alyosha chẳng tin vào điều gì cả.",
        why: "всему (D.p) → ничему + не" 
      },
      { 
        sentence: "Все знают об этом. → ...", 
        options: ["Никто не знает об этом", "Ничего не знает", "Никто не знают"], 
        correct: "Никто не знает об этом", 
        viet: "Mọi người đều biết về điều này. → Chẳng ai biết về điều này cả.",
        why: "все (chủ ngữ người) → никто + не (động từ số ít)" 
      },
      { 
        sentence: "Я знакома со всеми. → ...", 
        options: ["Я ни с кем не знакома", "Я никем không знакома", "Я никого không знакома"], 
        correct: "Я ни с кем не знакома", 
        viet: "Tôi quen biết tất cả mọi người. → Tôi chẳng quen biết ai cả.",
        why: "со всеми (I.p) → ни с кем + không" 
      },
      { 
        sentence: "На экзамене всем поставили отличную оценку. → ...", 
        options: ["На экзамене никому не поставили отличную оценку", "На экзамене никто не поставил", "На экзамене ничему не поставили"], 
        correct: "На экзамене никому не поставили отличную оценку", 
        viet: "Trong kỳ thi, mọi người đều được điểm xuất sắc. → Trong kỳ thi, chẳng ai được điểm xuất sắc cả.",
        why: "всем (D.p) → никому + не" 
      },
      { 
        sentence: "Все мы хотим поехать на экскурсию. → ...", 
        options: ["Никто из нас не хочет поехать на экскурсию", "Мы все не хотим ехать", "Никто не хотим ехать"], 
        correct: "Никто из нас не хочет поехать на экскурсию", 
        viet: "Tất cả chúng tôi đều muốn đi tham quan. → Chẳng ai trong chúng tôi muốn đi tham quan cả.",
        why: "все мы → никто из нас + не (động từ chia ở số ít: хочет)" 
      },
      { 
        sentence: "Я позвонила всем друзьям. → ...", 
        options: ["Я не позвонила никому из друзей", "Я никому не позвонила", "Я không gọi cho ai cả"], 
        correct: "Я не позвонила никому из друзей", 
        viet: "Tôi đã gọi cho tất cả bạn bè. → Tôi đã không gọi cho bất cứ người bạn nào.",
        why: "nhấn mạnh phủ định trong một nhóm xác định: không ai trong số (никому из...)" 
      },
      { 
        sentence: "После лекции слушатели задавали вопросы лектору. → ...", 
        options: ["После лекции никто из слушателей не задавал вопросов лектору", "После лекции никто не спрашивал", "После лекции слушатели не задавали вопросы"], 
        correct: "После лекции никто из слушателей не задавал вопросов лектору", 
        viet: "Sau bài giảng, thính giả đã đặt câu hỏi cho giảng viên. → Sau bài giảng, không một thính giả nào đặt câu hỏi cho giảng viên cả.",
        why: "слушатели (số nhiều) → никто из слушателей (không ai trong số...)" 
      },
    ]
  },
  {
    id: "ex_m6", num: 6,
    title: "Упражнение 6 — Антонимичные предложения (всё → ничего)",
    description: "Замените данные предложения антонимичными. Образец: Я всё купил. — Я ничего не купил.",
    type: "multiple_choice",
    questions: [
      { 
        sentence: "Марина помнит всё. → ...", 
        options: ["Марина ничего не помнит", "Марина никогда не помнит", "Марина никого не помнит"], 
        correct: "Марина ничего не помнит", 
        viet: "Marina nhớ tất cả. → Marina chẳng nhớ gì cả.",
        why: "всё → ничего + не" 
      },
      { 
        sentence: "Рита всё простила Петру. → ...", 
        options: ["Рита ничего не простила Петру", "Рита никому не простила", "Рита нигде не простила"], 
        correct: "Рита ничего не простила Петру", 
        viet: "Rita đã tha thứ tất cả cho Peter. → Rita chẳng tha thứ gì cho Peter cả.",
        why: "всё → ничего + не" 
      },
      { 
        sentence: "Я уже приготовила всё для отъезда. → ...", 
        options: ["Я ещё ничего не приготовила для отъезда", "Я уже ничего не приготовила", "Я ещё не приготовила всё"], 
        correct: "Я ещё ничего не приготовила для отъезда", 
        viet: "Tôi đã chuẩn bị xong mọi thứ cho chuyến đi. → Tôi vẫn chưa chuẩn bị gì cho chuyến đi cả.",
        why: "уже всё → ещё ничего + не" 
      },
      { 
        sentence: "Аспиранту на защите диссертации сделали несколько замечаний. Он со всем согласился. → ...", 
        options: ["Он ни с чем не согласился", "Он ни о чём không đồng ý", "Он ничего không đồng ý"], 
        correct: "Он ни с чем не согласился", 
        viet: "Anh ấy đã đồng ý với tất cả những nhận xét. → Anh ấy chẳng đồng ý với điều gì cả.",
        why: "со всем (I.p) → ни с чем + không" 
      },
      { 
        sentence: "Олег признался во всём. → ...", 
        options: ["Олег ни в чём не признался", "Олег ничего không thú nhận", "Олег ни о чём không thú nhận"], 
        correct: "Олег ни в чём не признался", 
        viet: "Oleg đã thú nhận tất cả. → Oleg chẳng thú nhận điều gì cả.",
        why: "во всём (P.p) → ни в чём + không" 
      },
      { 
        sentence: "Он стар, но ещё всем интересуется. → ...", 
        options: ["Он ничем не интересуется", "Он никем không quan tâm", "Он нигде không quan tâm"], 
        correct: "Он ничем не интересуется", 
        viet: "Ông ấy đã già nhưng vẫn quan tâm đến mọi thứ. → Ông ấy chẳng quan tâm đến cái gì cả.",
        why: "всем (I.p) → ничем + không" 
      },
    ]
  },
  {
    id: "ex_m7", num: 7,
    title: "Упражнение 7 — Антонимичные предложения (все → никто)",
    description: "Замените данные предложения антонимичными. Образец: Я здесь всех знаю. — Я здесь никого не знаю.",
    type: "multiple_choice",
    questions: [
      { 
        sentence: "Игорь поговорил со всеми. → ...", 
        options: ["Игорь ни с кем не поговорил", "Игорь никого не говорил", "Игорь никогда не говорил"], 
        correct: "Игорь ни с кем не поговорил", 
        viet: "Igor đã nói chuyện với tất cả mọi người. → Igor chẳng nói chuyện với ai cả.",
        why: "со всеми (I.p) → ни с кем + не" 
      },
      { 
        sentence: "Скоро Новый год. Ирина уже написала всем поздравительные открытки. → ...", 
        options: ["Ирина ещё никому не написала поздравительные открытки", "Ирина уже никому не viết", "Ирина никому không viết thiệp"], 
        correct: "Ирина ещё никому не написала поздравительные открытки", 
        viet: "Sắp đến năm mới rồi. Irina đã viết thiệp chúc mừng cho tất cả mọi người. → Irina vẫn chưa viết thiệp chúc mừng cho bất cứ ai.",
        why: "уже всем → ещё никому + không" 
      },
      { 
        sentence: "На вечере все танцевали. → ...", 
        options: ["На вечере никто не танцевал", "На вечере ничего не nhảy", "На вечере никого không nhảy"], 
        correct: "На вечере никто не танцевал", 
        viet: "Ở buổi tối tất cả mọi người đều nhảy. → Ở buổi tối chẳng có ai nhảy cả.",
        why: "все (chủ ngữ người) → никто + không (động từ số ít)" 
      },
      { 
        sentence: "Виктор рассказал всем о своих проблемах. → ...", 
        options: ["Виктор никому не рассказал о своих проблемах", "Виктор ничего không kể", "Виктор ни о ком không kể"], 
        correct: "Виктор никому не рассказал о своих проблемах", 
        viet: "Victor đã kể cho tất cả mọi người về những vấn đề của mình. → Victor chẳng kể cho ai về những vấn đề của mình cả.",
        why: "всем (D.p) → никому + không" 
      },
      { 
        sentence: "У всех есть учебники. → ...", 
        options: ["Ни у кого нет учебников", "У никто không có sách", "Никого không có sách"], 
        correct: "Ни у кого нет учебников", 
        viet: "Tất cả mọi người đều có sách giáo khoa. → Chẳng ai có sách giáo khoa cả.",
        why: "у всех có → ни у кого không có (нет + R.p số nhiều: учебников)" 
      },
      { 
        sentence: "На контрольной работе преподаватель всем разрешил пользоваться словарём. → ...", 
        options: ["На контрольной работе преподаватель никому не разрешил пользоваться словарём", "Преподаватель никто không cho phép", "Преподаватель ничем không cho phép"], 
        correct: "На контрольной работе преподаватель никому не разрешил пользоваться словарём", 
        viet: "Trong bài kiểm tra, giáo viên đã cho phép tất cả mọi người sử dụng từ điển. → Trong bài kiểm tra, giáo viên đã không cho phép bất cứ ai sử dụng từ điển.",
        why: "всем (D.p) → никому + không" 
      },
    ]
  },
  {
    id: "ex_m8", num: 8,
    title: "Упражнение 8 — Антонимичные предложения (никто из...)",
    description: "Замените данные предложения антонимичными. Образец: Все студенты знали о собрании. — Никто из студентов не знал о собрании.",
    type: "multiple_choice",
    questions: [
      { 
        sentence: "Все мы были готовы к этому разговору. → ...", 
        options: ["Никто из нас не был готов к этому разговору", "Мы ни с кем не были готовы", "Никто не были готовы"], 
        correct: "Никто из нас не был готов к этому разговору", 
        viet: "Tất cả chúng tôi đều sẵn sàng cho cuộc trò chuyện này. → Không ai trong chúng tôi sẵn sàng cho cuộc trò chuyện này.",
        why: "все мы → никто из нас + не (động từ số ít: был)" 
      },
      { 
        sentence: "Константин позвонил всем родным. → ...", 
        options: ["Константин не позвонил никому из родных", "Константин никому не позвонил", "Константин ни с кем не звонил"], 
        correct: "Константин не позвонил никому из родных", 
        viet: "Konstantin đã gọi điện cho tất cả người thân. → Konstantin đã không gọi điện cho bất cứ người thân nào.",
        why: "всем родным → никому из родных + не (nhấn mạnh trong phạm vi xác định)" 
      },
      { 
        sentence: "Я рассказал о своей поездке всем друзьям. → ...", 
        options: ["Я не рассказал о своей поездке никому из друзей", "Я никому не рассказал", "Я ни с кем не говорил"], 
        correct: "Я не рассказал о своей поездке никому из друзей", 
        viet: "Tôi đã kể về chuyến đi của mình cho tất cả bạn bè. → Tôi đã không kể về chuyến đi của mình cho bất cứ người bạn nào.",
        why: "всем друзьям → никому из друзей + не" 
      },
      { 
        sentence: "Все школьники уже ездили во Владимир. → ...", 
        options: ["Никто из школьников ещё не ездил во Владимир", "Никто не ездили во Владимир", "Школьники никогда не ездили"], 
        correct: "Никто из школьников ещё не ездил во Владимир", 
        viet: "Tất cả học sinh đều đã đến Vladimir rồi. → Không có học sinh nào trong số đó đã từng đến Vladimir.",
        why: "все школьники → никто из школьников + не (động từ số ít: ездил)" 
      },
      { 
        sentence: "Это новые аспиранты. Все они уже знают русский язык. → ...", 
        options: ["Никто из них ещё не знает русского языка", "Они никто не знают", "Никто не знают язык"], 
        correct: "Никто из них ещё не знает русского языка", 
        viet: "Đây là các nghiên cứu sinh mới. Tất cả họ đều đã biết tiếng Nga rồi. → Không ai trong số họ biết tiếng Nga.",
        why: "все они → никто из них + не (R.p sau phủ định: русского языка)" 
      },
      { 
        sentence: "Мне кажется, всех вас я уже встречал раньше. → ...", 
        options: ["Мне кажется, никого из вас я раньше не встречал", "Я никого не встречал", "Я ни с кем не встречался"], 
        correct: "Мне кажется, никого из вас я раньше не встречал", 
        viet: "Tôi cảm thấy như tôi đã từng gặp tất cả các bạn trước đây. → Tôi cảm thấy như tôi chưa từng gặp ai trong số các bạn trước đây.",
        why: "всех вас (В.п) → никого из вас (Р.п) + не" 
      },
    ]
  },
  {
    id: "ex_m9", num: 9,
    title: "Упражнение 9 — Отсутствие возможности совершить действие (не с кем / нечего / негде...)",
    description: "Прочитайте предложения. Сравните, как выражается отсутствие возможности совершить действие в предложениях правого и левого столбцов. Chọn câu diễn đạt sự không thể thực hiện hành động tương ứng.",
    type: "multiple_choice",
    questions: [
      { 
        sentence: "Около нашего дома нет места, где можно погулять с ребёнком. → ...", 
        options: ["Около нашего дома негде погулять с ребёнком", "Около нашего дома нигде не гулять", "Около нашего дома некуда пойти гулять"], 
        correct: "Около нашего дома негде погулять с ребёнком", 
        viet: "Gần nhà chúng tôi không có chỗ nào để đi dạo với trẻ em. → Gần nhà chúng tôi không có chỗ để đi dạo với trẻ em.",
        why: "нет места, где → негде (không có chỗ để)" 
      },
      { 
        sentence: "Нет никого, с кем я могу посоветоваться. → ...", 
        options: ["Мне не с кем посоветоваться", "Мне некого посоветоваться", "Мне не о чем посоветоваться"], 
        correct: "Мне не с кем посоветоваться", 
        viet: "Không có ai mà tôi có thể xin lời khuyên. → Tôi không có ai để xin lời khuyên.",
        why: "нет никого, с кем → не с кем (viết rời vì có giới từ «с»)" 
      },
      { 
        sentence: "Вчера я дочитала роман, и у меня нет ничего, что можно читать. → ...", 
        options: ["Вчера я дочитала роман, и мне нечего читать", "Вчера я дочитала роман, и мне нигде читать", "Вчера я дочитала роман, и мне некого читать"], 
        correct: "Вчера я дочитала роман, и мне нечего читать", 
        viet: "Hôm qua tôi đọc xong tiểu thuyết, và tôi không có gì để đọc. → Hôm qua tôi đọc xong tiểu thuyết, và tôi không có gì để đọc.",
        why: "нет ничего, что → нечего (viết liền, không có giới từ)" 
      },
      { 
        sentence: "Нет ничего, о чём я могу с вами разговаривать. → ...", 
        options: ["Мне не о чем с вами разговаривать", "Мне нечего с вами разговаривать", "Мне не с кем разговаривать"], 
        correct: "Мне не о чем с вами разговаривать", 
        viet: "Không có điều gì mà tôi có thể nói chuyện với bạn về. → Tôi không có gì để nói chuyện với bạn.",
        why: "нет ничего, о чём → не о чем (viết rời vì có giới từ «о»)" 
      },
    ]
  },
  {
    id: "ex_m10", num: 10,
    title: "Упражнение 10 — Dịch sang tiếng Việt",
    description: "Прочитайте предложения. Переведите их письменно на родной язык (tiếng Việt). Chọn bản dịch đúng nhất.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Ребёнку скучно. Ему нечем заняться.",
        options: ["Đứa trẻ chán. Bé không có gì để làm.", "Đứa trẻ mệt. Bé không muốn làm gì.", "Đứa trẻ buồn. Bé không có ai chơi cùng."],
        correct: "Đứa trẻ chán. Bé không có gì để làm.",
        viet: "нечем заняться = không có gì để làm (нечем — I.п, viết liền)",
        why: "нечем = ничем, чем заняться — không có phương tiện/thứ gì để làm"
      },
      {
        sentence: "На вокзале негде отдохнуть.",
        options: ["Ở nhà ga không có chỗ nào để nghỉ ngơi.", "Ở nhà ga không có thời gian để nghỉ ngơi.", "Ở nhà ga không ai nghỉ ngơi."],
        correct: "Ở nhà ga không có chỗ nào để nghỉ ngơi.",
        viet: "негде = không có nơi nào để (trạng từ phủ định chỉ nơi chốn)",
        why: "негде = нет места, где"
      },
      {
        sentence: "Мне нечего вам сказать в ответ.",
        options: ["Tôi không có gì để nói với bạn để đáp lại.", "Tôi không muốn nói chuyện với bạn.", "Tôi không biết phải nói gì."],
        correct: "Tôi không có gì để nói với bạn để đáp lại.",
        viet: "нечего сказать = không có gì để nói (нечего — Р.п, viết liền)",
        why: "нечего = нет ничего, что можно сказать"
      },
      {
        sentence: "Я давно не писал друзьям, мне не о чем писать.",
        options: ["Tôi lâu rồi không viết thư cho bạn bè, tôi không có gì để viết.", "Tôi không muốn viết thư cho bạn bè vì tôi không có thời gian.", "Tôi chưa bao giờ viết thư cho bạn bè."],
        correct: "Tôi lâu rồi không viết thư cho bạn bè, tôi không có gì để viết.",
        viet: "не о чем писать = không có gì/điều gì để viết về (viết rời vì có giới từ «о»)",
        why: "не о чем = нет ничего, о чём писать"
      },
      {
        sentence: "Лена недавно живёт в этом городе. Вечером она обычно бывает дома, ей не с кем пойти погулять.",
        options: ["Lena mới sống ở thành phố này. Tối nào cô cũng ở nhà vì không có ai để đi dạo cùng.", "Lena không thích đi dạo buổi tối.", "Lena không có thời gian để đi dạo tối."],
        correct: "Lena mới sống ở thành phố này. Tối nào cô cũng ở nhà vì không có ai để đi dạo cùng.",
        viet: "не с кем пойти = không có ai để đi cùng (viết rời vì có giới từ «с»)",
        why: "не с кем = нет человека, с которым можно пойти"
      },
      {
        sentence: "Если ты никому не помогаешь, тебе не от кого ждать помощи.",
        options: ["Nếu bạn không giúp đỡ ai, thì bạn cũng không thể mong nhận được sự giúp đỡ từ ai.", "Nếu bạn không cần giúp đỡ, bạn không nên chờ đợi.", "Nếu bạn không có bạn bè, bạn không có ai giúp đỡ."],
        correct: "Nếu bạn không giúp đỡ ai, thì bạn cũng không thể mong nhận được sự giúp đỡ từ ai.",
        viet: "не от кого ждать = không có ai để mong đợi (từ họ) — viết rời vì có giới từ «от»",
        why: "не от кого = нет человека, от которого можно ждать"
      },
    ]
  },
  {
    id: "ex_m11", num: 11,
    title: "Упражнение 11 — Ответьте на вопросы (не с кем / негде / нечего...)",
    description: "Ответьте на вопросы, используя отрицательные местоимения и наречия. Образец: Где здесь можно поужинать? — Здесь негде поужинать.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Куда здесь можно вечером пойти потанцевать?",
        options: ["Здесь некуда пойти потанцевать", "Здесь нигде потанцевать", "Здесь негде потанцевать"],
        correct: "Здесь некуда пойти потанцевать",
        viet: "Ở đây buổi tối có thể đi đâu nhảy? — Ở đây không có chỗ nào để đi nhảy.",
        why: "некуда = нет места, куда пойти (hướng tới)"
      },
      {
        sentence: "С кем ты можешь обсудить эти проблемы?",
        options: ["Мне не с кем обсудить эти проблемы", "Мне некого обсудить", "Мне нечего обсудить"],
        correct: "Мне не с кем обсудить эти проблемы",
        viet: "Bạn có thể thảo luận về những vấn đề này với ai? — Tôi không có ai để thảo luận.",
        why: "не с кем = нет человека, с которым (viết rời, có «с»)"
      },
      {
        sentence: "У кого ты можешь взять учебник?",
        options: ["Мне не у кого взять учебник", "Мне некого взять учебник", "Мне нечего взять"],
        correct: "Мне не у кого взять учебник",
        viet: "Bạn có thể mượn sách giáo khoa từ ai? — Tôi không có ai để mượn sách.",
        why: "не у кого = нет человека, у которого (viết rời, có «у»)"
      },
      {
        sentence: "Откуда здесь можно позвонить?",
        options: ["Здесь неоткуда позвонить", "Здесь нигде позвонить", "Здесь некуда позвонить"],
        correct: "Здесь неоткуда позвонить",
        viet: "Ở đây có thể gọi điện từ đâu? — Ở đây không có chỗ nào để gọi điện.",
        why: "неоткуда = нет места, откуда (chỉ nguồn gốc/xuất phát)"
      },
      {
        sentence: "Что можно посмотреть в этом городе?",
        options: ["В этом городе нечего смотреть", "В этом городе негде смотреть", "В этом городе некуда смотреть"],
        correct: "В этом городе нечего смотреть",
        viet: "Có thể xem gì ở thành phố này? — Ở thành phố này không có gì để xem.",
        why: "нечего = нет ничего, что можно смотреть (viết liền, không giới từ)"
      },
      {
        sentence: "У тебя сегодня есть время приготовить обед?",
        options: ["У меня сегодня некогда готовить обед", "Мне нечего готовить обед", "Мне негде готовить обед"],
        correct: "У меня сегодня некогда готовить обед",
        viet: "Hôm nay bạn có thời gian nấu cơm không? — Hôm nay tôi không có thời gian để nấu cơm.",
        why: "некогда = нет времени (viết liền)"
      },
      {
        sentence: "Почему ты не играешь в шахматы?",
        options: ["Мне не с кем играть в шахматы", "Мне нечего играть", "Мне некуда играть"],
        correct: "Мне не с кем играть в шахматы",
        viet: "Tại sao bạn không chơi cờ vua? — Tôi không có ai để chơi cùng.",
        why: "не с кем = нет человека, с которым играть"
      },
      {
        sentence: "Почему Саша пойдёт на вечер один?",
        options: ["Ему не с кем пойти на вечер", "Ему некуда пойти", "Ему нечего делать вечером"],
        correct: "Ему не с кем пойти на вечер",
        viet: "Tại sao Sasha đi dự tiệc tối một mình? — Anh ấy không có ai để đi cùng.",
        why: "не с кем = нет человека, с которым пойти"
      },
    ]
  },
  {
    id: "ex_m12", num: 12,
    title: "Упражнение 12 — Вставьте отрицательные местоимения и наречия",
    description: "Вместо точек вставьте подходящие отрицательные местоимения и наречия (негде, некогда, нечего, не с кем, не о чем, не к кому, некому...).",
    type: "multiple_choice",
    questions: [
      {
        sentence: "На этой улице нет ресторана, здесь ... пообедать.",
        options: ["негде", "нечего", "некому"],
        correct: "негде",
        viet: "Trên phố này không có nhà hàng, ở đây không có chỗ để ăn trưa.",
        why: "негде = нет места, где пообедать"
      },
      {
        sentence: "В воскресенье вечером здесь ... пойти потанцевать.",
        options: ["некуда", "негде", "нечего"],
        correct: "некуда",
        viet: "Tối chủ nhật ở đây không có chỗ nào để đi nhảy.",
        why: "некуда = нет места, куда пойти (hướng tới)"
      },
      {
        sentence: "У Саши день рождения, а мне ... подарить ему.",
        options: ["нечего", "некого", "некому"],
        correct: "нечего",
        viet: "Hôm nay là sinh nhật Sasha, mà tôi không có gì để tặng anh ấy.",
        why: "нечего = нет ничего, что можно подарить"
      },
      {
        sentence: "Я забыла ручку, мне ... писать.",
        options: ["нечем", "нечего", "не с чем"],
        correct: "нечем",
        viet: "Tôi quên bút, tôi không có gì để viết (không có công cụ).",
        why: "нечем = нет инструмента (T.п)"
      },
      {
        sentence: "Я здесь никого не знаю, мне ... поговорить.",
        options: ["не с кем", "некому", "нечего"],
        correct: "не с кем",
        viet: "Tôi không quen ai ở đây, tôi không có ai để nói chuyện.",
        why: "не с кем = нет человека, с которым поговорить"
      },
      {
        sentence: "Ирина только недавно приехала сюда, она ещё никого здесь не знает, ей ... обратиться за помощью.",
        options: ["не к кому", "некому", "не с кем"],
        correct: "не к кому",
        viet: "Irina mới đến đây, cô ấy không biết ai, không có ai để nhờ giúp đỡ.",
        why: "не к кому = нет человека, к которому обратиться (giới từ «к»)"
      },
      {
        sentence: "Чему ты радуешься? ... радоваться!",
        options: ["Нечему", "Нечего", "Не о чем"],
        correct: "Нечему",
        viet: "Bạn vui mừng về điều gì? Không có gì để vui!",
        why: "нечему = нет ничего, чему радоваться (D.п)"
      },
      {
        sentence: "Петру ... ждать писем.",
        options: ["не от кого", "некого", "не с кем"],
        correct: "не от кого",
        viet: "Peter không có ai để mong nhận thư.",
        why: "не от кого = нет человека, от которого ждать (giới từ «от»)"
      },
      {
        sentence: "В холодильнике ничего нет, есть ..., надо идти в магазин.",
        options: ["нечего", "негде", "некуда"],
        correct: "нечего",
        viet: "Tủ lạnh không có gì, không có gì để ăn, phải đi siêu thị.",
        why: "нечего = нет ничего, что можно есть"
      },
      {
        sentence: "Зачем ты собираешься ехать туда? Тебе ... туда ехать!",
        options: ["незачем", "некуда", "некогда"],
        correct: "незачем",
        viet: "Sao bạn định đến đó làm gì? Bạn không có lý do gì để đến đó!",
        why: "незачем = нет причины (không có lý do gì)"
      },
      {
        sentence: "Мне очень нужны деньги, но ... занять такую сумму.",
        options: ["не у кого", "некого", "не с кем"],
        correct: "не у кого",
        viet: "Tôi rất cần tiền, nhưng không có ai để vay số tiền đó.",
        why: "не у кого = нет человека, у которого занять (giới từ «у»)"
      },
      {
        sentence: "Нет ни молока, ни сахара, ни лимона, ни конфет. Чай пить ...",
        options: ["не с чем", "нечего", "нечем"],
        correct: "не с чем",
        viet: "Không có sữa, đường, chanh, kẹo. Không có gì để uống trà cùng.",
        why: "не с чем = нет ничего, с чем пить (giới từ «с»)"
      },
      {
        sentence: "Друзей у него нет, посоветоваться ему ...",
        options: ["не с кем", "некому", "не о чем"],
        correct: "не с кем",
        viet: "Anh ấy không có bạn bè, không có ai để hỏi ý kiến.",
        why: "не с кем = нет человека, с которым посоветоваться"
      },
      {
        sentence: "У меня нет времени обсуждать это с вами. Мне ...",
        options: ["некогда", "нечего", "негде"],
        correct: "некогда",
        viet: "Tôi không có thời gian để thảo luận điều này với bạn. Tôi không có thời gian.",
        why: "некогда = нет времени (trạng từ chỉ thời gian)"
      },
    ]
  },
  {
    id: "ex_m13", num: 13,
    title: "Упражнение 13 — Вставьте частицы не или ни",
    description: "Вместо точек вставьте частицы не или ни. Chú ý: не + động từ / ни + đại từ phủ định.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Вечерами Миша ... куда не ходит.",
        options: ["ни (никуда)", "не (некуда)", "ни (нигде)"],
        correct: "ни (никуда)",
        viet: "Buổi tối Misha không đi đâu cả.",
        why: "никуда не ходит — ни viết liền với куда = никуда"
      },
      {
        sentence: "Мне ... откуда ждать писем.",
        options: ["не (неоткуда)", "ни (ниоткуда)", "не (нечего)"],
        correct: "не (неоткуда)",
        viet: "Tôi không có ai/chỗ nào để mong nhận thư.",
        why: "неоткуда = не + откуда (không có nơi từ đó) — viết liền"
      },
      {
        sentence: "Тебе ... о чем беспокоиться.",
        options: ["не (не о чем)", "ни (ни о чём)", "не (нечего)"],
        correct: "не (не о чем)",
        viet: "Bạn không có gì để lo lắng.",
        why: "не о чем беспокоиться — cấu trúc không thể hành động (viết rời vì có «о»)"
      },
      {
        sentence: "«Уж ... жду от жизни ... чего я» (М.Ю. Лермонтов).",
        options: ["не / ни (не жду / ничего)", "ни / не (ни жду / нечего)", "не / не (не жду / нечего)"],
        correct: "не / ни (не жду / ничего)",
        viet: "«Tôi không còn mong đợi gì từ cuộc sống nữa» (Lermontov).",
        why: "не жду (phủ định động từ) + ничего (đại từ phủ định = ни + что)"
      },
      {
        sentence: "«И скучно, и грустно, и ... кому руку подать» (М.Ю. Лермонтов).",
        options: ["не (не кому = некому)", "ни (никому)", "не (нечего)"],
        correct: "не (не кому = некому)",
        viet: "«Chán và buồn, và không có ai để chìa tay ra» (Lermontov).",
        why: "некому = не + кому (không ai nhận) — cấu trúc không thể hành động"
      },
      {
        sentence: "На мой вопрос Игорь ... чего не ответил.",
        options: ["ни (ничего)", "не (нечего)", "ни (нигде)"],
        correct: "ни (ничего)",
        viet: "Igor đã không trả lời gì cho câu hỏi của tôi cả.",
        why: "ничего не ответил — ни + что = ничего (phủ định bổ ngữ)"
      },
      {
        sentence: "Ему ... чего было сказать.",
        options: ["не (нечего)", "ни (ничего)", "не (не о чем)"],
        correct: "не (нечего)",
        viet: "Anh ấy không có gì để nói.",
        why: "нечего было сказать — cấu trúc không thể hành động (viết liền)"
      },
      {
        sentence: "Виктор ... чем не интересуется, кроме математики.",
        options: ["ни (ничем)", "не (нечем)", "ни (нигде)"],
        correct: "ни (ничем)",
        viet: "Viktor không quan tâm đến gì cả ngoài toán học.",
        why: "ничем не интересуется — ни + чем = ничем (phủ định T.п)"
      },
      {
        sentence: "Мне ... чем писать, я забыла ручку дома.",
        options: ["не (нечем)", "ни (ничем)", "не (нечего)"],
        correct: "не (нечем)",
        viet: "Tôi không có gì để viết, tôi để quên bút ở nhà.",
        why: "нечем писать = không có công cụ để viết (viết liền)"
      },
      {
        sentence: "Ирина ... кому не верит.",
        options: ["ни (никому)", "не (некому)", "ни (нигде)"],
        correct: "ни (никому)",
        viet: "Irina không tin ai cả.",
        why: "никому не верит — ни + кому = никому (phủ định D.п)"
      },
      {
        sentence: "Елена очень одинока. Ей ... с кем поговорить, ... с кем посоветоваться.",
        options: ["не / не (не с кем / не с кем)", "ни / ни (ни с кем / ни с кем)", "не / ни"],
        correct: "не / не (не с кем / не с кем)",
        viet: "Elena rất cô đơn. Cô ấy không có ai để nói chuyện, không có ai để hỏi ý kiến.",
        why: "не с кем + не с кем — cấu trúc không thể hành động (viết rời)"
      },
      {
        sentence: "Алексей ... с кем не советуется, всё решает сам.",
        options: ["ни (ни с кем)", "не (не с кем)", "ни (нигде)"],
        correct: "ни (ни с кем)",
        viet: "Alexey không hỏi ý kiến ai, tự mình giải quyết tất cả.",
        why: "ни с кем не советуется — phủ định hành động đã thực hiện (так не делает)"
      },
    ]
  },
  {
    id: "ex_m14", num: 14,
    title: "Упражнение 14 — Преобразование (ни...не → не...)",
    description: "Измените предложения по образцу. Образец: Я никому не пишу письма. — Мне некому писать письма.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Артём ни с кем не разговаривает. → ...",
        options: ["Артёму не с кем разговаривать", "Артёму некого разговаривать", "Артёму нечего говорить"],
        correct: "Артёму не с кем разговаривать",
        viet: "Artem không nói chuyện với ai. → Artem không có ai để nói chuyện.",
        why: "ни с кем не разговаривает → не с кем разговаривать (đổi chủ thể thành D.п)"
      },
      {
        sentence: "Маша ни о чём не волнуется. → ...",
        options: ["Маше не о чём волноваться", "Маше нечего волноваться", "Маше некому волноваться"],
        correct: "Маше не о чём волноваться",
        viet: "Masha không lo lắng về điều gì. → Masha không có gì để lo lắng.",
        why: "ни о чём не волнуется → не о чем волноваться"
      },
      {
        sentence: "Мама никогда не отдыхает. → ...",
        options: ["Маме некогда отдыхать", "Маме нечего отдыхать", "Маме негде отдыхать"],
        correct: "Маме некогда отдыхать",
        viet: "Mẹ không bao giờ nghỉ ngơi. → Mẹ không có thời gian để nghỉ ngơi.",
        why: "никогда не отдыхает → некогда отдыхать (không có thời gian)"
      },
      {
        sentence: "Вечером дети ничего не делали. → ...",
        options: ["Детям вечером нечего было делать", "Детям некому было делать", "Детям негде было делать"],
        correct: "Детям вечером нечего было делать",
        viet: "Buổi tối lũ trẻ không làm gì. → Buổi tối lũ trẻ không có gì để làm.",
        why: "ничего не делали → нечего было делать"
      },
      {
        sentence: "Я никуда не поеду летом во время каникул. → ...",
        options: ["Мне некуда ехать летом во время каникул", "Мне нечего делать летом", "Мне незачем ехать"],
        correct: "Мне некуда ехать летом во время каникул",
        viet: "Tôi sẽ không đi đâu vào mùa hè trong kỳ nghỉ. → Tôi không có chỗ nào để đến vào mùa hè.",
        why: "никуда не поеду → некуда ехать"
      },
      {
        sentence: "В магазине они ничего не купили на ужин. → ...",
        options: ["Им нечего было купить на ужин", "Им некому было купить", "Им незачем было идти"],
        correct: "Им нечего было купить на ужин",
        viet: "Trong cửa hàng họ không mua gì cho bữa tối. → Họ không có gì để mua cho bữa tối.",
        why: "ничего не купили → нечего было купить"
      },
      {
        sentence: "Никто не написал Наташе о последних событиях. → ...",
        options: ["Наташе некому было написать о последних событиях", "Наташе нечего было написать", "Наташе негде было читать"],
        correct: "Наташе некому было написать о последних событиях",
        viet: "Không ai viết thư cho Natasha về những sự kiện gần đây. → Natasha không có ai viết thư về những sự kiện gần đây.",
        why: "никто не написал → некому было написать"
      },
      {
        sentence: "Я никому не рассказываю о своих проблемах. → ...",
        options: ["Мне некому рассказать о своих проблемах", "Мне нечего рассказать", "Мне не о чем рассказывать"],
        correct: "Мне некому рассказать о своих проблемах",
        viet: "Tôi không kể chuyện cho ai về vấn đề của mình. → Tôi không có ai để kể chuyện.",
        why: "никому не рассказываю → некому рассказать"
      },
      {
        sentence: "В этой маленькой деревне молодёжь вечерами никуда не ходит. → ...",
        options: ["В этой маленькой деревне молодёжи вечерами некуда ходить", "Молодёжи нечего делать", "Молодёжи негде жить"],
        correct: "В этой маленькой деревне молодёжи вечерами некуда ходить",
        viet: "Ở ngôi làng nhỏ này buổi tối thanh niên không đi đâu. → Buổi tối ở ngôi làng nhỏ này thanh niên không có chỗ nào để đi.",
        why: "никуда не ходит → некуда ходить"
      },
      {
        sentence: "Катя ничего не подарила брату на день рождения. → ...",
        options: ["Кате нечего было подарить брату на день рождения", "Кате некому было дарить", "Кате незачем было дарить"],
        correct: "Кате нечего было подарить брату на день рождения",
        viet: "Katya không tặng gì cho anh trai nhân dịp sinh nhật. → Katya không có gì để tặng anh trai.",
        why: "ничего не подарила → нечего было подарить"
      },
    ]
  },
  {
    id: "ex_m15", num: 15,
    title: "Упражнение 15 — Антонимичные предложения (не с кем → есть с кем)",
    description: "Прочитайте антонимичные предложения. Chọn câu khẳng định tương ứng với câu phủ định cho sẵn.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Мне не с кем пойти в кино. → ...",
        options: ["Мне есть с кем пойти в кино", "Мне можно пойти в кино", "Мне нужно пойти в кино"],
        correct: "Мне есть с кем пойти в кино",
        viet: "Tôi không có ai để đi xem phim. → Tôi có người để đi xem phim.",
        why: "не с кем → есть с кем (khẳng định bằng cách thêm «есть»)"
      },
      {
        sentence: "Тебе не о чем волноваться. → ...",
        options: ["Тебе есть о чём волноваться", "Тебе можно волноваться", "Тебе нужно волноваться"],
        correct: "Тебе есть о чём волноваться",
        viet: "Bạn không có gì để lo lắng. → Bạn có điều để lo lắng.",
        why: "не о чем → есть о чём"
      },
      {
        sentence: "В этом городке негде отдохнуть и потанцевать. → ...",
        options: ["В этом городке есть где отдохнуть и потанцевать", "В этом городке можно отдохнуть", "В этом городке нужно отдохнуть"],
        correct: "В этом городке есть где отдохнуть и потанцевать",
        viet: "Ở thị trấn này không có chỗ để nghỉ ngơi và nhảy. → Ở thị trấn này có chỗ để nghỉ ngơi và nhảy.",
        why: "негде → есть где"
      },
      {
        sentence: "Нам не о чем было говорить. → ...",
        options: ["Нам было о чём говорить", "Нам можно было говорить", "Нам нужно было говорить"],
        correct: "Нам было о чём говорить",
        viet: "Chúng tôi không có gì để nói chuyện. → Chúng tôi có điều để nói chuyện.",
        why: "не о чем было → было о чём (thì quá khứ: «было» thay «есть»)"
      },
    ]
  },
  {
    id: "ex_m16", num: 16,
    title: "Упражнение 16 — Антонимичные предложения (некому → есть кому)",
    description: "Замените данные предложения антонимичными. Образец: Мне некому писать письма. — Мне есть кому писать письма.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Мне некому подарить свои детские книги. → ...",
        options: ["Мне есть кому подарить свои детские книги", "Мне можно подарить книги", "Мне нужно подарить книги"],
        correct: "Мне есть кому подарить свои детские книги",
        viet: "Tôi không có ai để tặng sách thiếu nhi của mình. → Tôi có người để tặng sách thiếu nhi.",
        why: "некому → есть кому"
      },
      {
        sentence: "После работы здесь негде отдохнуть. → ...",
        options: ["После работы здесь есть где отдохнуть", "После работы здесь можно отдохнуть", "После работы здесь нужно отдохнуть"],
        correct: "После работы здесь есть где отдохнуть",
        viet: "Sau giờ làm ở đây không có chỗ để nghỉ ngơi. → Sau giờ làm ở đây có chỗ để nghỉ ngơi.",
        why: "негде → есть где"
      },
      {
        sentence: "Ребёнку не с кем погулять. → ...",
        options: ["Ребёнку есть с кем погулять", "Ребёнок может погулять", "Ребёнку нужно погулять"],
        correct: "Ребёнку есть с кем погулять",
        viet: "Đứa trẻ không có ai để đi dạo cùng. → Đứa trẻ có người để đi dạo cùng.",
        why: "не с кем → есть с кем"
      },
      {
        sentence: "Об этой старой женщине некому позаботиться. → ...",
        options: ["Об этой старой женщине есть кому позаботиться", "Эта старая женщина может заботиться о себе", "Об этой женщине нужно позаботиться"],
        correct: "Об этой старой женщине есть кому позаботиться",
        viet: "Không có ai chăm sóc người phụ nữ già này. → Có người chăm sóc người phụ nữ già này.",
        why: "некому → есть кому"
      },
      {
        sentence: "Нам не о чем спорить. → ...",
        options: ["Нам есть о чём спорить", "Нам можно спорить", "Нам нужно спорить"],
        correct: "Нам есть о чём спорить",
        viet: "Chúng tôi không có gì để tranh luận. → Chúng tôi có điều để tranh luận.",
        why: "не о чем → есть о чём"
      },
      {
        sentence: "Девочке нечем заниматься после уроков. → ...",
        options: ["Девочке есть чем заниматься после уроков", "Девочка может заниматься", "Девочке нужно заниматься"],
        correct: "Девочке есть чем заниматься после уроков",
        viet: "Cô bé không có gì để làm sau giờ học. → Cô bé có thứ để làm sau giờ học.",
        why: "нечем → есть чем"
      },
      {
        sentence: "Ларисе не к кому обратиться за помощью. → ...",
        options: ["Ларисе есть к кому обратиться за помощью", "Лариса может обратиться за помощью", "Ларисе нужно обратиться за помощью"],
        correct: "Ларисе есть к кому обратиться за помощью",
        viet: "Larisa không có ai để nhờ giúp đỡ. → Larisa có người để nhờ giúp đỡ.",
        why: "не к кому → есть к кому"
      },
      {
        sentence: "Михаилу не с кем посоветоваться о своих проблемах. → ...",
        options: ["Михаилу есть с кем посоветоваться о своих проблемах", "Михаил может посоветоваться", "Михаилу нужно посоветоваться"],
        correct: "Михаилу есть с кем посоветоваться о своих проблемах",
        viet: "Mikhail không có ai để hỏi ý kiến về vấn đề của mình. → Mikhail có người để hỏi ý kiến.",
        why: "не с кем → есть с кем"
      },
    ]
  },
  {
    id: "ex_m17", num: 17,
    title: "Упражнение 17 — Замените сложные предложения простыми (есть с кем...)",
    description: "Сложные предложения замените синонимичными простыми. Образец: Есть люди, с которыми Нина может посоветоваться. — Нине есть с кем посоветоваться.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Есть люди, с которыми я могу поговорить о своих проблемах. → ...",
        options: ["Мне есть с кем поговорить о своих проблемах", "Я могу поговорить о проблемах", "Мне нужно с кем поговорить"],
        correct: "Мне есть с кем поговорить о своих проблемах",
        viet: "Có những người mà tôi có thể nói chuyện về vấn đề của mình. → Tôi có người để nói chuyện về vấn đề của mình.",
        why: "Есть люди, с которыми → есть с кем (rút gọn mệnh đề quan hệ)"
      },
      {
        sentence: "Есть люди, к которым Михаил может прийти за советом. → ...",
        options: ["Михаилу есть к кому прийти за советом", "Михаил может прийти за советом", "Михаилу нужно обратиться за советом"],
        correct: "Михаилу есть к кому прийти за советом",
        viet: "Có những người mà Mikhail có thể đến để xin lời khuyên. → Mikhail có người để đến xin lời khuyên.",
        why: "Есть люди, к которым → есть к кому"
      },
      {
        sentence: "Есть люди, у которых Таня может попросить помощь. → ...",
        options: ["Тане есть у кого попросить помощь", "Таня может попросить помощь", "Тане нужно попросить помощь"],
        correct: "Тане есть у кого попросить помощь",
        viet: "Có những người mà Tanya có thể xin sự giúp đỡ. → Tanya có người để xin giúp đỡ.",
        why: "Есть люди, у которых → есть у кого"
      },
      {
        sentence: "Есть люди, с которыми Алла может поехать отдыхать. → ...",
        options: ["Алле есть с кем поехать отдыхать", "Алла может поехать отдыхать", "Алле нужно поехать отдыхать"],
        correct: "Алле есть с кем поехать отдыхать",
        viet: "Có những người mà Alla có thể cùng đi nghỉ. → Alla có người để đi nghỉ cùng.",
        why: "Есть люди, с которыми → есть с кем"
      },
      {
        sentence: "Есть люди, с которыми я могу всё обсудить. → ...",
        options: ["Мне есть с кем всё обсудить", "Я могу обсудить всё", "Мне нужно обсудить с кем-то"],
        correct: "Мне есть с кем всё обсудить",
        viet: "Có những người mà tôi có thể thảo luận tất cả. → Tôi có người để thảo luận tất cả.",
        why: "Есть люди, с которыми → есть с кем"
      },
      {
        sentence: "Есть люди, к которым Сергей может поехать на дачу отдохнуть. → ...",
        options: ["Сергею есть к кому поехать на дачу отдохнуть", "Сергей может поехать на дачу", "Сергею нужно поехать на дачу"],
        correct: "Сергею есть к кому поехать на дачу отдохнуть",
        viet: "Có những người mà Sergey có thể đến nhà nghỉ dưỡng để nghỉ ngơi. → Sergey có người để đến nhà nghỉ cùng.",
        why: "Есть люди, к которым → есть к кому"
      },
    ]
  },
  {
    id: "ex_m18", num: 18,
    title: "Упражнение 18 — Замените сложные предложения простыми (не с кем...)",
    description: "Замените данные сложные предложения синонимичными простыми. Образец: Нет людей, с которыми я могу посоветоваться. — Мне не с кем посоветоваться.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Нет людей, с которыми я могу обсудить эту ситуацию. → ...",
        options: ["Мне не с кем обсудить эту ситуацию", "Я не могу обсудить ситуацию", "Мне нечего обсуждать"],
        correct: "Мне не с кем обсудить эту ситуацию",
        viet: "Không có người nào mà tôi có thể thảo luận về tình huống này. → Tôi không có ai để thảo luận về tình huống này.",
        why: "Нет людей, с которыми → не с кем"
      },
      {
        sentence: "Нет людей, у которых Саша может занять деньги. → ...",
        options: ["Саше не у кого занять деньги", "Саша не может занять деньги", "Саше нечего занимать"],
        correct: "Саше не у кого занять деньги",
        viet: "Không có người nào mà Sasha có thể vay tiền. → Sasha không có ai để vay tiền.",
        why: "Нет людей, у которых → не у кого"
      },
      {
        sentence: "Нет человека, к которому Виктор может обратиться в трудную минуту. → ...",
        options: ["Виктору не к кому обратиться в трудную минуту", "Виктор не может обратиться за помощью", "Виктору некого просить о помощи"],
        correct: "Виктору не к кому обратиться в трудную минуту",
        viet: "Không có người nào mà Viktor có thể nhờ trong lúc khó khăn. → Viktor không có ai để nhờ trong lúc khó khăn.",
        why: "Нет человека, к которому → не к кому"
      },
      {
        sentence: "Нет человека, которому Ирина может рассказать о том, что случилось. → ...",
        options: ["Ирине некому рассказать о том, что случилось", "Ирина не может рассказать", "Ирине нечего рассказывать"],
        correct: "Ирине некому рассказать о том, что случилось",
        viet: "Không có người nào mà Irina có thể kể về những gì đã xảy ra. → Irina không có ai để kể về những gì đã xảy ra.",
        why: "Нет человека, которому → некому (D.п viết liền)"
      },
      {
        sentence: "Нет людей, о которых Вера может заботиться. → ...",
        options: ["Вере не о ком заботиться", "Вера не может заботиться", "Вере нечего делать"],
        correct: "Вере не о ком заботиться",
        viet: "Không có người nào mà Vera có thể chăm sóc. → Vera không có ai để chăm sóc.",
        why: "Нет людей, о которых → не о ком (viết rời vì có giới từ «о»)"
      },
      {
        sentence: "Нет людей, от которых я могу ждать писем. → ...",
        options: ["Мне не от кого ждать писем", "Я не могу ждать писем", "Мне нечего ждать"],
        correct: "Мне не от кого ждать писем",
        viet: "Không có người nào mà tôi có thể mong nhận thư. → Tôi không có ai để mong nhận thư.",
        why: "Нет людей, от которых → не от кого (viết rời vì có giới từ «от»)"
      },
    ]
  },
];

// ===== PHẦN 2: УПОТРЕБЛЕНИЕ НЕОПРЕДЕЛЁННЫХ МЕСТОИМЕНИЙ И НАРЕЧИЙ =====
export const neopredelennye_exercises = [
  {
    id: "ex_n1", num: 1,
    title: "Упражнение 1 — Значение частиц -то и -нибудь",
    description: "Прочитайте предложения и найдите синонимичные части. Chọn nghĩa đúng của câu có đại từ với hậu tố -то hoặc -нибудь.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Вам кто-то звонил.",
        options: ["Вам звонили, но я не знаю кто.", "Пусть кто-нибудь позвонит вам.", "Вы должны кому-то позвонить."],
        correct: "Вам звонили, но я не знаю кто.",
        viet: "Có ai đó gọi điện cho bạn (nhưng tôi không biết ai).",
        why: "-то = ai đó cụ thể nhưng người nói không biết/không nhớ"
      },
      {
        sentence: "Мне кажется, что я где-то уже видела вас.",
        options: ["Мне кажется, что я уже видела вас, но я не помню где.", "Мне нужно где-нибудь найти вас.", "Я хочу увидеть вас где-нибудь."],
        correct: "Мне кажется, что я уже видела вас, но я не помню где.",
        viet: "Tôi cảm thấy như tôi đã gặp bạn ở đâu đó (nhưng không nhớ chỗ nào).",
        why: "-то = ở một chỗ cụ thể nhưng người nói không nhớ"
      },
      {
        sentence: "Дайте мне какую-нибудь ручку записать ваш номер телефона.",
        options: ["Дайте мне любую (всё равно какую) ручку записать ваш номер телефона.", "Дайте мне конкретную ручку, которую я видела.", "Я знаю какую ручку мне нужно."],
        correct: "Дайте мне любую (всё равно какую) ручку записать ваш номер телефона.",
        viet: "Cho tôi cái bút nào đó (bất kỳ cái nào cũng được) để ghi số điện thoại của bạn.",
        why: "-нибудь = bất kỳ, không quan trọng cái nào, sự lựa chọn chưa được thực hiện"
      },
      {
        sentence: "Давай куда-нибудь пойдём погуляем.",
        options: ["Давай пойдём погуляем, мне всё равно куда.", "Я знаю куда нам пойти.", "Мы уже решили куда пойти."],
        correct: "Давай пойдём погуляем, мне всё равно куда.",
        viet: "Hãy đi dạo đến đâu đó đi (đâu cũng được, tôi không quan trọng).",
        why: "-нибудь = đâu cũng được, người nói không có chỗ cụ thể trong đầu"
      },
    ]
  },
  {
    id: "ex_n2", num: 2,
    title: "Упражнение 2 — Передайте содержание с частицей -то",
    description: "Передайте содержание данных предложений, используя местоимения и наречия с частицей -то. Образец: Когда вас не было дома, к вам приходили, я не знаю кто. — Когда вас не было дома, к вам кто-то приходил.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Мне уже рассказывали об этом, я не помню кто. → ...",
        options: ["Мне кто-то уже рассказывал об этом.", "Мне никто не рассказывал об этом.", "Мне нужно рассказать об этом кому-то."],
        correct: "Мне кто-то уже рассказывал об этом.",
        viet: "Đã có ai đó kể cho tôi nghe về điều này (nhưng tôi không nhớ ai).",
        why: "кто-то = ai đó cụ thể nhưng người nói không nhớ"
      },
      {
        sentence: "Летом Саша уезжал из Москвы, не знаю куда. → ...",
        options: ["Летом Саша куда-то уезжал из Москвы.", "Летом Саша никуда не уезжал.", "Летом Саша хотел куда-нибудь уехать."],
        correct: "Летом Саша куда-то уезжал из Москвы.",
        viet: "Mùa hè Sasha đã đi đâu đó từ Moscow (nhưng không biết đi đâu).",
        why: "куда-то = đến một chỗ cụ thể nhưng người nói không biết"
      },
      {
        sentence: "Когда я пришла домой, сестра говорила по телефону. С кем она говорила, я не знаю. → ...",
        options: ["Когда я пришла домой, сестра с кем-то говорила по телефону.", "Когда я пришла домой, сестра ни с кем не говорила.", "Сестра хотела с кем-нибудь поговорить."],
        correct: "Когда я пришла домой, сестра с кем-то говорила по телефону.",
        viet: "Khi tôi về nhà, em gái đang nói chuyện điện thoại với ai đó (không biết là ai).",
        why: "с кем-то = với ai đó cụ thể nhưng người nói không biết"
      },
      {
        sentence: "Ваш брат дома? - Нет, он ушёл, куда — я не знаю. → ...",
        options: ["Нет, он куда-то ушёл.", "Нет, он никуда не ушёл.", "Нет, он хотел куда-нибудь уйти."],
        correct: "Нет, он куда-то ушёл.",
        viet: "Không, anh ấy đã đi đâu đó (không biết chỗ nào).",
        why: "куда-то = đến một chỗ cụ thể nhưng người nói không biết"
      },
      {
        sentence: "Я оставила очки. Где — я не помню. → ...",
        options: ["Я где-то оставила очки.", "Я нигде не оставила очки.", "Я хочу где-нибудь оставить очки."],
        correct: "Я где-то оставила очки.",
        viet: "Tôi đã để kính ở đâu đó (không nhớ chỗ nào).",
        why: "где-то = ở một chỗ cụ thể nhưng người nói không nhớ"
      },
      {
        sentence: "Виктор сидит и читает газету, я не знаю какую. → ...",
        options: ["Виктор сидит и читает какую-то газету.", "Виктор не читает никакую газету.", "Виктор хочет прочитать какую-нибудь газету."],
        correct: "Виктор сидит и читает какую-то газету.",
        viet: "Viktor đang ngồi đọc tờ báo nào đó (không biết tờ nào).",
        why: "какую-то = tờ báo cụ thể nhưng người nói không biết tờ nào"
      },
      {
        sentence: "Они долго сидели и разговаривали, о чём — я не знаю. → ...",
        options: ["Они долго сидели и о чём-то разговаривали.", "Они ни о чём не разговаривали.", "Они хотели о чём-нибудь поговорить."],
        correct: "Они долго сидели и о чём-то разговаривали.",
        viet: "Họ ngồi nói chuyện lâu về điều gì đó (không biết điều gì).",
        why: "о чём-то = về điều gì đó cụ thể nhưng người nói không biết"
      },
      {
        sentence: "Николай сердится на меня, но за что — я не знаю. → ...",
        options: ["Николай за что-то сердится на меня.", "Николай ни за что не сердится.", "Николай хочет за что-нибудь рассердиться."],
        correct: "Николай за что-то сердится на меня.",
        viet: "Nikolai đang giận tôi vì điều gì đó (không biết vì sao).",
        why: "за что-то = vì điều gì đó cụ thể nhưng người nói không biết"
      },
    ]
  },
  {
    id: "ex_n3", num: 3,
    title: "Упражнение 3 — Передайте содержание с частицей -нибудь",
    description: "Передайте содержание данных предложений, используя местоимения и наречия с частицей -нибудь. Образец: Пусть один из вас (мне всё равно кто) закроет окно. — Пусть кто-нибудь из вас закроет окно.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Дай мне любой карандаш. → ...",
        options: ["Дай мне какой-нибудь карандаш.", "Дай мне какой-то карандаш.", "Дай мне этот карандаш."],
        correct: "Дай мне какой-нибудь карандаш.",
        viet: "Cho tôi cái bút chì nào đó (bất kỳ cái nào cũng được).",
        why: "-нибудь = bất kỳ, lựa chọn chưa được quyết định/không quan trọng"
      },
      {
        sentence: "Давай сегодня не будем обедать дома, пообедаем в городе, всё равно где. → ...",
        options: ["Давай сегодня пообедаем где-нибудь в городе.", "Давай сегодня пообедаем где-то в городе.", "Давай пообедаем в том ресторане."],
        correct: "Давай сегодня пообедаем где-нибудь в городе.",
        viet: "Hôm nay chúng ta hãy ăn trưa ở đâu đó trong thành phố (đâu cũng được).",
        why: "-нибудь = đâu cũng được, người nói không có chỗ cụ thể"
      },
      {
        sentence: "Я устала, давай остановимся отдохнуть в любом мотеле. → ...",
        options: ["Я устала, давай остановимся отдохнуть в каком-нибудь мотеле.", "Я устала, давай остановимся в каком-то мотеле.", "Давай остановимся в том мотеле."],
        correct: "Я устала, давай остановимся отдохнуть в каком-нибудь мотеле.",
        viet: "Tôi mệt rồi, hãy dừng lại nghỉ ở nhà nghỉ nào đó (cái nào cũng được).",
        why: "-нибудь = bất kỳ nhà nghỉ nào, chưa có sự lựa chọn cụ thể"
      },
      {
        sentence: "Расскажи мне о своём родном городе, всё равно что. Мне всё интересно. → ...",
        options: ["Расскажи мне что-нибудь о своём родном городе.", "Расскажи мне что-то о своём родном городе.", "Расскажи мне об этом конкретно."],
        correct: "Расскажи мне что-нибудь о своём родном городе.",
        viet: "Kể cho tôi nghe điều gì đó về thành phố quê hương của bạn (cái gì cũng được).",
        why: "-нибудь = điều gì cũng được, người nói không cần điều cụ thể"
      },
      {
        sentence: "Давай летом поедем на море, мне всё равно куда. → ...",
        options: ["Давай летом поедем куда-нибудь на море.", "Давай летом поедем куда-то на море.", "Давай поедем в это конкретное место."],
        correct: "Давай летом поедем куда-нибудь на море.",
        viet: "Mùa hè hãy đi biển đâu đó (đâu cũng được).",
        why: "-нибудь = đâu cũng được, lựa chọn chưa được quyết định"
      },
      {
        sentence: "Это сложный вопрос, тебе нужно посоветоваться, выбери с кем. → ...",
        options: ["Это сложный вопрос, тебе нужно с кем-нибудь посоветоваться.", "Это сложный вопрос, тебе нужно с кем-то посоветоваться.", "Ты уже знаешь с кем посоветоваться."],
        correct: "Это сложный вопрос, тебе нужно с кем-нибудь посоветоваться.",
        viet: "Đây là câu hỏi khó, bạn cần hỏi ý kiến ai đó (ai cũng được, hãy chọn đi).",
        why: "-нибудь = ai cũng được, người nghe chưa có sự lựa chọn cụ thể"
      },
    ]
  },
  {
    id: "ex_n4", num: 4,
    title: "Упражнение 4 — -то или -нибудь?",
    description: "Вместо точек вставьте частицы -то или -нибудь.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Сколько у тебя детективов! Дай мне почитать какой-...!",
        options: ["-нибудь (любой)", "-то (конкретный)"],
        correct: "-нибудь (любой)",
        viet: "Cậu có nhiều truyện trinh thám thế! Cho tớ mượn đọc cuốn nào đó (cuốn nào cũng được)!",
        why: "-нибудь = bất kỳ cuốn nào, người nói không có trong đầu cuốn cụ thể"
      },
      {
        sentence: "Когда Никита пришёл к другу, тот лежал на диване и читал какую-... книгу.",
        options: ["-то (конкретную, неизвестную)", "-нибудь (любую)"],
        correct: "-то (конкретную, неизвестную)",
        viet: "Khi Nikita đến nhà bạn, người đó đang nằm đọc một cuốn sách nào đó (cụ thể nhưng người nói không biết cuốn nào).",
        why: "-то = cuốn sách cụ thể nhưng người nói không biết/không nhớ cuốn nào"
      },
      {
        sentence: "Ирина где-... оставила ключи от квартиры.",
        options: ["-то (конкретное место, забытое)", "-нибудь (любое место)"],
        correct: "-то (конкретное место, забытое)",
        viet: "Irina đã để quên chìa khóa ở đâu đó (chỗ cụ thể nhưng cô ấy không nhớ).",
        why: "-то = chỗ cụ thể nhưng người nói/người thực hiện không nhớ"
      },
      {
        sentence: "Давай поужинаем где-... по дороге домой.",
        options: ["-нибудь (всё равно где)", "-то (в конкретном месте)"],
        correct: "-нибудь (всё равно где)",
        viet: "Hãy ăn tối ở đâu đó trên đường về nhà (đâu cũng được).",
        why: "-нибудь = đâu cũng được, lựa chọn chưa được quyết định"
      },
      {
        sentence: "Мне кажется, без меня кто-... входил в мою комнату.",
        options: ["-то (конкретный, неизвестный)", "-нибудь (любой)"],
        correct: "-то (конкретный, неизвестный)",
        viet: "Tôi cảm thấy như có ai đó đã vào phòng tôi khi tôi không có ở nhà (ai đó cụ thể nhưng không biết là ai).",
        why: "-то = ai đó cụ thể nhưng người nói không biết ai"
      },
      {
        sentence: "Сергей заболел. Пусть кто-... из вас зайдёт к нему.",
        options: ["-нибудь (всё равно кто)", "-то (конкретный)"],
        correct: "-нибудь (всё равно кто)",
        viet: "Sergey bị ốm. Hãy để ai đó trong các bạn đến thăm anh ấy (ai cũng được).",
        why: "-нибудь = ai cũng được, người nói không quan trọng ai cụ thể"
      },
      {
        sentence: "Я не хочу больше говорить о политике. Давай поговорим о чём-... другом.",
        options: ["-нибудь (всё равно о чём)", "-то (конкретном)"],
        correct: "-нибудь (всё равно о чём)",
        viet: "Tôi không muốn nói về chính trị nữa. Hãy nói về điều gì khác đi (điều gì cũng được).",
        why: "-нибудь = điều gì cũng được, người nói không có chủ đề cụ thể"
      },
      {
        sentence: "Вчера вечером Виктор и Николай о чём-... долго спорили.",
        options: ["-то (конкретном, неизвестном)", "-нибудь (любом)"],
        correct: "-то (конкретном, неизвестном)",
        viet: "Tối hôm qua Viktor và Nikolai tranh luận lâu về điều gì đó (chủ đề cụ thể nhưng người nói không biết).",
        why: "-то = chủ đề cụ thể nhưng người nói không biết là gì"
      },
      {
        sentence: "Лена обещала прийти ко мне, но почему-... не пришла.",
        options: ["-то (конкретная причина, неизвестная)", "-нибудь (любая причина)"],
        correct: "-то (конкретная причина, неизвестная)",
        viet: "Lena hứa sẽ đến nhà tôi, nhưng vì lý do nào đó đã không đến (lý do cụ thể nhưng người nói không biết).",
        why: "-то = lý do cụ thể nhưng người nói không biết lý do đó là gì"
      },
      {
        sentence: "Ты когда-нибудь был в Петербурге?",
        options: ["-нибудь (вопрос о факте, имело ли место)", "-то (конкретное время)"],
        correct: "-нибудь (вопрос о факте, имело ли место)",
        viet: "Bạn đã bao giờ đến Saint Petersburg chưa? (hỏi về việc đã từng xảy ra chưa)",
        why: "-нибудь trong câu hỏi = hỏi về việc hành động có xảy ra hay không"
      },
    ]
  },
];

// Append more exercises to neopredelennye_exercises
neopredelennye_exercises.push(
  {
    id: "ex_n5", num: 5,
    title: "Упражнение 5 — -нибудь в вопросах о факте",
    description: "Прочитайте предложения. С частицей -нибудь употребляются местоимения и наречия в вопросах, когда говорящего интересует: имело ли место данное действие или нет.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Вы где-нибудь отдыхали в этом году?",
        options: ["-нибудь (вопрос: было ли это?)", "-то (конкретное место)", "нигде (отрицание)"],
        correct: "-нибудь (вопрос: было ли это?)",
        viet: "Năm nay bạn có đi nghỉ ở đâu không? (hỏi xem hành động có xảy ra không)",
        why: "-нибудь trong câu hỏi = hỏi về việc hành động CÓ xảy ra hay KHÔNG"
      },
      {
        sentence: "Вы с кем-нибудь советовались о своём здоровье?",
        options: ["-нибудь (вопрос: советовались ли?)", "-то (конкретный человек)", "ни с кем (отрицание)"],
        correct: "-нибудь (вопрос: советовались ли?)",
        viet: "Bạn có hỏi ý kiến ai về sức khỏe của mình không?",
        why: "-нибудь в вопросе = интерес к тому, было ли это действие"
      },
      {
        sentence: "Вы читали какие-нибудь книги этого писателя?",
        options: ["-нибудь (вопрос: читали ли?)", "-то (конкретные книги)", "никакие (отрицание)"],
        correct: "-нибудь (вопрос: читали ли?)",
        viet: "Bạn có đọc cuốn sách nào của nhà văn này không?",
        why: "-нибудь в вопросе = hỏi xem hành động có xảy ra không"
      },
      {
        sentence: "Маша собирается поехать куда-нибудь летом?",
        options: ["-нибудь (вопрос: есть ли планы?)", "-то (конкретное место)", "никуда (отрицание)"],
        correct: "-нибудь (вопрос: есть ли планы?)",
        viet: "Mùa hè Masha có định đi đâu không?",
        why: "-нибудь в вопросе = hỏi về kế hoạch/ý định"
      },
      {
        sentence: "Дмитрий рассказывал вам что-нибудь о себе?",
        options: ["-нибудь (вопрос: рассказывал ли?)", "-то (конкретное)", "ничего (отрицание)"],
        correct: "-нибудь (вопрос: рассказывал ли?)",
        viet: "Dmitry có kể gì về bản thân cho bạn nghe không?",
        why: "-нибудь в вопросе = hỏi xem hành động có xảy ra không"
      },
      {
        sentence: "Мне кто-нибудь звонил?",
        options: ["-нибудь (вопрос: звонил ли кто-то?)", "-то (конкретный человек)", "никто (отрицание)"],
        correct: "-нибудь (вопрос: звонил ли кто-то?)",
        viet: "Có ai gọi điện cho tôi không?",
        why: "-нибудь в вопросе = hỏi về việc hành động CÓ xảy ra hay KHÔNG"
      },
    ]
  },
  {
    id: "ex_n6", num: 6,
    title: "Упражнение 6 — Восстановите вопросы с -нибудь",
    description: "Восстановите вопросы, опираясь на данные ответы. Употребите в них местоимения или наречия с частицей -нибудь.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "...? — Нет, я летом никуда не ездил.",
        options: ["Ты куда-нибудь ездил летом?", "Ты куда-то ездил летом?", "Куда ты ездил летом?"],
        correct: "Ты куда-нибудь ездил летом?",
        viet: "Câu hỏi phù hợp: Mùa hè bạn có đi đâu không? (Trả lời: Không, tôi không đi đâu cả.)",
        why: "-нибудь trong câu hỏi khi hỏi về việc hành động có xảy ra không"
      },
      {
        sentence: "...? — Да, вчера вечером я ходил в кино.",
        options: ["Ты куда-нибудь ходил вчера вечером?", "Куда-то ты ходил вчера?", "Ты никуда не ходил вчера?"],
        correct: "Ты куда-нибудь ходил вчера вечером?",
        viet: "Câu hỏi: Tối hôm qua bạn có đi đâu không? (Trả lời: Có, tôi đi xem phim.)",
        why: "-нибудь trong câu hỏi; câu trả lời có thể là да hoặc нет"
      },
      {
        sentence: "...? — Да, Игорь рассказал об этом отцу.",
        options: ["Игорь рассказал об этом кому-нибудь?", "Игорь кому-то рассказал?", "Игорь никому не рассказал?"],
        correct: "Игорь рассказал об этом кому-нибудь?",
        viet: "Câu hỏi: Liệu Igor có kể điều này cho ai không? (Trả lời: Có, anh ấy đã kể cho bố.)",
        why: "-нибудь trong câu hỏi hỏi về việc hành động có xảy ra không"
      },
      {
        sentence: "...? — Да, я купила на ужин рыбу.",
        options: ["Ты купила что-нибудь на ужин?", "Ты что-то купила?", "Ты ничего не купила?"],
        correct: "Ты купила что-нибудь на ужин?",
        viet: "Câu hỏi: Bạn có mua gì cho bữa tối không? (Trả lời: Có, tôi mua cá.)",
        why: "-нибудь trong câu hỏi = hỏi về việc hành động có xảy ra không"
      },
      {
        sentence: "...? — Нет, тебе никто не звонил.",
        options: ["Мне кто-нибудь звонил?", "Мне кто-то звонил?", "Мне никто не звонил?"],
        correct: "Мне кто-нибудь звонил?",
        viet: "Câu hỏi: Có ai gọi điện cho tôi không? (Trả lời: Không, không có ai gọi.)",
        why: "-нибудь trong câu hỏi khi hỏi CÓ hay KHÔNG"
      },
      {
        sentence: "...? — Да, я советовался с матерью.",
        options: ["Ты с кем-нибудь советовался?", "С кем-то ты советовался?", "Ты ни с кем не советовался?"],
        correct: "Ты с кем-нибудь советовался?",
        viet: "Câu hỏi: Bạn có hỏi ý kiến ai không? (Trả lời: Có, tôi đã hỏi mẹ.)",
        why: "-нибудь trong câu hỏi về việc hành động có xảy ra không"
      },
      {
        sentence: "...? — Да, я была в Петербурге в прошлом году.",
        options: ["Ты когда-нибудь была в Петербурге?", "Ты куда-то ездила?", "Ты была где-нибудь?"],
        correct: "Ты когда-нибудь была в Петербурге?",
        viet: "Câu hỏi: Bạn đã bao giờ đến Saint Petersburg chưa? (Trả lời: Có, năm ngoái tôi đã đến.)",
        why: "когда-нибудь trong câu hỏi = hỏi về kinh nghiệm/việc đã từng xảy ra"
      },
    ]
  },
  {
    id: "ex_n7", num: 7,
    title: "Упражнение 7 — Составьте вопросы с -нибудь",
    description: "Задайте вопросы (узнайте, имело место действие или нет) с местоимениями и наречиями с частицей -нибудь. Образец: ездить — Ты куда-нибудь ездил в субботу?",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Глагол: звонить. Составьте вопрос с -нибудь.",
        options: ["Ты кому-нибудь звонил сегодня?", "Ты кому-то звонил?", "Ты никому не звонил?"],
        correct: "Ты кому-нибудь звонил сегодня?",
        viet: "Động từ 'gọi điện' → Hôm nay bạn có gọi điện cho ai không?",
        why: "кому-нибудь = cho ai đó (câu hỏi về hành động)"
      },
      {
        sentence: "Глагол: советоваться. Составьте вопрос с -нибудь.",
        options: ["Ты с кем-нибудь советовался?", "Ты с кем-то советовался?", "Ты ни с кем не советовался?"],
        correct: "Ты с кем-нибудь советовался?",
        viet: "Động từ 'hỏi ý kiến' → Bạn có hỏi ý kiến ai không?",
        why: "с кем-нибудь = với ai đó (câu hỏi về hành động)"
      },
      {
        sentence: "Глагол: подарить. Составьте вопрос с -нибудь.",
        options: ["Ты кому-нибудь что-нибудь подарил на праздник?", "Ты кому-то подарил?", "Ты никому ничего не подарил?"],
        correct: "Ты кому-нибудь что-нибудь подарил на праздник?",
        viet: "Động từ 'tặng' → Dịp lễ bạn có tặng quà cho ai không?",
        why: "кому-нибудь + что-нибудь trong câu hỏi về hành động"
      },
      {
        sentence: "Глагол: ходить. Составьте вопрос с -нибудь.",
        options: ["Ты куда-нибудь ходил на этой неделе?", "Ты куда-то ходил?", "Ты нигде не был?"],
        correct: "Ты куда-нибудь ходил на этой неделе?",
        viet: "Động từ 'đi bộ' → Tuần này bạn có đi đâu không?",
        why: "куда-нибудь = đến đâu đó (câu hỏi về hành động)"
      },
      {
        sentence: "Глагол: пробовать. Составьте вопрос с -нибудь.",
        options: ["Ты когда-нибудь пробовал суши?", "Ты что-то пробовал?", "Ты ничего не пробовал?"],
        correct: "Ты когда-нибудь пробовал суши?",
        viet: "Động từ 'thử' → Bạn đã bao giờ thử món sushi chưa?",
        why: "когда-нибудь = có bao giờ chưa (hỏi về kinh nghiệm)"
      },
    ]
  },
  {
    id: "ex_n8", num: 8,
    title: "Упражнение 8 — Когда-то, как-то, когда-нибудь",
    description: "Прочитайте предложения. Определите временное значение наречий когда-то (прошлое), как-то (однажды в прошлом), когда-нибудь (будущее).",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Мне кажется, мы с вами когда-то встречались.",
        options: ["когда-то = действие было в прошлом", "когда-то = действие будет в будущем", "когда-то = однажды в прошлом"],
        correct: "когда-то = действие было в прошлом",
        viet: "Tôi cảm thấy chúng ta đã từng gặp nhau. (когда-то = hành động xảy ra trong quá khứ)",
        why: "когда-то + прошедшее время = hành động đã xảy ra trong quá khứ"
      },
      {
        sentence: "Я надеюсь, что когда-нибудь мы ещё встретимся с вами.",
        options: ["когда-нибудь = действие произойдёт в будущем", "когда-нибудь = было в прошлом", "когда-нибудь = однажды давно"],
        correct: "когда-нибудь = действие произойдёт в будущем",
        viet: "Tôi hy vọng chúng ta sẽ gặp lại nhau vào một lúc nào đó. (когда-нибудь = trong tương lai)",
        why: "когда-нибудь + будущее время = hành động sẽ xảy ra trong tương lai"
      },
      {
        sentence: "Когда-то на месте этого завода был лес.",
        options: ["когда-то = далёкое прошлое", "когда-нибудь = будущее", "как-то = однажды"],
        correct: "когда-то = далёкое прошлое",
        viet: "Xưa kia ở chỗ nhà máy này là rừng. (когда-то = quá khứ xa)",
        why: "когда-то thường chỉ quá khứ xa, điều đã qua rồi"
      },
      {
        sentence: "Я думаю, что когда-нибудь в этом городе будет свой театр.",
        options: ["когда-нибудь = в будущем (надежда/предположение)", "когда-то = было в прошлом", "как-то = однажды в прошлом"],
        correct: "когда-нибудь = в будущем (надежда/предположение)",
        viet: "Tôi nghĩ rằng một ngày nào đó thành phố này sẽ có nhà hát riêng. (когда-нибудь = hy vọng tương lai)",
        why: "когда-нибудь + будущее время = hy vọng/dự đoán về tương lai"
      },
      {
        sentence: "Я как-то видела его в университете.",
        options: ["как-то = однажды в прошлом (конкретный момент)", "когда-то = давно в прошлом", "когда-нибудь = в будущем"],
        correct: "как-то = однажды в прошлом (конкретный момент)",
        viet: "Hôm nào đó tôi đã gặp anh ấy ở trường đại học. (как-то = một lần nào đó trong quá khứ cụ thể)",
        why: "как-то = однажды, một lần cụ thể nhưng không rõ khi nào"
      },
    ]
  },
  {
    id: "ex_n9", num: 9,
    title: "Упражнение 9 — Когда-то или когда-нибудь?",
    description: "Вместо точек вставьте подходящие по смыслу частицы -то или -нибудь (когда-то = прошлое; когда-нибудь = будущее).",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Когда-... он учился в институте, но потом забросил учёбу.",
        options: ["-то (прошлое)", "-нибудь (будущее)"],
        correct: "-то (прошлое)",
        viet: "Hồi đó anh ấy đã từng học ở viện, nhưng sau đó bỏ học.",
        why: "когда-то = hành động đã xảy ra trong quá khứ (глагол учился — прошедшее)"
      },
      {
        sentence: "Мы когда-... были друзьями.",
        options: ["-то (прошлое)", "-нибудь (будущее)"],
        correct: "-то (прошлое)",
        viet: "Chúng tôi đã từng là bạn bè.",
        why: "когда-то = quá khứ đã qua (глагол были — прошедшее)"
      },
      {
        sentence: "Когда-... люди научатся лечить самые тяжёлые болезни.",
        options: ["-нибудь (будущее)", "-то (прошлое)"],
        correct: "-нибудь (будущее)",
        viet: "Một lúc nào đó con người sẽ học được cách chữa các bệnh hiểm nghèo.",
        why: "когда-нибудь = hành động sẽ xảy ra trong tương lai (глагол научатся — будущее)"
      },
      {
        sentence: "Я открыла книгу и поняла, что когда-... уже читала её.",
        options: ["-то (прошлое)", "-нибудь (будущее)"],
        correct: "-то (прошлое)",
        viet: "Tôi mở sách và nhận ra rằng mình đã đọc nó vào thời điểm nào đó trước đây.",
        why: "когда-то = thời điểm cụ thể trong quá khứ nhưng không nhớ rõ khi nào"
      },
      {
        sentence: "Хочется верить, что когда-... на земле не будет голода.",
        options: ["-нибудь (будущее)", "-то (прошлое)"],
        correct: "-нибудь (будущее)",
        viet: "Muốn tin rằng một ngày nào đó sẽ không còn nạn đói trên trái đất.",
        why: "когда-нибудь = niềm hy vọng về tương lai"
      },
      {
        sentence: "Я выберу время и когда-... съезжу на родину.",
        options: ["-нибудь (будущее)", "-то (прошлое)"],
        correct: "-нибудь (будущее)",
        viet: "Tôi sẽ chọn thời gian và một lúc nào đó sẽ về quê hương.",
        why: "когда-нибудь = kế hoạch/ý định trong tương lai"
      },
      {
        sentence: "Саша как-... заходил ко мне, но меня не было дома.",
        options: ["-то (как-то = однажды в прошлом)", "-нибудь (как-нибудь = в будущем)"],
        correct: "-то (как-то = однажды в прошлом)",
        viet: "Có lần Sasha đã ghé qua nhà tôi nhưng tôi không có ở nhà.",
        why: "как-то = однажды, một lần cụ thể trong quá khứ"
      },
    ]
  }
);

neopredelennye_exercises.push(
  {
    id: "ex_n10", num: 10,
    title: "Упражнение 10 — Частица кое-",
    description: "Прочитайте предложения. Определите значение частицы кое-: известное говорящему, но не называемое (А); ≈ «некоторый» (А); кое-как = «небрежно» или «с трудом» (Б).",
    type: "multiple_choice",
    questions: [
      {
        sentence: "«Тебе что-нибудь известно о новом коллеге?» — «Я кое-что знаю о нём».",
        options: ["кое-что = известное говорящему, но не названное конкретно", "кое-что ≈ некоторые вещи", "кое-что = что-нибудь (любое)"],
        correct: "кое-что = известное говорящему, но не названное конкретно",
        viet: "«Bạn có biết gì về đồng nghiệp mới không?» — «Tôi biết một số điều» (người nói biết nhưng không nói cụ thể).",
        why: "кое-что = điều cụ thể mà người nói biết nhưng không muốn nói rõ"
      },
      {
        sentence: "После лекции кое-кто остался в зале, чтобы задать вопросы.",
        options: ["кое-кто ≈ некоторые люди (не все)", "кое-кто = конкретный известный человек", "кое-кто = кто-нибудь"],
        correct: "кое-кто ≈ некоторые люди (не все)",
        viet: "Sau bài giảng, một số người đã ở lại để đặt câu hỏi.",
        why: "кое-кто ≈ некоторые (một số người, không phải tất cả)"
      },
      {
        sentence: "Кое-где после дождя на дороге оставались лужи.",
        options: ["кое-где ≈ в некоторых местах", "кое-где = в известном конкретном месте", "кое-где = где-нибудь"],
        correct: "кое-где ≈ в некоторых местах",
        viet: "Ở một số chỗ trên đường sau mưa còn đọng vũng nước.",
        why: "кое-где ≈ в некоторых местах, không phải ở khắp nơi"
      },
      {
        sentence: "Автобус был переполнен. Кое-как нам удалось войти в него.",
        options: ["кое-как = с трудом", "кое-как = небрежно", "кое-как = как-нибудь"],
        correct: "кое-как = с трудом",
        viet: "Xe buýt chật cứng. Chúng tôi khó khăn lắm mới lên được.",
        why: "кое-как = с трудом (khắc phục khó khăn để hoàn thành)"
      },
      {
        sentence: "Дом был отремонтирован кое-как.",
        options: ["кое-как = небрежно, некачественно", "кое-как = с трудом", "кое-как = каким-то образом"],
        correct: "кое-как = небрежно, некачественно",
        viet: "Ngôi nhà được sửa chữa qua loa, không đàng hoàng.",
        why: "кое-как = небрежно (chất lượng kém, không cẩn thận)"
      },
    ]
  },
  {
    id: "ex_n11", num: 11,
    title: "Упражнение 11 — Объясните значение кое-",
    description: "Прочитайте предложения. Объясните значения местоимений и наречий с частицей кое-.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Было очень поздно, но кое-где в окнах ещё горел свет.",
        options: ["кое-где ≈ в некоторых местах (в нескольких окнах)", "кое-где = в конкретном известном месте", "кое-где = где-нибудь"],
        correct: "кое-где ≈ в некоторых местах (в нескольких окнах)",
        viet: "Đã rất muộn nhưng ở một số cửa sổ vẫn còn sáng đèn.",
        why: "кое-где ≈ в некоторых местах"
      },
      {
        sentence: "Подожди, я кое-что забыл взять.",
        options: ["кое-что = что-то конкретное (говорящий знает что, но не говорит)", "кое-что ≈ несколько вещей", "кое-что = что-нибудь"],
        correct: "кое-что = что-то конкретное (говорящий знает что, но не говорит)",
        viet: "Chờ tôi, tôi quên lấy thứ gì đó (tôi biết cái gì nhưng không nói cụ thể).",
        why: "кое-что = điều cụ thể người nói biết nhưng không nói"
      },
      {
        sentence: "Работа была сделана кое-как.",
        options: ["кое-как = небрежно, некачественно", "кое-как = с трудом", "кое-как = каким-то способом"],
        correct: "кое-как = небрежно, некачественно",
        viet: "Công việc được thực hiện cẩu thả.",
        why: "кое-как = небрежно (mô tả chất lượng kém)"
      },
      {
        sentence: "Кое-какие книги этого автора я читала.",
        options: ["кое-какие ≈ некоторые книги (не все)", "кое-какие = конкретные книги", "кое-какие = какие-нибудь"],
        correct: "кое-какие ≈ некоторые книги (не все)",
        viet: "Một số cuốn sách của tác giả này tôi đã đọc (không phải tất cả).",
        why: "кое-какие ≈ некоторые (một số trong nhóm)"
      },
      {
        sentence: "Дорога была завалена снегом, мы кое-как добрались до дома.",
        options: ["кое-как = с трудом", "кое-как = небрежно", "кое-как = как-то"],
        correct: "кое-как = с трудом",
        viet: "Đường bị tuyết phủ, chúng tôi vất vả lắm mới về đến nhà.",
        why: "кое-как = с трудом (khắc phục trở ngại để đạt mục tiêu)"
      },
    ]
  },
  {
    id: "ex_n12", num: 12,
    title: "Упражнение 12 — -то, -нибудь или кое-?",
    description: "Вместо точек вставьте -то, -нибудь или кое-.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Мне кто-... звонил? — Да, вам кто-... звонил, но не назвал себя.",
        options: ["-нибудь (вопрос) / -то (ответ)", "-то / -то", "кое- / кое-"],
        correct: "-нибудь (вопрос) / -то (ответ)",
        viet: "Có ai gọi điện cho tôi không? — Có, có người gọi nhưng không nói tên.",
        why: "Câu hỏi = -нибудь; ответ с неизвестным конкретным лицом = -то"
      },
      {
        sentence: "...-кто из моих знакомых забыл в этом году поздравить меня с днём рождения.",
        options: ["кое- (≈ некоторые знакомые)", "-то (конкретный)", "-нибудь (любой)"],
        correct: "кое- (≈ некоторые знакомые)",
        viet: "Một số người quen của tôi đã quên chúc mừng sinh nhật tôi.",
        why: "кое-кто ≈ некоторые (một số người trong nhóm)"
      },
      {
        sentence: "Уже ноябрь, но ...-где на деревьях ещё есть листья.",
        options: ["кое- (≈ в некоторых местах)", "-то (конкретное место)", "-нибудь (любое место)"],
        correct: "кое- (≈ в некоторых местах)",
        viet: "Đã là tháng 11 nhưng ở một số nơi trên cây vẫn còn lá.",
        why: "кое-где ≈ в некоторых местах"
      },
      {
        sentence: "Когда-... я очень любила кататься на коньках.",
        options: ["-то (когда-то = в прошлом)", "-нибудь (в будущем)", "кое- (некоторое время)"],
        correct: "-то (когда-то = в прошлом)",
        viet: "Hồi xưa tôi rất thích trượt băng.",
        why: "когда-то = trong quá khứ"
      },
      {
        sentence: "Пусть кто-... из вас купит завтра газеты, мы будем читать их на уроке.",
        options: ["-нибудь (всё равно кто)", "-то (конкретный)", "кое- (некоторые)"],
        correct: "-нибудь (всё равно кто)",
        viet: "Hãy để ai đó trong các bạn mua báo ngày mai (ai cũng được).",
        why: "-нибудь = ai cũng được, người nói không quan trọng ai"
      },
      {
        sentence: "Экзамен Саша сдал ...-как.",
        options: ["кое- (с трудом или небрежно)", "-то (конкретным образом)", "-нибудь (любым способом)"],
        correct: "кое- (с трудом или небрежно)",
        viet: "Sasha thi đỗ một cách vất vả (hoặc qua loa).",
        why: "кое-как = с трудом ИЛИ небрежно (tùy ngữ cảnh)"
      },
      {
        sentence: "... с кем из вас я хотела бы поговорить отдельно.",
        options: ["кое- (кое с кем = с некоторыми)", "-то (с кем-то конкретным)", "-нибудь (с кем-нибудь)"],
        correct: "кое- (кое с кем = с некоторыми)",
        viet: "Tôi muốn nói chuyện riêng với một số bạn (người nói biết nhưng không nói tên).",
        why: "кое с кем = với một số người cụ thể mà người nói biết"
      },
    ]
  },
  {
    id: "ex_n13", num: 13,
    title: "Упражнение 13 — Замените выделенные части",
    description: "Выделенные части предложения замените словами: когда-то, когда-нибудь, кто-то, кое-кто, куда-нибудь, кое-как, какой-то, кое-где.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Я знаю, что некоторые недовольны моим выступлением.",
        options: ["кое-кто (≈ некоторые)", "кто-то (конкретный, неизвестный)", "кто-нибудь (любой)"],
        correct: "кое-кто (≈ некоторые)",
        viet: "Tôi biết rằng một số người không hài lòng với bài phát biểu của tôi.",
        why: "некоторые → кое-кто"
      },
      {
        sentence: "В прошлом Виктор увлекался восточной философией.",
        options: ["когда-то (в прошлом)", "когда-нибудь (в будущем)", "как-то (однажды)"],
        correct: "когда-то (в прошлом)",
        viet: "Trước đây Viktor đã từng say mê triết học phương Đông.",
        why: "в прошлом → когда-то"
      },
      {
        sentence: "Сегодня Маша получила письмо, но я не знаю от кого.",
        options: ["от кого-то (конкретного, неизвестного)", "от кого-нибудь (от любого)", "от кое-кого"],
        correct: "от кого-то (конкретного, неизвестного)",
        viet: "Hôm nay Masha nhận được thư từ ai đó (không biết ai).",
        why: "не знаю от кого → от кого-то (-то = cụ thể nhưng không biết)"
      },
      {
        sentence: "Давайте поедем в субботу за город, всё равно куда.",
        options: ["куда-нибудь (всё равно куда)", "куда-то (в конкретное место)", "кое-куда (в некоторые места)"],
        correct: "куда-нибудь (всё равно куда)",
        viet: "Thứ Bảy hãy đi ngoại ô, đâu cũng được.",
        why: "всё равно куда → куда-нибудь"
      },
      {
        sentence: "Работа выполнена небрежно.",
        options: ["кое-как (небрежно)", "кое-как (с трудом)", "как-то (неизвестным образом)"],
        correct: "кое-как (небрежно)",
        viet: "Công việc được thực hiện cẩu thả.",
        why: "небрежно → кое-как"
      },
      {
        sentence: "В будущем люди научатся ценить и беречь природу.",
        options: ["когда-нибудь (в будущем)", "когда-то (в прошлом)", "как-то (однажды)"],
        correct: "когда-нибудь (в будущем)",
        viet: "Một lúc nào đó con người sẽ học được cách trân trọng thiên nhiên.",
        why: "в будущем → когда-нибудь"
      },
      {
        sentence: "Я читал об этом в журнале, но в каком — не помню.",
        options: ["в каком-то журнале (конкретном, забытом)", "в каком-нибудь журнале (любом)", "в кое-каком журнале"],
        correct: "в каком-то журнале (конкретном, забытом)",
        viet: "Tôi đọc về điều này trên tạp chí nào đó (cụ thể nhưng không nhớ).",
        why: "не помню в каком → в каком-то (-то = cụ thể nhưng không nhớ)"
      },
      {
        sentence: "В лесах Подмосковья в некоторых местах ещё можно встретить ландыши.",
        options: ["кое-где (≈ в некоторых местах)", "где-то (в конкретном месте)", "где-нибудь (в любом месте)"],
        correct: "кое-где (≈ в некоторых местах)",
        viet: "Ở rừng ngoại ô Moscow ở một số nơi vẫn còn hoa chuông.",
        why: "в некоторых местах → кое-где"
      },
    ]
  },
  {
    id: "ex_n14", num: 14,
    title: "Упражнение 14 — Диалоги и ситуации с -то, -нибудь, кое-",
    description: "Передайте следующую информацию, используя местоимения или наречия с -то, -нибудь, кое-.",
    type: "multiple_choice",
    questions: [
      {
        sentence: "Сообщите другу: пока его не было дома, к нему приходили, но вы не знаете кто.",
        options: ["Пока тебя не было дома, к тебе кто-то приходил.", "Пока тебя не было дома, к тебе кто-нибудь приходил.", "Кое-кто к тебе приходил."],
        correct: "Пока тебя не было дома, к тебе кто-то приходил.",
        viet: "Báo cho bạn: Khi mày không có nhà, có ai đó đến tìm (cụ thể nhưng không biết ai).",
        why: "-то = ai đó cụ thể nhưng người nói không biết"
      },
      {
        sentence: "Узнайте у друга: приходили ли к вам, когда вас не было дома?",
        options: ["Когда меня не было дома, ко мне кто-нибудь приходил?", "Ко мне кто-то приходил?", "Кое-кто ко мне приходил?"],
        correct: "Когда меня не было дома, ко мне кто-нибудь приходил?",
        viet: "Hỏi bạn: Khi tao không có nhà, có ai đến không?",
        why: "-нибудь trong câu hỏi = hỏi về việc hành động có xảy ra không"
      },
      {
        sentence: "Попросите у друга дать вам карандаш, всё равно какой.",
        options: ["Дай мне какой-нибудь карандаш.", "Дай мне какой-то карандаш.", "Дай мне кое-какой карандаш."],
        correct: "Дай мне какой-нибудь карандаш.",
        viet: "Nhờ bạn: Cho tao mượn cái bút chì nào đó đi (cái nào cũng được).",
        why: "-нибудь = bất kỳ, người nói không quan trọng cái nào"
      },
      {
        sentence: "Предложите другу пойти вечером потанцевать (вам всё равно куда).",
        options: ["Давай вечером пойдём куда-нибудь потанцевать.", "Давай пойдём куда-то потанцевать.", "Давай пойдём кое-куда потанцевать."],
        correct: "Давай вечером пойдём куда-нибудь потанцевать.",
        viet: "Đề nghị bạn: Tối nay mình đi nhảy đâu đó đi (đâu cũng được).",
        why: "-нибудь = đâu cũng được, không có địa điểm cụ thể"
      },
      {
        sentence: "Сообщите: на деревьях в некоторых местах листья уже пожелтели.",
        options: ["Кое-где на деревьях листья уже пожелтели.", "Где-то на деревьях листья пожелтели.", "Где-нибудь листья пожелтели."],
        correct: "Кое-где на деревьях листья уже пожелтели.",
        viet: "Thông báo: Ở một số nơi trên cây lá đã vàng rồi.",
        why: "кое-где ≈ в некоторых местах"
      },
      {
        sentence: "Скажите другу: после длительной прогулки по лесу вы с трудом добрались до дома.",
        options: ["После долгой прогулки по лесу мы кое-как добрались до дома.", "Мы как-то добрались до дома.", "Мы где-то остановились."],
        correct: "После долгой прогулки по лесу мы кое-как добрались до дома.",
        viet: "Nói với bạn: Sau chuyến đi dạo dài trong rừng, chúng tôi vất vả lắm mới về đến nhà.",
        why: "кое-как = с трудом (khắc phục khó khăn)"
      },
    ]
  }
);
