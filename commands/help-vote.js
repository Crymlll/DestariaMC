const {MessageEmbed} = require('discord.js');

module.exports.run = (client, message) => {
    const info = new MessageEmbed()
        .setTitle("Voting Site")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("RANDOM")
        .setDescription("List Voting Site")
        .addField("Minecraft Server List","https://minecraft-server-list.com/server/478941/vote/", true)
        .addField("Minecraft MP","https://minecraft-mp.com/server-s289215",true)
        .addField("Top Minecraft Server","https://topminecraftservers.org/server/18916", true)
        .addField("TopG","https://topg.org/minecraft-servers/server-631336", true)
        .setFooter("DestariaMC Bot")
        message.channel.send(info);
}

module.exports.config = {
    name: "vote",
    aliases: ["vote"]
}