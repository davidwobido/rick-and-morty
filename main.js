import createCharacterCard from "./components/characterCard";
import createSearchElement from "./components/searchElement";
import { createElement } from "./lib/elements";
import { fetchCharacters } from "./lib/fetchElement";
import "./style.css";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createElement(
    "header",
    {
      className: "headerElement",
    },
    [
      createElement("h1", {
        className: "titleText",
        textContent: "Rick and Morty",
      }),
    ]
  );
  const searchElement = createSearchElement();

  const characters = await fetchCharacters();

  const characterCards = characters.map(function (character) {
    return createCharacterCard(character);
  });

  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    characterCards
  );

  const footerElement = createElement("footer", {
    className: "footerElement",
    textContent: "Footer",
  });

  appElement.append(headerElement, searchElement, mainElement, footerElement);
}

renderApp();
