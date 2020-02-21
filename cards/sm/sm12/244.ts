import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-244",
	localId: 244,

	// Card informations
	name: {
		en: "Gallade",
		fr: "Gallame",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 475,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/244/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/244/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/244/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/244/high",
		},
	},

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 211,
		name: "Huang Tzu En"
	},

	abilities: [{
		id: 771,
		type: AbilityType.TALENT,
		name: {
			en: "Double Type",
			fr: "Type Double",
		},
		text: {
			en: "As long as this Pokémon is in play, it is {P} and {F} type.",
			fr: "Tant que ce Pokémon est en jeu, il est de type Psychic et Fighting.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Cyclone",
			fr: "Cyclone d’Énergie",
		},
		text: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
