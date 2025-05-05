import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
const Navbar = () => {
 const navigate = useNavigate()
 const {token ,    userData } = useUser()

  return (
    <nav class="bg-white shadow-md px-6 py-4 flex items-center justify-between">
  
    <div class="text-2xl font-bold text-gray-800 cursor-pointer" onClick={()=>navigate('/')}>
      AR-Fina
    </div>
  
{
  token? (
    <div class="space-x-4">
  
           
      <Link to="/dashboard" class="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        GO to DashBoard
      </Link>
    </div>
  ) :(
<div class="space-x-4">
      <Link to='/login' class="text-gray-700 hover:text-blue-600 font-medium">Log In</Link>
      <Link to="/signup" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Sign Up
      </Link>
    </div>
  )
}
    
  </nav>
  
  )
}

export default Navbar