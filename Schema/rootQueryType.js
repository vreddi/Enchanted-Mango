const axios = require('axios');
const mongoose = require('mongoose');
const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const ItemType = require('./itemType');
//const Item = mongoose.model('item');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        items: {
            type: new GraphQLList(ItemType),
            resolve(parentValue) {
                return axios.get('http://localhost:3000/items/').then(resp => resp.data);
            }
        }
    })
});

module.exports = RootQuery;
