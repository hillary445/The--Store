import { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import LogInForm from './pages/LogInForm'
import { AuthContext } from './context/AuthContext'
import Footer from './components/Footer'
import AgeGate from './components/AgeGate'


function App() {
  const { isLoggedIn } = useContext(AuthContext);

   // Age Verification state
  const [ageVerified, setAgeVerified] = useState(() => {
    return localStorage.getItem('ageVerified') === 'true'
  })

    // AgeGate: block app if not verified
  if (!ageVerified) {
    return <AgeGate onVerify={() => setAgeVerified(true)} />
  }

  if (!isLoggedIn) return <LogInForm/>;

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/shop' element= {<Shop/>}/>
      <Route path='/cart' element= {<Cart/>}/>
      <Route path='/login' element= {<LogInForm/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App
