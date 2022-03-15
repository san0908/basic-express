const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In The MiddleWare!');
    next();
});

app.use((req, res, next) => {
    console.log('In The another MiddleWare!');
    res.send('<h1>Hello From Express.js</h1>');
});

// const server = http.createServer(app);
// server.listen(3030);
app.listen(3000);