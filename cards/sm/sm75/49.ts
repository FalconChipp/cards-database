import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-49",
	localId: 49,

	// Card informations
	name: {
		en: "Zygarde",
		fr: "Zygarde",
	},

	hp: 130,

	type: [
		Type.DRAGON,
	],

	dexId: 718,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/49/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/49/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Rumble",
			fr: "Bagarre",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Raging Blade",
			fr: "Lame en Furie",
		},
		text: {
			en: "If this Pokémon has any damage counters on it, this attack does 60 more damage.",
			fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
