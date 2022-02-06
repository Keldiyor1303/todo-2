todoInput.addEventListener("change", ({ target }) => addTodo(target))
todoSelect.addEventListener("change", ({ target }) => filterTodo(target))

renderTodos()