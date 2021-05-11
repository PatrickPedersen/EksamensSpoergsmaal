/*
    4.  Skriv en funktion, som kan konkatitenere 2 rækker af tal.
        F.eks. vil [1, 2, 3] og [4, 5, 6]. blive til [1, 2, 3, 4, 5, 6]

        Vis hvordan funktionen kan gøres til en metode i en class.

        Beskriv koden med et flowchart og offentliggør den på et git repository.

        Lavet af Patrick
*/

// Function
// Method 1, Spread operator => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
function arrayConcatSpread(array1,array2) {
    let result = [...array1, ...array2]
    return result
}

// Method 2, For loops...
function arrayConcat(array1, array2) {
    let result = []

    for (let index in array1) {
        result.push(array1[index])
    }
    for (let index in array2) {
        result.push(array2[index])
    }

    return result
}

// Class Method
class myClass {
    constructor(array1, array2) {
        this.array1 = array1
        this.array2 = array2
    }

    get getArrayConcat() {
        return this.arrayConcat()
    }

    arrayConcat() {
        let result = []

        for (let index in this.array1) {
            result.push(this.array1[index])
        }
        for (let index in this.array2) {
            result.push(this.array2[index])
        }

        return result
    }
}

// let calc = new myClass([1,2,3],[4,5,6])
// console.log(calc.getArrayConcat)
