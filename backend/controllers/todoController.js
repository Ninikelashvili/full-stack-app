const asyncHandler = require('express-async-handler')
//@desc Get Todos
//@route GET/api/todos
//@access Private
const getTodos = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Todos'})
})

//@desc Set Todos
//@route Post/api/todos
//@access Private
const setTodos = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set Todo'})
})

//@desc Update Todo
//@route PUT/api/todos/:id
//@access Private
const updateTodo = asyncHandler ( async (req, res) => {
    res.status(200).json({message: `Update Todo ${req.params.id}`})
})

//@desc Delete Todo
//@route DELETE/api/todos/:id
//@access Private
const deleteTodo = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Delete Todo ${req.params.id}`})
})


module.exports = {
    getTodos,
    setTodos,
    updateTodo,
    deleteTodo
}