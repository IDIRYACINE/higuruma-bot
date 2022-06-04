import { SlashCommandBuilder } from '@discordjs/builders';
import { getSession,joinSpeakers } from '../../functions/voice/voice_manager.js';
import { replies,commandsData } from '../utils/data.js';

/*
	join the speakers in the session ,
	a session speakers can be reserved , only if the organiser invites you

*/


export const data =  new SlashCommandBuilder()
		.setName(commandsData.join.name)
		.setDescription(commandsData.join.description)

		
export const execute = async (interaction) => {
	
	const channelId = interaction.member.voice.channel.id
	console.log(channelId)	
	const session = getSession(channelId)
	
	if(session == undefined){
		await interaction.reply(replies.sessionNotFound)
		return
	}

	joinSpeakers(session,interaction.member)

	await interaction.reply(replies.speakerAdded)

}

export default {
	data:data,
	execute:execute,
}