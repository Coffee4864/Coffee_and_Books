const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json("Hello world")
});

// Routers
const createCollection = require('./controller/createCollection');
app.use('/createCollection', createCollection)

app.listen(3001, () => {
    console.log("Server is running")
})