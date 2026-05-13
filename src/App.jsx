import React, { useState, Suspense, lazy } from 'react';
import { verbs } from './prefiksalnye_glagoly/data/verbs';
import { practicalExercises } from './prefiksalnye_glagoly/data/practical_exercises';
import { practical4KeyExercises } from './prefiksalnye_glagoly/data/practical_4key_exercises';
import { padezhiExercises_1, padezhiExercises_2, padezhiExercises_3, padezhiExercises } from './padezhi/data/padezhi_exercises';
import { formyGlagolaExercises } from './formy_glagola/data/formy_glagola_exercises';
import { deeprichastieExercises } from './formy_glagola/data/ex_deeprichastie';
import { vidGlagolaExercises } from './vid_glagola/data/ex_vid_glagola';
import { soedinenieExercises } from './ssp/data/ex_soedinenie';
import { sopostavlenieExercises } from './ssp/data/ex_sopostavlenie';
import { protivopostavlenieExercises } from './ssp/data/ex_protivopostavlenie';
import { izyasnitelnyeExercises, pryamayaRechExercises, opredelitelnyeExercises } from './spp/data/ex_spp';
import { mestoimenieExercises, neopredelennye_exercises } from './mestoimenie/data/mestoimenie_exercises';
import { prilagatelnoeExercises_1 } from './prilagatelnoe/data/prilagatelnoe_exercises';
import PracticalExercise from './components/PracticalExercise';
import { practicalExams } from './practical_exams/data/exams';
import ExamRoom from './components/ExamRoom';
import AIAssistant from './components/AIAssistant';
import './App.css';

// Pre-load components for smoother transitions
const theoryComponents = {};
const exerciseComponents = {};

verbs.forEach(v => {
  theoryComponents[v.id] = lazy(() => import(`./prefiksalnye_glagoly/${v.id}.jsx`));
  exerciseComponents[v.id] = lazy(() => import(`./prefiksalnye_glagoly/exercise/${v.id}.jsx`));
});

// Participle and Gerund components
theoryComponents['prichastie'] = lazy(() => import('./formy_glagola/theory/PrichastieTheory.jsx'));
exerciseComponents['prichastie'] = lazy(() => import('./formy_glagola/exercise/PrichastieExercise.jsx'));
theoryComponents['deeprichastie_nsv'] = lazy(() => import('./formy_glagola/theory/DeeprichastieTheoryNSV.jsx'));
theoryComponents['deeprichastie_sv'] = lazy(() => import('./formy_glagola/theory/DeeprichastieTheorySV.jsx'));
exerciseComponents['deeprichastie'] = lazy(() => import('./formy_glagola/exercise/DeeprichastieExercise.jsx'));
theoryComponents['mix_prich_deeprich'] = lazy(() => import('./formy_glagola/theory/MixTheory.jsx'));
exerciseComponents['mix_prich_deeprich'] = lazy(() => import('./formy_glagola/exercise/MixExercise.jsx'));

