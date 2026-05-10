const masculine = [
    {
      sentence: 'Câu 1 (друг): На вечеринке я встретил 5 __________.',
      options: ['друг', 'друga', 'друзья', 'друзей'],
      correct: 'друзей',
      viet: 'Tại bữa tiệc tôi đã gặp 5 người bạn.',
      why: '5 + Cách 2 số nhiều (Родительный падеж мн.ч.): друзей.'
    },
    {
      sentence: 'Câu 2 (стул): В нашей комнате стоят 4 __________.',
      options: ['стул', 'стула', 'стулья', 'стульев'],
      correct: 'стула',
      viet: 'Trong phòng chúng tôi có 4 cái ghế.',
      why: '4 + Cách 2 số ít (Родительный падеж ед.ч.): стула.'
    },
    {
      sentence: 'Câu 3 (урок): Завтра у студентов будет 5 __________.',
      options: ['урок', 'урока', 'уроки', 'уроков'],
      correct: 'уроков',
      viet: 'Ngày mai sinh viên sẽ có 5 tiết học.',
      why: '5 + Cách 2 số nhiều: уроков.'
    },
    {
      sentence: 'Câu 4 (паспорт): На столе лежат 2 __________.',
      options: ['паспорт', 'паспорта', 'паспорты', 'паспортов'],
      correct: 'паспорта',
      viet: 'Trên bàn có 2 hộ chiếu.',
      why: '2 + Cách 2 số ít: паспорта.'
    },
    {
      sentence: 'Câu 5 (документ): У меня с собой есть 1 __________.',
      options: ['документ', 'документа', 'документы', 'документов'],
      correct: 'документ',
      viet: 'Tôi có mang theo 1 giấy tờ.',
      why: '1 + Cách 1 số ít (Именительный падеж): документ.'
    },
    {
      sentence: 'Câu 6 (телефон): В магазине продаются 3 __________.',
      options: ['телефон', 'телефона', 'телефоны', 'телефонов'],
      correct: 'телефона',
      viet: 'Trong cửa hàng bán 3 cái điện thoại.',
      why: '3 + Cách 2 số ít: телефона.'
    },
    {
      sentence: 'Câu 7 (телевизор): В доме работают 5 __________.',
      options: ['телевизор', 'телевизора', 'телевизоры', 'телевизоров'],
      correct: 'телевизоров',
      viet: 'Trong nhà có 5 cái tivi đang hoạt động.',
      why: '5 + Cách 2 số nhiều: телевизоров.'
    },
    {
      sentence: 'Câu 8 (магнитофон): В гараже лежат 2 старых __________.',
      options: ['магнитофон', 'магнитофона', 'магнитофоны', 'магнитофонов'],
      correct: 'магнитофона',
      viet: 'Trong gara có 2 cái máy ghi âm cũ.',
      why: '2 + Cách 2 số ít: магнитофона.'
    },
    {
      sentence: 'Câu 9 (велосипед): Возле школы стоят 4 __________.',
      options: ['велосипед', 'велосипеда', 'велосипеды', 'велосипедов'],
      correct: 'велосипеда',
      viet: 'Gần trường có 4 cái xe đạp.',
      why: '4 + Cách 2 số ít: велосипеда.'
    },
    {
      sentence: 'Câu 10 (мотоцикл): На стоянке припаркованы 5 __________.',
      options: ['мотоцикл', 'мотоцикла', 'мотоциклы', 'мотоциклов'],
      correct: 'мотоциклов',
      viet: 'Tại bãi đỗ xe có 5 cái xe máy.',
      why: '5 + Cách 2 số nhiều: мотоциклов.'
    },
    {
      sentence: 'Câu 11 (экзамен): На следующей неделе мы сдаём 2 __________.',
      options: ['экзамен', 'экзамена', 'экзамены', 'экзаменов'],
      correct: 'экзамена',
      viet: 'Tuần tới chúng tôi thi 2 môn.',
      why: '2 + Cách 2 số ít: экзамена.'
    },
    {
      sentence: 'Câu 12 (портфель): Мой брат купил 1 mới __________.',
      options: ['портфель', 'портфеля', 'портфели', 'портфелей'],
      correct: 'портфель',
      viet: 'Anh trai tôi đã mua 1 cái cặp mới.',
      why: '1 + Cách 1 số ít: портфель.'
    },
    {
      sentence: 'Câu 13 (рюкзак): Туристы không có 3 тяжёлых __________.',
      options: ['рюкзак', 'рюкзака', 'рюкзаки', 'рюкзаков'],
      correct: 'рюкзака',
      viet: 'Khách du lịch mang 3 cái ba lô nặng.',
      why: '3 + Cách 2 số ít: рюкзака.'
    },
    {
      sentence: 'Câu 14 (стол): В новом кабинете поставили 5 __________.',
      options: ['стол', 'стола', 'столы', 'столов'],
      correct: 'столов',
      viet: 'Trong phòng làm việc mới đã đặt 5 cái bàn.',
      why: '5 + Cách 2 số nhiều: столов.'
    },
    {
      sentence: 'Câu 15 (словарь): В библиотеке я взял 2 __________.',
      options: ['словарь', 'словаря', 'словари', 'словарей'],
      correct: 'словаря',
      viet: 'Trong thư viện tôi đã mượn 2 cuốn từ điển.',
      why: '2 + Cách 2 số ít: словаря.'
    },
    {
      sentence: 'Câu 16 (преподаватель): На кафедре работают 4 __________.',
      options: ['преподаватель', 'преподавателя', 'преподаватели', 'преподавателей'],
      correct: 'преподавателя',
      viet: 'Tại khoa có 4 giảng viên làm việc.',
      why: '4 + Cách 2 số ít: преподавателя.'
    },
    {
      sentence: 'Câu 17 (бутерброд): На завтрак я съел 1 вкусный __________.',
      options: ['бутерброд', 'бутерброда', 'бутерброды', 'бутербродов'],
      correct: 'бутерброд',
      viet: 'Bữa sáng tôi đã ăn 1 cái bánh mì kẹp ngon.',
      why: '1 + Cách 1 số ít: бутерброд.'
    },
    {
      sentence: 'Câu 18 (стакан): На подносе стоят 5 __________.',
      options: ['стакан', 'стакана', 'стаканы', 'стаканов'],
      correct: 'стаканов',
      viet: 'Trên khay có 5 cái cốc.',
      why: '5 + Cách 2 số nhiều: стаканов.'
    },
    {
      sentence: 'Câu 19 (билет на концерт): Мы купили 3 __________ на завтра.',
      options: ['билет на концерт', 'билета на концерт', 'билеты на концерт', 'билетов на концерт'],
      correct: 'билета на концерт',
      viet: 'Chúng tôi đã mua 3 vé xem ca nhạc cho ngày mai.',
      why: '3 + Cách 2 số ít: билета.'
    }
];

