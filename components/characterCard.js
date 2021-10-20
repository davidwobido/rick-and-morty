import { createElement } from "../lib/elements";
import styles from "./characterCard.module.css";

export default function createCharacterCard({
  name,
  status,
  location,
  firstSeen,
  pic,
}) {
  const characterCard = createElement("article", { className: styles.card }, [
    createElement("img", {
      className: styles.image,
      alt: "",
      src: pic,
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
            textContent: status,
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
            textContent: location,
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
          createElement("div", {
            className: styles.content,
            textContent: firstSeen,
          }),
        ]
      ),
    ]),
  ]);
  return characterCard;
}
