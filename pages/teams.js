// pages/teams.js

import { useState, useEffect } from 'react'

export default function TeamsPage() {
  const [teams, setTeams] = useState([])

  // For now, simulate stored teams (later: pull from local DB or API)
  useEffect(() => {
    const storedTeams = JSON.parse(localStorage.getItem('phantasyTeams')) || []
    setTeams(storedTeams)
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Phantasy Phishball Teams</h1>

      {teams.length === 0 ? (
        <p>No teams drafted yet. Head to the <a href="/draft">Draft Page</a> to create one.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {teams.map((team, index) => (
            <li key={index} style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
              <h2>{team.name}</h2>
              <h4>Drafted Songs:</h4>
              <ul>
                {team.songs.map((song, i) => (
                  <li key={i}>{song}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
