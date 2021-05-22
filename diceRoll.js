/*
7. Skriv en funktion, som kan simulere terningekast med forskellige antal terninger og sider.
    F.eks. kunne resultatet af 3 terninger med 10 sider være [3, 5, 9].

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

let results = [];

function DiceSimulator(rolls, sides) {
    for (i = 0; i < rolls; i++) (
    results.push(Math.floor(Math.random() * sides) + 1)
    );
    console.log(results);
}


//Slet denne linje, når du skal indtil eksamen. (Indsæt antal terninekast v. 10 og antal sider på terningen v. 6)
DiceSimulator(10, 6);