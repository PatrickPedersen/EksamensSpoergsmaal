/*
    25. Skriv en funktion, som kan sortere et array af tal.
        F.eks. kunne "[3, 5, 2, 1, 2]" blive til "[1, 2, 2, 3, 5]".

        Vis hvordan funktionen kan gøres til en metode i en class.

        Beskriv koden med et flowchart og offentliggør den på et git repository.

        Lavet af Patrick
*/

function sort(array) {
    let done = false

    // While !done skal bruges for at sikre at vi konstant kører igennem arrayet og sorterer til vi ikke kan sortere længere.
    // Dette sikrer at når vi når enden af arrayet, så looper vi igennem igen. Når vi så ikke kaan sortere længere, så sætter vi done = true.
    while (!done) {
        done = true
        // For placering i array
        for (index in array) {
            // Hvis placering - 1 (tidligere placering) er større en nyere placering
            if (array[index - 1] > array[index]) {
                done = false
                // Så byt dem, tmp (temp) bliver sat til den tidligere placering
                let tmp = array[index - 1]
                // Tidligere placering bliver overskrevet af den nye placering (vi flytter værdien frem i arrayet)
                array[index - 1] = array[index]
                // Den nye placering får så den gamle placerings værdi (vi flytter værdien tilbage i arrayet)
                array[index] = tmp
                // Eksempel. Array = [3,2,1] hvis placering 1 er større en placering 2. Så byt dem.
                // Arrayet vil nu se således ud, Array = [2,3,1]. Dette gentager vi, indtil arrayet ser således ud.
                // Array = [1,2,3]. Bubble sort er nu færdig.
            }
        }
    }
    return array
}

//console.log(sort([3, 5, 2, 1, 2]))