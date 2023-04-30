const express = require('express');
const dotenv = require('dotenv').config();
const color = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 6000;


connectDB()
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/todos', require('./routes/todoRoutes'))
app.use(errorHandler)


app.listen(port, () => console.log(`Server is started on port ${port}`))
