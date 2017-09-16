const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./Schema/schema');


const app = express();

// register a middleware
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening to PORT:4000 ...');
})
