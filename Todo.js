let todoArray = [];

function addTodo(){
    let listDiv = document.getElementById("list");

    const todoDiv = document.createElement("div");
    let userInput = document.getElementById("userInput");
    let inputObject = {todo: userInput.value, done: false};
    todoArray.push(inputObject);
    console.log(todoArray);
    // userInput.addEventListener("keyup", function(event){
    //     if (event.keyCode === 13) {
    //         document.getElementById("add").click();
    //     }
    // });
    display();
    function display(){
        for(i=0; i<todoArray.length; i++){
            todoDiv.innerHTML= todoArray[i].todo;
        }
        listDiv.appendChild(todoDiv);
    }
    
}

