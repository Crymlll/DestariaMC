const {MessageEmbed} = require('discord.js');

module.exports.run = (client, message, args, queue, searcher) => {
    const helpEmbed = new MessageEmbed()
            .setTitle('Link DestariaMC Discord Server')
            .setDescription('Join us :\nhttps://discord.gg/466tEZeNND')
            .setColor('c70039')
            .setFooter("DestariaMC Bot")
        message.channel.send(helpEmbed);
}

module.exports.config = {
    name: "link",
    aliases: ["link", "discord"]
}