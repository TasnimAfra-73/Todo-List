let todoArray = [];
let todoForm = document.getElementById("todoForm");
let listDiv = document.getElementById("list");
let userInput = document.getElementById("userInput");
// let todoList = document.getElementById("todoList");
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
  localStorage.setItem("todo", JSON.stringify(todoArray));
  display();
  event.preventDefault();
}

function display() {
  const todoDiv = document.createElement("div");
  const todoList = document.createElement("li");
  todoDiv.appendChild(todoList);
  const dltbuttn = document.createElement("button");
  dltbuttn.textContent= "x";
  dltbuttn.onclick = function(){
    todoDiv.remove();
  }
  todoDiv.appendChild(dltbuttn);
    todoList.textContent = todoArray[todoArray.length -1].todo;
    listDiv.appendChild(todoDiv);
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

function deleteTodo() {
  
}