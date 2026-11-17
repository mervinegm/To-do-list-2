function initButton() {
  class Button extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const button = document.createElement("button");

      button.classList.add("button");

      shadow.appendChild(button);

      button.appendChild(document.createElement("slot"));

      const style = document.createElement("style");
      style.textContent = `
        .button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            box-sizing: border-box;
            height: 55px;
            angle: 0 deg;
            opacity: 1;
            border-radius: 4px;
            background: #9CBBE9;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 500;
            font-size: 22px;
            leading-trim: NONE;
            line-height: 100%;
            letter-spacing: 0%;
            color: #000000;
        }
      `;
      shadow.appendChild(style);
    }
  }
  customElements.define("mi-button", Button);
}
export { initButton };
