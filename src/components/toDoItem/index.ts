function initTodoItem() {
  class TodoItem extends HTMLElement {
    shadow: ShadowRoot;
    title: string;
    checked: boolean;
    taskId: number;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.title = this.getAttribute("title") || "";
      this.checked = this.hasAttribute("checked");
      this.taskId = Number(this.getAttribute("task-id")) || 0;
      this.render();
    }

    render() {
      const todo = document.createElement("div");

      todo.classList.add("todo-item");

      todo.innerHTML = `
        <mi-card>
          <mi-text slot="title" class="${this.checked ? "checked" : ""}" tag="p">${this.title}</mi-text>
          <div slot="checkbox">
            <input class="checkbox" type="checkbox" ${this.checked ? "checked" : ""} />
          </div>
          <mi-outline slot="outline"></mi-outline>
        </mi-card>
      `;

      const card = todo.querySelector("mi-card");
      card?.addEventListener("click", (event) => {
        if ((event.target as HTMLElement).closest(".checkbox, mi-outline"))
          return;
        card.classList.toggle("selected");
      });

      todo.querySelector("mi-outline")?.addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("task-delete", {
            detail: { id: this.taskId },
            bubbles: true,
            composed: true,
          }),
        );
      });

      todo.querySelector(".checkbox")?.addEventListener("change", (e) => {
        const checkbox = e.target as HTMLInputElement;
        this.checked = checkbox.checked;
        const title = todo.querySelector("mi-text");
        title?.classList.toggle("checked", this.checked);
        this.dispatchEvent(
          new CustomEvent("task-toggle", {
            detail: {
              id: this.taskId,
              completed: this.checked,
            },
            bubbles: true,
            composed: true,
          }),
        );
      });

      this.shadow.appendChild(todo);

      const style = document.createElement("style");
      style.textContent = `
        .todo-item {
          font-size: 18px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-weight: 400;
          line-height: 100%;
          letter-spacing: 0%;
        };
      `;
      this.shadow.appendChild(style);
    }
  }
  customElements.define("mi-todo-item", TodoItem);
}
export { initTodoItem };
