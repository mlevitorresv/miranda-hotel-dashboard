import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './components/header/header.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { GuestList } from './pages/GuestList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>    
      <Header />
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/GuestList' element={<GuestList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
