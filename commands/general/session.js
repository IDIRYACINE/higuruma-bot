import { SlashCommandBuilder } from '@discordjs/builders';

export const data =  new SlashCommandBuilder()
		.setName('session')
		.setDescription('Start a new session')
	
export const execute = async (interaction) => {
	await interaction.reply('Pong!');
}

export default {
	data:data,
	execute:execute,
}