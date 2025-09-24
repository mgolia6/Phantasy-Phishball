export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      maxWidth: '800px',
      margin: 'auto',
      textAlign: 'center'
    }}>
      {/* Optional banner image */}
      <img
        src="https://m.media-amazon.com/images/I/71Exq+7g5OL._UF894,1000_QL80_.jpg"
        alt="Phish concert poster"
        style={{
          width: '100%',
          borderRadius: '8px',
          marginBottom: '2rem'
        }}
      />

      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to Phishball</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Where jam meets draft. Pick your team, test your trivia, and vibe your way to victory.
      </p>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="/draft" style={navStyle}>Draft</a>
        <a href="/teams" style={navStyle}>Teams</a>
        <a href="/quiz" style={navStyle}>Quiz</a>
        <a href="/league" style={navStyle}>League</a>
      </nav>
    </div>
  )
}

const navStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '4px',
  fontWeight: 'bold',
  fontSize: '1rem'
}
