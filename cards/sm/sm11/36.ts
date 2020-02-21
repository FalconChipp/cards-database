import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-36",
	localId: 36,

	// Card informations
	name: {
		en: "Lapras",
		fr: "Lokhlass",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 131,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/36/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/36/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 874,
		type: AbilityType.TALENT,
		name: {
			en: "Mermaid's Call",
			fr: "Appel de la Sirène",
		},
		text: {
			en: "Once during your turn (before your attack), you may put a Misty's Favor card from your discard pile into your hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer une carte Faveur d’Ondine de votre pile de défausse dans votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
