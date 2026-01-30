import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section>
            <h1>Welcome to Liqour Lounge</h1>
            <p>Your one-stop shop for liqour</p>
            <Link to="/shop">
            <button> Shop Now</button>
            </Link>
        </section>
    )
}

export default Hero