import React, { useState } from 'react';
import PracticalExercise from '../../components/PracticalExercise';
import { vidGlagolaExercises } from '../data/ex_vid_glagola';

const VidMeaningGeneralExercise = () => {
  const [selectedEx, setSelectedEx] = useState(null);
  
  const categoryExercises = vidGlagolaExercises.filter(ex => ['ex17'].includes(ex.id));

  if (selectedEx) {
    return (
      <div>
        <button className="back-btn" onClick={() => setSelectedEx(null)} style={{marginBottom: '1rem'}}>
          <span className="arrow">←</span> Quay lại danh sách bài tập
        </button>
        <PracticalExercise exercise={selectedEx} />
      </div>
    );
  }

  return (
    <div className="practice-grid-container">
      {categoryExercises.length > 0 ? (
        <div className="grid">
          {categoryExercises.map((ex, index) => (
            <div 
              key={index} 
              className="verb-card simple exercise-only" 
              onClick={() => setSelectedEx(ex)}
            >
              <div className="verb-content">
                <span className="page-num">Bài {ex.num}</span>
                <div className="verb-icon">📝</div>
                <span className="verb-ru" style={{fontSize: '1.2rem', marginTop: '0.5rem', textAlign: 'center'}}>{ex.title}</span>
                <span className="verb-hint">Làm bài tập</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="placeholder-content" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px dashed rgba(255,255,255,0.2)' }}>
          <div className="placeholder-icon" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🚧</div>
          <h2>Bài tập đang được cập nhật</h2>
        </div>
      )}
    </div>
  );
};

export default VidMeaningGeneralExercise;
