import React from 'react';

export default function Contacts() {
  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '40px',
      borderRadius: '24px',
      backgroundColor: 'rgba(30, 41, 59, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.04)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      animation: 'contentUp 0.6s ease-out'
    }}>
      <style>{`
        .contact-input {
          width: 100%;
          padding: '14px 18px';
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background-color: rgba(15, 23, 42, 0.4);
          color: '#fff';
          font-size: '15px';
          outline: 'none';
          box-sizing: border-box;
          transition: all 0.3s ease;
        }
        .contact-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
          background-color: rgba(15, 23, 42, 0.6);
        }
      `}</style>

      <h2 style={{ fontSize: '30px', fontWeight: '850', marginBottom: '30px', textAlign: 'center', letterSpacing: '-0.5px' }}>Связаться с нами</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#94a3b8', fontWeight: '500' }}>Ваше имя</label>
          <input type="text" placeholder="Иван" className="contact-input" style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(15,23,42,0.4)', color: '#fff', outline: 'none' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#94a3b8', fontWeight: '500' }}>Email</label>
          <input type="email" placeholder="example@mail.com" className="contact-input" style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(15,23,42,0.4)', color: '#fff', outline: 'none' }} />
        </div>
      </div>

      <button className="main-btn" style={{ width: '100%' }}>Отправить сообщение</button>

      <div style={{ marginTop: '35px', textAlign: 'center', fontSize: '14px', color: '#4b5563', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '25px' }}>
        <p style={{ margin: '0 0 8px 0', color: '#94a3b8' }}>📍 г. Москва, ул. Разработчиков, д. 404</p>
        <p style={{ margin: 0, color: '#94a3b8' }}>📧 support@codelearn.ru</p>
      </div>
    </div>
  );
}