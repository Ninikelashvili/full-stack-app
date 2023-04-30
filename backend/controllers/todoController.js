//@desc Get Todos
//@route GET/api/todos
//@access Private
const getTodos = (req, res) => {
    res.status(200).json({message: 'Get Todos'})
}

//@desc Set Todos
//@route Post/api/todos
//@access Private
const setTodos = (req, res) => {
    res.status(200).json({message: 'Set Todo'})
}

//@desc Update Todo
//@route PUT/api/todos/:id
//@access Private
const updateTodo = (req, res) => {
    res.status(200).json({message: `Update Todo ${req.params.id}`})
}

//@desc Delete Todo
//@route DELETE/api/todos/:id
//@access Private
const deleteTodo = (req, res) => {
    res.status(200).json({message: `Delete Todo ${req.params.id}`})
}


module.exports = {
    getTodos,
    setTodos,
    updateTodo,
    deleteTodo
}