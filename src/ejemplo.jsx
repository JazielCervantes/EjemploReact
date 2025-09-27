import React, { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";

export default function Ejemplo() {
    const [personajes, setPersonajes] = useState([])
    const url_imagen_base = "https://cdn.thesimpsonsapi.com/500"

    useEffect(() => {

        fetch("https://thesimpsonsapi.com/api/characters")
            .then((res) => res.json())
            .then((data) => {
                const personajeFormateado = data.results.map((personaje) => ({
                    nombre: personaje.name,
                    edad: personaje.age,
                    imagen: url_imagen_base + personaje.portrait_path
                }))

                setPersonajes(personajeFormateado)
            })
    }, [])


    return (
        <div>
            <h1>Personajes de los simpsons</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    personajes.map((personaje, index) => (
                        <CharacterCard
                            key={index}
                            nombre={personaje.nombre}
                            edad={personaje.edad}
                            imagen={personaje.imagen}
                        />


                    ))
                }
            </div>
        </div>
    )
}



