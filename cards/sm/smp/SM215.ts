import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM215",
	localId: "SM215",

	// Card informations
	name: {
		en: "Mew",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM215/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM215/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],



	abilities: [{
		id: 113,
		type: AbilityType.TALENT,
		name: {
			en: "Bench Barrier",
		},
		text: {
			en: "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Psypower",
		},
		text: {
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
