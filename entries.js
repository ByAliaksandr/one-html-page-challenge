/**
 * Every entry must include a title and filename, the rest are optional.
 * For simplicity in merges, please add to the bottom of the object.
 *
 * interface
 * {
 *     title: string // display name
 *     filename: string // the name of your HTML file
 *     description?: string // description that will be listed with your entry
 *     author?: string // your name/tag that will be listed
 *     github?: string // username on github that will display a link to your profile
 *     compatibleBrowsers?: array // browsers that this page is compatible with
 * }
 */

const entries = [
	{
		title: "Ant Colony (Example project by author)",
		filename: "ant_colony.html",
		description: "Simulation of an ant colony creating a never ending underground colony. The 'Q' represents a queen that can giver birth to ants 'A'. Food sources are represented by the numbers 9 - 1. (Currently only works in desktop Chrome)",
		author: "Christopher Powroznik (Metroxe)",
		github: "Metroxe",
		compatibleBrowsers: ["Chrome Desktop"],
	},
	{
		title: "Pink vs Unknowns",
		filename: "pink-vs-unknowns.html",
		description: "Pink vs Unknowns is a simulation where two sides have opposite contradictory missions.",
		author: "Aliaksandr B.",
		github: "ByAliaksandr",
		compatibleBrowsers: ["Chrome Desktop, Firefox Desktop, Safari Desktop"],
	},
];
