import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


function Navbar() {

    const {isLoggedIn,user, logout} = useContext(AuthContext);

  return (
    <>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>Cart (0)</Link>
    </nav>
    
    </>
  )
}

export default Navbar