/*
21. Skriv en funktion, som kan bortfiltrere de værdier i et array der opfylder en betingelse angivet af en callback funktion.
    F.eks. vil en bortfiltrering på [1, 2, 3, 4, 5] med callback funktionen "function (x) {return x > 2;}" resultere i [1, 2].

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

// Hvad er et callback? Et callback er en funktion, der sendes som et argument til en anden funktion. 
// Og hvad fanden betyder det så, Patrick?

// Et callback kan ses som et if statement. I det her tilfælde, så tjekker vi om en værdi vi passerer igennem til vores callback funktion
// passerer vores tjek. Her tjekker vi om det vi sender til vores callback er større en tallet 2.
// Så hvis jeg siger callback(3), så vil dette være sandt, da 3 er højere en 2. Hvilket er hvad vi tjekker for.
// Når vi nu ved dette, så burde dette jo være simpelt! Ja og nej... Det tog ihvertfald mig noget tid at forstår dette.

// Her er vores callback function. Med andre ord, en funktion. Det er denne funktion som vi tjekker vores værdier i arrayet op imod.
// Så hvis tallet fra arrayet er større en 2, så er det sandt! Wuhuu!!
const callback = function (x) {return x > 2;}

// Her er vores filter funktion, som tager et callback (en anden funktion).
// I dette filter tager vi et array, som vi gerne filtre og vores callback.
function callbackFilter(array, myCallBack) {

    // Vi laver et array der holder vores resultat/svar.
    let result = []

    // Looper igennem vores array, som vi gav vores filter.
    for (let index in array) {

        // Hvis værdien på array placeringen passerer vores tjek i callback funktionen, så gør vi intet. 
        // For simon fik vist byttet rundt på større og mindre en... :/
        // Vi skal derfor tjekke om vores tal fejler callback funktionen. Hvis værdien derfor ikke er over 2, så indsæt i result array.
        // Hvis værdien er over 2, så gå videre. Tak Simon, det var jo slet ikke forvirende...
        // ! foran myCallBack betyder, hvis dette er falsk så gør dette.
        if (!myCallBack(array[index])) {
            result.push(array[index])
        }
    }

    // Returner resultatet.
    return result
}

//console.log(callbackFilter([1, 2, 3, 4, 5], callback))