const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TalentOptionSchema = new Schema({
    option1: String,
    option2: String
});

const TalentSchema = new Schema({
    heroName: String,
    level10: TalentOptionSchema,
    level15: TalentOptionSchema,
    level20: TalentOptionSchema,
    level25: TalentOptionSchema
});

mongoose.model('talent', TalentSchema);
