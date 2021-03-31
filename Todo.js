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

}

function display(){
    const todoDiv = document.createElement("div");
    const todoList = document.createElement("li");
    for(var i=0; i<todoArray.length; i++){
        todoDiv.innerHTML= todoArray[i].todo;

    }
    console.log(todoList);
    todoList.appendChild(todoDiv);

    listDiv.appendChild(todoList);

}




