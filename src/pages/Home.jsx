import { Link } from 'react-router-dom'; // Импортируем Link

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', itemsAlign: 'center', textAlign: 'center', padding: '60px 20px', fontFamily: 'sans-serif' }}>
      
      <h1 style={{ fontSize: '48px', fontWeight: '800', color: '#111827', marginBottom: '20px', maxWidth: '800px', lineHeight: '1.2', margin: '0 auto 20px auto' }}>
        Изучай программирование <span style={{ color: '#2563eb' }}>легко</span>
      </h1>
      
      <p style={{ fontSize: '19px', color: '#4b5563', maxWidth: '650px', marginBottom: '35px', lineHeight: '1.6', margin: '0 auto 35px auto' }}>
        Современная платформа для обучения React, JavaScript и веб-разработке. Начните свой путь в IT прямо сейчас.
      </p>
      
      {/* Кнопка превратилась в Link и теперь перенаправляет на страницу /quiz */}
      <Link to="/quiz" style={{ display: 'inline-block', textDecoration: 'none', backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '14px 36px', borderRadius: '10px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)', marginBottom: '60px', transition: '0.2s', width: 'fit-content', margin: '0 auto 60px auto' }}>
        Начать обучение
      </Link>

      {/* Сетка с карточками */}
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', border: '1px solid #e5e7eb', width: '280px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', textAlign: 'left', boxSizing: 'border-box' }}>
          <div style={{ backgroundColor: '#eff6ff', color: '#2563eb', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '15px' }}>&lt;/&gt;</div>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1f2937', margin: '0 0 8px 0' }}>HTML & CSS</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', margin: 0, lineHeight: '1.4' }}>Основа создания сайтов. Верстка и адаптивный дизайн.</p>
        </div>

        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', border: '1px solid #e5e7eb', width: '280px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', textAlign: 'left', boxSizing: 'border-box' }}>
          <div style={{ backgroundColor: '#fef3c7', color: '#d97706', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '15px' }}>JS</div>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1f2937', margin: '0 0 8px 0' }}>JavaScript</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', margin: 0, lineHeight: '1.4' }}>Язык интерактивных сайтов. Логика, анимации и работа с API.</p>
        </div>

        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', border: '1px solid #e5e7eb', width: '280px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', textAlign: 'left', boxSizing: 'border-box' }}>
          <div style={{ backgroundColor: '#ecfeff', color: '#0891b2', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '15px' }}>⚛</div>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1f2937', margin: '0 0 8px 0' }}>React</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', margin: 0, lineHeight: '1.4' }}>Создание современных интерфейсов и мощных веб-приложений.</p>
        </div>

      </div>
    </div>
  );
}

export default Home;