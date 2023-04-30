const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");
//@desc Get Todos
//@route GET/api/todos
//@access Private
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

//@desc Set Todos
//@route Post/api/todos
//@access Private
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text fields");
  }

  const todo = await Todo.create({
    text: req.body.text,
  });

  res.status(200).json(todo);
});

//@desc Update Todo
//@route PUT/api/todos/:id
//@access Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTodo);
});

//@desc Delete Todo
//@route DELETE/api/todos/:id
//@access Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  await todo.deleteOne();
  res.status(200).json({ id: req.params.id });

  //   const todo = await Todo.findById(req.params.id);
  //   if (!todo) {
  //     res.status(400);
  //     throw new Error("Todo not found");
  //   }
  //   //check for user
  //   if (!req.user) {
  //     res.status(401);
  //     throw new Error("User not found");
  //   }
  //   //make sure the logged in user matches the togo user
  //   if (todo.user.toString() !== req.user.id) {
  //     res.status(401);
  //     throw new Error("User not authorized");
  //   }
  //   await todo.deleteOne();
  //   res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
};
