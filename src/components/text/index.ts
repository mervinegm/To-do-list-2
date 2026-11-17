function initText() {
  class Text extends HTMLElement {
    shadow: ShadowRoot;
    tags: string[] = ["p", "h1"];
    tag: string = "p";
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      if (this.tags.includes(this.tag)) {
        this.tag = this.getAttribute("tag") || this.tag;
      }
      this.render();
    }

    render() {
      const text = document.createElement(this.tag);
      text.textContent = this.textContent || "";
      text.classList.add("text");
      this.shadow.appendChild(text);

      const style = document.createElement("style");
      style.textContent = `
        .text {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-weight: 400;
          leading-trim: NONE;
          line-height: 100%;
          letter-spacing: 0%;
          color: #000000;
          margin: 0;
        }
        :host(.checked) .text {
          text-decoration: line-through;
        }
      `;
      this.shadow.appendChild(style);
    }
  }
  customElements.define("mi-text", Text);
}

export { initText };
