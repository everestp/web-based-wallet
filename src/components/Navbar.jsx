import React from 'react'

const Navbar = () => {
  return (
    <nav class="bg-white shadow-md px-6 py-4 flex items-center justify-between">
  
    <div class="text-2xl font-bold text-gray-800">
      Re-Money
    </div>
  

    <div class="space-x-4">
      <a href="/login" class="text-gray-700 hover:text-blue-600 font-medium">Log In</a>
      <a href="/signup" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Sign Up
      </a>
    </div>
  </nav>
  
  )
}

export default Navbar