import { SlashCommandBuilder } from '@discordjs/builders';
import { commandsData } from '../utils/data';

/*
	print the current session rules , max speakers 
	public/private , time limits on speakers,
	and we can also include the topic of discussion here,
	session duration can also be used
*/

export const data =  new SlashCommandBuilder()
		.setName(commandsData.rules.name)
		.setDescription(commandsData.rules.description)
	
export const execute = async (interaction) => {
	await interaction.reply('Pong!');
}

export default {
	data:data,
	execute:execute,
}