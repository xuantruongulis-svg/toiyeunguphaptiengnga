import React, { useState } from 'react';
import { slyshatEx, slyshatAnalysis40, slyshatDialog41 } from './slyshat_data.js';

function QuizQuestion({ q, index }) {
  const [selected, setSelected] = useState(null);
  const isCorrect = selected === q.correct;
  const answered = selected !== null;
  return (
    <div className={`quiz-item ${answered ? (isCorrect ? 'correct' : 'wrong') : ''}`}>
      <div className="quiz-q">
        <span className="quiz-num">{index + 1}</span>
        <span dangerouslySetInnerHTML={{ __html: q.sentence.replace('...', '<span class="quiz-blank">___</span>') }} />
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
          <div className="res-viet" style={{ marginBottom: '8px', fontStyle: 'italic' }}>{q.viet}</div>
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

export default function SlyshatExercise() {
  const [tab, setTab] = useState('quiz');
  return (
    <div className="exercise-wrapper">
      <div className="exercise-tabs">
        <button className={`ex-tab ${tab === 'quiz' ? 'active' : ''}`} onClick={() => setTab('quiz')}>🎯 Trắc nghiệm</button>
        <button className={`ex-tab ${tab === 'analysis' ? 'active' : ''}`} onClick={() => setTab('analysis')}>📖 Phân tích</button>
        <button className={`ex-tab ${tab === 'dialog' ? 'active' : ''}`} onClick={() => setTab('dialog')}>💬 Hội thoại</button>
      </div>

      {tab === 'quiz' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Bài tập trắc nghiệm - СЛЫШАТЬ</h3>
            <p>Chọn động từ đúng nhất theo ngữ cảnh câu.</p>
          </div>
          {slyshatEx.map((q, i) => <QuizQuestion key={q.id} q={q} index={i} />)}
        </div>
      )}

      {tab === 'analysis' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Bài tập phân tích - СЛЫШАТЬ</h3>
            <p>Xem giải thích nghĩa và cách dùng trong câu.</p>
          </div>
          {slyshatAnalysis40.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}

      {tab === 'dialog' && (
        <div className="ex-section">
          <div className="ex-section-header">
            <h3>Soạn hội thoại - СЛЫШАТЬ</h3>
          </div>
          {slyshatDialog41.map((item, i) => <AnalysisItem key={item.id} item={item} index={i} />)}
        </div>
      )}
    </div>
  );
}
