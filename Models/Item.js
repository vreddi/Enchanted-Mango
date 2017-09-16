const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemDescription = new Schema({
    name: { type: String, requred: true },
    type: Number,
    description: String,
    manaCost: Number,
    coolDown: [Number]
})

const ItemStat = new Schema({
        name: { type: String, required: true },
        value: Number,
        statType: Number,
        valueType: Number
});

const ItemShopAvailability = new Schema({
    sideShop: Boolean,
    homeShop: Boolean,
    SecretShop: Boolean
});

const ItemSchema = new Schema({
    popularityRank: Number,
    sourceLink: String,
    localizedName: String,
    name: { type: String, require: true },
    lore: String,
    descriptions: [ItemDescription],
    notes: [String],
    timesUsed: Number,
    useRate: Number,
    winRate: Number,
    stats: [ItemStat],
    cost: Number,
    image: String,
    aliases: [String],
    shops: ItemShopAvailability
});

mongoose.model('item', ItemSchema);
