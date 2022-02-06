function addTodo({ value }) {
    let newTodo = {
        id: Math.random(),
        title: value,
        isDone: false
    }

    todoArray.push(newTodo)
    clearInput()
    renderTodos()
    savetoStorage()
}

function clearInput() {
    todoInput.value = ""
}

function renderTodos(todos = todoArray) {
    todoList.innerHTML = ""

    for (let todo of todos) {
        const { id, isDone, title } = todo
        const todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")

        const template = `
                <p class="${isDone ? "p-done" : ""}">${title}</p>
                <img 
                    onclick="checkTodo(${id})" 
                    src="../icons/check.png" 
                    style="display: ${isDone ? "none" : "initial"}"
                    alt=""
                 />
                <img
                    onclick="removeTodo(${id})" 
                    src="../icons/remove.png" alt="" 
                />
        `

        todoDiv.innerHTML = template

        todoList.appendChild(todoDiv)
    }
}

function checkTodo(id) {
    let filteredTodos = todoArray.filter(item => item.id == id)
    // let [filteredTodo] = filteredTodos

    filteredTodos[0].isDone = true

    renderTodos()
    savetoStorage()
}

function removeTodo(id) {
    todoArray = todoArray.filter(item => item.id != id)

    renderTodos()
    savetoStorage()
}

function filterTodo({ value }) {
    switch (value) {
        case "done":
            renderTodos(todoArray.filter(todo => todo.isDone === true))
            break;
        case "undone":
            renderTodos(todoArray.filter(todo => todo.isDone === false))
            break;
        default:
            renderTodos()
    }
}

function savetoStorage() {
    localStorage.setItem("todos", JSON.stringify(todoArray))
}