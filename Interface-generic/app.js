"use strict";
const languagesObj1 = {
    name: "New Zealand",
    languages: "English, Māori",
};
console.log(languagesObj1.languages);
const languagesObj2 = {
    name: "Spain",
    languages: ["Spanish", "Catalan", "Galician", "Basque", "Valencian"],
};
console.log(languagesObj2.languages.join(", "));