const neuter = [
    {
      sentence: 'Câu 20 (окно): В этой большой аудитории 5 __________.',
      options: ['окно', 'окна', 'окна (số nhiều)', 'окон'],
      correct: 'окон',
      viet: 'Trong giảng đường lớn này có 5 cái cửa sổ.',
      why: '5 + Cách 2 số nhiều: окон.'
    },
    {
      sentence: 'Câu 21 (яблоко): На тарелке лежат 2 __________.',
      options: ['яблоко', 'яблока', 'яблоки', 'яблок'],
      correct: 'яблока',
      viet: 'Trên đĩa có 2 quả táo.',
      why: '2 + Cách 2 số ít: яблока.'
    },
    {
      sentence: 'Câu 22 (озеро): В этом районе находятся 3 __________.',
      options: ['озеро', 'озера', 'озёра', 'озёр'],
      correct: 'озера',
      viet: 'Trong vùng này có 3 cái hồ.',
      why: '3 + Cách 2 số ít: озера.'
    },
    {
      sentence: 'Câu 23 (письмо): Сегодня утром я получил 1 __________.',
      options: ['письмо', 'письма', 'письма (số nhiều)', 'писем'],
      correct: 'письмо',
      viet: 'Sáng nay tôi đã nhận được 1 lá thư.',
      why: '1 + Cách 1 số ít: письмо.'
    },
    {
      sentence: 'Câu 24 (зеркало): В коридоре висят 4 __________.',
      options: ['зеркало', 'зеркала', 'зеркала (số nhiều)', 'зеркал'],
      correct: 'зеркала',
      viet: 'Ở hành lang treo 4 cái gương.',
      why: '4 + Cách 2 số ít: зеркала.'
    },
    {
      sentence: 'Câu 25 (кольцо): В шкатулке лежат 5 красивых __________.',
      options: ['кольцо', 'кольца', 'кольца (số nhiều)', 'колец'],
      correct: 'колец',
      viet: 'Trong hộp có 5 cái nhẫn đẹp.',
      why: '5 + Cách 2 số nhiều: колец.'
    },
    {
      sentence: 'Câu 26 (море): За свою жизнь моряк пересёк 3 __________.',
      options: ['море', 'моря', 'моря (số nhiều)', 'морей'],
      correct: 'моря',
      viet: 'Trong đời mình, thủy thủ đã băng qua 3 vùng biển.',
      why: '3 + Cách 2 số ít: моря.'
    },
    {
      sentence: 'Câu 27 (поле): За деревней раскинулись 5 __________.',
      options: ['поле', 'поля', 'поля (số nhiều)', 'полей'],
      correct: 'полей',
      viet: 'Sau ngôi làng là 5 cánh đồng trải dài.',
      why: '5 + Cách 2 số nhiều: полей.'
    },
    {
      sentence: 'Câu 28 (упражнение): Дома нужно сделать 1 __________.',
      options: ['упражнение', 'упражнения', 'упражнения (số nhiều)', 'упражнений'],
      correct: 'упражнение',
      viet: 'Ở nhà cần làm 1 bài tập.',
      why: '1 + Cách 1 số ít: упражнение.'
    },
    {
      sentence: 'Câu 29 (задание): Студенты должны выполнить 4 __________.',
      options: ['задание', 'задания', 'задания (số nhiều)', 'заданий'],
      correct: 'задания',
      viet: 'Sinh viên phải hoàn thành 4 nhiệm vụ.',
      why: '4 + Cách 2 số ít: задания.'
    },
    {
      sentence: 'Câu 30 (занятие): В понедельник у нас будет 5 __________.',
      options: ['занятие', 'занятия', 'занятия (số nhiều)', 'занятий'],
      correct: 'занятий',
      viet: 'Thứ Hai chúng tôi sẽ có 5 tiết học.',
      why: '5 + Cách 2 số nhiều: занятий.'
    },
    {
      sentence: 'Câu 31 (предложение): В тексте нужно перевести 2 __________.',
      options: ['предложение', 'предложения', 'предложения (số nhiều)', 'предложений'],
      correct: 'предложения',
      viet: 'Trong văn bản cần dịch 2 câu.',
      why: '2 + Cách 2 số ít: предложения.'
    },
    {
      sentence: 'Câu 32 (заявление): На стол директору положили 3 __________.',
      options: ['заявление', 'заявления', 'заявления (số nhiều)', 'заявлений'],
      correct: 'заявления',
      viet: 'Trên bàn giám đốc có 3 tờ đơn.',
      why: '3 + Cách 2 số ít: заявления.'
    },
    {
      sentence: 'Câu 33 (собрание): В этом месяце пройдут 5 важных __________.',
      options: ['собрание', 'собрания', 'собрания (số nhiều)', 'собраний'],
      correct: 'собраний',
      viet: 'Trong tháng này sẽ diễn ra 5 cuộc họp quan trọng.',
      why: '5 + Cách 2 số nhiều: собраний.'
    }
];

