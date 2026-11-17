export interface MiInputElement extends HTMLElement {
  value: string;
}

function initInput() {
  class Input extends HTMLElement {
    shadow: ShadowRoot;
    input!: HTMLInputElement;
    /*     nombre: string; */
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      /*       this.nombre = state.getState().nombre;
      state.subscribe(() => {
        this.nombre = state.getState().nombre;
        const input = this.shadow.querySelector("input");
        if (input) {
          input.value = this.nombre;
        }
      }); */
      this.render();
    }

    get value(): string {
      return this.input.value;
    }

    set value(value: string) {
      this.input.value = value;
    }

    render() {
      this.input = document.createElement("input");

      this.input.classList.add("input");

      this.input.setAttribute("id", "nombre");
      this.input.setAttribute("type", "text");
      this.input.setAttribute("placeholder", "Escribí una actividad");

      this.shadow.appendChild(this.input);

      /* input.appendChild(document.createElement("slot")); */

      const style = document.createElement("style");
      style.textContent = `
        .input {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            box-sizing: border-box;
            height: 55px;
            angle: 0 deg;
            opacity: 1;
            border-radius: 4px;
            border: 2px solid #000000;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 500;
            font-size: 22px;
            leading-trim: NONE;
            line-height: 100%;
            letter-spacing: 0%;
            color: #000000;
            
        }
      `;
      this.shadow.appendChild(style);

      /*       input.addEventListener("input", (e) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        const value = target.value;
        state.setState({ ...state.getState(), nombre: value });
      }); */
    }
  }
  customElements.define("mi-input", Input);
}
export { initInput };
