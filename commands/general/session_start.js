import { SlashCommandBuilder } from '@discordjs/builders';
import {isAlreadyInSession} from '../../functions/voice/voice_manager.js'
import {commandsData, replies } from '../utils/data.js'



export const data =  new SlashCommandBuilder()
		.setName(commandsData.start_session.name)
		.setDescription(commandsData.start_session.description)

export const execute = async (interaction) => {

	const guildId = interaction.guildId

	if(isAlreadyInSession(guildId)){
		interaction.reply(replies.sessionAlreadyStarted)
		return
	}


/*
    mute all non speakers 
    deafen anyone who is not allowed
    get the first speaker
    start the timer
	for (let [snowflake, guildMember] of channel.members) {
		console.log(`${guildMember.displayName} (${guildMember.id})`);
	}
*/
	await interaction.reply(replies.sessionStart)
	
}

export default {
	data:data,
	execute:execute,
}