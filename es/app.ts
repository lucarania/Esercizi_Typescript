interface Prodotto {
  nome: string;
  prezzo: number;
  quantita: number;
}

/* Funzione per calcolare il totale */

function calcolaTotale(prodotti: Prodotto[]): number {
  return prodotti.reduce(
    (totale, prodotto) => totale + prodotto.prezzo * prodotto.quantita,
    0
  );
}

/* Funzione per aggiungere un prodotto */

function aggiungiProdotto(
  prodotti: Prodotto[],
  nome: string,
  prezzo: number,
  quantita: number
): void {
  const nuovoProdotto: Prodotto = { nome, prezzo, quantita };
  prodotti.push(nuovoProdotto);
}

let carrello: Prodotto[] = [
  { nome: "Mela", prezzo: 1.5, quantita: 3 },
  { nome: "Pane", prezzo: 2.0, quantita: 2 },
];

/* Aggiungi un prodotto */
aggiungiProdotto(carrello, "Latte", 1.2, 4);

const totale = calcolaTotale(carrello);
console.log("Totale carrello: €", totale);
