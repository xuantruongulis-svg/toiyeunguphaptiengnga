import React, { useState } from 'react';

// Exercise 62 - Interactive multiple choice
const ex62 = [
  {
    id: 1,
    sentence: 'Вам следует хорошо … к ответу.',
    options: ['подготовить', 'подготовиться'],
    correct: 'подготовиться',
    viet: 'Anh/chị nên chuẩn bị kỹ để trả lời.',
    why: 'подготовиться (phản thân) = chuẩn bị cho bản thân. подготовить đòi hỏi tân ngữ. Ở đây chủ thể tự chuẩn bị → cần dạng -ся.'
  },
  {
    id: 2,
    sentence: 'У нас вечером гости? Надо … что-нибудь вкусненькое!',
    options: ['заготовить', 'приготовить'],
    correct: 'приготовить',
    viet: 'Tối nay có khách à? Phải nấu gì ngon ngon đi!',
    why: 'приготовить = nấu món ăn cụ thể cho bữa tối hôm đó. заготовить = tích trữ trước để dành — sai ngữ cảnh.'
  },
  {
    id: 3,
    sentence: 'На этой фабрике … мягкие игрушки.',
    options: ['изготавливают', 'приготовляют'],
    correct: 'изготавливают',
    viet: 'Nhà máy này sản xuất đồ chơi bông mềm.',
    why: 'изготавливать = chế tạo, sản xuất hàng hóa. приготовлять không dùng với sản xuất công nghiệp.'
  },
  {
    id: 4,
    sentence: 'Как сообщить ему, что умер его дедушка? Надо его постепенно к этому …',
    options: ['наготовить', 'подготовить'],
    correct: 'подготовить',
    viet: 'Làm sao báo tin ông nội mất? Phải chuẩn bị tâm lý cho anh ấy dần dần.',
    why: 'подготовить (кого-то к чему-то) = chuẩn bị tâm lý. наготовить = nấu/chuẩn bị số lượng lớn — sai ngữ cảnh.'
  },
  {
    id: 5,
    sentence: 'В стране … революция.',
    options: ['готовилась', 'заготавливалась'],
    correct: 'готовилась',
    viet: 'Trong nước đang chuẩn bị một cuộc cách mạng.',
    why: 'готовиться = sắp xảy ra, đang được thai nghén (sự kiện lớn). заготавливаться không dùng với nghĩa này.'
  },
  {
    id: 6,
    sentence: 'В стране на зиму было … более 1000 млн. т зерна.',
    options: ['заготовлено', 'приготовлено'],
    correct: 'заготовлено',
    viet: 'Trong cả nước đã dự trữ hơn 1 tỷ tấn ngũ cốc cho mùa đông.',
    why: 'заготовить = tích trữ, thu mua dự phòng. приготовить зерно = nấu/chế biến ngũ cốc — sai nghĩa.'
  },
  {
    id: 7,
    sentence: 'Спасибо! Всё было вкусно. Но зачем вы столько … !',
    options: ['наготовили', 'подготовили'],
    correct: 'наготовили',
    viet: 'Cảm ơn! Tất cả đều ngon. Nhưng sao nấu nhiều thế!',
    why: 'наготовить = nấu/chuẩn bị số lượng lớn. подготовить = chuẩn bị công việc/tài liệu — không dùng khi nói nấu ăn.'
  },
  {
    id: 8,
    sentence: 'Мы … вам подарок!',
    options: ['заготовили', 'приготовили'],
    correct: 'приготовили',
    viet: 'Chúng tôi đã chuẩn bị một món quà cho anh/chị!',
    why: 'приготовить подарок = chuẩn bị quà (kết hợp chuẩn). заготовить подарок = "tích trữ quà" — không tự nhiên.'
  },
];

