const {MessageEmbed} = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (client, message) => {
    const subReddits = ["meme", "memes","MakeMeSuffer","me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);
        
    //message.channel.send("Sorry, Under Maintenance");
}

module.exports.config = {
    name: "meme",
    aliases: ["meme"]
}