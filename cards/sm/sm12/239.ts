import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-239",
	localId: 239,

	// Card informations
	name: {
		en: "Piplup",
		fr: "Tiplouf",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 393,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/239/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/239/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/239/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/239/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 209,
		name: "Tomomi Kaneko"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Bubble Hold",
			fr: "Bulles Bloquantes",
		},
		text: {
			en: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
