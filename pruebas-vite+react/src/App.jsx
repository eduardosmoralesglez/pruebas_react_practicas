import './App.css'
import { useState } from 'react'

import { TURNS , posiblesVictorias } from './constans'
import { Square } from './components/Square'
import { Winner } from './components/Winner'
import { checkWinner, checkEndGame } from './logic/board'


// Componente principal de la aplicación
function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  // Reinicia el juego
  const resetGame = () => {
    setWinner(null)
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
  }

  // Actualiza el tablero
  // Se encarga de actualizar el tablero y el turno del jugador
  const updateBoard = (index) => {
    if (board[index] || winner) {
      return
    }
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) 
    }
  }
  // Aquí es donde se verifica el empate:
  // Si no hay ganador y el tablero está lleno, setWinner(false) marca el empate.
  // Renderización del componente
  return (
    <main className="board">
      <h1>Tres en Raya</h1>
      <button onClick={resetGame}>Reiniciar Juegos</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <Winner winner={winner} resetGame={resetGame} />
    </main>

  )
}

export default App
