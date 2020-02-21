import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-212",
	localId: 212,

	// Card informations
	name: {
		en: "Morty",
		fr: "Mortimer",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/212/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/212/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/212/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/212/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si l’un de vos Pokémon Psychic a été mis K.O. pendant le dernier tour de votre adversaire.\n\nVotre adversaire dévoile sa main. Choisissez 2 cartes que vous y trouvez. Votre adversaire mélange ces cartes avec son deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
