/*
6.  Skriv en funktion, som kan bestemme hyppigheden af hvert tal i et array.
    F.eks. kunne "[0, 1, 1, 1, 2, 3, 3]" blive til "[[1, 0], [3, 1], [1, 2], [2, 3]]".

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

function arrayFrequency(array) {

    // Først så sorterer vi vores array
    // Dette kaldes for et bubble sort, hvilket betyder at den gentagne gange går gennem listen, 
    // sammenligner tilstødende elementer og bytter dem, hvis de er i den forkerte rækkefølge.
    let done = false
    while (!done) {
        done = true
        // For placering i array
        for (index in array) {
            // Hvis placering - 1 (tidligere placering) er større en nyere placering
            if (array[index-1] > array[index]) {
                done = false
                // Så byt dem, tmp (temp) bliver sat til den tidligere placering
                let tmp = array[index-1]
                // Tidligere placering bliver overskrevet af den nye placering (vi flytter værdien frem i arrayet)
                array[index-1] = array[index]
                // Den nye placering får så den gamle placerings værdi (vi flytter værdien tilbage i arrayet)
                array[index] = tmp
                // Eksempel. Array = [3,2,1] hvis placering 1 er større en placering 2. Så byt dem.
                // Arrayet vil nu se således ud, Array = [2,3,1]. Dette gentager vi, indtil arrayet ser således ud.
                // Array = [1,2,3]. Bubble sort er nu færdig.
            }
        }
    }

    // Vi danner to arrays, den ene til at holde alle de unikke tal, vi holder derfor ikke styr på duplikatter.
    // Det andet array holder styr på, hvor mange gange den værdi dukker op i arrayet.
    // Eftersom vi har sorteret arrayet, så kan vi holde øje med den tidligere værdi, uden af være bange for at den dukker op igen.
    let uniqueNumbers = [],
        occurences = [],
        prev
    // For hver placering i array
    for (let index in array) {
        // hvis array placering ikke er lig den tidligere værdi (Det er en ny værdi)
        if (array[index] !== prev) {
            // Så skub det tal på den placering in i array a
            uniqueNumbers.push(array[index]);
            // Array b holder styr på hvor mange gange vi har set denne værdi, altså dens (frequency)
            occurences.push(1)
        } else {
            // Hvis array placeringen er lig den tidligere værdi (altså at vi har det samme tal igen), så øg mængden i array b.
            occurences[occurences.length - 1]++
        }
        // Sæt prev til den nuværende værdi på den nuværende placering
        prev = array[index]
    }
    // Eksempel. Array = [1,1,1,2,2,3] hvis placering 0 i arrayet ikke er lig vores tidligere værdi (den er ikke blevet sat endnu, så dette er sandt)
    // Så skub værdien på placering 0, hvilket er tallet 1, ind i array uniqueNumbers, og indsæt 1 i array occurences. Nu ved vi at vi har stødt på tallet 1 og at vi har set dette tal 1 gang.
    // Sæt den tidligere værdi til 1. Nu går vi videre til placering 1, her har vi igen tallet 1, derfor er vores if false og vi forøger værdien i array occurences med 1.
    // Nu har vi stødt på værdien 1, 2 gange. Sådan fortsætter vi indtil array uniqueNumbers ser således ud [1,2,3] og array b ser således ud [3,2,1]

    let result = []
    // Her looper vi igennem uniqueNumbers, for vores forskellige tal vi stødte på
    for (let index in uniqueNumbers) {
        // Her sætter vi vores unikke tal sammen med mængden af gange vi har stødt på dem.
        // Eksempel. result = [[1,3], [2,2], [3,1]]
        result.push([uniqueNumbers[index], occurences[index]])
    }

    return result
}

console.log(arrayFrequency([5, 2, 1, 1, 2, 3, 3, 5, 5, 8, 8, 4]))