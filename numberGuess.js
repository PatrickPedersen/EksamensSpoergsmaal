/*
18. Lav et spil hvor spilleren skal gætte et tilfældigt tal genereret af computeren.
    F.eks. kunne computeren generere et tal mellem 1 og 100 og give spilleren 10 forsøg.
    Brug eventuelt, alert(), prompt() og Math.random().
    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

function numGen() {
    return Math.floor(Math.random() * 100);
  }
  
  function numGuess(maal, maxGuess, currAttempts) {
    let guess = window.prompt("Indtast dit gæt");
    console.log(guess);
    if (guess == maal) {
      window.alert("Dit gæt var rigtigt!!");
      window.alert("Du brugte " + currAttempts + " gæt");
    }
    else if (guess < maal && maxGuess > currAttempts) { 
      window.alert("Dit gæt var for lavt!");
      numGuess(maal, maxGuess, currAttempts+1);
    }
    else if (guess > maal && maxGuess > currAttempts) {
      window.alert("Dit gæt var for højt!");
      numGuess(maal, maxGuess, currAttempts+1);
    }
    else {
      console.log("Der gik noget galt!?");
      return
    }
  }
  
  const PCNumber = numGen();
  numGuess(PCNumber, 10, 0);