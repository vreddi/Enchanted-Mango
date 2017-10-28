'use strict';

const graphql = require('graphql');
const chai = require('chai');
const Item = require('../../Schema/itemType');

const expect = chai.expect;

const {
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLEnumType
} = graphql;

const {
    ItemType,
    ItemAbilityType,
    ItemShopAvailabilityType,
    ItemStatType,
    ItemDescriptionType,
    StatType,
    StatValueType,
} = Item;

describe('ItemType', () => {

    let itemTypeFields = ItemType.getFields();

    it('should have name field of type String', () => {
        expect(itemTypeFields).to.have.property('name');
        expect(itemTypeFields.name.type).to.deep.equals(GraphQLString);
    });

    it('should have localizedName field of type String', () => {
        expect(itemTypeFields).to.have.property('localizedName');
        expect(itemTypeFields.localizedName.type).to.deep.equals(GraphQLString);
    });

    it('should have popularityRank field of type Int', () => {
        expect(itemTypeFields).to.have.property('popularityRank');
        expect(itemTypeFields.popularityRank.type).to.deep.equals(GraphQLInt);
    });

    it('should have sourceLink field of type String', () => {
        expect(itemTypeFields).to.have.property('sourceLink');
        expect(itemTypeFields.sourceLink.type).to.deep.equals(GraphQLString);
    });

    it('should have lore field of type String', () => {
        expect(itemTypeFields).to.have.property('lore');
        expect(itemTypeFields.lore.type).to.deep.equals(GraphQLString);
    });

    it('should have descriptions field of type ItemDescriptionType[]', () => {
        expect(itemTypeFields).to.have.property('descriptions');
        expect(itemTypeFields.descriptions.type).to.deep.equals(new GraphQLList(ItemDescriptionType));
    });

    it('should have notes field of type String[]', () => {
        expect(itemTypeFields).to.have.property('notes');
        expect(itemTypeFields.notes.type).to.deep.equals(new GraphQLList(GraphQLString));
    });

    it('should have timesUsed field of type Int', () => {
        expect(itemTypeFields).to.have.property('timesUsed');
        expect(itemTypeFields.timesUsed.type).to.deep.equals(GraphQLInt);
    });

    it('should have useRate field of type Float', () => {
        expect(itemTypeFields).to.have.property('useRate');
        expect(itemTypeFields.useRate.type).to.deep.equals(GraphQLFloat);
    });

    it('should have winRate field of type Float', () => {
        expect(itemTypeFields).to.have.property('winRate');
        expect(itemTypeFields.winRate.type).to.deep.equals(GraphQLFloat);
    });

    it('should have stats field of type ItemStatType[]', () => {
        expect(itemTypeFields).to.have.property('stats');
        expect(itemTypeFields.stats.type).to.deep.equals(new GraphQLList(ItemStatType));
    });

    it('should have cost field of type Int', () => {
        expect(itemTypeFields).to.have.property('cost');
        expect(itemTypeFields.cost.type).to.deep.equals(GraphQLInt);
    });

    it('should have image field of type String', () => {
        expect(itemTypeFields).to.have.property('image');
        expect(itemTypeFields.image.type).to.deep.equals(GraphQLString);
    });

    it('should have aliases field of type String[]', () => {
        expect(itemTypeFields).to.have.property('aliases');
        expect(itemTypeFields.aliases.type).to.deep.equals(new GraphQLList(GraphQLString));
    });

    it('should have shops field of type ItemShopAvailabilityType', () => {
        expect(itemTypeFields).to.have.property('shops');
        expect(itemTypeFields.shops.type).to.deep.equals(ItemShopAvailabilityType);
    });
});

describe('ItemShopAvailabilityType', () => {

    let itemShopAvailabilityTypeFields = ItemShopAvailabilityType.getFields();

    it('should have sideShop field of type Boolean', () => {
        expect(itemShopAvailabilityTypeFields).to.have.property('sideShop');
        expect(itemShopAvailabilityTypeFields.sideShop.type).to.deep.equals(GraphQLBoolean);
    });

    it('should have homeShop field of type Boolean', () => {
        expect(itemShopAvailabilityTypeFields).to.have.property('homeShop');
        expect(itemShopAvailabilityTypeFields.homeShop.type).to.deep.equals(GraphQLBoolean);
    });

    it('should have secretShop field of type Boolean', () => {
        expect(itemShopAvailabilityTypeFields).to.have.property('secretShop');
        expect(itemShopAvailabilityTypeFields.secretShop.type).to.deep.equals(GraphQLBoolean);
    });
});

