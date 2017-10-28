const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
    GraphQLEnumType,
    GraphQLFloat
} = graphql

const ItemAbilityType = {
    name: 'ItemAbilityType',
    values: {
        Active: { value: 0 },
        Passive: { value: 1 },
        Use: { value: 2 }
    }
};

const ItemDescriptionType = new GraphQLObjectType({
    name: 'ItemDescription',
    fields: () => ({
        name: { type: GraphQLString },
        type: { type: new GraphQLEnumType(ItemAbilityType) },
        description: { type: GraphQLString },
        manaCost: { type: GraphQLInt },
        coolDown: { type: new GraphQLList(GraphQLFloat) }
    })
});

const StatType = {
    name: 'StatType',
    values: {
        Attribute: { value: 0 },
        Effect: { value: 1 }
    }
};

const StatValueType = {
    name: 'StatValueType',
    values: {
        Number: { value: 0 },
        Percentage: { value: 1 }
    }
};

const ItemStatType = new GraphQLObjectType({
    name: 'Stat',
    fields: () => ({
        name: { type: GraphQLString },
        value: { type: GraphQLFloat },
        statType: { type: new GraphQLEnumType(StatType) },
        valueType: { type: new GraphQLEnumType(StatValueType) }
    })
});

const ItemShopAvailabilityType = new GraphQLObjectType({
    name: 'ItemShopAvailability',
    fields: () => ({
        sideShop: { type: GraphQLBoolean },
        homeShop: { type: GraphQLBoolean },
        secretShop: { type: GraphQLBoolean }
    })
});

const ItemType = new GraphQLObjectType({
    name: 'Item',
    fields: () => ({
        name: { type: GraphQLString },
        localizedName: { type: GraphQLString },
        popularityRank: { type: GraphQLInt },
        sourceLink: { type: GraphQLString },
        lore: { type: GraphQLString },
        descriptions: { type: new GraphQLList(ItemDescriptionType) },
        notes: { type: new GraphQLList(GraphQLString) },
        timesUsed: { type: GraphQLInt },
        useRate: { type: GraphQLFloat },
        winRate: { type: GraphQLFloat },
        stats: { type: new GraphQLList(ItemStatType) },
        cost: { type: GraphQLInt },
        image: { type: GraphQLString },
        aliases: { type: new GraphQLList(GraphQLString) },
        shops: { type: ItemShopAvailabilityType }
    })
});

module.exports = {
    ItemType,
    StatType,
    ItemAbilityType,
    StatValueType,
    ItemShopAvailabilityType,
    ItemStatType,
    ItemDescriptionType
};
