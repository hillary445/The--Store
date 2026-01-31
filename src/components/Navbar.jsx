import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Navbar({ searchQuery, setSearchQuery }) {
  const { isLoggedIn, user, logout } = useContext(AuthContext)

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search beer,wine,whiskey"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginLeft: "1rem" }}
      />

      {isLoggedIn && (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  )
}

export default Navbar
