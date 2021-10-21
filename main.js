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

  async function handleSubmit(searchQuery) {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?name=" + searchQuery
    );
    const body = await response.json();
    const characters = body.results;
    const characterElements = characters.map((character) =>
      createCharacterCard(character)
    );
    console.log(characterElements);
    mainElement.innerHTML = "";
    mainElement.append(...characterElements);
  }

  const searchElement = createSearchElement(handleSubmit);

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
