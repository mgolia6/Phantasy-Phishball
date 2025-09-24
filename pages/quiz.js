import { useState } from 'react'

export default function Quiz() {
  const questions = [
    {
      question: 'Which Phish song features the lyric "I saw you with a ticket stub in your hand"?',
      options: ['Wilson', 'YEM', 'Punch You in the Eye', 'Divided Sky'],
      answer: 'Punch You in the Eye',
    },
    {
      question: 'What year did Phish play their first show?',
      options: ['1983', '1985', '1987', '1990'],
      answer: '1983',
    },
  ]

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState('')
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1)
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
      setSelected('')
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected('')
    setScore(0)
    setShowResult(false)
  }

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      maxWidth: '600px',
      margin: 'auto',
      backgroundColor: '#f0f4ff',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: '#333' }}>Phishball Quiz</h1>

      {showResult ? (
        <>
          <p style={{ fontSize: '1.2rem' }}>You scored {score} out of {questions.length}!</p>

          <button
            onClick={handleRestart}
            style={{
              marginTop: '1rem',
              marginRight: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Restart Quiz
          </button>

          <a href="/" style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#ccc',
            color: '#333',
            textDecoration: 'none',
            borderRadius: '4px'
          }}>
            Back to Home
          </a>
        </>
      ) : (
        <>
          <p style={{ fontSize: '1.1rem' }}>Question {current + 1} of {questions.length}</p>
          <p style={{ marginBottom: '1rem' }}>{questions[current].question}</p>

          {questions[current].options.map((option) => (
            <div key={option} style={{ marginBottom: '0.5rem' }}>
              <label>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selected === option}
                  onChange={() => setSelected(option)}
                />
                {' '}{option}
              </label>
            </div>
          ))}

          <button
            onClick={handleSubmit}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            disabled={!selected}
          >
            Submit
          </button>
        </>
      )}
    </div>
  )
}
