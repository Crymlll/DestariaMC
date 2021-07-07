const {MessageEmbed} = require('discord.js');

module.exports.run = (client, message, args, queue, searcher) => {
    const helpEmbed = new MessageEmbed()
            .setTitle('DestariaMC BOT List Commands')

            .setThumbnail(client.user.displayAvatarURL())
            
            .addField(':question: help :question: ', 
            '• tutorial\n• vote\n• donation\n• stafflist', true)
            

            .setColor('c70039')
            .setFooter("DestariaMC Bot")
        message.channel.send(helpEmbed);
}

module.exports.config = {
    name: "help",
    aliases: ["help"]
}