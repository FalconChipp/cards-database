import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-123",
	localId: 123,

	// Card informations
	name: {
		en: "Aggron Spirit Link",
		fr: "Lien Spirituel Galeking",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/123/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/123/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Galeking-EX.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
