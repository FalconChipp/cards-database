import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-74",
	localId: 74,

	// Card informations
	name: {
		en: "Ruin Wall",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/74/high",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
