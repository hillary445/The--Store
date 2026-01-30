import React, {useState} from "react"


function LogInForm() {
    //Stored the input values in a state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Track if user is logged in
    const [isLoggedIn, setLoggedIn] = useState(false)

    //Handling user registration
    const handleReg = () => {
        const user = {
            name,
            email,
            password
        }

        //Saving the data in a local storage
        localStorage.setItem('user', JSON.stringify(user));

        alert("Registration successful, You can now log in");

        //clearing input fields
        setName('');
        setEmail('');
        setPassword('')
    }

    //Retrieving data from localStorage
    const handleLogIn = () => {
        const savedUser = JSON.parse(localStorage.getItem('user'));

        //Checking if the user exists in the storage
        if(
            savedUser.name === name && 
            savedUser.email === email &&
            savedUser.password === password
        ) {
            //saving the login state
            localStorage.setItem('isLoggedIn', 'true');
            setLoggedIn(true);
        }else{
            alert('Invalid email or password')
        }
    };


  return (
    <form>
        <h2>Welcome back</h2>
        <div>
            <input 
            type="text"
            placeholder="Enter UserName"
            onChange={(e)=> setName(e.target.value)}
            value={name}
            required/>            
        </div>
        <br />
        <div>
            <input 
            type="email"
            placeholder="Enter Email" 
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            required/>  
        </div>
        <br />
        <div>
            <input 
            type="password"
            placeholder="Enter Password"
            onChange={(e)=> setPassword(e.target.value)} 
            value={password}
            required/>  
        </div>
        <br />
        <div>
            <button onClick={handleReg}>Register</button>
            <button onClick={handleLogIn}>Login</button>
        </div>
    </form>
  )
}

export default LogInForm