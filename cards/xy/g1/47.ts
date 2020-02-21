import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-47",
	localId: 47,

	// Card informations
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 106,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/47/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/47/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Stretch Kick",
			fr: "Allonge",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Spiral Kick",
			fr: "Coup'd Pied en Spirale",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
