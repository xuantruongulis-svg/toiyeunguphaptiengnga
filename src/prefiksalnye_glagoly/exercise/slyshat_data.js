export const slyshatEx = [
  { id: 1, sentence: "Я ..., что она скоро приедет.", options: ["слышал", "ослышался"], correct: "слышал", viet: "Tôi nghe nói cô ấy sắp đến.", why: "Dùng слышать (НСВ) để diễn đạt việc nhận được thông tin (nghe nói)." },
  { id: 2, sentence: "Я не ослышался? = Я не ...?", options: ["ослышался", "расслышал"], correct: "ослышался", viet: "Tôi không nghe nhầm chứ?", why: "ослышаться = nghe nhầm." },
  { id: 3, sentence: "Từ xa vang lại tiếng hát. = Издалека ... песня.", options: ["слышится", "послышалась"], correct: "слышится", viet: "Từ xa vang lại tiếng hát.", why: "слышаться = vang lên, nghe thấy từ đâu đó." },
  { id: 4, sentence: "Tôi ngỡ như nghe thấy tiếng động. = Мне ... шум.", options: ["послышался", "расслышал"], correct: "послышался", viet: "Tôi ngỡ như nghe thấy tiếng ồn.", why: "послышаться = thoáng nghe thấy, ngỡ như nghe thấy." },
  { id: 5, sentence: "Anh ấy đã nghe phong thanh về kế hoạch của bạn. = Он уже ... о твоих планах.", options: ["прослышал", "услышал"], correct: "прослышал", viet: "Anh ấy đã nghe phong thanh về kế hoạch của bạn.", why: "прослышать = nghe phong thanh, nghe đồn." },
  { id: 6, sentence: "Tôi không nghe rõ câu hỏi của bạn. = Я не ... ваш вопрос.", options: ["расслышал", "услышал"], correct: "расслышал", viet: "Tôi không nghe rõ câu hỏi của bạn.", why: "расслышать = nghe rõ, phân biệt rõ." },
  { id: 7, sentence: "Trong rừng có thể “cảm nhận” được nhiều mùi hương. = В лесу можно ... много запахов.", options: ["услышать", "слышать"], correct: "услышать", viet: "Trong rừng có thể “nghe” (cảm nhận) được nhiều mùi hương.", why: "услышать (khẩu ngữ) còn dùng để cảm nhận mùi vị." }
];

export const slyshatAnalysis40 = [
  { id: 1, sentence: "Послышалась музыка.", ans: "послышалась", viet: "Có tiếng nhạc vang lên (thoáng nghe thấy tiếng nhạc).", why: "послышаться = vang lên, vọng lại, ngỡ như nghe thấy." },
  { id: 2, sentence: "Что вы сказали? Я не расслышал.", ans: "расслышал", viet: "Bạn nói gì cơ? Tôi nghe không rõ.", why: "расслышать = nghe rõ, phân biệt được rõ âm thanh." },
  { id: 3, sentence: "Я уже прослышал о твоих подвигах.", ans: "прослышал", viet: "Tôi đã nghe phong thanh về những chiến công của bạn rồi.", why: "прослышать = nghe phong thanh, nghe đồn." },
  { id: 4, sentence: "Дедушка совсем плохо слышит.", ans: "слышит", viet: "Ông nội thính giác rất kém (nghe rất kém).", why: "слышать = có khả năng thính giác (nghe được)." },
  { id: 5, sentence: "Мы услышали колокольный звон.", ans: "услышали", viet: "Chúng tôi đã nghe thấy tiếng chuông nhà thờ.", why: "услышать = nghe thấy, nhận biết được bằng thính giác." },
  { id: 6, sentence: "Я не ослышался? Ты действительно собираешься совершить кругосветное путешествие?", ans: "ослышался", viet: "Tôi не nghe nhầm chứ? Bạn thực sự định đi du lịch vòng quanh thế giới à?", why: "ослышаться = nghe nhầm." },
  { id: 7, sentence: "Я слышал, что она скоро приедет.", ans: "слышал", viet: "Tôi nghe nói rằng cô ấy sắp đến.", why: "слышать = nghe nói, nhận được thông tin/tin tức." },
  { id: 8, sentence: "В лесу можно слышать много запахов.", ans: "слышать", viet: "Trong rừng có thể ngửi thấy (cảm nhận được) rất nhiều mùi hương.", why: "слышать (в разговорной речи) = cảm nhận được (mùi vị)." }
];

