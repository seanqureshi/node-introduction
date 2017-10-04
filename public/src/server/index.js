const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 3000,
    bc = require('./controllers/books_controller.js')

    app.use(bodyParser.json());
    app.use( express.static( __dirname + "/../public/build") );

    app.post('/api/books', bc.create);
    app.get('/api/books', bc.read);
    app.put('/api/books/:id', bc.update);
    app.delete('/api/books/:id', bc.delete);

    app.listen(port, () => console.log(`listening on ${port}`))