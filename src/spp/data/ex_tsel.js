const LETTERS = ["A", "B", "C", "D"];

function buildOptions(correctText, wrongTexts, correctIndex) {
  const plain = [...wrongTexts];
  plain.splice(correctIndex, 0, correctText);

  const labels = plain.map((text, index) => `${LETTERS[index]}. ${text}`);

  return {
    plain,
    labels,
    correct: labels[correctIndex]
  };
}

function makeQuestion({ id, sentence, choices, correctIndex, full, viet, why }) {
  const options = choices.map((choice, index) => `${LETTERS[index]}. ${choice}`);

  return {
    id,
    sentence,
    options,
    correct: options[correctIndex],
    viet: `🇷🇺 ${full}\n🇻🇳 ${viet}`,
    why
  };
}

function makeTransformQuestion({
  id,
  sentence,
  transformed,
  translation,
  correctIndex,
  possible = true,
  reason
}) {
  const noCommaVariant = sentence.replace(", чтобы ", " ");
  const commaVariant = sentence.replace(", чтобы ", ", ");
  const dlyaTogoVariant = sentence.replace(", чтобы ", " для того чтобы ");

  const correctText = possible ? transformed : "Нельзя заменить инфинитивной конструкцией.";
  const wrongTexts = possible
    ? [sentence, commaVariant, dlyaTogoVariant]
    : [noCommaVariant, sentence, dlyaTogoVariant];

  const { labels, correct } = buildOptions(correctText, wrongTexts, correctIndex);
  const correctLetter = LETTERS[correctIndex];

  let originalLetter = "";
  let commaLetter = "";
  let dlyaLetter = "";
  let noCommaLetter = "";

  labels.forEach((option, index) => {
    const text = option.slice(3);
    if (text === sentence) originalLetter = LETTERS[index];
    if (text === commaVariant) commaLetter = LETTERS[index];
    if (text === dlyaTogoVariant) dlyaLetter = LETTERS[index];
    if (text === noCommaVariant) noCommaLetter = LETTERS[index];
  });

  const why = possible
    ? [
        `Chọn ${correctLetter} vì hai hành động có cùng chủ thể, nên theo lý thuyết về mệnh đề mục đích có thể lược bỏ "чтобы" và giữ nguyên thể. ${reason}`,
        `Không chọn ${originalLetter} vì đó vẫn là câu gốc với mệnh đề phụ mục đích, chưa chuyển sang kết cấu nguyên thể.`,
        `Không chọn ${commaLetter} vì sau khi bỏ "чтобы", động từ nguyên thể không tách thành một cụm chen ngang bằng dấu phẩy như vậy.`,
        `Không chọn ${dlyaLetter} vì "для того чтобы" vẫn là liên từ chỉ mục đích, không phải dạng rút gọn bằng инфинитив.`
      ].join("\n")
    : [
        `Chọn ${correctLetter} vì câu này không thể thay bằng kết cấu nguyên thể. ${reason}`,
        `Không chọn ${noCommaLetter} vì đó là cách bỏ "чтобы" máy móc, làm hỏng cấu trúc ngữ pháp của câu.`,
        `Không chọn ${originalLetter} vì đó chỉ là câu ban đầu, chưa phải câu trả lời cho yêu cầu biến đổi.`,
        `Không chọn ${dlyaLetter} vì phương án này vẫn giữ mệnh đề mục đích với liên từ, chứ không tạo ra kết cấu nguyên thể.`
      ].join("\n");

  return {
    id,
    sentence: `Câu ${id}: ${sentence}`,
    options: labels,
    correct,
    viet: `🇷🇺 ${possible ? transformed : sentence}\n🇻🇳 ${translation}`,
    why
  };
}

