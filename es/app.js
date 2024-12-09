"use strict";
/* Funzione per calcolare il totale */
function calcolaTotale(prodotti) {
    return prodotti.reduce((totale, prodotto) => totale + prodotto.prezzo * prodotto.quantita, 0);
}
/* Funzione per aggiungere un prodotto */
function aggiungiProdotto(prodotti, nome, prezzo, quantita) {
    const nuovoProdotto = { nome, prezzo, quantita };
    prodotti.push(nuovoProdotto);
}
let carrello = [
    { nome: "Mela", prezzo: 1.5, quantita: 3 },
    { nome: "Pane", prezzo: 2.0, quantita: 2 },
];
/* Aggiungi un prodotto */
aggiungiProdotto(carrello, "Latte", 1.2, 4);
const totale = calcolaTotale(carrello);
console.log("Totale carrello: €", totale);
