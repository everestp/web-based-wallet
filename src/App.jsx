import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Dashboard from './pages/DashBoard'
import Welcome from './components/Welcome'
import FeaturesSection from './components/FeaturesSection'
import WhyChooseUs from './components/WhyChooseUs '
import SeedPhraseComponent from './components/SeedPhraseComponent'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'

function App() {


  return (
 <>
 <Navbar/>
<Routes>
 <Route path='/' element={<Welcome/>}/>
 <Route path='/signup' element={<Login/>}/>
 <Route path='/home' element={<Dashboard/>}/>
 <Route path='*' element={<Welcome/>}/>

</Routes>

 </>
  )
}

export default App
