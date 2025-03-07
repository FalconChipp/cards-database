import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoqueen"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Stage2",
	evolveFrom: {
		en: "Nidorina"
	},

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Lovestrike"
		},

		effect: {
			en: "This attack does 50 more damage for each of your Benched Nidoking"
		},

		damage: "80+"
	}],

	retreat: 2,
	rarity: "Three Diamond"
}

export default card
