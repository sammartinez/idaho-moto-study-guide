import { useState, useCallback } from 'react'
import { ALL_QUESTIONS } from '../data/questions'

const LETTERS = ['A', 'B', 'C', 'D']

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function shuffleAnswers(q) {
  const order = shuffle([0, 1, 2, 3])
  return {
    ...q,
    opts: order.map(i => q.opts[i]),
    ans: order.indexOf(q.ans),
  }
}

export default function PracticeTest({ onBack, total = 25, pass = 20 }) {
  const [phase, setPhase] = useState('start') // start | test | results
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [current, setCurrent] = useState(0)
  const [reviewMode, setReviewMode] = useState(false)

  const startTest = useCallback(() => {
    const qs = shuffle(ALL_QUESTIONS).slice(0, total).map(shuffleAnswers)
    setQuestions(qs)
    setAnswers(new Array(total).fill(null))
    setCurrent(0)
    setReviewMode(false)
    setPhase('test')
  }, [total])

  const selectAnswer = (i) => {
    if (answers[current] !== null) return
    setAnswers(prev => { const a = [...prev]; a[current] = i; return a })
  }

  const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.ans ? 1 : 0), 0)
  const passed = score >= pass

  const isExtended = total > 25

  if (phase === 'start') return (
    <div className="page">
      <div className="topbar">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <span className="topbar-title">{isExtended ? 'Extended Practice' : 'Practice Test'}</span>
      </div>
      <div className="page-content">
        <div className="test-start">
          <div className="test-icon">{isExtended ? '🏁' : '📝'}</div>
          <h2>Idaho Motorcycle Knowledge Test</h2>
          <p>
            {total} questions drawn at random from a pool of {ALL_QUESTIONS.length}.<br />
            You need <strong>{pass} correct</strong> to pass
            {isExtended ? ' — a deeper drill across the full question bank.' : ' — same as the real exam.'}
          </p>
          <div className="stats-bar">
            <div className="stat-box"><div className="stat-val">{ALL_QUESTIONS.length}</div><div className="stat-label">Question pool</div></div>
            <div className="stat-box"><div className="stat-val">{total}</div><div className="stat-label">Per attempt</div></div>
            <div className="stat-box"><div className="stat-val green">{pass}</div><div className="stat-label">To pass</div></div>
          </div>
          <button className="start-btn" onClick={startTest}>Start Test →</button>
        </div>
      </div>
    </div>
  )

  if (phase === 'results') {
    if (reviewMode) return (
      <div className="page">
        <div className="topbar">
          <button className="back-btn" onClick={() => setReviewMode(false)}>← Results</button>
          <span className="topbar-title">Review Answers</span>
        </div>
        <div className="page-content">
          {questions.map((q, i) => {
            const correct = answers[i] === q.ans
            return (
              <div key={i} className="review-item">
                <div className={`review-hdr ${correct ? 'correct' : 'wrong'}`}>
                  <span className="review-q-text">Q{i + 1}: {q.q.length > 65 ? q.q.slice(0, 65) + '…' : q.q}</span>
                  <span className={`review-badge ${correct ? 'badge-pass' : 'badge-fail'}`}>{correct ? 'CORRECT' : 'WRONG'}</span>
                </div>
                <div className="review-body">
                  {!correct && <p><strong>Your answer:</strong> {LETTERS[answers[i]]}. {q.opts[answers[i]]}</p>}
                  <p><strong>Correct answer:</strong> {LETTERS[q.ans]}. {q.opts[q.ans]}</p>
                  <p style={{ marginTop: 6, color: 'var(--text2)' }}>{q.exp}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )

    return (
      <div className="page">
        <div className="topbar">
          <button className="back-btn" onClick={onBack}>← Home</button>
          <span className="topbar-title">Results</span>
        </div>
        <div className="page-content">
          <div className="results">
            <div className={`score-ring ${passed ? 'pass' : 'fail'}`}>
              <div className="score-num">{score}</div>
              <div className="score-den">out of {total}</div>
            </div>
            <div className="result-title">{passed ? '🎉 You Passed!' : 'Not Quite — Try Again'}</div>
            <div className="result-sub">
              {passed
                ? `You scored ${Math.round(score / total * 100)}% — above the ${Math.round(pass / total * 100)}% passing threshold.`
                : `You need ${pass} correct to pass. You got ${score}. Review your answers and retake with a fresh set.`}
            </div>
            <div className="result-stats">
              <div className="stat-box"><div className="stat-val" style={{ color: 'var(--green2)' }}>{score}</div><div className="stat-label">Correct</div></div>
              <div className="stat-box"><div className="stat-val" style={{ color: 'var(--red2)' }}>{total - score}</div><div className="stat-label">Wrong</div></div>
              <div className="stat-box"><div className="stat-val">{Math.round(score / total * 100)}%</div><div className="stat-label">Score</div></div>
            </div>
            <div className="result-btns">
              <button className="nav-btn" onClick={() => setReviewMode(true)}>Review Answers</button>
              <button className="nav-btn primary" onClick={startTest}>New Test →</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Test phase
  const q = questions[current]
  const answered = answers[current] !== null
  const isLast = current === total - 1
  const allAnswered = answers.every(a => a !== null)
  const pct = Math.round((current / total) * 100)

  return (
    <div className="page">
      <div className="topbar">
        <button className="back-btn" onClick={onBack}>← Home</button>
        <span className="topbar-title">Practice Test</span>
      </div>
      <div className="page-content">
        <div className="q-progress">
          <div className="q-progress-bar-wrap">
            <div className="q-progress-bar" style={{ width: pct + '%' }} />
          </div>
          <div className="q-meta">
            <span>Question {current + 1} of {total}</span>
            <span>{answers.filter(a => a !== null).length} answered</span>
          </div>
        </div>

        <div className="q-dots">
          {questions.map((_, i) => (
            <button key={i} className={`q-dot${i === current ? ' active' : ''}${answers[i] !== null ? ' answered' : ''}`} onClick={() => setCurrent(i)}>{i + 1}</button>
          ))}
        </div>

        <div className="q-card">
          <div className="q-label">Question {current + 1}</div>
          <div className="q-text">{q.q}</div>
          <div className="options">
            {q.opts.map((opt, i) => {
              let cls = 'option'
              if (answered) {
                if (i === q.ans) cls += ' correct'
                else if (i === answers[current]) cls += ' incorrect'
              } else if (i === answers[current]) cls += ' selected'
              return (
                <div key={i} className={cls} onClick={() => selectAnswer(i)}>
                  <div className="opt-letter">{LETTERS[i]}</div>
                  <div className="opt-text">{opt}</div>
                </div>
              )
            })}
          </div>
          {answered && <div className="explanation">{q.exp}</div>}
        </div>

        <div className="q-nav">
          <button className="nav-btn" onClick={() => setCurrent(c => c - 1)} disabled={current === 0}>← Back</button>
          <span className="nav-cnt">{answers.filter(a => a !== null).length}/{total}</span>
          {(isLast || allAnswered) ? (
            <button className="nav-btn primary" onClick={() => setPhase('results')} disabled={!allAnswered}>Submit Test</button>
          ) : (
            <button className="nav-btn primary" onClick={() => setCurrent(c => c + 1)} disabled={!answered}>Next →</button>
          )}
        </div>
      </div>
    </div>
  )
}
