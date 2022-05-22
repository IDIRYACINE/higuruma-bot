import { SlashCommandBuilder } from '@discordjs/builders';

export const data =  new SlashCommandBuilder()
		.setName('verdict')
		.setDescription('Judge anounces the final verdict')
	
export const execute = async (interaction) => {
	await interaction.reply('Pong!');
}

export default {
	data:data,
	execute:execute,
}