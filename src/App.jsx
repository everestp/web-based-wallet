import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Dashboard from './pages/DashBoard'
import Welcome from './components/Welcome'

import Signup from './pages/Signup'
import { ToastContainer } from 'react-toastify'
import { UserContextProvider } from './context/UserContext'

function App() {
  const location = useLocation(); // Get current route
  
  return (
    <UserContextProvider>

    <>
      <ToastContainer />
      {location.pathname !== '/dashboard' && <Navbar />} {/* Hide Navbar on Dashboard */}
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Welcome />} />
      </Routes>
    </>
    </UserContextProvider>
  );
}

export default App;