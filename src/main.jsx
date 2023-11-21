import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './components/header/header.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { GuestList } from './pages/GuestList.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { GuestDetails } from './pages/GuestDetails.jsx'
import { RoomList } from './pages/RoomList.jsx'
import { ConciergeList } from './pages/ConciergeList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>    
      <Routes>
          {/* LOGIN */}
          <Route path='/login' element={<LoginPage />} />

          {/* <Header /> */}
          {/* PRINCIPAL */}
          <Route path='/' element={<Dashboard />} />
          {/* BOOKINGS */}
          <Route path='/bookings' element={<GuestList />} />
          <Route path='/bookings/:id' element={<GuestDetails />} />
          <Route path='/bookings/create' element={<GuestList />} />
          <Route path='/bookings/edit/:id' element={<GuestList />} />
          <Route path='/bookings/delete/:id' element={<GuestList />} />
          {/* ROOMS */}
          <Route path='/rooms' element={<RoomList />} />
          <Route path='/rooms/:id' element={<RoomList />} />
          <Route path='/rooms/create' element={<RoomList />} />
          <Route path='/rooms/edit/:id' element={<RoomList />} />
          <Route path='/rooms/delete/:id' element={<RoomList />} />
          {/* USERS */}
          <Route path='/users' element={<ConciergeList />} />
          <Route path='/users/:id' element={<ConciergeList />} />
          <Route path='/users/create' element={<ConciergeList />} />
          <Route path='/users/edit/:id' element={<ConciergeList />} />
          <Route path='/users/delete/:id' element={<ConciergeList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
