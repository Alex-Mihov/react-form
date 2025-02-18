const titoliLibri = [
    "1984 - George Orwell",
    "Il Signore degli Anelli - J.R.R. Tolkien",
    "Orgoglio e Pregiudizio - Jane Austen",
    "Il Grande Gatsby - F. Scott Fitzgerald",
    "Don Chisciotte - Miguel de Cervantes",
    "Harry Potter e la Pietra Filosofale - J.K. Rowling",
    "Uno, Nessuno e Centomila - Luigi Pirandello",
    "Moby Dick - Herman Melville",
    "La Divina Commedia - Dante Alighieri",
    "Guerra e Pace - Lev Tolstoj"
];


export default function ListaLibri() {

    return (
        <div>
            <h1>Lista Libri Famosi</h1>
            <ul>
                {titoliLibri.map((title, index) => (
                    <li key={index}>{title}</li>
                ))}
            </ul>
        </div>
    );

};