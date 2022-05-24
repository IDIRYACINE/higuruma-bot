import { SlashCommandBuilder } from '@discordjs/builders';
import { commandsData } from '../utils/data';

export const data =  new SlashCommandBuilder()
		.setName(commandsData.resume.name)
		.setDescription(commandsData.resume.description)
	
export const execute = async (interaction) => {
	await interaction.reply('Pong!');
}

export default {
	data:data,
	execute:execute,
}