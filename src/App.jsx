import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Quiz from './pages/Quiz';
import './index.css';

const NAV_LINKS = [
  { to: '/',         label: 'Главная' },
  { to: '/courses',  label: 'Курсы' },
  { to: '/about',    label: 'О нас' },
  { to: '/contacts', label: 'Контакты' },
];

function NavLink({ to, label }) {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link to={to} style={{
      position: 'relative',
      color: active ? '#e0d7ff' : 'var(--text-mid)',
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '14px',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-mono)',
      padding: '6px 0',
      transition: 'color 0.3s',
    }}
      onMouseEnter={e => e.currentTarget.style.color = '#c4b5fd'}
      onMouseLeave={e => e.currentTarget.style.color = active ? '#e0d7ff' : 'var(--text-mid)'}
    >
      {active && (
        <span style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, var(--neon-primary), var(--neon-secondary))',
          borderRadius: '2px',
          boxShadow: '0 0 8px var(--neon-primary)',
        }} />
      )}
      {label}
    </Link>
  );
}

function Header() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 48px',
      height: '70px',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      backgroundColor: 'rgba(3, 4, 10, 0.75)',
      borderBottom: '1px solid var(--border-dim)',
      animation: 'fadeDown 0.6s ease-out',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '32px', height: '32px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, var(--neon-primary), var(--neon-secondary))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px',
          boxShadow: '0 0 20px rgba(124,58,237,0.5)',
          animation: 'glowPulse 3s ease-in-out infinite',
        }}>⌬</div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '18px',
          background: 'linear-gradient(90deg, #c4b5fd, #67e8f9)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em',
        }}>CodeLearn_</span>
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {NAV_LINKS.map(n => <NavLink key={n.to} {...n} />)}
        <Link to="/quiz" style={{
          background: 'linear-gradient(135deg, var(--neon-primary), #06b6d4)',
          color: '#fff',
          textDecoration: 'none',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '13px',
          letterSpacing: '0.05em',
          padding: '9px 20px',
          borderRadius: '8px',
          boxShadow: '0 0 20px rgba(124,58,237,0.3)',
          transition: 'all 0.3s',
        }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 35px rgba(124,58,237,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >ЗАПУСТИТЬ КВИЗ ›</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{
      width: '100%',
      padding: '28px 48px',
      borderTop: '1px solid var(--border-dim)',
      backgroundColor: 'rgba(3, 4, 10, 0.9)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
        © 2026 <span style={{ color: '#7c6aff' }}>CodeLearn</span>. Сделано со стилем.
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)' }}>
        v1.0.0 · <span style={{ color: 'var(--neon-green)' }}>●</span> ONLINE
      </span>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app-bg" />
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      }}>
        <Header />
        <main style={{ flexGrow: 1, width: '100%' }}>
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/courses"  element={<Courses />} />
            <Route path="/about"    element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/quiz"     element={<Quiz />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}