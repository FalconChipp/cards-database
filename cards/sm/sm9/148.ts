import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-148",
	localId: 148,

	// Card informations
	name: {
		en: "Metal Goggles",
		fr: "Masque Métal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/148/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/148/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/148/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon Metal auquel cette carte est attachée subit 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance), et les attaques et les talents de votre adversaire ne peuvent pas placer de marqueurs de dégâts dessus.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
