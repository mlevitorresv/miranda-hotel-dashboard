import { Dashboard } from './pages/Dashboard'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { GuestList } from './pages/GuestList'
import { LoginPage } from './pages/LoginPage'
import { GuestDetails } from './pages/GuestDetails'
import { RoomList } from './pages/RoomList'
import { ConciergeList } from './pages/ConciergeList'
import { Reviews } from './pages/Reviews'
import { Layout } from './components/layout/Layout'
import { useEffect, useReducer, useState } from 'react'
import { CreateUserPage } from './pages/CreateUserPage'
import { EditUserPage } from './pages/EditUserPage'
import { CreateRoomPage } from './pages/CreateRoomPage'
import { EditRoomPage } from './pages/EditRoomPage'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { AuthProvider } from './context/AuthProvider.jsx'
import { CreateBooking } from './pages/CreateBooking'


function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('conex');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Provider store={store}>
            <Routes>
              {/* LOGIN */}
              <Route path='/' element={<LoginPage />} />

              {data ? (
                <>
                  {/* <Header /> */}
                  <Route element={<Layout />}>

                    {/* PRINCIPAL */}
                    <Route path='/home' element={<Dashboard />} />

                    {/* BOOKINGS */}
                    <Route path='/bookings' element={<GuestList />} />
                    <Route path='/bookings/:id' element={<GuestDetails />} />
                    <Route path='/bookings/create' element={<CreateBooking />} />
                    <Route path='/bookings/edit/:id' element={<GuestList />} />

                    {/* ROOMS */}
                    <Route path='/rooms' element={<RoomList />} />
                    <Route path='/rooms/:id' element={<RoomList />} />
                    <Route path='/rooms/create' element={<CreateRoomPage />} />
                    <Route path='/rooms/edit/:id' element={<EditRoomPage />} />

                    {/* USERS */}
                    <Route path='/users' element={<ConciergeList />} />
                    <Route path='/users/:id' element={<ConciergeList />} />
                    <Route path='/users/create' element={<CreateUserPage />} />
                    <Route path='/users/edit/:id' element={<EditUserPage />} />

                    {/* CONTACT */}
                    <Route path='/contact' element={<Reviews />} />
                  </Route>
                </>
              ) : null}
            </Routes>
          </Provider>
        </AuthProvider>
      </BrowserRouter >
    </>
  );
}

export default App;