const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
} = graphql;

const ItemType = require('./itemType');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addItem: {
            type: ItemType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                cost: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parentValue, { name, cost }) {
                if(process.env.ONLINE_MODE) {
                    // TODO
                }
                else {
                    return axios.post('http://localhost:3000/items', { name, cost }).then(resp => resp.data);
                }
            }
        }
    }
});

module.export = mutation;
