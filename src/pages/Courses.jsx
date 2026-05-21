import React from 'react';

export default function Courses() {
  const coursesList = [
    { title: "Веб-разработчик с нуля", level: "Для новичков", duration: "3 месяца", color: "linear-gradient(135deg, #3b82f6, #1d4ed8)" },
    { title: "Продвинутый JavaScript", level: "Средний", duration: "2 месяца", color: "linear-gradient(135deg, #eab308, #ca8a04)" },
    { title: "Разработка на React", level: "Продвинутый", duration: "1.5 месяца", color: "linear-gradient(135deg, #06b6d4, #0891b2)" }
  ];

  return (
    <div style={{ padding: '20px 0' }}>
      <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '30px', textAlign: 'center' }}>Доступные направления</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {coursesList.map((course, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '25px',
            borderRadius: '20px',
            backgroundColor: 'rgba(30, 41, 59, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <div>
              <span style={{ 
                background: course.color, 
                color: '#fff', 
                padding: '4px 10px', 
                borderRadius: '8px', 
                fontSize: '12px', 
                fontWeight: '700' 
              }}>{course.level}</span>
              <h3 style={{ margin: '10px 0 5px 0', fontSize: '20px', color: '#fff' }}>{course.title}</h3>
              <p style={{ margin: 0, color: '#9ca3af', fontSize: '14px' }}>Продолжительность: {course.duration}</p>
            </div>
            <button style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '10px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}>Подробнее</button>
          </div>
        ))}
      </div>
    </div>
  );
}