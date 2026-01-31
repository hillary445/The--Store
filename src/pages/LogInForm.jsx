import React, {useState, useEffect, useContext} from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
 
function LogInForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    
    const handleReg = () => {
        const user = {
            name,
            email,
            password
        }

        localStorage.setItem('user', JSON.stringify(user));
        alert("Registration successful, You can now log in");

        setName('');
        setEmail('');
        setPassword('')
    }

    const handleLogIn = () => {
        const savedUser = JSON.parse(localStorage.getItem('user'));

        if(
            savedUser.email === email &&
            savedUser.password === password
        ) {
            login(savedUser);
            alert('Login successful!')
            navigate('/');
        }else{
            alert('Invalid email or password')
        }
    };

  return (
    <div className="login-page">
      <form className="login-form">
        <h2 className="login-title">Login to The Liquor Lounge</h2>

        <div className="input-group">
            <input 
              type="text"
              placeholder="Enter Username"
              onChange={(e)=> setName(e.target.value)}
              value={name}
              required
              className="login-input"
            />            
        </div>

        <div className="input-group">
            <input 
              type="email"
              placeholder="Enter Email" 
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
              required
              className="login-input"
            />  
        </div>

        <div className="input-group">
            <input 
              type="password"
              placeholder="Enter Password"
              onChange={(e)=> setPassword(e.target.value)} 
              value={password}
              required
              className="login-input"
            />  
        </div>

        <div className="login-buttons">
            <button type="button" onClick={handleLogIn} className="login-btn">
              Login
            </button>

            <button type="button" onClick={handleReg} className="register-btn">
              Create Account
            </button>
        </div>
      </form>
    </div>
  )
}

export default LogInForm
