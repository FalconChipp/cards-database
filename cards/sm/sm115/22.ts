import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-22",
	localId: 22,

	// Card informations
	name: {
		en: "Electrode",
		fr: "Électrode",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/22/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/22/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/22/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Lightning Ball",
			fr: "Boule Éclair",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electroblast",
			fr: "Électro-Explosion",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
