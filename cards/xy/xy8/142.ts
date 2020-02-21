import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-142",
	localId: 142,

	// Card informations
	name: {
		en: "Houndoom Spirit Link",
		fr: "Lien Spirituel Démolosse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/142/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/142/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/142/high",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Démolosse-EX.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
