import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-126",
	localId: 126,

	// Card informations
	name: {
		en: "Bill's Maintenance",
		fr: "Entretien de Léo",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/126/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/126/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/126/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez une carte de votre main avec votre deck. Dans ce cas, piochez 3 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
