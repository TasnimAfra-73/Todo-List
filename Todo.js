let todoArray = [];
let todoForm = document.getElementById("todoForm");
let listDiv = document.getElementById("list");
let userInput = document.getElementById("userInput");
let todoList = document.getElementById("todoList");
todoForm.addEventListener("submit", addTodo);
getData();

function addTodo(event) {
  if (userInput.value === "") {
    alert("Add a todo");
    return;
  }
  let inputObject = { todo: userInput.value, done: false };
  todoArray.push(inputObject);
  userInput.value = "";
  saveData();
  display();
  event.preventDefault();
}

function display() {
  const todoList = document.createElement("li");
    todoList.innerHTML = todoArray[todoArray.length -1].todo;
    listDiv.appendChild(todoList);
}

function saveData() {
  localStorage.setItem("todo", JSON.stringify(todoArray));
}

function getData() {
  let storageData = JSON.parse(localStorage.getItem("todo"));
  if (storageData) {
    storageData.forEach((element) => {
      todoArray.push(element);
      display();
    });
  }
}
