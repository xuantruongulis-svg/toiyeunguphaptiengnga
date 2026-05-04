import React, { useState } from 'react';
import { skazatEx21, skazatEx22, skazatEx23 } from './skazat_data.js';

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

export default function SkazatExercise() {
  const [tab, setTab] = useState('ex21');
  return (
    <div className="exercise-wrapper">
      <div className="exercise-tabs" style={{flexWrap: 'wrap'}}>
        <button className={`ex-tab ${tab === 'ex21' ? 'active' : ''}`} onClick={() => setTab('ex21')}>📖 Bài 21</button>
        <button className={`ex-tab ${tab === 'ex22' ? 'active' : ''}`} onClick={() => setTab('ex22')}>🎯 Bài 22</button>
        <button className={`ex-tab ${tab === 'ex23' ? 'active' : ''}`} onClick={() => setTab('ex23')}>💬 Bài 23</button>
      </div>

      {tab === 'ex21' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 21 — Анализ</h3>
            <p>Прочитайте предложения. Проследите особенности употребления глаголов, мотивированных глаголом сказать.</p>
          </div>
          {skazatEx21.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'ex22' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 22 — Выберите правильный вариант</h3>
          </div>
          {skazatEx22.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'ex23' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 23 — Микродиалоги</h3>
            <p>Составьте микродиалоги, используя предложенные ниже сочетания.</p>
          </div>
          {skazatEx23.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
    </div>
  );
}
