import { SlashCommandBuilder } from '@discordjs/builders';
import {isAlreadyInSession,isSessionMaster,unregisterSession} from '../../functions/voice/voice_manager.js'
import {commandsData, replies } from '../utils/data.js'
import  { getVoiceConnection } from '@discordjs/voice';

export const data =  new SlashCommandBuilder()
		.setName(commandsData.end_session.name)
		.setDescription(commandsData.end_session.description)
		
		
	

export const execute = async (interaction) => {
	const guildId = interaction.member.guildId

	if(!isAlreadyInSession(guildId)){
		await interaction.reply(replies.notInSession)
		return
	}

	if(!isSessionMaster(interaction.member)){
		await interaction.reply(replies.notMaster)
		return
	}

	if(isAlreadyInSession(guildId)){
        getVoiceConnection().disconnect()
		unregisterSession()
		interaction.reply(replies.sessionEnd)
		return
	}

	await interaction.reply(replies.notInSession)
	
}

export default {
	data:data,
	execute:execute,
}