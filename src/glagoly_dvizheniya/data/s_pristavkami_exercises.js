const poStartOptions = [
  "начало движения, СВ",
  "движение недолго, СВ",
  "движение долгое время, СВ",
  "прибытие к цели, СВ"
];

const timePrefixOptions = [
  "немного / недолго двигаться",
  "долго / всё время двигаться",
  "начать двигаться туда-сюда",
  "значение не подходит"
];

const tripOrDeliveryOptions = [
  "короткая поездка / поход туда и обратно",
  "доставить кого-то или что-то к цели",
  "уйти или уехать без возврата",
  "войти или въехать внутрь"
];

const reachDestinationOptions = [
  "достичь конечного пункта",
  "только начать движение",
  "удалиться от исходной точки",
  "двигаться мимо цели"
];

export const sPristavkamiExercises = [
  {
    id: "ex25",
    num: 25,
    title: "Упражнение 25 - Пришёл и ушёл",
    description:
      "Выберите наиболее подходящий по контексту вариант. Обратите внимание на значение приставок при-, у-, при-/у- с разными способами движения.",
    questions: [
      {
        sentence: "Его нет дома, он … (пришёл — ушёл) в институт.",
        options: ["пришёл", "ушёл", "приехал", "подошёл"],
        correct: "ушёл",
        full: "Его нет дома, он ушёл в институт.",
        viet: "Anh ấy không có ở nhà, anh ấy đã đi đến viện/trường rồi.",
        why: "Chọn «ушёл» vì người đó đã rời khỏi nhà, kết quả là bây giờ không có ở đây. «пришёл» là đã đến đây, «приехал» nhấn mạnh đi bằng phương tiện, còn «подошёл» chỉ tiến lại gần."
      },
      {
        sentence: "Он … (ушёл — уехал) в Москву.",
        options: ["ушёл", "уехал", "улетел", "пришёл"],
        correct: "уехал",
        full: "Он уехал в Москву.",
        viet: "Anh ấy đã đi Moscow.",
        why: "Chọn «уехал» vì đi đến Moscow thường bằng phương tiện giao thông. «ушёл» là đi bộ/rời đi chung chung, «улетел» chỉ bằng máy bay, «пришёл» lại là hướng đến đây."
      },
      {
        sentence: "Он … (ушёл — уехал — улетел) в Швецию.",
        options: ["ушёл", "уехал", "улетел", "подъехал"],
        correct: "улетел",
        full: "Он улетел в Швецию.",
        viet: "Anh ấy đã bay đến Thụy Điển.",
        why: "Chọn «улетел» vì đi sang Thụy Điển trong ngữ cảnh này hợp logic nhất là bằng máy bay. «ушёл» và «подъехал» sai hướng hoặc sai phương thức, «уехал» quá chung và kém tự nhiên hơn."
      },
      {
        sentence: "Проводник … (принёс — привёз) нам чай.",
        options: ["принёс", "привёз", "поднёс", "вынес"],
        correct: "принёс",
        full: "Проводник принёс нам чай.",
        viet: "Người phục vụ toa tàu đã mang trà đến cho chúng tôi.",
        why: "Chọn «принёс» vì trà được mang bằng tay. «привёз» dùng cho chở bằng phương tiện, «поднёс» là đưa lại gần hơn, còn «вынес» là mang từ trong ra ngoài."
      },
      {
        sentence: "Официантка … (принесла — привезла) обед.",
        options: ["принесла", "привезла", "унесла", "подвезла"],
        correct: "принесла",
        full: "Официантка принесла обед.",
        viet: "Cô phục vụ đã mang bữa trưa ra.",
        why: "Chọn «принесла» vì bữa ăn được bưng/mang đến bằng tay. «привезла» và «подвезла» là chở bằng phương tiện, «унесла» lại là mang đi khỏi chỗ nói."
      },
      {
        sentence: "… (Прилетела — Приплыла) бабочка.",
        options: ["Прилетела", "Приплыла", "Пришла", "Приехала"],
        correct: "Прилетела",
        full: "Прилетела бабочка.",
        viet: "Một con bướm đã bay đến.",
        why: "Chọn «прилетела» vì bướm di chuyển bằng cách bay. «приплыла» là bơi đến, «пришла» là đi bộ đến, còn «приехала» là đến bằng phương tiện."
      },
      {
        sentence: "… (Приехали — Приплыли — Прилетели) два лебедя.",
        options: ["Приехали", "Приплыли", "Прилетели", "Пришли"],
        correct: "Прилетели",
        full: "Прилетели два лебедя.",
        viet: "Hai con thiên nga đã bay đến.",
        why: "Chọn «прилетели» vì thiên nga là loài chim, cách đến tự nhiên nhất là bay đến. «приплыли» có thể nói trong ngữ cảnh trên nước, nhưng ở đây bài luyện phân biệt cách di chuyển điển hình; «приехали» và «пришли» không phù hợp."
      },
      {
        sentence: "… (Пришли — Приехали — Приплыли — Прилетели) две утки.",
        options: ["Пришли", "Приехали", "Приплыли", "Прилетели"],
        correct: "Прилетели",
        full: "Прилетели две утки.",
        viet: "Hai con vịt đã bay đến.",
        why: "Chọn «прилетели» vì vịt trước hết vẫn là chim và trong ngữ cảnh trung tính người Nga thường nói chim 'bay đến'. «приплыли» chỉ hợp nếu nhấn mạnh chúng bơi tới, còn «пришли» và «приехали» không phải cách diễn đạt tự nhiên nhất."
      },
      {
        sentence: "… (Прибежала — Приехала) маленькая девочка.",
        options: ["Прибежала", "Приехала", "Пришла", "Прилетела"],
        correct: "Прибежала",
        full: "Прибежала маленькая девочка.",
        viet: "Một bé gái nhỏ đã chạy đến.",
        why: "Chọn «прибежала» vì bé gái tự chạy đến. «приехала» là đến bằng phương tiện, «пришла» chỉ đi bộ bình thường, còn «прилетела» hoàn toàn sai."
      },
      {
        sentence: "Он … (ушёл — улетел) домой во Владивосток.",
        options: ["ушёл", "улетел", "уехал", "подошёл"],
        correct: "улетел",
        full: "Он улетел домой во Владивосток.",
        viet: "Anh ấy đã bay về nhà ở Vladivostok.",
        why: "Chọn «улетел» vì Vladivostok rất xa, hợp lý nhất là đi bằng máy bay. «ушёл» và «подошёл» sai kiểu chuyển động, «уехал» quá chung và kém chính xác hơn trong ngữ cảnh này."
      },
      {
        sentence: "Собака … (уехала — убежала) от меня.",
        options: ["уехала", "убежала", "ушла", "улетела"],
        correct: "убежала",
        full: "Собака убежала от меня.",
        viet: "Con chó đã chạy mất khỏi tôi.",
        why: "Chọn «убежала» vì chó bỏ chạy. «уехала» dùng cho phương tiện, «ушла» trung tính hơn và không nhấn mạnh hành động chạy, còn «улетела» là bay đi."
      },
      {
        sentence: "Он по ошибке … (унёс — увёл) мою тетрадь.",
        options: ["унёс", "увёл", "принёс", "привёл"],
        correct: "унёс",
        full: "Он по ошибке унёс мою тетрадь.",
        viet: "Anh ấy đã cầm nhầm và mang đi quyển vở của tôi.",
        why: "Chọn «унёс» vì tетрадь là đồ vật được mang đi. «увёл» dùng cho dắt người/động vật đi, «принёс» là mang đến, còn «привёл» là dẫn ai đến."
      },
      {
        sentence: "Мать на лето … (унесла — увезла) сына из города.",
        options: ["унесла", "увезла", "увела", "привезла"],
        correct: "увезла",
        full: "Мать на лето увезла сына из города.",
        viet: "Người mẹ đã đưa con trai rời khỏi thành phố suốt mùa hè.",
        why: "Chọn «увезла» vì bà mẹ chở con đi khỏi thành phố bằng phương tiện. «унесла» là bế/mang bằng tay, «увела» là dắt đi, còn «привезла» là chở đến đây."
      },
      {
        sentence: "Он … (пришёл — привёл) свою подругу на вечеринку.",
        options: ["пришёл", "привёл", "подошёл", "увёл"],
        correct: "привёл",
        full: "Он привёл свою подругу на вечеринку.",
        viet: "Anh ấy đã dẫn bạn gái mình đến bữa tiệc.",
        why: "Chọn «привёл» vì anh ấy đưa một người khác đến nơi nào đó. «пришёл» chỉ bản thân anh ấy đến, «подошёл» là tiến lại gần, còn «увёл» là dắt đi khỏi chỗ đó."
      },
      {
        sentence: "Он … (пришёл — приехал) на машине.",
        options: ["пришёл", "приехал", "подошёл", "прилетел"],
        correct: "приехал",
        full: "Он приехал на машине.",
        viet: "Anh ấy đến bằng ô tô.",
        why: "Chọn «приехал» vì có phương tiện rõ ràng là ô tô. «пришёл» là đi bộ đến, «подошёл» là bước lại gần, còn «прилетел» là bay đến."
      },
      {
        sentence: "Он … (привёл — привёз) друзей на машине.",
        options: ["привёл", "привёз", "принёс", "подвёл"],
        correct: "привёз",
        full: "Он привёз друзей на машине.",
        viet: "Anh ấy đã chở bạn bè đến bằng ô tô.",
        why: "Chọn «привёз» vì anh ấy đưa người khác đến bằng xe. «привёл» là dẫn đi bộ, «принёс» dùng cho đồ vật, còn «подвёл» là dẫn lại gần."
      }
    ]
  },
  {
    id: "ex26",
    num: 26,
    title: "Упражнение 26 - На контроль",
    description:
      "Выберите правильный вариант. Сравните значение приставок при-, у-, под-, от- и способ движения.",
    questions: [
      {
        sentence: "Обычно он … (приходит — уходит) домой поздно.",
        options: ["приходит", "уходит", "подходит", "заходит"],
        correct: "приходит",
        full: "Обычно он приходит домой поздно.",
        viet: "Thường thì anh ấy về nhà muộn.",
        why: "Chọn «приходит» vì речь о прибытии домой, tức là đến đích. «уходит» là rời đi khỏi nơi nào đó, «подходит» chỉ lại gần, còn «заходит» là ghé vào."
      },
      {
        sentence: "Жаль, что уже завтра она … (уезжает — увозит).",
        options: ["уезжает", "увозит", "приезжает", "приходит"],
        correct: "уезжает",
        full: "Жаль, что уже завтра она уезжает.",
        viet: "Tiếc là ngay ngày mai cô ấy sẽ rời đi.",
        why: "Chọn «уезжает» vì chủ ngữ tự mình rời đi bằng phương tiện. «увозит» cần có tân ngữ là người/vật được chở đi; «приезжает» là đến, còn «приходит» là đi bộ đến."
      },
      {
        sentence: "Жаль, что она уже завтра … (уезжает — увозит) детей из города.",
        options: ["уезжает", "увозит", "привозит", "уводит"],
        correct: "увозит",
        full: "Жаль, что она уже завтра увозит детей из города.",
        viet: "Tiếc là ngay ngày mai cô ấy sẽ đưa bọn trẻ ra khỏi thành phố.",
        why: "Chọn «увозит» vì cô ấy chở các em nhỏ đi khỏi thành phố. «уезжает» không mang tân ngữ người/vật đi theo, «привозит» là chở đến, còn «уводит» là dắt đi."
      },
      {
        sentence: "Каждую весну лебеди … (приезжают — приплывают) на это озеро.",
        options: ["приезжают", "приплывают", "прилетают", "подходят"],
        correct: "приплывают",
        full: "Каждую весну лебеди приплывают на это озеро.",
        viet: "Mỗi mùa xuân, thiên nga lại bơi tới hồ này.",
        why: "Chọn «приплывают» theo logic bài học: với chim nước, trong ngữ cảnh hồ, nhấn mạnh sự xuất hiện trên mặt nước. «приезжают» là bằng phương tiện, «прилетают» có thể đúng ở ngữ cảnh khác nhưng không phải đáp án bài gốc, còn «подходят» không tự nhiên ở đây."
      },
      {
        sentence: "Каждый раз она … (убегает — уносит), не попрощавшись.",
        options: ["убегает", "уносит", "уходит", "увозит"],
        correct: "убегает",
        full: "Каждый раз она убегает, не попрощавшись.",
        viet: "Lần nào cô ấy cũng chạy đi mà không chào.",
        why: "Chọn «убегает» vì người đó bỏ chạy đi. «уносит» cần tân ngữ là vật mang đi, «уходит» ít sắc thái 'chạy mất', còn «увозит» đòi hỏi phương tiện."
      },
      {
        sentence: "Каждый раз папа … (приносит — привозит) мне что-нибудь интересное из Англии.",
        options: ["приносит", "привозит", "подносит", "заносит"],
        correct: "привозит",
        full: "Каждый раз папа привозит мне что-нибудь интересное из Англии.",
        viet: "Lần nào bố cũng mang/chở về cho tôi cái gì đó thú vị từ Anh.",
        why: "Chọn «привозит» vì đồ vật được mang từ nước khác về bằng phương tiện. «приносит» là mang bằng tay trong phạm vi gần, «подносит» là đưa lại gần, còn «заносит» không đúng nghĩa ở đây."
      },
      {
        sentence: "Когда он … (приходил — приводил) к нам, то каждый раз … (приводил — приносил) что-то вкусное.",
        options: [
          "приходил — приносил",
          "приходил — приводил",
          "приводил — приносил",
          "приводил — приводил"
        ],
        correct: "приходил — приносил",
        full: "Когда он приходил к нам, то каждый раз приносил что-то вкусное.",
        viet: "Mỗi khi anh ấy đến nhà chúng tôi, lần nào anh ấy cũng mang theo món gì đó ngon.",
        why: "Chọn «приходил — приносил»: người ấy tự đến thì dùng «приходил», còn đồ ăn là vật được mang đến nên dùng «приносил». Các tổ hợp khác lẫn lộn giữa 'tự mình đến' và 'dẫn ai đến'."
      },
      {
        sentence: "… (Приноси — Приводи) к нам своего друга!",
        options: ["Приноси", "Приводи", "Привози", "Приходи"],
        correct: "Приводи",
        full: "Приводи к нам своего друга!",
        viet: "Hãy dẫn bạn của cậu đến chỗ chúng tôi đi!",
        why: "Chọn «Приводи» vì речь о человеке, которого нужно привести. «Приноси» dùng cho đồ vật, «привози» là chở bằng xe, còn «приходи» chỉ chính người nghe tự đến."
      },
      {
        sentence: "… (Приходи — Приводи) к нам!",
        options: ["Приходи", "Приводи", "Приезжай", "Подходи"],
        correct: "Приходи",
        full: "Приходи к нам!",
        viet: "Hãy đến chỗ chúng tôi nhé!",
        why: "Chọn «Приходи» vì người nghe tự mình đến. «Приводи» là dẫn ai khác đến, «приезжай» đòi hỏi phương tiện, còn «подходи» là bước lại gần."
      },
      {
        sentence: "… (Приходи — Приезжай) к нам в Австралию!",
        options: ["Приходи", "Приезжай", "Подходи", "Прилетай"],
        correct: "Приезжай",
        full: "Приезжай к нам в Австралию!",
        viet: "Hãy sang chỗ chúng tôi ở Úc nhé!",
        why: "Chọn «Приезжай» vì речь о далёкой поездке в другую страну, tức là một chuyến đi bằng phương tiện. «Приходи» và «подходи» quá gần, còn «прилетай» quá hẹp vì bài gốc đối lập 'đi bộ' và 'đi bằng phương tiện'."
      },
      {
        sentence: "… (Уходи — Уводи) скорее!",
        options: ["Уходи", "Уводи", "Отходи", "Уезжай"],
        correct: "Уходи",
        full: "Уходи скорее!",
        viet: "Đi mau lên!",
        why: "Chọn «Уходи» vì người được yêu cầu tự rời đi. «Уводи» cần tân ngữ là người/động vật bị dẫn đi, «отходи» chỉ lùi ra một chút, còn «уезжай» là đi bằng xe."
      },
      {
        sentence: "… (Уходи — Уводи) скорее из ресторана своего друга!",
        options: ["Уходи", "Уводи", "Выводи", "Подводи"],
        correct: "Уводи",
        full: "Уводи скорее из ресторана своего друга!",
        viet: "Hãy mau dẫn bạn của cậu ra khỏi nhà hàng!",
        why: "Chọn «Уводи» vì cần dẫn một người khác đi khỏi nơi đó. «Уходи» chỉ bản thân người nghe đi, «выводи» nhấn mạnh 'dẫn ra ngoài' hơn là 'đưa đi khỏi', còn «подводи» là dẫn lại gần."
      },
      {
        sentence: "Завтра … (прилетает — приходит) из Германии мой друг.",
        options: ["прилетает", "приходит", "приезжает", "подходит"],
        correct: "прилетает",
        full: "Завтра прилетает из Германии мой друг.",
        viet: "Ngày mai bạn tôi sẽ bay đến từ Đức.",
        why: "Chọn «прилетает» vì di chuyển từ Đức sang thường bằng máy bay. «приходит» là đi bộ đến, «приезжает» quá chung, còn «подходит» là lại gần."
      },
      {
        sentence: "Каждую осень птицы … (уплывают — улетают) на юг.",
        options: ["уплывают", "улетают", "уходят", "уезжают"],
        correct: "улетают",
        full: "Каждую осень птицы улетают на юг.",
        viet: "Mỗi mùa thu chim lại bay về phương nam.",
        why: "Chọn «улетают» vì chim di chuyển bằng cách bay. «уплывают» là bơi đi, «уходят» là đi bộ, còn «уезжают» là đi bằng phương tiện."
      }
    ]
  },
  {
    id: "ex31",
    num: 31,
    title: "Упражнение 31 - Префикс по-",
    description:
      "Определите значение глагола с префиксом по-. Во всех данных примерах глаголы первой группы с по- обозначают старт движения и имеют вид СВ.",
    questions: [
      {
        sentence: "Он стоял долго, а потом пошёл вперёд.",
        options: poStartOptions,
        correct: "начало движения, СВ",
        viet: "Anh ấy đứng rất lâu, rồi bắt đầu đi về phía trước.",
        why: "Chọn «начало движения, СВ» vì «пошёл» cho biết hành động bắt đầu di chuyển. Các phương án còn lại là nghĩa thời lượng của nhóm II hoặc nghĩa 'đến nơi', không phù hợp."
      },
      {
        sentence: "Почему мы остановились? Поехали!",
        options: poStartOptions,
        correct: "начало движения, СВ",
        viet: "Sao chúng ta lại dừng? Đi tiếp nào!",
        why: "«Поехали» là lời thúc giục bắt đầu lên đường. Không phải đi một lúc hay đi lâu, và cũng không phải 'đã đến đích'."
      },
      {
        sentence: "Завтра он поедет в Москву.",
        options: poStartOptions,
        correct: "начало движения, СВ",
        viet: "Ngày mai anh ấy sẽ lên đường đi Moscow.",
        why: "«Поедет» nói về sự khởi hành trong tương lai. Tiền tố по- ở động từ nhóm I vẫn mang nghĩa 'bắt đầu đi'."
      },
      {
        sentence: "Завтра мой друг поведёт меня на экскурсию.",
        options: poStartOptions,
        correct: "начало движения, СВ",
        viet: "Ngày mai bạn tôi sẽ dẫn tôi đi tham quan.",
        why: "«Поведёт» là sẽ bắt đầu dẫn đi. Đây là thể hoàn thành với nghĩa khởi hành/chuyển động bắt đầu."
      },
      {
        sentence: "Птица немного посидела на ветке, а потом полетела дальше.",
        options: poStartOptions,
        correct: "начало движения, СВ",
        viet: "Con chim ngồi một chút trên cành rồi bay tiếp.",
        why: "«Полетела» chỉ khoảnh khắc bắt đầu bay tiếp. Không phải hành động kéo dài hay chuyển nghĩa 'đã tới nơi'."
      },
      {
        sentence: "Пойдём гулять!",
        options: poStartOptions,
        correct: "начало движения, СВ",
        viet: "Chúng ta đi dạo nhé!",
        why: "«Пойдём» ở đây mời bắt đầu đi. Nghĩa chính là старт движения, đúng với lý thuyết về по- ở nhóm I."
      },
      {
        sentence: "Поедем в Пушкин!",
        options: poStartOptions,
        correct: "начало движения, СВ",
        viet: "Chúng ta đi Pushkin nhé!",
        why: "«Поедем» là lời đề nghị bắt đầu chuyến đi. Không phải 'đi một lúc' của ездить nhóm II."
      },
      {
        sentence: "Поплывём вдоль берега.",
        options: poStartOptions,
        correct: "начало движения, СВ",
        viet: "Chúng ta hãy bơi dọc theo bờ nhé.",
        why: "«Поплывём» biểu thị bắt đầu bơi theo hướng nào đó. Đây là động từ nhóm I với nghĩa khởi động hành động."
      },
      {
        sentence: "Он поплыл на лодке на другой берег.",
        options: poStartOptions,
        correct: "начало движения, СВ",
        viet: "Anh ấy chèo thuyền đi sang bờ bên kia.",
        why: "«Поплыл» cho thấy anh ấy bắt đầu rời bờ và bơi/chèo đi. Không phải nghĩa thời lượng."
      },
      {
        sentence: "Он понёс пальто в химчистку.",
        options: poStartOptions,
        correct: "начало движения, СВ",
        viet: "Anh ấy đã mang áo khoác đi tiệm giặt khô.",
        why: "«Понёс» nhấn mạnh lúc bắt đầu mang đồ vật đi. Theo lý thuyết, по- ở đây không lập cặp вид với nhóm II mà chỉ cho nghĩa 'xuất phát'."
      },
      {
        sentence: "Завтра он повезёт нас за город на своей новой машине.",
        options: poStartOptions,
        correct: "начало движения, СВ",
        viet: "Ngày mai anh ấy sẽ chở chúng tôi ra ngoại ô bằng chiếc xe mới.",
        why: "«Повезёт» chỉ việc bắt đầu chở đi bằng xe trong tương lai. Không phải đi ngắn một lúc hay đi trong thời gian dài."
      },
      {
        sentence: "Где телевизор? Папа повёз его в ремонт.",
        options: poStartOptions,
        correct: "начало движения, СВ",
        viet: "Cái tivi đâu rồi? Bố đã mang nó đi sửa rồi.",
        why: "«Повёз» nghĩa là đã mang/chở đi, tức là bắt đầu đưa nó đến chỗ sửa. Nghĩa 'đến nơi' sẽ là động từ với prefix khác như привезти."
      }
    ]
  },
  {
    id: "ex36",
    num: 36,
    title: "Упражнение 36 - Под- и от-",
    description:
      "Прочитайте предложения и определите значение приставок под- и от- в контексте.",
    questions: [
      {
        sentence: "Подойди, пожалуйста, ко мне!",
        options: ["приблизиться к говорящему", "отойти подальше", "уйти совсем", "зайти ненадолго"],
        correct: "приблизиться к говорящему",
        viet: "Lại gần tôi một chút nhé!",
        why: "Chọn «приблизиться к говорящему» vì приставка под- ở «подойди» biểu thị chuyển động tiến lại gần. Các đáp án còn lại diễn tả đi xa, rời hẳn hoặc ghé qua."
      },
      {
        sentence: "Отойди от меня, я не хочу с тобой разговаривать!",
        options: ["приблизиться", "отойти на расстояние", "войти внутрь", "подойти и остановиться"],
        correct: "отойти на расстояние",
        viet: "Tránh xa tôi ra, tôi không muốn nói chuyện với anh!",
        why: "«Отойди» mang nghĩa lùi ra xa khỏi người nói. Không phải tiến lại gần hay đi vào trong."
      },
      {
        sentence: "Машина немного отъехала от дома и остановилась.",
        options: ["подъехала ближе к дому", "отдалилась от дома на небольшое расстояние", "въехала в гараж", "приехала к дому"],
        correct: "отдалилась от дома на небольшое расстояние",
        viet: "Chiếc xe lùi/đi ra xa khỏi ngôi nhà một chút rồi dừng lại.",
        why: "«Отъехала» = đi ra xa điểm xuất phát một đoạn ngắn. «подъехала» nghĩa ngược lại là tiến lại gần."
      },
      {
        sentence: "Подъезжайте ближе к дому!",
        options: ["отъезжайте от дома", "подведите кого-то к дому", "приблизьтесь к дому на транспорте", "выйдите из дома"],
        correct: "приблизьтесь к дому на транспорте",
        viet: "Hãy lái xe lại gần ngôi nhà hơn!",
        why: "«Подъезжайте» nói về việc tiến lại gần bằng phương tiện. Không phải rời đi hay dẫn ai đó."
      },
      {
        sentence: "Дети подбежали к отцу.",
        options: ["побежали от отца", "подошли пешком", "прибежали близко к отцу", "убежали в разные стороны"],
        correct: "прибежали близко к отцу",
        viet: "Bọn trẻ chạy ùa tới chỗ bố.",
        why: "«Подбежали» = chạy lại gần. «побежали» chỉ bắt đầu chạy, còn «убежали» là chạy đi mất."
      },
      {
        sentence: "Кошка отбежала от меня метра на два и остановилась.",
        options: ["подбежала ко мне", "отбежала от меня", "прибежала домой", "вбежала в комнату"],
        correct: "отбежала от меня",
        viet: "Con mèo chạy tránh tôi khoảng hai mét rồi dừng lại.",
        why: "«Отбежала» diễn tả chuyển động chạy ra xa khỏi người nói. Đây là nghĩa điển hình của от-."
      },
      {
        sentence: "Когда отходит поезд?",
        options: ["когда поезд прибывает", "когда поезд отправляется", "когда поезд подъезжает", "когда поезд останавливается"],
        correct: "когда поезд отправляется",
        viet: "Khi nào tàu khởi hành?",
        why: "«Отходит поезд» là cách nói chuẩn về tàu bắt đầu rời ga. Không phải lúc tàu đến hay dừng."
      },
      {
        sentence: "Мы уже подлетаем к Москве.",
        options: ["улетаем из Москвы", "приближаемся к Москве по воздуху", "облетаем Москву вокруг", "вылетаем из Москвы"],
        correct: "приближаемся к Москве по воздуху",
        viet: "Chúng tôi đã bay gần đến Moscow rồi.",
        why: "«Подлетаем» = bay tiến lại gần một địa điểm. «улетаем/вылетаем» là rời khỏi điểm nào đó."
      },
      {
        sentence: "Корабль отплыл от берега.",
        options: ["подплыл к берегу", "уплыл далеко навсегда", "отошёл от берега по воде", "вплыл в гавань"],
        correct: "отошёл от берега по воде",
        viet: "Con tàu đã rời bờ và chèo/ra khơi.",
        why: "«Отплыл» nhấn mạnh rời khỏi bờ bằng đường nước. «подплыл» là bơi/lại gần bờ."
      },
      {
        sentence: "Он подвёз меня на машине к самому дому.",
        options: ["увёз меня из дома", "довёз меня до самого дома на машине", "привёл меня пешком", "отвёл меня в сторону"],
        correct: "довёз меня до самого дома на машине",
        viet: "Anh ấy chở tôi bằng xe đến tận cửa nhà.",
        why: "«Подвёз» ở đây nghĩa là chở lại gần, đến sát một điểm cần đến. Không phải chở đi khỏi nơi đó."
      },
      {
        sentence: "Она подвела меня к карте.",
        options: ["отвела меня от карты", "привела меня поближе к карте", "увела меня домой", "привезла меня к карте"],
        correct: "привела меня поближе к карте",
        viet: "Cô ấy đã dẫn tôi lại gần tấm bản đồ.",
        why: "«Подвела» = dẫn lại gần một vật. Không phải dẫn đi xa hay dùng phương tiện."
      },
      {
        sentence: "Он отвёл меня в сторону и сказал: «Это секрет».",
        options: ["подвёл меня ближе", "отвёл меня в сторону", "привёл меня домой", "завёл меня в комнату"],
        correct: "отвёл меня в сторону",
        viet: "Anh ấy kéo tôi ra một bên và nói: “Đây là bí mật.”",
        why: "«Отвёл в сторону» là đưa ai đó ra chỗ khác, tách khỏi nơi ban đầu. Nó đối lập với «подвёл»."
      },
      {
        sentence: "Она поднесла руки к лицу.",
        options: ["убрала руки от лица", "подвела ребёнка к лицу", "приблизила руки к лицу", "унесла руки в комнату"],
        correct: "приблизила руки к лицу",
        viet: "Cô ấy đưa hai tay lên sát mặt.",
        why: "«Поднесла» = mang/đưa lại gần một điểm. Không phải bỏ ra xa hay mang đi chỗ khác."
      },
      {
        sentence: "Она отошла от меня.",
        options: ["подошла ко мне", "отдалилась от меня", "зашла ко мне в гости", "увезла меня"],
        correct: "отдалилась от меня",
        viet: "Cô ấy đã bước ra xa khỏi tôi.",
        why: "«Отошла» là lùi/bước ra xa. Các phương án khác hoặc là tiến lại gần, hoặc là nghĩa hoàn toàn khác."
      }
    ]
  },
  {
    id: "ex37",
    num: 37,
    title: "Упражнение 37 - От- с переходными глаголами",
    description:
      "Прочитайте предложения и определите значение глаголов движения с приставкой от-: донести/довести/довезти до нужного места.",
    questions: [
      {
        sentence: "Отнеси чашки на кухню.",
        options: ["принеси чашки сюда", "отнеси чашки к нужному месту", "увези чашки на машине", "занеси чашки в комнату"],
        correct: "отнеси чашки к нужному месту",
        viet: "Hãy mang những chiếc cốc vào bếp.",
        why: "«Отнеси» nghĩa là mang vật bằng tay đến đúng nơi cần đặt. «принеси» là mang về phía người nói, còn «увези» là chở bằng phương tiện."
      },
      {
        sentence: "Отведи ребёнка в детский сад.",
        options: ["приведи ребёнка сюда", "доведи ребёнка до детского сада", "увези ребёнка поездом", "подведи ребёнка поближе"],
        correct: "доведи ребёнка до детского сада",
        viet: "Hãy dẫn đứa trẻ đến trường mầm non.",
        why: "«Отведи» = dắt ai đó đến đúng nơi. Không phải đưa lại đây hay chở bằng xe."
      },
      {
        sentence: "Надо отвести его к врачу.",
        options: ["привести его от врача", "доставить его к врачу пешком", "отнести его как вещь", "увезти его из города"],
        correct: "доставить его к врачу пешком",
        viet: "Cần đưa anh ấy đến bác sĩ.",
        why: "«Отвести к врачу» là dẫn một người đến bác sĩ. «отнести» dùng cho vật, còn «увезти» là chở đi bằng phương tiện."
      },
      {
        sentence: "Завтра отнесу книги в библиотеку.",
        options: ["привезу книги из библиотеки", "унесу книги без адреса", "доставлю книги в библиотеку", "внесу книги в комнату"],
        correct: "доставлю книги в библиотеку",
        viet: "Ngày mai tôi sẽ mang sách đến thư viện.",
        why: "«Отнесу» diễn tả mang vật đến nơi đích xác là thư viện. Không phải mang từ thư viện về."
      },
      {
        sentence: "Он всегда сам относит посуду на кухню и сам моет её.",
        options: ["каждый раз приносит посуду с кухни", "каждый раз уносит посуду на кухню", "каждый раз вывозит посуду", "каждый раз подносит посуду к столу"],
        correct: "каждый раз уносит посуду на кухню",
        viet: "Anh ấy luôn tự mang bát đĩa vào bếp rồi tự rửa.",
        why: "«Относит» ở đây là thường xuyên mang đi đến bếp. «подносит» là mang lại gần, «приносит» là mang tới đây."
      },
      {
        sentence: "— Где старый телевизор? — Я отвёз его на дачу.",
        options: ["доставил его на дачу на транспорте", "принёс его на дачу в руках", "подвёл его к даче", "вернул его с дачи"],
        correct: "доставил его на дачу на транспорте",
        viet: "Cái tivi cũ đâu rồi? Tôi đã chở nó ra nhà nghỉ rồi.",
        why: "«Отвёз» dùng khi chở vật bằng phương tiện tới đích. «принёс» là mang bằng tay, còn «подвёл» chỉ dùng với người."
      },
      {
        sentence: "Отнеси отцу чай.",
        options: ["принеси отцу чай сюда", "доставь чай отцу", "отвези чай отцу на машине", "унеси чай со стола без адреса"],
        correct: "доставь чай отцу",
        viet: "Hãy mang trà cho bố.",
        why: "«Отнеси» diễn tả mang đồ đến người nhận cụ thể. «отвези» là chở bằng xe, các đáp án còn lại sai hướng."
      },
      {
        sentence: "Она сама отводит сына в детский сад.",
        options: ["сама приводит сына домой", "сама водит сына к месту назначения", "сама отвозит сына самолётом", "сама подводит сына к двери и уходит"],
        correct: "сама водит сына к месту назначения",
        viet: "Chính cô ấy tự dẫn con trai đến trường mầm non.",
        why: "«Отводит» ở đây là dắt con đến đúng địa điểm một cách thường xuyên. Không phải đưa về nhà hay chở bằng phương tiện."
      },
      {
        sentence: "Отнеси пальто в химчистку.",
        options: ["принеси пальто из химчистки", "доставь пальто в химчистку", "увези пальто за город", "надень пальто на себя"],
        correct: "доставь пальто в химчистку",
        viet: "Hãy mang áo khoác đến tiệm giặt khô.",
        why: "«Отнеси» = mang vật đến đúng nơi được chỉ định. «принеси» là mang về phía người nói, các đáp án khác sai nghĩa."
      },
      {
        sentence: "Отвези ей в Австрию этот сувенир.",
        options: ["принеси ей этот сувенир пешком", "доставь ей сувенир транспортом", "уведи её в Австрию", "поднеси ей сувенир поближе"],
        correct: "доставь ей сувенир транспортом",
        viet: "Hãy mang món quà lưu niệm này sang Áo cho cô ấy.",
        why: "«Отвези» dùng khi mang/chở vật đến nơi xa bằng phương tiện. «отнеси» bằng tay không phù hợp với khoảng cách này."
      },
      {
        sentence: "Отнеси книги на место.",
        options: ["принеси книги сюда", "положи книги обратно туда, где им место", "подари книги кому-нибудь", "увези книги в другой город"],
        correct: "положи книги обратно туда, где им место",
        viet: "Hãy mang sách về đúng chỗ của chúng.",
        why: "«Отнеси на место» là cụm cố định: mang trả về đúng vị trí. Các lựa chọn khác làm sai hướng hoặc sai mục đích."
      },
      {
        sentence: "Завтра я отвезу вас в гостиницу.",
        options: ["завтра я подведу вас к гостинице пешком", "завтра я доставлю вас в гостиницу на транспорте", "завтра я уведу вас из гостиницы", "завтра я принесу вас в гостиницу"],
        correct: "завтра я доставлю вас в гостиницу на транспорте",
        viet: "Ngày mai tôi sẽ chở các bạn tới khách sạn.",
        why: "«Отвезу» nghĩa là đưa người nào đó đến nơi bằng xe/phương tiện. «отведу» là đi bộ dẫn đi, còn các đáp án khác sai nghĩa."
      }
    ]
  },
  {
    id: "ex40",
    num: 40,
    title: "Упражнение 40 - Пере-",
    description:
      "Выберите наиболее подходящий вариант. Обратите внимание на значение приставки пере-: пересечь, перевезти, перенести на другую сторону или в другое место.",
    questions: [
      {
        sentence: "Я всегда … (перехожу — перейду) улицу по пешеходному переходу.",
        options: ["перехожу", "перейду", "подхожу", "обхожу"],
        correct: "перехожу",
        full: "Я всегда перехожу улицу по пешеходному переходу.",
        viet: "Tôi luôn băng qua đường ở vạch dành cho người đi bộ.",
        why: "«Всегда» chỉ thói quen lặp lại nên cần «перехожу» ở thể chưa hoàn thành. «Перейду» là một lần cụ thể trong tương lai, còn các phương án khác sai hướng nghĩa."
      },
      {
        sentence: "Не надо … (переплывать — переплыть) через Неву, это опасно!",
        options: ["переплывать", "переплыть", "доплыть", "заплывать"],
        correct: "переплывать",
        full: "Не надо переплывать через Неву, это опасно!",
        viet: "Đừng bơi qua sông Neva, nguy hiểm lắm!",
        why: "Sau «не надо» trong lời khuyên/phủ định chung, tiếng Nga thường dùng infinitive chưa hoàn thành: «переплывать». «Переплыть» nghe như một hành động đơn lẻ cụ thể hơn."
      },
      {
        sentence: "Неву можно … (переходить — перейти) зимой по льду.",
        options: ["переходить", "перейти", "подходить", "обходить"],
        correct: "перейти",
        full: "Неву можно перейти зимой по льду.",
        viet: "Vào mùa đông có thể đi qua sông Neva trên mặt băng.",
        why: "«Можно перейти» nhấn mạnh khả năng thực hiện trọn vẹn hành động băng qua. «Переходить» thiên về thói quen/quá trình, kém tự nhiên hơn trong câu nêu khả năng cụ thể."
      },
      {
        sentence: "Кто первым … (перелетал — перелетел) Атлантический океан?",
        options: ["перелетал", "перелетел", "подлетел", "облетел"],
        correct: "перелетел",
        full: "Кто первым перелетел Атлантический океан?",
        viet: "Ai là người đầu tiên bay qua Đại Tây Dương?",
        why: "Hỏi về một sự kiện lịch sử hoàn thành một lần nên dùng «перелетел». «Перелетал» mang sắc thái lặp lại hoặc quá trình."
      },
      {
        sentence: "Скоро я … (переезжаю — перееду) на новую квартиру.",
        options: ["переезжаю", "перееду", "заезжаю", "выезжаю"],
        correct: "перееду",
        full: "Скоро я перееду на новую квартиру.",
        viet: "Sắp tới tôi sẽ chuyển sang căn hộ mới.",
        why: "Đây là một hành động đơn lẻ trong tương lai với kết quả rõ ràng, nên chọn «перееду». «Переезжаю» cũng có thể gặp trong ngôn ngữ nói về kế hoạch, nhưng trong bài luyện thể và kết quả, «перееду» là chuẩn hơn."
      },
      {
        sentence: "Девочка … (перебегала — перебежала) по мостику на другой берег реки.",
        options: ["перебегала", "перебежала", "подбежала", "забежала"],
        correct: "перебежала",
        full: "Девочка перебежала по мостику на другой берег реки.",
        viet: "Cô bé chạy băng qua chiếc cầu nhỏ sang bờ bên kia sông.",
        why: "«Перебежала» nhấn mạnh việc chạy qua và đạt tới bờ bên kia. «Перебегала» sẽ gợi hành động lặp lại hoặc quá trình."
      },
      {
        sentence: "Я … (буду переносить — перенесу) свои вещи в новую комнату в общежитии.",
        options: ["буду переносить", "перенесу", "занесу", "поднесу"],
        correct: "перенесу",
        full: "Я перенесу свои вещи в новую комнату в общежитии.",
        viet: "Tôi sẽ chuyển đồ của mình sang phòng mới trong ký túc xá.",
        why: "Đây là hành động hoàn tất một lần với kết quả chuyển đồ sang nơi khác, nên «перенесу». «Буду переносить» nhấn mạnh quá trình kéo dài."
      },
      {
        sentence: "Скоро я … (буду переезжать — перееду) на новую квартиру и … (буду перевозить — перевезу) все свои вещи.",
        options: [
          "перееду — перевезу",
          "буду переезжать — буду перевозить",
          "перееду — буду перевозить",
          "буду переезжать — перевезу"
        ],
        correct: "перееду — перевезу",
        full: "Скоро я перееду на новую квартиру и перевезу все свои вещи.",
        viet: "Sắp tới tôi sẽ chuyển sang căn hộ mới và sẽ chở hết đồ đạc của mình sang đó.",
        why: "Cả hai hành động đều là sự kiện đơn lẻ có kết quả trong tương lai, nên cần cặp «перееду — перевезу». Các phương án với tương lai phân tích nhấn quá trình hơn kết quả."
      },
      {
        sentence: "Надо помочь старушке и … (переводить — перевести) её через улицу.",
        options: ["переводить", "перевести", "подвести", "отвести"],
        correct: "перевести",
        full: "Надо помочь старушке и перевести её через улицу.",
        viet: "Phải giúp bà cụ và dắt bà ấy qua đường.",
        why: "Sau «надо» khi nói về một hành động cụ thể cần hoàn thành, chọn «перевести». «Переводить» là dạng quá trình/thói quen."
      },
      {
        sentence: "Птица поминутно … (перелетала — перелетела) с ветки на ветку.",
        options: ["перелетала", "перелетела", "улетала", "подлетела"],
        correct: "перелетала",
        full: "Птица поминутно перелетала с ветки на ветку.",
        viet: "Con chim liên tục bay chuyền từ cành này sang cành khác.",
        why: "«Поминутно» cho thấy hành động lặp đi lặp lại, nên cần «перелетала». «Перелетела» chỉ một lần bay qua duy nhất."
      },
      {
        sentence: "Птица … (перелетала — перелетела) на другое дерево.",
        options: ["перелетала", "перелетела", "залетала", "подлетала"],
        correct: "перелетела",
        full: "Птица перелетела на другое дерево.",
        viet: "Con chim đã bay sang cây khác.",
        why: "Ở đây là một hành động hoàn chỉnh: từ cây này sang cây kia. Vì vậy phải dùng «перелетела»."
      },
      {
        sentence: "Мне хотелось бы … (переплывать — переплыть) Атлантический океан.",
        options: ["переплывать", "переплыть", "доплывать", "заплывать"],
        correct: "переплыть",
        full: "Мне хотелось бы переплыть Атлантический океан.",
        viet: "Tôi muốn có thể bơi vượt Đại Tây Dương.",
        why: "Người nói mơ ước hoàn thành một chiến công cụ thể, nên chọn «переплыть». «Переплывать» sẽ diễn tả quá trình/thói quen, không hợp ý câu."
      }
    ]
  },
  {
    id: "ex42",
    num: 42,
    title: "Упражнение 42 - За-",
    description:
      "Выберите правильный вариант. Различайте значения приставки за-: зайти/заехать по пути, зайти/заехать за предмет, завести/занести внутрь.",
    questions: [
      {
        sentence: "Я пойду домой и по дороге … (зайду — заеду) в аптеку.",
        options: ["зайду", "заеду", "забегу", "завезу"],
        correct: "зайду",
        full: "Я пойду домой и по дороге зайду в аптеку.",
        viet: "Tôi sẽ đi bộ về nhà và trên đường sẽ ghé hiệu thuốc.",
        why: "Vì người nói đi bộ («пойду»), nên dùng «зайду». «Заеду» gắn với phương tiện, «забегу» nhấn chạy vội, còn «завезу» là mang/chở thứ gì đó đến."
      },
      {
        sentence: "Я поеду домой и по дороге … (забегу — заеду) в аптеку.",
        options: ["забегу", "заеду", "зайду", "подъеду"],
        correct: "заеду",
        full: "Я поеду домой и по дороге заеду в аптеку.",
        viet: "Tôi sẽ đi về nhà bằng xe và trên đường sẽ tạt qua hiệu thuốc.",
        why: "«Поеду» cho biết di chuyển bằng phương tiện, nên «заеду» là đúng. «Забегу» chỉ hợp khi chạy bộ hoặc tạt vào rất nhanh bằng chân."
      },
      {
        sentence: "Я поеду домой на автобусе и по дороге … (забегу — заеду) в аптеку.",
        options: ["забегу", "заеду", "зайду", "завезу"],
        correct: "забегу",
        full: "Я поеду домой на автобусе и по дороге забегу в аптеку.",
        viet: "Tôi sẽ đi xe buýt về nhà và trên đường sẽ tạt nhanh vào hiệu thuốc.",
        why: "Vì đi bằng автобус, người nói không tự điều khiển phương tiện để 'lái vào', nên «забегу» hợp hơn: xuống xe rồi chạy tạt vào nhanh. «Заеду» tự nhiên hơn với xe do chính mình đi."
      },
      {
        sentence: "Я поеду домой на машине и по дороге … (забегу — заеду) в аптеку.",
        options: ["забегу", "заеду", "зайду", "подойду"],
        correct: "заеду",
        full: "Я поеду домой на машине и по дороге заеду в аптеку.",
        viet: "Tôi sẽ lái ô tô về nhà và trên đường sẽ ghé hiệu thuốc.",
        why: "Có ô tô riêng nên «заеду» là đúng: tạt xe vào một điểm trên đường. «Забегу» không phù hợp với phương tiện đang dùng."
      },
      {
        sentence: "… (Заходи — Заводи) в комнату!",
        options: ["Заходи", "Заводи", "Заноси", "Заезжай"],
        correct: "Заходи",
        full: "Заходи в комнату!",
        viet: "Hãy vào phòng đi!",
        why: "«Заходи» dùng khi chính người nghe đi vào trong phòng. «Заводи» là dắt ai/đưa cái gì vào, «заноси» là mang vật vào."
      },
      {
        sentence: "… (Заходи — Заводи) собаку в комнату!",
        options: ["Заходи", "Заводи", "Заноси", "Завози"],
        correct: "Заводи",
        full: "Заводи собаку в комнату!",
        viet: "Hãy dắt con chó vào phòng!",
        why: "Vì có tân ngữ là con chó, cần động từ chuyển tiếp «заводи». «Заходи» là tự mình vào phòng."
      },
      {
        sentence: "… (Заноси — Заводи) вещи в комнату!",
        options: ["Заноси", "Заводи", "Заходи", "Заезжай"],
        correct: "Заноси",
        full: "Заноси вещи в комнату!",
        viet: "Hãy mang đồ vào phòng!",
        why: "«Заноси» dùng với đồ vật được mang vào trong. «Заводи» dùng cho người/động vật hoặc phương tiện."
      },
      {
        sentence: "… (Заноси — Завози) ковёр в комнату!",
        options: ["Заноси", "Завози", "Заходи", "Заводи"],
        correct: "Заноси",
        full: "Заноси ковёр в комнату!",
        viet: "Hãy mang tấm thảm vào phòng!",
        why: "Thảm là vật được xách/mang vào, nên dùng «заноcи». «Завози» sẽ hợp hơn với việc chở bằng phương tiện vào đâu đó."
      },
      {
        sentence: "… (Зайди — Забеги) ко мне на минутку!",
        options: ["Зайди", "Забеги", "Заезжай", "Подойди"],
        correct: "Забеги",
        full: "Забеги ко мне на минутку!",
        viet: "Tạt qua chỗ tôi một phút thôi nhé!",
        why: "«На минутку» tạo sắc thái ghé nhanh, nên «забеги» tự nhiên nhất. «Зайди» trung tính hơn, không nhấn sự chớp nhoáng."
      },
      {
        sentence: "Не … (забегай — заплывай) за буйки!",
        options: ["забегай", "заплывай", "заходи", "заезжай"],
        correct: "заплывай",
        full: "Не заплывай за буйки!",
        viet: "Đừng bơi ra quá phao giới hạn!",
        why: "Vì речь о воде и буйках, phải dùng «заплывай». «Забегай» là chạy vào đâu đó."
      },
      {
        sentence: "Солнце … (зашло — залетело) за тучу.",
        options: ["зашло", "залетело", "уплыло", "подошло"],
        correct: "зашло",
        full: "Солнце зашло за тучу.",
        viet: "Mặt trời khuất sau đám mây.",
        why: "Động từ chuẩn cho mặt trời khuất sau vật nào đó là «зашло». «Залетело» chỉ hợp với sinh vật/vật thể bay vào đâu đó."
      },
      {
        sentence: "Ребёнок … (зашёл — забежал) за дерево.",
        options: ["зашёл", "забежал", "залетел", "заехал"],
        correct: "зашёл",
        full: "Ребёнок зашёл за дерево.",
        viet: "Đứa trẻ đi ra phía sau cái cây.",
        why: "Ở đây nhấn mạnh kết quả 'khuất sau cây', nên chọn «зашёл». «Забежал» sẽ nhấn mạnh là chạy, nhưng bài gốc đối lập hành động trung tính với hành động chạy."
      },
      {
        sentence: "Машина … (зашла — заехала) за угол.",
        options: ["зашла", "заехала", "забежала", "залетела"],
        correct: "заехала",
        full: "Машина заехала за угол.",
        viet: "Chiếc xe chạy khuất ra phía sau góc nhà.",
        why: "Với phương tiện, phải dùng «заехала». «Зашла» chỉ cho người đi bộ."
      },
      {
        sentence: "Пожалуйста, … (занеси — заведи) все вещи с балкона в комнату!",
        options: ["занеси", "заведи", "заезжай", "зайди"],
        correct: "занеси",
        full: "Пожалуйста, занеси все вещи с балкона в комнату!",
        viet: "Làm ơn mang tất cả đồ từ ban công vào phòng.",
        why: "«Занеси» dùng với đồ vật. «Заведи» không dùng cho 'вещи' trong ngữ cảnh này."
      },
      {
        sentence: "Если поедешь на дачу, … (заведи — завези) деньги бабушке.",
        options: ["заведи", "завези", "зайди", "занеси"],
        correct: "завези",
        full: "Если поедешь на дачу, завези деньги бабушке.",
        viet: "Nếu cậu đi ra dacha, thì tiện đường mang/chở tiền cho bà nhé.",
        why: "«Завези» = tiện đường mang/chở cái gì đó tới ai bằng phương tiện. «Заведи» dùng cho việc dắt ai/cái gì vào đâu đó."
      },
      {
        sentence: "… (Занеси — Заведи) лошадь в конюшню.",
        options: ["Занеси", "Заведи", "Завези", "Заходи"],
        correct: "Заведи",
        full: "Заведи лошадь в конюшню.",
        viet: "Hãy dắt con ngựa vào chuồng.",
        why: "Vì «лошадь» là động vật được dẫn vào, phải dùng «заведи». «Занеси» dùng cho đồ vật mang bằng tay."
      }
    ]
  },
  {
    id: "ex45",
    num: 45,
    title: "Упражнение 45 - Значение по-, про-, за- во времени",
    description:
      "Определите значение глагола движения. Помните: с приставками по-, про-, за- в значении времени здесь употребляется только СВ.",
    questions: [
      {
        sentence: "Он встал и заходил по комнате.",
        options: timePrefixOptions,
        correct: "начать двигаться туда-сюда",
        viet: "Anh ta đứng dậy và bắt đầu đi đi lại lại trong phòng.",
        why: "«Заходил по комнате» = bắt đầu đi qua đi lại. Đây là nghĩa bắt đầu hành động của за-; không phải đi một chút hay đi suốt thời gian dài."
      },
      {
        sentence: "Дождь прекратился, и муравьи снова забегали по лесным дорожкам.",
        options: timePrefixOptions,
        correct: "начать двигаться туда-сюда",
        viet: "Mưa tạnh và đàn kiến lại bắt đầu chạy nhộn nhịp trên các lối mòn trong rừng.",
        why: "«Забегали» chỉ sự khởi đầu của một hoạt động lặp đi lặp lại. Không phải thời lượng ngắn hay dài."
      },
      {
        sentence: "У меня мало практики, я хочу на этой неделе побольше поездить на машине.",
        options: timePrefixOptions,
        correct: "немного / недолго двигаться",
        viet: "Tôi ít thực hành, tuần này tôi muốn lái xe thêm một chút.",
        why: "«Поездить» với по- ở nhóm II chỉ làm gì đó một thời gian nhất định, không dài. «Проездить» mới nhấn mạnh khoảng thời gian dài."
      },
      {
        sentence: "Можно поплавать на твоей лодке?",
        options: timePrefixOptions,
        correct: "немного / недолго двигаться",
        viet: "Tôi có thể chèo/bơi một chút bằng chiếc thuyền của cậu không?",
        why: "«Поплавать» nghĩa là bơi/chèo một lúc. Không phải suốt thời gian dài và cũng không phải bắt đầu đi đi lại lại."
      },
      {
        sentence: "Лебеди полетали над озером и спустились на землю.",
        options: timePrefixOptions,
        correct: "немного / недолго двигаться",
        viet: "Những con thiên nga bay lượn một lúc trên hồ rồi đáp xuống đất.",
        why: "«Полетали» = bay một lúc, trong thời gian không dài. Đây chính là nghĩa thời lượng ngắn của по-."
      },
      {
        sentence: "Я хочу хоть полчасика поплавать в бассейне.",
        options: timePrefixOptions,
        correct: "немного / недолго двигаться",
        viet: "Tôi muốn bơi trong bể ít nhất nửa tiếng một chút.",
        why: "Dù có chỉ rõ 'nửa tiếng', «поплавать» vẫn là hành động có thời lượng giới hạn, không nhấn mạnh kéo dài suốt cả buổi như «проплавать»."
      },
      {
        sentence: "Завтра обязательно поплаваю хоть чуть-чуть.",
        options: timePrefixOptions,
        correct: "немного / недолго двигаться",
        viet: "Ngày mai nhất định tôi sẽ bơi một chút.",
        why: "«Поплаваю» = bơi một chút. Dấu hiệu «хоть чуть-чуть» càng củng cố nghĩa thời lượng ngắn."
      },
      {
        sentence: "Хочу побегать в парке.",
        options: timePrefixOptions,
        correct: "немного / недолго двигаться",
        viet: "Tôi muốn chạy bộ một chút trong công viên.",
        why: "«Побегать» nghĩa là chạy một lúc. Không phải bắt đầu chạy qua lại như «забегать»."
      },
      {
        sentence: "Надо поводить его на выставки, а то он совершенно необразованный.",
        options: timePrefixOptions,
        correct: "немного / недолго двигаться",
        viet: "Phải đưa anh ấy đi xem triển lãm vài lần/ít nhiều, chứ anh ấy thiếu kiến thức quá.",
        why: "«Поводить» ở đây chỉ việc đưa ai đó đi một số lần/ít lâu để làm quen. Nó không mang nghĩa kéo dài suốt một khoảng thời gian lớn."
      },
      {
        sentence: "Надо повозить его по городу.",
        options: timePrefixOptions,
        correct: "немного / недолго двигаться",
        viet: "Phải chở anh ấy đi vòng quanh thành phố một chút.",
        why: "«Повозить» nghĩa là chở đi một lúc, có giới hạn. Nếu nhấn mạnh suốt cả ngày, thường sẽ là «провозить»."
      },
      {
        sentence: "Мы проходили по городу весь день.",
        options: timePrefixOptions,
        correct: "долго / всё время двигаться",
        viet: "Chúng tôi đã đi bộ khắp thành phố suốt cả ngày.",
        why: "Dấu hiệu «весь день» buộc phải hiểu là thời lượng dài. «Проходили» ở đây chỉ dành trọn một khoảng thời gian cho chuyển động."
      },
      {
        sentence: "Она проплавала в бассейне полдня.",
        options: timePrefixOptions,
        correct: "долго / всё время двигаться",
        viet: "Cô ấy đã bơi trong bể suốt nửa ngày.",
        why: "«Проплавала» = bơi trong khoảng thời gian dài. Chính cụm «полдня» cho thấy đây không phải hành động ngắn."
      },
      {
        sentence: "Мы проездили по магазинам все выходные.",
        options: timePrefixOptions,
        correct: "долго / всё время двигаться",
        viet: "Chúng tôi đã chạy khắp các cửa hàng suốt cả cuối tuần.",
        why: "«Проездили» mang nghĩa dành trọn cuối tuần cho việc di chuyển. Đây là đúng nghĩa thời lượng dài của про-."
      },
      {
        sentence: "Надо поездить по пригородам Петербурга, они очень красивые.",
        options: timePrefixOptions,
        correct: "немного / недолго двигаться",
        viet: "Nên đi thăm quanh các vùng ngoại ô Petersburg một chút, chúng rất đẹp.",
        why: "«Поездить» ở đây là làm một vài chuyến/đi một lúc cho biết. Không phải đi suốt một khoảng thời gian dài như «проездить»."
      }
    ]
  },
  {
    id: "ex46",
    num: 46,
    title: "Упражнение 46 - По- или про-",
    description:
      "Вставьте подходящий по смыслу глагол СВ с префиксом по- или про- в значении времени.",
    questions: [
      {
        sentence: "Мы немного … (поплавали — проплавали) в бассейне и вышли на берег.",
        options: ["поплавали", "проплавали", "заплавали", "приплыли"],
        correct: "поплавали",
        full: "Мы немного поплавали в бассейне и вышли на берег.",
        viet: "Chúng tôi bơi một chút trong bể rồi lên bờ.",
        why: "Có từ «немного», nên phải chọn «поплавали» = bơi một lúc ngắn. «проплавали» nhấn mạnh khoảng thời gian dài."
      },
      {
        sentence: "Вода была как парное молоко, и мы … (поплавали — проплавали) в море больше часа.",
        options: ["поплавали", "проплавали", "заплавали", "доплыли"],
        correct: "проплавали",
        full: "Вода была как парное молоко, и мы проплавали в море больше часа.",
        viet: "Nước ấm như sữa tươi, và chúng tôi đã bơi ngoài biển hơn một tiếng.",
        why: "«Больше часа» biểu thị khoảng thời gian dài, nên chọn «проплавали». «поплавали» chỉ một lúc ngắn."
      },
      {
        sentence: "Он … (поездил — проездил) на машине целых три дня.",
        options: ["поездил", "проездил", "съездил", "уехал"],
        correct: "проездил",
        full: "Он проездил на машине целых три дня.",
        viet: "Anh ấy đã lái xe/rong ruổi bằng xe suốt ba ngày liền.",
        why: "«Целых три дня» = thời lượng dài, nên dùng «проездил». «поездил» chỉ mang sắc thái đi một chút."
      },
      {
        sentence: "Она … (походит — проходит) по лесу весь день.",
        options: ["походит", "проходит", "уходит", "заходит"],
        correct: "проходит",
        full: "Она проходит по лесу весь день.",
        viet: "Cô ấy đi bộ trong rừng suốt cả ngày.",
        why: "«Весь день» đòi hỏi nghĩa thời lượng dài của про-. «Походит» chỉ một lúc, không phù hợp."
      },
      {
        sentence: "Можно мне … (полетать — пролетать) на твоём дельтаплане?",
        options: ["полетать", "пролетать", "улетать", "залетать"],
        correct: "полетать",
        full: "Можно мне полетать на твоём дельтаплане?",
        viet: "Tôi có thể bay thử/lượn một chút bằng chiếc dù lượn của cậu không?",
        why: "Ở lời xin phép, người nói muốn thử một lúc nên chọn «полетать». «Пролетать» trong nghĩa thời gian dài không hợp văn cảnh."
      },
      {
        sentence: "Можно … (поездить — проездить) на твоей машине?",
        options: ["поездить", "проездить", "переехать", "уехать"],
        correct: "поездить",
        full: "Можно поездить на твоей машине?",
        viet: "Tôi có thể lái thử xe của cậu một chút không?",
        why: "«Поездить» là đi/điều khiển xe một lúc. «Проездить» nghe như dùng xe trong một khoảng thời gian dài."
      },
      {
        sentence: "Давай … (поездим — проездим) по парку!",
        options: ["поездим", "проездим", "уедем", "заедем"],
        correct: "поездим",
        full: "Давай поездим по парку!",
        viet: "Chúng ta đi dạo/lái xe vòng quanh công viên một chút nhé!",
        why: "Lời rủ rê ngắn gọn phù hợp với «поездим» = đi một lúc. «Проездим» sẽ nhấn mạnh cả một khoảng thời gian dài."
      },
      {
        sentence: "Надо … (поводить — проводить) его по музеям.",
        options: ["поводить", "проводить", "доводить", "уводить"],
        correct: "поводить",
        full: "Надо поводить его по музеям.",
        viet: "Phải dẫn anh ấy đi vài bảo tàng một chút.",
        why: "«Поводить по музеям» = dẫn đi một số nơi để tham quan. «Проводить» trong ngữ cảnh này không mang nghĩa thời lượng ngắn theo bài lý thuyết."
      },
      {
        sentence: "Птицы … (полетали — пролетали) весь день.",
        options: ["полетали", "пролетали", "улетали", "залетали"],
        correct: "пролетали",
        full: "Птицы пролетали весь день.",
        viet: "Bầy chim bay suốt cả ngày.",
        why: "«Весь день» yêu cầu nghĩa dài của про-. «Полетали» chỉ bay một lúc ngắn."
      },
      {
        sentence: "Утки … (полетали — пролетали) немного над озером и с шумом сели на воду.",
        options: ["полетали", "пролетали", "улетали", "залетали"],
        correct: "полетали",
        full: "Утки полетали немного над озером и с шумом сели на воду.",
        viet: "Đàn vịt bay lượn một chút trên mặt hồ rồi ồn ào đáp xuống nước.",
        why: "Có từ «немного», nên phải chọn «полетали». «Пролетали» sẽ cho nghĩa thời lượng dài."
      },
      {
        sentence: "Паспорт мне не понадобился, и я зря … (поносил — проносил) его весь день в сумке.",
        options: ["поносил", "проносил", "принёс", "уносил"],
        correct: "проносил",
        full: "Паспорт мне не понадобился, и я зря проносил его весь день в сумке.",
        viet: "Hộ chiếu hóa ra không cần dùng đến, và tôi đã mang nó theo trong túi suốt cả ngày một cách vô ích.",
        why: "«Весь день» buộc dùng «проносил» = mang theo suốt cả ngày. «Поносил» chỉ mang một lúc ngắn."
      },
      {
        sentence: "Он немного … (повозил — провозил) меня на своей новой машине.",
        options: ["повозил", "провозил", "подвёз", "увёз"],
        correct: "повозил",
        full: "Он немного повозил меня на своей новой машине.",
        viet: "Anh ấy chở tôi đi một chút bằng chiếc xe mới của mình.",
        why: "Có «немного», nên chọn «повозил» = chở đi một lúc. «Провозил» nhấn mạnh thời gian dài."
      },
      {
        sentence: "Он … (поездил — проездил) на этой машине уже десять лет!",
        options: ["поездил", "проездил", "съездил", "доехал"],
        correct: "проездил",
        full: "Он проездил на этой машине уже десять лет!",
        viet: "Anh ấy đã đi chiếc xe này suốt mười năm rồi!",
        why: "«Уже десять лет» là khoảng thời gian dài rõ rệt, nên phải dùng «проездил». «Поездил» không thể bao quát mười năm."
      },
      {
        sentence: "Если ребёнок плачет, надо … (поносить — проносить) его на руках.",
        options: ["поносить", "проносить", "уносить", "подносить"],
        correct: "поносить",
        full: "Если ребёнок плачет, надо поносить его на руках.",
        viet: "Nếu em bé khóc, phải bế nó trên tay một lúc.",
        why: "Ở đây nghĩa là bế một lúc để dỗ, nên dùng «поносить». «Проносить» là mang suốt một quãng thời gian dài, không hợp tình huống."
      }
    ]
  },
  {
    id: "ex47",
    num: 47,
    title: "Упражнение 47 - Префикс с-",
    description:
      "Прочитайте предложения и определите значение глаголов движения с префиксом с-. Для непереходных глаголов это обычно короткая поездка туда и обратно; для переходных — доставка к цели.",
    questions: [
      {
        sentence: "Хочу съездить в Суздаль.",
        options: tripOrDeliveryOptions,
        correct: "короткая поездка / поход туда и обратно",
        viet: "Tôi muốn đi Suzdal một chuyến rồi về.",
        why: "«Съездить» ở đây là một chuyến đi khứ hồi ngắn: đi rồi trở lại. Không phải 'chở ai/cái gì đến nơi'."
      },
      {
        sentence: "Надо бы сходить в Этнографический музей.",
        options: tripOrDeliveryOptions,
        correct: "короткая поездка / поход туда и обратно",
        viet: "Nên đi Bảo tàng Dân tộc học một chuyến.",
        why: "«Сходить» nghĩa là đi một lượt rồi về, thường trong phạm vi gần. Không phải nghĩa 'rời đi hẳn'."
      },
      {
        sentence: "Сбегай за вином!",
        options: tripOrDeliveryOptions,
        correct: "короткая поездка / поход туда и обратно",
        viet: "Chạy đi mua rượu nhoáng cái rồi về!",
        why: "«Сбегай» là hành động đi nhanh, làm xong rồi quay lại. Đây là sắc thái đặc trưng của с- với động từ không chuyển tiếp."
      },
      {
        sentence: "Он уже успел слетать в Москву.",
        options: tripOrDeliveryOptions,
        correct: "короткая поездка / поход туда и обратно",
        viet: "Anh ấy đã kịp bay đi Moscow một chuyến rồi về.",
        why: "«Слетать» ở đây là đi một chuyến khứ hồi bằng máy bay. Không phải rời đi luôn."
      },
      {
        sentence: "Хозяин бросил палку в реку, и собака сплавала за ней.",
        options: tripOrDeliveryOptions,
        correct: "короткая поездка / поход туда и обратно",
        viet: "Ông chủ ném cây gậy xuống sông và con chó đã bơi đi lấy rồi quay về.",
        why: "«Сплавала» biểu thị một lần đi rồi quay lại. Cấu trúc này tương ứng với 'đi một chuyến để lấy gì đó'."
      },
      {
        sentence: "Надо свозить его за грибами, у него нет машины.",
        options: tripOrDeliveryOptions,
        correct: "доставить кого-то или что-то к цели",
        viet: "Phải chở anh ấy đi hái nấm, vì anh ấy không có xe.",
        why: "«Свозить кого-то» là đưa ai đó đi đâu bằng phương tiện. Dù vẫn có sắc thái 'đi một chuyến', ở đây chức năng chính là chở người đến mục tiêu."
      },
      {
        sentence: "Своди его в поликлинику!",
        options: tripOrDeliveryOptions,
        correct: "доставить кого-то или что-то к цели",
        viet: "Hãy dẫn anh ấy đến phòng khám đi!",
        why: "«Своди» là dẫn ai đó tới nơi cần đến. Không phải bản thân người nói đi rồi về."
      },
      {
        sentence: "Свези все книги на дачу.",
        options: tripOrDeliveryOptions,
        correct: "доставить кого-то или что-то к цели",
        viet: "Hãy chở tất cả sách ra nhà nghỉ/dacha.",
        why: "«Свези» dùng với đồ vật được chở đến nơi xác định. Đây là nghĩa vận chuyển tới đích."
      },
      {
        sentence: "Своди его наконец в парикмахерскую.",
        options: tripOrDeliveryOptions,
        correct: "доставить кого-то или что-то к цели",
        viet: "Cuối cùng thì hãy dẫn anh ấy đến tiệm cắt tóc đi.",
        why: "«Своди его» là đưa một người đến một địa điểm cụ thể. Không phải 'đi chơi một chuyến' của bản thân người nói."
      },
      {
        sentence: "Давай сходим в театр!",
        options: tripOrDeliveryOptions,
        correct: "короткая поездка / поход туда и обратно",
        viet: "Chúng ta cùng đi nhà hát một chuyến nhé!",
        why: "«Сходим» là lời rủ đi rồi về. Nó gần nghĩa với «пойдём», nhưng nhấn mạnh một chuyến trọn vẹn."
      },
      {
        sentence: "Давай съездим в Мурманск!",
        options: tripOrDeliveryOptions,
        correct: "короткая поездка / поход туда и обратно",
        viet: "Chúng ta đi Murmansk một chuyến nhé!",
        why: "«Съездим» là làm một chuyến đi bằng phương tiện, hàm ý có sự trở về. Không phải 'đưa ai đó tới nơi'."
      },
      {
        sentence: "Свози меня на Соловки!",
        options: tripOrDeliveryOptions,
        correct: "доставить кого-то или что-то к цели",
        viet: "Hãy chở tôi ra Solovki một chuyến nhé!",
        why: "«Свози меня» = đưa/chở tôi đến nơi đó một chuyến. Chủ ngữ đóng vai trò người vận chuyển, nên không chọn phương án 'bản thân đi rồi về'."
      }
    ]
  },
  {
    id: "ex50",
    num: 50,
    title: "Упражнение 50 - Доехать и дойти",
    description:
      "Проследите за употреблением глаголов доезжать — доехать и других глаголов с приставкой до-. Во всех примерах приставка до- указывает на достижение предела или конечного пункта.",
    questions: [
      {
        sentence: "Я доехал до университета за двадцать минут.",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Tôi đi tới trường đại học mất hai mươi phút.",
        why: "«Доехал до университета» nghĩa là đã đi đến tận đích. Không phải chỉ bắt đầu đi hay rời khỏi nơi xuất phát."
      },
      {
        sentence: "Обычно я доезжаю до университета за полчаса.",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Thường tôi đi tới trường đại học mất nửa tiếng.",
        why: "«Доезжаю до» luôn nhấn mạnh việc đến tận nơi bằng phương tiện. Đây là đúng nghĩa của приставка до-."
      },
      {
        sentence: "Мой друг дошёл до университета пешком за пятьдесят минут.",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Bạn tôi đi bộ tới trường đại học mất năm mươi phút.",
        why: "«Дошёл до» = đi bộ đến tận nơi. Prefix до- chỉ sự chạm mốc/cuối hành trình."
      },
      {
        sentence: "Обычно он доходит до университета пешком за сорок минут.",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Thường anh ấy đi bộ tới trường mất bốn mươi phút.",
        why: "Ở thì hiện tại lặp lại, «доходит до» vẫn giữ nghĩa đến được tận đích. Các phương án khác sai hướng nghĩa."
      },
      {
        sentence: "Как доехать до Эрмитажа?",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Đi tới Hermitage bằng cách nào?",
        why: "Câu hỏi «Как доехать до...?» hỏi cách để tới tận một địa điểm. Không nói về khởi hành hay rời khỏi nơi nào."
      },
      {
        sentence: "На чём доехать до Эрмитажа?",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Đi tới Hermitage bằng phương tiện gì?",
        why: "«Доехать до Эрмитажа» vẫn là đến được đích, chỉ khác ở chỗ hỏi phương tiện nào."
      },
      {
        sentence: "Мне не доплыть до этого острова.",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Tôi không thể bơi tới được hòn đảo này.",
        why: "Dù ở thể phủ định, «доплыть до» vẫn có nghĩa là bơi đến tận nơi. Người nói phủ nhận khả năng đạt đến đích đó."
      },
      {
        sentence: "Была такая метель, что мы с трудом дошли до дома.",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Bão tuyết dữ đến mức chúng tôi phải rất vất vả mới đi được về tới nhà.",
        why: "«Дошли до дома» = cuối cùng cũng tới được nhà. Prefix до- luôn hướng đến kết quả chạm đích."
      },
      {
        sentence: "Спортсмен не смог добежать до финиша и упал.",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Vận động viên không thể chạy tới đích và đã ngã xuống.",
        why: "«Добежать до финиша» nghĩa là chạy đến vạch đích. Ở đây điều đó đã không thành, nhưng bản thân động từ vẫn chỉ mục tiêu cuối."
      },
      {
        sentence: "Помоги мне донести сумку!",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Giúp tôi mang cái túi này tới nơi với!",
        why: "«Донести» là mang vật đến tận điểm cần đến. Không phải chỉ 'cầm lên' hay 'mang đi khỏi đây'."
      },
      {
        sentence: "Довези меня до дома!",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Chở tôi về tới nhà nhé!",
        why: "«Довези до дома» là chở đến đúng địa chỉ cuối cùng. Đây là ví dụ rất rõ của до- với phương tiện."
      },
      {
        sentence: "Один спортсмен не доплыл до финиша.",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Có một vận động viên đã không bơi tới được vạch đích.",
        why: "«Доплыл до финиша» nếu hoàn thành sẽ là tới đích; ở đây dùng phủ định để nói không đạt tới giới hạn đó."
      },
      {
        sentence: "Мяч не долетел до ворот.",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Quả bóng đã không bay tới khung thành.",
        why: "«Долететь до ворот» = bay tới được khung thành. Thể phủ định không làm thay đổi nghĩa cốt lõi 'đạt tới điểm cuối'."
      },
      {
        sentence: "Я не донесу такой тяжёлый чемодан!",
        options: reachDestinationOptions,
        correct: "достичь конечного пункта",
        viet: "Tôi không thể mang nổi cái va-li nặng như thế này tới nơi được!",
        why: "«Донести» chỉ việc mang đến tận nơi. Câu này phủ định khả năng hoàn thành hành động đó, chứ không đổi nghĩa của приставка до-."
      }
    ]
  }
];
