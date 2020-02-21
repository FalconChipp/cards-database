import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-82",
	localId: 82,

	// Card informations
	name: {
		en: "Potion Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
