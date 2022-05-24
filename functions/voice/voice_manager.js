
const voiceConnections = {}

export function isAlreadyInSession(voiceChannelId){
    return voiceConnections[voiceChannelId] != undefined
}
/*
    1- unified session model 
    2- vary session model , use session type to decide how to deal with the options
*/

// consider using a map instead of an array , O(1) access time instead of filtering through the array? O(n)
export function registerSession(voiceChannel){
    voiceConnections[voiceChannel.id] = {
        // master is the one who started the session
        master : "member",
        channel : voiceChannel,
        // if it's false then anyone who joins will be automatically defaned 
        // a different solution would be to allow a specific role
        // can solve the judge situation by registring it as a role
        public : true,
        // queque data structure , after time limit push the active member to the back
        // or if the speaker says he is done 
        // to join speakers use join command , or get invited 
        speakers : [],
        // a seperation between participants (listeners and active speakers)
        // anyone who joins the voice channel and isn't a speaker is automatically a participant
        participants : [],
        speaker : "member",
        // the max allowed speakers
        speakersLimit : 2,
        //if set to true only the master can invite the speakers
        speakerPermissions : false,
        // is there a way to setup a callbak when the session starts as builder pattern ?
        // without the need to check for the session options everyTime , time limits in ms ?s?
        speakerTimeLimit : 5,

    }
}

export function unregisterSession(voiceChannel){
    voiceConnections[voiceChannel.id].destroy()
}

export function getSession(voiceChannelId){
    return voiceConnections[voiceChannelId]
}

function reachedSpeakersLimit(session){
    return session.speakers.size >= session.speakersLimit
}

export function joinSpeakers(session,member){

    if(!session.speakerPermissions && !reachedSpeakersLimit(session)){
        session.speakers.push(member)
    }

}

export function registerSpeaker(session,member){
    if(!reachedSpeakersLimit(session)){
        session.speakers.push(member)
    }
}

export function isSessionMaster(session,member){
    return session.master.id == member.id
}