import React from 'react';

const PILLARS = [
  { icon: '⚡', title: 'Мгновенная проверка', desc: 'Каждое знание тестируется сразу — никаких домашних заданий через неделю.' },
  { icon: '🎯', title: 'Практика с первого дня', desc: 'Квизы построены на реальных примерах кода, а не абстрактной теории.' },
  { icon: '📈', title: 'Прогресс в реальном времени', desc: 'Видишь свой результат сразу после каждого ответа.' },
  { icon: '🌐', title: 'Доступно всем', desc: 'Никаких барьеров — просто открой браузер и начни учиться.' },
];

export default function About() {
  return (
    <div style={{ width: '100%', padding: '80px 48px 100px', boxSizing: 'border-box' }}>
      <style>{`
        @keyframes aboutUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .about-hero {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
          max-width: 1200px; margin: 0 auto 100px;
          animation: aboutUp 0.7s ease both;
        }
        @media (max-width: 800px) {
          .about-hero { grid-template-columns: 1fr; gap: 40px; }
        }
        .about-label {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.15em;
          color: var(--text-dim); text-transform: uppercase; margin-bottom: 20px;
        }
        .about-title {
          font-size: clamp(36px, 5vw, 64px); font-weight: 900; line-height: 1.1;
          margin-bottom: 28px;
        }
        .about-body {
          color: var(--text-mid); font-size: 17px; line-height: 1.75; margin-bottom: 20px;
        }
        .terminal-box {
          background: rgba(5, 8, 20, 0.8);
          border: 1px solid var(--border-dim);
          border-radius: 16px;
          overflow: hidden;
          font-family: var(--font-mono);
        }
        .terminal-bar {
          padding: 12px 16px;
          background: rgba(124,58,237,0.08);
          border-bottom: 1px solid var(--border-dim);
          display: flex; align-items: center; gap: 8px;
        }
        .t-dot { width: 10px; height: 10px; border-radius: 50%; }
        .terminal-body { padding: 24px 20px; }
        .t-line { font-size: 13px; line-height: 2; }
        .t-comment { color: #4b5563; }
        .t-key { color: #67e8f9; }
        .t-val { color: #c4b5fd; }
        .t-str { color: #86efac; }
        .t-num { color: #fb923c; }

        .pillars-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
          max-width: 1200px; margin: 0 auto;
        }
        @media (max-width: 700px) {
          .pillars-grid { grid-template-columns: 1fr; }
        }
        .pillar-card {
          background: var(--bg-glass);
          border: 1px solid var(--border-dim);
          border-radius: 18px;
          padding: 32px 28px;
          backdrop-filter: blur(12px);
          display: flex; gap: 20px; align-items: flex-start;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          animation: aboutUp 0.6s ease both;
        }
        .pillar-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-glow);
          background: rgba(124,58,237,0.07);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .pillar-icon {
          font-size: 28px; flex-shrink: 0;
          width: 52px; height: 52px;
          border-radius: 12px;
          background: rgba(124,58,237,0.12);
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--border-dim);
        }
        .pillar-title { font-size: 17px; font-weight: 800; color: #f0f4ff; margin-bottom: 8px; }
        .pillar-desc { font-size: 14px; color: var(--text-mid); line-height: 1.65; }

        .section-divider {
          width: 100%; max-width: 1200px; margin: 0 auto 60px;
          display: flex; align-items: center; gap: 20px;
        }
        .divider-line { flex: 1; height: 1px; background: var(--border-dim); }
        .divider-label { font-family: var(--font-mono); font-size: 11px; color: var(--text-dim); letter-spacing: 0.12em; white-space: nowrap; }
      `}</style>

      {/* HERO */}
      <div className="about-hero">
        <div>
          <p className="about-label">// О проекте</p>
          <h2 className="about-title">
            <span style={{ background: 'linear-gradient(135deg, #f0f4ff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              О проекте
            </span>
            <br />
            <span style={{ background: 'linear-gradient(135deg, #c4b5fd, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              CodeLearn
            </span>
          </h2>
          <p className="about-body">
            <strong style={{ color: '#c4b5fd' }}>CodeLearn</strong> — это интерактивная образовательная среда, созданная для того, чтобы сделать первый шаг в веб-разработку максимально понятным, увлекательным и доступным.
          </p>
          <p className="about-body" style={{ marginBottom: 0 }}>
            Мы верим, что сухая теория без практики не работает. Именно поэтому наше обучение построено вокруг мгновенной проверки знаний, интерактивных квизов и закрепления материала на реальных примерах кода. Начните свой путь в IT сегодня!
          </p>
        </div>

        {/* Терминал */}
        <div className="terminal-box">
          <div className="terminal-bar">
            <div className="t-dot" style={{ background: '#ef4444' }} />
            <div className="t-dot" style={{ background: '#eab308' }} />
            <div className="t-dot" style={{ background: '#22c55e' }} />
            <span style={{ marginLeft: 8, fontSize: 12, color: 'var(--text-dim)' }}>codelearn.config.js</span>
          </div>
          <div className="terminal-body">
            <div className="t-line t-comment">// Наша философия</div>
            <div className="t-line">
              <span className="t-key">const</span> <span style={{ color: '#f0f4ff' }}>CodeLearn</span> = {'{'}
            </div>
            <div className="t-line" style={{ paddingLeft: 20 }}>
              <span className="t-key">mission:</span> <span className="t-str">'Сделать IT доступным'</span>,
            </div>
            <div className="t-line" style={{ paddingLeft: 20 }}>
              <span className="t-key">approach:</span> <span className="t-str">'Практика с первого дня'</span>,
            </div>
            <div className="t-line" style={{ paddingLeft: 20 }}>
              <span className="t-key">courses:</span> <span className="t-num">3</span>,
            </div>
            <div className="t-line" style={{ paddingLeft: 20 }}>
              <span className="t-key">quizzes:</span> <span className="t-num">120</span>,
            </div>
            <div className="t-line" style={{ paddingLeft: 20 }}>
              <span className="t-key">price:</span> <span className="t-num">0</span>,
            </div>
            <div className="t-line">{'}'}</div>
            <div className="t-line" style={{ marginTop: 8 }}>
              <span className="t-comment">// Результат:</span>
            </div>
            <div className="t-line">
              <span style={{ color: '#86efac' }}>✓</span> <span style={{ color: '#c4b5fd' }}>Студент</span> → <span style={{ color: '#67e8f9' }}>Разработчик</span>
            </div>
          </div>
        </div>
      </div>

      {/* PILLARS */}
      <div className="section-divider">
        <div className="divider-line" />
        <span className="divider-label">// Принципы обучения</span>
        <div className="divider-line" />
      </div>

      <div className="pillars-grid">
        {PILLARS.map((p, i) => (
          <div className="pillar-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="pillar-icon">{p.icon}</div>
            <div>
              <div className="pillar-title">{p.title}</div>
              <div className="pillar-desc">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}