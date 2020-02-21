import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-40",
	localId: 40,

	// Card informations
	name: {
		en: "Brionne",
		fr: "Otarlette",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 729,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/40/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/40/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/40/high",
		},
	},

	evolveFrom: {
		en: "Popplio",
		fr: "Otaquin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Disarming Voice",
			fr: "Voix Enjôleuse",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
