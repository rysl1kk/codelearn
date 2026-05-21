import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const COURSES = [
  {
    title: 'Веб-разработчик с нуля',
    level: 'Для новичков',
    duration: '3 месяца',
    modules: 12,
    color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    glow: 'rgba(59,130,246,0.35)',
    border: 'rgba(59,130,246,0.3)',
    icon: '🌐',
    tags: ['HTML', 'CSS', 'Git'],
  },
  {
    title: 'Продвинутый JavaScript',
    level: 'Средний',
    duration: '2 месяца',
    modules: 8,
    color: 'linear-gradient(135deg, #eab308, #ca8a04)',
    glow: 'rgba(234,179,8,0.35)',
    border: 'rgba(234,179,8,0.3)',
    icon: '🟨',
    tags: ['ES6+', 'Async', 'DOM'],
  },
  {
    title: 'Разработка на React',
    level: 'Продвинутый',
    duration: '1.5 месяца',
    modules: 6,
    color: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    glow: 'rgba(6,182,212,0.35)',
    border: 'rgba(6,182,212,0.3)',
    icon: '⚛️',
    tags: ['React', 'Hooks', 'SPA'],
  },
];

export default function Courses() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', padding: '80px 48px 100px', boxSizing: 'border-box' }}>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .courses-header {
          text-align: center; margin-bottom: 70px;
          animation: slideUp 0.7s ease both;
        }
        .courses-section-label {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.15em;
          color: var(--text-dim); text-transform: uppercase; margin-bottom: 16px;
        }
        .courses-title {
          font-size: clamp(32px, 5vw, 60px); font-weight: 900;
          background: linear-gradient(135deg, #f0f4ff 40%, #94a3b8);
          WebkitBackgroundClip: text; WebkitTextFillColor: transparent;
          background-clip: text; -webkit-text-fill-color: transparent;
        }
        .course-card {
          position: relative; overflow: hidden;
          display: grid; grid-template-columns: auto 1fr auto;
          align-items: center; gap: 32px;
          padding: 36px 40px;
          border-radius: 20px;
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-dim);
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          cursor: default;
          animation: slideUp 0.6s ease both;
        }
        .course-card::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 4px;
          background: var(--card-color);
          border-radius: 4px 0 0 4px;
          transition: width 0.4s ease;
        }
        .course-card:hover { border-color: var(--card-border); transform: translateX(6px); }
        .course-card:hover::before { width: 6px; box-shadow: 4px 0 20px var(--card-glow); }
        .course-icon-wrap {
          width: 72px; height: 72px;
          border-radius: 16px;
          background: var(--card-color);
          display: flex; align-items: center; justify-content: center;
          font-size: 32px;
          flex-shrink: 0;
          transition: all 0.4s;
        }
        .course-card:hover .course-icon-wrap {
          box-shadow: 0 0 30px var(--card-glow);
          transform: scale(1.05);
        }
        .course-level-badge {
          display: inline-flex; align-items: center;
          background: var(--card-color);
          color: #fff;
          font-family: var(--font-mono);
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          padding: 4px 12px; border-radius: 6px;
          margin-bottom: 10px;
        }
        .course-tag {
          font-family: var(--font-mono); font-size: 11px;
          color: var(--text-dim);
          border: 1px solid var(--border-dim);
          padding: 3px 10px; border-radius: 6px;
          transition: all 0.3s;
        }
        .course-card:hover .course-tag { border-color: var(--card-border); color: var(--text-mid); }
        .course-meta {
          font-family: var(--font-mono); font-size: 12px; color: var(--text-dim); margin-top: 8px;
        }
        .course-btn {
          background: transparent;
          border: 1px solid var(--card-border);
          color: var(--text-mid);
          font-family: var(--font-mono); font-size: 13px; font-weight: 700;
          padding: 14px 28px; border-radius: 12px;
          cursor: pointer; white-space: nowrap;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        .course-card:hover .course-btn {
          background: var(--card-color);
          color: #fff;
          box-shadow: 0 0 20px var(--card-glow);
        }
        @media (max-width: 700px) {
          .course-card { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="courses-header">
        <p className="courses-section-label">// Программа обучения</p>
        <h2 className="courses-title">Доступные направления</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '960px', margin: '0 auto' }}>
        {COURSES.map((c, i) => (
          <div
            key={i}
            className="course-card"
            style={{
              '--card-color': c.color,
              '--card-glow': c.glow,
              '--card-border': c.border,
              animationDelay: `${i * 0.12}s`,
            }}
          >
            <div className="course-icon-wrap">{c.icon}</div>

            <div>
              <div className="course-level-badge">{c.level}</div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#f0f4ff', margin: '0 0 10px' }}>{c.title}</h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
                {c.tags.map(t => <span key={t} className="course-tag">{t}</span>)}
              </div>
              <p className="course-meta">
                ⏱ {c.duration} &nbsp;·&nbsp; 📦 {c.modules} модулей
              </p>
            </div>

            <button className="course-btn">Подробнее →</button>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{
        marginTop: '80px', textAlign: 'center',
        padding: '60px 40px',
        border: '1px solid var(--border-dim)',
        borderRadius: '24px',
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(16px)',
        maxWidth: '700px',
        margin: '80px auto 0',
      }}>
        <div style={{ fontSize: '40px', marginBottom: '20px' }}>🚀</div>
        <h3 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px', background: 'linear-gradient(135deg, #c4b5fd, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Готов проверить знания?
        </h3>
        <p style={{ color: 'var(--text-mid)', marginBottom: '32px', lineHeight: 1.6 }}>
          Пройди интерактивный квиз и узнай, с какого курса начать.
        </p>
        <button
          onClick={() => navigate('/quiz')}
          style={{
            background: 'linear-gradient(135deg, var(--neon-primary), var(--neon-secondary))',
            color: '#fff', border: 'none',
            padding: '16px 40px', borderRadius: '12px',
            fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 0 30px rgba(124,58,237,0.4)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 60px rgba(124,58,237,0.6)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(124,58,237,0.4)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Начать квиз
        </button>
      </div>
    </div>
  );
}