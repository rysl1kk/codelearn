import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      {/* Главный заголовок */}
      <h1 style={{ 
        fontSize: '48px', 
        fontWeight: '800', 
        marginBottom: '20px',
        lineHeight: '1.2',
        background: 'linear-gradient(135deg, #ffffff 30%, #a855f7 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Изучай программирование <br />
        <span style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>легко и интерактивно</span>
      </h1>
      
      <p style={{ fontSize: '18px', color: '#9ca3af', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
        Современная платформа для прокачки твоих навыков в web-разработке. Проходи интерактивные тесты, изучай теорию и создавай проекты будущего.
      </p>

      {/* Кнопка действия */}
      <button 
        onClick={() => navigate('/quiz')}
        style={{
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          color: 'white',
          border: 'none',
          padding: '16px 36px',
          borderRadius: '14px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
          transition: 'transform 0.2s ease'
        }}
      >
        Начать обучение 🚀
      </button>

      {/* Карточки мини-преимуществ */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '80px' }}>
        <div style={cardStyle}>
          <div style={{ fontSize: '30px', marginBottom: '10px' }}>⚡</div>
          <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>HTML & CSS</h3>
          <p style={{ margin: 0, color: '#9ca3af', fontSize: '14px' }}>Основы создания сайтов. Вёрстка и адаптивный дизайн.</p>
        </div>
        <div style={cardStyle}>
          <div style={{ fontSize: '30px', marginBottom: '10px' }}>🟨</div>
          <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>JavaScript</h3>
          <p style={{ margin: 0, color: '#9ca3af', fontSize: '14px' }}>Язык интерактивности. Логика, анимации и работа с API.</p>
        </div>
        <div style={cardStyle}>
          <div style={{ fontSize: '30px', marginBottom: '10px' }}>⚛️</div>
          <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>React</h3>
          <p style={{ margin: 0, color: '#9ca3af', fontSize: '14px' }}>Создание современных веб-приложений на мощном фреймворке.</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: 'rgba(30, 41, 59, 0.3)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  padding: '25px',
  borderRadius: '18px',
  width: '260px',
  textAlign: 'left',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
};