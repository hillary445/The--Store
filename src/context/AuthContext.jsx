import React, { createContext, useState, useEffect} from 'react'

//creating the auth context
export const AuthContext = createContext();


function AuthProvider({children}) {

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [user, setUser] = useState(null);


//puts user in the box and also remembers them in the local storage
const login = (inputUser) =>{
    setIsLoggedIn(true);
    setUser(inputUser);
    localStorage.setItem('isLoggedIn','true');
    localStorage.setItem('user', JSON.stringify(inputUser))
}
//clears the box
const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
};

  return (
    //Make it usable by different components
    <AuthContext.Provider value={{isLoggedIn, user, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider