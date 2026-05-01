import React, { useState, Suspense, lazy } from 'react';
import { verbs } from './data/verbs';
import { practicalExercises } from './data/practical_exercises';
import PracticalExercise from './components/PracticalExercise';
import AIAssistant from './components/AIAssistant';
import './App.css';

// Pre-load components for smoother transitions
const theoryComponents = {};
const exerciseComponents = {};

verbs.forEach(v => {
  theoryComponents[v.id] = lazy(() => import(`./theory/${v.id}.jsx`));
  exerciseComponents[v.id] = lazy(() => import(`./exercise/${v.id}.jsx`));
});

function DetailView({ verb, type, onBack }) {
  const Component = type === 'theory' ? theoryComponents[verb.id] : exerciseComponents[verb.id];

  return (
    <div className="section-container">
      <nav className="section-nav">
        <button className="back-btn" onClick={onBack}>
          <span className="arrow">←</span> Quay lại
        </button>
        <div className="section-title">
          <span className="verb-icon">{verb.icon}</span>
          <h2>{verb.ru.toUpperCase()} - {type === 'theory' ? 'LÝ THUYẾT' : 'BÀI TẬP'}</h2>
        </div>
        <div className="nav-page">Trang {verb.page}</div>
      </nav>
      
      <main className="section-content">
        <Suspense fallback={<div className="loading">Đang tải nội dung...</div>}>
          <Component />
        </Suspense>
      </main>
    </div>
  );
}

function ChoiceOverlay({ verb, onChoice, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="choice-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="choice-header">
          <div className="modal-icon">{verb.icon}</div>
          <h2>{verb.ru.toUpperCase()}</h2>
        </div>
        <div className="choice-grid">
          <div className="choice-box theory" onClick={() => onChoice('theory')}>
            <span className="choice-icon">📚</span>
            <h3>Lý thuyết</h3>
            <p>Xem quy tắc chia và cách dùng</p>
          </div>
          <div className="choice-box exercise" onClick={() => onChoice('exercise')}>
            <span className="choice-icon">📝</span>
            <h3>Bài tập</h3>
            <p>Luyện tập và kiểm tra kiến thức</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedVerb, setSelectedVerb] = useState(null);
  const [currentView, setCurrentView] = useState({ type: 'grid', verb: null });

  const handleBack = () => {
    if (currentView.fromPractice) {
      setCurrentView({ type: 'practice_grid', verb: null });
    } else {
      setCurrentView({ type: 'grid', verb: null });
    }
  };

  return (
    <>
      {currentView.type === 'grid' ? (
        <div className="container">
          <div className="bg-glow"></div>
          <header className="header">
            <h1>LUYỆN TẬP ĐỘNG TỪ</h1>
            <p className="subtitle">Hệ thống động từ tiếng Nga môtiv hóa</p>
          </header>
          
          <div className="practice-banner" onClick={() => setCurrentView({ type: 'practice_grid' })}>
            <div className="practice-banner-content">
              <div className="practice-banner-icon">🎯</div>
              <div className="practice-banner-info">
                <h2>Luyện tập thực chiến</h2>
                <p>Hệ thống bài tập tổng hợp, trắc nghiệm và phân tích chuyên sâu cho 14 cặp động từ</p>
              </div>
            </div>
            <div className="practice-banner-action">
              Bắt đầu ngay <span>→</span>
            </div>
          </div>

          <div className="grid">
            {verbs.map((verb, index) => (
              <div 
                key={index} 
                className="verb-card simple" 
                style={{ '--i': index }}
                onClick={() => setSelectedVerb(verb)}
              >
                <div className="verb-content">
                  <span className="page-num">p.{verb.page}</span>
                  <div className="verb-icon">{verb.icon}</div>
                  <span className="verb-ru">{verb.ru}</span>
                  <span className="verb-hint">Chọn nội dung</span>
                </div>
              </div>
            ))}
          </div>
          
          {selectedVerb && (
            <ChoiceOverlay 
              verb={selectedVerb} 
              onChoice={(type) => setCurrentView({ type, verb: selectedVerb })}
              onClose={() => setSelectedVerb(null)} 
            />
          )}

          <div className="footer-stats">
            <div className="stat-item">
              <span className="stat-val">14</span>
              <span className="stat-label">Động từ gốc</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-val">28</span>
              <span className="stat-label">Sections</span>
            </div>
          </div>
        </div>
      ) : currentView.type === 'practice_grid' ? (
        <div className="section-container">
          <nav className="section-nav">
            <button className="back-btn" onClick={() => setCurrentView({ type: 'grid', verb: null })}>
              <span className="arrow">←</span> Quay lại
            </button>
            <div className="section-title">
              <h2>🎯 LUYỆN TẬP THỰC CHIẾN</h2>
            </div>
            <div className="nav-page">{practicalExercises.length} Bài tập</div>
          </nav>
          
          <div className="practice-grid-container">
            <div className="grid">
              {practicalExercises.map((ex, index) => (
                <div 
                  key={index} 
                  className="verb-card simple exercise-only" 
                  style={{ '--i': index }}
                  onClick={() => setCurrentView({ type: 'practical_exercise', exercise: ex, fromPractice: true })}
                >
                  <div className="verb-content">
                    <span className="page-num">Bài {ex.num}</span>
                    <div className="verb-icon">🎯</div>
                    <span className="verb-ru" style={{fontSize: '1.2rem', marginTop: '0.5rem'}}>{ex.title.split('-')[1]?.trim() || ex.title}</span>
                    <span className="verb-hint">Làm bài tập</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : currentView.type === 'practical_exercise' ? (
        <div className="section-container">
          <nav className="section-nav">
            <button className="back-btn" onClick={handleBack}>
              <span className="arrow">←</span> Quay lại
            </button>
            <div className="section-title">
              <span className="verb-icon">🎯</span>
              <h2>{currentView.exercise.title}</h2>
            </div>
            <div className="nav-page">Bài {currentView.exercise.num}</div>
          </nav>
          
          <main className="section-content">
            <PracticalExercise exercise={currentView.exercise} />
          </main>
        </div>
      ) : (
        <DetailView 
          verb={currentView.verb} 
          type={currentView.type} 
          onBack={handleBack} 
        />
      )}
      <AIAssistant />
    </>
  );
}

export default App;