const exercise1Items = [
  {
    id: 1,
    sentence: "Лена поехала в турагентство, чтобы заказать билет в Каир.",
    transformed: "Лена поехала в турагентство заказать билет в Каир.",
    translation: "Lena đã đến công ty du lịch để đặt vé đi Cairo.",
    correctIndex: 0,
    reason: "Ở cả hai hành động, người thực hiện đều là Лена."
  },
  {
    id: 2,
    sentence: "Мы зашли в кафе, чтобы позавтракать.",
    transformed: "Мы зашли в кафе позавтракать.",
    translation: "Chúng tôi ghé vào quán cà phê để ăn sáng.",
    correctIndex: 1,
    reason: "Chủ thể chung là мы: chúng tôi ghé vào và cũng chính chúng tôi ăn sáng."
  },
  {
    id: 3,
    sentence: "Артисты пришли в студию, чтобы записать новый альбом.",
    transformed: "Артисты пришли в студию записать новый альбом.",
    translation: "Các nghệ sĩ đến phòng thu để thu âm album mới.",
    correctIndex: 2,
    reason: "Chủ thể của hành động đến và thu âm đều là артисты."
  },
  {
    id: 4,
    sentence: "Мне надо поехать в магазин «Библио-Глобус», чтобы купить справочник.",
    transformed: "Мне надо поехать в магазин «Библио-Глобус» купить справочник.",
    translation: "Tôi cần đến cửa hàng «Biblio-Globus» để mua sách tra cứu.",
    correctIndex: 3,
    reason: "Người đi và người mua đều là cùng một chủ thể ngầm hiểu là tôi."
  },
  {
    id: 5,
    sentence: "Я собираюсь пойти в Манеж, чтобы посмотреть выставку художников-авангардистов.",
    transformed: "Я собираюсь пойти в Манеж посмотреть выставку художников-авангардистов.",
    translation: "Tôi định đi tới Manezh để xem triển lãm của các họa sĩ tiên phong.",
    correctIndex: 0,
    reason: "Я là người đi và cũng là người xem triển lãm."
  },
  {
    id: 6,
    sentence: "Он разослал своё резюме в разные фирмы, чтобы найти работу.",
    transformed: "Он разослал своё резюме в разные фирмы найти работу.",
    translation: "Anh ấy gửi CV đến nhiều công ty để tìm việc.",
    correctIndex: 1,
    reason: "Он thực hiện cả hành động gửi hồ sơ lẫn mục đích tìm việc."
  },
  {
    id: 7,
    sentence: "Нас приглашают на экскурсию, чтобы осмотреть древние монастыри.",
    transformed: "Нас приглашают на экскурсию осмотреть древние монастыри.",
    translation: "Người ta mời chúng tôi đi tham quan để ngắm các tu viện cổ.",
    correctIndex: 2,
    reason: "Chủ thể ngầm hiểu của mục đích là нас/мы, trùng với người được mời đi tham quan."
  },
  {
    id: 8,
    sentence: "Директор отпустил своего шофёра, чтобы пройтись пешком.",
    transformed: "Директор отпустил своего шофёра пройтись пешком.",
    translation: "Giám đốc cho tài xế về để đi bộ một lúc.",
    correctIndex: 3,
    reason: "Người đi bộ là chính директор, trùng với chủ thể của vế chính."
  },
  {
    id: 9,
    sentence: "Они обошли дом, чтобы попасть на детскую площадку.",
    transformed: "Они обошли дом попасть на детскую площадку.",
    translation: "Họ đi vòng qua ngôi nhà để tới sân chơi trẻ em.",
    correctIndex: 0,
    reason: "Они là người đi vòng và cũng là người muốn tới sân chơi."
  },
  {
    id: 10,
    sentence: "Она надела спортивный костюм, чтобы заниматься в тренажёрном зале.",
    transformed: "Она надела спортивный костюм заниматься в тренажёрном зале.",
    translation: "Cô ấy mặc đồ thể thao để tập trong phòng gym.",
    correctIndex: 1,
    reason: "Она mặc đồ và cũng chính cô ấy đi tập."
  },
  {
    id: 11,
    sentence: "Фирма снизила цены, чтобы ускорить распродажу товаров.",
    transformed: "Фирма снизила цены ускорить распродажу товаров.",
    translation: "Công ty giảm giá để đẩy nhanh việc bán xả hàng.",
    correctIndex: 2,
    reason: "Vế chính và mục đích đều gắn với cùng một chủ thể là фирма."
  },
  {
    id: 12,
    sentence: "Избирательная комиссия работала всю ночь, чтобы подсчитать голоса избирателей.",
    transformed: "Избирательная комиссия работала всю ночь подсчитать голоса избирателей.",
    translation: "Ủy ban bầu cử làm việc suốt đêm để kiểm phiếu.",
    correctIndex: 3,
    reason: "Ủy ban bầu cử vừa làm việc vừa thực hiện mục đích kiểm phiếu."
  },
  {
    id: 13,
    sentence: "На саммит съехались министры иностранных дел, чтобы обсудить важнейшие международные проблемы.",
    transformed: "На саммит съехались министры иностранных дел обсудить важнейшие международные проблемы.",
    translation: "Các bộ trưởng ngoại giao đã tới hội nghị thượng đỉnh để thảo luận những vấn đề quốc tế quan trọng nhất.",
    correctIndex: 0,
    reason: "Министры là người đến tham dự và cũng là người thảo luận."
  },
  {
    id: 14,
    sentence: "Каждый год 9 Мая москвичи идут к Вечному огню, чтобы поклониться Могиле Неизвестного Солдата.",
    transformed: "Каждый год 9 Мая москвичи идут к Вечному огню поклониться Могиле Неизвестного Солдата.",
    translation: "Mỗi năm vào ngày 9 tháng 5, người Moskva đến Đài lửa vĩnh cửu để tưởng niệm Mộ Chiến sĩ vô danh.",
    correctIndex: 1,
    reason: "Москвичи là người đi và cũng là người bày tỏ sự tưởng niệm."
  },
  {
    id: 15,
    sentence: "Тысячи зрителей собрались на стадионе, чтобы посмотреть игру чемпионов мира.",
    transformed: "Тысячи зрителей собрались на стадионе посмотреть игру чемпионов мира.",
    translation: "Hàng nghìn khán giả tập trung ở sân vận động để xem trận đấu của các nhà vô địch thế giới.",
    correctIndex: 2,
    reason: "Зрители tập trung và chính họ là người xem trận đấu."
  },
  {
    id: 16,
    sentence: "Каждые четыре года на Олимпийские игры приезжают лучшие спортсмены, чтобы завоевать призовые места.",
    transformed: "Каждые четыре года на Олимпийские игры приезжают лучшие спортсмены завоевать призовые места.",
    translation: "Cứ bốn năm một lần, các vận động viên xuất sắc nhất tới Thế vận hội để giành thứ hạng cao.",
    correctIndex: 3,
    reason: "Лучшие спортсмены là chủ thể chung của cả hai hành động."
  },
  {
    id: 17,
    sentence: "Со всех концов России едут в Москву молодые люди, чтобы работать на стройках.",
    transformed: "Со всех концов России едут в Москву молодые люди работать на стройках.",
    translation: "Thanh niên từ khắp nước Nga đến Moskva để làm việc tại các công trường xây dựng.",
    correctIndex: 0,
    reason: "Молодые люди là người đi và cũng là người làm việc."
  },
  {
    id: 18,
    sentence: "Алексей записался на курсы, чтобы получить специальность дизайнера.",
    transformed: "Алексей записался на курсы получить специальность дизайнера.",
    translation: "Aleksey đăng ký khóa học để lấy chuyên môn thiết kế.",
    correctIndex: 1,
    reason: "Алексей là người đăng ký học và cũng là người nhận chuyên môn đó."
  },
  {
    id: 19,
    sentence: "Она поступила на юридический факультет, чтобы получить второе высшее образование.",
    transformed: "Она поступила на юридический факультет получить второе высшее образование.",
    translation: "Cô ấy vào khoa luật để lấy bằng đại học thứ hai.",
    correctIndex: 2,
    reason: "Она là chủ thể chung của việc nhập học và mục đích học tiếp."
  },
  {
    id: 20,
    sentence: "На совещание по сельскому хозяйству приехали лучшие фермеры, чтобы обменяться опытом.",
    transformed: "На совещание по сельскому хозяйству приехали лучшие фермеры обменяться опытом.",
    translation: "Những nông dân giỏi nhất đã tới hội nghị nông nghiệp để trao đổi kinh nghiệm.",
    correctIndex: 3,
    reason: "Лучшие фермеры là người đến dự và cũng là người trao đổi kinh nghiệm."
  }
];

