import { SlashCommandBuilder } from '@discordjs/builders';
import { registerSpeaker, isSessionMaster} from '../../functions/voice/voice_manager.js';
import { commandsData,replies } from '../utils/data.js';
/*
	invite a user as a speaker , only the master of the session can use this command

*/


export const data =  new SlashCommandBuilder()
		.setName(commandsData.invite.name)
		.setDescription(commandsData.invite.description)
	
export const execute = async (interaction) => {

    const member = interaction.member
    const channelId = interaction.member.voice.channel.id
	const session = getSession(channelId)

    if(!isSessionMaster(session,member)){
        await interaction.reply(replies.notMaster);
    }

    const speakerId = interaction.options.getString(speakerId)
    registerSpeaker(session , speakerId)

	await interaction.reply(replies.speakerAdded);
}

export default {
	data:data,
	execute:execute,
}