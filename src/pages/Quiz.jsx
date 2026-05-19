import { useState } from 'react';
import { Link } from 'react-router-dom';

function Quiz() {
  // Список вопросов для теста
  const questions = [
    {
      questionText: 'Какой язык отвечает за структуру и скелет веб-страницы?',
      answerOptions: [
        { answerText: 'CSS', isCorrect: false },
        { answerText: 'HTML', isCorrect: true },
        { answerText: 'JavaScript', isCorrect: false },
        { answerText: 'Python', isCorrect: false },
      ],
    },
    {
      questionText: 'Что делает язык JavaScript на сайте?',
      answerOptions: [
        { answerText: 'Задаёт цвета и шрифты', isCorrect: false },
        { answerText: 'Создает структуру документа', isCorrect: false },
        { answerText: 'Оживляет элементы и обрабатывает клики', isCorrect: true },
        { answerText: 'Отвечает за дизайн карточек', isCorrect: false },
      ],
    },
    {
      questionText: 'Что такое React?',
      answerOptions: [
        { answerText: 'Популярная JavaScript-библиотека для создания интерфейсов', isCorrect: true },
        { answerText: 'Система управления базами данных', isCorrect: false },
        { answerText: 'Язык программирования для серверов', isCorrect: false },
        { answerText: 'Программа для редактирования фото', isCorrect: false },
      ],
    },
  ];

  // Состояния для отслеживания прогресса тестов
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Функция обработки клика по ответу
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // Функция для перезапуска теста
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '30px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', fontFamily: 'sans-serif' }}>
      
      {showScore ? (
        /* ЭКРАН РЕЗУЛЬТАТОВ */
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>Тест завершен! 🎉</h2>
          <p style={{ fontSize: '18px', color: '#4b5563', marginBottom: '30px' }}>
            Вы правильно ответили на <strong>{score}</strong> из {questions.length} вопросов.
          </p>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <button onClick={resetQuiz} style={{ backgroundColor: '#f3f4f6', color: '#1f2937', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
              Пройти заново
            </button>
            <Link to="/courses" style={{ backgroundColor: '#2563eb', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', textAlign: 'center' }}>
              Выбрать курс
            </Link>
          </div>
        </div>
      ) : (
        /* ЭКРАН С ВОПРОСАМИ */
        <div>
          <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #e5e7eb', paddingBottom: '15px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#2563eb', backgroundColor: '#eff6ff', padding: '4px 10px', borderRadius: '6px' }}>
              Вопрос {currentQuestion + 1} из {questions.length}
            </span>
          </div>
          
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#111827', marginBottom: '25px', lineHeight: '1.4' }}>
            {questions[currentQuestion].questionText}
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                style={{
                  textAlign: 'left',
                  padding: '14px 20px',
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '16px',
                  color: '#374151',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'background-color 0.2s',
                }}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;