const mongoose = require('mongoose');

// ES6 promise library
mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect(
        'mongodb://localhost/enchanted-mango-test',
        {
            useMongoClient: true
        }
    );

    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('Error', error);
        });
});

beforeEach((done) => {
    mongoose.connection.collections.items.drop().then(() => {
        done();
    });
});
