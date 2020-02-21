import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base3-31",
	localId: 31,

	// Card informations
	name: {
		en: "Arbok",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 24,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/31/high",
		},
	},

	evolveFrom: {
		en: "Ekans",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Terror Strike",
		},
		text: {
			en: "Flip a coin. If heads and if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Fang",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fossil",
		code: "base3"
	}
}

export default card
