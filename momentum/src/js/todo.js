//--------------------TO DO-------------

const BTN_TODO = document.querySelector(".todo-button");
const TODO_LIST = document.querySelector(".todo");

function openToDo() {
  TODO_LIST.classList.toggle("open");
  moveButtonTodo(BTN_TODO);
}

const todoFunction = {
  action(e) {
    const target = e.target;
    if (target.classList.contains("todo-action")) {
      const action = target.dataset.todoAction;
      const elemItem = target.closest(".todo-item");
      if (action === "deleted" && elemItem.dataset.todoState === "deleted") {
        elemItem.remove();
      } else {
        elemItem.dataset.todoState = action;
      }
      this.save();
    } else if (target.classList.contains("todo-add")) {
      this.add();
      this.save();
    }
  },
  add() {
    const elemText = document.querySelector(".todo-text");
    if (elemText.disabled || !elemText.value.length) {
      return;
    }
    document
      .querySelector(".todo-items")
      .insertAdjacentHTML("beforeend", this.create(elemText.value));
    elemText.value = "";
  },
  create(text) {
    return `<li class="todo-item" data-todo-state="active">
  <span class="todo-task">${text}</span>
  <span class="todo-action todo-action-restore" data-todo-action="active"></span>
  <span class="todo-action todo-action-complete" data-todo-action="completed"></span>
  <span class="todo-action todo-action-delete" data-todo-action="deleted"></span></li>`;
  },
  init() {
    const fromStorage = localStorage.getItem("todo");
    if (fromStorage) {
      document.querySelector(".todo-items").innerHTML = fromStorage;
    }
    document
      .querySelector(".todo-options")
      .addEventListener("change", this.update);
    document.addEventListener("click", this.action.bind(this));
  },
  update() {
    const option = document.querySelector(".todo-options").value;
    document.querySelector(".todo-items").dataset.todoOption = option;
    document.querySelector(".todo-text").disabled = option !== "active";
  },
  save() {
    localStorage.setItem(
      "todo",
      document.querySelector(".todo-items").innerHTML
    );
  },
};

export { BTN_TODO, TODO_LIST, todoFunction, openToDo };