const exercise2Questions = [
  makeQuestion({
    id: 1,
    sentence: "Câu 1: Мы выключили телевизор, чтобы ...",
    choices: [
      "не мешать детям спать",
      "дети спали всю ночь",
      "в комнате стало темно",
      "выключили его ещё раз"
    ],
    correctIndex: 0,
    full: "Мы выключили телевизор, чтобы не мешать детям спать.",
    viet: "Chúng tôi tắt телевизор để không làm bọn trẻ mất ngủ.",
    why: "Chọn A vì đây là mục đích rõ ràng của hành động tắt телевизор. Chủ thể của hành động chính và hành động mục đích là cùng một nhóm người.\nKhông chọn B vì đây là kết quả/miêu tả, không phải mục đích.\nKhông chọn C vì đây là hệ quả tự nhiên, không phải điều người nói hướng tới.\nKhông chọn D vì lặp lại hành động chính, không hoàn thành cấu trúc mục đích với чтобы."
  }),
  makeQuestion({
    id: 2,
    sentence: "Câu 2: Она позвонила мне накануне, чтобы ...",
    choices: [
      "готовить документы заранее",
      "я подготовил документы заранее",
      "мы уже приехали",
      "завтра была хорошая погода"
    ],
    correctIndex: 1,
    full: "Она позвонила мне накануне, чтобы я подготовил документы заранее.",
    viet: "Cô ấy gọi cho tôi từ hôm trước để tôi chuẩn bị giấy tờ trước.",
    why: "Chọn B vì ở đây có hai chủ thể khác nhau: она gọi điện, còn я chuẩn bị giấy tờ; vì vậy sau чтобы phải dùng động từ ở dạng quá khứ.\nKhông chọn A vì dùng infinitive sẽ làm hai hành động bị hiểu là cùng một chủ thể.\nKhông chọn C vì đây không diễn tả mục đích của việc gọi điện.\nKhông chọn D vì nội dung không liên quan logic đến tình huống giao tiếp."
  }),
  makeQuestion({
    id: 3,
    sentence: "Câu 3: Он вошёл в комнату очень тихо, чтобы ...",
    choices: [
      "ребёнок проснулся раньше",
      "в комнате было светло",
      "не разбудить ребёнка",
      "дверь закрылась сама"
    ],
    correctIndex: 2,
    full: "Он вошёл в комнату очень тихо, чтобы не разбудить ребёнка.",
    viet: "Anh ấy bước vào phòng rất khẽ để không đánh thức đứa trẻ.",
    why: "Chọn C vì đây là mục đích trực tiếp của việc đi vào rất nhẹ nhàng. Chủ thể trùng nhau nên dùng infinitive sau чтобы.\nKhông chọn A vì đó là kết quả trái nghĩa với ý mục đích.\nKhông chọn B vì không liên quan đến hành động đi vào khẽ.\nKhông chọn D vì đây không phải mục đích của người nói."
  }),
  makeQuestion({
    id: 4,
    sentence: "Câu 4: Все окна широко открыли, чтобы ...",
    choices: [
      "мы закрыли дверь на ключ",
      "в комнату вошёл свежий воздух",
      "окно было высоким",
      "на улице шёл дождь"
    ],
    correctIndex: 1,
    full: "Все окна широко открыли, чтобы в комнату вошёл свежий воздух.",
    viet: "Người ta mở toang tất cả cửa sổ để không khí trong lành tràn vào phòng.",
    why: "Chọn B vì đây là mục đích hợp logic của hành động mở cửa sổ. Vế phụ có chủ thể khác (свежий воздух), nên không dùng infinitive rút gọn.\nKhông chọn A vì không tạo quan hệ mục đích với việc mở cửa sổ.\nKhông chọn C vì chỉ miêu tả đặc điểm của cửa sổ.\nKhông chọn D vì là hoàn cảnh bên ngoài, không phải mục đích."
  }),
  makeQuestion({
    id: 5,
    sentence: "Câu 5: Преподаватель диктовал медленно, чтобы ...",
    choices: [
      "студенты успевали записывать",
      "студенты уже ушли домой",
      "лекция закончилась раньше",
      "в аудитории стало тихо"
    ],
    correctIndex: 0,
    full: "Преподаватель диктовал медленно, чтобы студенты успевали записывать.",
    viet: "Giảng viên đọc chậm để sinh viên kịp ghi chép.",
    why: "Chọn A vì mục đích của việc đọc chậm là để sinh viên kịp viết lại. Chủ thể của vế phụ là khác chủ thể vế chính, nên dùng dạng quá khứ số nhiều sau чтобы.\nKhông chọn B vì đó là sự việc không liên quan.\nKhông chọn C vì đây là hệ quả thời gian, không phải mục đích.\nKhông chọn D vì sự yên lặng không phải nội dung mà người dạy muốn trực tiếp đạt tới qua việc đọc chậm."
  }),
  makeQuestion({
    id: 6,
    sentence: "Câu 6: Директор собрал сотрудников, чтобы ...",
    choices: [
      "сотрудники уже ушли",
      "в кабинете было просторно",
      "обсудить новый план работы",
      "план обсуждался вчера"
    ],
    correctIndex: 2,
    full: "Директор собрал сотрудников, чтобы обсудить новый план работы.",
    viet: "Giám đốc tập hợp nhân viên để thảo luận kế hoạch làm việc mới.",
    why: "Chọn C vì директор tổ chức cuộc họp với mục đích thảo luận. Cùng một chủ thể tham gia hành động có chủ đích nên dùng infinitive.\nKhông chọn A vì đây không phải mục đích, mà là mệnh đề thông báo.\nKhông chọn B vì không liên quan logic.\nKhông chọn D vì đó là thông tin quá khứ, không phải mục đích của việc tập hợp."
  }),
  makeQuestion({
    id: 7,
    sentence: "Câu 7: Я послала ему телеграмму, чтобы ...",
    choices: [
      "он встретил меня на вокзале",
      "телеграмма лежала на столе",
      "я встретила его вчера",
      "на вокзале было людно"
    ],
    correctIndex: 0,
    full: "Я послала ему телеграмму, чтобы он встретил меня на вокзале.",
    viet: "Tôi gửi điện báo cho anh ấy để anh ấy đón tôi ở nhà ga.",
    why: "Chọn A vì có hai chủ thể khác nhau: я gửi điện báo, còn он đón ở ga. Theo lý thuyết, sau чтобы phải dùng động từ quá khứ khi chủ thể khác nhau.\nKhông chọn B vì đó là trạng thái của bức điện, không phải mục đích.\nKhông chọn C vì câu này chuyển nghĩa sang sự việc đã xảy ra trước đó.\nKhông chọn D vì không liên quan đến mục đích gửi điện báo."
  }),
  makeQuestion({
    id: 8,
    sentence: "Câu 8: Они приехали на фирму, чтобы ...",
    choices: [
      "контракт уже потерялся",
      "подписать контракт",
      "фирма закрылась давно",
      "у них не было багажа"
    ],
    correctIndex: 1,
    full: "Они приехали на фирму, чтобы подписать контракт.",
    viet: "Họ đến công ty để ký hợp đồng.",
    why: "Chọn B vì đây là mục đích trực tiếp của việc đến công ty. Chủ thể trùng nhau nên dùng infinitive.\nKhông chọn A vì đó là thông báo ngoài ngữ cảnh.\nKhông chọn C vì đây là nhận xét về công ty, không phải mục đích.\nKhông chọn D vì không hề diễn tả đích đến của hành động."
  }),
  makeQuestion({
    id: 9,
    sentence: "Câu 9: Надо отправить ему факс, чтобы ...",
    choices: [
      "он срочно получил копии документов",
      "факс стоял у окна",
      "документы лежали в папке",
      "вчера пришёл курьер"
    ],
    correctIndex: 0,
    full: "Надо отправить ему факс, чтобы он срочно получил копии документов.",
    viet: "Cần gửi fax cho anh ấy để anh ấy nhận được bản sao tài liệu ngay.",
    why: "Chọn A vì mục đích của việc gửi fax là để người nhận nhanh chóng có tài liệu. Chủ thể vế phụ khác chủ thể ngầm hiểu của vế chính nên dùng получил.\nKhông chọn B vì chỉ nói về vị trí máy fax.\nKhông chọn C vì nói về chỗ để tài liệu, không nêu mục đích.\nKhông chọn D vì là một sự kiện khác, không gắn với cấu trúc mục đích."
  }),
  makeQuestion({
    id: 10,
    sentence: "Câu 10: Спортсмену надо много тренироваться, чтобы ...",
    choices: [
      "тренировки закончились вчера",
      "у него болела голова",
      "в зале было прохладно",
      "добиться высоких результатов"
    ],
    correctIndex: 3,
    full: "Спортсмену надо много тренироваться, чтобы добиться высоких результатов.",
    viet: "Vận động viên cần tập luyện nhiều để đạt thành tích cao.",
    why: "Chọn D vì đây là mục tiêu tự nhiên của việc tập luyện. Chủ thể trùng nhau nên dùng infinitive добиться.\nKhông chọn A vì đó là thông tin thời gian, không phải mục đích.\nKhông chọn B vì đây là trạng thái sức khỏe, không phải mục đích.\nKhông chọn C vì chỉ là mô tả hoàn cảnh."
  }),
  makeQuestion({
    id: 11,
    sentence: "Câu 11: Надо положить паспорт поглубже в карман, чтобы ...",
    choices: [
      "не потерять его в дороге",
      "карман оказался маленьким",
      "паспорт лежал на столе",
      "дорога была недалёкой"
    ],
    correctIndex: 0,
    full: "Надо положить паспорт поглубже в карман, чтобы не потерять его в дороге.",
    viet: "Cần cất hộ chiếu sâu vào túi để không làm mất nó trên đường.",
    why: "Chọn A vì đây là mục đích trực tiếp của hành động cất hộ chiếu. Vế phụ dùng не + infinitive để diễn tả mục đích tránh một điều xấu xảy ra.\nKhông chọn B vì đây là nhận xét về cái túi.\nKhông chọn C vì chỉ mô tả vị trí của hộ chiếu trước đó.\nKhông chọn D vì quãng đường gần hay xa không phải mục đích của hành động."
  }),
  makeQuestion({
    id: 12,
    sentence: "Câu 12: Они заказали такси, чтобы ...",
    choices: [
      "таксист знал этот адрес",
      "в городе шёл снег",
      "вовремя приехать в аэропорт",
      "самолёт уже улетел вчера"
    ],
    correctIndex: 2,
    full: "Они заказали такси, чтобы вовремя приехать в аэропорт.",
    viet: "Họ gọi taxi để đến sân bay đúng giờ.",
    why: "Chọn C vì đây là mục đích rõ ràng của việc gọi taxi. Chủ thể trùng nhau nên dùng infinitive приехать.\nKhông chọn A vì tài xế biết địa chỉ chỉ là điều kiện phụ, không phải mục đích chính.\nKhông chọn B vì đó là hoàn cảnh thời tiết.\nKhông chọn D vì câu này làm hỏng logic thời gian của hành động."
  })
];

