import React, { useContext, useEffect, useState, createContext, ReactNode } from 'react'
import { apiRequest } from '../api/apiCalls';
interface AuthProviderInterface {
  email: string,
  password: string
}
interface AuthContextValueInterface {
  user: AuthProviderInterface | null;
  login: (userData: AuthProviderInterface) => void;
  logout: () => void
}

interface AuthProviderPropsInterface {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextValueInterface | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderPropsInterface> = ({ children }) => {
  const [user, setUser] = useState<AuthProviderInterface | null>(null);


  const login = async (userDataToLogin: AuthProviderInterface) => {
    setUser(userDataToLogin);
    const loginData = {
      email: userDataToLogin.email,
      password: userDataToLogin.password
    }
    
    try {
      const response = await apiRequest('login', 'POST', loginData, null);
      console.log('guardaré en localStorage el token', JSON.stringify(response))
      localStorage.setItem('token', response.token)
    } catch (error: any) {
      console.error('Error al realizar el login:', error.message)
    }
    
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  }

  const contextValue: AuthContextValueInterface = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};