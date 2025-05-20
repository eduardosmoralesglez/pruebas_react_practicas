import { useState, useEffect, use } from 'react'
import './App.css'
import { Esfera } from './Components/Esfera'

/**
 * Funcion principal de la aplicación.
 * @description Componente principal de la aplicación que renderiza un botón y una esfera que sigue el mouse.
 * @version 1.0.0
 * @author eduardo serafin
 */
function App() {
  const [enable, setEnable] = useState(false)
  const [posicion, setPosition] = useState({ x: 0, y: 0 })

  /**
   * Efecto que se ejecuta al cambiar el estado de enable.
   * @description Si enable es falso, se establece la posición de la esfera en el centro de la pantalla.
   * @version 1.0.0
   */
  useEffect(() => {
    if (!enable) {
      setPosition({ x: 475, y: 300 })
    }
  }, [enable])

  /**
   * Efecto que se ejecuta al cambiar el estado de enable.
   * @description Si enable es verdadero, se añade un event listener al mouse para actualizar la posición de la esfera.
   * @version 1.0.0
   */
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
