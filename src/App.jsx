import { Dashboard } from './pages/Dashboard.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { GuestList } from './pages/GuestList.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { GuestDetails } from './pages/GuestDetails.jsx'
import { RoomList } from './pages/RoomList.tsx'
import { ConciergeList } from './pages/ConciergeList.tsx'
import { Reviews } from './pages/Reviews.jsx'
import { Layout } from './components/layout/Layout.jsx'
import { useEffect, useReducer, useState } from 'react'
import { CreateUserPage } from './pages/CreateUserPage.jsx'
import { EditUserPage } from './pages/EditUserPage.jsx'
import { CreateRoomPage } from './pages/CreateRoomPage.jsx'
import { EditRoomPage } from './pages/EditRoomPage.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { AuthProvider } from './context/AuthProvider.jsx'


function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('conex');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  useEffect(()=>{

  }, [])

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
                    <Route path='home' element={<Dashboard />} />

                    {/* BOOKINGS */}
                    <Route path='/bookings' element={<GuestList />} />
                    <Route path='/bookings/:id' element={<GuestDetails />} />
                    <Route path='/bookings/create' element={<GuestList />} />
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