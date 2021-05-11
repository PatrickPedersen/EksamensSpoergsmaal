/*
5.  Skriv et funktion, som kan tjekke om et array er symmetrisk eller ej.
    F.eks. er [1, 2, 2, 1] symmetrisk, hvorimod [1, 2, 3, 4] ikke er.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.

    Lavet af Patrick
*/

function symmetry(array) {
    for (let index in array) {
        if (array[index] != array[array.length - index - 1]) {
            return false
        }
    }
    return true
}

console.log(symmetry([1, 2, 2, 1]))