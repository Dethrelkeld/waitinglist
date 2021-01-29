const http = require('http');
const express = require('express');
const app = express();

const PORT =  process.env.PORT || 8080;

const handleRequest = (req, res) => {

};

const server = http.createServer(handleRequest);

app.listen(PORT, () => {  
    console.log(`Server listening on: http://localhost:${PORT}`);
});