import { useState } from 'react'

export default function Quiz() {
  const questions = [
    {
      question: 'Which Phish song features the lyric "I saw you with a ticket stub in your hand"?',
      options: ['Wilson', 'YEM', 'Reba', 'Divided Sky'],
      answer: 'Wilson',
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

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Phishball Quiz</h1>
      {showResult ? (
        <p>You scored {score} out of {questions.length}!</p>
      ) : (
        <>
          <p>{questions[current].question}</p>
          {questions[current].options.map((option) => (
            <div key={option}>
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
            style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
            disabled={!selected}
          >
            Submit
          </button>
        </>
      )}
    </div>
  )
}
