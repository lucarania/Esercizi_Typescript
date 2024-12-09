"use strict";
class Dispositivo {
    constructor(nome, anno) {
        this.nome = nome;
        this.anno = anno;
    }
}
class Telefono extends Dispositivo {
    accendi() {
        console.log("il telefono si accende");
    }
    spegni() {
        console.log("il telefono si spegne");
    }
}
class Iphone extends Dispositivo {
    constructor(nome, anno, ip) {
        super(nome, anno);
        this.ip = ip;
    }
    accendi() {
        console.log("l'iphone si accende");
    }
    spegni() {
        console.log("l'iphone si spegne");
    }
    connettiInternet() {
        console.log("l'iphone si connette");
    }
}
class Computer extends Dispositivo {
    constructor(nome, anno, ip) {
        super(nome, anno);
        this.ip = ip;
    }
    accendi() {
        console.log("il computer si accende");
    }
    spegni() {
        console.log("il computer si spegne");
    }
    connettiInternet() {
        console.log("l'iphone si connette");
    }
}
class esempio {
    constructor(nome, cognome, telefono, via) {
        this.nome = nome;
        this.cognome = cognome;
        this.telefono = telefono;
        this.via = via;
    }
    mangia() {
        console.log("stai mangiando");
    }
    respira() {
        console.log("stai respirando");
    }
    saluta() {
        console.log("hai salutato");
    }
}
