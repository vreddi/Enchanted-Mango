const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const schema = require('./Schema/schema');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Set env variables
require('dotenv').config()

const app = express();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 4000;

if (!MONGO_URI && process.env.ONLINE_MODE) {
  throw new Error('You must provide a MongoDB URI');
}

mongoose.Promise = global.Promise;

if(process.env.ONLINE_MODE) {
    mongoose.connect(MONGO_URI);
    mongoose.connection
        .once('open', () => console.log('Connected to Mongo instance.'))
        .on('error', error => console.log('Error connecting to MongoLab:', error));
}

app.use(bodyParser.json());

// register a middleware
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Listening to PORT:${PORT}...`);
})
