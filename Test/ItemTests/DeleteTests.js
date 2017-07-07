const assert = require('assert');
const Item = require('../../Models/Item');

describe('Deleting an Item', () => {

    let testItem;

    beforeEach((done) => {
        testItem = new Item({
            name: 'Test Item',
            abbreviation: 'TI',
            cost: 2765,
            category: 'Armor',
            duration: [10 , 9, 8, 7, 6, 5],
            coolDown: [80, 75, 70, 65, 60, 55]
        });

        testItem.save().then(() => done());
    });

    function assertDeletion(operation, done) {
        operation.then(() => Item.findOne({ _id: testItem._id }))
        .then((item) => {
            assert(!item);
            done();
        });
    }

    it('model instance remove', (done) => {
        assertDeletion(testItem.remove(), done);
    });

    it('class method remove', (done) => {
        assertDeletion(Item.remove({ name: 'Test Item' }), done);
    });

    it('class method findOneAndRemove remove', (done) => {
        assertDeletion(Item.findOneAndRemove({ name: 'Test Item' }), done);
    });

    it('model instance findByIdAndRemove', (done) => {
        assertDeletion(Item.findByIdAndRemove(testItem._id), done);
    });
});
