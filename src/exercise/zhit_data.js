// Exercise 65 - Read & analyze
export const ex65 = [
  { id:1, sentence:'Где ты живёшь?', ans:'Я живу в Ханое.', viet:'Bạn sống ở đâu? — Tôi sống ở Hà Nội.', why:'Dùng жить, vì đây là động từ cơ bản chỉ sống / ở ở một nơi.' },
  { id:2, sentence:'По какому адресу вы проживаете?', ans:'Я проживаю по адресу: улица Ленина, дом 10, квартира 5.', viet:'Ông/bà đang cư trú theo địa chỉ nào? — Tôi cư trú tại phố Lênin, nhà số 10, căn hộ 5.', why:'Dùng проживать vì đây là cách nói trang trọng / hành chính, thường đi với по адресу.' },
  { id:3, sentence:'Этот человек прожил долгую интересную жизнь.', ans:'прожил', viet:'Người này đã sống một cuộc đời dài và thú vị.', why:'прожить nhấn mạnh sống trọn một quãng đời / hết một khoảng thời gian.' },
  { id:4, sentence:'Мы прожили два месяца на даче.', ans:'прожили', viet:'Chúng tôi đã sống hai tháng ở nhà nghỉ ngoại ô.', why:'прожить dùng với khoảng thời gian cụ thể: два месяца.' },
  { id:5, sentence:'Наконец-то мы заживём хорошо!', ans:'заживём', viet:'Cuối cùng thì chúng ta sẽ bắt đầu sống tốt hơn!', why:'зажить nghĩa là bắt đầu sống theo cách nào đó, ở đây là хорошо.' },
  { id:6, sentence:'Трудно жить на пенсию.', ans:'жить', viet:'Thật khó để sống bằng lương hưu.', why:'жить на что = sống bằng nguồn thu nhập nào.' },
  { id:7, sentence:'Хочу пожить в деревне.', ans:'Я хочу пожить в деревне летом.', viet:'Tôi muốn sống một thời gian ở nông thôn vào mùa hè.', why:'пожить nghĩa là sống một thời gian ngắn.' },
  { id:8, sentence:'Как тебе живётся на новом месте?', ans:'Мне на новом месте живётся хорошо.', viet:'Bạn sống ở chỗ mới thế nào? — Tôi sống ở chỗ mới khá tốt.', why:'живётся là dạng vô nhân xưng, hỏi cảm giác sống ở đâu đó ra sao.' },
  { id:9, sentence:'Он дожил до ста двадцати лет.', ans:'дожил', viet:'Ông ấy đã sống đến 120 tuổi.', why:'дожить до = sống tới mốc nào đó.' },
  { id:10, sentence:'Этот старик пережил своих детей.', ans:'пережил', viet:'Ông lão này sống lâu hơn cả các con mình.', why:'пережить кого ở đây nghĩa là sống lâu hơn ai.' },
  { id:11, sentence:'Старик говорит, что он зажился на свете.', ans:'зажился', viet:'Ông lão nói rằng mình đã sống quá lâu trên đời rồi.', why:'зажиться nghĩa là sống lâu hơn bình thường / quá lâu.' },
  { id:12, sentence:'Это такой кошмар, я этого не переживу!', ans:'переживу', viet:'Đây là cơn ác mộng, tôi không chịu đựng nổi đâu!', why:'пережить что còn có nghĩa là chịu đựng / vượt qua một điều gì đó.' },
  { id:13, sentence:'Он живёт с любовницей.', ans:'живёт', viet:'Anh ta sống chung với tình nhân.', why:'жить с кем trong văn nói có thể mang nghĩa có quan hệ sống chung như tình nhân.' },
  { id:14, sentence:'Не стоит из-за этого так переживать!', ans:'переживать', viet:'Không nên lo lắng vì chuyện đó đến thế!', why:'переживать ở đây là nghĩa bóng: lo lắng, bồn chồn.' },
  { id:15, sentence:'Рана быстро зажила.', ans:'зажила', viet:'Vết thương đã lành nhanh.', why:'зажить với vết thương nghĩa là liền da, lành lại.' },
  { id:16, sentence:'У него такой ужасный характер, трудно с ним ужиться!', ans:'ужиться', viet:'Tính anh ta khủng khiếp, thật khó sống hòa hợp với anh ta!', why:'ужиться с кем = sống hòa thuận / chung sống được với ai.' },
];

