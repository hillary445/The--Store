import { useEffect, useState } from 'react'
import './AgeGate.css'

export default function AgeGate({ onVerify }) {
  const [attempted, setAttempted] = useState(false)

  const handleVerify = (isOldEnough) => {
    if (isOldEnough) {
      sessionStorage.setItem('ageVerified', 'true')
      onVerify()
    } else {
      setAttempted(true)
    }
  }

  // If they said no, just show access denied message
  if (attempted) {
    return (
      <div className="age-gate">
        <h2>Access Denied</h2>
        <p>You must be 21 years or older to access this website.</p>
        <p className="small-text">
          This site contains content related to alcoholic beverages
          and is intended for adults of legal drinking age only.
        </p>
      </div>
    )
  }

  return (
    <div className="age-gate">
      <h1>Age Verification Required</h1>
      <p>You must be 21 years or older to enter this site</p>

      <div className="buttons">
        <button
          className="yes-btn"
          onClick={() => handleVerify(true)}
          autoFocus
        >
          I am 21 or older
        </button>

        <button
          className="no-btn"
          onClick={() => handleVerify(false)}
        >
          I am under 21
        </button>
      </div>

      <p className="small-text">
        By entering this site, you acknowledge that you are of legal drinking age
        and agree to our Terms of Service.
      </p>
    </div>
  )
}
