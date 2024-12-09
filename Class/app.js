"use strict";
class People {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    /* azione per presentarsi */
    presenta() {
        console.log(`ciao sono ${this.nome} ${this.cognome}`);
    }
    /* ho fatto in modo che l'azione del saluto prendesse il nome della persona 1  */
    saluta(people1) {
        console.log(`ciao ${people1.nome} ${people1.cognome}, piacere `);
    }
}
let people1 = new People("giacomo", "rossi");
let people2 = new People("giuseppe", "verdi");
let people3 = new People("luca", "blu");
people1.presenta();
people2.saluta(people1);
