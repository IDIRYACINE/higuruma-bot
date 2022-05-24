import { SlashCommandBuilder } from '@discordjs/builders';
import {isAlreadyInSession,registerSession} from '../../functions/voice/voice_manager.js'
import {commandsData, replies , sessions} from '../utils/data.js'
import  { joinVoiceChannel } from '@discordjs/voice';

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
		.addStringOption(option => 
			option.setName(sessions.name)
			.setDescription("Session type")
			.setRequired(true)
			.setChoices(...sessions.values)
			)
	

export const execute = async (interaction) => {

	const channel = interaction.member.voice.channel
	if(isAlreadyInSession(channel.id)){
		interaction.reply(replies.isAlreadyInSession)
		return
	}

	const sessionType = interaction.options.getString(sessions.name)

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

	connection.on("stateChange",(oldState,newState)=>{
		console.log(`${oldState} => ${newState}`)
	})	

	registerSession(connection,sessionType)

	for (let [snowflake, guildMember] of channel.members) {
		console.log(`${guildMember.displayName} (${guildMember.id})`);
	}

	await interaction.reply("Trial")
	
}

export default {
	data:data,
	execute:execute,
}