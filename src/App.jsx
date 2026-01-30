import { useState } from 'react'
import AgeGate from './components/AgeGate'
import './App.css'

function App() {
  const [ageVerified, setAgeVerified] = useState(() => {
    return localStorage.getItem('ageVerified') === 'true'
  })

  const [count, setCount] = useState(0)

  // Show AgeGate if not verified
  if (!ageVerified) {
    return <AgeGate onVerify={() => setAgeVerified(true)} />
  }

  return (
    <div className="app-container">

      {/* Hero Section */}
      <header className="hero">
        <h1> Liquor Lounge</h1>
        <p>Premium spirits. Smooth experience.</p>
      </header>

      <div className="card">
        <button className="count-btn" onClick={() => setCount(count + 1)}>
          Drinks served: {count}
        </button>

        <p className="welcome-text">
          Welcome to our premium spirits collection
        </p>

        {/* Age Verification Testing Panel */}
        <div className="age-test-panel">
          <p className="test-title">Age Verification Testing</p>

          <button
            className="reset-btn"
            onClick={() => {
              localStorage.removeItem('ageVerified')
              window.location.reload()
            }}
          >
            Reset & Show Age Gate
          </button>

          <p className="test-status">
            Status:{' '}
            <strong>
              {localStorage.getItem('ageVerified') === 'true'
                ? 'Verified'
                : 'Not verified'}
            </strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
