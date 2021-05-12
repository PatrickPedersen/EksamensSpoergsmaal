/*
15. Skriv en funktion, som kan tællene antallet af ord i en string.
    F.eks. er der 7 ord i "Dette er en string med syv ord.".

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.

    Lavet af Patrick
*/

function wordCount(text) {
    let wordCount
    if (text.length > 0) {
        wordCount = 1
    } else {
        wordCount = 0
    }

    for (let index in text) {
        if (text[index] == " ") {
            wordCount++
        }
    }

    return wordCount
}

console.log(wordCount("Dette er en string med syv ord."))