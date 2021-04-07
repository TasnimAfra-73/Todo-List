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
  display(inputObject);
  event.preventDefault();
}

function display(input) {
  console.log(input);
  const todoDiv = document.createElement("div");
  const todoList = document.createElement("li");
  todoDiv.appendChild(todoList);
  const dltbuttn = document.createElement("button");
  dltbuttn.textContent= "x";
  todoDiv.appendChild(dltbuttn);
  dltbuttn.onclick = function(){
    todoDiv.remove();
    deleteTodo(input);
  }
    todoList.textContent = todoArray[todoArray.length -1].todo;
    listDiv.appendChild(todoDiv);
}

function getData(input) {
  console.log(input);
  console.log("getdata");
  let storageData = JSON.parse(localStorage.getItem("todo"));
  if (storageData) {
    storageData.forEach((element) => {
      todoArray.push(element);
      display(element);
    });
  }
}

function deleteTodo(input) {
  var currentIndex = todoArray.indexOf(input);
  if (currentIndex > -1) {
    todoArray.splice(currentIndex, 1);
  }
  localStorage.setItem("todo", JSON.stringify(todoArray));
}