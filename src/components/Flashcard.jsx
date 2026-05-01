import React, { useState } from 'react';
import './Flashcard.css';

export function Flashcard({ verb, meaning }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Helper to render newlines as <br /> or lists
  const renderMeaning = (text) => {
    return text.split('\n').map((line, idx) => (
      <div key={idx} className="meaning-line">{line}</div>
    ));
  };

  return (
    <div 
      className={`flashcard ${isFlipped ? 'flipped' : ''}`} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h4>{verb}</h4>
          <span className="flip-hint">Chạm để lật ↺</span>
        </div>
        <div className="flashcard-back">
          <div className="back-content">
            {typeof meaning === 'string' ? renderMeaning(meaning) : meaning}
          </div>
          <span className="flip-hint">Chạm để lật ↺</span>
        </div>
      </div>
    </div>
  );
}

export default function FlashcardList({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 150);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 150);
  };

  return (
    <div className="flashcard-container">
      <div className="flashcard-header">
        <h4>Ôn tập Flashcard</h4>
        <div className="flashcard-counter">
          {currentIndex + 1} / {cards.length}
        </div>
      </div>
      
      <div className="flashcard-display">
        <Flashcard 
          key={currentIndex} // forces re-render/reset state on index change
          verb={cards[currentIndex].verb} 
          meaning={cards[currentIndex].meaning} 
        />
      </div>

      <div className="flashcard-controls">
        <button onClick={prevCard} className="btn-flashcard btn-prev">← Trước</button>
        <button onClick={nextCard} className="btn-flashcard btn-next">Tiếp →</button>
      </div>
    </div>
  );
}
