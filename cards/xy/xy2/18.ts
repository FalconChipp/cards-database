import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-18",
	localId: 18,

	// Card informations
	name: {
		en: "Litleo",
		fr: "Hélionceau",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 667,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
