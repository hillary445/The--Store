import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section>
            <h1>The Liqour Lounge</h1>
            <p>Premium spirits. Refined taste. Delivered to your door.</p>
            <Link to="/shop">
            <button> Shop Now</button>
            </Link>
        </section>
    )
}

export default Hero