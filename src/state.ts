type State = {
  tasks: {
    id: number;
    title: string;
    completed?: boolean;
    deleted?: boolean;
  }[];
};

const state = {
  data: {
    tasks: [],
  } as State,
  listeners: [] as Function[],
  init() {
    const localData = localStorage.getItem("app-state");
    if (localData) {
      this.data = JSON.parse(localData);
    }
  },
  getState() {
    return this.data;
  },
  getEnabledTasks() {
    const currentState = this.getState();
    return currentState.tasks.filter((task) => !task.deleted);
  },
  addTask(id: number, title: string) {
    const currentState = this.getState();
    const newTask = { id, title, completed: false };
    this.setState({ ...currentState, tasks: [...currentState.tasks, newTask] });
  },
  changeTaskState(id: number, completed: boolean) {
    const currentState = this.getState();
    const task = currentState.tasks.find((item) => item.id === id);
    if (!task || task.completed === completed) return;
  },
  setTaskCompleted(id: number, completed: boolean) {
    const currentState = this.getState();
    const task = currentState.tasks.find((item) => item.id === id);
    if (!task || task.completed === completed) return;
    this.setState({
      ...currentState,
      tasks: currentState.tasks.map((item) =>
        item.id === id ? { ...item, completed } : item,
      ),
    });
  },
  deleteTask(id: number) {
    const currentState = this.getState();
    const task = currentState.tasks.find((item) => item.id === id);
    if (!task || task.deleted) return;

    this.setState({
      ...currentState,
      tasks: currentState.tasks.map((item) =>
        item.id === id ? { ...item, deleted: true } : item,
      ),
    });
  },
  setState(newState: State) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb(newState);
    }
    localStorage.setItem("app-state", JSON.stringify(newState));
    console.log("state updated", this.data);
  },
  subscribe(callback: Function) {
    this.listeners.push(callback);
  },
};

export { state };
