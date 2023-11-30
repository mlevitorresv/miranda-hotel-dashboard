import React, { useContext, useEffect, useState, createContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const storedUser = localStorage.getItem('conex')
        if(storedUser) setUser(JSON.parse(storedUser))
    },[])

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('conex', JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('conex');
    }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)