import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-167",
	localId: 167,

	// Card informations
	name: {
		en: "Lightning Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/167/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/167/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],













	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