// Vid glagola components
theoryComponents['vid_concept'] = lazy(() => import('./vid_glagola/theory/VidConceptTheory.jsx'));
exerciseComponents['vid_concept'] = lazy(() => import('./vid_glagola/exercise/VidConceptExercise.jsx'));
theoryComponents['vid_meaning_general'] = lazy(() => import('./vid_glagola/theory/VidMeaningGeneralTheory.jsx'));
exerciseComponents['vid_meaning_general'] = lazy(() => import('./vid_glagola/exercise/VidMeaningGeneralExercise.jsx'));
theoryComponents['vid_past'] = lazy(() => import('./vid_glagola/theory/VidPastTheory.jsx'));
exerciseComponents['vid_past'] = lazy(() => import('./vid_glagola/exercise/VidPastExercise.jsx'));
theoryComponents['vid_future'] = lazy(() => import('./vid_glagola/theory/VidFutureTheory.jsx'));
exerciseComponents['vid_future'] = lazy(() => import('./vid_glagola/exercise/VidFutureExercise.jsx'));
theoryComponents['imperative'] = lazy(() => import('./vid_glagola/theory/ImperativeTheory.jsx'));
theoryComponents['mestoimenie'] = lazy(() => import('./mestoimenie/theory/MestoimenieTheory.jsx'));
theoryComponents['sopostavlenie'] = lazy(() => import('./ssp/theory/SopostavlenieTheory.jsx'));
theoryComponents['protivopostavlenie'] = lazy(() => import('./ssp/theory/ProtivopostavlenieTheory.jsx'));
theoryComponents['izyasnitelnye'] = lazy(() => import('./spp/theory/IzyasnitelnyeTheory.jsx'));
theoryComponents['pryamaya_rech'] = lazy(() => import('./spp/theory/PryamayaRechTheory.jsx'));
theoryComponents['opredelitelnye'] = lazy(() => import('./spp/theory/OpredelitelnyeTheory.jsx'));


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
  const [currentSection, setCurrentSection] = useState('Bài thi thực chiến');
  const [currentView, setCurrentView] = useState({ type: 'grid', verb: null });

  const sections = [
    'Bài thi thực chiến',
    '1. Именительный и родительный падежи.',
    '2. Дательный и винительный падежи',
    'Творительный и предложный падежи',
    '3. Местоимение',
    '4. Имя прилагательное',
    '5. Вид глагола',
    '9. Глаголы движения без приставок.',
    '10. Глаголы движения с приставками.',
    '11. Имя числительное',
    '12. Наречия и служебные части речи.',
    '13. Активные причастия: образование и употребление.',
    '14. Пассивные причастия: образование và употребление.',
    '15. Деепричастие',
    '16. Прямая и косвенная речь',
    '17. Придаточное предложение со словом который',
    '18. Выражение временных и причинных отношений',
    '19. Выражение условных и целевых отношений',
    '20. Выражение следственных отношений и уступки',
    '21. Префиксальные глаголы',
    'I. Mối quan hệ trong Câu ghép đẳng lập (Сложносочинённые предложения - ССП)',
    'II. Сложноподчинённые предложения với mệnh đề phụ bổ nghĩa cho từ - СПП',
    'III: Nhóm Câu phức chỉ hệ quả logic và hoàn cảnh (Toàn bộ các mục còn lại)'
  ];

  const subSectionsMap = {
    'I. Mối quan hệ trong Câu ghép đẳng lập (Сложносочинённые предложения - ССП)': [
      { id: 'soedinenie', title: 'Соединение, присоединение (Kết nối, bổ sung)', icon: '🔗' },
      { id: 'sopostavlenie', title: 'Сопоставление (Đối chiếu)', icon: '⚖️' },
      { id: 'protivopostavlenie', title: 'Противопоставление (Đối lập)', icon: '⚡' }
    ],
    'II. Сложноподчинённые предложения với mệnh đề phụ bổ nghĩa cho từ - СПП': [
      { id: 'izyasnitelnye', title: 'Изъяснительные предложения (Mệnh đề phụ bổ ngữ)', icon: '🗣️' },
      { id: 'pryamaya_rech', title: 'Прямая и косвенная речь (Lời nói trực tiếp/gián tiếp)', icon: '💬' },
      { id: 'opredelitelnye', title: 'Определительные предложения (Mệnh đề phụ định ngữ)', icon: '📌' }
    ],
    'III: Nhóm Câu phức chỉ hệ quả logic và hoàn cảnh (Toàn bộ các mục còn lại)': [
      { id: 'vremya', title: 'Время (Thời gian)', icon: '⏳' },
      { id: 'prichina', title: 'Причина (Nguyên nhân)', icon: '❓' },
      { id: 'uslovie', title: 'Условие (Điều kiện)', icon: '💡' },
      { id: 'tsel', title: 'Цель (Mục đích)', icon: '🎯' },
      { id: 'sledstvie', title: 'Следствие (Hệ quả)', icon: '➡️' },
      { id: 'ustupka', title: 'Уступка (Nhượng bộ)', icon: '🤝' }
    ],
    '3. Местоимение': [
      { id: 'mestoimenie', title: 'Tổng hợp ngữ pháp Đại từ (Местоимение)', icon: '👤' },
      { id: 'mestoimenie_ex', title: 'Bài tập Đại từ (Местоимение)', icon: '📝' }
    ],
    '5. Вид глагола': [
      { id: 'vid_concept', title: 'Понятие вида глагола', icon: '🎭' },
      { id: 'vid_past', title: 'Вид глагола в прошедшем времени', icon: '⏳' },
      { id: 'vid_future', title: 'Значение и употребление видов глагола в будущем времени', icon: '🔮' },
      { id: 'imperative', title: 'Вид глагола в инфинитиве и императиве', icon: '❗️' }
    ],
    '13. Активные причастия: образование и употребление.': [
      { id: 'prichastie', title: 'Активные причастия', icon: '🔗' }
    ],
    '14. Пассивные причастия: образование và употребление.': [
      { id: 'prichastie', title: 'Пассивные причастия', icon: '🔗' }
    ],
    '15. Деепричастие': [
      { id: 'deeprichastie_nsv', title: 'Деепричастия НСВ', icon: '🏃', page: 196 },
      { id: 'deeprichastie_sv', title: 'Деепричастия СВ', icon: '🏃', page: 198 }
    ]
  };

  const handleBack = () => {
    if (currentView.fromPractice) {
      if (currentView.from4Key) {
        setCurrentView({ type: 'practice_4key_grid', verb: null });
      } else if (currentView.fromSubSectionGrid) {
        setCurrentView({ type: 'subsection_practice_grid', subId: currentView.subId, subTitle: currentView.subTitle });
      } else {
        setCurrentView({ type: 'practice_grid', verb: null });
      }
    } else if (currentView.type === 'subsection_practice_grid') {
      setCurrentView({ type: 'grid', verb: null });
    } else {
      setCurrentView({ type: 'grid', verb: null });
    }
  };

  return (
    <>
      <nav className="main-nav">
        <div className="nav-container">
          {sections.map((section) => (
            <button
              key={section}
              className={`nav-item ${currentSection === section ? 'active' : ''}`}
              onClick={() => {
                setCurrentSection(section);
                setCurrentView({ type: 'grid', verb: null });
              }}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {currentSection === 'Bài thi thực chiến' ? (
        currentView.type === 'grid' ? (
          <div className="container">
            <header className="header">
              <h1>BÀI THI THỰC CHIẾN</h1>
              <p className="subtitle">Hệ thống đề thi trắc nghiệm tổng hợp và phân tích chuyên sâu</p>
            </header>

            <div className="practice-banner" style={{ background: 'var(--primary-gradient)' }}>
              <div className="practice-banner-content">
                <div className="practice-banner-icon">🏆</div>
                <div className="practice-banner-info">
                  <h2>Thử thách bản thân</h2>
                  <p>Làm các đề thi tổng hợp để kiểm tra trình độ tiếng Nga của bạn</p>
                </div>
              </div>
              <div className="practice-banner-action">
                Khám phá ngay <span>→</span>
              </div>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
              {practicalExams.map((ex, index) => (
                <div 
                  key={index} 
                  className="verb-card horizontal exercise-only" 
                  style={{ '--i': index, minHeight: '140px' }}
                  onClick={() => setCurrentView({ type: 'exam_detail', exercise: ex })}
                >
                  <div className="verb-content">
                    <div className="verb-icon">{ex.questions.length > 0 ? '📝' : '🔒'}</div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1}}>
                      <span className="verb-ru" style={{fontSize: '1.1rem'}}>{ex.title}</span>
                      {ex.questions.length > 0 ? (
                        <span style={{fontSize: '0.85rem', color: '#3b82f6', fontWeight: 700}}>✅ {ex.questions.length} câu hỏi • Sẵn sàng thi</span>
                      ) : (
                        <span style={{fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600}}>🚧 Đang cập nhật...</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : currentView.type === 'exam_detail' ? (
          currentView.exercise.questions.length > 0 ? (
            <div style={{ padding: '0' }}>
              <ExamRoom
                exam={currentView.exercise}
                onBack={() => setCurrentView({ type: 'grid', verb: null })}
              />
            </div>
          ) : (
            <div className="section-container">
              <nav className="section-nav">
                <button className="back-btn" onClick={() => setCurrentView({ type: 'grid', verb: null })}>
                  <span className="arrow">←</span> Quay lại
                </button>
                <div className="section-title">
                  <span className="verb-icon">🏆</span>
                  <h2>{currentView.exercise.title}</h2>
                </div>
              </nav>
              <div className="placeholder-section" style={{ minHeight: '30vh' }}>
                <div className="placeholder-content">
                  <div className="placeholder-icon">🚧</div>
                  <h2>Đang cập nhật</h2>
                  <p>Nội dung đề thi này đang được chuẩn bị. Vui lòng quay lại sau!</p>
                </div>
              </div>
            </div>
          )
        ) : null
      ) : currentSection === '21. Префиксальные глаголы' ? (
        currentView.type === 'grid' ? (
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

          <div className="practice-banner" style={{ marginTop: '-1.5rem', background: 'var(--accent-gradient)' }} onClick={() => setCurrentView({ type: 'practice_4key_grid' })}>
            <div className="practice-banner-content">
              <div className="practice-banner-icon">🔑</div>
              <div className="practice-banner-info">
                <h2>Thực chiến 4 key</h2>
                <p>Hệ thống bài tập nâng cao rèn luyện 4 kỹ năng then chốt</p>
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
      ) : currentView.type === 'practice_4key_grid' ? (
        <div className="section-container">
          <nav className="section-nav">
            <button className="back-btn" onClick={() => setCurrentView({ type: 'grid', verb: null })}>
              <span className="arrow">←</span> Quay lại
            </button>
            <div className="section-title">
              <h2>🔑 THỰC CHIẾN 4 KEY</h2>
            </div>
            <div className="nav-page">{practical4KeyExercises.length} Bài tập</div>
          </nav>
          
          <div className="practice-grid-container">
            <div className="grid">
              {practical4KeyExercises.map((ex, index) => (
                <div 
                  key={index} 
                  className="verb-card simple exercise-only" 
                  style={{ '--i': index }}
                  onClick={() => setCurrentView({ type: 'practical_exercise', exercise: ex, fromPractice: true, from4Key: true })}
                >
                  <div className="verb-content">
                    <span className="page-num">Bài {ex.num}</span>
                    <div className="verb-icon">🔑</div>
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
      )
      ) : currentSection === '3. Местоимение' && currentView.type === 'mestoimenie_exercise' ? (
        <div className="section-container">
          <nav className="section-nav">
            <button className="back-btn" onClick={handleBack}>
              <span className="arrow">←</span> Quay lại
            </button>
            <div className="section-title">
              <span className="verb-icon">📝</span>
              <h2>{currentView.exercise.title}</h2>
            </div>
            <div className="nav-page">Bài {currentView.exercise.num}</div>
          </nav>
          <main className="section-content">
            <PracticalExercise exercise={currentView.exercise} />
          </main>
        </div>
      ) : currentSection === '3. Местоимение' && (currentView.type === 'grid' || currentView.type === 'mestoimenie_ex_grid' || currentView.type === 'practice_grid') ? (
        <div className="section-container">
          <nav className="section-nav">
            <div className="section-title">
              <h2>📚 3. МЕСТОИМЕНИЕ</h2>
            </div>
          </nav>
          <div className="practice-grid-container">
            <div className="practice-banner" style={{ margin: '0 0 2rem 0', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }}
                onClick={() => setCurrentView({ type: 'theory', verb: { id: 'mestoimenie', ru: 'Đại từ (Местоимение)', icon: '👤' } })}>
              <div className="practice-banner-content">
                <div className="practice-banner-icon">👤</div>
                <div className="practice-banner-info">
                  <h2>Tổng hợp ngữ pháp Đại từ</h2>
                  <p>Xem chi tiết các loại đại từ và bảng biến cách đầy đủ trong tiếng Nga</p>
                </div>
              </div>
              <div className="practice-banner-action">
                Xem lý thuyết <span>→</span>
              </div>
            </div>
            <h3 style={{color: 'var(--accent-color)', margin: '2rem 0 1rem 1rem', fontSize: '1.3rem'}}>📝 PHẦN 1: ĐẠI TỪ PHỦ ĐỊNH — {mestoimenieExercises.length} bài</h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))' }}>
              {mestoimenieExercises.map((ex, index) => (
                <div key={index} className="verb-card horizontal exercise-only" style={{ '--i': index + 1 }}
                  onClick={() => setCurrentView({ type: 'mestoimenie_exercise', exercise: ex, fromPractice: true })}>
                  <div className="verb-content">
                    <div className="verb-icon">📝</div>
                    <span className="verb-ru">{ex.title}</span>
                    <span className="verb-hint">Làm bài tập</span>
                  </div>
                </div>
              ))}
            </div>
            <h3 style={{color: '#f59e0b', margin: '2.5rem 0 1rem 1rem', fontSize: '1.3rem'}}>📝 PHẦN 2: ĐẠI TỪ BẤT ĐỊNH — {neopredelennye_exercises.length} bài</h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))' }}>
              {neopredelennye_exercises.map((ex, index) => (
                <div key={`n${index}`} className="verb-card horizontal exercise-only" style={{ '--i': index + 1 }}
                  onClick={() => setCurrentView({ type: 'mestoimenie_exercise', exercise: ex, fromPractice: true })}>
                  <div className="verb-content">
                    <div className="verb-icon">🔍</div>
                    <span className="verb-ru">{ex.title}</span>
                    <span className="verb-hint">Làm bài tập</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : currentSection === '4. Имя прилагательное' && currentView.type === 'prilag_exercise' ? (
        <div className="section-container">
          <nav className="section-nav">
            <button className="back-btn" onClick={() => setCurrentView({ type: 'grid', verb: null })}>
              <span className="arrow">←</span> Quay lại
            </button>
            <div className="section-title">
              <span className="verb-icon">📝</span>
              <h2>{currentView.exercise.title}</h2>
            </div>
            <div className="nav-page">Bài {currentView.exercise.num}</div>
          </nav>
          <main className="section-content">
            <PracticalExercise exercise={currentView.exercise} />
          </main>
        </div>
      ) : currentSection === '4. Имя прилагательное' && (currentView.type === 'grid' || currentView.type === 'practice_grid') ? (
        <div className="section-container">
          <nav className="section-nav">
            <div className="section-title">
              <h2>📚 4. ИМЯ ПРИЛАГАТЕЛЬНОЕ</h2>
            </div>
          </nav>
          <div className="practice-grid-container">
            <h3 style={{color: 'var(--accent-color)', marginBottom: '1rem', marginLeft: '1rem', fontSize: '1.3rem'}}>📝 BÀI TẬP — Полные и краткие прилагательные ({prilagatelnoeExercises_1.length} bài)</h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {prilagatelnoeExercises_1.map((ex, index) => (
                <div key={index} className="verb-card simple exercise-only" style={{ '--i': index }}
                  onClick={() => setCurrentView({ type: 'prilag_exercise', exercise: ex })}>
                  <div className="verb-content">
                    <span className="page-num">Bài {ex.num}</span>
                    <div className="verb-icon">📝</div>
                    <span className="verb-ru" style={{fontSize: '1.1rem', marginTop: '0.5rem', textAlign: 'center'}}>{ex.title}</span>
                    <span className="verb-hint">Làm bài tập</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : ['1. Именительный и родительный падежи.', '2. Дательный и винительный падежи', 'Творительный и предложный падежи'].includes(currentSection) ? (
        currentView.type === 'grid' || currentView.type === 'practice_grid' ? (
        <div className="section-container">
          <nav className="section-nav">
            <div className="section-title">
              <h2>🎯 ПАДЕЖИ - LUYỆN TẬP</h2>
            </div>
            <div className="nav-page">{currentSection === '1. Именительный и родительный падежи.' ? padezhiExercises_1.length : currentSection === '2. Дательный и винительный падежи' ? padezhiExercises_2.length : padezhiExercises_3.length} Bài tập</div>
          </nav>
          
          <div className="practice-grid-container">
            <div className="grid">
              {(currentSection === '1. Именительный и родительный падежи.' ? padezhiExercises_1 : currentSection === '2. Дательный и винительный падежи' ? padezhiExercises_2 : padezhiExercises_3).map((ex, index) => (
                <div 
                  key={index} 
                  className="verb-card simple exercise-only" 
                  style={{ '--i': index }}
                  onClick={() => setCurrentView({ type: 'padezhi_exercise', exercise: ex, fromPractice: true })}
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
          </div>
        </div>
        ) : currentView.type === 'padezhi_exercise' ? (
        <div className="section-container">
          <nav className="section-nav">
            <button className="back-btn" onClick={handleBack}>
              <span className="arrow">←</span> Quay lại
            </button>
            <div className="section-title">
              <span className="verb-icon">📝</span>
              <h2>{currentView.exercise.title}</h2>
            </div>
            <div className="nav-page">Bài {currentView.exercise.num}</div>
          </nav>
          
          <main className="section-content">
            <PracticalExercise exercise={currentView.exercise} />
          </main>
        </div>
        ) : (
        <div className="placeholder-section">
          <div className="placeholder-content">
            <div className="placeholder-icon">🚧</div>
            <h2>{currentSection}</h2>
            <p>Nội dung đang được cập nhật. Vui lòng quay lại sau!</p>
          </div>
        </div>
        )
      ) : subSectionsMap[currentSection] ? (
        currentView.type === 'grid' || currentView.type === 'practice_grid' ? (
        <div className="section-container">
          <nav className="section-nav">
            <div className="section-title">
              <h2>📚 {currentSection.toUpperCase()}</h2>
            </div>
            <div className="nav-page">{subSectionsMap[currentSection].length} Chủ đề</div>
          </nav>
          
          <div className="practice-grid-container">
            {subSectionsMap[currentSection].length > 0 ? (
              <>
                {['3. Местоимение', '5. Вид глагола', '15. Деепричастие'].includes(currentSection) && <h3 style={{color: 'var(--accent-color)', marginBottom: '1.5rem', marginLeft: '1rem', fontSize: '1.5rem'}}>📚 LÝ THUYẾT</h3>}
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))' }}>
                  {subSectionsMap[currentSection].map((sub, index) => (
                    <div 
                      key={index} 
                      className="verb-card horizontal" 
                      style={{ '--i': index }}
                      onClick={() => {
                        if (currentSection === 'Формы русского глагола' && (sub.id === 'participle' || sub.id === 'gerund')) {
                          setCurrentView({ type: 'subsection_practice_grid', subId: sub.id, subTitle: sub.title });
                        } else if (currentSection === 'I. Mối quan hệ trong Câu ghép đẳng lập (Сложносочинённые предложения - ССП)') {
                          if (['soedinenie', 'sopostavlenie', 'protivopostavlenie'].includes(sub.id)) {
                            setSelectedVerb({ ...sub, ru: sub.title });
                          } else {
                            alert('Nội dung đang được cập nhật. Anh vui lòng quay lại sau nhé!');
                          }
                        } else if (currentSection === 'II. Сложноподчинённые предложения với mệnh đề phụ bổ nghĩa cho từ - СПП') {
                          if (['izyasnitelnye', 'pryamaya_rech', 'opredelitelnye'].includes(sub.id)) {
                            setSelectedVerb({ ...sub, ru: sub.title });
                          } else {
                            alert('Nội dung đang được cập nhật. Anh vui lòng quay lại sau nhé!');
                          }
                        } else if (currentSection === 'III: Nhóm Câu phức chỉ hệ quả logic và hoàn cảnh (Toàn bộ các mục còn lại)') {
                          if (['vremya', 'prichina', 'uslovie', 'tsel', 'sledstvie', 'ustupka'].includes(sub.id)) {
                            setSelectedVerb({ ...sub, ru: sub.title });
                          } else {
                            alert('Nội dung đang được cập nhật. Anh vui lòng quay lại sau nhé!');
                          }
                        } else if (['3. Местоимение', '5. Вид глагола', '15. Деепричастие'].includes(currentSection)) {
                          setCurrentView({ type: 'theory', verb: { ...sub, ru: sub.title } });
                        } else if (['13. Активные причастия: образование и употребление.', '14. Пассивные причастия: образование và употребление.'].includes(currentSection)) {
                          setSelectedVerb({ ...sub, ru: sub.title });
                        } else {
                          alert('Nội dung đang được cập nhật. Anh vui lòng quay lại sau nhé!');
                        }
                      }}
                    >
                      <div className="verb-content">
                        <div className="verb-icon">{sub.icon}</div>
                        <span className="verb-ru" style={{fontSize: '1.1rem', marginTop: '0.5rem', textAlign: 'center'}}>{sub.title}</span>
                        <span className="verb-hint">
                          {['3. Местоимение', '5. Вид глагола'].includes(currentSection) ? 'Xem lý thuyết' : 
                           (currentSection === 'Формы русского глагола' && (sub.id === 'participle' || sub.id === 'gerund')) || currentSection === 'I. Mối quan hệ trong Câu ghép đẳng lập (Сложносочинённые предложения - ССП)' || currentSection === 'II. Сложноподчинённые предложения với mệnh đề phụ bổ nghĩa cho từ - СПП' || currentSection === 'III: Nhóm Câu phức chỉ hệ quả logic và hoàn cảnh (Toàn bộ các mục còn lại)' || ['13. Активные причастия: образование и употребление.', '14. Пассивные причастия: образование и употребление.', '15. Деепричастие'].includes(currentSection) ? 'Chọn nội dung' : 'Chờ cập nhật'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {['5. Вид глагола', '15. Деепричастие'].includes(currentSection) && (
                  <>
                    <h3 style={{color: 'var(--accent-color)', marginBottom: '1.5rem', marginTop: '3rem', marginLeft: '1rem', fontSize: '1.5rem'}}>📝 LUYỆN TẬP</h3>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))' }}>
                      {(currentSection === '5. Вид глагола' ? vidGlagolaExercises : deeprichastieExercises).map((ex, index) => (
                        <div 
                          key={`ex-${index}`} 
                          className="verb-card horizontal exercise-only" 
                          style={{ '--i': index, border: '1px solid rgba(100, 181, 246, 0.3)' }}
                          onClick={() => setCurrentView({ type: 'subsection_exercise', exercise: ex, fromPractice: true })}
                        >
                          <div className="verb-content">
                            <div className="verb-icon">📝</div>
                            <span className="verb-ru">{ex.title}</span>
                            <span className="verb-hint">Làm bài tập</span>
                          </div>
                        </div>
                      ))}
                      {(currentSection === '15. Деепричастие' && deeprichastieExercises.length === 0) && (
                        <div className="placeholder-card" style={{ gridColumn: '1 / -1', padding: '2rem', textAlign: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
                          <p style={{ color: '#a0aec0' }}>Bài tập đang được cập nhật...</p>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="placeholder-section" style={{ minHeight: '40vh' }}>
                <div className="placeholder-content">
                  <div className="placeholder-icon">🚧</div>
                  <h2>{currentSection}</h2>
                  <p>Phần này đang chờ nội dung bài tập.</p>
                </div>
              </div>
            )}
          </div>
          {selectedVerb && ['13. Активные причастия: образование и употребление.', '14. Пассивные причастия: образование và употребление.', 'I. Mối quan hệ trong Câu ghép đẳng lập (Сложносочинённые предложения - ССП)', 'II. Сложноподчинённые предложения với mệnh đề phụ bổ nghĩa cho từ - СПП', 'III: Nhóm Câu phức chỉ hệ quả logic và hoàn cảnh (Toàn bộ các mục còn lại)'].includes(currentSection) && (
            <ChoiceOverlay 
              verb={selectedVerb} 
              onChoice={(type) => {
                if (type === 'exercise' && ['soedinenie', 'sopostavlenie', 'protivopostavlenie', 'izyasnitelnye', 'pryamaya_rech', 'opredelitelnye'].includes(selectedVerb.id)) {
                  setCurrentView({ type: 'subsection_practice_grid', subId: selectedVerb.id, subTitle: selectedVerb.title });
                } else if (type === 'exercise' && ['vremya', 'prichina', 'uslovie', 'tsel', 'sledstvie', 'ustupka'].includes(selectedVerb.id)) {
                  alert('Nội dung bài tập đang được cập nhật!');
                } else if (type === 'theory' && ['vremya', 'prichina', 'uslovie', 'tsel', 'sledstvie', 'ustupka'].includes(selectedVerb.id)) {
                  alert('Nội dung lý thuyết đang được cập nhật!');
                } else {
                  setCurrentView({ type, verb: selectedVerb });
                }
              }}
              onClose={() => setSelectedVerb(null)} 
            />
          )}
        </div>
        ) : currentView.type === 'subsection_practice_grid' ? (
        <div className="section-container">
          <nav className="section-nav">
            <button className="back-btn" onClick={handleBack}>
              <span className="arrow">←</span> Quay lại
            </button>
            <div className="section-title">
              <h2>🎯 {currentView.subTitle ? currentView.subTitle.toUpperCase() : 'BÀI TẬP'}</h2>
            </div>
          </nav>
          
          <div className="practice-grid-container" style={{ marginTop: '2rem' }}>
            <div className="grid">
              {(currentView.subId === 'soedinenie' ? soedinenieExercises : currentView.subId === 'sopostavlenie' ? sopostavlenieExercises : currentView.subId === 'protivopostavlenie' ? protivopostavlenieExercises : currentView.subId === 'izyasnitelnye' ? izyasnitelnyeExercises : currentView.subId === 'pryamaya_rech' ? pryamayaRechExercises : currentView.subId === 'opredelitelnye' ? opredelitelnyeExercises : formyGlagolaExercises
                .filter(ex => currentView.subId === 'participle' ? ex.id === 'ex50' || ex.id === 'ex51' : ex.id === 'ex52'))
                .map((ex, index) => (
                <div 
                  key={index} 
                  className="verb-card simple exercise-only" 
                  style={{ '--i': index }}
                  onClick={() => setCurrentView({ type: 'subsection_exercise', exercise: ex, fromPractice: true, fromSubSectionGrid: true, subId: currentView.subId, subTitle: currentView.subTitle })}
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
          </div>
        </div>

        ) : currentView.type === 'subsection_exercise' ? (
        <div className="section-container">
          <nav className="section-nav">
            <button className="back-btn" onClick={handleBack}>
              <span className="arrow">←</span> Quay lại
            </button>
            <div className="section-title">
              <span className="verb-icon">📝</span>
              <h2>{currentView.exercise.title}</h2>
            </div>
            <div className="nav-page">Bài {currentView.exercise.num}</div>
          </nav>
          
          <main className="section-content">
            <PracticalExercise exercise={currentView.exercise} />
          </main>
        </div>
        ) : (currentView.type === 'theory' || currentView.type === 'exercise') ? (
        <DetailView 
          verb={currentView.verb} 
          type={currentView.type} 
          onBack={handleBack} 
        />
        ) : null
      ) : (
        <div className="placeholder-section">
          <div className="placeholder-content">
            <div className="placeholder-icon">🚧</div>
            <h2>{currentSection}</h2>
            <p>Nội dung đang được cập nhật. Vui lòng quay lại sau!</p>
          </div>
        </div>
      )}
      <AIAssistant />
    </>
  );
}

export default App;
