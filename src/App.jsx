import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Quiz from './pages/Quiz'; 

function App() {
  return (
    <Router>
      {/* Встраиваем CSS-стили для анимаций наведения, чтобы сайт ожил */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-link {
          color: #9ca3af;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: #818cf8 !important;
          transform: translateY(-2px);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', 
        fontFamily: '"Inter", "Segoe UI", sans-serif',
        backgroundColor: '#070a13', // Еще более глубокий премиальный темный
        color: '#f3f4f6',
        backgroundImage: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 600px), radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.12), transparent 600px)',
        overflowX: 'hidden'
      }}>
        
        {/* АНИМИРОВАННАЯ ШАПКА */}
        <header style={{ 
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(7, 10, 19, 0.75)', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '20px 40px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          flexWrap: 'wrap',
          gap: '15px',
          animation: 'fadeIn 0.6s ease out'
        }}>
          <div style={{ 
            fontSize: '26px', 
            fontWeight: '900', 
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px'
          }}>
            CodeLearn_
          </div>
          
          <nav style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            <Link to="/" className="nav-link">Главная</Link>
            <Link to="/courses" className="nav-link">Курсы</Link>
            <Link to="/about" className="nav-link">О нас</Link>
            <Link to="/contacts" className="nav-link">Контакты</Link>
          </nav>
        </header>

        {/* ОСНОВНОЙ КОНТЕНТ */}
        <main style={{ 
          flexGrow: 1, 
          padding: '60px 20px', 
          maxWidth: '1200px', 
          width: '100%', 
          margin: '0 auto',
          boxSizing: 'border-box'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/quiz" element={<Quiz />} /> 
          </Routes>
        </main>

        <footer style={{ 
          backgroundColor: '#04060b', 
          padding: '30px 20px', 
          textAlign: 'center', 
          fontSize: '14px',
          color: '#4b5563',
          borderTop: '1px solid rgba(255, 255, 255, 0.03)',
          marginTop: 'auto'
        }}>
          <p style={{ margin: 0 }}>© 2026 CodeLearn. Сделано со стилем.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;