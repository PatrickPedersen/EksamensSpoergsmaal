/*
12. Skriv en funktion, som kan udregne potensener.
    F.eks. er 2^2 = 4, 2^3 = 8, 2^4 = 16, osv.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.

    Lavet af Patrick
*/

function power(num, power) {
    let sum = null;
    for (let i = 1; i < power; i++) {
        // Sæt sum på første runde
        if(sum == null) {
            sum = num * num
        } else {
            // Brug sum resten af tiden
            sum = sum * num
        }
        
    }
    return sum
}

console.log(power(2,6))