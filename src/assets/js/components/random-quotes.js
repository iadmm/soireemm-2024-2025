import { quotes } from "./quotes.js";

class RandomQuotes extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.elText = this.querySelector("[data-text]");
    this.elAuthor = this.querySelector("[data-author]");

    const elButton = this.querySelector("button");
    elButton.removeAttribute("hidden");

    elButton.addEventListener("click", (event) => {
      this.changeQuote();
    });

    this.changeQuote();
  }

  changeQuote() {
    const randomNbr = Math.floor(Math.random() * quotes.length);
    const randomText = quotes[randomNbr].text;
    const randomAuthor = quotes[randomNbr].author;

    this.elText.textContent = randomText;
    this.elAuthor.textContent = randomAuthor;
  }
}

customElements.define("random-quotes", RandomQuotes);
