const {MessageEmbed} = require('discord.js');

module.exports.run = (client, message, args, queue, searcher) => {
    const helpEmbed = new MessageEmbed()
            .setTitle('SERVER INFORMATION')

            .setThumbnail(client.user.displayAvatarURL())
            
            addField('Server Name', 
            'DestariaMC Indonesia', true)

            addField('Server IP', 
            '**PLAY.DESTARIA.NET**', true)

            .addField('Server Founder', 
            'XiDS#9999', true)

            .addField('Server Owners', 
            '• RzkySR#5555\n• AkuPakboii#2288\n• Sweetheart#7959', true)
            
            .addField('Author', 
            '• DragonCrymlll#9999', true)
            

            .setColor('c70039')
            .setFooter("DestariaMC Bot")
        message.channel.send(helpEmbed);
}

module.exports.config = {
    name: "info",
    aliases: ["information"]
}
