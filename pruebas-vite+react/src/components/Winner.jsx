import { Square } from "./Square"
import { winner } from "../constans"
export function Winner() {
    const winnerText = winner === false ? 'Empate' : 'Ganó:'
    if (winner === null) {
        return null
    }
    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>
                <header className={`win ${winner}`}>
                    <Square>{winner}</Square>
                </header>
                <footer>
                    <button onClick={() => { resetGame() }}>
                        Empezar de nuevo
                    </button>
                </footer>
            </div>
        </section>
    )
}
