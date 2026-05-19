function Courses() {
  const list = [
    { title: 'Frontend-разработчик', desc: 'С нуля до первых проектов. Изучите верстку, адаптив и основы программирования.', time: '3 месяца' },
    { title: 'Разработчик на React & Next.js', desc: 'Продвинутый уровень для тех, кто хочет создавать сложные одностраничные системы.', time: '4 месяца' },
    { title: 'Основы Python', desc: 'Идеальный старт для backend-разработки. Написание ботов, скриптов и работа с базами данных.', time: '2 месяца' },
  ];

  return (
    <div style={{ padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '32px', color: '#111827', marginBottom: '10px', fontWeight: '700' }}>Наши обучающие направления</h1>
      <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '40px' }}>Выберите подходящий курс и начните учиться бесплатно</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
        {list.map((item, index) => (
          <div key={index} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '12px', backgroundColor: '#e0f2fe', color: '#0369a1', padding: '4px 8px', borderRadius: '6px', fontWeight: 'bold' }}>{item.time}</span>
              <h3 style={{ fontSize: '22px', color: '#1a2332', marginTop: '12px', marginBottom: '10px', fontWeight: '700' }}>{item.title}</h3>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
            </div>
            <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', marginTop: '20px', fontWeight: '600', width: '100%' }}>
              Записаться
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;