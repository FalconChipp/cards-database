import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-96",
	localId: 96,

	// Card informations
	name: {
		en: "All-Night Party",
		fr: "Célébration Nocturne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/96/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/96/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Une seule fois pendant le tour de chaque joueur, si le Pokémon Actif de ce joueur est Endormi, il peut retirer cet État Spécial et soigner 30 dégâts au Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
