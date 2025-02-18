import { useState } from 'react';

const titoliLibri = [
    "1984",
    "Il Signore degli Anelli",
    "Orgoglio e Pregiudizio",
    "Il Grande Gatsby",
    "Don Chisciotte",
    "Harry Potter e la Pietra Filosofale",
    "Uno, Nessuno e Centomila",
    "Moby Dick",
    "La Divina Commedia",
    "Guerra e Pace"
];


export default function ListaLibri() {

    // stato lista libri
    const [listaTitoli, setListaTitoli] = useState(titoliLibri);

    // stato dell'input di inserimento del nuovo libro
    const [nuovoTitolo, setNuovoTitolo] = useState("")

    // funzione di callback che aggiuge l'elemento alla lista
    const aggiungiLibro = e => {
        // preveniamo il funzionamento di base del submit
        e.preventDefault();

        // creazione nuovo array che contiene la vacchia lista più il nuovo libro
        const listaAggiornata = [...listaTitoli, nuovoTitolo];

        // aggiorniamo la lista 
        setListaTitoli(listaAggiornata);

        // azzeriamo il valore di nuovo libro
        setNuovoTitolo("");
    }

    return (
        <>
            <h1>Lista Libri</h1>

            <form onSubmit={aggiungiLibro}>
                <input type='text' value={nuovoTitolo} placeholder='Inserisci Titolo Libro'
                    onChange={e => setNuovoTitolo(e.target.value)}
                />
                <button type='submit'>AGGIUNGI</button>
            </form>


            {/* lista dei libri */}
            <div>
                <ul>
                    {listaTitoli.map((title, index) => (
                        <li key={index}>{title}</li>
                    ))}
                </ul>
            </div>
        </>




    );

};