export const slyshatDialog41 = [
  { id: 1, prompt: "Кто стал хуже слышать — …", ans: "— Кто стал хуже слышать с возрастом? — Мой дедушка совсем плохо слышит.", viet: "— Ai đã trở nên nặng tai hơn khi có tuổi? — Ông tôi nghe hoàn toàn не rõ.", why: "слышать = nói về khả năng của thính giác." },
  { id: 2, prompt: "Ты просто ослышался — …", ans: "— Я слышал, что завтра экзамен отменили. — Нет, ты просто ослышался.", viet: "— Mình nghe nói ngày mai hủy thi rồi. — Không, bạn chỉ nghe nhầm thôi.", why: "ослышаться = nghe nhầm." },
  { id: 3, prompt: "Почему не расслышал — …", ans: "— Почему ты не расслышал моё имя? — Здесь было слишком шумно.", viet: "— Tại sao bạn не nghe rõ tên tôi? — Ở đây ồn ào quá.", why: "расслышать = nghe rõ, nghe chi tiết." },
  { id: 4, prompt: "Что слышится вдали — …", ans: "— Что это слышится вдали? — Вдали слышится шум приближающегося поезда.", viet: "— Có tiếng gì vang lên ở đằng xa vậy? — Xa xa vọng lại tiếng ồn của đoàn tàu đang đến gần.", why: "слышится = âm thanh vang lại, vọng đến." },
  { id: 5, prompt: "Кто-то что-то сказал или мне послышалось — …", ans: "— Кто-то что-то сказал или мне послышалось? — Тебе послышалось, тут никого нет.", viet: "— Có ai đó nói gì hay là tôi tưởng tượng ra? — Bạn nghe nhầm (tưởng tượng) đấy, ở đây không có ai cả.", why: "послышаться = cảm giác như nghe thấy." },
  { id: 6, prompt: "Откуда слышится песня — …", ans: "— Откуда слышится эта красивая песня? — Песня слышится из соседнего двора.", viet: "— Tiếng hát hay này vọng ra từ đâu thế? — Tiếng hát vọng ra từ sân bên cạnh.", why: "слышится откуда = vọng ra từ đâu." },
  { id: 7, prompt: "Какие запахи можно слышать в лесу — …", ans: "— Какие запахи можно слышать в лесу после дождя? — Можно слышать запах грибов и свежей листвы.", viet: "— Có thể ngửi (cảm nhận) thấy mùi gì trong rừng sau cơn mưa? — Có thể cảm nhận thấy mùi nấm và lá cây tươi.", why: "слышать запах = cảm nhận mùi hương." },
  { id: 8, prompt: "Почему он испугался? Он что-то услышал — …", ans: "— Почему он испугался в темноте? — Он услышал чьи-то шаги.", viet: "— Tại sao anh ấy lại sợ hãi trong bóng tối? — Anh ấy đã nghe thấy tiếng bước chân của ai đó.", why: "услышать = nghe thấy." },
  { id: 9, prompt: "О чём прослышал отец — …", ans: "— О чём прослышал твой отец? — Он прослышал о моих планах бросить университет.", viet: "— Bố bạn nghe phong thanh chuyện gì thế? — Bố tôi nghe phong thanh về kế hoạch bỏ học đại học của tôi.", why: "прослышать = nghe phong thanh, nghe đồn." },
  { id: 10, prompt: "Что он не расслышал — …", ans: "— Что он не расслышал на лекции? — Он не расслышал последнее слово преподавателя.", viet: "— Anh ấy не nghe rõ điều gì trong buổi học? — Anh ấy не nghe rõ từ cuối cùng của giảng viên.", why: "не расслышать = не thể nghe rõ chi tiết." }
];