// Exercise 61 - Read & analyze
const ex61 = [
  { id: 1, sentence: 'В деревне летом заготавливают сено на зиму.', ans: 'заготавливают (НСВ)', viet: 'Ở làng, mùa hè người ta tích trữ cỏ khô cho mùa đông.', why: 'НСВ заготавливать = chuẩn bị trước để dự trữ. НСВ vì hoạt động thường xuyên hàng năm.' },
  { id: 2, sentence: 'Что изготавливают на этой фабрике?', ans: 'изготавливают (НСВ)', viet: 'Nhà máy này sản xuất cái gì?', why: 'НСВ изготавливать = chế tạo, sản xuất hàng loạt. НСВ vì hỏi về hoạt động sản xuất liên tục.' },
  { id: 3, sentence: 'Что тебе приготовить на ужин?', ans: 'приготовить (СВ)', viet: 'Anh nấu gì cho em ăn tối?', why: 'СВ приготовить = nấu món cụ thể. СВ vì nói đến kết quả cụ thể. Động từ vạn năng nhất trong nhóm.' },
  { id: 4, sentence: 'Он приготовил мне сюрприз.', ans: 'приготовил (СВ, прош.)', viet: 'Anh ấy đã chuẩn bị một bất ngờ cho tôi.', why: 'СВ приготовить — hành động đã hoàn thành, kết quả rõ ràng. Mang nghĩa chuẩn bị (không phải nấu ăn).' },
  { id: 5, sentence: 'Иди готовь уроки!', ans: 'готовь (НСВ, повел.)', viet: 'Đi học bài đi!', why: 'НСВ готовить уроки = làm bài tập về nhà (quá trình). НСВ mệnh lệnh = yêu cầu bắt đầu và tiến hành quá trình.' },
  { id: 6, sentence: 'Надо как следует подготовиться к экзамену.', ans: 'подготовиться (СВ)', viet: 'Cần phải chuẩn bị kỹ lưỡng cho kỳ thi.', why: 'СВ подготовиться = chuẩn bị xong, đạt trạng thái sẵn sàng. подготовиться к экзамену là kết hợp chuẩn.' },
  { id: 7, sentence: 'Господин Иванов, подготовьте, пожалуйста, все необходимые документы!', ans: 'подготовьте (СВ, повел.)', viet: 'Thưa ông Ivanov, xin ông chuẩn bị tất cả giấy tờ cần thiết!', why: 'СВ подготовить — mệnh lệnh СВ = yêu cầu hoàn thành. Prefix под- phù hợp văn phong trang trọng, công vụ.' },
  { id: 8, sentence: 'Мама сготовила борщ.', ans: 'сготовила (СВ, прош.)', viet: 'Mẹ đã nấu xong món borscht.', why: 'СВ сготовить = nấu xong. Nhấn mạnh kết quả. Приготовила борщ cũng đúng nhưng сготовила nhấn mạnh rõ hơn việc nấu xong.' },
  { id: 9, sentence: 'Зачем вы столько наготовили?', ans: 'наготовили (СВ, прош.)', viet: 'Sao các anh/chị nấu nhiều thế?', why: 'СВ наготовить = nấu/chuẩn bị số lượng lớn. Prefix на- mang nghĩa "quá nhiều, tích lũy số lượng lớn".' },
  { id: 10, sentence: 'Мы так много не съедим! На вас не наготовишься!', ans: 'наготовишься (СВ, разг.)', viet: 'Chúng tôi ăn không hết! Nấu cho các anh/chị mãi không bao giờ đủ!', why: 'СВ наготовиться (разг.) — dạng phủ định не наготовишься = không bao giờ nấu đủ. Diễn đạt sự phàn nàn hài hước.' },
  { id: 11, sentence: 'В стране готовятся важные события.', ans: 'готовятся (НСВ, только 3 лицо)', viet: 'Trong nước đang chuẩn bị diễn ra những sự kiện quan trọng.', why: 'НСВ готовиться (безличный) = sắp xảy ra. Chỉ dùng ngôi 3.' },
  { id: 12, sentence: 'Судьба уготовила ему печальную участь.', ans: 'уготовила (СВ, устар.)', viet: 'Số phận đã dành cho anh ta một kết cục buồn thảm.', why: 'СВ уготовить (устар.) = cũ/văn chương, mang sắc thái định mệnh, số phận.' },
];

