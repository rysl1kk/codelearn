import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <style>{`
        @keyframes contentUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animated-content {
          animation: contentUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .main-btn {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: white;
          border: none;
          padding: 18px 40px;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 0 0 rgba(99, 102, 241, 0);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .main-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(99, 102, 241, 0.45);
          filter: brightness(1.1);
        }
        .feature-card {
          background: rgba(30, 41, 59, 0.25);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 30px;
          border-radius: 22px;
          width: 280px;
          text-align: left;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(99, 102, 241, 0.3);
          background: rgba(30, 41, 59, 0.4);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
      `}</style>

      <div className="animated-content">
        <h1 style={{ 
          fontSize: '56px', 
          fontWeight: '900', 
          marginBottom: '24px',
          lineHeight: '1.15',
          letterSpacing: '-1.5px',
          background: 'linear-gradient(135deg, #ffffff 40%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Получай знания <br />
          <span style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>в новом формате</span>
        </h1>
        
        <p style={{ fontSize: '19px', color: '#94a3b8', maxWidth: '640px', margin: '0 auto 48px auto', lineHeight: '1.6' }}>
          Интерактивная среда программирования. Забудь про скучные лекции — проходи динамические квизы и отслеживай свой прогресс в реальном времени.
        </p>

        <button onClick={() => navigate('/quiz')} className="main-btn">
          Начать обучение 🚀
        </button>

        <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '90px' }}>
          <div className="feature-card">
            <div style={{ fontSize: '32px', marginBottom: '15px', filter: 'drop-shadow(0 4px 12px rgba(99,102,241,0.3))' }}>⚡</div>
            <h3 style={{ margin: '0 0 12px 0', color: '#fff', fontSize: '18px', fontWeight: '700' }}>HTML5 & CSS3</h3>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>Создание архитектуры сайтов, работа с сетками Flexbox/Grid и адаптивность.</p>
          </div>
          
          <div className="feature-card">
            <div style={{ fontSize: '32px', marginBottom: '15px', filter: 'drop-shadow(0 4px 12px rgba(234,179,8,0.3))' }}>🟨</div>
            <h3 style={{ margin: '0 0 12px 0', color: '#fff', fontSize: '18px', fontWeight: '700' }}>JavaScript ES6+</h3>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>Основы алгоритмов, управление элементами страницы и динамика.</p>
          </div>
          
          <div className="feature-card">
            <div style={{ fontSize: '32px', marginBottom: '15px', filter: 'drop-shadow(0 4px 12px rgba(6,182,212,0.3))' }}>⚛️</div>
            <h3 style={{ margin: '0 0 12px 0', color: '#fff', fontSize: '18px', fontWeight: '700' }}>React Ecosystem</h3>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>Компонентный подход, состояние приложений и создание SPA.</p>
          </div>
        </div>
      </div>
    </div>
  );
}