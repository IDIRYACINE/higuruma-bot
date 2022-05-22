// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import config from './config.json' assert {type:"json"};
import path from 'node:path';
import {getAllFiles} from './handlers/file_loader'


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


const eventsPath = path.join(process.cwd(), 'events');

function registerEvent(event){
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}	
}

getAllFiles(eventsPath,registerEvent)



client.login(config.token);