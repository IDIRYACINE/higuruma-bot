import { SlashCommandBuilder } from '@discordjs/builders';

export const data =  new SlashCommandBuilder()
		.setName('topic')
		.setDescription('Replies with the session topic')
	
export const execute = async (interaction) => {
	await interaction.reply('Pong!');
}

export default {
	data:data,
	execute:execute,
}