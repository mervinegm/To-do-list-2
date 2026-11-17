import { state } from "../../state";
import type { MiInputElement } from "../../components/input/index";

function initWelcome(params: any) {
  //Invocar al estado y subscribirse a los cambios para actualizar la lista de tareas
  const tasks = state.getEnabledTasks();

  state.subscribe(() => {
    const tasks = state.getEnabledTasks();
    const ul = document.querySelector("ul");
    if (ul) {
      ul.innerHTML = tasks
        .map(
          (task) => `
            <mi-todo-item title="${task.title}" ${task.completed ? "checked" : ""} task-id="${task.id}"></mi-todo-item>
          `,
        )
        .join("");
    }
  });

  // Crear el contenedor principal de la página con la estructura HTML y los estilos CSS
  const container = document.createElement("div");
  container.innerHTML = `
    <mi-header></mi-header>

    <div class="content">
      <div class="submit-container">
        <div class="input-container">
          <mi-titulo>Mis pendientes</mi-titulo>
          <mi-body>Nuevo pendiente</mi-body>
          <mi-input id="name" type="text" placeholder="Ingresá tu actividad pendiente"></mi-input><br>
        </div>

        <div class="button-container">
          <mi-button>Agregar</mi-button>         
        </div>
      </div>
        <br><br>
      <div class="task-container">
        <ul>
          ${tasks
            .map(
              (task) => `
            <mi-todo-item title="${task.title}" ${task.completed ? "checked" : ""} task-id="${task.id}"></mi-todo-item>
          `,
            )
            .join("")}
        </ul>      
      </div>
    </div>
    <br><br><br>
    <mi-footer></mi-footer>
  `;

  const style = document.createElement("style");

  style.textContent = `
     .content {
            margin: 30px;
        }

    @media (min-width: 960px) {
      .submit-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 20px;
      }
      .input-container {
        grid-column: span 2;
      }
      .button-container {
        align-self: end;

        padding-bottom: 20px;
      }
      .task-container {
        width: 100%;
      }
      .task-container ul {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;
        list-style: none;
        margin: 0;
        padding: 0;
      }
    }
  `;

  container.appendChild(style);

  // Agregar un listener al botón para agregar una nueva tarea

  const button = container.querySelector("mi-button");
  container.addEventListener("task-delete", (event) => {
    if (!(event instanceof CustomEvent)) return;
    const detail = event.detail as { id: number };
    state.deleteTask(detail.id);
  });

  button?.addEventListener("click", () => {
    const input = container.querySelector<MiInputElement>("mi-input");
    if (!input) {
      throw new Error("No se encontró el componente de entrada de la tarea.");
    }

    const value = input.value.trim();
    if (!value) return;

    state.addTask(Date.now(), value);
    input.value = "";

    params.goTo("/welcome");
  });

  return container;
}

export { initWelcome };
