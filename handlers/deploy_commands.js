/*

This file is treated as a script , it have no effects on the actual bot/server
use npm run deploy to deploy the commands into discord 
*/

import { join } from 'node:path';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import config from '../config.json' assert {type:"json"};
import { getAllFilesRecusrsive } from './file_loader.js';

const commands = [];
const commandsPath = join(process.cwd(), 'commands');


function registerCommand(command){
	commands.push(command.data.toJSON())
}

// ignore the ide unacessary await !
await getAllFilesRecusrsive(commandsPath, registerCommand)

  
const rest = new REST({ version: '9' }).setToken(config.token);

(async () => {
	try {
	
		console.log('Started refreshing application (/) commands.');
		await rest.put(
			Routes.applicationGuildCommands(config.clientId, config.guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
	}
)();
