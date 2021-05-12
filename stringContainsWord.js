/*
19. Skriv en funktion, som kan tjekke om et bestemt ord findes i en tekst.
    F.eks. tjek om teksten "Indeholder denne tekst ordet 'programmering'?" indeholer ordet "programmering".

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

function containsWord(text, word) {
    var y=0;
   
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    return true
                }
            }
            y=0;
        }
    }
    return false
}

console.log(containsWord("Indeholder denne tekst ordet 'programmering'?", "programmering"))