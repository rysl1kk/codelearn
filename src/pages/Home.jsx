import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const FEATURES = [
  {
    icon: '⚡',
    tag: 'HTML5 & CSS3',
    desc: 'Создание архитектуры сайтов, работа с сетками Flexbox/Grid и адаптивность.',
    glow: 'rgba(124,58,237,0.35)',
    border: 'rgba(124,58,237,0.25)',
  },
  {
    icon: '🟨',
    tag: 'JavaScript ES6+',
    desc: 'Основы алгоритмов, управление элементами страницы и динамика.',
    glow: 'rgba(234,179,8,0.3)',
    border: 'rgba(234,179,8,0.2)',
  },
  {
    icon: '⚛️',
    tag: 'React Ecosystem',
    desc: 'Компонентный подход, состояние приложений и создание SPA.',
    glow: 'rgba(6,182,212,0.3)',
    border: 'rgba(6,182,212,0.2)',
  },
];

const STATS = [
  { value: '3', label: 'Курса', suffix: '+' },
  { value: '120', label: 'Вопросов', suffix: '+' },
  { value: '100', label: 'Бесплатно', suffix: '%' },
];

export default function Home() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      speed: Math.random() * 0.15 + 0.05,
      alpha: Math.random(),
    }));
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      stars.forEach(s => {
        s.alpha += s.speed * 0.03;
        ctx.globalAlpha = Math.abs(Math.sin(s.alpha)) * 0.7 + 0.1;
        ctx.fillStyle = '#c4b5fd';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Звёздный холст */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* HERO */}
      <section style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 48px 80px',
      }}>
        <style>{`
          @keyframes heroUp {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes badgePop {
            from { opacity: 0; transform: scale(0.85); }
            to   { opacity: 1; transform: scale(1); }
          }
          @keyframes borderRotate {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          .hero-badge {
            display: inline-flex; align-items: center; gap: 8px;
            background: rgba(124,58,237,0.12);
            border: 1px solid rgba(124,58,237,0.3);
            color: #c4b5fd;
            font-family: var(--font-mono);
            font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
            padding: 7px 18px; border-radius: 100px;
            margin-bottom: 36px;
            animation: badgePop 0.5s ease-out;
          }
          .hero-title {
            font-size: clamp(48px, 7vw, 96px);
            font-weight: 900;
            line-height: 1.05;
            letter-spacing: -0.03em;
            margin-bottom: 28px;
            animation: heroUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both;
          }
          .hero-sub {
            font-size: clamp(16px, 2vw, 20px);
            color: var(--text-mid);
            max-width: 600px;
            line-height: 1.7;
            margin-bottom: 52px;
            animation: heroUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s both;
          }
          .cta-wrap {
            display: flex; gap: 16px; align-items: center; flex-wrap: wrap; justify-content: center;
            animation: heroUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s both;
          }
          .btn-primary {
            background: linear-gradient(135deg, var(--neon-primary), var(--neon-secondary));
            color: #fff; border: none;
            padding: 18px 44px; border-radius: 12px;
            font-family: var(--font-mono); font-size: 15px; font-weight: 700;
            letter-spacing: 0.04em; cursor: pointer;
            box-shadow: 0 0 30px rgba(124,58,237,0.4);
            transition: all 0.3s;
            position: relative; overflow: hidden;
          }
          .btn-primary::before {
            content: '';
            position: absolute; inset: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
            opacity: 0; transition: opacity 0.3s;
          }
          .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 0 60px rgba(124,58,237,0.6); }
          .btn-primary:hover::before { opacity: 1; }
          .btn-secondary {
            background: transparent;
            border: 1px solid var(--border-glow);
            color: var(--text-mid);
            padding: 17px 36px; border-radius: 12px;
            font-family: var(--font-mono); font-size: 14px; font-weight: 600;
            cursor: pointer; transition: all 0.3s;
          }
          .btn-secondary:hover { border-color: #c4b5fd; color: #c4b5fd; background: rgba(124,58,237,0.08); }

          .stats-row {
            display: flex; gap: 0; margin-top: 90px; width: 100%; max-width: 700px;
            border: 1px solid var(--border-dim);
            border-radius: 20px;
            overflow: hidden;
            background: var(--bg-glass);
            backdrop-filter: blur(16px);
            animation: heroUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s both;
          }
          .stat-item {
            flex: 1; padding: 28px 20px; text-align: center;
            border-right: 1px solid var(--border-dim);
            transition: background 0.3s;
          }
          .stat-item:last-child { border-right: none; }
          .stat-item:hover { background: rgba(124,58,237,0.07); }
          .stat-val {
            font-size: 42px; font-weight: 900;
            background: linear-gradient(135deg, #c4b5fd, #67e8f9);
            WebkitBackgroundClip: text; WebkitTextFillColor: transparent;
            background-clip: text; -webkit-text-fill-color: transparent;
            font-family: var(--font-mono);
          }
          .stat-lbl { font-size: 13px; color: var(--text-mid); margin-top: 4px; letter-spacing: 0.06em; }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            padding: 80px 48px 100px;
            position: relative; z-index: 1;
          }
          @media (max-width: 900px) {
            .features-grid { grid-template-columns: 1fr; padding: 60px 24px; }
          }
          .feat-card {
            background: var(--bg-glass);
            border: 1px solid var(--border-dim);
            border-radius: 20px;
            padding: 36px 32px;
            backdrop-filter: blur(14px);
            transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
            animation: heroUp 0.7s ease both;
            position: relative; overflow: hidden;
          }
          .feat-card::before {
            content: '';
            position: absolute; inset: 0;
            background: radial-gradient(ellipse at top left, var(--card-glow, rgba(124,58,237,0.1)), transparent 70%);
            opacity: 0; transition: opacity 0.4s;
          }
          .feat-card:hover { transform: translateY(-8px); border-color: var(--card-border, rgba(124,58,237,0.35)); }
          .feat-card:hover::before { opacity: 1; }
          .feat-icon { font-size: 36px; margin-bottom: 20px; display: block; }
          .feat-tag {
            font-family: var(--font-mono); font-size: 13px; font-weight: 700;
            letter-spacing: 0.08em; color: #c4b5fd; margin-bottom: 12px;
          }
          .feat-desc { font-size: 15px; color: var(--text-mid); line-height: 1.65; }
          .section-label {
            text-align: center;
            font-family: var(--font-mono);
            font-size: 11px; letter-spacing: 0.15em;
            color: var(--text-dim); text-transform: uppercase;
            margin-bottom: 20px;
            position: relative; z-index: 1;
          }
          .section-title {
            text-align: center;
            font-size: clamp(28px, 4vw, 48px); font-weight: 900;
            margin-bottom: 60px;
            position: relative; z-index: 1;
          }
        `}</style>

        <div className="hero-badge">
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--neon-green)', display: 'inline-block', boxShadow: '0 0 8px var(--neon-green)' }} />
          ИНТЕРАКТИВНАЯ СРЕДА ПРОГРАММИРОВАНИЯ
        </div>

        <h1 className="hero-title">
          <span style={{ background: 'linear-gradient(135deg, #f0f4ff 30%, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Получай знания
          </span>
          <br />
          <span style={{ background: 'linear-gradient(135deg, #c4b5fd 0%, #67e8f9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            в новом формате
          </span>
        </h1>

        <p className="hero-sub">
          Забудь про скучные лекции — проходи динамические квизы и отслеживай свой прогресс в реальном времени.
        </p>

        <div className="cta-wrap">
          <button className="btn-primary" onClick={() => navigate('/quiz')}>
            Начать обучение 🚀
          </button>
          <button className="btn-secondary" onClick={() => navigate('/courses')}>
            Смотреть курсы →
          </button>
        </div>

        <div className="stats-row">
          {STATS.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-val" style={{ background: 'linear-gradient(135deg, #c4b5fd, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {s.value}{s.suffix}
              </div>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <div style={{ padding: '0 0 20px', position: 'relative', zIndex: 1 }}>
        <p className="section-label">// Технологии</p>
        <h2 className="section-title">
          <span style={{ background: 'linear-gradient(135deg, #f0f4ff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Что ты изучишь
          </span>
        </h2>
      </div>

      <div className="features-grid">
        {FEATURES.map((f, i) => (
          <div
            key={i}
            className="feat-card"
            style={{ '--card-glow': f.glow, '--card-border': f.border, animationDelay: `${0.6 + i * 0.15}s` }}
          >
            <span className="feat-icon">{f.icon}</span>
            <div className="feat-tag">{f.tag}</div>
            <p className="feat-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}