const assert = require('assert');
const Item = require('../../Models/Item');

describe('Creating Items', () => {

    it('saves an item', (done) => {
        let item = new Item({
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

        item.save()
            .then(() => {
                assert(!item.isNew);
                done();
            });
    });
});
