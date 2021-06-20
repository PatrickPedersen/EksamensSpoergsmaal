/*
22. Skriv en funktion, som kan producere et givent antal af de første værdier fra fibonacci sekvensen (summen af de to forrige tal bliver til det næste tal).
    F.eks. er produktionen af de første 7 tal 1, 1, 2, 3, 5, 8, 13.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

function xFibonaci(amount) {
    let fiboString = [1, ];
    let xFibo = 1;
    let val1 = 1;
    let val2 = 1;
    for (i = 0; i < amount-1; i++) {
        fiboString.push(xFibo);
        xFibo = val1 + val2
        val2 = val1;
        val1 = xFibo;
    }
    console.log(fiboString);
}


xFibonaci(10);