'use strict';

const graphql = require('graphql');
const chai = require('chai');

const {
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLEnumType
} = graphql;

const Hero = require('../../Schema/heroType');
const LanePresenceType = Hero.LanePresenceType;
const HeroDistributedStatsFloatType = Hero.HeroDistributedStatsFloatType;
const HeroDistributedStatsRangeType = Hero.HeroDistributedStatsRangeType;
const HeroAttackAnimationType = Hero.HeroAttackAnimationType;
const HeroVisionRangeType = Hero.HeroVisionRangeType;
const LaneType = Hero.LaneType;
const RangeFloatType = Hero.RangeFloatType;
const HeroType = Hero.HeroType;

const expect = chai.expect;

describe('HeroType', () => {

    let heroTypeFields = HeroType.getFields();

    it('should have name field of type String', () => {
        expect(heroTypeFields).to.have.property('name');
        expect(heroTypeFields.name.type).to.deep.equals(GraphQLString);
    });

    it('should have localizedName field of type String', () => {
        expect(heroTypeFields).to.have.property('localizedName');
        expect(heroTypeFields.localizedName.type).to.deep.equals(GraphQLString);
    });

    it('should have popularity field of type Int', () => {
        expect(heroTypeFields).to.have.property('popularity');
        expect(heroTypeFields.popularity.type).to.deep.equals(GraphQLInt);
    });

    it('should have winRate field of type Float',() => {
        expect(heroTypeFields).to.have.property('winRate');
        expect(heroTypeFields.winRate.type).to.deep.equals(GraphQLFloat);
    });

    it('should have lanePresence field of type LanePresenceType[]',() => {
        expect(heroTypeFields).to.have.property('lanePresence');
        expect(heroTypeFields.lanePresence.type).to.deep.equals(new GraphQLList(LanePresenceType));
    });

    it('should have image field of type String',() => {
        expect(heroTypeFields).to.have.property('image');
        expect(heroTypeFields.image.type).to.deep.equals(GraphQLString);
    });

    it('should have sourceLink field of type String',() => {
        expect(heroTypeFields).to.have.property('sourceLink');
        expect(heroTypeFields.sourceLink.type).to.deep.equals(GraphQLString);
    });

    it('should have health field of type HeroDistributedStatsFloatType',() => {
        expect(heroTypeFields).to.have.property('health');
        expect(heroTypeFields.health.type).to.deep.equals(HeroDistributedStatsFloatType);
    });

    it('should have healthRegen field of type HeroDistributedStatsFloatType',() => {
        expect(heroTypeFields).to.have.property('healthRegen');
        expect(heroTypeFields.healthRegen.type).to.deep.equals(HeroDistributedStatsFloatType);
    });

    it('should have mana field of type HeroDistributedStatsFloatType',() => {
        expect(heroTypeFields).to.have.property('mana');
        expect(heroTypeFields.mana.type).to.deep.equals(HeroDistributedStatsFloatType);
    });

    it('should have manaRegen field of type HeroDistributedStatsFloatType',() => {
        expect(heroTypeFields).to.have.property('manaRegen');
        expect(heroTypeFields.manaRegen.type).to.deep.equals(HeroDistributedStatsFloatType);
    });

    it('should have damage field of type HeroDistributedStatsRangeType',() => {
        expect(heroTypeFields).to.have.property('damage');
        expect(heroTypeFields.damage.type).to.deep.equals(HeroDistributedStatsRangeType);
    });

    it('should have armor field of type HeroDistributedStatsFloatType',() => {
        expect(heroTypeFields).to.have.property('armor');
        expect(heroTypeFields.armor.type).to.deep.equals(HeroDistributedStatsFloatType);
    });

    it('should have spellDamage field of type HeroDistributedStatsFloatType',() => {
        expect(heroTypeFields).to.have.property('spellDamage');
        expect(heroTypeFields.spellDamage.type).to.deep.equals(HeroDistributedStatsFloatType);
    });

    it('should have attacksPerSecond field of type HeroDistributedStatsFloatType',() => {
        expect(heroTypeFields).to.have.property('attacksPerSecond');
        expect(heroTypeFields.attacksPerSecond.type).to.deep.equals(HeroDistributedStatsFloatType);
    });

    it('should have movementSpeed field of type Int',() => {
        expect(heroTypeFields).to.have.property('movementSpeed');
        expect(heroTypeFields.movementSpeed.type).to.deep.equals(GraphQLInt);
    });

    it('should have turnRate field of type Float',() => {
        expect(heroTypeFields).to.have.property('turnRate');
        expect(heroTypeFields.turnRate.type).to.deep.equals(GraphQLFloat);
    });

    it('should have visionRange field of type Int',() => {
        expect(heroTypeFields).to.have.property('visionRange');
        expect(heroTypeFields.visionRange.type).to.deep.equals(HeroVisionRangeType);
    });

    it('should have attackRange field of type Int',() => {
        expect(heroTypeFields).to.have.property('attackRange');
        expect(heroTypeFields.attackRange.type).to.deep.equals(GraphQLInt);
    });

    it('should have attackAnimation field of type HeroAttackAnimationType',() => {
        expect(heroTypeFields).to.have.property('attackAnimation');
        expect(heroTypeFields.attackAnimation.type).to.deep.equals(HeroAttackAnimationType);
    });

    it('should have baseAttackTime field of type Float',() => {
        expect(heroTypeFields).to.have.property('baseAttackTime');
        expect(heroTypeFields.baseAttackTime.type).to.deep.equals(GraphQLFloat);
    });

    it('should have magicResistance field of type Float',() => {
        expect(heroTypeFields).to.have.property('magicResistance');
        expect(heroTypeFields.magicResistance.type).to.deep.equals(GraphQLFloat);
    });

    it('should have collisionSize field of type Float',() => {
        expect(heroTypeFields).to.have.property('collisionSize');
        expect(heroTypeFields.collisionSize.type).to.deep.equals(GraphQLFloat);
    });

    it('should have legs field of type Int',() => {
        expect(heroTypeFields).to.have.property('legs');
        expect(heroTypeFields.legs.type).to.deep.equals(GraphQLInt);
    });
});