// Exercise 63 - Substitution analysis
const ex63 = [
  { id: 1, sentence: 'Бабушка приготовила уху. (сготовила, заготовила)', ans: '✔ приготовила | ✔ сготовила | ✗ заготовила', viet: 'Bà đã nấu súp cá.', why: 'сготовила ✔ — đồng nghĩa, nhấn mạnh "nấu xong". заготовила ✗ — nghĩa "tích trữ", sai hoàn toàn.' },
  { id: 2, sentence: 'Он подготовился к экзамену. (подготовил, приготовился)', ans: '✔ подготовился | ✔ приготовился', viet: 'Anh ấy đã chuẩn bị cho kỳ thi.', why: 'Cả hai đều dùng được. подготовиться = chuẩn bị nội dung. приготовиться = chuẩn bị tâm thế. подготовил ✗ — không phản thân, đòi tân ngữ.' },
  { id: 3, sentence: 'Мальчик приготовился к наказанию. (подготовился)', ans: '✔ подготовился', viet: 'Cậu bé đã chuẩn bị tâm lý để chịu phạt.', why: 'подготовился ✔ — có thể dùng. Tuy nhiên приготовиться phổ biến hơn ở đây vì mang sắc thái "sẵn sàng chịu đựng".' },
  { id: 4, sentence: 'Фермер заготовил сено на зиму. (наготовил, подготовил)', ans: '✔ заготовил | ✔ наготовил | ✗ подготовил', viet: 'Người nông dân đã tích trữ cỏ khô cho mùa đông.', why: 'наготовил ✔ — nhấn mạnh số lượng nhiều. подготовил ✗ — không dùng với "сено на зиму".' },
  { id: 5, sentence: 'Крестьянин подготовился к зиме. (наготовился)', ans: '✔ подготовился | ✗ наготовился', viet: 'Người nông dân đã chuẩn bị cho mùa đông.', why: 'наготовиться ✗ — chỉ dùng phủ định kiểu не наготовишься (разг.).' },
  { id: 6, sentence: 'На фабрике изготовили 100 тыс. кукол. (наготовили, приготовили, заготовили)', ans: '✔ изготовили | ✔ наготовили | ✗ приготовили | ✗ заготовили', viet: 'Nhà máy đã sản xuất 100 nghìn con búp bê.', why: 'наготовили ✔ — nhấn mạnh số lượng lớn. приготовили ✗ — không dùng cho sản xuất công nghiệp.' },
  { id: 7, sentence: 'Зачем ты так много наготовила? (приготовила, подготовила)', ans: '✔ наготовила | ✔ приготовила | ✗ подготовила', viet: 'Sao em nấu nhiều thế?', why: 'приготовила ✔ — đúng nhưng không nhấn mạnh số lượng. подготовила ✗ — không dùng khi nói nấu ăn.' },
  { id: 8, sentence: 'Приготовьте для него все необходимые документы! (подготовьте)', ans: '✔ приготовьте | ✔ подготовьте', viet: 'Hãy chuẩn bị tất cả giấy tờ cần thiết cho ông ấy!', why: 'Cả hai đều đúng. подготовьте mang sắc thái trang trọng, công vụ hơn. приготовьте tự nhiên hơn trong văn nói.' },
];

// Exercise 64 - Dialogue composition
const ex64 = [
  { id: 1, prompt: 'Надо сготовить что-нибудь — …', ans: '— Надо сготовить что-нибудь на ужин. — Хорошо, я приготовлю пасту.', viet: '— Phải nấu gì đó cho bữa tối. — Được rồi, tôi sẽ nấu mì ống.', why: 'сготовить = nấu xong (СВ). Câu trả lời dùng приготовлю — СВ vạn năng nhất.' },
  { id: 2, prompt: 'Надо подготовить проект закона — …', ans: '— Кто должен подготовить проект закона? — Это поручено нашему отделу.', viet: '— Ai phải chuẩn bị dự thảo luật? — Việc đó được giao cho bộ phận chúng tôi.', why: 'подготовить проект = kết hợp chuẩn trong văn phong công vụ.' },
  { id: 3, prompt: 'Надо подготовиться к выступлению — …', ans: '— Тебе нужно подготовиться к выступлению. — Знаю, я уже начал готовиться.', viet: '— Anh cần chuẩn bị cho bài phát biểu. — Biết rồi, tôi đã bắt đầu chuẩn bị.', why: 'подготовиться к выступлению = kết hợp chuẩn. Câu đáp dùng НСВ готовиться — đang trong quá trình.' },
  { id: 4, prompt: 'Зачем наготовили на три дня вперёд — …', ans: '— Зачем вы наготовили еды на три дня вперёд? — У нас будут гости всю неделю!', viet: '— Sao nấu đồ ăn dự trữ cho ba ngày? — Cả tuần này chúng tôi có khách!', why: 'наготовить на три дня вперёд = nấu số lượng lớn dự phòng nhiều ngày.' },
  { id: 5, prompt: 'Кто должен заготовить корм для скота — …', ans: '— Кто должен заготовить корм для скота на зиму? — Об этом должен позаботиться фермер.', viet: '— Ai phải tích trữ thức ăn cho gia súc? — Điều đó là trách nhiệm của người nông dân.', why: 'заготовить корм = tích trữ thức ăn dự phòng. Kết hợp chuẩn nông nghiệp.' },
  { id: 6, prompt: 'К чему надо его подготовить — …', ans: '— К чему надо его подготовить? — Его нужно подготовить к плохим новостям.', viet: '— Cần chuẩn bị tâm lý cho anh ấy về điều gì? — Cần chuẩn bị cho anh ấy đón nhận tin xấu.', why: 'подготовить (кого-то) к (чему-то) = chuẩn bị tâm lý, thông báo trước. Nghĩa 3 của подготовить.' },
  { id: 7, prompt: 'Что готовится в стране — …', ans: '— Что готовится в стране? — Говорят, готовятся большие реформы.', viet: '— Điều gì đang được chuẩn bị trong nước? — Nghe nói những cuộc cải cách lớn đang được thai nghén.', why: 'готовиться (vô nhân xưng/ngôi 3) = sắp xảy ra. Chỉ dùng ngôi 3 với nghĩa này.' },
  { id: 8, prompt: 'Что изготавливают на этой фабрике — …', ans: '— Что изготавливают на этой фабрике? — Здесь изготавливают электронные компоненты.', viet: '— Nhà máy này sản xuất gì? — Ở đây sản xuất linh kiện điện tử.', why: 'изготавливать (НСВ) = sản xuất liên tục. НСВ vì hoạt động sản xuất thường nhật.' },
];

