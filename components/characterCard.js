import { createElement } from "../lib/elements";
import styles from "./characterCard.module.css";

export default function createCharacterCard() {
  const characterCard = createElement("article", { className: styles.card }, [
    createElement("div", { className: styles.image, textContent: "Picture" }),
    createElement("div", { className: styles.textWrapper }, [
      createElement("div", {
        className: styles.headline,
        textContent: "Headline",
      }),
      createElement("div", {
        className: styles.status,
        textContent: "Status",
      }),
      createElement("div", {
        className: styles.location,
        textContent: "Location",
      }),
      createElement("div", {
        className: styles.firstSeen,
        textContent: "FirstSeen",
      }),
    ]),
  ]);

  return characterCard;
}
