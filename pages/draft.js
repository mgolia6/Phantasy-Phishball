// pages/draft.js

import { useState } from 'react'

const songPool = [
  'Tweezer',
  'Ghost',
  'Fluffhead',
  'You Enjoy Myself',
  'Harry Hood',
  'Bathtub Gin',
  'Chalk Dust Torture',
  'Reba',
  'Maze',
  'Down with Disease'
]

export default function DraftPage() {
  const [teamName, setTeamName] = useState('')
  const [selectedSongs, setSelectedSongs] = useState([])

  const toggleSong = (song) => {
    setSelectedSongs((prev) =>
      prev.includes(song)
        ? prev.filter((s) => s !== song)
        : [...prev, song]
    )
  }

  const handleSubmit = () => {
    alert(`Team "${teamName}" drafted:\n${selectedSongs.join(', ')}`)
    // Later: Save to local storage or database
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Draft Your Phantasy Phishball Team</h1>

      <label>
        <strong>Team Name:</strong>
        <br />
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          style={{ padding: '0.5rem', marginTop: '0.5rem', width: '300px' }}
        />
      </label>

      <h2 style={{ marginTop: '2rem' }}>Select Your Songs</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {songPool.map((song) => (
          <li key={song} style={{ marginBottom: '0.5rem' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedSongs.includes(song)}
                onChange={() => toggleSong(song)}
              />
              {' '}{song}
            </label>
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubmit}
        style={{ marginTop: '2rem', padding: '0.5rem 1rem' }}
      >
        Submit Draft
      </button>
    </div>
  )
}