const feminine = [
    {
      sentence: 'Câu 34 (подруга): В кафе я жду 2 __________.',
      options: ['подруга', 'подруги', 'подруги (số nhiều)', 'подруг'],
      correct: 'подруги',
      viet: 'Trong quán cà phê tôi đang đợi 2 người bạn gái.',
      why: '2 + Cách 2 số ít: подруги.'
    },
    {
      sentence: 'Câu 35 (сестра): У моего лучшего друга есть 1 __________.',
      options: ['сестра', 'сестры', 'сёстры', 'сестёр'],
      correct: 'сестра',
      viet: 'Bạn thân nhất của tôi có 1 người chị/em gái.',
      why: '1 + Cách 1 số ít: сестра.'
    },
    {
      sentence: 'Câu 36 (тётя): В гости приехали 3 __________.',
      options: ['тётя', 'тёти', 'тёти (số nhiều)', 'тётей'],
      correct: 'тёти',
      viet: 'Có 3 người cô/dì đến chơi.',
      why: '3 + Cách 2 số ít: тёти.'
    },
    {
      sentence: 'Câu 37 (конфета): На день рождения мне подарили 5 коробок __________.',
      options: ['конфета', 'конфеты', 'конфеты (số nhiều)', 'конфет'],
      correct: 'конфет',
      viet: 'Vào ngày sinh nhật tôi được tặng 5 hộp kẹo.',
      why: '5 + Cách 2 số nhiều: конфет.'
    },
    {
      sentence: 'Câu 38 (кошка): У моей бабушки живут 4 __________.',
      options: ['кошка', 'кошки', 'кошки (số nhiều)', 'кошек'],
      correct: 'кошки',
      viet: 'Bà tôi có 4 con mèo sống cùng.',
      why: '4 + Cách 2 số ít: кошки.'
    },
    {
      sentence: 'Câu 39 (собака): Во дворе бегают 5 __________.',
      options: ['собака', 'собаки', 'собаки (số nhiều)', 'собак'],
      correct: 'собак',
      viet: 'Trong sân có 5 con chó đang chạy.',
      why: '5 + Cách 2 số nhiều: собак.'
    },
    {
      sentence: 'Câu 40 (лошадь): На ферме пасутся 2 __________.',
      options: ['лошадь', 'лошади', 'лошади (số nhiều)', 'лошадей'],
      correct: 'лошади',
      viet: 'Trên nông trại có 2 con ngựa đang gặm cỏ.',
      why: '2 + Cách 2 số ít: лошади.'
    },
    {
      sentence: 'Câu 41 (машина): Возле нашего дома припаркованы 5 __________.',
      options: ['машина', 'машины', 'машины (số nhiều)', 'машин'],
      correct: 'машин',
      viet: 'Gần nhà chúng tôi có 5 chiếc ô tô đang đỗ.',
      why: '5 + Cách 2 số nhiều: машин.'
    },
    {
      sentence: 'Câu 42 (тетрадь): В портфеле лежат 3 __________.',
      options: ['тетрадь', 'тетради', 'тетради (số nhiều)', 'тетрадей'],
      correct: 'тетради',
      viet: 'Trong cặp có 3 cuốn vở.',
      why: '3 + Cách 2 số ít: тетради.'
    },
    {
      sentence: 'Câu 43 (лекция): Завтра в университете будет 1 __________.',
      options: ['лекция', 'лекции', 'лекции (số nhiều)', 'лекций'],
      correct: 'лекция',
      viet: 'Ngày mai ở trường đại học sẽ có 1 bài giảng.',
      why: '1 + Cách 1 số ít: leкция.'
    },
    {
      sentence: 'Câu 44 (чашка): В кухонном шкафу стоят 4 __________.',
      options: ['чашка', 'чашки', 'чашки (số nhiều)', 'чашек'],
      correct: 'чашки',
      viet: 'Trong tủ bếp có 4 cái tách.',
      why: '4 + Cách 2 số ít: чашки.'
    },
    {
      sentence: 'Câu 45 (ложка): На столе для гостей лежат 5 __________.',
      options: ['ложка', 'ложки', 'ложки (số nhiều)', 'ложек'],
      correct: 'ложек',
      viet: 'Trên bàn dành cho khách có 5 cái thìa.',
      why: '5 + Cách 2 số nhiều: loжек.'
    },
    {
      sentence: 'Câu 46 (вилка): Для ужина нам нужны 2 __________.',
      options: ['вилка', 'вилки', 'вилки (số nhiều)', 'вилок'],
      correct: 'вилки',
      viet: 'Để ăn tối chúng tôi cần 2 cái nĩa.',
      why: '2 + Cách 2 số ít: вилки.'
    },
    {
      sentence: 'Câu 47 (кастрюля): На плите стоят 3 __________.',
      options: ['кастрюля', 'кастрюли', 'кастрюли (số nhiều)', 'кастрюль'],
      correct: 'кастрюли',
      viet: 'Trên bếp có 3 cái nồi.',
      why: '3 + Cách 2 số ít: кастрюли.'
    },
    {
      sentence: 'Câu 48 (сковородка): На кухне висит 1 новая __________.',
      options: ['сковородка', 'сковородки', 'сковородки (số nhiều)', 'сковородок'],
      correct: 'сковородка',
      viet: 'Trong bếp treo 1 cái chảo mới.',
      why: '1 + Cách 1 số ít: сковородка.'
    },
    {
      sentence: 'Câu 49 (расчёска): В ванной комнате лежат 5 __________.',
      options: ['расчёска', 'расчёски', 'расчёски (số nhiều)', 'расчёсок'],
      correct: 'расчёсок',
      viet: 'Trong phòng tắm có 5 cái lược.',
      why: '5 + Cách 2 số nhiều: расчёсок.'
    }
];

export const foundation_2_full = {
  id: 'f2', num: 'F2',
  title: 'Bài F2 - Tổng hợp 49 câu Số từ và Danh từ (Упр. 2)',
  description: 'Chọn dạng đúng của danh từ dựa trên số lượng đã cho sẵn (Tổng hợp 49 câu).',
  questions: [...masculine, ...neuter, ...feminine]
};
