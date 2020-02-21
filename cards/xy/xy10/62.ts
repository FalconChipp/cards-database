import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-62",
	localId: 62,

	// Card informations
	name: {
		en: "Bronzong BREAK",
		fr: "Archéodong TURBO",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 437,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/62/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/62/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/62/high",
		},
	},

	evolveFrom: {
		en: "Bronzong",
		fr: "Archéodong",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Rain",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Discard as many Metal Energy attached to this Pokémon as you like. For each Energy card discarded in this way, choose 1 of your opponent's Pokémon and do 30 damage to it. Don't apply Weakness and Resistance. (You may choose the same Pokémon more than once.)",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			fr: "Pluie Dorée",
		},
		text: {
			fr: "Défaussez autant d'Énergies Metal attachées à ce Pokémon que vous voulez. Pour chaque carte Énergie défaussée de cette façon, choisissez l'un des Pokémon de votre adversaire et infligez-lui 30 dégâts. N'appliquez ni la Faiblesse ni la Résistance. (Vous pouvez choisir plusieurs fois le même Pokémon.)",
		},
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
