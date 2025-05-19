import { posiblesVictorias } from "../constans/";

// comprueba si hay un ganador
export const checkWinner = (board) => {
    for (const posible of posiblesVictorias) {
        const [a, b, c] = posible
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]
        }
    }
    return null;
}

// Verifica si el juego ha terminado
export const checkEndGame = (Board) => {
    return Board.every((square) => square !== null)
}