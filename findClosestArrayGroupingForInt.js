/*
20. Skriv en funktion, som fra to arrays kan finde de sæt, som er tættest på et bestemt tal.
    F.eks. vil [[2, 6], [3, 5]] være svaret på arrays [1, 2, 3] og [4, 5, 6] hvor sættene skal være tættest på 8.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];


function closestSet(arr1, arr2, num) {
    obj = {};
    for (i of arr1) {
        for (j of arr2) {
            if (obj[i + j] == undefined) {
                obj[i + j] = [];
            }
            obj[i + j].push([i, j]);
        }
    }
    if (obj[num]) {
        return obj[num];
    }
    keys = Object.keys(obj);
    key = keys[0];
    dif = Math.abs(num - Number(key));
    for (i = 1; i < keys.length; i++) {
        iDif = Math.abs(num - Number(keys[i]));
        if (iDif < dif) {
            dif = iDif;
            key = keys[i];
        }
    }
    console.log(obj);
    return obj[key];
}

console.log(closestSet(arr1, arr2, 8))