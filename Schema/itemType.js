const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat
} = graphql

const ItemType = new GraphQLObjectType({
    name: 'Item',
    fields: () => ({
        popularityRank: { type: GraphQLInt },
        sourceLink: { type: GraphQLString },
        localizedName: { type: GraphQLString },
        name: { type: GraphQLString },
        lore: { type: GraphQLString },
        // descriptions: { }
        // notes: {}
        timesUsed: { type: GraphQLInt },
        useRate: { type: GraphQLFloat },
        winRate: { type: GraphQLFloat },
        // stats: {}
        cost: { type: GraphQLInt },
        image: { type: GraphQLString },
        // aliases: {}
        // shop: {}
    })
})

module.exports = ItemType;