function QuizQuestion({ q, index }) {
  const [selected, setSelected] = useState(null);
  const isCorrect = selected === q.correct;
  const answered = selected !== null;

  return (
    <div className={`quiz-item ${answered ? (isCorrect ? 'correct' : 'wrong') : ''}`}>
      <div className="quiz-q">
        <span className="quiz-num">{index + 1}</span>
        <span dangerouslySetInnerHTML={{ __html: q.sentence.replace('…', '<span class="quiz-blank">___</span>') }} />
      </div>
      <div className="quiz-options">
        {q.options.map(opt => (
          <button
            key={opt}
            className={`quiz-opt ${selected === opt ? (opt === q.correct ? 'opt-correct' : 'opt-wrong') : ''} ${answered && opt === q.correct ? 'opt-correct' : ''}`}
            onClick={() => !answered && setSelected(opt)}
            disabled={answered}
          >
            {opt}
          </button>
        ))}
      </div>
      {answered && (
        <div className={`quiz-result ${isCorrect ? 'res-correct' : 'res-wrong'}`}>
          <div className="res-header">{isCorrect ? '✅ Chính xác!' : `❌ Sai! Đáp án đúng: ${q.correct}`}</div>
          <div className="res-viet">{q.viet}</div>
          <div className="res-why">{q.why}</div>
        </div>
      )}
    </div>
  );
}

function AnalysisItem({ item, index }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="analysis-item">
      <div className="analysis-q">
        <span className="quiz-num">{index + 1}</span>
        <span dangerouslySetInnerHTML={{ __html: item.sentence || item.prompt }} />
      </div>
      {!revealed ? (
        <button className="reveal-btn" onClick={() => setRevealed(true)}>Xem đáp án</button>
      ) : (
        <div className="analysis-answer">
          <div className="res-header">✔ {item.ans}</div>
          <div className="res-viet">{item.viet}</div>
          <div className="res-why">{item.why}</div>
        </div>
      )}
    </div>
  );
}

export default function Exercise() {
  const [tab, setTab] = useState('ex62');

  return (
    <div className="exercise-wrapper">
      <div className="exercise-tabs">
        <button className={`ex-tab ${tab === 'ex61' ? 'active' : ''}`} onClick={() => setTab('ex61')}>
          📖 Bài 61 — Phân tích
        </button>
        <button className={`ex-tab ${tab === 'ex62' ? 'active' : ''}`} onClick={() => setTab('ex62')}>
          🎯 Bài 62 — Trắc nghiệm
        </button>
        <button className={`ex-tab ${tab === 'ex63' ? 'active' : ''}`} onClick={() => setTab('ex63')}>
          🔄 Bài 63 — Thay thế
        </button>
        <button className={`ex-tab ${tab === 'ex64' ? 'active' : ''}`} onClick={() => setTab('ex64')}>
          💬 Bài 64 — Hội thoại
        </button>
      </div>

      {tab === 'ex62' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 62 — Chọn dạng đúng</h3>
            <p>Mỗi câu chọn 1 trong 2 phương án được cho.</p>
          </div>
          {ex62.map((q, i) => <QuizQuestion key={q.id} q={q} index={i} />)}
        </div>
      )}

      {tab === 'ex61' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 61 — Đọc và phân tích</h3>
            <p>Xác định động từ nào được dùng, tại sao, và dịch nghĩa.</p>
          </div>
          {ex61.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}

      {tab === 'ex63' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 63 — Có thể thay thế không?</h3>
            <p>Phân tích khả năng hoán đổi giữa các biến thể.</p>
          </div>
          {ex63.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}

      {tab === 'ex64' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 64 — Soạn hội thoại</h3>
            <p>Mẫu câu trả lời tự nhiên, hoàn chỉnh, có dịch tiếng Việt.</p>
          </div>
          {ex64.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
    </div>
  );
}
