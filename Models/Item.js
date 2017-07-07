const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReducedItemSchema = new Schema({
    name: { type: String, required: true },
    cost: { type: Number, require: true }
});

const ItemTargetSchema = new Schema({
    type: String,
    target: String
});

const ItemSchema = new Schema({
    name: String,
    abbreviation: String,
    lore: String,
    category: String,
    construction: [ReducedItemSchema],
    buffs: Schema.Types.Mixed,
    abilityDescription: String,
    cost: Number,
    canDisassemble: Boolean,
    duration: [Number],
    coolDown: [Number],
    targetType: ItemTargetSchema,
    notes: [String],
    possibleBuilds: [ReducedItemSchema]
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;

// Get Items
module.exports.getItems = (callback, limit) => {
    Item.find(callback).limit(limit);
}

// Get Item by ID
module.exports.getItemById = (itemId, callback) => {
    Item.findById(itemId, callback);
}

// Get Item by name
module.exports.getItemByName = (itemName, callback) => {
    Item.find({ name: itemName }, callback);
}
