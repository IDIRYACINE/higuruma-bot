import { SlashCommandBuilder } from '@discordjs/builders';
import { commandsData, replies } from '../utils/data.js';
import { isThereAsession, registerEvidance } from '../../functions/voice/voice_manager.js';
import { getStringOption  } from '../utils/utility.js';

export const data =  new SlashCommandBuilder()
		.setName(commandsData.register_evidance.name)
		.setDescription(commandsData.register_evidance.description)
		.addStringOption(
			option => 
			option.setName(commandsData.register_evidance.options.evidanceName.name)
			.setDescription(commandsData.register_evidance.options.evidanceName.description)
			.setRequired(true)
		)
		.addStringOption(
			option => 
			option.setName(commandsData.register_evidance.options.evidanceType.name)
			.setDescription(commandsData.register_evidance.options.evidanceType.description)
			.setRequired(true)
			.setChoices(...commandsData.register_evidance.options.evidanceType.values)
		)
		.addStringOption(
			option => 
			option.setName(commandsData.register_evidance.options.evidance.name)
			.setDescription(commandsData.register_evidance.options.evidance.description)
			.setRequired(true)
		)
	
export const execute = async (interaction) => {
	if (!isThereAsession(interaction.member.guild.id)){
		await interaction.reply(replies.sessionNotFound)
		return
	}

	const evidance = {
		type : getStringOption(commandsData.register_evidance.options.evidanceType,interaction),
		name : getStringOption(commandsData.register_evidance.options.evidanceName,interaction),
		evidance : getStringOption(commandsData.register_evidance.options.evidance,interaction),
		owner : interaction.member.id
	}

	registerEvidance(interaction.member,evidance)

	await interaction.reply(replies.registredEvidance);
}

export default {
	data:data,
	execute:execute,
}