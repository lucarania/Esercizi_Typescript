interface Country<t> {
  name: string;
  languages: t;
}

const languagesObj1: Country<string> = {
  name: "New Zealand",
  languages: "English, Māori",
};

console.log(languagesObj1.languages);

type Languages = Country<string[]>;

const languagesObj2: Languages = {
  name: "Spain",
  languages: ["Spanish", "Catalan", "Galician", "Basque", "Valencian"],
};

console.log(languagesObj2.languages.join(", "));
