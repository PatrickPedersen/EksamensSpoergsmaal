/*
6.  Skriv en funktion, som kan bestemme hyppigheden af hvert tal i et array.
    F.eks. kunne "[0, 1, 1, 1, 2, 3, 3]" blive til "[[1, 0], [3, 1], [1, 2], [2, 3]]".

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

function arrayFrequency(array) {
    let count;
    let numbers = []
    let result = []

    for (let index in array) {
        for (let num in numbers) {
            if (array[index] != numbers[num]) {
                numbers.push(array[index])
                console.log(true)
            }
        }
    }

    // for (let index in array) {
    //     for (index2 in array) {
    //         if (array[index2] == array[index]) {
    //             count += 1;
    //             console.log(count)
    //         }
    //     }
    //     result.push([array[index], count])
    // }
    return numbers
}

console.log(arrayFrequency([0, 1, 1, 1, 2, 3, 3]))