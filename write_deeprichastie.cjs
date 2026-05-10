const fs = require('fs');
const path = require('path');

const exercises = [
  {
    id: 'ex48',
    num: 48,
    title: 'Упражнение 48 - Суффиксы деепричастий НСВ',
    description: 'Определите суффиксы деепричастий несовершенного вида (НСВ).',
    questions: [
      {
        sentence: "Играя, ребёнок может научиться читать и считать. (Играя)",
        options: ["-а", "-я", "-учи"],
        correct: "-я",
        viet: "Trong khi chơi, trẻ có thể học đọc và học đếm.",
        why: "Từ động từ играть -> играют -> bỏ -ют thêm -я."
      },
      {
        sentence: "Он шёл по улице, никуда не спеша. (спеша)",
        options: ["-а", "-я", "-учи"],
        correct: "-а",
        viet: "Anh ấy đi dạo trên phố, không vội vã đi đâu cả.",
        why: "Từ động từ спешить -> спешат -> bỏ -ат thêm -а (sau phụ âm ш)."
      },
      {
        sentence: "Я всегда радуюсь, встречаясь со старыми друзьями. (встречаясь)",
        options: ["-ась", "-ясь", "-вшись"],
        correct: "-ясь",
        viet: "Tôi luôn cảm thấy vui mừng khi gặp lại những người bạn cũ.",
        why: "Từ động từ встречаться -> встречаются -> bỏ -ются thêm -ясь."
      }
    ]
  },
  {
    id: 'ex49',
    num: 49,
    title: 'Упражнение 49 - От каких глаголов образованы?',
    description: 'Определите, от каких глаголов образованы данные деепричастия НСВ.',
    questions: [
      {
        sentence: "Завтракая, она ...",
        options: ["завтракать", "позавтракать", "завтрак"],
        correct: "завтракать",
        viet: "Trong lúc ăn sáng, cô ấy...",
        why: "Từ động từ НСВ 'завтракать'."
      },
      {
        sentence: "Уходя в университет, я ...",
        options: ["уходить", "уйти", "ходить"],
        correct: "уходить",
        viet: "Khi rời khỏi nhà đến trường đại học, tôi...",
        why: "Từ động từ НСВ 'уходить'."
      },
      {
        sentence: "Отвечая на наши вопросы, преподаватель ...",
        options: ["ответить", "отвечать", "ответ"],
        correct: "отвечать",
        viet: "Khi trả lời các câu hỏi của chúng tôi, giảng viên...",
        why: "Từ động từ НСВ 'отвечать'."
      }
    ]
  },
  {
    id: 'ex51',
    num: 51,
    title: 'Упражнение 51 - Образование деепричастий НСВ',
    description: 'Образуйте деепричастия НСВ от данных глаголов.',
    questions: [
      {
        sentence: "заниматься",
        options: ["занимаясь", "занимавшись", "занявшись"],
        correct: "занимаясь",
        viet: "học tập, làm việc",
        why: "занимаются -> занимаясь."
      },
      {
        sentence: "давать",
        options: ["давая", "давав", "дающий"],
        correct: "давая",
        viet: "cho, đưa",
        why: "Từ động từ gốc -давать giữ nguyên -ва- -> давая."
      },
      {
        sentence: "танцевать",
        options: ["танцевая", "танцуя", "танцующий"],
        correct: "танцуя",
        viet: "khiêu vũ",
        why: "танцуют -> танцуя."
      },
      {
        sentence: "улыбаться",
        options: ["улыбаясь", "улыбнувшись", "улыбавшись"],
        correct: "улыбаясь",
        viet: "mỉm cười",
        why: "улыбаются -> улыбаясь."
      }
    ]
  },
  {
    id: 'ex52',
    num: 52,
    title: 'Упражнение 52 - Замена придаточных (Когда... -> деепричастие)',
    description: 'Закончите предложения, заменив придаточные времени деепричастными оборотами.',
    questions: [
      {
        sentence: "Когда мой друг приезжает в Петербург, он обязательно звонит мне.",
        options: ["Приезжая в Петербург", "Приехав в Петербург", "Приезжающий в Петербург"],
        correct: "Приезжая в Петербург",
        viet: "Mỗi khi bạn tôi đến Petersburg, cậu ấy nhất định gọi cho tôi.",
        why: "Hành động lặp đi lặp lại ở hiện tại/tương lai (приезжает) -> Приезжая."
      },
      {
        sentence: "Если мы будем анализировать данные примеры, мы сможем понять правило.",
        options: ["Анализировав данные примеры", "Анализируя данные примеры", "Проанализировав данные примеры"],
        correct: "Анализируя данные примеры",
        viet: "Nếu chúng ta phân tích các ví dụ này, chúng ta sẽ có thể hiểu được quy tắc.",
        why: "Hành động quá trình (будем анализировать) -> Анализируя."
      },
      {
        sentence: "Когда рассчитывают налоги, следует учитывать все доходы.",
        options: ["Рассчитывая налоги", "Рассчитав налоги", "Рассчитывающие налоги"],
        correct: "Рассчитывая налоги",
        viet: "Khi tính toán các khoản thuế, cần phải tính đến tất cả các nguồn thu nhập.",
        why: "Hành động đang diễn ra (рассчитывают) -> Рассчитывая."
      }
    ]
  },
  {
    id: 'ex54',
    num: 54,
    title: 'Упражнение 54 - Образование деепричастий (На контроль)',
    description: 'Раскройте скобки, образуя от глаголов деепричастия.',
    questions: [
      {
        sentence: "Сон даёт отдых, ... (помогать) человеку расслабиться.",
        options: ["помогав", "помогая", "помогши"],
        correct: "помогая",
        viet: "Giấc ngủ mang lại sự nghỉ ngơi, giúp con người thư giãn.",
        why: "помогать (НСВ) -> помогают -> помогая."
      },
      {
        sentence: "Можно возместить дефицит полезных веществ, ... (вводить) в рацион добавки.",
        options: ["вводя", "введя", "вводив"],
        correct: "вводя",
        viet: "Có thể bù đắp sự thiếu hụt các chất có lợi bằng cách đưa các chất bổ sung vào khẩu phần ăn.",
        why: "вводить (НСВ) -> вводят -> вводя."
      },
      {
        sentence: "Результаты высчитывали по специальной шкале, ... (заносить) их в формулу.",
        options: ["заносив", "занеся", "занося"],
        correct: "занося",
        viet: "Kết quả được tính toán theo một thang đo đặc biệt, được đưa vào công thức.",
        why: "заносить (НСВ) -> заносят -> занося."
      }
    ]
  },
  {
    id: 'ex57',
    num: 57,
    title: 'Упражнение 57 - Суффиксы деепричастий СВ',
    description: 'Определите суффиксы деепричастий совершенного вида (СВ).',
    questions: [
      {
        sentence: "Прочитав одну книгу, он взял другую. (Прочитав)",
        options: ["-в", "-вши", "-ши"],
        correct: "-в",
        viet: "Sau khi đọc xong một cuốn sách, anh ấy lại lấy cuốn khác.",
        why: "Từ động từ СВ 'прочитать' (kết thúc bằng nguyên âm) -> thêm hậu tố -в."
      },
      {
        sentence: "Умывшись, он стал одеваться. (Умывшись)",
        options: ["-в", "-вшись", "-шись"],
        correct: "-вшись",
        viet: "Sau khi rửa mặt xong, anh ấy bắt đầu mặc quần áo.",
        why: "Từ động từ phản thân 'умыться' -> dùng hậu tố -вшись."
      },
      {
        sentence: "Они шли, взявшись за руки. (взявшись)",
        options: ["-в", "-вшись", "-шись"],
        correct: "-вшись",
        viet: "Họ bước đi, tay trong tay (sau khi đã nắm tay nhau).",
        why: "Từ động từ phản thân 'взяться' -> dùng hậu tố -вшись."
      }
    ]
  },
  {
    id: 'ex58',
    num: 58,
    title: 'Упражнение 58 - От каких глаголов СВ образованы?',
    description: 'Определите, от каких глаголов образованы данные деепричастия СВ.',
    questions: [
      {
        sentence: "Напечатав статью, она...",
        options: ["печатать", "напечатать", "отпечатать"],
        correct: "напечатать",
        viet: "Sau khi đánh máy (hoặc in) xong bài báo, cô ấy...",
        why: "Từ động từ СВ 'напечатать'."
      },
      {
        sentence: "Не узнав новое расписание, ты не сможешь...",
        options: ["узнавать", "узнать", "знать"],
        correct: "узнать",
        viet: "Nếu chưa biết thời khóa biểu mới, bạn sẽ không thể...",
        why: "Từ động từ СВ 'узнать'."
      },
      {
        sentence: "Тепло одевшись, он...",
        options: ["одеваться", "одеться", "надеть"],
        correct: "одеться",
        viet: "Sau khi mặc quần áo ấm, anh ấy...",
        why: "Từ động từ СВ phản thân 'одеться'."
      }
    ]
  },
  {
    id: 'ex60',
    num: 60,
    title: 'Упражнение 60 - Образование деепричастий СВ',
    description: 'Образуйте деепричастия СВ от данных глаголов.',
    questions: [
      {
        sentence: "отдохнуть",
        options: ["отдыхая", "отдохнув", "отдохнувши"],
        correct: "отдохнув",
        viet: "nghỉ ngơi",
        why: "отдохнуть (quá khứ отдохнул) -> bỏ -л thêm -в -> отдохнув."
      },
      {
        sentence: "улыбнуться",
        options: ["улыбаясь", "улыбнувшись", "улыбнув"],
        correct: "улыбнувшись",
        viet: "mỉm cười",
        why: "улыбнуться (quá khứ улыбнулся) -> bỏ -лся thêm -вшись -> улыбнувшись."
      },
      {
        sentence: "начать",
        options: ["начиная", "начав", "начавши"],
        correct: "начав",
        viet: "bắt đầu",
        why: "начать -> начал -> начав."
      },
      {
        sentence: "подготовиться",
        options: ["готовясь", "подготовившись", "подготовив"],
        correct: "подготовившись",
        viet: "chuẩn bị xong",
        why: "подготовиться -> подготовился -> подготовившись."
      }
    ]
  },
  {
    id: 'ex62',
    num: 62,
    title: 'Упражнение 62 - Особые деепричастия СВ (с суффиксом -я)',
    description: 'Обратите внимание: от некоторых глаголов движения СВ деепричастия образуются с суффиксом -я.',
    questions: [
      {
        sentence: "... (Прийти) в университет, он вспомнил, что забыл дома тетрадь.",
        options: ["Придя", "Придев", "Пришедши"],
        correct: "Придя",
        viet: "Khi đến trường đại học, cậu ấy nhớ ra mình đã để quên vở ở nhà.",
        why: "прийти -> придя (dạng bất quy tắc của động từ chuyển động СВ)."
      },
      {
        sentence: "... (Перейти) на другой факультет, он понял, что ошибся.",
        options: ["Перейдя", "Перейтив", "Перешедши"],
        correct: "Перейдя",
        viet: "Sau khi chuyển sang khoa khác, cậu ấy nhận ra mình đã sai lầm.",
        why: "перейти -> перейдя."
      },
      {
        sentence: "Не ... (найти) в сумочке свой проездной, она должна была купить билет.",
        options: ["нашедши", "найдя", "находив"],
        correct: "найдя",
        viet: "Không tìm thấy vé tháng trong túi xách, cô ấy đành phải mua vé lẻ.",
        why: "найти -> найдя."
      },
      {
        sentence: "... (Отвести) детей в школу, мать начала готовить обед.",
        options: ["Отведя", "Отведши", "Отведив"],
        correct: "Отведя",
        viet: "Sau khi đưa các con đến trường, người mẹ bắt đầu nấu bữa trưa.",
        why: "отвести -> отведя."
      }
    ]
  },
  {
    id: 'ex64',
    num: 64,
    title: 'Упражнение 64 - Деепричастия СВ (На контроль)',
    description: 'Раскройте скобки, образуя от глаголов СВ деепричастия.',
    questions: [
      {
        sentence: "Делать коррекцию зрения можно, лишь предварительно ... (проконсультироваться) со специалистами.",
        options: ["проконсультируясь", "проконсультировавшись", "проконсультировав"],
        correct: "проконсультировавшись",
        viet: "Bạn chỉ có thể thực hiện phẫu thuật điều chỉnh thị lực sau khi đã tham khảo ý kiến chuyên gia.",
        why: "проконсультироваться (СВ, phản thân) -> проконсультировавшись."
      },
      {
        sentence: "... (Окончить) колледж и ... (поступить) на работу в банк, американка столкнулась с нехваткой времени.",
        options: ["Оканчивая, поступая", "Окончив, поступив", "Окончивши, поступивши"],
        correct: "Окончив, поступив",
        viet: "Sau khi tốt nghiệp trường cao đẳng và vào làm việc tại ngân hàng, người phụ nữ Mỹ đã phải đối mặt với việc thiếu thời gian.",
        why: "Cả hai đều là СВ -> Окончив, поступив."
      },
      {
        sentence: "... (Провести) многочисленные опыты, психологи установили, что за каникулы школьники глупеют.",
        options: ["Проведя", "Проводив", "Проведши"],
        correct: "Проведя",
        viet: "Sau khi tiến hành vô số thí nghiệm, các nhà tâm lý học đã phát hiện ra rằng sau kỳ nghỉ hè, học sinh trở nên 'ngốc' đi.",
        why: "провести (СВ, dạng giống глаголы движения) -> Проведя."
      },
      {
        sentence: "... (Опросить) и ... (обследовать) около 10 тысяч британцев, психологи пришли к выводу...",
        options: ["Опрашивая, обследуя", "Опросив, обследовав", "Опросивши, обследовавши"],
        correct: "Опросив, обследовав",
        viet: "Sau khi khảo sát và kiểm tra khoảng 10 nghìn người Anh, các nhà tâm lý học đã đi đến kết luận...",
        why: "Cả hai đều là СВ -> Опросив, обследовав."
      }
    ]
  },
  {
    id: 'ex67',
    num: 67,
    title: 'Упражнение 67 - Смешанные деепричастия (М.И. Глинка)',
    description: 'От данных в скобках глаголов образуйте деепричастия либо НСВ, либо СВ.',
    questions: [
      {
        sentence: "Он родился в 1804 г., ... (стать) впоследствии гордостью русской музыки.",
        options: ["становясь", "став", "ставши"],
        correct: "став",
        viet: "Ông sinh năm 1804, sau này đã trở thành niềm tự hào của âm nhạc Nga.",
        why: "Hành động đã hoàn tất mang kết quả (СВ) -> став."
      },
      {
        sentence: "Долгие годы ... (провести) в имении отца, он всем сердцем полюбил народные песни.",
        options: ["проводя", "проведя", "проводив"],
        correct: "проведя",
        viet: "Sau khi trải qua nhiều năm tháng ở dinh thự của cha mình, ông đã đem lòng yêu mến các bài hát dân ca.",
        why: "провести (СВ) -> проведя (hoặc проводив - từ НСВ проводить, nhưng ở đây проведя từ СВ)."
      },
      {
        sentence: "... (Спасаться) от нашествия наполеоновской армии, семья Глинки покинула имение.",
        options: ["Спасшись", "Спасаясь", "Спасавшись"],
        correct: "Спасаясь",
        viet: "Trong khi chạy trốn khỏi cuộc xâm lược của quân đội Napoléon, gia đình Glinka đã rời bỏ dinh thự.",
        why: "Hành động đang diễn ra đồng thời (НСВ) -> Спасаясь."
      },
      {
        sentence: "... (Окончить) в Петербурге обучение, Глинка поступил на службу.",
        options: ["Оканчивая", "Окончив", "Окончивши"],
        correct: "Окончив",
        viet: "Sau khi hoàn thành việc học ở Petersburg, Glinka bắt đầu làm việc trong cơ quan nhà nước.",
        why: "Hành động hoàn tất trước hành động chính (СВ) -> Окончив."
      },
      {
        sentence: "Умер Глинка в 1857 г., ... (прожить) всего 53 года.",
        options: ["проживая", "прожив", "проживши"],
        correct: "прожив",
        viet: "Glinka qua đời năm 1857, chỉ sống được vỏn vẹn 53 năm.",
        why: "Hành động hoàn tất (СВ) -> прожив."
      }
    ]
  }
];

const fileContent = 'export const deeprichastieExercises = ' + JSON.stringify(exercises, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, 'src', 'formy_glagola', 'data', 'ex_deeprichastie.js'), fileContent, 'utf8');
console.log('Successfully wrote ex_deeprichastie.js');
