import React, { useState } from 'react';
import { d54, d55, d56, d57, d58, d59, d60 } from './delat_data.js';

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

export default function DelatExercise() {
  const [tab, setTab] = useState('d54');
  return (
    <div className="exercise-wrapper">
      <div className="exercise-tabs" style={{flexWrap: 'wrap'}}>
        <button className={`ex-tab ${tab === 'd54' ? 'active' : ''}`} onClick={() => setTab('d54')}>📖 Bài 54</button>
        <button className={`ex-tab ${tab === 'd55' ? 'active' : ''}`} onClick={() => setTab('d55')}>📖 Bài 55</button>
        <button className={`ex-tab ${tab === 'd56' ? 'active' : ''}`} onClick={() => setTab('d56')}>📖 Bài 56</button>
        <button className={`ex-tab ${tab === 'd57' ? 'active' : ''}`} onClick={() => setTab('d57')}>🎯 Bài 57</button>
        <button className={`ex-tab ${tab === 'd58' ? 'active' : ''}`} onClick={() => setTab('d58')}>🎯 Bài 58</button>
        <button className={`ex-tab ${tab === 'd59' ? 'active' : ''}`} onClick={() => setTab('d59')}>🔄 Bài 59</button>
        <button className={`ex-tab ${tab === 'd60' ? 'active' : ''}`} onClick={() => setTab('d60')}>💬 Bài 60</button>
      </div>

      {tab === 'd54' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 54 — Đọc hiểu</h3>
            <p>Phân tích nghĩa của từng động từ.</p>
          </div>
          {d54.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'd55' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 55 — Đọc hiểu (tiếp)</h3>
          </div>
          {d55.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'd56' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 56 — Đọc hiểu (tiếp)</h3>
          </div>
          {d56.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'd57' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 57 — Chọn đáp án đúng</h3>
          </div>
          {d57.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'd58' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 58 — Chọn đáp án đúng (tiếp)</h3>
          </div>
          {d58.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'd59' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 59 — Có thể thay thế không?</h3>
            <p>Phân tích khả năng thay thế giữa các biến thể.</p>
          </div>
          {d59.map((item, i) => <ZamenaItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'd60' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 60 — Hội thoại</h3>
            <p>Xây dựng đoạn hội thoại ngắn từ gợi ý.</p>
          </div>
          {d60.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
    </div>
  );
}
