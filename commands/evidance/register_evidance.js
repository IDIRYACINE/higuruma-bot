import { SlashCommandBuilder } from '@discordjs/builders';

export const data =  new SlashCommandBuilder()
		.setName('register-evidance')
		.setDescription('Register evidance to be used in a session')
	
export const execute = async (interaction) => {
	await interaction.reply('Pong!');
}

export default {
	data:data,
	execute:execute,
}