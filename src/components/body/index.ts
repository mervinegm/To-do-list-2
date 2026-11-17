function initBody() {
  class Body extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const p = document.createElement("p");

      p.classList.add("body");

      p.appendChild(document.createElement("slot"));

      shadow.appendChild(p);

      const style = document.createElement("style");
      style.textContent = `
        .body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 400;
            font-size: 18px;
            leading-trim: NONE;
            line-height: 100%;
            letter-spacing: 0%;
            color: #000000;
            margin-bottom: 6px;
        }
      `;
      shadow.appendChild(style);
    }
  }
  customElements.define("mi-body", Body);
}

export { initBody };
