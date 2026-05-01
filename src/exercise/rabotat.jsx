import React, { useState } from 'react';
import { r47, r48, r49, r50, r51, r52, r53 } from './rabotat_data.js';

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

export default function RabotatExercise() {
  const [tab, setTab] = useState('r47');
  return (
    <div className="exercise-wrapper">
      <div className="exercise-tabs" style={{flexWrap: 'wrap'}}>
        <button className={`ex-tab ${tab === 'r47' ? 'active' : ''}`} onClick={() => setTab('r47')}>📖 Bài 47</button>
        <button className={`ex-tab ${tab === 'r48' ? 'active' : ''}`} onClick={() => setTab('r48')}>📖 Bài 48</button>
        <button className={`ex-tab ${tab === 'r49' ? 'active' : ''}`} onClick={() => setTab('r49')}>📖 Bài 49</button>
        <button className={`ex-tab ${tab === 'r50' ? 'active' : ''}`} onClick={() => setTab('r50')}>🎯 Bài 50</button>
        <button className={`ex-tab ${tab === 'r51' ? 'active' : ''}`} onClick={() => setTab('r51')}>🎯 Bài 51</button>
        <button className={`ex-tab ${tab === 'r52' ? 'active' : ''}`} onClick={() => setTab('r52')}>🔄 Bài 52</button>
        <button className={`ex-tab ${tab === 'r53' ? 'active' : ''}`} onClick={() => setTab('r53')}>💬 Bài 53</button>
      </div>

      {tab === 'r47' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 47 — Đọc hiểu</h3>
            <p>Phân tích nghĩa của từng động từ.</p>
          </div>
          {r47.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'r48' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 48 — Đọc hiểu (tiếp)</h3>
          </div>
          {r48.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'r49' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 49 — Đọc hiểu (tiếp)</h3>
          </div>
          {r49.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'r50' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 50 — Chọn đáp án đúng</h3>
            <p>Lựa chọn động từ chính xác nhất với ngữ cảnh.</p>
          </div>
          {r50.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'r51' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 51 — Chọn đáp án đúng (tiếp)</h3>
          </div>
          {r51.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'r52' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 52 — Có thể thay thế không?</h3>
            <p>Phân tích khả năng thay thế giữa các biến thể.</p>
          </div>
          {r52.map((item, i) => <ZamenaItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'r53' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 53 — Hội thoại</h3>
            <p>Xây dựng đoạn hội thoại ngắn từ gợi ý.</p>
          </div>
          {r53.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
    </div>
  );
}
