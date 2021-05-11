/*
    14. Skriv en funktion, som kan bortfiltrere ulige tal fra en række af tal.
        F.eks. vil [1, 2, 3, 4, 5] blive til [2, 4].

        Vis hvordan funktionen kan gøres til en metode i en class.

        Beskriv koden med et flowchart og offentliggør den på et git repository.

        Lavet af Marcus
*/

function removeOdd (numbers) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            numbers.splice(i, 1);
        } 
        else {
         // Vi behøver ikke gøre noget, hvis tallet er lige
        }
    }
    return numbers;
}

console.log(removeOdd([1, 2, 3, 4, 5]))