import { getCommand } from '../handlers/commands.js';


export default {
    name : 'interactionCreate',
    once:false,
    execute : async (interaction) => {
        const command = getCommand(interaction.commandName)
        await command.execute(interaction)
    }
}