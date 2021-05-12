/*
16. Skriv en funktion, som kan konvertere en række af sekunder til timer/minutter/sekunder.
    F.eks. vil [30, 90, 3690] blive til ["0/0/30", "0/1/30", "1/1/30"]

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.

    Lavet af Patrick
*/

function secToHMS(array) {
    let result = []

    for (let index in array) {
        let ms = array[index] * 1000

        const sec = Math.floor((ms / 1000) % 60);
        const min = Math.floor((ms / (1000 * 60)) % 60);
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60);

        result.push([`${hrs}/${min}/${sec}`])
    }

    return result
}

console.log(secToHMS([30, 90, 3690]))