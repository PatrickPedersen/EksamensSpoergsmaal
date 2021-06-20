/*
20. Skriv en funktion, som fra to arrays kan finde de sæt, som er tættest på et bestemt tal.
    F.eks. vil [[2, 6], [3, 5]] være svaret på arrays [1, 2, 3] og [4, 5, 6] hvor sættene skal være tættest på 8.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function closestPair(a, b, target) {
  let sort = [];
  let result = [];
  for (i in a) {
    for (j in b) {
      let num1 = a[i];
      let num2 = b[j]
      sort.push([num1+num2, num1, num2]);
    }
  }
  sort.sort();
  for (k in sort) {
    if (sort[k][0] == target) {
      sort[k].shift()
      result.push(sort[k])
    }
  }
  return result
}


console.log(closestPair(arr1, arr2, 8));