import { SlashCommandBuilder } from '@discordjs/builders';

export const data =  new SlashCommandBuilder()
		.setName('rebutal')
		.setDescription('Move on to the rebutal section if the debaters both accept')
	
export const execute = async (interaction) => {
	await interaction.reply('Pong!');
}

export default {
	data:data,
	execute:execute,
}