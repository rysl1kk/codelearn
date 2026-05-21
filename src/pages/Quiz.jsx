import React, { useState } from 'react';

const questions = [
  {
    question: "Какой язык отвечает за структуру и скелет веб-страницы?",
    options: ["CSS", "HTML", "JavaScript", "Python"],
    answer: "HTML"
  },
  {
    question: "Какое свойство в CSS меняет цвет текста?",
    options: ["background-color", "font-size", "color", "text-align"],
    answer: "color"
  },
  {
    question: "Какое ключевое слово используется для создания переменной в современном JavaScript?",
    options: ["var", "let", "make", "create"],
    answer: "let"
  }
];

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleOptionClick = (option) => {
    if (answered) return;
    setSelectedOption(option);
    setAnswered(true);
    if (option === questions[currentQuestion].answer) {
      setScore(s => s + 1);
    }
  };

  const handleNextClick = () => {
    setSelectedOption(null);
    setAnswered(false);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(q => q + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setAnswered(false);
  };

  const progressPercent = (currentQuestion / questions.length) * 100;
  const isCorrect = answered && selectedOption === questions[currentQuestion]?.answer;

  const getResultData = () => {
    if (score === questions.length) return { emoji: '🏆', label: 'Отлично!', color: 'linear-gradient(135deg, #fbbf24, #f59e0b)', msg: 'Идеальный результат. Ты готов к следующему уровню!' };
    if (score >= questions.length / 2) return { emoji: '🎯', label: 'Хорошо!', color: 'linear-gradient(135deg, #34d399, #059669)', msg: 'Неплохой результат! Повтори материал и попробуй снова.' };
    return { emoji: '📚', label: 'Нужно повторить', color: 'linear-gradient(135deg, #60a5fa, #3b82f6)', msg: 'Не сдавайся — изучи материал и попробуй ещё раз!' };
  };

  return (
    <div style={{ width: '100%', padding: '80px 48px 100px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <style>{`
        @keyframes quizUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes correctFlash {
          0%   { box-shadow: 0 0 0 rgba(16,185,129,0); }
          50%  { box-shadow: 0 0 30px rgba(16,185,129,0.4); }
          100% { box-shadow: 0 0 10px rgba(16,185,129,0.15); }
        }
        @keyframes wrongFlash {
          0%   { box-shadow: 0 0 0 rgba(239,68,68,0); }
          50%  { box-shadow: 0 0 30px rgba(239,68,68,0.4); }
          100% { box-shadow: 0 0 10px rgba(239,68,68,0.1); }
        }
        .quiz-shell {
          width: 100%; max-width: 680px;
          background: var(--bg-glass);
          border: 1px solid var(--border-dim);
          border-radius: 28px;
          padding: 48px 44px;
          backdrop-filter: blur(20px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
          animation: quizUp 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .quiz-progress-track {
          width: 100%; height: 5px;
          background: rgba(255,255,255,0.04);
          border-radius: 10px; overflow: hidden;
          margin-bottom: 36px;
        }
        .quiz-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--neon-primary), var(--neon-secondary));
          border-radius: 10px;
          transition: width 0.5s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 0 10px rgba(124,58,237,0.5);
        }
        .quiz-q-num {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em;
          color: var(--text-dim); text-transform: uppercase; margin-bottom: 20px;
          display: flex; align-items: center; gap: 12px;
        }
        .quiz-q-num-badge {
          background: rgba(124,58,237,0.12);
          border: 1px solid var(--border-dim);
          color: #c4b5fd;
          padding: 4px 14px; border-radius: 20px;
          font-size: 12px; font-weight: 700;
        }
        .quiz-question {
          font-size: clamp(20px, 3vw, 26px); font-weight: 800; line-height: 1.4;
          color: #f0f4ff; margin-bottom: 36px; letter-spacing: -0.3px;
        }
        .option-row {
          width: 100%; display: flex; align-items: center; gap: 16px;
          padding: 18px 20px; border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(5,8,20,0.4);
          cursor: pointer; text-align: left;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          font-size: 15px; font-weight: 500; color: var(--text-mid);
          margin-bottom: 12px;
        }
        .option-row:hover:not(.opt-answered) {
          border-color: rgba(124,58,237,0.35);
          background: rgba(124,58,237,0.07);
          color: #f0f4ff; transform: translateX(4px);
        }
        .option-letter {
          width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-mono); font-size: 12px; font-weight: 700;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.25s;
        }
        .opt-selected { border-color: rgba(124,58,237,0.5); background: rgba(124,58,237,0.1); color: #c4b5fd; }
        .opt-correct  { border-color: rgba(16,185,129,0.5); background: rgba(16,185,129,0.08); color: #86efac; animation: correctFlash 0.6s ease; }
        .opt-wrong    { border-color: rgba(239,68,68,0.4); background: rgba(239,68,68,0.06); color: #fca5a5; animation: wrongFlash 0.6s ease; }
        .opt-answered { cursor: default; }

        .feedback-bar {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 18px; border-radius: 12px;
          font-family: var(--font-mono); font-size: 13px; font-weight: 600;
          margin-bottom: 24px;
          animation: quizUp 0.4s ease;
        }
        .next-btn {
          width: 100%; padding: 18px; border-radius: 14px; border: none;
          background: linear-gradient(135deg, var(--neon-primary), var(--neon-secondary));
          color: #fff; font-family: var(--font-mono); font-size: 15px; font-weight: 700;
          letter-spacing: 0.04em; cursor: pointer;
          box-shadow: 0 0 30px rgba(124,58,237,0.35);
          transition: all 0.3s;
        }
        .next-btn:hover { transform: translateY(-2px); box-shadow: 0 0 50px rgba(124,58,237,0.55); }
        .next-btn:disabled {
          background: rgba(255,255,255,0.04);
          color: var(--text-dim);
          cursor: not-allowed;
          box-shadow: none;
          transform: none;
        }
        .result-emoji { font-size: 72px; margin-bottom: 24px; display: block; filter: drop-shadow(0 10px 30px rgba(251,191,36,0.3)); }
        .result-score {
          font-size: 64px; font-weight: 900; font-family: var(--font-mono);
          background: linear-gradient(135deg, #c4b5fd, #67e8f9);
          WebkitBackgroundClip: text; WebkitTextFillColor: transparent;
          background-clip: text; -webkit-text-fill-color: transparent;
        }
        .restart-btn {
          width: 100%; padding: 18px; border-radius: 14px; border: none;
          background: linear-gradient(135deg, var(--neon-primary), var(--neon-secondary));
          color: #fff; font-family: var(--font-mono); font-size: 15px; font-weight: 700;
          cursor: pointer; box-shadow: 0 0 30px rgba(124,58,237,0.35);
          transition: all 0.3s; margin-top: 32px;
        }
        .restart-btn:hover { transform: translateY(-2px); box-shadow: 0 0 50px rgba(124,58,237,0.55); }
      `}</style>

      {/* Заголовок */}
      <div style={{ textAlign: 'center', marginBottom: '52px', animation: 'quizUp 0.5s ease' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '14px' }}>// Интерактивный тест</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, background: 'linear-gradient(135deg, #f0f4ff 40%, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Проверь свои знания
        </h2>
      </div>

      <div className="quiz-shell">
        {showResult ? (() => {
          const r = getResultData();
          return (
            <div style={{ textAlign: 'center', animation: 'quizUp 0.5s ease' }}>
              <span className="result-emoji">{r.emoji}</span>
              <h3 style={{ fontSize: '28px', fontWeight: 900, background: r.color, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '16px' }}>
                {r.label}
              </h3>
              <div className="result-score">{score}/{questions.length}</div>
              <p style={{ color: 'var(--text-mid)', marginTop: '16px', marginBottom: '8px', lineHeight: 1.6 }}>{r.msg}</p>

              {/* Score bar */}
              <div style={{ margin: '32px 0 8px', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', height: '8px', overflow: 'hidden' }}>
                <div style={{
                  width: `${(score / questions.length) * 100}%`, height: '100%',
                  background: r.color, borderRadius: '10px',
                  transition: 'width 1s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: '0 0 12px rgba(124,58,237,0.5)',
                }} />
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)' }}>
                {Math.round((score / questions.length) * 100)}% правильных ответов
              </p>

              <button className="restart-btn" onClick={restartQuiz}>
                Попробовать снова ↺
              </button>
            </div>
          );
        })() : (
          <div key={currentQuestion} style={{ animation: 'quizUp 0.45s cubic-bezier(0.16,1,0.3,1)' }}>
            <div className="quiz-progress-track">
              <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>

            <div className="quiz-q-num">
              <span className="quiz-q-num-badge">Вопрос {currentQuestion + 1} из {questions.length}</span>
              <span style={{ marginLeft: 'auto', color: 'var(--neon-green)', fontWeight: 700 }}>
                ✓ {score} верных
              </span>
            </div>

            <h3 className="quiz-question">{questions[currentQuestion].question}</h3>

            <div style={{ marginBottom: answered ? '20px' : '32px' }}>
              {questions[currentQuestion].options.map((option, index) => {
                const isSelected = selectedOption === option;
                const isCorrectOpt = option === questions[currentQuestion].answer;
                let cls = 'option-row';
                if (answered) {
                  cls += ' opt-answered';
                  if (isCorrectOpt) cls += ' opt-correct';
                  else if (isSelected && !isCorrectOpt) cls += ' opt-wrong';
                } else if (isSelected) {
                  cls += ' opt-selected';
                }

                let letterBg = 'rgba(255,255,255,0.04)';
                let letterColor = 'var(--text-dim)';
                if (answered && isCorrectOpt) { letterBg = 'rgba(16,185,129,0.2)'; letterColor = '#86efac'; }
                else if (answered && isSelected && !isCorrectOpt) { letterBg = 'rgba(239,68,68,0.2)'; letterColor = '#fca5a5'; }
                else if (!answered && isSelected) { letterBg = 'rgba(124,58,237,0.2)'; letterColor = '#c4b5fd'; }

                return (
                  <div key={index} className={cls} onClick={() => handleOptionClick(option)}>
                    <div className="option-letter" style={{ background: letterBg, color: letterColor, borderColor: 'transparent' }}>
                      {OPTION_LETTERS[index]}
                    </div>
                    <span style={{ flex: 1 }}>{option}</span>
                    {answered && isCorrectOpt && <span style={{ color: '#86efac', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>✓</span>}
                    {answered && isSelected && !isCorrectOpt && <span style={{ color: '#fca5a5', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>✗</span>}
                  </div>
                );
              })}
            </div>

            {answered && (
              <div className="feedback-bar" style={{
                background: isCorrect ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.07)',
                border: `1px solid ${isCorrect ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.2)'}`,
                color: isCorrect ? '#86efac' : '#fca5a5',
              }}>
                <span>{isCorrect ? '✓' : '✗'}</span>
                <span>{isCorrect ? 'Верно! Отличная работа.' : `Правильный ответ: ${questions[currentQuestion].answer}`}</span>
              </div>
            )}

            <button className="next-btn" onClick={handleNextClick} disabled={!answered}>
              {currentQuestion + 1 === questions.length ? 'Посмотреть результат →' : 'Следующий вопрос →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}