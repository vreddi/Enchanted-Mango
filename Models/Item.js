const mongoose = require('mongoose');
const BonusType =
const Schema = mongoose.Schema;

const AbilityTargetSchema = new Schema({
    type: String,
    target: String,
    affects: String
});

const AbilitySchema = new Schema({
    name: { type: String, required: true }
    coolDown: [Number],
    castRange: Schema.Types.Mixed,
    description: String,
    duration: [Number],
    targetType: AbilityTargetSchema,
    notes: [String],
    modifier: [String]
});

const ReducedItemSchema = new Schema({
    name: { type: String, required: true },
    cost: { type: Number, required: true }
});

const ItemSchema = new Schema({
    abilities: [AbilitySchema]
    name: String,
    abbreviation: String,
    lore: String,
    category: String,
    construction: [ReducedItemSchema],
    bonus: Schema.Types.Mixed,
    cost: Number,
    canDisassemble: Boolean,
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
