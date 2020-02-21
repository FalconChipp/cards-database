import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Butterfree",
		fr: "Papilusion",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 12,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/5/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/5/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/5/high",
		},
	},

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 146,
		name: "miki kudo"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Quiver Dance",
			fr: "Papillodanse",
		},
		text: {
			en: "Search your deck for a basic Energy card and attach it to this Pokémon. Shuffle your deck afterward. If you attached Energy in this way, heal 40 damage from this Pokémon.",
			fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck. Si vous avez attaché de l'Énergie de cette façon, soignez 40 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
