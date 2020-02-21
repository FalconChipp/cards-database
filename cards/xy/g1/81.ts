import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-81",
	localId: 81,

	// Card informations
	name: {
		en: "Basic Darkness Energy",
		fr: "Énergie Darkness de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/81/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/81/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
