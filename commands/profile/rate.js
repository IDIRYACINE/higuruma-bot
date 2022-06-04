import { SlashCommandBuilder } from '@discordjs/builders';
import { commandsData } from '../utils/data.js';

export const data =  new SlashCommandBuilder()
		.setName(commandsData.rate.name)
		.setDescription(commandsData.rate.description)
	
export const execute = async (interaction) => {
	await interaction.reply('Pong!');
}

export default {
	data:data,
	execute:execute,
}