import React, { useState } from 'react';
import {
  govoritEx12,
  govoritEx13,
  govoritEx14,
  govoritEx15,
  govoritEx16,
  govoritEx17,
  govoritEx18,
  govoritEx19,
  govoritEx20
} from './govorit_data.js';

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

export default function GovoritExercise() {
  const [tab, setTab] = useState('ex12');
  return (
    <div className="exercise-wrapper">
      <div className="exercise-tabs" style={{flexWrap: 'wrap'}}>
        <button className={`ex-tab ${tab === 'ex12' ? 'active' : ''}`} onClick={() => setTab('ex12')}>📖 Bài 12</button>
        <button className={`ex-tab ${tab === 'ex13' ? 'active' : ''}`} onClick={() => setTab('ex13')}>📖 Bài 13</button>
        <button className={`ex-tab ${tab === 'ex14' ? 'active' : ''}`} onClick={() => setTab('ex14')}>📖 Bài 14</button>
        <button className={`ex-tab ${tab === 'ex15' ? 'active' : ''}`} onClick={() => setTab('ex15')}>🎯 Bài 15</button>
        <button className={`ex-tab ${tab === 'ex16' ? 'active' : ''}`} onClick={() => setTab('ex16')}>🎯 Bài 16</button>
        <button className={`ex-tab ${tab === 'ex17' ? 'active' : ''}`} onClick={() => setTab('ex17')}>🎯 Bài 17</button>
        <button className={`ex-tab ${tab === 'ex18' ? 'active' : ''}`} onClick={() => setTab('ex18')}>🎯 Bài 18</button>
        <button className={`ex-tab ${tab === 'ex19' ? 'active' : ''}`} onClick={() => setTab('ex19')}>🔄 Bài 19</button>
        <button className={`ex-tab ${tab === 'ex20' ? 'active' : ''}`} onClick={() => setTab('ex20')}>💬 Bài 20</button>
      </div>

      {tab === 'ex12' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 12 — Анализ</h3>
            <p>Прочитайте предложения. Проследите особенности употребления глаголов, мотивированных глаголом говорить.</p>
          </div>
          {govoritEx12.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'ex13' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 13 — Анализ</h3>
            <p>Прочитайте предложения. Проследите особенности употребления глаголов, мотивированных глаголом говорить.</p>
          </div>
          {govoritEx13.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'ex14' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 14 — Анализ (Расширенная лексика)</h3>
            <p>Прочитайте предложения. Проследите особенности употребления глаголов.</p>
          </div>
          {govoritEx14.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'ex15' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 15 — Выберите правильный вариант</h3>
          </div>
          {govoritEx15.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'ex16' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 16 — Выберите правильный вариант</h3>
          </div>
          {govoritEx16.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'ex17' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 17 — Выберите правильный вариант</h3>
          </div>
          {govoritEx17.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'ex18' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 18 — Выберите правильный вариант (Расширенная лексика)</h3>
          </div>
          {govoritEx18.map((item, i) => <QuizQuestion key={item.id} q={item} index={i} />)}
        </div>
      )}
      {tab === 'ex19' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 19 — Замена</h3>
            <p>Укажите, возможны ли варианты. Изменится ли смысл фразы? Изменится ли структура предложения?</p>
          </div>
          {govoritEx19.map((item, i) => <ZamenaItem key={item.id} item={item} index={i} />)}
        </div>
      )}
      {tab === 'ex20' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Упражнение 20 — Микродиалоги</h3>
            <p>Составьте микродиалоги, используя предложенные словосочетания.</p>
          </div>
          {govoritEx20.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
    </div>
  );
}
