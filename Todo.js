let todoArray = []; 
let todoForm = document.getElementById("todoForm"); 
let listDiv = document.getElementById("list");
let userInput = document.getElementById("userInput");
let todoList = document.getElementById("todoList");
todoForm.addEventListener("submit", addTodo);

function addTodo(event){
    let inputObject = {todo: userInput.value, done: false};
    todoArray.push(inputObject);
    userInput.value ="";
    display();
    event.preventDefault();
    localStorage.setItem("todo", JSON.stringify(todoArray));

}

function display(){
    const todoList = document.createElement("li");
        todoList.innerHTML= todoArray[todoArray.length -1].todo;
    listDiv.appendChild(todoList);

}




