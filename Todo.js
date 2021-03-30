let todoArray = [];
let todoForm = document.getElementById("todoForm");
let listDiv = document.getElementById("list");
let userInput = document.getElementById("userInput");
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
    for(var i=0; i<todoArray.length; i++){
        todoDiv.innerHTML= todoArray[i].todo;
    }
    listDiv.appendChild(todoDiv);
}




