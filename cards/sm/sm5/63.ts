import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-63",
	localId: 63,

	// Card informations
	name: {
		en: "Dawn Wings Necrozma-GX",
		fr: "Necrozma Ailes de l’Aurore-GX",
	},

	hp: 180,

	type: [
		Type.PSYCHIC,
	],

	dexId: 800,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/63/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/63/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1164,
		type: AbilityType.TALENT,
		name: {
			en: "Invasion",
			fr: "Invasion",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may switch it with your Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez l’échanger avec votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Dark Flash",
			fr: "Flash Sombre",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 120
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Moon's Eclipse-GX",
			fr: "Éclipse Lunaire-GX",
		},
		text: {
			en: "You can use this attack only if you have more Prize cards remaining than your opponent. Prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
			fr: "Vous pouvez utiliser cette attaque seulement s’il vous reste plus de cartes Récompense que votre adversaire. Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
