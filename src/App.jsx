import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import LogInForm from './pages/LogInForm'


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/shop' element= {<Shop/>}/>
      <Route path='/cart' element= {<Cart/>}/>
      <Route path='/login' element= {<LogInForm/>}/>
    </Routes>
    </>
  );
}

export default App
