import React, { useState } from 'react';
import PracticalExercise from '../../components/PracticalExercise';
import { mixExercises } from '../data/ex_mix_prich_deeprich';

const MixExercise = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  if (selectedExercise) {
    return (
      <div className="section-container">
        <nav className="section-nav" style={{ marginBottom: '2rem' }}>
          <button className="back-btn" onClick={() => setSelectedExercise(null)}>
            <span className="arrow">←</span> Quay lại danh sách
          </button>
          <div className="section-title">
            <span className="verb-icon">🎓</span>
            <h2>{selectedExercise.title}</h2>
          </div>
        </nav>
        <PracticalExercise exercise={selectedExercise} />
      </div>
    );
  }

  return (
    <div className="practice-grid-container">
      {mixExercises.length > 0 ? (
        <div className="grid">
          {mixExercises.map((ex, index) => {
            const titleParts = ex.title.split(' - ');
            const mainTitle = titleParts.length > 1 ? titleParts[1] : ex.title;
            
            return (
              <div 
                key={index} 
                className="verb-card simple exercise-only" 
                style={{ '--i': index }}
                onClick={() => setSelectedExercise(ex)}
              >
                <div className="verb-content">
                  <span className="page-num">Bài {ex.num}</span>
                  <div className="verb-icon">🎓</div>
                  <span className="verb-ru" style={{fontSize: '1.1rem', marginTop: '0.5rem', textAlign: 'center'}}>{mainTitle}</span>
                  <span className="verb-hint">Làm bài tập</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="placeholder-content" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px dashed rgba(255,255,255,0.2)' }}>
          <div className="placeholder-icon" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🚧</div>
          <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Bài tập đang được cập nhật</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Các bài tập tổng hợp sẽ sớm được bổ sung tại đây.</p>
        </div>
      )}
    </div>
  );
};

export default MixExercise;
