import React, { useContext, useEffect, useState, createContext, ReactNode } from 'react'
interface AuthProviderInterface {
  username: string,
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

  useEffect(() => {
    const storedUser = localStorage.getItem('conex')
    if (storedUser) setUser(JSON.parse(storedUser))
  }, [])

  const login = (userData: AuthProviderInterface) => {
    setUser(userData);
    localStorage.setItem('conex', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem('conex');
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