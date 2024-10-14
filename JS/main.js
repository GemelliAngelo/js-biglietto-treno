// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// * - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// * - va applicato uno sconto del 20% per i minorenni
// * - va applicato uno sconto del 40% per gli over 65.
// * - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// * CHILOMETRI DA PERCORRERE 

let ticketPrice = userDistance * 0.21;
ticketPrice = ticketPrice.toFixed(2);

const userDistance = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
if (isNaN(userDistance) || userDistance <= 0) {
  alert("Chilometri inseriti non validi. Riprova");
}

// * ETÀ

const userAge = parseInt(prompt("Quanti anni hai?"));
if (isNaN(userAge) || userAge <= 0) {
  alert("Età inserita non valida. Riprova");
}

// * CALCOLO PREZZO SCONTATO
    
if (userAge < 18) {
    ticketPrice = ticketPrice * 20%
}

else if (userAge >= 65) {
    ticketPrice = ticketPrice * 40%
    
}

// ! OUTPUT

console.log(ticketPrice);

