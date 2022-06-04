
export function getStringOption(name , interaction){
    return interaction.options.getString(name)
}

export function getBooleanOption(name , interaction){
    return interaction.options.getBoolean(name)
}

export function getIntegerOption(name , interaction){
    return interaction.options.getInteger(name)
}
