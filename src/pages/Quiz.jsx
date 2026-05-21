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

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  const progressPercent = (currentQuestion / questions.length) * 100;

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '40px',
      borderRadius: '24px',
      backgroundColor: 'rgba(30, 41, 59, 0.2)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.04)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    }}>
      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .quiz-anim {
          animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .option-btn {
          text-align: left;
          padding: 18px 22px;
          border-radius: 14px;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .option-btn:hover:not(:disabled) {
          border-color: rgba(99, 102, 241, 0.4) !important;
          background-color: rgba(99, 102, 241, 0.08) !important;
          transform: translateX(4px);
          color: #fff !important;
        }
      `}</style>

      {showResult ? (
        <div style={{ textAlign: 'center' }} className="quiz-anim">
          <div style={{ fontSize: '64px', marginBottom: '20px', filter: 'drop-shadow(0 10px 20px rgba(234,179,8,0.3))' }}>🏆</div>
          <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '10px', background: 'linear-gradient(135deg, #34d399, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Тест завершен!</h2>
          <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '35px' }}>
            Ваш результат: <strong style={{ color: '#fff', fontSize: '24px' }}>{score}</strong> из {questions.length}
          </p>
          <button onClick={restartQuiz} style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            color: 'white',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '14px',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)',
            width: '100%'
          }}>Попробовать снова</button>
        </div>
      ) : (
        <div className="quiz-anim" key={currentQuestion}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <span style={{ 
              backgroundColor: 'rgba(99, 102, 241, 0.12)', 
              color: '#818cf8', 
              padding: '6px 14px', 
              borderRadius: '20px', 
              fontSize: '13px', 
              fontWeight: '700' 
            }}>
              Вопрос {currentQuestion + 1} из {questions.length}
            </span>
          </div>

          <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '10px', marginBottom: '30px', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercent}%`, height: '100%', background: 'linear-gradient(90deg, #6366f1, #a855f7)', transition: 'width 0.4s ease' }}></div>
          </div>

          <h3 style={{ fontSize: '24px', fontWeight: '800', lineHeight: '1.4', marginBottom: '30px', color: '#ffffff', letterSpacing: '-0.5px' }}>
            {questions[currentQuestion].question}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '35px' }}>
            {questions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedOption === option;
              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="option-btn"
                  style={{
                    border: isSelected ? '1px solid #6366f1' : '1px solid rgba(255, 255, 255, 0.05)',
                    backgroundColor: isSelected ? 'rgba(99, 102, 241, 0.15)' : 'rgba(15, 23, 42, 0.3)',
                    color: isSelected ? '#a5b4fc' : '#94a3b8',
                    fontWeight: isSelected ? '700' : '500',
                    boxShadow: isSelected ? '0 0 20px rgba(99, 102, 241, 0.15)' : 'none',
                    outline: 'none'
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNextClick}
            disabled={!selectedOption}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '14px',
              border: 'none',
              backgroundColor: selectedOption ? '#6366f1' : 'rgba(255, 255, 255, 0.04)',
              color: selectedOption ? 'white' : '#4b5563',
              fontSize: '16px',
              fontWeight: '700',
              cursor: selectedOption ? 'pointer' : 'not-allowed',
              boxShadow: selectedOption ? '0 6px 20px rgba(99, 102, 241, 0.3)' : 'none',
              transition: 'all 0.3s'
            }}
          >
            {currentQuestion + 1 === questions.length ? "Посмотреть результат" : "Следующий вопрос"}
          </button>
        </div>
      )}
    </div>
  );
}