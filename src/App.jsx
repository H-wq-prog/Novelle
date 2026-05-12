import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SignUp from './Components/SignUp/SignUp'
import Authpage from './Pages/Authpage'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/*' element={<Authpage />} />

      <Route  element={<MainLayout/> } >
      <Route path='/Home' element={<Home />} />
      
      </Route>
    </Routes>
  )
}

export default App
