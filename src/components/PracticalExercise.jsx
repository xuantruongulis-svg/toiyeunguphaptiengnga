import React, { useState, useEffect } from 'react';

function PracticalQuestion({ q, index, forceShowAnswer }) {
  const [selected, setSelected] = useState(null);
  
  const answered = selected !== null || forceShowAnswer;
  const isUserCorrect = selected === q.correct;
  const isCorrectDisplay = selected !== null ? isUserCorrect : true;

  return (
    <div className={`quiz-item ${answered ? (isCorrectDisplay ? 'correct' : 'wrong') : ''}`}>
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
        <div className={`quiz-result ${isCorrectDisplay ? 'res-correct' : 'res-wrong'}`}>
          <div className="res-header">
            {selected !== null 
              ? (isUserCorrect ? '✅ Chính xác!' : `❌ Sai! Đáp án đúng: ${q.correct}`)
              : `💡 Đáp án đúng: ${q.correct}`
            }
          </div>
          {q.full && <div className="res-viet"><strong>Câu hoàn chỉnh (RU):</strong> {q.full}</div>}
          {q.viet && <div className="res-viet">Dịch: {q.viet}</div>}
          <div className="res-why"><strong>Giải thích:</strong> {q.why}</div>
        </div>
      )}
    </div>
  );
}

export default function PracticalExercise({ exercise }) {
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    setShowAnswers(false);
  }, [exercise]);

  return (
    <div className="exercise-wrapper">
      <div className="ex-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
        <div style={{ flex: 1 }}>
          <h3>{exercise.title}</h3>
          <p>{exercise.description}</p>
        </div>
        <button 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: showAnswers ? '#10b981' : '#3b82f6', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: showAnswers ? 'default' : 'pointer', 
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
          onClick={() => setShowAnswers(true)}
          disabled={showAnswers}
        >
          {showAnswers ? '✅ Đã hiển thị đáp án' : '👁️ Hiển thị đáp án'}
        </button>
      </div>
      
      <div className="ex-section">
        {exercise.questions.map((q, i) => (
          <PracticalQuestion key={exercise.title + '-' + i} q={q} index={i} forceShowAnswer={showAnswers} />
        ))}
      </div>
    </div>
  );
}
