/*
23. Skriv en funktion. som kan udregne kvadratrødder.
    F.eks. er  kvadratroden af 4 2, 9 3, 16 4, osv.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.

    Lavet af Patrick
*/

function sqrt(number){
    let start = number;
    let error = 0.00001;

    while((start - number/start) > error) {
        start = (start + number/start)/2;
    }

    return start;
}    

//console.log(sqrt(98))