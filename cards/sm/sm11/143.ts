import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-143",
	localId: 143,

	// Card informations
	name: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 546,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/143/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/143/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/143/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/143/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 115,
		name: "Asako Ito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dust Gathering",
			fr: "Ramasse Poussière",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
