import { getAllFilesRecusrsive } from '../handlers/file_loader.js';
import { join} from 'node:path';

const commands = new Map();

const commandsPath = join(process.cwd(), 'commands');


function registerCommand(command){
	commands.set(command.data.name ,command)
}


//ignore the ide unacessary await 
await getAllFilesRecusrsive(commandsPath,registerCommand)


export function getCommand(commandName){
    return commands.get(commandName)
}