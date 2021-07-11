const Discord = require('discord.js');

module.exports.run = (client, message, args, queue, searcher) => {
    message.channel.send(`Hi ${message.author.tag}!`);
}

module.exports.config = {
    name: "hello",
    aliases: ["hi", "hey", "yo","supp","hei","hai","hallo"]
}