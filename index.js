// pages/index.js

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      {/* Header */}
      <header style={{ padding: '1rem', background: '#222', color: '#fff' }}>
        <h1>Phantasy Phishball</h1>
        <nav>
          <a href="/draft" style={{ marginRight: '1rem', color: '#fff' }}>Draft</a>
          <a href="/teams" style={{ marginRight: '1rem', color: '#fff' }}>Teams</a>
          <a href="/league" style={{ color: '#fff' }}>League</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ padding: '2rem', textAlign: 'center', background: '#f0f0f0' }}>
        <h2>Welcome to Phantasy Phishball</h2>
        <p>
          Draft your favorite Phish songs before the tour. Score points as they’re played live.
          Compete for jam glory. It’s fantasy football for the jam band soul.
        </p>
        <a href="/draft">
          <button style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>Join the Draft</button>
        </a>
      </section>

      {/* How It Works */}
      <section style={{ padding: '2rem' }}>
        <h3>How It Works</h3>
        <ul>
          <li><strong>1.</strong> Draft your songs from the Phish catalog</li>
          <li><strong>2.</strong> Earn points when they’re played live</li>
          <li><strong>3.</strong> Bonuses for openers, encores, jam length, and bust-outs</li>
          <li><strong>4.</strong> Climb the leaderboard and celebrate your team’s vibe</li>
        </ul>
      </section>

      {/* Tour Tracker */}
      <section style={{ padding: '2rem', background: '#e0e0ff' }}>
        <h3>Current Tour</h3>
        <p>Live updates coming soon…</p>
        <a href="/league">
          <button style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>View Scores</button>
        </a>
      </section>

      {/* Fan Rituals */}
      <section style={{ padding: '2rem' }}>
        <h3>Fan Rituals</h3>
        <p>
          Share your team name, your pre-show predictions, your post-show poetry.
          This is more than stats—it’s a celebration of memory, music, and magic.
        </p>
        <a href="/teams">
          <button style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>Explore Teams</button>
        </a>
      </section>

      {/* Footer */}
      <footer style={{ padding: '1rem', background: '#222', color: '#fff', textAlign: 'center' }}>
        <p>Built by fans, for fans. Powered by Phish.net and your imagination.</p>
      </footer>
    </div>
  )
}
