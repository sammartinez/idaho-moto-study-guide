import { useState, useEffect } from 'react'
import StudyGuide from './components/StudyGuide'
import PracticeTest from './components/PracticeTest'
import './index.css'

export default function App() {
  const [view, setView] = useState('home')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(t => {
      const next = t === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', next)
      return next
    })
  }

  return (
    <div className="app">
      {view === 'home' && <Home setView={setView} theme={theme} toggleTheme={toggleTheme} />}
      {view === 'study' && <StudyGuide onBack={() => setView('home')} theme={theme} toggleTheme={toggleTheme} />}
      {view === 'test' && <PracticeTest onBack={() => setView('home')} total={25} pass={20} theme={theme} toggleTheme={toggleTheme} />}
      {view === 'test2' && <PracticeTest onBack={() => setView('home')} total={50} pass={40} theme={theme} toggleTheme={toggleTheme} />}
    </div>
  )
}

function Home({ setView, theme, toggleTheme }) {
  return (
    <div className="home">
      <button className="theme-btn home-theme-btn" onClick={toggleTheme} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
        {theme === 'dark' ? '☀' : '🌙'}
      </button>
      <div className="home-inner">
        <div className="home-badge">IDAHO DMV · 2025</div>
        <h1 className="home-title">Motorcycle<br />Rider Exam</h1>
        <p className="home-sub">Study guide &amp; practice tests built from the official 2025 Idaho Motorcycle Rider's Handbook</p>
        <div className="home-cards">
          <button className="home-card card-study" onClick={() => setView('study')}>
            <span className="card-icon">📖</span>
            <span className="card-label">Study Guide</span>
            <span className="card-desc">Fees, laws, gear, lane positions, braking, hazards, SIPDE &amp; flash cards</span>
          </button>
          <button className="home-card card-test" onClick={() => setView('test')}>
            <span className="card-icon">📝</span>
            <span className="card-label">Practice Test</span>
            <span className="card-desc">25 random questions — pass with 20 correct, just like the real exam</span>
          </button>
          <button className="home-card card-test2" onClick={() => setView('test2')} style={{ gridColumn: '1 / -1' }}>
            <span className="card-icon">🏁</span>
            <span className="card-label">Extended Practice</span>
            <span className="card-desc">50 random questions across the full bank — questions and answer choices shuffled every attempt</span>
          </button>
        </div>
        <p className="home-footer">Works offline · No account needed · Source: 2025 Idaho Motorcycle Rider's Handbook</p>
      </div>
    </div>
  )
}
