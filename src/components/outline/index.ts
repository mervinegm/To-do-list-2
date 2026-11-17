function initOutline() {
  class Outline extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const outline = document.createElement("button");

      outline.classList.add("outline");

      outline.innerHTML = `
        <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      `;

      shadow.appendChild(outline);

      const style = document.createElement("style");
      style.textContent = `
        .outline {
          background: transparent;
          border: none;
          cursor: pointer;
          padding-top: 22px;
          padding-right: 0;
          border-radius: 50%;
          color: #555555; /* Color normal del ícono */
          display: inline-flex;
          align-items: flex-end;
          justify-content: flex-end;
          transition: background-color 0.2s, color 0.2s;
        }

        .btn-basura:hover {
          background-color: #ffe5e5; /* Fondo rojo suave al pasar el mouse */
          color: #d93025; /* Ícono rojo */
        }
      `;
      shadow.appendChild(style);
    }
  }
  customElements.define("mi-outline", Outline);
}
export { initOutline };
