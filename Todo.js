let todoArray = [];
let todoForm = document.getElementById("todoForm");
let searchForm = document.getElementById("searchForm");
let listDiv = document.getElementById("list");
let userInput = document.getElementById("userInput");
let searchInput = document.getElementById("searchInput");
let updateForm = document.getElementById("update");
todoForm.addEventListener("submit", addTodo);
searchForm.addEventListener("submit", searchTodo);
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
  dltButton.textContent = "Delete";
  editButton.textContent = "Edit";
  completeButton.textContent = "Complete";
  todoList.textContent = input.todo;
  todoDiv.appendChild(todoList);
  todoDiv.appendChild(dltButton);
  todoDiv.appendChild(editButton);
  todoDiv.appendChild(completeButton);
  listDiv.appendChild(todoDiv);

  //checks if the task is done
  if (input.isDone) {
    var task = input.todo;
    todoList.innerHTML = task.strike();
  }

  //deletes selected todo
  dltButton.onclick = function () {
    todoDiv.remove();
    deleteTodo(input);
  };
  editButton.onclick = function () {
    const updatedText = document.createElement("input");
    const updateButton = document.createElement("button");
    const p = document.createElement("p");
    updateButton.textContent = "Update";
    todoDiv.appendChild(p);
    todoDiv.appendChild(updatedText);
    todoDiv.appendChild(updateButton);
    updatedText.value = input.todo;
    updateButton.onclick = function () {
      todoList.innerHTML = updatedText.value;
      updatedText.remove();
      updateButton.remove();
      p.remove();
      input.todo = updatedText.value;
      if (input.isDone) {
        var task = input.todo;
        todoList.innerHTML = task.strike();
      }    
      localStorage.setItem("todo", JSON.stringify(todoArray));
    };
  };
  // updateButton.onclick = function (element) {
  //   console.log(userInput.value);
  //   todoList.innerHTML = userInput.value;
  //   localStorage.setItem("todo", JSON.stringify(todoArray));
  //   element.preventDefault();
  // };

  //mark a todo as complete
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

function updateTodo(input) {}

function searchTodo(event) {
  listDiv.innerHTML = "";
  var searchText = searchInput.value;
  todoArray.forEach((element) => {
    var todo = element.todo;
    if (todo.includes(searchText)) {
      display(element);
    }
  });
  event.preventDefault();
}
