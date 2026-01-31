import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "120px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
    textAlign: "center"
  };

  return (
    <div>
      <NavLink to="/" style={linkStyles}>Home</NavLink>
      <NavLink to="/liquor" style={linkStyles}>Our Products</NavLink>
      <NavLink to="/liquor/new" style={linkStyles}>Add New Product</NavLink>
    </div>
  );
}

export default NavBar;