const exercise3Questions = [
  makeQuestion({
    id: 1,
    sentence: "Câu 1: ..., чтобы не проспать.",
    choices: [
      "Я поставил будильник на шесть утра",
      "Я проспал первую пару вчера",
      "Мы долго ждали автобус",
      "В комнате было очень жарко"
    ],
    correctIndex: 0,
    full: "Я поставил будильник на шесть утра, чтобы не проспать.",
    viet: "Tôi đặt đồng hồ báo thức lúc sáu giờ để không ngủ quên.",
    why: "Chọn A vì hành động đặt báo thức có mục đích trực tiếp là tránh ngủ quên. Chủ thể của cả hai hành động là Я.\nKhông chọn B vì đó là sự việc đã xảy ra, không phải hành động nhằm tới mục đích.\nKhông chọn C vì chờ xe buýt không liên quan đến việc ngủ quên.\nKhông chọn D vì đây là mô tả hoàn cảnh."
  }),
  makeQuestion({
    id: 2,
    sentence: "Câu 2: ..., чтобы попасть на этот балет.",
    choices: [
      "Этот балет закончился поздно",
      "Мы купили билеты заранее",
      "На улице шёл снег",
      "В кассе никого не было"
    ],
    correctIndex: 1,
    full: "Мы купили билеты заранее, чтобы попасть на этот балет.",
    viet: "Chúng tôi mua vé trước để được vào xem vở ballet này.",
    why: "Chọn B vì mua vé trước là hành động có mục đích rõ ràng để vào xem buổi diễn. Chủ thể trùng nhau nên rất sát lý thuyết về цель.\nKhông chọn A vì đó là thông tin về thời gian kết thúc.\nKhông chọn C vì thời tiết không tạo ra mục đích.\nKhông chọn D vì đây là hoàn cảnh ở quầy vé, không phải hành động của chủ thể."
  }),
  makeQuestion({
    id: 3,
    sentence: "Câu 3: ..., чтобы хорошо сдать зачёт.",
    choices: [
      "Студент всю неделю повторял материал",
      "Зачёт уже перенесли на май",
      "В аудитории стало тихо",
      "Преподаватель проверил журнал"
    ],
    correctIndex: 0,
    full: "Студент всю неделю повторял материал, чтобы хорошо сдать зачёт.",
    viet: "Sinh viên ôn lại tài liệu suốt cả tuần để vượt qua bài kiểm tra tốt.",
    why: "Chọn A vì việc ôn tập là hành động chuẩn bị nhằm đạt kết quả tốt ở зачёт. Chủ thể chung là студент.\nKhông chọn B vì đó là thay đổi lịch, không phải hành động có mục đích.\nKhông chọn C vì sự im lặng trong phòng không hướng tới mục tiêu này.\nKhông chọn D vì giáo viên kiểm sổ không phải nguyên nhân chủ động để sinh viên thi tốt."
  }),
  makeQuestion({
    id: 4,
    sentence: "Câu 4: ..., чтобы договориться о встрече.",
    choices: [
      "Он забыл мой адрес",
      "Мы встретились случайно",
      "Я позвонил ему вечером",
      "На улице было холодно"
    ],
    correctIndex: 2,
    full: "Я позвонил ему вечером, чтобы договориться о встрече.",
    viet: "Tôi gọi cho anh ấy vào buổi tối để hẹn gặp.",
    why: "Chọn C vì gọi điện là hành động nhằm đạt tới mục đích thỏa thuận về buổi gặp. Chủ thể trùng nhau nên dùng infinitive договориться.\nKhông chọn A vì đó là sự cố, không phải hành động có mục đích.\nKhông chọn B vì đó là kết quả ngẫu nhiên, không phù hợp với чтобы.\nKhông chọn D vì hoàn cảnh thời tiết không liên quan."
  }),
  makeQuestion({
    id: 5,
    sentence: "Câu 5: ..., чтобы добиться хороших результатов.",
    choices: [
      "Команда тренировалась каждый день",
      "Результаты объявили вчера",
      "На стадионе было мало зрителей",
      "Судья дал свисток"
    ],
    correctIndex: 0,
    full: "Команда тренировалась каждый день, чтобы добиться хороших результатов.",
    viet: "Đội bóng tập luyện mỗi ngày để đạt kết quả tốt.",
    why: "Chọn A vì luyện tập thường xuyên là hành động có mục đích. Chủ thể đội bóng trùng với chủ thể đạt kết quả.\nKhông chọn B vì đó là thông báo về thời điểm công bố kết quả.\nKhông chọn C vì số khán giả không biểu thị mục tiêu.\nKhông chọn D vì tiếng còi của trọng tài không phải hành động hướng đến kết quả."
  }),
  makeQuestion({
    id: 6,
    sentence: "Câu 6: ..., чтобы встретиться с друзьями.",
    choices: [
      "Мы поехали в центр города",
      "Друзья остались дома",
      "Магазины уже закрылись",
      "Автобус опоздал на час"
    ],
    correctIndex: 0,
    full: "Мы поехали в центр города, чтобы встретиться с друзьями.",
    viet: "Chúng tôi đi vào trung tâm thành phố để gặp bạn bè.",
    why: "Chọn A vì việc đi vào trung tâm có mục đích gặp bạn. Chủ thể của hai hành động là мы.\nKhông chọn B vì đây là thông tin về bạn bè, không phải hành động của người nói.\nKhông chọn C vì cửa hàng đóng cửa không gắn với mục tiêu gặp bạn.\nKhông chọn D vì xe buýt trễ chỉ là trở ngại, không phải mục đích."
  }),
  makeQuestion({
    id: 7,
    sentence: "Câu 7: ..., чтобы научиться хорошо играть в теннис.",
    choices: [
      "Теннисный корт был пустой",
      "Вчера шёл сильный дождь",
      "Она записалась в спортивную секцию",
      "У неё болела рука"
    ],
    correctIndex: 2,
    full: "Она записалась в спортивную секцию, чтобы научиться хорошо играть в теннис.",
    viet: "Cô ấy đăng ký vào câu lạc bộ thể thao để học chơi tennis giỏi.",
    why: "Chọn C vì đăng ký học là hành động nhằm đạt mục tiêu học chơi tennis. Chủ thể trùng nhau là она.\nKhông chọn A vì mô tả sân tập không thể hiện mục đích.\nKhông chọn B vì thời tiết không phải hành động có chủ đích.\nKhông chọn D vì đau tay đi ngược logic của việc học tennis."
  }),
  makeQuestion({
    id: 8,
    sentence: "Câu 8: ..., чтобы попасть вовремя на выставку.",
    choices: [
      "Мы вышли из дома пораньше",
      "Выставка открылась вчера",
      "В музее было темно",
      "Билеты стоили недорого"
    ],
    correctIndex: 0,
    full: "Мы вышли из дома пораньше, чтобы попасть вовремя на выставку.",
    viet: "Chúng tôi rời nhà sớm để đến triển lãm đúng giờ.",
    why: "Chọn A vì ra khỏi nhà sớm là hành động nhằm đạt mục tiêu đến kịp giờ. Chủ thể trùng nhau là мы.\nKhông chọn B vì đó là thông tin thời gian về triển lãm.\nKhông chọn C vì độ sáng trong bảo tàng không phải mục đích.\nKhông chọn D vì giá vé không tạo quan hệ mục đích."
  }),
  makeQuestion({
    id: 9,
    sentence: "Câu 9: ..., чтобы проветрить комнату.",
    choices: [
      "Комната была большой",
      "За окном шумела улица",
      "Она открыла окно настежь",
      "Мы купили новые шторы"
    ],
    correctIndex: 2,
    full: "Она открыла окно настежь, чтобы проветрить комнату.",
    viet: "Cô ấy mở toang cửa sổ để thông gió căn phòng.",
    why: "Chọn C vì mở cửa sổ là hành động điển hình nhằm làm thoáng phòng. Chủ thể của cả hai hành động là она.\nKhông chọn A vì đây chỉ là đặc điểm của căn phòng.\nKhông chọn B vì tiếng ồn ngoài phố không phải mục đích.\nKhông chọn D vì mua rèm không giúp trực tiếp thông gió."
  }),
  makeQuestion({
    id: 10,
    sentence: "Câu 10: ..., чтобы приготовить хороший ужин.",
    choices: [
      "Я заранее купила свежие продукты",
      "Ужин закончился поздно",
      "На кухне было тихо",
      "В холодильнике сломалась лампочка"
    ],
    correctIndex: 0,
    full: "Я заранее купила свежие продукты, чтобы приготовить хороший ужин.",
    viet: "Tôi mua nguyên liệu tươi từ trước để nấu một bữa tối ngon.",
    why: "Chọn A vì mua nguyên liệu là bước chuẩn bị có mục đích. Chủ thể trùng nhau là я.\nKhông chọn B vì đây là thông tin về thời điểm kết thúc bữa tối.\nKhông chọn C vì sự yên tĩnh trong bếp không phải mục tiêu của hành động mua đồ.\nKhông chọn D vì bóng đèn hỏng là sự cố, không phải hành động có mục đích."
  }),
  makeQuestion({
    id: 11,
    sentence: "Câu 11: ..., чтобы оплатить свою учёбу.",
    choices: [
      "Он устроился на работу по вечерам",
      "Учёба началась в сентябре",
      "В группе было двадцать студентов",
      "Университет находится в центре"
    ],
    correctIndex: 0,
    full: "Он устроился на работу по вечерам, чтобы оплатить свою учёбу.",
    viet: "Anh ấy nhận làm việc vào buổi tối để trang trải việc học của mình.",
    why: "Chọn A vì đi làm thêm có mục đích rõ ràng là kiếm tiền trả học phí. Chủ thể trùng nhau là он.\nKhông chọn B vì đó là mốc thời gian, không phải hành động.\nKhông chọn C vì số lượng sinh viên không tạo ra mục đích.\nKhông chọn D vì vị trí trường học không liên quan."
  }),
  makeQuestion({
    id: 12,
    sentence: "Câu 12: ..., чтобы лучше рассмотреть витрину.",
    choices: [
      "Она подошла поближе",
      "Витрина была очень длинной",
      "Магазин закрылся рано",
      "На улице шёл дождь"
    ],
    correctIndex: 0,
    full: "Она подошла поближе, чтобы лучше рассмотреть витрину.",
    viet: "Cô ấy bước lại gần hơn để nhìn kỹ quầy trưng bày.",
    why: "Chọn A vì lại gần là hành động phục vụ trực tiếp cho việc quan sát rõ hơn. Chủ thể trùng nhau là она.\nKhông chọn B vì chỉ mô tả витрина.\nKhông chọn C vì việc đóng cửa sớm không phải mục đích.\nKhông chọn D vì thời tiết không liên quan."
  }),
  makeQuestion({
    id: 13,
    sentence: "Câu 13: ..., чтобы поставить правильный диагноз.",
    choices: [
      "Врач назначил дополнительные анализы",
      "Диагноз записали в карточку",
      "Пациент ждал в коридоре",
      "В поликлинике было душно"
    ],
    correctIndex: 0,
    full: "Врач назначил дополнительные анализы, чтобы поставить правильный диагноз.",
    viet: "Bác sĩ chỉ định làm thêm xét nghiệm để đưa ra chẩn đoán chính xác.",
    why: "Chọn A vì chỉ định xét nghiệm là bước nhằm đạt mục đích chẩn đoán đúng. Chủ thể của hai hành động là врач.\nKhông chọn B vì đó là hành động sau khi đã có chẩn đoán.\nKhông chọn C vì người bệnh chờ ngoài hành lang không phải hành động đạt mục tiêu này.\nKhông chọn D vì hoàn cảnh oi bức không liên quan."
  }),
  makeQuestion({
    id: 14,
    sentence: "Câu 14: ..., чтобы быстрее поправиться.",
    choices: [
      "Врач пришёл утром",
      "Лекарства лежали на тумбочке",
      "Больной строго выполнял все рекомендации врача",
      "В палате было тихо"
    ],
    correctIndex: 2,
    full: "Больной строго выполнял все рекомендации врача, чтобы быстрее поправиться.",
    viet: "Người bệnh nghiêm túc làm theo mọi chỉ dẫn của bác sĩ để hồi phục nhanh hơn.",
    why: "Chọn C vì làm đúng lời dặn của bác sĩ là hành động có mục tiêu hồi phục nhanh. Chủ thể trùng nhau là больной.\nKhông chọn A vì bác sĩ đến buổi sáng không phải hành động của người cần khỏi bệnh.\nKhông chọn B vì vị trí thuốc không thể hiện mục đích.\nKhông chọn D vì sự yên tĩnh trong phòng bệnh chỉ là hoàn cảnh."
  })
];

