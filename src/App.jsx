import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Dashboard from './pages/DashBoard'
import Welcome from './components/Welcome'
import FeaturesSection from './components/FeaturesSection'
import WhyChooseUs from './components/WhyChooseUs '
import SeedPhraseComponent from './components/SeedPhraseComponent'


function App() {


  return (
 <>
 <Navbar/>
<Welcome/>
<FeaturesSection/>
<WhyChooseUs/>
<SeedPhraseComponent/>
 </>
  )
}

export default App
