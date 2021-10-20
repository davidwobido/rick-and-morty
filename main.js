import createCharacterCard from "./components/CharacterCard";
import { createElement } from "./lib/elements";
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

  const response = await fetch("https://rickandmortyapi.com/api/character");
  const body = await response.json();
  console.log(body);
  const characters = body.results;

  const characterCards = characters.map(function (character) {
    return createCharacterCard(character);
  });

  // const statusSymbol = function(status) {
  //   if status = "Alive" {
  //     return "🟢";
  //   }
  // }

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

  appElement.append(headerElement, mainElement, footerElement);
}

renderApp();
