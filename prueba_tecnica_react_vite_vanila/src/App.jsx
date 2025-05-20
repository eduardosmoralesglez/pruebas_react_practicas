import './App.css';
import { useEffect, useState } from "react";
import { API_GATOS_FACTS, API_GATO_IMAGEN, bucleIncidencias } from "./constantes";


export function App() {

    const [fact, setFact] = useState();
    const [imagenURL, setImagenURL] = useState();

    useEffect(() => {
        fetch(API_GATOS_FACTS)
            .then((response) => response.json())
            .then((data) => {
                setFact(
                    bucleIncidencias(data.incidencias)
                );
            })
    }, []);
/** 
    useEffect(() => {
        if (!fact) return;
        const palabras = fact.split(" ", 3).join(" ");
        fetch(API_GATO_IMAGEN(palabras))
            .then((response) => response.url)
            .then((url) => {
                setImagenURL(url);
            })
    }, [fact]);
*/
    return (
        <main>
            <h1>App pruebas con APIS</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imagenURL && <img src={imagenURL} alt="Gato" />}
            </section>
        </main>
    )
}