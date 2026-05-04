import React, { useState } from 'react';
import { pisatEx1, pisatEx2, pisatEx3, pisatEx4, pisatEx5, pisatEx6 } from './pisat_data.js';

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
          <button key={opt}
            className={`quiz-opt ${selected === opt ? (opt === q.correct ? 'opt-correct' : 'opt-wrong') : ''} ${answered && opt === q.correct ? 'opt-correct' : ''}`}
            onClick={() => !answered && setSelected(opt)} disabled={answered}>
            {opt}
          </button>
        ))}
      </div>
      {answered && (
        <div className={`quiz-result ${isCorrect ? 'res-correct' : 'res-wrong'}`}>
          <div className="res-header">{isCorrect ? '✅ Chính xác!' : `❌ Sai! Đáp án: ${q.correct}`}</div>
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
        <span>{item.sentence || item.prompt}</span>
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

function ZamenaItem({ item, index }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="analysis-item">
      <div className="analysis-q">
        <span className="quiz-num">{index + 1}</span>
        <span>{item.orig}</span>
        <div style={{marginTop: '0.5rem', color: 'var(--ink-light)', fontSize: '0.9rem'}}>
          Thay bằng: <strong>{item.repl}</strong>
        </div>
      </div>
      {!revealed ? (
        <button className="reveal-btn" onClick={() => setRevealed(true)}>Xem phân tích</button>
      ) : (
        <div className="analysis-answer">
          <div className="res-viet">{item.viet}</div>
          <div className="res-why">{item.ans}</div>
        </div>
      )}
    </div>
  );
}

export default function PisatExercise() {
  const [tab, setTab] = useState('p1');
  return (
    <div className="exercise-wrapper">
      <div className="exercise-tabs" style={{flexWrap: 'wrap'}}>
        <button className={`ex-tab ${tab === 'p1' ? 'active' : ''}`} onClick={() => setTab('p1')}>📖 Bài 1</button>
        <button className={`ex-tab ${tab === 'p2' ? 'active' : ''}`} onClick={() => setTab('p2')}>🔄 Bài 2</button>
        <button className={`ex-tab ${tab === 'p3' ? 'active' : ''}`} onClick={() => setTab('p3')}>🎯 Bài 3</button>
        <button className={`ex-tab ${tab === 'p4' ? 'active' : ''}`} onClick={() => setTab('p4')}>🎯 Bài 4</button>
        <button className={`ex-tab ${tab === 'p5' ? 'active' : ''}`} onClick={() => setTab('p5')}>💬 Bài 5</button>
        <button className={`ex-tab ${tab === 'p6' ? 'active' : ''}`} onClick={() => setTab('p6')}>📖 Bài 6</button>
      </div>

      {tab === 'p1' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 1 — Đọc hiểu</h3>
            <p>Đọc các câu sau. Quan sát cách sử dụng các động từ phái sinh từ "писать".</p>
          </div>
          {pisatEx1.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'p2' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 2 — Thay thế từ đồng nghĩa</h3>
            <p>Thay thế động từ được đánh dấu bằng động từ có nghĩa tương tự.</p>
          </div>
          {pisatEx2.map((item, i) => <ZamenaItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'p3' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 3 — Chọn đáp án đúng</h3>
          </div>
          {pisatEx3.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'p4' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 4 — Chọn đáp án đúng</h3>
          </div>
          {pisatEx4.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'p5' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 5 — Xây dựng đoạn hội thoại</h3>
          </div>
          {pisatEx5.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'p6' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 6 — Đọc hiểu (mở rộng)</h3>
            <p>Đọc các câu sau. Quan sát cách sử dụng các động từ phái sinh từ "писать" với các lớp nghĩa bóng, thành ngữ.</p>
          </div>
          {pisatEx6.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
    </div>
  );
}
