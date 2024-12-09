class People {
  constructor(private nome: string, private cognome: string) {}

  /* azione per presentarsi */

  presenta() {
    console.log(`ciao sono ${this.nome} ${this.cognome}`);
  }

  /* ho fatto in modo che l'azione del saluto prendesse il nome della persona 1  */

  saluta(people1: People) {
    console.log(`ciao ${people1.nome} ${people1.cognome}, piacere `);
  }
}

let people1: People = new People("giacomo", "rossi");
let people2: People = new People("giuseppe", "verdi");
let people3: People = new People("luca", "blu");

people1.presenta();
people2.saluta(people1);
