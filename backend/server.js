const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 6000;


const app = express()
app.use('/api/todos', require('./routes/todoRoutes'))


app.listen(port, () => console.log(`Server is started on port ${port}`))
