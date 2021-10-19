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
    [
      createCharacterCard({
        name: "Toxic",
        status: "Dead",
        location: "Earth",
        firstSeen: "Rest and Ricklaxation",
      }),
      createCharacterCard({
        name: "Larva Alien",
        status: "Alive",
        location: "Planet Squanch",
        firstSeen: "Get Schwifty",
      }),
    ]
  );

  const footerElement = createElement("footer", {
    className: "footerElement",
    textContent: "Footer",
  });

  appElement.append(headerElement, mainElement, footerElement);
}

renderApp();
