function Contacts() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '50px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '32px', color: '#111827', marginBottom: '40px', fontWeight: '700' }}>Контакты</h1>
      
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        
        {/* Карточка контактов автора */}
        <div style={{ flex: '1 1 350px', backgroundColor: '#1a2332', color: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', boxSizing: 'border-box' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: '700' }}>Разработчик проекта</h3>
          <p style={{ margin: '12px 0', fontSize: '16px' }}><strong>Имя:</strong> Ruslan Andamasov</p>
          <p style={{ margin: '12px 0', fontSize: '16px' }}><strong>Email:</strong> andamasovruslan444@gmail.com</p>
          <p style={{ margin: '12px 0', fontSize: '16px' }}>
            <strong>GitHub:</strong> <a href="https://github.com/Rysl1kk" target="_blank" rel="noreferrer" style={{ color: '#60a5fa', textDecoration: 'none' }}>github.com/Rysl1kk</a>
          </p>
          <div style={{ marginTop: '40px', borderTop: '1px solid #374151', paddingTop: '20px', fontSize: '14px', color: '#9ca3af', lineHeight: '1.4' }}>
            Проект создан в рамках практического задания по веб-разработке на библиотеке React.
          </div>
        </div>

        {/* Форма для связи */}
        <div style={{ flex: '1 1 350px', backgroundColor: 'white', padding: '35px', borderRadius: '16px', border: '1px solid #e5e7eb', boxSizing: 'border-box' }}>
          <h3 style={{ fontSize: '22px', color: '#111827', marginBottom: '20px', marginTop: 0, fontWeight: '700' }}>Остались вопросы?</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontSize: '14px', color: '#4b5563', marginBottom: '6px', fontWeight: '500' }}>Ваше имя</label>
              <input type="text" placeholder="Иван" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', boxSizing: 'border-box', fontSize: '15px' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', color: '#4b5563', marginBottom: '6px', fontWeight: '500' }}>Ваш Email</label>
              <input type="email" placeholder="example@mail.com" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', boxSizing: 'border-box', fontSize: '15px' }} />
            </div>
            <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', width: '100%', fontWeight: '600', cursor: 'pointer', fontSize: '16px' }}>
              Отправить заявку
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contacts;