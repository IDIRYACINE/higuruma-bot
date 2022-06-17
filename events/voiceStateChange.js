import { getCommand } from '../handlers/commands.js';
import { registerParticipant,isSpeaker } from '../functions/voice/voice_manager.js';

export default {
    name : 'voiceStateUpdate',
    once:false,
    execute : async (oldState,newState) => {
        if(oldState.member.user.bot) return
       
        //join event
        if (oldState.channelID === null || typeof oldState.channelID == 'undefined'){
            registerParticipant(oldState.member)
        }

        //leave event 
        if (newState.channelID === null || typeof newState.channelID == 'undefined'){
            // handle if the master leaves 
            // handle if the speaker leaves ? or give a manual command to unregister them
        }
        
    }
    
}