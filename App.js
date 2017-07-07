const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Item = require('./Models/Item');

let app = express();

mongoose.connect(
    'mongodb://localhost/enchanted-mango',
    {
        useMongoClient: true
    }
);

app.get('/', (request, response) => {
    response.send("Hello World!");
});

app.get('/api/items', (request, response) => {
    Item.getItems((error, items) => {
        if(error) {
            throw error;
        }
        response.json(items);
    })
});

app.get('/api/items/:_id', (request, response) => {
    Item.getItemById(request.params._id, (error, item) => {
        if(error) {
            throw error;
        }
        response.json(item);
    })
});

app.listen(3000);
