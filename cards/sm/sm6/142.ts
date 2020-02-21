import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-142",
	localId: 142,

	// Card informations
	name: {
		en: "Eneporter",
		fr: "Énéporteur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/142/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/142/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/142/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez une Énergie spéciale de l’un des Pokémon de votre adversaire vers un autre de ses Pokémon.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
