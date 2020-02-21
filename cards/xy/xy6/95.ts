import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-95",
	localId: 95,

	// Card informations
	name: {
		en: "Wide Lens",
		fr: "Loupe",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/95/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/95/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Les dégâts des attaques du Pokémon auquel cette carte est attachée sont affectés par la Faiblesse et la Résistance pour les Pokémon de Banc de votre adversaire.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
