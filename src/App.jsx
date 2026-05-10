import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SignUp from './Components/SignUp/SignUp'
import Authpage from './Pages/Authpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Authpage></Authpage>
    </>
  )
}

export default App
