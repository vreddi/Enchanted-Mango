const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Get HeroDistributedStats schema with configurable attribute
 * types.
 * @param       type [description]
 */
function GetHeroDistributedStatsSchema(type) {
    return new Schema({
        base: type,
        level1: type,
        level15: type,
        level25: type
    });
}

/**
 * Get Range schema with configurable attribute types.
 * @param       type [description]
 */
function GetRangeSchema(type) {
    return new Schema({
        min: type,
        max: type
    });
}

const LanePresence = new Schema({
    lane: Number,
    presence: Number,
    winRate: Number,
    kdaRatio: Number,
    gpm: Number,
    xpm: Number
});

const HeroVisionRange = new Schema({
    day: Number,
    night: Number
});

const HeroAttackAnimation = new Schema({
    attackPoint: Number,
    attackBackSwing: Number
});

const HeroSchema = new Schema({
    name: String,
    localizedName: String,
    popularity: Number,
    winRate: Number,
    lanePresence: [LanePresence],
    image: String,
    sourceLink: String,
    health: GetHeroDistributedStatsSchema(Number),
    healthRegen: GetHeroDistributedStatsSchema(Number),
    mana: GetHeroDistributedStatsSchema(Number),
    manaRegen: GetHeroDistributedStatsSchema(Number),
    damage: GetHeroDistributedStatsSchema(GetRangeSchema(Number)),
    armor: GetHeroDistributedStatsSchema(Number),
    spellDamage: GetHeroDistributedStatsSchema(Number),
    attacksPerSecond: GetHeroDistributedStatsSchema(Number),
    movementSpeed: Number,
    turnRate: Number,
    visionRange: HeroVisionRange,
    attackRange: Number,
    attackAnimation: HeroAttackAnimation,
    baseAttackTime: Number,
    magicResistance: Number,
    collisionSize: Number,
    legs: Number
});

mongoose.model('hero', HeroSchema);
