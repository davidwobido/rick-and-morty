import createCharacterCard from "./components/CharacterCard";
import { createElement } from "./lib/elements";
import "./style.css";

function renderApp() {
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

  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    [createCharacterCard()]
  );

  const footerElement = createElement("footer", {
    className: "footerElement",
    textContent: "Footer",
  });

  appElement.append(headerElement, mainElement, footerElement);
}

renderApp();
