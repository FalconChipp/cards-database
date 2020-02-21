import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-37",
	localId: 37,

	// Card informations
	name: {
		en: "Snorunt",
		fr: "Stalgamin",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 361,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/37/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/37/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Icicle",
			fr: "Concrétion Glacée",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
