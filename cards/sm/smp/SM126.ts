import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM126",
	localId: "SM126",

	// Card informations
	name: {
		en: "Ultra Necrozma-GX",
		fr: "Ultra-Necrozma-GX",
	},

	hp: 190,

	type: [
		Type.DRAGON,
	],

	dexId: 800,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM126/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM126/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM126/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
		Tag.BASIC,
	],

	illustrator: {
		id: 194,
		name: "PLANETA Otani"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.METAL
		],
		name: {
			en: "Photon Geyser",
			fr: "Photo-Geyser",
		},
		text: {
			en: "Discard all basic Psychic Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			fr: "Défaussez toute l’Énergie Psychic de base de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.METAL
		],
		name: {
			en: "Sky-Scorching Light GX",
			fr: "Lumière Apocalyptique-GX",
		},
		text: {
			en: "You can use this attack only if the total of both players' remaining Prize cards is 6 or less. Put 6 damage counters on each of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Vous ne pouvez utiliser cette attaque que s’il reste un total de 6 cartes Récompense ou moins aux deux joueurs. Placez 6 marqueurs de dégâts sur chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
