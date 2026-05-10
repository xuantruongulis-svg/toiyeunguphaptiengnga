import React, { useState, useEffect, useRef } from 'react';
import './ExamRoom.css';

function ProgressBar({ current, total, score }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="er-progress-bar-wrap">
      <div className="er-progress-bar">
        <div className="er-progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="er-progress-info">
        <span>Câu {current}/{total}</span>
        <span>Điểm: <strong>{score}/{current > 0 ? current - 1 : 0}</strong></span>
        <span>{pct}% hoàn thành</span>
      </div>
    </div>
  );
}

function ScoreBoard({ questions, answers, onRetry, onBack }) {
  const correct = answers.filter((a, i) => a === questions[i].correct).length;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  let grade = '', gradeColor = '', gradeEmoji = '';
  if (pct >= 90) { grade = 'Xuất sắc'; gradeColor = '#22c55e'; gradeEmoji = '🏆'; }
  else if (pct >= 75) { grade = 'Giỏi'; gradeColor = '#3b82f6'; gradeEmoji = '🥇'; }
  else if (pct >= 60) { grade = 'Khá'; gradeColor = '#f59e0b'; gradeEmoji = '🥈'; }
  else { grade = 'Cần cố gắng thêm'; gradeColor = '#ef4444'; gradeEmoji = '📚'; }

  return (
    <div className="er-scoreboard">
      <div className="er-score-hero">
        <div className="er-score-emoji">{gradeEmoji}</div>
        <div className="er-score-circle" style={{ borderColor: gradeColor }}>
          <span className="er-score-num" style={{ color: gradeColor }}>{correct}</span>
          <span className="er-score-den">/{total}</span>
        </div>
        <div className="er-score-grade" style={{ color: gradeColor }}>{grade}</div>
        <div className="er-score-pct">{pct}% chính xác</div>
      </div>

      <div className="er-score-review">
        <h3>📋 Chi tiết kết quả</h3>
        {questions.map((q, i) => {
          const isOk = answers[i] === q.correct;
          return (
            <div key={i} className={`er-review-item ${isOk ? 'ok' : 'fail'}`}>
              <div className="er-review-num">{isOk ? '✅' : '❌'}</div>
              <div className="er-review-body">
                <div className="er-review-q">{q.num}. {q.sentence}</div>
                {!isOk && (
                  <div className="er-review-ans">
                    <span className="er-wrong-ans">Bạn chọn: {answers[i] || '—'}</span>
                    <span className="er-correct-ans">Đáp án: {q.correctShort}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="er-score-actions">
        <button className="er-btn-retry" onClick={onRetry}>🔄 Làm lại</button>
        <button className="er-btn-back" onClick={onBack}>← Quay lại</button>
      </div>
    </div>
  );
}

function QuestionCard({ q, onAnswer, answered, selected }) {
  const isCorrect = selected === q.correct;

  return (
    <div className={`er-qcard ${answered ? (isCorrect ? 'er-qcard-correct' : 'er-qcard-wrong') : ''}`}>
      <div className="er-qcard-header">
        <div className="er-qnum">Câu {q.num}</div>
        <div className="er-task-badge">{q.num <= 30 ? 'Задание 1' : 'Задание 2'}</div>
      </div>

      <div className="er-sentence">
        <span dangerouslySetInnerHTML={{ __html: q.sentence.replace(/…|\.{3}/g, '<span class="er-blank">___</span>') }} />
      </div>
      <div className="er-viet">{q.viet}</div>

      <div className="er-options">
        {q.options.map(opt => {
          let cls = 'er-opt';
          if (answered) {
            if (opt === q.correct) cls += ' er-opt-correct';
            else if (opt === selected) cls += ' er-opt-wrong';
            else cls += ' er-opt-dim';
          }
          return (
            <button
              key={opt}
              className={cls}
              onClick={() => !answered && onAnswer(opt)}
              disabled={answered}
            >
              <span className="er-opt-letter">{opt.split(')')[0]})</span>
              <span className="er-opt-text">{opt.split(') ').slice(1).join(') ')}</span>
              {answered && opt === q.correct && <span className="er-opt-check">✓</span>}
              {answered && opt === selected && opt !== q.correct && <span className="er-opt-x">✗</span>}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className={`er-explanation ${isCorrect ? 'er-expl-correct' : 'er-expl-wrong'}`}>
          <div className="er-expl-header">
            {isCorrect ? '✅ Chính xác!' : `❌ Sai! Đáp án đúng: ${q.correctShort}`}
          </div>
          <div className="er-expl-full">
            <strong>Câu hoàn chỉnh:</strong> <em>{q.full}</em>
          </div>
          <div className="er-expl-why">
            <strong>📌 Giải thích:</strong> {q.explanation}
          </div>
          <div className="er-analysis">
            <div className="er-analysis-title">🔍 Phân tích từng đáp án:</div>
            {q.analysis.map((a, i) => (
              <div key={i} className={`er-analysis-row ${a.opt === q.correct ? 'er-analysis-correct' : ''}`}>
                <span className="er-analysis-opt">{a.opt.split(')')[0]})</span>
                <span className="er-analysis-note">{a.note}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ExamRoom({ exam, onBack }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const cardRef = useRef(null);

  const questions = exam.questions;
  const q = questions[current];
  const answered = answers[current] !== undefined;
  const score = answers.filter((a, i) => a === questions[i]?.correct).length;

  function handleAnswer(opt) {
    const newAns = [...answers];
    newAns[current] = opt;
    setAnswers(newAns);
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
      setTimeout(() => cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    } else {
      setDone(true);
      setShowScore(true);
    }
  }

  function handlePrev() {
    if (current > 0) setCurrent(c => c - 1);
  }

  function handleRetry() {
    setCurrent(0);
    setAnswers([]);
    setDone(false);
    setShowScore(false);
  }

  if (showScore) {
    return (
      <div className="er-wrapper">
        <div className="er-topbar">
          <button className="er-back" onClick={onBack}>← Quay lại</button>
          <div className="er-exam-title">🏆 {exam.title}</div>
        </div>
        <ScoreBoard questions={questions} answers={answers} onRetry={handleRetry} onBack={onBack} />
      </div>
    );
  }

  return (
    <div className="er-wrapper">
      <div className="er-topbar">
        <button className="er-back" onClick={onBack}>← Quay lại</button>
        <div className="er-exam-title">📝 {exam.title}</div>
        <button className="er-finish-btn" onClick={() => setShowScore(true)}>Xem kết quả</button>
      </div>

      <ProgressBar current={current + 1} total={questions.length} score={score} />

      {/* Question navigator dots */}
      <div className="er-nav-dots">
        {questions.map((_, i) => {
          let cls = 'er-dot';
          if (i === current) cls += ' er-dot-current';
          else if (answers[i] !== undefined) {
            cls += answers[i] === questions[i].correct ? ' er-dot-ok' : ' er-dot-fail';
          }
          return <button key={i} className={cls} onClick={() => setCurrent(i)}>{i + 1}</button>;
        })}
      </div>

      <div className="er-task-label">
        {current < 30 ? '📋 ЗАДАНИЕ 1 — Chọn phương án đúng (Câu 1–30)' : '✏️ ЗАДАНИЕ 2 — Hoàn thiện câu (Câu 31–40)'}
      </div>

      <div ref={cardRef}>
        <QuestionCard
          key={current}
          q={q}
          answered={answered}
          selected={answers[current]}
          onAnswer={handleAnswer}
        />
      </div>

      <div className="er-nav-btns">
        <button className="er-btn-prev" onClick={handlePrev} disabled={current === 0}>← Câu trước</button>
        {answered && (
          <button className="er-btn-next" onClick={handleNext}>
            {current < questions.length - 1 ? 'Câu tiếp →' : '🏁 Nộp bài'}
          </button>
        )}
      </div>
    </div>
  );
}
