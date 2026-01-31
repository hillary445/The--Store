import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-title">The Liquor Lounge</h1>
                    <p className="hero-subtitle">
                        Premium spirits. Refined taste. Delivered to your door.
                    </p>
                    <Link to="/shop">
                        <button className="hero-btn">Shop Now</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