describe('LanePresenceType', () => {

    let lanePresenceTypeFields = LanePresenceType.getFields();

    it('should have lane field of type Enum<LaneType>', () => {
        expect(lanePresenceTypeFields).to.have.property('lane');
        expect(lanePresenceTypeFields.lane.type).to.deep.equals(new GraphQLEnumType(LaneType));
    });

    it('should have presence field of type Float', () => {
        expect(lanePresenceTypeFields).to.have.property('presence');
        expect(lanePresenceTypeFields.presence.type).to.deep.equals(GraphQLFloat);
    });

    it('should have winRatio field of type Float', () => {
        expect(lanePresenceTypeFields).to.have.property('winRate');
        expect(lanePresenceTypeFields.winRate.type).to.deep.equals(GraphQLFloat);
    });

    it('should have kdaRatio field of type Float', () => {
        expect(lanePresenceTypeFields).to.have.property('kdaRatio');
        expect(lanePresenceTypeFields.kdaRatio.type).to.deep.equals(GraphQLFloat);
    });

    it('should have gpm field of type Float', () => {
        expect(lanePresenceTypeFields).to.have.property('gpm');
        expect(lanePresenceTypeFields.gpm.type).to.deep.equals(GraphQLFloat);
    });

    it('should have xpm field of type Float', () => {
        expect(lanePresenceTypeFields).to.have.property('xpm');
        expect(lanePresenceTypeFields.xpm.type).to.deep.equals(GraphQLFloat);
    });
});

describe('LaneType', () => {

    it('should have name field equal \'LaneType\'', () => {
        expect(LaneType).to.have.property('name');
        expect(LaneType.name).to.deep.equals('LaneType');
    });

    it('should have values field', () => {
        expect(LaneType).to.have.property('values');
    });

    it('values field should have Offlane field with value 0', () => {
        expect(LaneType.values).to.have.property('Offlane');
        expect(LaneType.values.Offlane.value).to.deep.equals(0);
    });

    it('values field should have Safelane field with value 1', () => {
        expect(LaneType.values).to.have.property('Safelane');
        expect(LaneType.values.Safelane.value).to.deep.equals(1);
    });

    it('values field should have Midlane field with value 2', () => {
        expect(LaneType.values).to.have.property('Offlane');
        expect(LaneType.values.Midlane.value).to.deep.equals(2);
    });

    it('values field should have Jungle field with value 3', () => {
        expect(LaneType.values).to.have.property('Jungle');
        expect(LaneType.values.Jungle.value).to.deep.equals(3);
    });
});

