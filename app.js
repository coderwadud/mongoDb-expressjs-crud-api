const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const usersRouter = require('./routes/users.routes')
require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// router uses

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.use("/", usersRouter)
app.use((req, res) => {
    res.status(404).json({massage: 'Route Not Found'})
})
//server error
app.use((err, req, res, next) => {
    res.status(500).json({massage: 'Something is broken'})
})
module.exports =app