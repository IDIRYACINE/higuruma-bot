import { SlashCommandBuilder } from '@discordjs/builders';
import {registerSession} from '../../functions/voice/voice_manager.js'
import {commandsData, replies , sessions} from '../utils/data.js'
import  { joinVoiceChannel ,getVoiceConnection} from '@discordjs/voice';
import { getBooleanOption , getIntegerOption } from '../utils/utility.js';

/*
	Start A session , each session has public/private status
	max number of participants ? (voice channel already have max users can we leverage that ?)
	currentSpeaker ,
	time limit on each speaker round, or you can set it to unlimited and
	switch using the interupt command 

*/
export const data =  new SlashCommandBuilder()
		.setName(commandsData.session.name)
		.setDescription(commandsData.session.description)
		.addBooleanOption(
			option => 
			option.setName(sessions.publicSession.name)
			.setDescription(sessions.publicSession.description)
		)
		.addIntegerOption(
			option => 
			option.setName(sessions.speakersCount.name)
			.setDescription(sessions.speakersCount.description)
		)
		.addBooleanOption(
			option => 
			option.setName(sessions.speakersPermission.name)
			.setDescription(sessions.speakersPermission.description)
		)
		.addIntegerOption(
			option => 
			option.setName(sessions.speakerTimeLimit.name)
			.setDescription(sessions.speakerTimeLimit.description)
		)
		
	

export const execute = async (interaction) => {

	const channel = interaction.member.voice.channel
	const guildId = interaction.guildId
	const master = interaction.member 

	if(getVoiceConnection(guildId)!= null || undefined){
		interaction.reply(replies.isAlreadyInSession)
		return
	}

	const connection = 
	joinVoiceChannel(
		{
			channelId : channel.id,
			guildId : interaction.guildId,
			adapterCreator: interaction.guild.voiceAdapterCreator,
			selfDeaf : false,
			selfMute : false
		}
	)

	registerSession(
		connection,master,
		getBooleanOption(sessions.publicSession,interaction),
		getIntegerOption(sessions.speakersCount,interaction),
		getBooleanOption(sessions.speakersPermission,interaction),
		getIntegerOption(sessions.speakerTimeLimit,interaction)
	)

	/*connection.on("stateChange",(oldState,newState)=>{
		console.log(`${oldState} => ${newState}`)
	})	
	*/

	await interaction.reply(replies.registredSession)
	
}

export default {
	data:data,
	execute:execute,
}