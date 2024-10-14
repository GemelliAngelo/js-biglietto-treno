// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// * - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// * - va applicato uno sconto del 20% per i minorenni
// * - va applicato uno sconto del 40% per gli over 65.
// * - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// ! RACCOLTA DATI

let ticketPrice = userDistance * 0.21;
ticketPrice = ticketPrice.toFixed(2);

const userDistance = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
if (isNaN(userDistance) || userDistance <= 0) {
  alert("Chilometri inseriti non validi. Riprova");
} else {
  const userAge = parseInt(prompt("Quanti anni hai?"));
}

if (isNaN(userAge) || userAge <= 0) {
  alert("Età inserita non valida. Riprova");
} else {
}

// SE l'età è >= 65 anni
//  - applico lo sconto del 40%

//  ALTRIMENTI SE l'età è <= 18 anni
//   - applico lo sconto del 20%

// ! OUTPUT
// Restituisco il prezzo del biglietto specificando lo sconto