const reviewItems = [
  {
    id: 1,
    sentence: "Мы поехали летом на море, чтобы отдохнуть перед учёбой.",
    transformed: "Мы поехали летом на море отдохнуть перед учёбой.",
    translation: "Mùa hè chúng tôi ra biển để nghỉ ngơi trước khi học.",
    correctIndex: 0,
    possible: true,
    reason: "Chủ thể chung là мы."
  },
  {
    id: 2,
    sentence: "Окна в комнате открыли, чтобы больному было легче дышать.",
    transformed: "",
    translation: "Người ta mở cửa sổ trong phòng để người bệnh dễ thở hơn.",
    correctIndex: 1,
    possible: false,
    reason: "Vế chính có chủ thể không xác định (открыли), còn vế phụ là cấu trúc trạng thái vô nhân xưng: было легче дышать."
  },
  {
    id: 3,
    sentence: "Идите осторожнее, чтобы не упасть.",
    transformed: "",
    translation: "Hãy đi cẩn thận để không bị ngã.",
    correctIndex: 2,
    possible: false,
    reason: "Vế phụ chứa phủ định не; theo lý thuyết trong phần Цель, đây là trường hợp không rút gọn bằng kết cấu nguyên thể bỏ чтобы."
  },
  {
    id: 4,
    sentence: "Мать подошла к окну, чтобы позвать детей к ужину.",
    transformed: "Мать подошла к окну позвать детей к ужину.",
    translation: "Người mẹ bước đến cửa sổ để gọi các con vào ăn tối.",
    correctIndex: 3,
    possible: true,
    reason: "Мать là người bước tới cửa sổ và cũng là người gọi bọn trẻ."
  },
  {
    id: 5,
    sentence: "Мы решили собраться, чтобы обсудить некоторые вопросы.",
    transformed: "Мы решили собраться обсудить некоторые вопросы.",
    translation: "Chúng tôi quyết định tụ họp để thảo luận một số vấn đề.",
    correctIndex: 0,
    possible: true,
    reason: "Chủ thể của cả hai hành động đều là мы."
  },
  {
    id: 6,
    sentence: "Оденься потеплее, чтобы не простудиться.",
    transformed: "",
    translation: "Hãy mặc ấm hơn để không bị cảm.",
    correctIndex: 1,
    possible: false,
    reason: "Vế phụ có phủ định не, nên không thay bằng kiểu bỏ чтобы theo đúng khung lý thuyết đang học."
  },
  {
    id: 7,
    sentence: "Он стал ходить в бассейн, чтобы его научили плавать.",
    transformed: "",
    translation: "Anh ấy bắt đầu đi bể bơi để người ta dạy anh ấy bơi.",
    correctIndex: 2,
    possible: false,
    reason: "Chủ thể khác nhau: он ходит, nhưng người dạy bơi là người khác."
  },
  {
    id: 8,
    sentence: "Она взяла с собой книгу, чтобы почитать её в метро.",
    transformed: "Она взяла с собой книгу почитать её в метро.",
    translation: "Cô ấy mang theo một cuốn sách để đọc trên tàu điện ngầm.",
    correctIndex: 3,
    possible: true,
    reason: "Она là người mang sách và cũng là người đọc."
  },
  {
    id: 9,
    sentence: "Он приходит к нам каждый день, чтобы помочь с ремонтом.",
    transformed: "Он приходит к нам каждый день помочь с ремонтом.",
    translation: "Anh ấy đến chỗ chúng tôi mỗi ngày để giúp sửa chữa.",
    correctIndex: 0,
    possible: true,
    reason: "Он là chủ thể chung của cả việc đến và việc giúp."
  },
  {
    id: 10,
    sentence: "Она взяла сына на речку, чтобы он научился плавать.",
    transformed: "",
    translation: "Cô ấy đưa con trai ra sông để cậu bé học bơi.",
    correctIndex: 1,
    possible: false,
    reason: "Chủ thể của mục đích là он (сын), khác với chủ thể của vế chính là она."
  },
  {
    id: 11,
    sentence: "Летом в это село приезжает много молодых людей, чтобы реставрировать разрушенный храм.",
    transformed: "Летом в это село приезжает много молодых людей реставрировать разрушенный храм.",
    translation: "Vào mùa hè có nhiều thanh niên đến ngôi làng này để trùng tu ngôi đền bị phá hủy.",
    correctIndex: 2,
    possible: true,
    reason: "Молодые люди là người đến làng và cũng là người trùng tu nhà thờ."
  },
  {
    id: 12,
    sentence: "Будьте внимательны на улице, чтобы не попасть под машину.",
    transformed: "",
    translation: "Hãy cẩn thận ngoài đường để không bị xe tông.",
    correctIndex: 3,
    possible: false,
    reason: "Vế phụ có phủ định не; theo phần lý thuyết đang bám sát, đây không phải trường hợp bỏ чтобы."
  },
  {
    id: 13,
    sentence: "Я дал Питеру свой паспорт, чтобы он заказал для меня билет.",
    transformed: "",
    translation: "Tôi đưa hộ chiếu của mình cho Peter để anh ấy đặt vé cho tôi.",
    correctIndex: 0,
    possible: false,
    reason: "Chủ thể khác nhau: я дал, còn он заказал."
  },
  {
    id: 14,
    sentence: "Она дала мне несколько журналов, чтобы я почитала их в дороге.",
    transformed: "",
    translation: "Cô ấy đưa tôi vài tạp chí để tôi đọc trên đường.",
    correctIndex: 1,
    possible: false,
    reason: "Chủ thể của việc đưa là она, còn chủ thể của việc đọc là я."
  },
  {
    id: 15,
    sentence: "Я купила тефлоновую сковородку, чтобы печь блины без масла.",
    transformed: "Я купила тефлоновую сковородку печь блины без масла.",
    translation: "Tôi mua chảo teflon để rán bánh blini không cần dầu.",
    correctIndex: 2,
    possible: true,
    reason: "Chủ thể chung là я."
  },
  {
    id: 16,
    sentence: "Мы закрыли окна, чтобы дождь не залил комнату.",
    transformed: "",
    translation: "Chúng tôi đóng cửa sổ để mưa không làm ngập phòng.",
    correctIndex: 3,
    possible: false,
    reason: "Vế phụ có chủ thể khác là дождь và còn có phủ định не."
  },
  {
    id: 17,
    sentence: "Приходите к нам в субботу, чтобы отметить день рождения Кэт.",
    transformed: "Приходите к нам в субботу отметить день рождения Кэт.",
    translation: "Hãy đến chỗ chúng tôi vào thứ bảy để mừng sinh nhật Kate.",
    correctIndex: 0,
    possible: true,
    reason: "Người được rủ đến cũng chính là người tham gia kỷ niệm sinh nhật."
  },
  {
    id: 18,
    sentence: "Она выглянула в окно, чтобы посмотреть, что случилось на улице.",
    transformed: "Она выглянула в окно посмотреть, что случилось на улице.",
    translation: "Cô ấy nhìn ra cửa sổ để xem ngoài phố đã xảy ra chuyện gì.",
    correctIndex: 1,
    possible: true,
    reason: "Она là người nhìn ra cửa sổ và cũng là người xem xét sự việc."
  },
  {
    id: 19,
    sentence: "Он собрал много материала, чтобы написать курсовую работу.",
    transformed: "Он собрал много материала написать курсовую работу.",
    translation: "Anh ấy thu thập nhiều tài liệu để viết bài khóa luận.",
    correctIndex: 2,
    possible: true,
    reason: "Он thực hiện cả việc thu thập tài liệu lẫn việc viết bài."
  },
  {
    id: 20,
    sentence: "Я выдвинула ящик стола, чтобы положить туда фотографии.",
    transformed: "Я выдвинула ящик стола положить туда фотографии.",
    translation: "Tôi kéo ngăn bàn ra để đặt ảnh vào đó.",
    correctIndex: 3,
    possible: true,
    reason: "Я là chủ thể chung của việc kéo ngăn kéo và cất ảnh."
  },
  {
    id: 21,
    sentence: "Он вышел на пять минут, чтобы купить сигареты в киоске.",
    transformed: "Он вышел на пять минут купить сигареты в киоске.",
    translation: "Anh ấy ra ngoài năm phút để mua thuốc lá ở quầy.",
    correctIndex: 0,
    possible: true,
    reason: "Он là người đi ra ngoài và cũng là người mua thuốc."
  },
  {
    id: 22,
    sentence: "Он обратился в справочное бюро, чтобы узнать точный адрес своего приятеля.",
    transformed: "Он обратился в справочное бюро узнать точный адрес своего приятеля.",
    translation: "Anh ấy đến phòng tra cứu để biết chính xác địa chỉ của bạn mình.",
    correctIndex: 1,
    possible: true,
    reason: "Он là chủ thể chung của việc tìm đến phòng tra cứu và việc hỏi địa chỉ."
  }
];

