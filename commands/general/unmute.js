import { SlashCommandBuilder } from '@discordjs/builders';
import { commandsData } from '../utils/data.js';

export const data =  new SlashCommandBuilder()
		.setName(commandsData.unmute.name)
		.setDescription(commandsData.unmute.description)
	
export const execute = async (interaction) => {
	await interaction.reply('Pong!');
}

export default {
	data:data,
	execute:execute,
}