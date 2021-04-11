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
  let inputObject = { todo: userInput.value, isDone: false };
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
  const dltButton = document.createElement("button");
  const editButton = document.createElement("button");
  const completeButton = document.createElement("button");
  dltButton.textContent = "x";
  editButton.textContent = "Edit";
  completeButton.textContent = "Complete";
  todoList.textContent = todoArray[todoArray.length - 1].todo;
  todoDiv.appendChild(todoList);
  todoDiv.appendChild(dltButton);
  todoDiv.appendChild(editButton);
  todoDiv.appendChild(completeButton);
  listDiv.appendChild(todoDiv);

  if (input.isDone) {
    var task = input.todo;
    todoList.innerHTML = task.strike();
  }

  dltButton.onclick = function () {
    todoDiv.remove();
    deleteTodo(input);
  };
  editButton.onclick = function () {
    // editTodo(input);
  };
  completeButton.onclick = function () {
    var task = input.todo;
    todoList.innerHTML = task.strike();
    input.isDone = true;
    localStorage.setItem("todo", JSON.stringify(todoArray));
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

function editTodo(input) {
  var currentIndex = todoArray.indexOf(input);
  current;
  if (currentIndex > -1) {
    todoArray.splice(currentIndex, 1, userInput.value);
  }
  localStorage.setItem("todo", JSON.stringify(todoArray));
}

