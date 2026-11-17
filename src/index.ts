import { initRouter } from "./router";
import { initTitulo } from "./components/titulo";
import { initBody } from "./components/body";
import { initHeader } from "./components/header";
import { initFooter } from "./components/footer";
import { initButton } from "./components/button";
import { initOutline } from "./components/outline";
import { initInput } from "./components/input";
import { initCard } from "./components/card";
import { initText } from "./components/text";
import { initTodoItem } from "./components/toDoItem";
import { initLarge } from "./components/large";
import { state } from "./state";

function main() {
  /* state.init(); */
  initTitulo();
  initBody();
  initHeader();
  initFooter();
  initButton();
  initOutline();
  initInput();
  initCard();
  initText();
  initTodoItem();
  initLarge();
  const root = document.querySelector(".root") as HTMLElement;
  initRouter(root);
}

main();
