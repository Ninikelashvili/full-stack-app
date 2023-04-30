const express = require('express')
const router = express.Router()
const {getTodos, updateTodo, setTodos, deleteTodo} = require("../controllers/todoController");



router.route('/').get(getTodos).post(setTodos)
router.route('/:id').delete(deleteTodo).put(updateTodo)

module.exports = router