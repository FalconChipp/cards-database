import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-90",
	localId: 90,

	// Card informations
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 687,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/90/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/90/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/90/high",
		},
	},

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Slosh",
			fr: "Renversement d’Énergie",
		},
		text: {
			en: "You may move all Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Vous pouvez déplacer toute l’Énergie de ce Pokémon vers l’un de vos Pokémon de Banc",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
