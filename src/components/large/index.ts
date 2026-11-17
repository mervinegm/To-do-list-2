function initLarge() {
  class Large extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const p = document.createElement("p");

      p.classList.add("large");

      p.appendChild(document.createElement("slot"));

      shadow.appendChild(p);

      const style = document.createElement("style");
      style.textContent = `
        .large {
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
  customElements.define("mi-large", Large);
}

export { initLarge };
