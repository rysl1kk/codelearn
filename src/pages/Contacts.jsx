import React from 'react';

export default function Contacts() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '1000px', 
      margin: '40px auto',
      padding: '40px',
      borderRadius: '24px',
      backgroundColor: 'rgba(30, 41, 59, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.04)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
      boxSizing: 'border-box'
    }}>
      <style>{`
        .contact-input {
          width: 100%;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background-color: rgba(15, 23, 42, 0.4);
          color: #fff;
          font-size: 15px;
          outline: none;
          box-sizing: border-box;
          transition: all 0.3s ease;
        }
        .contact-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
          background-color: rgba(15, 23, 42, 0.6);
        }
        .social-link {
          color: #818cf8;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }
        .social-link:hover {
          color: #a855f7;
        }
      `}</style>

      <h2 style={{ fontSize: '32px', fontWeight: '850', marginBottom: '30px', textAlign: 'center' }}>Связаться со мной</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '35px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#94a3b8', fontWeight: '500' }}>Ваше имя</label>
          <input type="text" placeholder="" className="contact-input" />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#94a3b8', fontWeight: '500' }}>Email</label>
          <input type="email" placeholder="example@mail.com" className="contact-input" />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#94a3b8', fontWeight: '500' }}>Сообщение</label>
          <textarea placeholder="Ваш текст..." rows="4" className="contact-input" style={{ fontFamily: 'inherit', resize: 'vertical' }}></textarea>
        </div>
      </div>

      <button style={{
        width: '100%',
        background: 'linear-gradient(135deg, #6366f1, #a855f7)',
        color: 'white',
        border: 'none',
        padding: '16px',
        borderRadius: '14px',
        fontSize: '16px',
        fontWeight: '700',
        cursor: 'pointer',
        boxShadow: '0 6px 20px rgba(99, 102, 241, 0.3)'
      }}>Отправить сообщение</button>

      {/* Твои реальные контакты: Почта + Гитхаб */}
      <div style={{ 
        marginTop: '40px', 
        textAlign: 'center', 
        fontSize: '16px', 
        borderTop: '1px solid rgba(255,255,255,0.04)', 
        paddingTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap'
      }}>
        <p style={{ margin: 0, color: '#94a3b8' }}>
          📧 Email: <a href="mailto:andamasovruslan444@gmail.com" className="social-link">andamasovruslan444@gmail.com</a>
        </p>
        <p style={{ margin: 0, color: '#94a3b8' }}>
          💻 GitHub: <a href="https://github.com/rysl1kk" target="_blank" rel="noreferrer" className="social-link">github.com/rysl1kk</a>
        </p>
      </div>
    </div>
  );
}