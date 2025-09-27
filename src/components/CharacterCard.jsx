import "../CharacterCard.css"


export default function CharacterCard({ nombre, edad, imagen }) {
    return (
        <section className="card">
            <img src={imagen} alt={nombre} className="card-img" />
            <div className="card-body">
                <h2>{nombre}</h2>
                <p> Edad: {edad} </p>
            </div>
        </section>
    )

}