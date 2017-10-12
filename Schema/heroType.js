const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLEnumType,
    GraphQLList,
    GraphQLUnionType
} = graphql;

const RangeFloatType = new GraphQLObjectType({
    name: 'RangeFloat',
    fields: () => ({
        min: { type: GraphQLFloat },
        max: { type: GraphQLFloat }
    })
});

const HeroDistributedStatsFloatType = new GraphQLObjectType({
    name: 'HeroDistributedStatsFloat',
    fields: () => ({
        base: { type: GraphQLFloat },
        level1: { type: GraphQLFloat },
        level15: { type: GraphQLFloat },
        level25: { type: GraphQLFloat }
    })
});

const HeroDistributedStatsRangeType = new GraphQLObjectType({
    name: 'HeroDistributedStatsRange',
    fields: () => ({
        base: { type: RangeFloatType },
        level1: { type: RangeFloatType },
        level15: { type: RangeFloatType },
        level25: { type: RangeFloatType }
    })
});

const LanePresenceType = new GraphQLObjectType({
    name: 'LanePresence',
    fields: () => ({
        lane: { type: new GraphQLEnumType({
            name: 'LaneType',
            values: {
                Offlane: { value: 0 },
                Safelane: { value: 1 },
                Midlane: { value: 2 },
                Jungle: { value: 3 }
            }
        })},
        presence: { type: GraphQLFloat },
        winRate: { type: GraphQLFloat },
        kdaRatio: { type: GraphQLFloat },
        gpm: { type: GraphQLFloat },
        xpm: { type: GraphQLFloat }
    })
});

const HeroVisionRangeType = new GraphQLObjectType({
    name: 'HeroVisionRange',
    fields: () => ({
        day: { type: GraphQLInt },
        night: { type: GraphQLInt }
    })
});

const HeroAttackAnimationType = new GraphQLObjectType({
        name: 'HeroAttackAnimation',
        fields: () => ({
            attackPoint: { type: GraphQLFloat },
            attackBackSwing: { type: GraphQLFloat }
        })
});

const HeroType = new GraphQLObjectType({
    name: 'Hero',
    fields: () => ({
        name: { type: GraphQLString },
        localizedName: { type: GraphQLString },
        popularity: { type: GraphQLInt },
        winRate: { type: GraphQLFloat },
        lanePresence: { type: new GraphQLList(LanePresenceType) },
        image: { type: GraphQLString },
        sourceLink: { type: GraphQLString },
        health: { type: HeroDistributedStatsFloatType },
        healthRegen: { type: HeroDistributedStatsFloatType },
        mana: { type: HeroDistributedStatsFloatType },
        manaRegen: { type: HeroDistributedStatsFloatType },
        damage: { type: HeroDistributedStatsRangeType },
        armor: { type: HeroDistributedStatsFloatType },
        spellDamage: { type: HeroDistributedStatsFloatType },
        attacksPerSecond: { type: HeroDistributedStatsFloatType },
        movementSpeed: { type: GraphQLInt },
        turnRate: { type: GraphQLFloat },
        visionRange: { type: HeroVisionRangeType },
        attackRange: { type: GraphQLInt },
        attackAnimation: { type: HeroAttackAnimationType },
        baseAttackTime: { type: GraphQLFloat },
        magicResistance: { type: GraphQLFloat },
        collisionSize: { type: GraphQLFloat },
        legs: { type: GraphQLInt }
    })
});

module.exports = HeroType;
