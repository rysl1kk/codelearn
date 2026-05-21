import React, { useState } from 'react';

export default function Contacts() {
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);

  return (
    <div style={{ width: '100%', padding: '80px 48px 100px', boxSizing: 'border-box' }}>
      <style>{`
        @keyframes contactUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.4fr; gap: 60px;
          max-width: 1100px; margin: 0 auto;
          animation: contactUp 0.7s ease both;
        }
        @media (max-width: 800px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
        .contact-label {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.15em;
          color: var(--text-dim); text-transform: uppercase; margin-bottom: 20px;
        }
        .contact-title {
          font-size: clamp(32px, 4vw, 52px); font-weight: 900; line-height: 1.1; margin-bottom: 28px;
        }
        .contact-info-card {
          background: var(--bg-glass);
          border: 1px solid var(--border-dim);
          border-radius: 16px;
          padding: 24px 22px;
          display: flex; align-items: center; gap: 16px;
          margin-bottom: 16px;
          backdrop-filter: blur(12px);
          transition: all 0.3s;
          text-decoration: none;
        }
        .contact-info-card:hover {
          border-color: var(--border-glow);
          transform: translateX(6px);
          background: rgba(124,58,237,0.07);
        }
        .contact-info-icon {
          width: 44px; height: 44px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 20px;
          background: rgba(124,58,237,0.12);
          border: 1px solid var(--border-dim);
        }
        .contact-info-meta { font-family: var(--font-mono); font-size: 11px; color: var(--text-dim); margin-bottom: 4px; letter-spacing: 0.06em; }
        .contact-info-val { font-family: var(--font-mono); font-size: 14px; color: #c4b5fd; font-weight: 600; }

        .form-box {
          background: var(--bg-glass);
          border: 1px solid var(--border-dim);
          border-radius: 24px;
          padding: 44px 40px;
          backdrop-filter: blur(16px);
        }
        .field-wrap { margin-bottom: 24px; }
        .field-label {
          display: block;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em;
          color: var(--text-dim); margin-bottom: 10px; text-transform: uppercase;
        }
        .field-input {
          width: 100%;
          background: rgba(5, 8, 20, 0.6);
          border: 1px solid var(--border-dim);
          border-radius: 12px;
          padding: 16px 18px;
          color: #f0f4ff;
          font-family: var(--font-display); font-size: 15px;
          outline: none;
          transition: all 0.3s;
          box-sizing: border-box;
        }
        .field-input:focus {
          border-color: var(--neon-primary);
          box-shadow: 0 0 0 3px rgba(124,58,237,0.12), 0 0 20px rgba(124,58,237,0.15);
          background: rgba(5, 8, 20, 0.8);
        }
        .field-input::placeholder { color: var(--text-dim); }
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, var(--neon-primary), var(--neon-secondary));
          color: #fff; border: none;
          padding: 18px; border-radius: 14px;
          font-family: var(--font-mono); font-size: 15px; font-weight: 700;
          letter-spacing: 0.05em; cursor: pointer;
          box-shadow: 0 0 30px rgba(124,58,237,0.3);
          transition: all 0.3s;
          position: relative; overflow: hidden;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 50px rgba(124,58,237,0.55);
        }
        .submit-btn:active { transform: translateY(0); }
        .success-box {
          text-align: center; padding: 40px 20px;
          animation: contactUp 0.5s ease both;
        }
      `}</style>

      <div style={{ textAlign: 'center', marginBottom: '70px', animation: 'contactUp 0.6s ease both' }}>
        <p className="contact-label">// Связаться</p>
        <h2 className="contact-title">
          <span style={{ background: 'linear-gradient(135deg, #f0f4ff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Связаться
          </span>
          {' '}
          <span style={{ background: 'linear-gradient(135deg, #c4b5fd, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            со мной
          </span>
        </h2>
      </div>

      <div className="contact-grid">
        {/* Левая колонка */}
        <div>
          <p style={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.7, marginBottom: '36px' }}>
            Есть вопрос, предложение или хочешь рассказать о прогрессе — пиши, отвечу быстро.
          </p>

          <a href="mailto:andamasovruslan444@gmail.com" className="contact-info-card">
            <div className="contact-info-icon">📧</div>
            <div>
              <div className="contact-info-meta">Email</div>
              <div className="contact-info-val">andamasovruslan444@gmail.com</div>
            </div>
          </a>

          <a href="https://github.com/rysl1kk" target="_blank" rel="noreferrer" className="contact-info-card">
            <div className="contact-info-icon">💻</div>
            <div>
              <div className="contact-info-meta">GitHub</div>
              <div className="contact-info-val">github.com/rysl1kk</div>
            </div>
          </a>

          {/* Декоративная сетка */}
          <div style={{
            marginTop: '40px',
            padding: '24px',
            border: '1px solid var(--border-dim)',
            borderRadius: '16px',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(12px)',
            fontFamily: 'var(--font-mono)',
          }}>
            <div style={{ fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '16px' }}>// СТАТУС</div>
            {[
              { label: 'Открыт к общению', val: 'true', color: '#86efac' },
              { label: 'Время ответа', val: '< 24h', color: '#67e8f9' },
              { label: 'Язык', val: 'RU / EN', color: '#c4b5fd' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', padding: '8px 0', borderBottom: i < 2 ? '1px solid var(--border-dim)' : 'none' }}>
                <span style={{ color: 'var(--text-dim)' }}>{row.label}</span>
                <span style={{ color: row.color, fontWeight: 700 }}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Форма */}
        <div className="form-box">
          {sent ? (
            <div className="success-box">
              <div style={{ fontSize: '56px', marginBottom: '20px' }}>✅</div>
              <h3 style={{ fontSize: '24px', fontWeight: 900, background: 'linear-gradient(135deg, #86efac, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '12px' }}>
                Сообщение отправлено!
              </h3>
              <p style={{ color: 'var(--text-mid)', marginBottom: '28px' }}>Отвечу в течение 24 часов.</p>
              <button onClick={() => setSent(false)} style={{
                background: 'transparent', border: '1px solid var(--border-glow)',
                color: 'var(--text-mid)', padding: '12px 28px', borderRadius: '10px',
                fontFamily: 'var(--font-mono)', fontSize: '13px', cursor: 'pointer',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = '#c4b5fd'; e.currentTarget.style.borderColor = '#c4b5fd'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-mid)'; e.currentTarget.style.borderColor = 'var(--border-glow)'; }}
              >
                Написать ещё
              </button>
            </div>
          ) : (
            <>
              <div className="field-wrap">
                <label className="field-label">Ваше имя</label>
                <input type="text" className="field-input" placeholder="Иван Иванов" />
              </div>
              <div className="field-wrap">
                <label className="field-label">Email</label>
                <input type="email" className="field-input" placeholder="example@mail.com" />
              </div>
              <div className="field-wrap">
                <label className="field-label">Сообщение</label>
                <textarea rows="5" className="field-input" placeholder="Ваш текст..." style={{ fontFamily: 'var(--font-display)', resize: 'vertical' }} />
              </div>
              <button className="submit-btn" onClick={() => setSent(true)}>
                Отправить сообщение →
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}