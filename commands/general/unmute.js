import { SlashCommandBuilder } from '@discordjs/builders';
import { commandsData, replies } from '../utils/data.js';

/*
	Members can use this command to unmute themselves,
	if the bot fails to unmute them after the session is over
	
*/

export const data =  new SlashCommandBuilder()
		.setName(commandsData.unmute.name)
		.setDescription(commandsData.unmute.description)
	
export const execute = async (interaction) => {
	interaction.member.voice.setMute(false);
	await interaction.reply(replies.unmuted);
}

export default {
	data:data,
	execute:execute,
}