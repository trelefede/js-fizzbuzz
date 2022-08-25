// Scrivi un programma che stampi in console i numeri da 1 a 100, 
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. 
// Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.



console.log('js ok');

// ciclo for per scrivere numeri da 1 a 100
for (let i = 1; i <= 100; i++) {


    // codizione per i divisibili per 3 e 5 
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('fizzbuzz')
    }
    //condizione per i divisibili per 3
    else if (i % 3 === 0) {
        console.log('fizz')
    }
    //condizione per i divisibili per 5
    else if (i % 5 === 0) {
        console.log('buzz')
    }
    // nessuna condizione 
    else {
        console.log(i)
    }
}



// BONUS 1
// creazione griglia
const grid = document.getElementById('grid');

for (let square = 1; square <= 100; square++) {
    const element = document.createElement('div'); //creo div nell'html

    // codizione per i divisibili per 3 e 5 
    if (square % 5 === 0 && square % 3 === 0) {
        element.append('fizzbuzz'); //aggiungo fizzbuzz all'element div creato sopra
    }
    //condizione per i divisibili per 3
    else if (square % 3 === 0) {
        element.append('fizz'); //aggiungo fizz all'element div creato sopra
    }
    //condizione per i divisibili per 5
    else if (square % 5 === 0) {
        element.append('buzz'); //aggiungo buzz all'element div creato sopra
    }

    // nessuna condizione 
    else {
        element.append(square); //aggiungo square all'element div creato sopra
    }

    grid.append(element);
}