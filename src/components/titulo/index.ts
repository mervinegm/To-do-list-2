import { state } from "../../state";

function initTitulo() {
  class Titulo extends HTMLElement {
    shadow: ShadowRoot;
    /*     nombre: string; */
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      /*       this.nombre = state.getState().nombre;
      state.subscribe(() => {
        this.syncWithState();
      });
      this.syncWithState(); */
      this.render();
    }

    /*     syncWithState() {
      const lastState = state.getState();
      if (lastState.nombre) {
        this.nombre = lastState.nombre;
      }
      this.render();
    } */

    render() {
      const p = document.createElement("p");

      p.classList.add("titulo");

      p.appendChild(document.createElement("slot"));

      this.shadow.appendChild(p);

      /* p.innerHTML = `Hola ${this.nombre}, Necesitamos algunos datos más`; */

      const style = document.createElement("style");
      style.textContent = `
        .titulo {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 700;
            font-size: 52px;
            leading-trim: NONE;
            line-height: 100%;
            letter-spacing: 0%;
            color: #000000;
        }
      `;
      this.shadow.appendChild(style);
    }
  }
  customElements.define("mi-titulo", Titulo);
}

export { initTitulo };
