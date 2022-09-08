const form = document.getElementById("todo-form");
const input = document.getElementsByClassName("form-control")[0];
const submit = document.getElementById("todo-form")[1];
const todoList = document.getElementById("list-group")
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


// function eventListeners(){ // Tüm event listenerlar
//     form.addEventListener("submit",addTodo);
//     document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
//     secondCardBody.addEventListener("click",deleteTodo);
//     filter.addEventListener("keyup",filterTodos);
//     clearButton.addEventListener("click",clearAllTodos);

// }


// function addTodo(e){
//     const newTodo = input.value.trim();

//     if (newTodo === "") {
        
//         showAlert("danger","Lütfen bir todo girin...");
//     }
//     else {
//         addTodoToUI(newTodo); 
//         addTodoToStorage(newTodo);

//         showAlert("success","Todo başarıyla eklendi...");

//     }