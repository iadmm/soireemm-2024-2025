const quotes = [
  {
    text: "Finis tes noisettes, Raton !",
    author: "Jérôme Coupé",
  },
  {
    text: "Merde. Je vais encore devoir ramener Jérôme.",
    author: "Nicolas Gillard",
  },
  {
    text: "Le serveur de licenses d'Athéna aura ma peau.",
    author: "Julien Moreau",
  },
  {
    text: "Le rendu photoréaliste, c'est simple: c'est l'ennemi.",
    author: "Fabrice Laroche",
  },
  {
    text: "C'est assez réussi pour un model sheet de Barbapapa.",
    author: "Olivier Senny",
  },
  {
    text: "Moi, Blender, j'aime encore bien.",
    author: "Cédric Deru",
  },
  {
    text: "En unity comme en web, une variable reste une variable.",
    author: "Thomas Henrion",
  },
  {
    text: "Le trajet Namur-Bruxelles est merdique cette année.",
    author: "Christophe Pesesse",
  },
  {
    text: "Quelqu'un aurait vu mes licences Nuke, par hasard?",
    author: "Caroline Voglaire",
  },
  {
    text: "Le Karkadé ... c'est pas du thé à l'hibiscus?",
    author: "Nicolas Grandry",
  },
  {
    text: "Dites, en Janvier, on a parfois des congères à St Hubert.",
    author: "Sylvia Minnaert",
  },
  {
    text: "Les TFE, cette année, j'en fais mon affaire.",
    author: "Chadi Abou Saryia",
  },
  {
    text: "Maintenant je peux le dire: les enfants, c'est fatiguant.",
    author: "Fabian Andry",
  },
  {
    text: "C'est le genre de soirée à effets spéciaux spontannés",
    author: "Damien Welch",
  },
];

class RandomQuotes extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.elText = this.querySelector("[data-text]");
    this.elQuote = this.querySelector("[data-author]");
    this.changeQuote();
  }

  changeQuote() {
    const randomNbr = Math.floor(Math.random() * quotes.length);
    const randomText = quotes[randomNbr].text;
    const randomAuthor = quotes[randomNbr].author;

    this.elText.textContent = randomText;
    this.elQuote.textContent = randomAuthor;
  }
}

customElements.define("random-quotes", RandomQuotes);