// Exercise 66 - Read & analyze (continued)
export const ex66 = [
  { id:1, sentence:'В таких трудных условиях человеку непросто выжить.', ans:'выжить', viet:'Trong điều kiện khó khăn như thế, con người khó mà sống sót.', why:'выжить = sống sót.' },
  { id:2, sentence:'Жизнь прожить — не поле перейти.', ans:'прожить', viet:'Sống cả một đời không đơn giản như đi qua một cánh đồng.', why:'прожить жизнь = sống hết một đời; đây là câu tục ngữ.' },
  { id:3, sentence:'Весной вся природа оживает.', ans:'оживает', viet:'Vào mùa xuân, cả thiên nhiên như hồi sinh.', why:'оживать = sống lại / trở nên đầy sức sống.' },
  { id:4, sentence:'Своим трудом он нажил значительное состояние.', ans:'нажил', viet:'Bằng lao động, anh ấy đã gây dựng được tài sản lớn.', why:'нажить = tích lũy, gây dựng được.' },
  { id:5, sentence:'Не спорь с начальством — наживёшь себе неприятностей!', ans:'наживёшь', viet:'Đừng cãi cấp trên, sẽ chuốc rắc rối vào thân!', why:'нажить себе что thường dùng với nghĩa chuốc lấy điều xấu.' },
  { id:6, sentence:'Мы уже переселились на новую квартиру, теперь будем её обживать.', ans:'обживать', viet:'Chúng tôi đã chuyển sang căn hộ mới, giờ sẽ dần làm cho nó quen thuộc.', why:'обживать = biến nơi ở mới thành chỗ ở tiện nghi.' },
  { id:7, sentence:'Надо обжиться на новом месте.', ans:'обжиться', viet:'Cần phải làm quen và ổn định ở nơi mới.', why:'обжиться = quen dần, ổn định dần ở nơi ở mới.' },
  { id:8, sentence:'Мы посадили яблоню, и она уже прижилась, скоро даже зацветёт.', ans:'прижилась', viet:'Chúng tôi trồng cây táo, và nó đã bén rễ rồi, sắp nở hoa.', why:'прижиться = bén rễ, thích nghi tốt với điều kiện mới.' },
  { id:9, sentence:'Эта турфирма наживается на своих клиентах.', ans:'наживается', viet:'Công ty du lịch này làm giàu trên lưng khách hàng.', why:'наживаться на ком-чём = trục lợi, làm giàu nhờ ai/cái gì.' },
  { id:10, sentence:'Родственники выжили старика из дому.', ans:'выжили', viet:'Người thân đã đẩy ông lão ra khỏi nhà.', why:'выжить кого откуда nghĩa bóng: ép ai phải rời đi.' },
  { id:11, sentence:'Надо изживать недостатки!', ans:'изживать', viet:'Cần phải loại bỏ những khuyết điểm!', why:'изживать = xóa bỏ, khắc phục dần cái xấu.' },
  { id:12, sentence:'Где бы разжиться табачком?', ans:'разжиться', viet:'Biết kiếm ít thuốc lá ở đâu đây?', why:'разжиться là khẩu ngữ, nghĩa là kiếm được / xoay được cái gì đó.' },
  { id:13, sentence:'В командировке он прожился в пух и прах.', ans:'прожился', viet:'Trong chuyến công tác, anh ta tiêu sạch nhẵn tiền bạc.', why:'прожиться = tiêu hết tiền, trắng tay.' },
  { id:14, sentence:'Она прижила ребёночка.', ans:'прижила', viet:'Cô ấy đã sinh một đứa con trong quan hệ sống chung.', why:'прижить ребёнка là từ khẩu ngữ / bình dân, nghĩa là sinh con không chính thức.' },
  { id:15, sentence:'Он уже сжился со своим горем.', ans:'сжился', viet:'Anh ấy đã dần quen với nỗi đau của mình rồi.', why:'сжиться с чем = quen dần, chấp nhận dần điều gì.' },
  { id:16, sentence:'Актёр буквально вжился в роль.', ans:'вжился', viet:'Người diễn viên thực sự nhập vai hoàn toàn.', why:'вжиться в роль = hóa thân / nhập hẳn vào vai diễn.' },
];

