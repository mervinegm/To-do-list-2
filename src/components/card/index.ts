function initCard() {
  class Card extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }

    render() {
      const card = document.createElement("div");

      card.classList.add("card");

      card.innerHTML = `
        <slot name="title"></slot>
        <slot name="checkbox"></slot>
        <slot name="outline"></slot>
      `;

      this.shadow.appendChild(card);

      const style = document.createElement("style");
      style.textContent = `
        :host {
          display: block;
          width: 100%;
        }
        .card {
          width: 100%;
          box-sizing: border-box;
          min-height: 84px;
          border-radius: 4px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          background-color: #FFF599;
          padding: 22px 12px;
          margin-bottom: 20px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          grid-template-rows: auto 1fr;
          grid-template-areas:
            "title checkbox"
            ". outline";
          align-items: end;
        }
        ::slotted([slot="title"]) {
          grid-area: title;
          display: block;
          min-width: 0;
          max-width: 100%;
          justify-self: start;
          overflow-wrap: anywhere;
        }
        ::slotted([slot="checkbox"]) {
          grid-area: checkbox;
          justify-self: end;
          align-self: start;
        }
        ::slotted([slot="outline"]) {
          grid-column: 2;
          grid-row: 2;
          justify-self: end;
          align-self: end;
          display: none;
        }
        :host(.selected) ::slotted([slot="outline"]) {
          display: block;
        }
        :host(.selected) .card {
          border: 2px solid #000000;
        }
      `;
      this.shadow.appendChild(style);
    }
  }
  customElements.define("mi-card", Card);
}
export { initCard };
