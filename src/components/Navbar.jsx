import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar({ searchQuery, setSearchQuery, cartCount }) {
  const { isLoggedIn, user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-text">Elite Liquor</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Shop</Link>

        {/* Cart with count */}
        <Link to="/cart" className="nav-link">
          Cart
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>
      </div>

      <div className="navbar-actions">
        <input
          type="text"
          placeholder="Search beer, wine, whiskey"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="nav-search"
        />

        {isLoggedIn && (
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
