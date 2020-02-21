import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-65",
	localId: 65,

	// Card informations
	name: {
		en: "Reshiram-GX",
		fr: "Reshiram-GX",
	},

	hp: 180,

	type: [
		Type.FIRE,
	],

	dexId: 643,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/65/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/65/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 141,
		name: "PLANETA Igarashi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flame Charge",
			fr: "Nitrocharge",
		},
		text: {
			en: "Search your deck for up to 2 Fire Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 cartes Énergie Fire dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Scorching Column",
			fr: "Colonne Torride",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 110
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Vermilion-GX",
			fr: "Vermillon-GX",
		},
		text: {
			en: "You may attach up to 5 Fire Energy cards from your hand to your Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
			fr: "Vous pouvez attacher jusqu’à 5 cartes Énergie Fire de votre main à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
