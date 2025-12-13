import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <h1>Welcome to Whisker</h1>
        <p>A Scratch-themed social media platform</p>
        <a href="/app" className="enter-button">Jump in</a>
      </header>
    </div>
  )
}

export default Landing