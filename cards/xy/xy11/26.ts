import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-26",
	localId: 26,

	// Card informations
	name: {
		en: "Volcanion-EX",
		fr: "Volcanion-EX",
	},

	hp: 180,

	type: [
		Type.FIRE,
		Type.WATER,
	],

	dexId: 721,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/26/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/26/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 527,
		type: AbilityType.TALENT,
		name: {
			en: "Steam Up",
			fr: "Jets Vapeur",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, during this turn, your Basic Fire Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Fire de votre main. Dans ce cas, pendant ce tour, les attaques de vos Pokémon Fire de base infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Volcanic Heat",
			fr: "Chaleur Volcanique",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
