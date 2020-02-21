import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-75",
	localId: 75,

	// Card informations
	name: {
		en: "Rayquaza-EX",
		fr: "Rayquaza-EX",
	},

	hp: 170,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/75/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/75/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 161,
		name: "Ryota Murayama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Intensifying Burn",
			fr: "Rage Brûlante",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Pulse",
			fr: "Dracochoc",
		},
		text: {
			en: "Discard the top 3 cards of your deck.",
			fr: "Défaussez les 3 cartes du dessus de votre deck.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
