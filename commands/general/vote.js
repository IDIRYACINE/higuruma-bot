import { SlashCommandBuilder } from '@discordjs/builders';
import { getSession } from '../../functions/voice/voice_manager.js';
import { commandsData } from '../utils/data.js';

/*
	start a poll , optional params would be the title 
    can be a question , topic , opinion 
    needs to be flexible
	
*/


export const data =  new SlashCommandBuilder()
		.setName(commandsData.vote.name)
		.setDescription(commandsData.vote.description)

		
	
export const execute = async (interaction) => {
	
	const channelId = interaction.member.voice.channel.id
	
	interaction.member.voice.setMute(true)

	interaction.reply("Trial")

}

export default {
	data:data,
	execute:execute,
}