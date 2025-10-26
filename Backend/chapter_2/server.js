// The address of this server connected to the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require('express');
const app = express();
const PORT = 8383;

// HTTP VERBS && Routes (or paths) -- Endpoints of the server GET, POST, PUT, DELETE
// The method informs the server about the type of action the client wants to perform.

// GET Request
app.get('/', (req, res) => {
    console.log('GET request received at /', req.method);
    res.sendStatus(201);
})

app.get('/dashBoard', (req,res) => {
    console.log(`GET request received at /dashBoard`, req.method);
    // res.sendStatus(201);
    res.send('Hi');
})

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));