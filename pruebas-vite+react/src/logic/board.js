import { posiblesVictorias } from "../constans";

export const checkWinner = (board) => {
    for (const posible of posiblesVictorias) {
        const [a, b, c] = posible
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]
        }
    }
    return null;
}