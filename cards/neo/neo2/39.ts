import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-39",
	localId: 39,

	// Card informations
	name: {
		en: "Houndour",
	},

	hp: 40,

	type: [
		Type.DARKNESS,
	],

	dexId: 228,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 119,
		name: "Shin-ichi Yoshida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bite",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Plunder",
		},
		text: {
			en: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
		},
		damage: 20
	}],



	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
