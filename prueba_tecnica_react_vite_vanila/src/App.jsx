import { useEffect } from "react";
import { useState } from "react";

import { API_GATOS_FACTS, API_GATO_IMAGEN } from "./constantes";


export function App() {

    const [fact, setFact] = useState();
    const [imagenURL, setImagenURL] = useState();   

    useEffect(() => {
        fetch(API_GATOS_FACTS)
            .then((response) => response.json())
            .then((data) => {
                const { fact } = data
                setFact(data.fact);

                const palabras = fact.split(" ",3).join(" ");
                fetch(API_GATO_IMAGEN(palabras))
                    .then((response) => response.url)
                    .then((url) => {
                        setImagenURL(url);
                    })


            })


    }, []);

    return (
        <main>
            <h1>App pruebas con APIS</h1>
            {fact && <p>{fact}</p>}
            {imagenURL && <img src={imagenURL} alt="Gato" />}
        </main>
    )
}