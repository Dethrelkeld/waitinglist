const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

//Middleware to update posts
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        id: '45',
        name: 'Name',
        email: 'email',
        phone: '555-5555'
    }
];

const waitinglist = [
    {
        id: '46',
        name: 'WaitingName',
        email: 'Waiting Email',
        phone: '555-4444'
    }
];

// Routes so to html pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, 'reservation.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

// Routes for api's
app.get('/api/tables', (req, res) => res.json(tables));
app.get('/api/waitinglist', (req, res) => res.json(waitinglist));


app.post('/api/tables', (req, res) => {
    const newReservation = req.body;
    if (tables.length > 5) {
        waitinglist.push(newReservation);
        console.log({ waitinglist });
    }
    else {
        tables.push(newReservation);
        console.log({ tables });
    }
    res.json(newReservation);
});

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});