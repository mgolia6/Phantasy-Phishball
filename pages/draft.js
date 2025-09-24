import { useState, useEffect } from 'react'

export default function DraftPage() {
  const [teamName, setTeamName] = useState('')
  const [songPool, setSongPool] = useState([])
  const [selectedSongs, setSelectedSongs] = useState([])

  const SONG_API_URL = 'https://api.phish.net/v5/songs.json?apikey=10645D7F59011FFA82A'

  useEffect(() => {
    async function fetchSongs() {
      try {
        const response = await fetch(SONG_API_URL)
        const data = await response.json()
        const songs = data.data.map((song) => song.title).sort()
        setSongPool(songs)
      } catch (error) {
        console.error('Error fetching songs:', error)
      }
    }

    fetchSongs()
  }, [])

  const toggleSong = (song) => {
    setSelectedSongs((prev) =>
      prev.includes(song)
        ? prev.filter((s) => s !== song)
        : [...prev, song]
    )
  }

  const handleSubmit = () => {
    const newTeam = { name: teamName, songs: selectedSongs }
    const existingTeams = JSON.parse(localStorage.getItem('phantasyTeams')) || []
    const updatedTeams = [...existingTeams, newTeam]
    localStorage.setItem('phantasyTeams', JSON.stringify(updatedTeams))
    alert(`Team "${teamName}" saved!`)
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
      {songPool.length === 0 ? (
        <p>Loading songs from Phish.net...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, maxHeight: '400px', overflowY: 'scroll' }}>
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
      )}

      <button
        onClick={handleSubmit}
        style={{ marginTop: '2rem', padding: '0.5rem 1rem' }}
      >
        Submit Draft
      </button>
    </div>
  )
}
