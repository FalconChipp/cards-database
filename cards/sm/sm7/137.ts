import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-137",
	localId: 137,

	// Card informations
	name: {
		en: "Lisia",
		fr: "Atalante",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/137/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/137/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/137/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 2 cartes  (Prisme Étoile) dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
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
