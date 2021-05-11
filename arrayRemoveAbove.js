/*
    8.  Skriv en funktion, som kan bortfiltrere alle værdierne i et array, som er over en given værdi.
        F.eks. vil en bortfiltrering af tal over 2 i arrayet [1, 2, 3, 4, 5] blive til [1, 2].

        Vis hvordan funktionen kan gøres til en metode i en class.

        Beskriv koden med et flowchart og offentliggør den på et git repository.

        Lavet af Patrick
*/

function removeAbove(array, num) {
    let result = []
    // Looper igennem array
    for (let index in array) {
        // Hvis array er over eller lig med num, så skub værdien til result array.
        if (array[index] <= num) {
            result.push(array[index])
        }
    }

    return result
}

console.log(removeAbove([1, 2, 3, 4, 5], 2))