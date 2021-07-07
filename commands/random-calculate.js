const math = require('mathjs');

const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if(!args[0]) return message.channel.send('Please provide a question');

    let resp;

    try{
        resp = math.evaluate(args.join(' ').replace('x', '*'))
    } catch (e){
        return message.channel.send('Please provide a **Valid** question')
    }

    const embed = new Discord.MessageEmbed()
    .setColor(0x808080)
    .setTitle('Calculator')
    .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
    .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

    message.channel.send(embed);
}

module.exports.config = {
    name: "calculate",
    aliases: ["calculator","hitung","jumlah","c","kalkulator","math","evaluate"]
}