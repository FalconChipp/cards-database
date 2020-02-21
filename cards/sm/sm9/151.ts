import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-151",
	localId: 151,

	// Card informations
	name: {
		en: "Nita",
		fr: "Nix",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/151/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/151/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/151/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/151/high",
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
			fr: "Vous ne pouvez jouer cette carte que si le Pokémon Actif de votre adversaire est un Pokémon de base.\n\nPlacez une Énergie du Pokémon Actif de votre adversaire sur le dessus de son deck.",
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
