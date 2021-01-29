const http = require('http');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const handleRequest = (req, res) => {

};

const reservations = [
    {
        id: '45',
        name: 'Name',
        email: 'email',
        phone: '555-5555'
    }
];

// Routes so to html pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, 'reservation.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

// Routes for api's
app.get('/api/tables', (req, res) => res.json(reservations));

app.post('/api/tables', (req, res) => {
    const newReservation = req.body;
    console.log(req.body);
    console.log({ newReservation });
    reservations.push(newReservation);
    res.json(newReservation);
});

const server = http.createServer(handleRequest);

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});