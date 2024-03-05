import { Dashboard } from './pages/DashboardPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { GuestList } from './pages/BookingListPage'
import { LoginPage } from './pages/LoginPage'
import { GuestDetails } from './pages/BookingDetailsPage'
import { RoomList } from './pages/RoomListPage'
import { ConciergeList } from './pages/UsersListPage'
import { Reviews } from './pages/ReviewsPage'
import { Layout } from './components/layout/Layout'
import { useEffect, useReducer, useState } from 'react'
import { CreateUserPage } from './pages/CreateUserPage'
import { CreateRoomPage } from './pages/CreateRoomPage'
import { EditRoomPage } from './pages/EditRoomPage'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { AuthProvider, useAuth } from './context/AuthProvider.jsx'
import { CreateBooking } from './pages/CreateBookingPage'
import { ToastContainer } from 'react-toastify'
import { UpdateUserPage } from './pages/UpdateUserPage'


function App() {
  const { user } = useAuth();
  const [data, setData] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* LOGIN */}
          <Route path='/' element={<LoginPage />} />

          {user ? (
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
                <Route path='/users/:id' element={<UpdateUserPage />} />
                <Route path='/users/create' element={<CreateUserPage />} />

                {/* CONTACT */}
                <Route path='/contact' element={<Reviews />} />
              </Route>
            </>
          ) : null}
        </Routes>
      </BrowserRouter >
      <ToastContainer />
    </>
  );
}

const AppWithAuthProvider = () => (
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>
);

export default AppWithAuthProvider;