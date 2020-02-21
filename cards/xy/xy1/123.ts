import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-123",
	localId: 123,

	// Card informations
	name: {
		en: "Professor's Letter",
		fr: "Lettre du Professeur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/123/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/123/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu'à 2 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
