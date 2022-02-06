const todoInput = document.querySelector("#todo-input")
const todoSelect = document.querySelector("#todo-select")
const todoList = document.querySelector(".todo-list")

let todoArray = JSON.parse(localStorage.getItem("todos")) || []


//   {
//     id: Number(),
//     title: String(),
//     isDone: Boolean()
// },