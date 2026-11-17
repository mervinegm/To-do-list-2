function initFooter() {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const div = document.createElement("div");

      div.classList.add("footer");

      div.innerHTML = `
        <mi-large>
          Footer
        </mi-large>
        
      `;

      shadow.appendChild(div);

      const style = document.createElement("style");
      style.textContent = `
        .footer {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 230px;
          background-color: #FFA0EA;
        }
      `;
      shadow.appendChild(style);
    }
  }
  customElements.define("mi-footer", Footer);
}
export { initFooter };