export const tselExercises = [
  {
    id: "ex_t1",
    num: 1,
    title: "BÀI TẬP 1: Chuyển mệnh đề mục đích sang kết cấu nguyên thể (20 câu)",
    description: "Giữ nguyên nội dung câu gốc, chọn phương án chuyển đổi đúng nhất theo lý thuyết về Цель.",
    questions: exercise1Items.map(item => makeTransformQuestion(item))
  },
  {
    id: "ex_t2",
    num: 2,
    title: "BÀI TẬP 2: Hoàn thành câu mục đích (12 câu)",
    description: "Chọn phần kết thúc phù hợp nhất cho mỗi câu với liên từ чтобы.",
    questions: exercise2Questions
  },
  {
    id: "ex_t3",
    num: 3,
    title: "BÀI TẬP 3: Điền phần đầu câu (14 câu)",
    description: "Chọn vế chính phù hợp nhất để hoàn chỉnh quan hệ mục đích.",
    questions: exercise3Questions
  },
  {
    id: "ex_t4",
    num: 4,
    title: "Повторение. Контроль (Mục đích) — Chuyển đổi và nhận diện trường hợp không rút gọn (22 câu)",
    description: "Chọn phương án đúng nhất: chuyển sang kết cấu nguyên thể nếu có thể, hoặc nhận diện câu không thể rút gọn.",
    questions: reviewItems.map(item => makeTransformQuestion(item))
  }
];
