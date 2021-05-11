/*
    9.  Skriv en funktion, som kan ændre et array til at stå i omvendt rækkefølge.
        F.eks. vil [1, 2, 3, 4] blive til [4, 3, 2, 1]

        Vis hvordan funktionen kan gøres til en metode i en class.

        Beskriv koden med et flowchart og offentliggør den på et git repository.

        Lavet af Patrick
*/

function reverse(array) {
    let result = []
    
    for (let index of array) {
        result.push(array[array.length - index])
    }

    return result
}

console.log(reverse([1, 2, 3, 4]))