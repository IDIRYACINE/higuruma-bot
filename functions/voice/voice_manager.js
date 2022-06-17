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
        // once started don't allow modifying evidances
        started : false,
        // queque data structure , after time limit push the active member to the back
        // or if the speaker says he is done 
        // to join speakers use join command , or get invited 
        speakers : [],
        // when a new user join we use this to identify him 
        // if member id is undefined then he is not a speaker O(1) complexity
        speakersId : {},
        // a seperation between participants (listeners and active speakers)
        // anyone who joins the voice channel and isn't a speaker is automatically a participant
        participants : {},
        //member object
        speaker : null,
        // the max allowed speakers
        speakersLimit : speakersCount,
        speakerPermissions : speakerPermissions,
        // is there a way to setup a callbak when the session starts as builder pattern ?
        // without the need to check for the session options everyTime , time limits in ms ?s?
        speakerTimeLimit : speakerTimeLimit,
        // registred evidance of this session
        // {memberId : {evidanceName : evidance , evidanceType : Vocal,Image,Article}}
        evidances : {}

    }
    
}

export function unregisterSession(guildId){
    voiceConnections[guildId].destroy()
}

export function getSession(guildId){
    return voiceConnections[guildId]
}

export function isThereAsession(guildId){
    return getSession(guildId) != undefined
}

export function startSession(guildId){
    voiceConnections[guildId].started = true
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
        session.speakersId[member.id] = member.id
        delete session.participants[member.id]
    }
}

export function isSessionMaster(member){
    const session = getSession(member.guildId)
    return session.master.id == member.id
}

export function registerParticipant(member){
    const session = getSession(member.guild.id)
    session.participants[member.id] = member
    member.voice.setMute(true)
}

export function isSpeaker(session,member){
    return session.speakersId[member.id] != undefined
}

/**
 * if an evidance with a similiar name already exist and the member owns it,
 * this will override it's content
 * @returns {boolean} depending on if the evidance was successfully registred 
 */
export function registerEvidance(member,evidance){
    const session = getSession(member.guild.id)
    if(session.evidances[evidance.name] != undefined && evidance.owner != member.id){
        return false 
    }
    session.evidances[evidance.name] = evidance 
    return true
}

export function fetchEvidance(guildId,evidanceName){
    const session = getSession(guildId)
    return session.evidances[evidanceName]
}

/**
 * @returns {boolean} true if the evidance was unregistred and false if 
 * the evidance doesn't exist or the member doesn't own the evidance
 */
export function unregisterEvidance(member,evidanceName){
    const session = getSession(member.guild.id)
    const evidance = session.evidances[evidanceName]
    if (evidance==undefined || evidance.owner != member.id){
        return false 
    }
    delete session.evidances[evidanceName]

    return true
}

