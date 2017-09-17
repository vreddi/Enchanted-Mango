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

const ItemDescriptionType = new GraphQLObjectType({
    name: 'ItemDescription',
    fields: () => ({
        name: { type: GraphQLString },
        type: { type: new GraphQLEnumType({
                name: 'ItemAbilityType',
                values: {
                    Active: { value: 0 },
                    Passive: { value: 1 },
                    Use: { value: 2 }
                }
            })
        },
        description: { type: GraphQLString },
        manaCost: { type: GraphQLInt },
        coolDown: { type: new GraphQLList(GraphQLFloat) }
    })
});

const ItemStatType = new GraphQLObjectType({
    name: 'Stat',
    fields: () => ({
        name: { type: GraphQLString },
        value: { type: GraphQLFloat },
        statType: { type: new GraphQLEnumType({
                name: 'StatType',
                values: {
                    Attribute: { value: 0 },
                    Effect: { value: 1 }
                }
            })
        },
        valueType: { type: new GraphQLEnumType({
                name: 'StatValueType',
                values: {
                    Number: { value: 0 },
                    Percentage: { value: 1 }
                }
            })
        }
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
        popularityRank: { type: GraphQLInt },
        sourceLink: { type: GraphQLString },
        localizedName: { type: GraphQLString },
        name: { type: GraphQLString },
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
})

module.exports = ItemType;
