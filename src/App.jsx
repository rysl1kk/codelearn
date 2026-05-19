import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Quiz from './pages/Quiz'; // 1. ИМПОРТИРУЕМ СТРАНИЦУ ТЕСТА

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f9fafb', margin: 0 }}>
        
        {/* ШАПКА САЙТА */}
        <header style={{ backgroundColor: '#1a2332', color: 'white', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '0.5px' }}>CodeLearn</div>
          
          <nav style={{ display: 'flex', gap: '25px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>Главная</Link>
            <Link to="/courses" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>Курсы</Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>О нас</Link>
            <Link to="/contacts" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>Контакты</Link>
          </nav>
        </header>

        {/* ОСНОВНОЙ КОНТЕНТ */}
        <main style={{ flexGrow: 1, padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/quiz" element={<Quiz />} /> {/* 2. ДОБАВЛЯЕМ СЮДА МАРШРУТ ДЛЯ ТЕСТА */}
          </Routes>
        </main>

        {/* ПОДВАЛ */}
        <footer style={{ backgroundColor: '#111827', color: '#9ca3af', textAlign: 'center', padding: '15px', fontSize: '14px' }}>
          © 2026 CodeLearn. Все права защищены.
        </footer>

      </div>
    </Router>
  );
}

export default App;