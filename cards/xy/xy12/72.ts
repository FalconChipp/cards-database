import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-72",
	localId: 72,

	// Card informations
	name: {
		en: "Dragonite-EX",
		fr: "Dracolosse-EX",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/72/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/72/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},

	abilities: [{
		id: 1298,
		type: AbilityType.TALENT,
		name: {
			en: "Pull Up",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench, you may put 2 Basic Pokémon (except for Dragonite-EX) from your discard pile into your hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
			fr: "Talent : Élévation",
		},
		text: {
			en: "Discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez ajouter 2 Pokémon de base (sauf Dracolosse-EX) de votre pile de défausse à votre main.",
		},
		damage: 130
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Ultralaser",
		},
		text: {
			fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