describe('HeroDistributedStatsFloatType', () => {

    let heroDistributedStatsFloatTypeFields = HeroDistributedStatsFloatType.getFields();

    it('should have base field of type Float', () => {
        expect(heroDistributedStatsFloatTypeFields).to.have.property('base');
        expect(heroDistributedStatsFloatTypeFields.base.type).to.deep.equals(GraphQLFloat);
    });

    it('should have level1 field of type Float', () => {
        expect(heroDistributedStatsFloatTypeFields).to.have.property('level1');
        expect(heroDistributedStatsFloatTypeFields.level1.type).to.deep.equals(GraphQLFloat);
    });

    it('should have level15 field of type Float', () => {
        expect(heroDistributedStatsFloatTypeFields).to.have.property('level15');
        expect(heroDistributedStatsFloatTypeFields.level15.type).to.deep.equals(GraphQLFloat);
    });

    it('should have level25 field of type Float', () => {
        expect(heroDistributedStatsFloatTypeFields).to.have.property('level25');
        expect(heroDistributedStatsFloatTypeFields.level25.type).to.deep.equals(GraphQLFloat);
    });
});

describe('HeroDistributedStatsRangeType', () => {

    let heroDistributedStatsRangeTypeFields = HeroDistributedStatsRangeType.getFields();

    it('should have base field of type RangeFloatType', () => {
        expect(heroDistributedStatsRangeTypeFields).to.have.property('base');
        expect(heroDistributedStatsRangeTypeFields.base.type).to.deep.equals(RangeFloatType);
    });

    it('should have level1 field of type RangeFloatType', () => {
        expect(heroDistributedStatsRangeTypeFields).to.have.property('level1');
        expect(heroDistributedStatsRangeTypeFields.level1.type).to.deep.equals(RangeFloatType);
    });

    it('should have level15 field of type RangeFloatType', () => {
        expect(heroDistributedStatsRangeTypeFields).to.have.property('level15');
        expect(heroDistributedStatsRangeTypeFields.level15.type).to.deep.equals(RangeFloatType);
    });

    it('should have level25 field of type RangeFloatType', () => {
        expect(heroDistributedStatsRangeTypeFields).to.have.property('level25');
        expect(heroDistributedStatsRangeTypeFields.level25.type).to.deep.equals(RangeFloatType);
    });
});

describe('HeroVisionRangeType', () => {

    let heroVisionRangeTypeFields = HeroVisionRangeType.getFields();

    it('should have day field of type Int', () => {
        expect(heroVisionRangeTypeFields).to.have.property('day');
        expect(heroVisionRangeTypeFields.day.type).to.deep.equals(GraphQLInt);
    });

    it('should have night field of type Int', () => {
        expect(heroVisionRangeTypeFields).to.have.property('night');
        expect(heroVisionRangeTypeFields.night.type).to.deep.equals(GraphQLInt);
    });
});

describe('HeroAttackAnimationType', () => {

    let heroAttackAnimationTypeFields = HeroAttackAnimationType.getFields();

    it('should have attackPoint field of type Int', () => {
        expect(heroAttackAnimationTypeFields).to.have.property('attackPoint');
        expect(heroAttackAnimationTypeFields.attackPoint.type).to.deep.equals(GraphQLFloat);
    });

    it('should have attackBackSwing field of type Int', () => {
        expect(heroAttackAnimationTypeFields).to.have.property('attackBackSwing');
        expect(heroAttackAnimationTypeFields.attackBackSwing.type).to.deep.equals(GraphQLFloat);
    });
});

describe('RangeFloatType', () => {

    let rangeFloatTypeFields = RangeFloatType.getFields();

    it('should have min field of type Float', () => {
        expect(rangeFloatTypeFields).to.have.property('min');
        expect(rangeFloatTypeFields.min.type).to.deep.equals(GraphQLFloat);
    });

    it('should have max field of type Float', () => {
        expect(rangeFloatTypeFields).to.have.property('max');
        expect(rangeFloatTypeFields.max.type).to.deep.equals(GraphQLFloat);
    });
});
