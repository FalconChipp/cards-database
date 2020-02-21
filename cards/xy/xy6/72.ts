import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-72",
	localId: 72,

	// Card informations
	name: {
		en: "Swellow",
		fr: "Hélédelle",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 277,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/72/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/72/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/72/high",
		},
	},

	evolveFrom: {
		en: "Taillow",
		fr: "Nirondelle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Plus Δ",
		},
		text: {
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque de ce Pokémon, récupérez une carte Récompense supplémentaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-Aile",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
