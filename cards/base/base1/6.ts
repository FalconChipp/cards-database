import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Gyarados",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/6/high",
		},
	},

	evolveFrom: {
		en: "Magikarp",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Dragon Rage",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Bubblebeam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card
