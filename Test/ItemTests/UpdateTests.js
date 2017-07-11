const assert = require('assert');
const Item = require('../../Models/Item');

describe('Updating Items', () => {

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

    function assertName(operation, done){
        operation.then(() => Item.find({}))
            .then((items) => {
                assert(items.length === 1);
                assert(items[0].name === 'OP Test Item');
                done();
            })
    }

    it('instance type using set and save', (done) => {
        testItem.set('name', 'OP Test Item');
        assertName(testItem.save(), done);
    });

    it('a model instance can update', (done) => {
        assertName(testItem.update({ name: 'OP Test Item' }), done);
    });

    it('a model class an update', (done) => {
        assertName(
            Item.update({ name: 'Test Item' }, { name: 'OP Test Item' }),
            done
        );
    });

    it('a model class can update one record', (done) => {
        assertName(
            Item.findOneAndUpdate({ name: 'Test Item' }, { name: 'OP Test Item' }),
            done
        );
    });

    it('a model class can find by id and update a record', (done) => {
        assertName(
            Item.findByIdAndUpdate(testItem._id, { name: 'OP Test Item' }),
            done
        );
    });
})
