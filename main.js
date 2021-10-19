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
        pic: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
        name: "Toxic Rick",
        status: "Dead",
        location: "Earth",
        firstSeen: "Rest and Ricklaxation",
      }),
      createCharacterCard({
        pic: "https://rickandmortyapi.com/api/character/avatar/199.jpeg",
        name: "Larva Alien",
        status: "Alive",
        location: "Planet Squanch",
        firstSeen: "Get Schwifty",
      }),
      createCharacterCard({
        pic: "https://rickandmortyapi.com/api/character/avatar/219.jpeg",
        name: "Mechanical Summer",
        status: "Unknown",
        location: "Earth",
        firstSeen: "Rickmancing the Stone",
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
