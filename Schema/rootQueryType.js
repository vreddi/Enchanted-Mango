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
const { HeroType } = require('./heroType');
const Item = mongoose.model('item');
const Hero = mongoose.model('hero');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        items: {
            type: new GraphQLList(ItemType),
            resolve(parentValue) {
                if(process.env.ONLINE_MODE) {
                    return Item.find({});
                }
                else {
                    return axios.get('http://localhost:3000/items/').then(resp => resp.data);
                }
            }
        },
        heros: {
            type: new GraphQLList(HeroType),
            resolve(parentValue) {
                if(process.env.ONLINE_MODE) {
                    return Hero.find({});
                }
                else {
                    return axios.get('http://localhost:3000/heros/').then(resp => resp.data);
                }
            }
        }
    })
});

module.exports = RootQuery;
