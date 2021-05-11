/*
13. Skriv en funktion, som kan bestemme om alle tallene i en række er ens.
    F.eks. er tallene [1, 2, 3] ikke ens, hvorimod tallene i [1, 1, 1] er ens.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.

    Lavet af Patrick
*/

function identicalRow(array) {
    let prev = null;
    for (let index in array) {
        if (prev == null) {
            prev = array[index]
        }
        if (array[index] != prev) {
            return false
        }
    }

    return true
}

// console.log(identicalRow([1, 2, 3])) // False
// console.log(identicalRow([1, 1, 1])) // True