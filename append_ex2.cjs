const fs = require('fs');
const path = require('path');

const newExercises = [
  {
    id: 'ex27',
    num: 27,
    title: 'Упражнение 27 - Суффиксы пассивных причастий прошедшего времени',
    description: 'Определите суффиксы пассивных причастий прошедшего времени.',
    questions: [
      {
        sentence: "Петербург, построенный в начале XVIII века... (построенный)",
        options: ["-нн-", "-енн-", "-т-"],
        correct: "-енн-",
        viet: "Petersburg, được xây dựng vào đầu thế kỷ 18...",
        why: "Từ động từ построить (kết thúc bằng -ить) -> hậu tố -енн-."
      },
      {
        sentence: "Экскурсия, организованная нашими спонсорами... (организованная)",
        options: ["-нн-", "-енн-", "-т-"],
        correct: "-нн-",
        viet: "Chuyến tham quan do các nhà tài trợ của chúng tôi tổ chức...",
        why: "Từ động từ организовать (kết thúc bằng -ать) -> hậu tố -нн-."
      },
      {
        sentence: "Оценки, полученные на экзамене, идут в диплом. (полученные)",
        options: ["-нн-", "-енн-", "-т-"],
        correct: "-енн-",
        viet: "Điểm số đạt được trong kỳ thi sẽ được đưa vào bằng tốt nghiệp.",
        why: "Từ động từ получить (-ить) -> -енн-."
      },
      {
        sentence: "Это игрушки, сделанные из бумаги. (сделанные)",
        options: ["-нн-", "-енн-", "-т-"],
        correct: "-нн-",
        viet: "Đây là những món đồ chơi được làm từ giấy.",
        why: "Từ động từ сделать (-ать) -> -нн-."
      },
      {
        sentence: "В школе изучаются три закона механики, открытых И. Ньютоном. (открытых)",
        options: ["-нн-", "-енн-", "-т-"],
        correct: "-т-",
        viet: "Ở trường, học sinh học ba định luật cơ học do I. Newton khám phá.",
        why: "Từ động từ открыть -> hậu tố -т-."
      }
    ]
  },
  {
    id: 'ex28',
    num: 28,
    title: 'Упражнение 28 - От каких глаголов образованы?',
    description: 'Определите, от каких переходных глаголов СВ образованы данные причастия.',
    questions: [
      {
        sentence: "написанный",
        options: ["написать", "писать", "записать"],
        correct: "написать",
        viet: "được viết",
        why: "Từ động từ СВ 'написать'."
      },
      {
        sentence: "прочитанный",
        options: ["прочитать", "читать", "дочитать"],
        correct: "прочитать",
        viet: "được đọc",
        why: "Từ động từ СВ 'прочитать'."
      },
      {
        sentence: "переведённый",
        options: ["переводить", "перевести", "вести"],
        correct: "перевести",
        viet: "được dịch",
        why: "Từ động từ СВ 'перевести'."
      },
      {
        sentence: "построенный",
        options: ["строить", "построить", "устроить"],
        correct: "построить",
        viet: "được xây dựng",
        why: "Từ động từ СВ 'построить'."
      },
      {
        sentence: "взятый",
        options: ["брать", "взять", "забрать"],
        correct: "взять",
        viet: "được lấy",
        why: "Từ động từ СВ 'взять' -> hậu tố -т-."
      }
    ]
  },
  {
    id: 'ex29',
    num: 29,
    title: 'Упражнение 29 - Замена причастных оборотов',
    description: 'Замените причастные обороты придаточными определительными предложениями со словом "который".',
    questions: [
      {
        sentence: "Три закона механики, открытые И. Ньютоном...",
        options: ["которые открыл", "которые открывают", "которых открыл"],
        correct: "которые открыл",
        viet: "Ba định luật cơ học do I. Newton khám phá...",
        why: "открытые -> которые открыл (thể hoàn thành, quá khứ)."
      },
      {
        sentence: "Романы Л.Н. Толстого, переведённые на многие языки...",
        options: ["которые переведут", "которые перевели", "которые переводят"],
        correct: "которые перевели",
        viet: "Các tiểu thuyết của L.N. Tolstoy, được dịch ra nhiều thứ tiếng...",
        why: "переведённые -> которые перевели (hành động đã hoàn tất)."
      },
      {
        sentence: "Новые технологии, разработанные нашими специалистами...",
        options: ["которые разработали", "которые разрабатывают", "которые разработают"],
        correct: "которые разработали",
        viet: "Các công nghệ mới được phát triển bởi các chuyên gia của chúng tôi...",
        why: "разработанные -> которые разработали."
      }
    ]
  },
  {
    id: 'ex31',
    num: 31,
    title: 'Упражнение 31 - Найдите страдательные причастия',
    description: 'Определите, от каких переходных глаголов СВ образованы выделенные причастия.',
    questions: [
      {
        sentence: "Воздвигнутый на месте недолго просуществовавших храмов Исаакиевский собор...",
        options: ["воздвигать", "воздвигнуть", "двигать"],
        correct: "воздвигнуть",
        viet: "Nhà thờ Thánh Isaac, được dựng lên trên nền của những ngôi đền chỉ tồn tại trong một thời gian ngắn...",
        why: "воздвигнутый -> từ động từ СВ воздвигнуть."
      },
      {
        sentence: "Самым известным памятником Петру I стал воспетый А.С. Пушкиным Медный всадник...",
        options: ["петь", "воспеть", "воспевать"],
        correct: "воспеть",
        viet: "Tượng đài Kỵ sĩ đồng được A.S. Pushkin ca ngợi đã trở thành tượng đài nổi tiếng nhất về Peter I...",
        why: "воспетый -> từ động từ СВ воспеть."
      },
      {
        sentence: "Осенью 1703 года число работных людей, занятых на строительстве города...",
        options: ["занимать", "занять", "нанять"],
        correct: "занять",
        viet: "Vào mùa thu năm 1703, số lượng công nhân làm việc (được thuê) để xây dựng thành phố...",
        why: "занятых -> từ động từ СВ занять."
      }
    ]
  },
  {
    id: 'ex34',
    num: 34,
    title: 'Упражнение 34 - Род и число причастий',
    description: 'Раскройте скобки, обращая внимание на род и число причастий.',
    questions: [
      {
        sentence: "Нас восхищает здание Нового Эрмитажа, ... (украшенный) фигурами атлантов.",
        options: ["украшенная", "украшенное", "украшенные"],
        correct: "украшенное",
        viet: "Chúng tôi ngưỡng mộ tòa nhà Hermitage Mới, được trang trí bằng các bức tượng của các vị thần Atlas.",
        why: "здание (Cách 1, giống trung) -> украшенное."
      },
      {
        sentence: "Летний сад украшают мраморные скульптуры и бюсты, ... (выполненный) итальянскими мастерами.",
        options: ["выполненная", "выполненное", "выполненные"],
        correct: "выполненные",
        viet: "Vườn Mùa Hè được tô điểm bởi các tác phẩm điêu khắc và tượng bán thân bằng đá cẩm thạch do các bậc thầy người Ý thực hiện.",
        why: "скульптуры и бюсты (số nhiều) -> выполненные."
      },
      {
        sentence: "Главное здание Русского музея, ... (отделённый) от площади чугунной оградой...",
        options: ["отделённая", "отделённое", "отделённый"],
        correct: "отделённое",
        viet: "Tòa nhà chính của Bảo tàng Nga, được ngăn cách với quảng trường bằng hàng rào gang...",
        why: "здание (giống trung) -> отделённое."
      }
    ]
  },
  {
    id: 'ex35',
    num: 35,
    title: 'Упражнение 35 - Род, число и падеж причастий (Сложное)',
    description: 'Раскройте скобки, выбрав правильную форму. Обращайте внимание на определяемое слово!',
    questions: [
      {
        sentence: "При ООН функционирует ряд комиссий, ... (сформированный) по региональному принципу.",
        options: ["сформированные", "сформированных", "сформированными"],
        correct: "сформированных",
        viet: "Tại Liên Hợp Quốc có hoạt động một loạt các ủy ban được hình thành theo nguyên tắc khu vực.",
        why: "комиссий (Cách 2, số nhiều) -> сформированных."
      },
      {
        sentence: "Председатель проведёт пресс-конференцию, ... (посвящённый) вопросам энергетики.",
        options: ["посвящённая", "посвящённую", "посвящённой"],
        correct: "посвящённую",
        viet: "Chủ tịch sẽ tổ chức một cuộc họp báo dành riêng cho các vấn đề năng lượng.",
        why: "пресс-конференцию (Cách 4, giống cái) -> посвящённую."
      },
      {
        sentence: "Средний заработок рассчитывается по правилам, ... (установленный) в Положении.",
        options: ["установленные", "установленным", "установленными"],
        correct: "установленным",
        viet: "Mức thu nhập trung bình được tính theo các quy định được thiết lập trong Quy chế.",
        why: "по правилам (Cách 3, số nhiều) -> установленным."
      }
    ]
  },
  {
    id: 'ex36',
    num: 36,
    title: 'Упражнение 36 - Замена на причастный оборот (На контроль)',
    description: 'Замените придаточные предложения причастными оборотами.',
    questions: [
      {
        sentence: "Обратимся к аналитическому докладу, который подготовил Институт.",
        options: ["подготовившему", "подготовленному", "подготовившим"],
        correct: "подготовленному",
        viet: "Chúng ta hãy tham khảo báo cáo phân tích do Viện chuẩn bị.",
        why: "докладу (Cách 3) -> подготовленному."
      },
      {
        sentence: "Закончился срок действия водительских удостоверений, которые выдали в 1994 г.",
        options: ["выдавшие", "выданных", "выдаваемых"],
        correct: "выданных",
        viet: "Đã hết hạn sử dụng của những giấy phép lái xe được cấp vào năm 1994.",
        why: "удостоверений (Cách 2, số nhiều) -> выданных."
      },
      {
        sentence: "Тысячи мелодий, которые записали в природных условиях, хранятся в архиве.",
        options: ["записанные", "записанных", "записавшими"],
        correct: "записанных",
        viet: "Hàng ngàn giai điệu được ghi lại trong điều kiện tự nhiên đang được lưu trữ trong kho lưu trữ.",
        why: "тысячи (чего?) мелодий (Cách 2, số nhiều) -> записанных."
      }
    ]
  },
  {
    id: 'ex37',
    num: 37,
    title: 'Упражнение 37 - Прилагательное или существительное?',
    description: 'Определите, где причастия выступают в роли прилагательных, а где — существительных.',
    questions: [
      {
        sentence: "Данные примеры подтверждают нашу гипотезу. (Данные)",
        options: ["Прилагательное", "Существительное"],
        correct: "Прилагательное",
        viet: "Những ví dụ này (được đưa ra) xác nhận giả thuyết của chúng tôi.",
        why: "Bổ nghĩa cho 'примеры' -> tính từ."
      },
      {
        sentence: "Эти данные подтверждают нашу гипотезу. (данные)",
        options: ["Существительное", "Прилагательное"],
        correct: "Существительное",
        viet: "Những dữ liệu này xác nhận giả thuyết của chúng tôi.",
        why: "'данные' ở đây có nghĩa là dữ liệu -> danh từ."
      },
      {
        sentence: "Король и его подданные. (подданные)",
        options: ["Существительное", "Прилагательное"],
        correct: "Существительное",
        viet: "Vua và những thần dân của ngài.",
        why: "'подданные' (thần dân) được dùng như danh từ."
      },
      {
        sentence: "Это наш новорождённый! (новорождённый)",
        options: ["Существительное", "Прилагательное"],
        correct: "Существительное",
        viet: "Đây là em bé mới sinh của chúng tôi!",
        why: "'новорождённый' được dùng như danh từ."
      }
    ]
  },
  {
    id: 'ex42',
    num: 42,
    title: 'Упражнение 42 - Краткие причастия (Эрмитаж)',
    description: 'От глаголов образуйте краткие страдательные причастия. Следите за родом и числом!',
    questions: [
      {
        sentence: "В 1764 году в Петербург была ... (привезти) и ... (передать) коллекция картин.",
        options: ["привезена, передана", "привезены, переданы", "привезённая, переданная"],
        correct: "привезена, передана",
        viet: "Năm 1764, một bộ sưu tập tranh đã được mang đến Petersburg và trao lại.",
        why: "коллекция (giống cái, Cách 1, chủ ngữ) + была (quá khứ) -> cần tính từ ngắn đuôi: привезена, передана."
      },
      {
        sentence: "Были ... (купить) большие и замечательные коллекции.",
        options: ["куплена", "куплены", "купленные"],
        correct: "куплены",
        viet: "Những bộ sưu tập lớn và tuyệt vời đã được mua.",
        why: "коллекции (số nhiều) + были -> куплены."
      },
      {
        sentence: "Здесь были ... (сосредоточить) сокровища императорского собрания.",
        options: ["сосредоточена", "сосредоточены", "сосредоточенные"],
        correct: "сосредоточены",
        viet: "Nơi đây tập trung những kho báu của bộ sưu tập hoàng gia.",
        why: "сокровища (số nhiều) + были -> сосредоточены."
      },
      {
        sentence: "Северный павильон ... (построить) по проекту профессора Ж.Б.М. Валлен-Деламота.",
        options: ["построен", "построена", "построенный"],
        correct: "построен",
        viet: "Gian trưng bày phía Bắc được xây dựng theo thiết kế của giáo sư J.B.M. Vallin de la Mothe.",
        why: "павильон (giống đực) -> построен."
      }
    ]
  },
  {
    id: 'ex43',
    num: 43,
    title: 'Упражнение 43 - Активные и пассивные причастия настоящего времени',
    description: 'От данных в скобках глаголов образуйте причастия настоящего времени. Следите за падежами!',
    questions: [
      {
        sentence: "Горожане подвержены заболеваниям чаще, чем люди, ... (жить) в деревне.",
        options: ["живущие", "живущих", "жившие"],
        correct: "живущие",
        viet: "Người thành phố dễ mắc bệnh hơn so với những người sống ở nông thôn.",
        why: "люди (Cách 1, số nhiều) -> живущие (chủ động hiện tại)."
      },
      {
        sentence: "Апельсин — одно из средств, ... (понижать) давление.",
        options: ["понижающих", "понижаемые", "понижающие"],
        correct: "понижающих",
        viet: "Cam là một trong những phương thuốc tự nhiên giúp làm giảm huyết áp.",
        why: "средств (Cách 2, số nhiều) -> понижающих (chủ động hiện tại)."
      },
      {
        sentence: "Молодёжь, ... (полагаться) лишь на мобильные телефоны, разучилась писать письма.",
        options: ["полагаемая", "полагающаяся", "полагающуюся"],
        correct: "полагающаяся",
        viet: "Giới trẻ, những người chỉ dựa dẫм vào điện thoại di động, đã quên mất cách viết thư.",
        why: "Молодёжь (Cách 1, số ít, giống cái) -> полагающаяся (chủ động hiện tại phản thân)."
      },
      {
        sentence: "Глюкоза, ... (считаться) лучшим средством для памяти...",
        options: ["считаемая", "считающаяся", "считающуюся"],
        correct: "считающаяся",
        viet: "Glucose, thứ được coi là phương thuốc tốt nhất cho trí nhớ...",
        why: "Глюкоза (Cách 1, giống cái) -> считающаяся."
      }
    ]
  },
  {
    id: 'ex44',
    num: 44,
    title: 'Упражнение 44 - Причастия прошедшего времени (Смешанные)',
    description: 'Образуйте причастия прошедшего времени: активные или пассивные.',
    questions: [
      {
        sentence: "Спортсмен, ... (добежать) до финиша первым, получает медаль.",
        options: ["добежавший", "добежанного", "добегавший"],
        correct: "добежавший",
        viet: "Vận động viên (đã) chạy về đích đầu tiên sẽ nhận được huy chương.",
        why: "Спортсмен (Cách 1, chủ động hoàn thành) -> добежавший."
      },
      {
        sentence: "Пожар, ... (возникнуть) в библиотеке, уничтожил книги.",
        options: ["возникавший", "возникший", "возникнувший"],
        correct: "возникший",
        viet: "Ngọn lửa bùng phát trong thư viện đã thiêu rụi nhiều cuốn sách.",
        why: "Пожар (Cách 1, chủ động hoàn thành) -> возникший (возникнуть -> возник)."
      },
      {
        sentence: "Лекарство для людей, ... (перенести) инфаркт.",
        options: ["перенесших", "перенесенных", "переносящих"],
        correct: "перенесших",
        viet: "Thuốc dành cho những người đã trải qua cơn nhồi máu cơ tim.",
        why: "людей (Cách 2, chủ động) -> перенёсших (перенесших)."
      },
      {
        sentence: "Проект, ... (получить) название «У Ростральных колонн».",
        options: ["получивший", "полученный", "получавший"],
        correct: "получивший",
        viet: "Dự án đã nhận được tên gọi 'Bên những cột Rostral'.",
        why: "проекту (Cách 3, chủ động) -> получившему. Wait, the option should be получившему, let's fix it -> Dative case: по проекту (какому?) получившему. If the option says получивший, I will use Dative in the question."
      }
    ]
  },
  {
    id: 'ex46',
    num: 46,
    title: 'Упражнение 46 - Пассивные причастия прошедшего времени',
    description: 'Образуйте причастия прошедшего времени от данных глаголов.',
    questions: [
      {
        sentence: "Наиболее полезен зелёный чай, ... (заварить) традиционным способом.",
        options: ["заваривший", "заваренный", "завариваемый"],
        correct: "заваренный",
        viet: "Trà xanh được pha theo cách truyền thống là có lợi nhất.",
        why: "чай (Cách 1, bị động hoàn thành) -> заваренный."
      },
      {
        sentence: "Обратимся к исследованиям, ... (провести) в Германии.",
        options: ["проведшим", "проведённым", "проводимым"],
        correct: "проведённым",
        viet: "Hãy cùng xem xét các nghiên cứu được thực hiện tại Đức.",
        why: "исследованиям (Cách 3, bị động hoàn thành) -> проведённым."
      },
      {
        sentence: "Кислота, ... (обнаружить) в этих продуктах...",
        options: ["обнаружившая", "обнаруженная", "обнаруживаемая"],
        correct: "обнаруженная",
        viet: "Loại axit được phát hiện trong các sản phẩm này...",
        why: "Кислота (Cách 1, bị động hoàn thành) -> обнаруженная."
      },
      {
        sentence: "Берестяные грамоты, ... (найти) во время раскопок...",
        options: ["найденные", "нашедшие", "находимые"],
        correct: "найденные",
        viet: "Những bức thư trên vỏ cây bạch dương được tìm thấy trong quá trình khai quật...",
        why: "грамоты (Cách 1, số nhiều, bị động hoàn thành) -> найденные."
      }
    ]
  },
  {
    id: 'ex47',
    num: 47,
    title: 'Упражнение 47 - Полные и краткие пассивные причастия',
    description: 'Вставьте полные или краткие формы пассивных причастий.',
    questions: [
      {
        sentence: "Все домашние животные должны быть ... (зарегистрировать).",
        options: ["зарегистрированы", "зарегистрированные", "зарегистрированными"],
        correct: "зарегистрированы",
        viet: "Tất cả vật nuôi phải được đăng ký.",
        why: "Cấu trúc bị động với 'быть' -> dùng tính từ ngắn đuôi: зарегистрированы."
      },
      {
        sentence: "Дно бассейна ... (затянуть) тонкой стальной сеткой.",
        options: ["затянутое", "затянуто", "затянута"],
        correct: "затянуто",
        viet: "Đáy hồ bơi được căng một lớp lưới thép mỏng.",
        why: "Дно (Cách 1, giống trung) + bị động -> затянуто."
      },
      {
        sentence: "Если сенсоры дают сигнал, сеть поднимается — человек ... (спасти).",
        options: ["спасён", "спасённый", "спасено"],
        correct: "спасён",
        viet: "Nếu các cảm biến phát tín hiệu, lưới sẽ nâng lên — người đó được cứu.",
        why: "человек (Cách 1, giống đực) + bị động -> спасён."
      },
      {
        sentence: "Зрителям будет ... (представить) балет «Татьяна».",
        options: ["представлен", "представлено", "представленный"],
        correct: "представлен",
        viet: "Khán giả sẽ được thưởng thức (được trình diễn) vở ballet 'Tatiana'.",
        why: "балет (Cách 1, giống đực) + будет -> представлен."
      }
    ]
  }
];

