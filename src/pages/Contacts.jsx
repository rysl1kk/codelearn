import React from 'react';

export default function Contacts() {
  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '35px',
      borderRadius: '24px',
      backgroundColor: 'rgba(30, 41, 59, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
    }}>
      <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '25px', textAlign: 'center' }}>Связаться с нами</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#9ca3af' }}>Ваше имя</label>
          <input type="text" placeholder="Иван" style={inputStyle} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#9ca3af' }}>Email</label>
          <input type="email" placeholder="example@mail.com" style={inputStyle} />
        </div>
      </div>

      <button style={{
        width: '100%',
        background: 'linear-gradient(135deg, #6366f1, #a855f7)',
        color: 'white',
        border: 'none',
        padding: '14px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)'
      }}>Отправить сообщение</button>

      <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '14px', color: '#6b7280', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
        <p style={{ margin: '0 0 5px 0' }}>📍 г. Москва, ул. Разработчиков, д. 404</p>
        <p style={{ margin: 0 }}>📧 support@codelearn.ru</p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  border: '1px solid rgba(255,255,255,0.1)',
  backgroundColor: 'rgba(15, 23, 42, 0.5)',
  color: '#fff',
  fontSize: '15px',
  outline: 'none',
  boxSizing: 'border-box'
};