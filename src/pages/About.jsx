function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '50px 20px', fontFamily: 'sans-serif', color: '#374151' }}>
      <h1 style={{ textAlign: 'center', fontSize: '36px', color: '#111827', marginBottom: '20px', fontWeight: '700' }}>О нашей академии</h1>
      <p style={{ fontSize: '18px', textAlign: 'center', color: '#6b7280', marginBottom: '40px', lineHeight: '1.6' }}>
        CodeLearn — это современное пространство для тех, кто хочет освоить программирование без лишней воды, скучной теории и бесконечных конспектов.
      </p>
      
      {/* Счётчики/Статистика */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '5px' }}>
        <div style={{ flex: '1 1 200px', textAlign: 'center', padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '32px', color: '#2563eb', margin: '0 0 5px 0', fontWeight: '800' }}>5 000+</h3>
          <p style={{ margin: 0, color: '#4b5563', fontSize: '14px' }}>Активных студентов</p>
        </div>
        <div style={{ flex: '1 1 200px', textAlign: 'center', padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '32px', color: '#2563eb', margin: '0 0 5px 0', fontWeight: '800' }}>15+</h3>
          <p style={{ margin: 0, color: '#4b5563', fontSize: '14px' }}>Авторских программ</p>
        </div>
        <div style={{ flex: '1 1 200px', textAlign: 'center', padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '32px', color: '#2563eb', margin: '0 0 5px 0', fontWeight: '800' }}>94%</h3>
          <p style={{ margin: 0, color: '#4b5563', fontSize: '14px' }}>Успешных трудоустройств</p>
        </div>
      </div>

      <h2 style={{ fontSize: '24px', color: '#111827', marginTop: '40px', marginBottom: '12px', fontWeight: '700' }}>Наш главный принцип</h2>
      <p style={{ lineHeight: '1.6', margin: 0 }}>
        Мы верим, что код пишется только руками. Именно поэтому 80% времени любого нашего курса — это чистая практика в редакторе кода, создание реальных проектов для портфолио и разбор ошибок вместе с опытными менторами из индустрии.
      </p>
    </div>
  );
}

export default About;