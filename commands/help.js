const {MessageEmbed} = require('discord.js');

module.exports.run = (client, message, args, queue, searcher) => {
    const helpEmbed = new MessageEmbed()
            .setTitle('DestariaMC BOT List Commands')

            .setThumbnail(client.user.displayAvatarURL())
            
            .addField(':question:  Help  :question: ', 
            '• ip\n• discord\n• info\n• donation', true)

            .addField(':bulb:  Tutorial  :bulb: ', 
            '• warp\n• claim\n• shop', true)

            .addField(':roll_of_paper:  Random  :roll_of_paper: ', 
            '• avatar\n• meme\n• ping\n• calculator\n• say', true)
            

            .setColor('c70039')
            .setFooter("DestariaMC Bot")
        message.channel.send(helpEmbed);
}

module.exports.config = {
    name: "help",
    aliases: ["help"]
}