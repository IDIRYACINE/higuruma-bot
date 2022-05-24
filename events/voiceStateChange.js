import { getCommand } from '../handlers/commands.js';


export default {
    name : 'voiceStateUpdate',
    once:false,
    execute : async (oldState,newState) => {
        const command = getCommand(interaction.commandName)
        await command.execute(interaction)
    }
    
}