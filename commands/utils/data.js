

export const replies = {
    isAlreadyInSession : "I am already in a session ",
    sessionNotFound : "There is no session taking place",
    notMaster : "You are not the session master",
    speakerAdded : "Registred a new speaker"
}

export const sessions = {
    speakerId : "speakerId"
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
        description : "Reply with a pre-registred evidance"
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
        description : "Resume recording the session"},
    register_evidance:{
        name: "evidance-register",
        description : "Regsiter an evidance for usage during the session"
    }

}