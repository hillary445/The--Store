import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
                <p className="footer-tagline">
                  Premium spirits curated for refined taste.
                </p>
                <p className="responsible">Drink Responsibly. 18+</p>
            </div>
            
            <div className="footer-section">
                <h3 className="footer-heading">Contact Us</h3>
                <p>Email: support@liquorlounge.com</p>
                <p>Phone: +254 725 000 761</p>
                <p>Nairobi, Kenya</p>
            </div>

            <div className="footer-bottom">
                <p>
                  © {new Date().getFullYear()} The Liquor Lounge. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
