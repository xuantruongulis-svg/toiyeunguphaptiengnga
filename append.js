const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'practical_exercises.js');
let content = fs.readFileSync(filePath, 'utf8');

const newExercises = `
  ,
  {
    id: 'ex118',
    num: 118,
    title: 'Упражнение 118 - ТЕСТ ТРКИ-2, 3',
    description: 'Выполните тест за 10 минут. Выберите правильный вариант.',
    questions: [
      {
        sentence: "На следующем семинаре мы детально … этот вопрос.",
        options: ["осмотрим", "просмотрим", "подсмотрим", "рассмотрим"],
        correct: "рассмотрим",
        viet: "Tại buổi hội thảo tiếp theo, chúng ta sẽ xem xét vấn đề này một cách chi tiết.",
        why: "рассмотреть вопрос: xem xét, nghiên cứu, bàn luận chi tiết về một vấn đề."
      },
      {
        sentence: "Председательствующий … список выступающих.",
        options: ["вчитался", "зачитал", "отчитал", "отчитался"],
        correct: "зачитал",
        viet: "Người chủ tọa đã đọc to danh sách những người phát biểu.",
        why: "зачитать: đọc to lên một văn bản, danh sách cho mọi người cùng nghe."
      },
      {
        sentence: "Будьте любезны, … этот документ!",
        options: ["выпишите", "отпишите", "подпишите", "распишитесь"],
        correct: "подпишите",
        viet: "Làm ơn ký vào tài liệu này!",
        why: "подписать что (Cách 4): ký vào một tài liệu. Ở đây 'этот документ' là Cách 4 nên chọn подпишите (nếu là 'в этом документе' (Cách 6) thì dùng распишитесь)."
      },
      {
        sentence: "Вы должны … о проделанной вами работе.",
        options: ["вчитаться", "зачитаться", "начитаться", "отчитаться"],
        correct: "отчитаться",
        viet: "Bạn phải báo cáo về công việc đã thực hiện.",
        why: "отчитаться о чём: báo cáo, giải trình về việc gì."
      },
      {
        sentence: "В регистратуре поликлиники ему сказали, что на приём к хирургу надо … заранее.",
        options: ["вписаться", "записываться", "прописаться", "написать"],
        correct: "записываться",
        viet: "Ở quầy đăng ký của phòng khám, người ta nói với anh ấy rằng cần phải đặt lịch hẹn khám bác sĩ phẫu thuật từ trước.",
        why: "записываться на приём: đăng ký, đặt lịch hẹn (khám bệnh)."
      },
      {
        sentence: "Эти девочки болтают весь урок, но всё никак не могут … .",
        options: ["наговориться", "оговориться", "переговорить", "разговориться"],
        correct: "наговориться",
        viet: "Mấy cô bé này tán gẫu suốt cả tiết học mà vẫn chưa thể nói chuyện cho thỏa thích.",
        why: "не могут наговориться: mải nói chuyện không chán, nói mãi không hết chuyện."
      },
      {
        sentence: "Это замечательная повесть, надо … в каждую строку, в каждую фразу!",
        options: ["вчитываться", "вычитывать", "отчитывать", "прочитывать"],
        correct: "вчитываться",
        viet: "Đây là một câu chuyện tuyệt vời, cần phải đọc ngẫm nghĩ vào từng dòng, từng câu!",
        why: "вчитываться во что: đọc kỹ lưỡng để thấu hiểu ý nghĩa sâu xa."
      },
      {
        sentence: "Учёные не могут … всех возможных последствий открытого ими явления.",
        options: ["высмотреть", "подсмотреть", "предусмотреть", "усмотреть"],
        correct: "предусмотреть",
        viet: "Các nhà khoa học không thể lường trước được mọi hậu quả có thể xảy ra của hiện tượng mà họ khám phá ra.",
        why: "предусмотреть: lường trước, dự trù, tiên liệu."
      },
      {
        sentence: "Наш общий знакомый будет … на конференции, которая пройдёт с 5 по 10 августа.",
        options: ["выступать", "поступать", "наступать", "приступать"],
        correct: "выступать",
        viet: "Người quen chung của chúng ta sẽ phát biểu tại hội nghị diễn ra từ mùng 5 đến mùng 10 tháng 8.",
        why: "выступать: phát biểu, trình diễn trước đám đông."
      },
      {
        sentence: "Тебе не стоит … меня от поездки: я и сам не хочу ехать.",
        options: ["выговаривать", "приговаривать", "отговаривать", "уговаривать"],
        correct: "отговаривать",
        viet: "Cậu không cần phải khuyên can tôi đừng đi chuyến này đâu: bản thân tôi cũng không muốn đi.",
        why: "отговаривать: khuyên can ai đó đừng làm việc gì (trái nghĩa với уговаривать - thuyết phục ai làm gì)."
      },
      {
        sentence: "Ожог на его руке довольно быстро … .",
        options: ["выжил", "зажил", "ожил", "пережил"],
        correct: "зажил",
        viet: "Vết bỏng trên tay anh ấy đã lành lại khá nhanh.",
        why: "зажить: lành lại (nói về vết thương, vết bỏng)."
      },
      {
        sentence: "Ты знаешь, японским студентам всегда трудно … звуки «р» и «л».",
        options: ["выговаривать", "говорить", "разговаривать", "уговаривать"],
        correct: "выговаривать",
        viet: "Cậu biết không, sinh viên Nhật Bản luôn gặp khó khăn trong việc phát âm âm 'r' và 'l'.",
        why: "выговаривать: phát âm (nhấn mạnh khả năng phát ra một âm thanh khó)."
      },
      {
        sentence: "Врач быстро … больного и назначил лечение.",
        options: ["всмотрелся", "рассмотрел", "осмотрел", "просмотрел"],
        correct: "осмотрел",
        viet: "Bác sĩ đã khám nhanh cho bệnh nhân và chỉ định phương pháp điều trị.",
        why: "осмотреть: khám bệnh, kiểm tra cơ thể bệnh nhân."
      },
      {
        sentence: "Посмотрите, какой рецепт … мне доктор!",
        options: ["выписал", "описал", "прописал", "подписался"],
        correct: "выписал",
        viet: "Hãy xem bác sĩ đã kê cho tôi đơn thuốc gì này!",
        why: "выписать рецепт: kê đơn thuốc."
      },
      {
        sentence: "Учись себя вести, … на родителей!",
        options: ["смотри", "всматривайся", "рассматривай", "присматривайся"],
        correct: "смотри",
        viet: "Hãy học cách cư xử đi, hãy nhìn vào bố mẹ mà học tập!",
        why: "смотреть на кого: nhìn vào tấm gương của ai đó để học hỏi (nghĩa bóng)."
      },
      {
        sentence: "Он так ничего и не услышал, хотя очень внимательно … к разговору за стеной.",
        options: ["слушал", "вслушивался", "подслушивал", "прислушивался"],
        correct: "прислушивался",
        viet: "Anh ấy rốt cuộc vẫn không nghe thấy gì, mặc dù đã dỏng tai lắng nghe rất chăm chú cuộc nói chuyện sau bức tường.",
        why: "прислушиваться к чему (к разговору): nghiêng tai, chăm chú lắng nghe để cố gắng nắm bắt âm thanh."
      },
      {
        sentence: "Она бросила университет, но потом … и восстановилась.",
        options: ["вдумалась", "выдумала", "одумалась", "придумала"],
        correct: "одумалась",
        viet: "Cô ấy đã bỏ đại học, nhưng sau đó đã thức tỉnh (nghĩ lại) và phục hồi lại việc học.",
        why: "одуматься: suy nghĩ lại, tỉnh ngộ và thay đổi quyết định sai lầm."
      },
      {
        sentence: "Этот парень днём учится, а вечером … в кафе.",
        options: ["вырабатывает", "дорабатывает", "подрабатывает", "прорабатывает"],
        correct: "подрабатывает",
        viet: "Cậu thanh niên này ban ngày đi học, còn buổi tối thì làm thêm ở quán cà phê.",
        why: "подрабатывать: làm thêm để kiếm thêm thu nhập."
      },
      {
        sentence: "Всё будет хорошо! Пожалуйста, не … так сильно из-за экзамена!",
        options: ["настраивайся", "пристраивайся", "расстраивайся", "подстраивайся"],
        correct: "расстраивайся",
        viet: "Mọi chuyện sẽ ổn thôi! Làm ơn đừng buồn bã/lo lắng quá vì kỳ thi!",
        why: "расстраиваться: buồn bã, thất vọng, lo âu (tâm trạng bị phá hỏng)."
      },
      {
        sentence: "Школьные годы навсегда … нам.",
        options: ["помнятся", "вспомнятся", "запомнятся", "припомнятся"],
        correct: "запомнятся",
        viet: "Những năm tháng học trò sẽ mãi được chúng tôi ghi nhớ.",
        why: "запомниться кому: để lại kỷ niệm, được ai đó ghi nhớ (thường dùng ở dạng tự phản)."
      },
      {
        sentence: "В последние годы всё больше и больше стран … смертную казнь.",
        options: ["меняет", "изменяет", "отменяет", "применяет"],
        correct: "отменяет",
        viet: "Trong những năm gần đây, ngày càng nhiều quốc gia bãi bỏ án tử hình.",
        why: "отменять: bãi bỏ, hủy bỏ (một đạo luật, hình phạt, chuyến bay)."
      },
      {
        sentence: "Наш сосед полностью … свой загородный дом, дом стал ещё красивее.",
        options: ["настроил", "подстроил", "перестроил", "расстроил"],
        correct: "перестроил",
        viet: "Người hàng xóm của chúng tôi đã xây dựng lại hoàn toàn ngôi nhà ngoại ô của mình, nó trở nên đẹp hơn nữa.",
        why: "перестроить: xây dựng lại, cải tạo lại (nhà cửa)."
      },
      {
        sentence: "В диссертации был … сопоставительный метод исследования.",
        options: ["отменён", "применён", "подменён", "заменён"],
        correct: "применён",
        viet: "Trong luận án, phương pháp nghiên cứu đối chiếu đã được áp dụng.",
        why: "применить (bị động: применён): được áp dụng, được sử dụng."
      },
      {
        sentence: "У нас будут гости, и мы … пельменей — будем варить!",
        options: ["делали", "выделали", "наделали", "переделали"],
        correct: "наделали",
        viet: "Nhà chúng ta sẽ có khách, và chúng ta đã làm rất nhiều bánh pelmeni — giờ sẽ đem luộc!",
        why: "наделать: làm ra với số lượng lớn."
      }
    ]
  },
  {
    id: 'ex119',
    num: 119,
    title: 'Упражнение 119 - ТЕСТ ТРКИ-3, 4',
    description: 'Выполните тест за 10 минут. Выберите правильный вариант.',
    questions: [
      {
        sentence: "Надо наглухо … щель в двери.",
        options: ["сделать", "доделать", "заделать", "проделать"],
        correct: "заделать",
        viet: "Cần phải bịt kín bưng khe hở ở cửa ra vào.",
        why: "заделать: lấp, bịt, vá lại (khe hở, lỗ thủng)."
      },
      {
        sentence: "Ты поранился? Надо … руку йодом или спиртом.",
        options: ["доработать", "проработать", "выработать", "обработать"],
        correct: "обработать",
        viet: "Cậu bị thương à? Phải sát trùng tay bằng cồn hoặc i-ốt.",
        why: "обработать: xử lý bề mặt, sát trùng vết thương."
      },
      {
        sentence: "Пожалуйста, … это слово ещё раз по слогам!",
        options: ["выговори", "наговори", "проговори", "переговори"],
        correct: "проговори",
        viet: "Làm ơn đọc chậm lại (đánh vần) từ này từng âm tiết một lần nữa!",
        why: "проговорить: nói rõ ràng rành mạch, phát âm rõ (по слогам - theo từng âm tiết)."
      },
      {
        sentence: "Отвернись и не … , куда мы будем прятать игрушку!",
        options: ["всматривайся", "засматривайся", "подсматривай", "рассматривай"],
        correct: "подсматривай",
        viet: "Hãy quay mặt đi và đừng nhìn lén xem bọn tớ giấu đồ chơi ở đâu nhé!",
        why: "подсматривать: nhìn lén, xem trộm."
      },
      {
        sentence: "У них была двухэтажная дача, сейчас они к ней … ещё веранду.",
        options: ["встроили", "надстроили", "пристроили", "расстроили"],
        correct: "пристроили",
        viet: "Họ từng có một ngôi nhà nghỉ dưỡng 2 tầng, bây giờ họ đã xây thêm một mái hiên nối vào đó.",
        why: "пристроить к чему: xây cơi nới, xây thêm vào cấu trúc có sẵn (thường là xây thêm bên cạnh)."
      },
      {
        sentence: "Новую квартиру надо хорошенько … .",
        options: ["возделать", "отделать", "проделать", "разделать"],
        correct: "отделать",
        viet: "Căn hộ mới cần phải được hoàn thiện nội thất thật kỹ.",
        why: "отделать: trang trí, hoàn thiện bề mặt/nội thất."
      },
      {
        sentence: "Пожалуйста, … к нашему новому сотруднику: мне кажется, он плохо работает.",
        options: ["посмотри", "всмотрись", "рассмотри", "присмотрись"],
        correct: "присмотрись",
        viet: "Làm ơn quan sát kỹ người nhân viên mới của chúng ta nhé: tôi có cảm giác anh ta làm việc không tốt.",
        why: "присмотреться к кому: quan sát, theo dõi cặn kẽ hành vi của ai đó để đánh giá."
      },
      {
        sentence: "Неправда! Ты не бездарность, не … на себя!",
        options: ["выговаривай", "наговаривай", "обговаривай", "оговаривай"],
        correct: "наговаривай",
        viet: "Không đúng! Cậu không hề bất tài, đừng tự vu oan/nói xấu bản thân mình!",
        why: "наговаривать на кого-либо: vu khống, nói sai sự thật để bôi nhọ (kể cả với bản thân mình)."
      },
      {
        sentence: "Штрафные санкции условиями контракта не … .",
        options: ["выговариваются", "оговариваются", "переговариваются", "проговариваются"],
        correct: "оговариваются",
        viet: "Các chế tài phạt không được nêu rõ trong các điều khoản của hợp đồng.",
        why: "оговариваться: được quy định, được quy ước/thỏa thuận rõ."
      },
      {
        sentence: "Ты не знаешь, твой сосед уже … газеты и журналы на это полугодие?",
        options: ["выписал", "подписал", "подписался", "записался"],
        correct: "выписал",
        viet: "Cậu có biết hàng xóm của cậu đã đặt mua báo và tạp chí cho nửa năm nay chưa?",
        why: "выписать что: đặt mua ấn phẩm. (Nếu dùng подписаться thì phải là подписался на газеты)."
      },
      {
        sentence: "Ты знаешь, что этот собор … сам Андрей Рублёв?",
        options: ["писал", "выписал", "прописал", "расписал"],
        correct: "расписал",
        viet: "Cậu có biết nhà thờ này do chính tay họa sĩ Andrei Rublev vẽ bích họa trang trí không?",
        why: "расписать: vẽ trang trí tường (bích họa)."
      },
      {
        sentence: "Мы … и не заметили, что уже поздно и пора идти домой.",
        options: ["проговорили", "выговорились", "заговорились", "отговорились"],
        correct: "заговорились",
        viet: "Chúng tôi mải nói chuyện đến quên cả thời gian và không để ý rằng đã khuya và đến lúc phải về nhà.",
        why: "заговориться: mải mê nói chuyện, quên hết xung quanh."
      },
      {
        sentence: "Родители хотели, чтобы сын поступал на юридический факультет, но сын … родителей и стал артистом.",
        options: ["заслушался", "ослушался", "прослушал", "послушался"],
        correct: "ослушался",
        viet: "Bố mẹ muốn con trai thi vào trường luật, nhưng người con đã làm trái lời bố mẹ và trở thành nghệ sĩ.",
        why: "ослушаться кого: không vâng lời, làm trái mệnh lệnh của ai."
      },
      {
        sentence: "С этого холма дорога хорошо … .",
        options: ["высматривается", "осматривается", "просматривается", "рассматривается"],
        correct: "просматривается",
        viet: "Từ ngọn đồi này có thể nhìn thấy đường đi rất rõ.",
        why: "просматриваться: có thể nhìn thấy được (thường nói về tầm nhìn, cảnh quan)."
      },
      {
        sentence: "Уважаемые студенты! В течение семестра вы … курс лекций по русской истории.",
        options: ["выслушали", "заслушали", "переслушали", "прослушали"],
        correct: "прослушали",
        viet: "Các em sinh viên thân mến! Trong suốt học kỳ, các em đã tham dự toàn bộ khóa học về lịch sử nước Nga.",
        why: "прослушать курс/лекцию: hoàn thành việc nghe một khóa học/bài giảng."
      },
      {
        sentence: "Почему ты спрашиваешь меня, где я был? Я не должен перед тобой … !",
        options: ["вычитывать", "зачитывать", "зачитываться", "отчитываться"],
        correct: "отчитываться",
        viet: "Sao cậu lại tra khảo tôi đã ở đâu chứ? Tôi không có nghĩa vụ phải báo cáo với cậu!",
        why: "отчитываться перед кем: báo cáo, khai báo, giải trình với ai đó."
      },
      {
        sentence: "Ночью он вышел на улицу и … в темноте.",
        options: ["всмотрелся", "засмотрелся", "осмотрелся", "насмотрелся"],
        correct: "осмотрелся",
        viet: "Ban đêm anh ấy bước ra phố và nhìn quanh trong bóng tối.",
        why: "осмотреться: nhìn xung quanh (để định hình, làm quen)."
      },
      {
        sentence: "Эта девушка, несомненно, … нашему новому сотруднику.",
        options: ["нагляделась", "пригляделась", "приглянулась", "загляделась"],
        correct: "приглянулась",
        viet: "Cô gái này chắc chắn đã lọt vào mắt xanh của anh nhân viên mới chỗ chúng ta.",
        why: "приглянуться кому: làm ai đó thấy vừa mắt, có thiện cảm."
      },
      {
        sentence: "Что ты сказал? Извини, я ничего не могу … !",
        options: ["вслушаться", "ослышаться", "прослышать", "расслышать"],
        correct: "расслышать",
        viet: "Cậu nói gì cơ? Xin lỗi, tôi không nghe rõ được gì cả!",
        why: "расслышать: nghe rõ lời nói (thường dùng với thể phủ định - не мочь расслышать)."
      },
      {
        sentence: "Мой друг … макеты парусных кораблей.",
        options: ["заготовил", "изготовил", "приготовил", "наготовил"],
        correct: "изготовил",
        viet: "Bạn tôi đã chế tạo/sản xuất ra các mô hình thuyền buồm.",
        why: "изготовить: chế tạo, làm ra một vật thể (máy móc, mô hình, chi tiết)."
      },
      {
        sentence: "Это очень старая традиция, она уже … своё!",
        options: ["выжила", "отжила", "пережила", "прожила"],
        correct: "отжила",
        viet: "Đây là một truyền thống rất cũ kỹ, nó đã hết thời/lỗi thời rồi!",
        why: "отжить своё: lỗi thời, đã hoàn thành vai trò lịch sử của mình."
      },
      {
        sentence: "Зачем ты ушёл так далеко? В толпе людей мне к тебе не … !",
        options: ["пробраться", "собраться", "разобраться", "прибраться"],
        correct: "пробраться",
        viet: "Sao anh đi xa thế? Trong đám đông thế này em không thể chen qua được chỗ anh đâu!",
        why: "пробраться: luồn lách, chen lấn đi qua (đám đông, rừng rậm)."
      },
      {
        sentence: "Это кольцо … по наследству: от бабушки — к матери, от матери — к дочери.",
        options: ["передаётся", "задаётся", "отдаётся", "продаётся"],
        correct: "передаётся",
        viet: "Chiếc nhẫn này được truyền lại như một báu vật gia truyền: từ bà sang mẹ, từ mẹ sang con gái.",
        why: "передаваться (по наследству): được truyền lại, lưu truyền (thế hệ này sang thế hệ khác)."
      },
      {
        sentence: "Вы должны … доставку компьютера на дом.",
        options: ["выплатить", "доплатить", "заплатить", "оплатить"],
        correct: "оплатить",
        viet: "Bạn phải thanh toán phí giao máy tính đến tận nhà.",
        why: "оплатить что (Cách 4, không giới từ): thanh toán tiền cho một dịch vụ nào đó (оплатить доставку, проезд, счёт)."
      }
    ]
  }
];
`;

content = content.replace(/];$/, newExercises);

fs.writeFileSync(filePath, content);
console.log('Successfully appended ex118 and ex119 to practical_exercises.js');
