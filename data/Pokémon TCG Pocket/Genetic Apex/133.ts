import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Woobat"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gnaw"
		},

		damage: "10"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
