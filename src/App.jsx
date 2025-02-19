import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='my-2 mx-3'>
      <AboutMe/>
    </div>
  )
}

export default App
