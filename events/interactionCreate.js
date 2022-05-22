import { Collection } from 'discord.js';
import { join } from 'node:path';
import { getAllFilesRecusrsive } from '../handlers/file_loader.js';

const commands = new Collection();
const commandsPath = join(process.cwd(), 'commands');


function registerCommand(command){
	commands.set(command.data.name ,command)
}

await getAllFilesRecusrsive(commandsPath,registerCommand)

export default {
    name : 'interactionCreate',
    once:false,
    execute : async (interaction) => {
        const command = commands.get(interaction.commandName)
        await command.execute(interaction)
    }
}