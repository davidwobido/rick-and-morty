import { createElement } from "../lib/elements";
import styles from "./searchElement.module.css";

export default function createSearchElement(onSubmit) {
  const searchInput = createElement("input", {
    type: "search",
    className: styles.searchInput,
  });

  const searchButton = createElement("button", {
    type: "submit",
    className: styles.searchButton,
    textContent: "search",
  });

  const formElement = createElement(
    "form",
    {
      className: styles.searchForm,
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(searchInput.value);
      },
    },
    [searchInput, searchButton]
  );
  return formElement;
}

// const searchBar = createElement("form", { className: "formSearch" }, [
//   createElement("div", [
//     createElement("input", { className: "seachInput", type: input }),
//     createElement("button", { className: "searchButton", type: button }),
//   ]),
// ])

// return ;
// x^
