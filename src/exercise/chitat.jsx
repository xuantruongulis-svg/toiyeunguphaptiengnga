import React, { useState } from 'react';
import { chitatEx7, chitatEx8, chitatEx9, chitatEx10, chitatEx11 } from './chitat_data.js';

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
          Có thể thay bằng: <strong>{item.repl}</strong>
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

export default function ChitatExercise() {
  const [tab, setTab] = useState('c7');
  return (
    <div className="exercise-wrapper">
      <div className="exercise-tabs" style={{flexWrap: 'wrap'}}>
        <button className={`ex-tab ${tab === 'c7' ? 'active' : ''}`} onClick={() => setTab('c7')}>📖 Bài 7</button>
        <button className={`ex-tab ${tab === 'c8' ? 'active' : ''}`} onClick={() => setTab('c8')}>🎯 Bài 8</button>
        <button className={`ex-tab ${tab === 'c9' ? 'active' : ''}`} onClick={() => setTab('c9')}>🎯 Bài 9</button>
        <button className={`ex-tab ${tab === 'c10' ? 'active' : ''}`} onClick={() => setTab('c10')}>🔄 Bài 10</button>
        <button className={`ex-tab ${tab === 'c11' ? 'active' : ''}`} onClick={() => setTab('c11')}>💬 Bài 11</button>
      </div>

      {tab === 'c7' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 7 — Đọc hiểu</h3>
            <p>Đọc các câu sau. Quan sát cách sử dụng các động từ phái sinh từ "читать".</p>
          </div>
          {chitatEx7.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'c8' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 8 — Chọn đáp án đúng</h3>
          </div>
          {chitatEx8.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'c9' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 9 — Chọn đáp án đúng</h3>
          </div>
          {chitatEx9.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'c10' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 10 — Phân tích biến đổi câu</h3>
            <p>Xác định khả năng thay thế và sự thay đổi về mặt ngữ nghĩa/cấu trúc.</p>
          </div>
          {chitatEx10.map((item, i) => <ZamenaItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'c11' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 11 — Xây dựng đoạn hội thoại</h3>
          </div>
          {chitatEx11.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
    </div>
  );
}
