const Discord = require('discord.js');

module.exports.run = (client, message, args, queue, searcher) => {
    const embed = new Discord.MessageEmbed()

    if(!message.mentions.users.first()){
        embed.setTitle("Your Avatar:")
        embed.setThumbnail(message.author.displayAvatarURL())
        embed.setColor("RANDOM")
        return message.channel.send(embed)
    }else{
        const user = message.mentions.users.first()
        embed.setTitle(`${user.tag}'s Avatar:`)
        embed.setColor('RANDOM')
        embed.setImage(user.displayAvatarURL({size: 1024}))
        return message.channel.send(embed)
    }
}

module.exports.config = {
    name: "avatar",
    aliases: ["ava"]
}