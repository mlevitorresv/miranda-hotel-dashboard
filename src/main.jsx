import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './components/header/header.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>    
      <Header />
      <Routes>
          <Route path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
