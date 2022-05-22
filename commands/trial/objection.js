import { SlashCommandBuilder } from '@discordjs/builders';

export const data =  new SlashCommandBuilder()
		.setName('objection')
		.setDescription('Raise an objection request to the judge')
	
export const execute = async (interaction) => {
	
	await interaction.reply('Pong!');
}

export default {
	data:data,
	execute:execute,
}