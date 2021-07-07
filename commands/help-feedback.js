const {MessageEmbed} = require('discord.js');

module.exports.run = (client, message, args, queue, searcher) => {
    const helpEmbed = new MessageEmbed()
            .setTitle('Support DestariaMC Bot')
            .setDescription('Feedback Langsung Chat staff aja')
            .setColor('c70039')
            .setFooter("DestariaMC Bot")
        message.channel.send(helpEmbed);
}

module.exports.config = {
    name: "feedback",
    aliases: ["fb"]
}