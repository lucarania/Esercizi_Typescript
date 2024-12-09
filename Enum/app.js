"use strict";
let Potere;
(function (Potere) {
  Potere[(Potere["FUOCO"] = 0)] = "FUOCO";
  Potere[(Potere["ACQUA"] = 1)] = "ACQUA";
  Potere[(Potere["VENTO"] = 2)] = "VENTO";
  Potere[(Potere["GHIACCIO"] = 3)] = "GHIACCIO";
})(Potere || (Potere = {}));
const personaggio = {
  nome: "drago",
  potere: Potere.VENTO,
};