// Exercise 67 - Substitution analysis
export const ex67 = [
  { id:1, sentence:'Он жил в деревне два месяца. (пожил, прожил, дожил)', ans:'Можно: прожил ✔', viet:'Anh ấy sống ở làng hai tháng. → Он прожил в деревне два месяца.', why:'прожил phù hợp vì có mốc thời gian cụ thể. пожил nhấn mạnh "ngắn", дожил không phù hợp.' },
  { id:2, sentence:'С ним трудно жить. (ужиться, пережить)', ans:'Можно: ужиться ✔', viet:'Rất khó sống với anh ta. → С ним трудно ужиться.', why:'ужиться làm nghĩa cụ thể hơn: khó hòa hợp. пережить không phù hợp.' },
  { id:3, sentence:'Она не смогла пережить своё горе и вскоре умерла. (прожить, выжить)', ans:'Замена невозможна ✗', viet:'Cô ấy không thể vượt qua nỗi đau và chẳng bao lâu sau qua đời.', why:'пережить горе = chịu đựng nỗi đau. прожить và выжить không truyền đúng nghĩa này.' },
  { id:4, sentence:'Мы обживаем новую квартиру. (обживаемся, приживаемся)', ans:'Можно: обживаемся ✔ (đổi cấu trúc)', viet:'Chúng tôi đang ổn định trong căn hộ mới. → Мы обживаемся в новой квартире.', why:'обживать tác động lên căn hộ; обживаться nhấn vào con người làm quen. приживаться không hợp.' },
  { id:5, sentence:'Скоро он будет жить богато. (заживёт, наживёт)', ans:'Можно: заживёт ✔', viet:'Chẳng bao lâu nữa anh ấy sẽ sống sung túc. → Скоро он заживёт богато.', why:'заживёт nhấn mạnh bắt đầu sống như vậy. наживёт = "kiếm được", không đi với богато.' },
  { id:6, sentence:'Этот человек нажил целое состояние на торговле табаком. (разжился, нажился)', ans:'Оба варианта возможны ✔', viet:'Người này gây dựng gia tài nhờ buôn thuốc lá.', why:'разжился = kiếm được; нажился = làm giàu, thường có sắc thái không thiện cảm.' },
  { id:7, sentence:'...врачи боялись, что больной не выживет. (не будет жить, не переживёт, не доживёт)', ans:'Ближе всего: не переживёт (đổi cấu trúc)', viet:'Sau ca mổ, bác sĩ sợ bệnh nhân sẽ không sống sót.', why:'не выживет là cách tự nhiên nhất. не переживёт phải có bổ ngữ. не доживёт cần mốc до...' },
  { id:8, sentence:'...дерево погибло, а оно выжило. (прижилось, ожило)', ans:'Оба варианта возможны ✔', viet:'Tưởng cây chết, nhưng nó lại bén rễ / hồi lại.', why:'прижилось = thích nghi, bén rễ; ожило = hồi sinh, sống lại.' },
  { id:9, sentence:'Он дожил до ста лет. (прожил)', ans:'Можно: прожил сто лет ✔', viet:'Ông ấy sống tới 100 tuổi. / Ông ấy sống được 100 năm.', why:'дожил до nhấn vào mốc đạt tới; прожил nhấn vào toàn bộ khoảng thời gian.' },
  { id:10, sentence:'Жизнь пережить — не поле перейти. (прожить)', ans:'Можно và tự nhiên hơn: прожить ✔', viet:'Sống cả đời đâu có đơn giản như đi qua cánh đồng.', why:'Với tục ngữ này, прожить жизнь tự nhiên hơn. пережить жизнь không chuẩn.' },
];

// Exercise 68 - Interactive multiple choice
export const ex68 = [
  { id:1, sentence:'В своей жизни он много … .', options:['выжил','пережил'], correct:'пережил', viet:'Trong đời mình, ông ấy đã trải qua rất nhiều chuyện.', why:'пережить = trải qua, chịu đựng. выжил = sống sót, không hợp.' },
  { id:2, sentence:'В этих условиях невозможно … .', options:['выжить','пережить'], correct:'выжить', viet:'Trong điều kiện này không thể sống sót.', why:'выжить đúng nghĩa sống sót.' },
  { id:3, sentence:'Это обычай уже … .', options:['изжил','отжил'], correct:'отжил', viet:'Tập tục này đã lỗi thời rồi.', why:'отжить dùng cho phong tục đã hết thời. изжил không đi như vậy.' },
  { id:4, sentence:'Он … много врагов.', options:['нажил','нажился'], correct:'нажил', viet:'Anh ta đã chuốc lấy nhiều kẻ thù.', why:'нажить врагов là kết hợp cố định. нажиться = làm giàu.' },
  { id:5, sentence:'Надо … предрассудки.', options:['выживать','изживать'], correct:'изживать', viet:'Cần loại bỏ dần những thành kiến.', why:'изживать = xóa bỏ dần cái xấu.' },
  { id:6, sentence:'Рана … медленно.', options:['заживает','обживает'], correct:'заживает', viet:'Vết thương lành chậm.', why:'Chỉ заживать mới dùng cho vết thương.' },
  { id:7, sentence:'Этот человек эгоист, с ним никто не … .', options:['приживается','уживается'], correct:'уживается', viet:'Người này ích kỷ, không ai sống hòa hợp với anh ta.', why:'уживаться с кем = sống hòa thuận với ai.' },
  { id:8, sentence:'Мы … на новом месте.', options:['обживаемся','сживаемся'], correct:'обживаемся', viet:'Chúng tôi đang dần ổn định ở nơi mới.', why:'обживаться = làm quen nơi ở mới. сживаться = quen với nỗi đau.' },
  { id:9, sentence:'...но она вдруг … , расправила крылья и улетела.', options:['ожила','обжила'], correct:'ожила', viet:'...nhưng đột nhiên nó sống lại, dang cánh ra và bay đi.', why:'ожить = sống lại. обжить không có nghĩa này.' },
  { id:10, sentence:'Генерал тяжело … свою отставку.', options:['изжил','пережил'], correct:'пережил', viet:'Vị tướng đã rất khó khăn chịu đựng việc bị nghỉ hưu.', why:'пережить что = chịu đựng, vượt qua.' },
  { id:11, sentence:'В дикой природе … сильнейший.', options:['выживает','заживает'], correct:'выживает', viet:'Trong thiên nhiên hoang dã, kẻ mạnh nhất sẽ sống sót.', why:'выживает = sống sót.' },
  { id:12, sentence:'Хочу … до ста лет!', options:['дожить','пережить'], correct:'дожить', viet:'Tôi muốn sống tới 100 tuổi!', why:'дожить до = sống tới mốc nào đó.' },
];

