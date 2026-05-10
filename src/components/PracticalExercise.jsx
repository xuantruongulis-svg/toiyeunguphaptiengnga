import React, { useState } from 'react';

function PracticalQuestion({ q, index }) {
  const [selected, setSelected] = useState(null);
  const isCorrect = selected === q.correct;
  const answered = selected !== null;

  return (
    <div className={`quiz-item ${answered ? (isCorrect ? 'correct' : 'wrong') : ''}`}>
      <div className="quiz-q">
        <span className="quiz-num">{index + 1}</span>
        <span dangerouslySetInnerHTML={{ __html: q.sentence.replace(/\.{3}|…/g, '<span class="quiz-blank">___</span>') }} />
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
          <div className="res-header">
            {isCorrect ? '✅ Chính xác!' : `❌ Sai! Đáp án đúng: ${q.correct}`}
          </div>
          {q.viet && <div className="res-viet">Dịch: {q.viet}</div>}
          <div className="res-why"><strong>Giải thích:</strong> {q.why}</div>
        </div>
      )}
    </div>
  );
}

export default function PracticalExercise({ exercise }) {
  return (
    <div className="exercise-wrapper">
      <div className="ex-section-header">
        <h3>{exercise.title}</h3>
        <p>{exercise.description}</p>
      </div>
      
      <div className="ex-section">
        {exercise.questions.map((q, i) => (
          <PracticalQuestion key={i} q={q} index={i} />
        ))}
      </div>
    </div>
  );
}
