

export const replies = {
    isAlreadyInSession : "I am already in a session ",
    sessionNotFound : "There is no session taking place",
    notMaster : "You are not the session master",
    speakerAdded : "Registred a new speaker",
    notInVoiceChannel : "Join a voice channel first !",
    sessionStart  : "Started the session",
    registredSession : "Registred the session",
    notInSession : "I am not in a session",
    sessionEnd : "This session is closed",
    sessionAlreadyStarted : "Session already started",
    unmuted : "You have been unmuted",
    registredEvidance : "The evidance was registred",
    evidanceNotFound : "The specified evidance name was not found"

}

export const sessions = {
    speakerId : "speakerId",
    publicSession : {
        name : "public",
        description : "if false then anyone who joins will be automatically defaned"
    },
    speakerTimeLimit : {
        name : "time-limit", 
        description : "speaker timeLimit in minutes"
    },
    speakersPermission : {
        name: "speakers-open", 
        description : "if set to true only the session master can add the speakers"
    },
    speakersCount : {
        name : "count", 
        description : "speaker timeLimit in minutes"
    }
}

export const commandsData = {
    mute : {
        name :"mute",
        description : "Mute a member"
    },
    unmute : {
        name :"unmute",
        description : "Unmute a member"
    },
    join : {
        name :"join",
        description : "Join the session as a speaker"
    },
    invite : {
        name: "invite",
        description : "The session master invites a speaker , use this after setting session speakers to closed"
    },
    session : {
        name: "session",
        description : "Configure a new session rules"
    },
    start_session : {
        name :"session-start",
        description : "Start the session"
    },
    end_session : {
        name :"session-end",
        description : "End the session"
    },
    rules : {
        name :"rules",
        description : "Reply with the session rules"
    },
    vote : {
        name: "vote",
        description : "Start a poll "
    },
    profile :{
        name :"profile",
        description : "Reply with the user profile"
    },
    rate :{
        name :"rate",
        description : "Rate the user behavior"
    },
    reputation : {
        name: "reputation",
        description : "Reply with the user reputation"
    },
    interupt :{
        name :"interupt",
        description : "Interupt the speaker , depending on the session configuration the speaker must give his approval"
    },
    evidance :{
        name: "evidance",
        description : "Reply with the specified evidance , if not specified all registred evidances will be replied"
    },
    testimony :{
        name: "testimony",
        description : "Invite a user to give a testimony"
    },
    record:{
        name: "record",
        description : "Start recording the session"
    },
    pause :{
        name: "pause",
        description : "Pause recording the session"
    },
    stop :{
        name:"stop",
        description : "Stop recording the session and publish the recording"
    },
    resume:{
        name: "resume",
        description : "Resume recording the session"
    },
    register_evidance:{
        name: "evidance-register",
        description : "Regsiter an evidance for usage during the session",
        options : {
            evidanceName : {
                name : "evidance-name",
                description : "Register the evidance under the issued name"
            }
            ,
            evidanceType : {
                name : "evidance-type",
                description : "Register the evidance under the issued type",
                values : [ 
                    {name:"Image",value :"Image"} ,
                    {name:"Article",value : "Article"} ,
                    {name:"Vocal",value:"Vocal"},
                    {name:"Video",value:"Video"}
                ]
            },
            evidance : {
                name : "evidance-content",
                description : "Register the evidance content"
            }
        }
    }

}