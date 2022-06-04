import { VoiceConnection } from "@discordjs/voice"

let voiceConnections = {}

export function isAlreadyInSession(guildId){
    return voiceConnections[guildId] != undefined
}
/*
    1- unified session model 
    2- vary session model , use session type to decide how to deal with the options
*/

/**  
 * @param {VoiceConnection} channel voiceConnection where the session is held
 * @param {Member} master the member who registred the session
 * @param {Boolean} publicSession if false then anyone who joins will be automatically defaned 
 * @param {Boolean} speakerPermissions if set to true only the master can invite the speakers
 * @param {Double}  speakerTimeLimit speaker timeLimit in minutes 
 * @param {Integer} speakersCount max number of members that can join as speakers
 */

//consider using a map instead of an array , O(1) access time instead of filtering through the array? O(n)
export function registerSession(
    channel ,
    master ,
    publicSession = true,
    speakersCount = 2 ,
    speakerPermissions = false,
    speakerTimeLimit = 5 ,
    ){

    voiceConnections[channel.joinConfig.guildId] = {
        // master is the one who started the session
        master : master,
        channel : channel,
        // a different solution would be to allow a specific role
        // can solve the judge situation by registring it as a role
        public : publicSession,
        // queque data structure , after time limit push the active member to the back
        // or if the speaker says he is done 
        // to join speakers use join command , or get invited 
        speakers : [],
        // a seperation between participants (listeners and active speakers)
        // anyone who joins the voice channel and isn't a speaker is automatically a participant
        participants : [],
        //member object
        speaker : null,
        // the max allowed speakers
        speakersLimit : speakersCount,
        speakerPermissions : speakerPermissions,
        // is there a way to setup a callbak when the session starts as builder pattern ?
        // without the need to check for the session options everyTime , time limits in ms ?s?
        speakerTimeLimit : speakerTimeLimit,

    }
    
}

export function unregisterSession(guildId){
    voiceConnections[guildId].destroy()
}

export function getSession(guildId){
    return voiceConnections[guildId]
}

function reachedSpeakersLimit(session){
    return session.speakers.size >= session.speakersLimit
}

export function joinSpeakers(guildId,member){
    const session = getSession(guildId)

    if(!session.speakerPermissions && !reachedSpeakersLimit(session)){
        session.speakers.push(member)
    }

}

export function registerSpeaker(guildId,member){
    const session = getSession(guildId)

    if(!reachedSpeakersLimit(session)){
        session.speakers.push(member)
    }
}

export function isSessionMaster(member){
    const session = getSession(member.guildId)
    return session.master.id == member.id
}