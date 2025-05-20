import { useState, useEffect, use } from 'react'
import './App.css'
import { Esfera } from './Components/Esfera'

function App() {
  const [enable, setEnable] = useState(false)
  const [posicion, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!enable) {
      setPosition({ x: 475, y: 300 })
    }
  }, [enable])

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [enable])

  return (
    <main className="App">
      <Esfera posicion={posicion} enable={enable} />
      <button onClick={() => setEnable(!enable)}>{enable ? 'Desactivar' : 'Activar'} Mouse Follower</button>
    </main>
  )

}

export default App
