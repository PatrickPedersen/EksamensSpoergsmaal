/*
10. Skriv en funktion, som kan udregne længden af den ukendte side i en retvinklet trekant.
    F.eks. vil længden af hypotenusen i en trekant med kateter af længde 3 og 4 være sqrt(3^2 + 4^2) = sqrt(25) = 5.

    Beskriv koden med et flowchart og offentliggør den på et git repository.

    Lavet af Patrick
*/

function calcLenghtTriangle(a,b) {
    let side1 = a*a
    let side2 = b*b

    return Math.sqrt(side1 + side2)
}

console.log(calcLenghtTriangle(3,4))