import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-53",
	localId: 53,

	// Card informations
	name: {
		en: "Lairon",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 305,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/53/high",
		},
	},

	evolveFrom: {
		en: "Aron",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Mend",
		},
		text: {
			en: "Search your discard pile for a Metal Energy card and attach it to Lairon. If you do, remove 2 damage counters from Lairon.",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Confront",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
