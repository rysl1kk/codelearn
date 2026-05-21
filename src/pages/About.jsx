import React from 'react';

export default function About() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '40px',
      borderRadius: '24px',
      backgroundColor: 'rgba(30, 41, 59, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.04)',
      backdropFilter: 'blur(10px)',
    }}>
      <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>О проекте CodeLearn</h2>
      <p style={{ color: '#d1d5db', fontSize: '17px', lineHeight: '1.7', marginBottom: '20px' }}>
        <strong>CodeLearn</strong> — это интерактивная образовательная среда, созданная для того, чтобы сделать первый шаг в веб-разработку максимально понятным, увлекательным и доступным.
      </p>
      <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7' }}>
        Мы верим, что сухая теория без практики не работает. Именно поэтому наше обучение построено вокруг мгновенной проверки знаний, интерактивных квизов и закрепления материала на реальных примерах кода. Начните свой путь в IT сегодня!
      </p>
    </div>
  );
}