describe('ItemStatType', () => {

     let itemStatTypeFields = ItemStatType.getFields();

     it('should have name field of type String', () => {
        expect(itemStatTypeFields).to.have.property('name');
        expect(itemStatTypeFields.name.type).to.deep.equals(GraphQLString);
     });

     it('should have value field of type Float', () => {
        expect(itemStatTypeFields).to.have.property('value');
        expect(itemStatTypeFields.value.type).to.deep.equals(GraphQLFloat);
     });

     it('should have statType field of type Enum<StatType>', () => {
        expect(itemStatTypeFields).to.have.property('statType');
        expect(itemStatTypeFields.statType.type).to.deep.equals(new GraphQLEnumType(StatType));
     });

     it('should have valueType field of type Enum<StatValueType>', () => {
        expect(itemStatTypeFields).to.have.property('valueType');
        expect(itemStatTypeFields.valueType.type).to.deep.equals(new GraphQLEnumType(StatValueType));
     });
});

describe('StatType', () => {

    it('should have name field equal \'StatType\'', () => {
        expect(StatType).to.have.property('name');
        expect(StatType.name).to.deep.equals('StatType');
    });

    it('should have values field', () => {
        expect(StatType).to.have.property('values');
    });

    it('values field should have Attribute field with value 0', () => {
        expect(StatType.values).to.have.property('Attribute');
        expect(StatType.values.Attribute.value).to.deep.equals(0);
    });

    it('values field should have Effect field with value 1', () => {
        expect(StatType.values).to.have.property('Effect');
        expect(StatType.values.Effect.value).to.deep.equals(1);
    });
});

describe('StatValueType', () => {

    it('should have name field equal \'StatValueType\'', () => {
        expect(StatValueType).to.have.property('name');
        expect(StatValueType.name).to.deep.equals('StatValueType');
    });

    it('should have values field', () => {
        expect(StatValueType).to.have.property('values');
    });

    it('values field should have Number field with value 0', () => {
        expect(StatValueType.values).to.have.property('Number');
        expect(StatValueType.values.Number.value).to.deep.equals(0);
    });

    it('values field should have Percentage field with value 1', () => {
        expect(StatValueType.values).to.have.property('Percentage');
        expect(StatValueType.values.Percentage.value).to.deep.equals(1);
    });
});

describe('ItemDescriptionType', () => {

    let itemDescriptonTypeFields = ItemDescriptionType.getFields();

    it('should have name field of type String', () => {
        expect(itemDescriptonTypeFields).to.have.property('name');
        expect(itemDescriptonTypeFields.name.type).to.deep.equals(GraphQLString);
    });

    it('should have type field of type Enum<ItemAbilityType>', () => {
        expect(itemDescriptonTypeFields).to.have.property('type');
        expect(itemDescriptonTypeFields.type.type).to.deep.equals(new GraphQLEnumType(ItemAbilityType));
    });

    it('should have description field of type String', () => {
        expect(itemDescriptonTypeFields).to.have.property('description');
        expect(itemDescriptonTypeFields.description.type).to.deep.equals(GraphQLString);
    });

    it('should have manaCost field of type String', () => {
        expect(itemDescriptonTypeFields).to.have.property('manaCost');
        expect(itemDescriptonTypeFields.manaCost.type).to.deep.equals(GraphQLInt);
    });

    it('should have coolDown field of type Float[]', () => {
        expect(itemDescriptonTypeFields).to.have.property('coolDown');
        expect(itemDescriptonTypeFields.coolDown.type).to.deep.equals(new GraphQLList(GraphQLFloat));
    });
});

describe('ItemAbilityType', () => {

    it('should have name field equal \'ItemAbilityType\'', () => {
        expect(ItemAbilityType).to.have.property('name');
        expect(ItemAbilityType.name).to.deep.equals('ItemAbilityType');
    });

    it('should have values field', () => {
        expect(ItemAbilityType).to.have.property('values');
    });

    it('values field should have Active field with value 0', () => {
        expect(ItemAbilityType.values).to.have.property('Active');
        expect(ItemAbilityType.values.Active.value).to.deep.equals(0);
    });

    it('values field should have Passive field with value 1', () => {
        expect(ItemAbilityType.values).to.have.property('Passive');
        expect(ItemAbilityType.values.Passive.value).to.deep.equals(1);
    });

    it('values field should have Use field with value 2', () => {
        expect(ItemAbilityType.values).to.have.property('Use');
        expect(ItemAbilityType.values.Use.value).to.deep.equals(2);
    });
});