// Exercise 69 - Dialogue composition
export const ex69 = [
  { id:1, prompt:'Кто дожил до ста лет?', ans:'Моя прабабушка дожила до ста лет.', viet:'Ai đã sống tới 100 tuổi? — Cụ cố của tôi đã sống tới 100 tuổi.', why:'дожить до dùng với độ tuổi / mốc thời gian.' },
  { id:2, prompt:'Кому сколько лет жить накуковала кукушка?', ans:'В детстве мы верили, что кукушка накуковала дедушке долгую жизнь.', viet:'Chim cu gáy báo cho ai sẽ sống bao nhiêu năm?', why:'Câu mang tính văn hoá dân gian.' },
  { id:3, prompt:'Когда мы заживём счастливо?', ans:'Мы заживём счастливо, когда решим все свои проблемы.', viet:'Khi nào chúng ta sẽ sống hạnh phúc? — Khi giải quyết xong mọi vấn đề.', why:'заживём = bắt đầu sống theo cách nào đó.' },
  { id:4, prompt:'Почему порез или ожог долго не заживает?', ans:'Порез или ожог долго не заживает, если за раной плохо ухаживать.', viet:'Vì sao vết cắt hay vết bỏng lâu không lành?', why:'заживать dùng riêng cho vết thương.' },
  { id:5, prompt:'Что трудно пережить?', ans:'Трудно пережить смерть близкого человека.', viet:'Điều gì khó vượt qua? — Khó vượt qua cái chết của người thân.', why:'пережить = vượt qua cú sốc tinh thần.' },
  { id:6, prompt:'С кем трудно ужиться?', ans:'Трудно ужиться с человеком, который думает только о себе.', viet:'Khó sống hòa hợp với ai? — Với người chỉ nghĩ cho bản thân.', why:'ужиться с кем là kết hợp cố định.' },
  { id:7, prompt:'По какому адресу вы проживаете?', ans:'Я проживаю по адресу: улица Чан Фу, дом 25.', viet:'Ông/bà cư trú theo địa chỉ nào? — Số 25 phố Trần Phú.', why:'проживать mang sắc thái hành chính.' },
  { id:8, prompt:'Когда можно нажить неприятности?', ans:'Неприятности можно нажить, если постоянно спорить с начальством.', viet:'Khi nào có thể chuốc rắc rối? — Nếu постоянно cãi cấp trên.', why:'нажить неприятности là cụm rất thông dụng.' },
  { id:9, prompt:'В каких условиях трудно выжить?', ans:'Трудно выжить в условиях войны, голода и холода.', viet:'Trong điều kiện nào thì khó sống sót? — Chiến tranh, đói khát, lạnh giá.', why:'выжить = sống sót trong điều kiện khắc nghiệt.' },
  { id:10, prompt:'Какой обычай уже отжил своё?', ans:'Обычай решать всё только по возрасту уже отжил своё.', viet:'Phong tục nào đã lỗi thời? — Tục quyết định theo tuổi tác.', why:'отжить своё = hết thời, không còn phù hợp.' },
  { id:11, prompt:'Как кому здесь живётся?', ans:'Мне здесь живётся спокойно и удобно.', viet:'Ở đây sống thế nào? — Yên ổn và thuận tiện.', why:'живётся là dạng vô nhân xưng.' },
  { id:12, prompt:'Сколько лет прожил А.С. Пушкин?', ans:'А.С. Пушкин прожил тридцать семь лет.', viet:'Pushkin sống bao nhiêu năm? — 37 năm.', why:'прожить dùng với toàn bộ số năm đã sống.' },
];