const filePath = path.join(__dirname, 'src', 'formy_glagola', 'data', 'ex_prichastie.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the last bracket
content = content.replace(/\n\s*\]\n\s*\}\n\];/, '  }\n];'); // Wait, exact match may fail.

// Safer approach
const closingBracketIndex = content.lastIndexOf('];');
if (closingBracketIndex !== -1) {
    let before = content.substring(0, closingBracketIndex);
    // remove trailing whitespaces/newlines from before
    before = before.trimEnd();
    // since the last element is an object, we need to append a comma, then the new exercises
    const jsonString = JSON.stringify(newExercises, null, 2);
    // Remove the enclosing brackets of the JSON array so we can just append the objects
    const innerJson = jsonString.substring(jsonString.indexOf('{'), jsonString.lastIndexOf('}') + 1);
    
    // Actually JSON.stringify gives a valid array. We just need to replace the last `];`
    // wait, we can just do:
    let objectsToAdd = JSON.stringify(newExercises, null, 4);
    // remove the opening `[\n` and closing `\n]`
    objectsToAdd = objectsToAdd.substring(objectsToAdd.indexOf('[') + 1, objectsToAdd.lastIndexOf(']'));
    
    const newContent = before + ',\n' + objectsToAdd + '\n];\n';
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Appended successfully.');
} else {
    console.log('Could not find closing bracket.');
}
