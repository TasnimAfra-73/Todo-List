let todoArray = [];
let todoForm = document.getElementById("todoForm");
let listDiv = document.getElementById("list");
let userInput = document.getElementById("userInput");
todoForm.addEventListener("submit", addTodo);
document.addEventListener("DOMContentLoaded", getData);

//adds new todo to the list
function addTodo(event) {
  if (userInput.value === "") {
    alert("Add a todo");
    return;
  }
  let inputObject = { todo: userInput.value, done: false };
  todoArray.push(inputObject);
  userInput.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  display(inputObject);
  event.preventDefault();
}

//displays todo
function display(input) {
  const todoDiv = document.createElement("div");
  const todoList = document.createElement("li");
  const dltbuttn = document.createElement("button");
  dltbuttn.textContent = "x";
  todoList.textContent = todoArray[todoArray.length - 1].todo;
  todoDiv.appendChild(todoList);
  todoDiv.appendChild(dltbuttn);
  listDiv.appendChild(todoDiv);

  dltbuttn.onclick = function () {
    todoDiv.remove();
    deleteTodo(input);
  };
}

//gets todo from local storage
function getData() {
  let storageData = JSON.parse(localStorage.getItem("todo"));
  if (storageData) {
    storageData.forEach((element) => {
      todoArray.push(element);
      display(element);
    });
  }
}

//deletes todo
function deleteTodo(input) {
  var currentIndex = todoArray.indexOf(input);
  if (currentIndex > -1) {
    todoArray.splice(currentIndex, 1);
  }
  localStorage.setItem("todo", JSON.stringify(todoArray));
}

