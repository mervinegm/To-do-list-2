function initHeader() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const div = document.createElement("div");

      div.classList.add("header");

      div.innerHTML = `
        <mi-large>
          Header
        </mi-large>
        
      `;

      shadow.appendChild(div);

      const style = document.createElement("style");
      style.textContent = `
        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          background-color: #FF8282;
        }
      `;
      shadow.appendChild(style);
    }
  }
  customElements.define("mi-header", Header);
}
export { initHeader };
