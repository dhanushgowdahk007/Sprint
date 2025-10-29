// The address of this server connected to the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require('express');
const app = express();
const PORT = 8383;

let data = ["Dhanush"];

// Middleware to parse JSON bodies
app.use(express.json());

// HTTP VERBS (methods) && Routes (or paths) -- Endpoints of the server GET, POST, PUT, DELETE
// The method informs the server about the type of action the client wants to perform.

// Website Endpoints (these endpoints are used to serve web pages)

// GET Request
app.get('/', (req, res) => {
    res.send(`
        <body
            style="background-color: #f0f0f0;
                   font-family: Arial, sans-serif;
                   color: #333;">
            <h1>Data</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashBoard">dashBoard</a>
        </body>
        `)
})

app.get('/dashBoard', (req,res) => {
    // console.log(`GET request received at /dashBoard`, req.method);
    // res.sendStatus(201);
    res.send(`
        <body
            style="background-color: #f0f0f0;
                   font-family: Arial, sans-serif;
                   color: #333;">
            <h1>Data</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/">home</a>
        </body>
        `);
})

// API Endpoints (these endpoints are used to serve data)

// CRUD-method create-post, read-ged, update-put, delete-delete

app.get('/api/data', (req, res) => {
    console.log(`GET request received at /api/data`, req.method);
    res.status(599).send(data);
})

app.post('/api/data', (req, res) => {
    // someone is trying to send data to the server to create a new entry
    console.log(`POST request received at /api/data`, req.method);
    const newEntry = req.body; // Assuming body-parser middleware is used
    data.push(newEntry.name);
    console.log('New Entry:', newEntry);
    res.sendStatus(201); // Created
})

app.delete('/api/data', (req, res) => {
    data.pop();
    console.log('We deleted the last entry');
    console.log(`DELETE request received at /api/data`, req.method);
    res.sendStatus(203);
});

app.listen(PORT, () => console.log(`Server has started on port http://localhost:${PORT}`));