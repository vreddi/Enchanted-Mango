const assert = require('assert');
const Item = require('../../Models/Item');

describe('Reading Items out of the DB', () => {

    let testItem;

    beforeEach((done) => {
        testItem = new Item({
            name: 'Test Item',
            abbreviation: 'TI',
            cost: 2765,
            category: 'Armor',
            abilities: [{
                name: 'Test Ability',
                duration: [10 , 9, 8, 7, 6, 5],
                coolDown: [80, 75, 70, 65, 60, 55]
            }]
        });

        testItem.save().then(() => done());
    });

    it('finds all items with the name \'Test Item\'', (done) => {
        Item.find({ name: 'Test Item' })
            .then((items) => {
                assert(items[0]._id.toString() === testItem._id.toString());
                done();
            });
    });

    it('find an item with a particular id', (done) => {
        Item.findOne({ _id: testItem._id })
            .then(item => {
                assert(item.name === 'Test Item');
                done();
            });
    });
});
