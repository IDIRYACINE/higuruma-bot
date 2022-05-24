import { SlashCommandBuilder } from '@discordjs/builders';
import { commandsData } from '../utils/data';

export const data =  new SlashCommandBuilder()
		.setName(commandsData.register_evidance.name)
		.setDescription(commandsData.register_evidance.description)
	
export const execute = async (interaction) => {
	await interaction.reply('Pong!');
}

export default {
	data:data,
	execute:execute,
}