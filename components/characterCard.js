import { createElement } from "../lib/elements";
import styles from "./characterCard.module.css";

export default function createCharacterCard({
  name,
  status,
  location,
  episode,
  image,
  species,
}) {
  const firstEpisode = episode[0];
  const firstEpisodeElement = createElement("div", {
    textContent: firstEpisode,
    className: styles.content,
  });

  const characterCard = createElement("article", { className: styles.card }, [
    createElement("img", {
      className: styles.image,
      alt: "",
      src: image,
    }),
    createElement("div", { className: styles.textWrapper }, [
      createElement(
        "div",
        {
          className: styles.nameStatus,
        },
        [
          createElement("h2", {
            className: styles.headline,
            textContent: name,
          }),
          createElement("div", {
            className: styles.status,
            textContent: status + " — " + species,
          }),
        ]
      ),
      createElement(
        "div",
        {
          className: styles.location,
        },
        [
          createElement("div", {
            className: styles.preline,
            textContent: "Last known location:",
          }),
          createElement("div", {
            className: styles.content,
            textContent: location.name,
          }),
        ]
      ),
      createElement(
        "div",
        {
          className: styles.firstSeen,
        },
        [
          createElement("div", {
            className: styles.preline,
            textContent: "First seen in:",
          }),
          firstEpisodeElement,
        ]
      ),
    ]),
  ]);

  fetch(firstEpisode)
    .then((response) => response.json())
    .then((body) => {
      firstEpisodeElement.textContent = body.name;
    });
  return characterCard;
}
