/*
11. Skriv en funktion, som kan kan udregne et tals fakultet.
    F.eks. er fakultet af 4  = 1 * 2 * 3 * 4 = 24.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.

    Lavet af Patrick
*/

function faculty(num) {
    if (num < 0) return
    if (num < 2) return 1
    return num * faculty(num - 1)
}

console.log(faculty(4))