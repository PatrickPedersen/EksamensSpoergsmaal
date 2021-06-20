/*
24. Skriv en funktion, som kan generere alle mulige kombinationer af en række symboler med en given længde.
    F.eks. er de mulige kombinationer af ["a", "b"] med en længde på 2: aa, ab, ba, bb.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/


function allPossibleCombinations(input, length, curstr) {
    if(curstr.length == length) return [ curstr ];
    var ret = [];
    for(var i = 0; i < input.length; i++) {
        ret.push.apply(ret, allPossibleCombinations(input, length, curstr + input[i]));
    }
    return ret;
}

var input = [ 'a', 'b', 'c', 'd'];
console.log(allPossibleCombinations(input, 3, ''));