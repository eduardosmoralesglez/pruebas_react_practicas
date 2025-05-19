import './App.css'
import { useState } from 'react'

import { TURNS , posiblesVictorias } from './constans'


// Componente Square
// Se encarga de mostrar el cuadrado del tablero
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}


// Componente principal de la aplicación
// Se encarga de manejar el estado del juego
// y la lógica del juego
function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const checkWinner = (board) => {
    for (const posible of posiblesVictorias) {
      const [a, b, c] = posible
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    return null;
  }

  // Reinicia el juego
  const resetGame = () => {
    setWinner(null)
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
  }

  // Verifica si el juego ha terminado
  const checkEndGame = (Board) => {
    return Board.every((square) => square !== null)
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
      <h1>Pruebas</h1>
      <button onClick={resetGame}>Reiniciar Juegos </button>
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

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {winner === false ? 'Empate' : 'Ganó:'}
              </h2>
              <header className={`win ${winner}`}>
                <Square>{winner}</Square>
              </header>
              <footer>
                <button onClick={() => {resetGame()}}>
                  Empezar de nuevo
                </button>
              </footer>
            </div>
          </section>
        )
      }

    </main>

  )
}

export default App
