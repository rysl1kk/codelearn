import React from 'react';

export default function Courses() {
  const coursesList = [
    { title: "Веб-разработчик с нуля", level: "Для новичков", duration: "3 месяца", color: "linear-gradient(135deg, #3b82f6, #1d4ed8)", delay: "0s" },
    { title: "Продвинутый JavaScript", level: "Средний", duration: "2 месяца", color: "linear-gradient(135deg, #eab308, #ca8a04)", delay: "0.15s" },
    { title: "Разработка на React", level: "Продвинутый", duration: "1.5 месяца", color: "linear-gradient(135deg, #06b6d4, #0891b2)", delay: "0.3s" }
  ];

  return (
    <div style={{ padding: '20px 0' }}>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .course-item {
          display: flex;
          justifyContent: space-between;
          align-items: center;
          padding: 25px;
          borderRadius: 20px;
          backgroundColor: rgba(30, 41, 59, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          flex-wrap: wrap;
          gap: 15px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
        }
        .course-item:hover {
          transform: scale(1.02);
          background-color: rgba(30, 41, 59, 0.35);
          border-color: rgba(99, 102, 241, 0.25);
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }
        .course-btn {
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .course-btn:hover {
          background-color: white;
          color: #070a13;
        }
      `}</style>

      <h2 style={{ fontSize: '32px', fontWeight: '850', marginBottom: '40px', textAlign: 'center' }}>Доступные направления</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        {coursesList.map((course, index) => (
          <div key={index} className="course-item" style={{ animationDelay: course.delay }}>
            <div>
              <span style={{ background: course.color, color: '#fff', padding: '5px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: '800', letterSpacing: '0.5px' }}>{course.level}</span>
              <h3 style={{ margin: '12px 0 6px 0', fontSize: '22px', color: '#fff', fontWeight: '700' }}>{course.title}</h3>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '14px' }}>Продолжительность: {course.duration}</p>
            </div>
            <button className="course-btn">Подробнее</button>
          </div>
        ))}
      </div>
    </div>
  );
}