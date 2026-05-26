let todos = [];

function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value;

  if (text === "") return;

  todos.push(text);
  saveTodos();
  render();

  input.value = "";
}

function render() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${todo}
      <button onclick="deleteTodo(${index})">삭제</button>
    `;

    list.appendChild(li);
  });
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  render();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const data = localStorage.getItem("todos");
  if (data) {
    todos = JSON.parse(data);
  }
}

loadTodos();
render();
