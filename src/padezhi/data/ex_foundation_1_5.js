export const foundation_1_5 = [
  {
    id: 'f1', num: 'F1',
    title: 'Bài F1 - Родительный sở hữu (Упр. 1)',
    description: 'Раскройте скобки. Модель: Это твой дом? (Иван) — Нет, это дом ИванА.',
    questions: [
      { sentence: 'Это ваш преподаватель? (Владимир)', options: ['Владимира', 'Владимиру', 'Владимиром'], correct: 'Владимира', viet: 'Đây là thầy giáo của Vladimir.', why: 'Vladimir → Владимира.' },
      { sentence: 'Это твой карандаш? (Николай)', options: ['Николая', 'Николаю', 'Николае'], correct: 'Николая', viet: 'Bút chì của Nikolai.', why: 'Николай → Николая.' },
      { sentence: 'В университете твоя сестра? (Наташа)', options: ['Наташи', 'Наташу', 'Наташа'], correct: 'Наташи', viet: 'Em gái của Natasha.', why: 'Наташа → Наташи.' },
      { sentence: 'Это твоя книга? (Борис или Михаил)', options: ['Бориса или Михаила', 'Борису hoặc Михаилу', 'Борисом hoặc Михаилом'], correct: 'Бориса или Михаила', viet: 'Sách của Boris hoặc Mikhail.', why: 'Cách 2 sở hữu.' },
      { sentence: 'Это твоi часы? (Боря или Миша)', options: ['Бори или Миши', 'Боре hoặc Мише', 'Бори hoặc Мишу'], correct: 'Бори hoặc Миши', viet: 'Đồng hồ của Borya hoặc Misha.', why: 'Боря → Бори, Миша → Миши.' },
      { sentence: 'Это ваша комната? (отец; папа)', options: ['отца; папы', 'отцу; папе', 'отцом; папой'], correct: 'отца; папы', viet: 'Phòng của bố/ba.', why: 'отец → отца, папа → папы.' },
      { sentence: 'Это мои очки? (мать; мама)', options: ['матери; мамы', 'матери; маме', 'матерью; мамой'], correct: 'матери; мамы', viet: 'Kính của mẹ.', why: 'мать → матери (ngoại lệ), мама → мамы.' },
      { sentence: 'Это его словарь? (его сестра или брат)', options: ['его сестры или брата', 'его сестре hoặc брату', 'его сестру hoặc брата'], correct: 'его сестры hoặc брата', viet: 'Từ điển của em gái hoặc anh trai cậu ấy.', why: 'сестра → сестры, брат → брата.' },
      { sentence: 'Это их машина? (бабушка и дедушка)', options: ['бабушки и дедушки', 'бабушке и дедушке', 'бабушку và дедушку'], correct: 'бабушки và дедушки', viet: 'Xe của ông bà.', why: 'бабушка → бабушки, дедушка → дедушки.' },
      { sentence: 'Это их машина? (тётя и дядя)', options: ['тёти и дяди', 'тёте и дяде', 'тётю và дядю'], correct: 'тёти và дяди', viet: 'Xe của cô và chú.', why: 'тётя → тёти, дядя → дяди.' }
    ]
  },
  {
    id: 'f2', num: 'F2',
    title: 'Bài F2 - НЕТ / ДВА-ЧЕТЫРЕ (Упр. 2)',
    description: 'Thiết kế đa lựa chọn cho toàn bộ danh sách từ vựng trong bài tập 2.',
    questions: [
      { 
        sentence: '<b>Брат:</b> — У меня нет … . — А у меня два … .', 
        options: ['брата / брата', 'брат / брата', 'брату / брата'], 
        correct: 'брата / брата', 
        viet: '— Tôi không có anh trai. — Còn tôi có hai anh trai.', 
        why: 'Cả "НЕТ" và số từ "ДВА" đều yêu cầu Cách 2 số ít (Р.п. ед.ч.). Брат → брата.' 
      },
      { 
        sentence: '<b>Машина:</b> — У него không có … . — А у неё ba … .', 
        options: ['машины / машины', 'машину / машины', 'машины / машин'], 
        correct: 'машины / машины', 
        viet: '— Anh ấy đã không có xe. — Còn cô ấy có ba chiếc xe.', 
        why: 'Phủ định và số từ 3 + Cách 2 số ít. Машина → машины.' 
      },
      { 
        sentence: '<b>Окно:</b> — Там không có … . — А здесь bốn … .', 
        options: ['окна / окна', 'окно / окна', 'окна / окон'], 
        correct: 'окна / окна', 
        viet: '— Ở đó sẽ không có cửa sổ. — Còn ở đây có bốn cái.', 
        why: 'Phủ định và số từ 4 + Cách 2 số ít. Окно → окна.' 
      },
      { 
        sentence: '<b>Книга:</b> — У меня нет этой … . — А у тебя две … ?', 
        options: ['книги / книги', 'книгу / книги', 'книги / книг'], 
        correct: 'книги / книги', 
        viet: '— Tôi không có cuốn sách này. — Còn bạn có hai cuốn à?', 
        why: 'Книга (giống cái) → Cách 2 số ít: книги.' 
      },
      { 
        sentence: '<b>Друг:</b> — У него нет … . — А у нас ba … .', 
        options: ['друга / друга', 'друг / друга', 'друга / друзей'], 
        correct: 'друга / друга', 
        viet: '— Anh ấy không có bạn. — Còn chúng tôi có ba người bạn.', 
        why: 'Друг (giống nam) → Cách 2 số ít: друга.' 
      },
      { 
        sentence: '<b>Собака:</b> — У них không có … . — А у меня hai … .', 
        options: ['собаки / собаки', 'собаку / собаки', 'собаки / собак'], 
        correct: 'собаки / собаки', 
        viet: '— Họ đã không có chó. — Còn tôi có hai con chó.', 
        why: 'Собака (giống cái) → Cách 2 số ít: собаки.' 
      },
      { 
        sentence: '<b>Словарь:</b> — Здесь нет … . — А там ba … .', 
        options: ['словаря / словаря', 'словарь / словаря', 'словаря / словарей'], 
        correct: 'словаря / словаря', 
        viet: '— Ở đây không có từ điển. — Còn ở kia có ba cuốn.', 
        why: 'Словарь (giống nam kết thúc -Ь) → Cách 2 số ít: словаря.' 
      },
      { 
        sentence: '<b>Карта:</b> — У меня нет … . — А у сестры hai … .', 
        options: ['карты / карты', 'карту / карты', 'карты / карт'], 
        correct: 'карты / карты', 
        viet: '— Tôi không có bản đồ. — Còn em gái có hai tấm.', 
        why: 'Карта → карты.' 
      },
      { 
        sentence: '<b>Ручка:</b> — У него нет … . — А у меня bốn … .', 
        options: ['ручки / ручки', 'ручку / ручки', 'ручки / ручек'], 
        correct: 'ручки / ручки', 
        viet: '— Anh ấy không có bút. — Còn tôi có bốn cái.', 
        why: 'Ручка → ручки.' 
      },
      { 
        sentence: '<b>Карандаш:</b> — Там không có … . — А тут hai … .', 
        options: ['карандаша / карандаша', 'карандаш / карандаша', 'карандаша / карандашей'], 
        correct: 'карандаша / карандаша', 
        viet: '— Ở đó không có bút chì. — Còn ở đây có hai cái.', 
        why: 'Карандаш → карандаша.' 
      }
    ]
  },
  {
    id: 'f3', num: 'F3',
    title: 'Bài F3 - Анекdoт: Девочка и мама (Упр. 3)',
    description: 'Đọc giai thoại và trả lời câu hỏi.',
    questions: [
      {
        sentence: '— Мама, почему у меня <b>две руки, две ноги, два глаза, два уха</b> и только один язык?<br/>Мама: — Это чтобы ты больше работала, больше ходила, больше видела, больше слышала и меньше говорила.<br/><br/>Tại sao nói "две руки", "два глаза"?',
        options: ['Vì sau số 2 dùng Cách 2 số ít', 'Vì sau số 2 dùng Cách 2 số nhiều', 'Vì đây là Cách 4'],
        correct: 'Vì sau số 2 dùng Cách 2 số ít',
        viet: '— Mẹ ơi sao con có 2 tay, 2 chân, 2 mắt, 2 tai mà chỉ có 1 cái lưỡi? — Để con làm nhiều, đi nhiều, thấy nhiều, nghe nhiều và nói ít thôi.',
        why: 'Два/Две (2) + Cách 2 số ít: рука → руки, нога → ноги, глаз → глаза, ухо → уха.'
      }
    ]
  },
  {
    id: 'f4', num: 'F4',
    title: 'Bài F4 - Đơn vị đo lường (Упр. 4)',
    description: 'Chọn dạng đúng của danh từ trong ngoặc (chia sang Cách 2 số ít) để hoàn thành cụm từ.',
    questions: [
      {
        sentence: 'Câu 1: Мне нужен килограмм (рис).',
        options: ['рис', 'риса', 'рису', 'рисы'],
        correct: 'риса',
        viet: 'Tôi cần một cân gạo.',
        why: 'Kilogram + Cách 2 số ít: риса.'
      },
      {
        sentence: 'Câu 2: Купите, пожалуйста, килограмм (сыр).',
        options: ['сыр', 'сыры', 'сыру', 'сыра'],
        correct: 'сыра',
        viet: 'Làm ơn hãy mua một cân phô mai.',
        why: 'сыр → сыра.'
      },
      {
        sentence: 'Câu 3: Для торта нужен килограмм (масло).',
        options: ['масло', 'масла', 'маслу', 'маслы'],
        correct: 'масла',
        viet: 'Để làm bánh cần một cân bơ.',
        why: 'масло → масла.'
      },
      {
        sentence: 'Câu 4: На рынке мы купили килограмм свежей (рыба).',
        options: ['рыбу', 'рыба', 'рыбы', 'рыбе'],
        correct: 'рыбы',
        viet: 'Ở chợ chúng tôi đã mua một cân cá tươi.',
        why: 'рыба → рыбы.'
      },
      {
        sentence: 'Câu 5: Дайте мне, пожалуйста, килограмм (колбаса).',
        options: ['колбасы', 'колбасу', 'колбасе', 'колбаса'],
        correct: 'колбасы',
        viet: 'Làm ơn cho tôi một cân xúc xích.',
        why: 'колбаса → колбасы.'
      },
      {
        sentence: 'Câu 6: В холодильнике лежит килограмм (ветчина).',
        options: ['ветчину', 'ветчине', 'ветчина', 'ветчины'],
        correct: 'ветчины',
        viet: 'Trong tủ lạnh có một cân thịt xông khói.',
        why: 'ветчина → ветчины.'
      },
      {
        sentence: 'Câu 7: Ребёнок выпил литр (молоко).',
        options: ['молоко', 'молока', 'молоку', 'молоке'],
        correct: 'молока',
        viet: 'Đứa trẻ đã uống một lít sữa.',
        why: 'Lít + Cách 2: молока.'
      },
      {
        sentence: 'Câu 8: Для жарки нужен литр растительного (масло).',
        options: ['маслы', 'маслу', 'масла', 'масло'],
        correct: 'масла',
        viet: 'Để chiên cần một lít dầu thực vật.',
        why: 'масло → масла.'
      },
      {
        sentence: 'Câu 9: Я купил литр апельсинового (сок).',
        options: ['соку', 'сока', 'соки', 'сок'],
        correct: 'сока',
        viet: 'Tôi đã mua một lít nước cam.',
        why: 'сок → сока.'
      },
      {
        sentence: 'Câu 10: В кувшине остался литр (вода).',
        options: ['воду', 'воде', 'воды', 'вода'],
        correct: 'воды',
        viet: 'Trong bình còn lại một lít nước.',
        why: 'вода → wody.'
      },
      {
        sentence: 'Câu 11: Летом мы часто покупаем литр (квас).',
        options: ['кваса', 'квасу', 'квасы', 'квас'],
        correct: 'кваса',
        viet: 'Mùa hè chúng tôi thường mua một lít nước kvass.',
        why: 'квас → кваса.'
      },
      {
        sentence: 'Câu 12: На столе стоит литр светлого (пиво).',
        options: ['пиво', 'пиву', 'пивы', 'пива'],
        correct: 'пива',
        viet: 'Trên bàn có một lít bia vàng.',
        why: 'пиво → пива.'
      },
      {
        sentence: 'Câu 13: На праздник подарили бутылку французского (коньяк).',
        options: ['коньяк', 'коньяку', 'коньяка', 'коньяки'],
        correct: 'коньяка',
        viet: 'Dịp lễ được tặng một chai rượu cognac Pháp.',
        why: 'Chai + Cách 2: коньяка.'
      },
      {
        sentence: 'Câu 14: Для коктейля нужна бутылка (ликёр).',
        options: ['ликёр', 'ликёра', 'ликёру', 'ликёры'],
        correct: 'ликёра',
        viet: 'Để làm cocktail cần một chai rượu mùi.',
        why: 'ликёр → ликёра.'
      },
      {
        sentence: 'Câu 15: Мы открыли бутылку красного (вино).',
        options: ['вину', 'вино', 'вины', 'вина'],
        correct: 'вина',
        viet: 'Chúng tôi đã mở một chai rượu vang đỏ.',
        why: 'вино → вина.'
      },
      {
        sentence: 'Câu 16: В баре он заказал бутылку (пиво).',
        options: ['пива', 'пиво', 'пиву', 'пивы'],
        correct: 'пива',
        viet: 'Ở quán bar anh ấy đã gọi một chai bia.',
        why: 'пиво → пива.'
      },
      {
        sentence: 'Câu 17: На столе стояла бутылка (водка).',
        options: ['водку', 'водки', 'воđка', 'водке'],
        correct: 'водки',
        viet: 'Trên bàn có một chai rượu vodka.',
        why: 'Quy tắc chính tả: Sau k viết i (водки).'
      },
      {
        sentence: 'Câu 18: Дайте, пожалуйста, бутылку минеральной (вода).',
        options: ['воды', 'воду', 'воде', 'вода'],
        correct: 'воды',
        viet: 'Làm ơn cho tôi một chai nước khoáng.',
        why: 'вода → wody.'
      },
      {
        sentence: 'Câu 19: Дети выпили бутылку сладкого (лимонад).',
        options: ['лимонаду', 'лимонад', 'лимонады', 'лимонада'],
        correct: 'лимонада',
        viet: 'Lũ trẻ đã uống một chai nước chanh ngọt.',
        why: 'лимонад → лимонада.'
      },
      {
        sentence: 'Câu 20: Утром я выпил стакан (сок).',
        options: ['сока', 'сок', 'соку', 'соки'],
        correct: 'сока',
        viet: 'Sáng nay tôi đã uống một cốc nước hoa quả.',
        why: 'Cốc + Cách 2: сока.'
      },
      {
        sentence: 'Câu 21: Перед сном полезно выпить стакан тёплого (молоко).',
        options: ['молоко', 'молоку', 'молока', 'молоке'],
        correct: 'молока',
        viet: 'Trước khi ngủ uống một cốc sữa ấm rất có lợi.',
        why: 'молоко → молока.'
      },
      {
        sentence: 'Câu 22: На завтрак я обычно пью чашку (чай).',
        options: ['чаю', 'чай', 'чая', 'чаи'],
        correct: 'чая',
        viet: 'Bữa sáng tôi thường uống một tách trà.',
        why: 'Tách + Cách 2: чая (chuẩn ngữ pháp hơn чаю).'
      },
      {
        sentence: 'Câu 23: Она выпила чашку (кофе).',
        options: ['кофе', 'кофя', 'кофу', 'кофей'],
        correct: 'кофе',
        viet: 'Cô ấy đã uống một tách cà phê.',
        why: 'Кофе là danh từ không biến đổi.'
      },
      {
        sentence: 'Câu 24: Ребёнку налили чашку горячего (какао).',
        options: ['какао', 'какаа', 'какау', 'какаев'],
        correct: 'какао',
        viet: 'Rót cho đứa trẻ một tách ca cao nóng.',
        why: 'Какао là danh từ không biến đổi.'
      },
      {
        sentence: 'Câu 25: В магазине я взял пачку (чай).',
        options: ['чаи', 'чая', 'чай', 'чаю'],
        correct: 'чая',
        viet: 'Trong cửa hàng tôi đã lấy một gói trà.',
        why: 'Gói + Cách 2: чая.'
      },
      {
        sentence: 'Câu 26: К чаю мы купили пачку (печенье).',
        options: ['печенье', 'печенью', 'печеньи', 'печенья'],
        correct: 'печенья',
        viet: 'Để uống trà chúng tôi đã mua một hộp bánh quy.',
        why: 'печенье → печенья.'
      },
      {
        sentence: 'Câu 27: В холодильнике лежит пачка сливочного (масло).',
        options: ['масла', 'маслы', 'масло', 'маслу'],
        correct: 'масла',
        viet: 'Trong tủ lạnh có một gói bơ.',
        why: 'масло → масла.'
      },
      {
        sentence: 'Câu 28: Мне нужна пачка (соль).',
        options: ['соль', 'солю', 'соли', 'соля'],
        correct: 'соли',
        viet: 'Tôi cần một gói muối.',
        why: 'соль (giống cái kết thúc -ь) → соли.'
      },
      {
        sentence: 'Câu 30: На полке стоит пакет (сахар).',
        options: ['сахару', 'сахар', 'сахары', 'сахара'],
        correct: 'сахара',
        viet: 'Trên giá có một túi đường.',
        why: 'Túi + Cách 2: сахара.'
      },
      {
        sentence: 'Câu 30: Мы купили пакет (рис).',
        options: ['рисы', 'рису', 'риса', 'рис'],
        correct: 'риса',
        viet: 'Chúng tôi đã mua một túi gạo.',
        why: 'рис → риса.'
      },
      {
        sentence: 'Câu 31: В пакете лежал пакет (молоко).',
        options: ['молока', 'молоко', 'молоку', 'молоке'],
        correct: 'молока',
        viet: 'Trong túi (lớn) có một bịch sữa.',
        why: 'молоко → молока.'
      }
    ]
  },
  {
    id: 'f5', num: 'F5',
    title: 'Bài F5 - Giai thoại: Нет ложки (Упр. 5)',
    description: 'Đọc giai thoại bên dưới và bấm nút để xem bản dịch tiếng Việt.',
    questions: [
      {
        sentence: `
          Один человек пришёл в ресторан и заказал тарелку супа.<br/>
          Официант принёс суп. Человек посмотрел на суп и сказал:<br/>
          — Официант, я не могу есть этот суп.<br/>
          Официант взял тарелку и унёс. Через некоторое время он принёс другую тарелку, но этот человек снова сказал:<br/>
          — Я не могу есть этот суп!<br/>
          — Но почему? Это очень вкусный суп. Почему вы не можете его есть?<br/>
          — Потому что у меня нет ложки, — ответил человек.
        `,
        options: ['Xem bản dịch'],
        correct: 'Xem bản dịch',
        viet: `
          Một người đàn ông đến nhà hàng và gọi một đĩa súp. 
          Người bồi bàn mang súp đến. Người đàn ông nhìn bát súp và nói: 
          — Bồi bàn, tôi không thể ăn món súp này. 
          Người bồi bàn bê đĩa súp đi. Một lúc sau anh ta mang ra một đĩa khác, nhưng người đàn ông lại nói: 
          — Tôi không thể ăn món súp này! 
          — Nhưng tại sao? Đây là món súp rất ngon mà. Tại sao ông không thể ăn nó? 
          — Tại vì tôi không có thìa (lozhki), — người đàn ông trả lời.
        `,
        why: 'Lưu ý cấu trúc "У меня нет + Cách 2": ложка → ложки. Đây là lý do chính khiến thực khách không thể ăn súp!'
      }
    ]
  }
];
