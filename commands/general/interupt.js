import { SlashCommandBuilder } from '@discordjs/builders';
import { commandsData } from '../utils/data.js';


/*
	ask permissions to speak , can set time limits on interuptions
	or leave them unlimited , in which the current speaker must have
	some privileged command to stop the interupter,
	is it possible to triger a popup instead of responding with a slash command ?
	as it can be annoying  

*/


export const data =  new SlashCommandBuilder()
		.setName(commandsData.interupt.name)
		.setDescription(commandsData.interupt.description)
	
export const execute = async (interaction) => {
	await interaction.reply('Pong!');
}

export default {
	data:data,
	execute:execute,
}