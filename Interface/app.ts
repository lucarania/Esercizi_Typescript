interface Internet {
  ip: number;
  connettiInternet(): void;
}

abstract class Dispositivo {
  constructor(protected nome: string, protected anno: number) {}
  abstract accendi(): void;
  abstract spegni(): void;
}

class Telefono extends Dispositivo {
  accendi() {
    console.log("il telefono si accende");
  }
  spegni() {
    console.log("il telefono si spegne");
  }
}

class Iphone extends Dispositivo implements Internet {
  ip: number;
  constructor(nome: string, anno: number, ip: number) {
    super(nome, anno);
    this.ip = ip;
  }

  accendi() {
    console.log("l'iphone si accende");
  }
  spegni() {
    console.log("l'iphone si spegne");
  }
  connettiInternet(): void {
    console.log("l'iphone si connette");
  }
}

class Computer extends Dispositivo {
  ip: number;
  constructor(nome: string, anno: number, ip: number) {
    super(nome, anno);
    this.ip = ip;
  }

  accendi() {
    console.log("il computer si accende");
  }
  spegni() {
    console.log("il computer si spegne");
  }
  connettiInternet(): void {
    console.log("l'iphone si connette");
  }
}

/* ESTENSIONE DI PIU INTERFACCE */

interface x {
  nome: string;
}

interface y extends x {
  cognome: string;
  respira(): void;
}

interface z {
  telefono: string;
  saluta(): void;
}

interface w extends y, z {
  via: string;
  mangia(): void;
}

class esempio implements w {
  nome: string;
  cognome: string;
  telefono: string;
  via: string;

  constructor(nome: string, cognome: string, telefono: string, via: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.telefono = telefono;
    this.via = via;
  }

  mangia(): void {
    console.log("stai mangiando");
  }
  respira(): void {
    console.log("stai respirando");
  }
  saluta(): void {
    console.log("hai salutato");
  }
}
