import { SlashCommandBuilder } from '@discordjs/builders';
import { fetchEvidance } from '../../functions/voice/voice_manager.js';
import { commandsData, replies } from '../utils/data.js';
import { getStringOption  } from '../utils/utility.js';

export const data =  new SlashCommandBuilder()
	.setName(commandsData.evidance.name)
	.setDescription(commandsData.evidance.description)
	.addStringOption(
		option => 
		option.setName(commandsData.evidance.name)
		.setDescription(commandsData.evidance.description)
	)
	
	
export const execute = async (interaction) => {
	const evidanceName = getStringOption(commandsData.evidance.name,interaction)
	const guildId = interaction.member.guild.id

	function replyWithTheEvidance(){
		let evidance =fetchEvidance(guildId,evidanceName)
		if(evidance != undefined){
			interaction.reply(evidance)
		}else{
			interaction.reply(replies.evidanceNotFound)
		}
		return
	}

	if (evidanceName != undefined){
		replyWithTheEvidance()
		return
	}

	await interaction.reply('TODO : Reply with everyting');
}

export default {
	data:data,
	execute:execute,
}