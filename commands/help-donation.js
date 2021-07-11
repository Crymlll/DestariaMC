const {MessageEmbed} = require('discord.js');

module.exports.run = (client, message, args, queue, searcher) => {
    const info = new MessageEmbed()
        .setTitle("Donation Site")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("RANDOM")
        .setDescription("Bagi para petualang yang memiliki uang lebih dan mau donasi ke server ini. \nSilahkan melalui link di bawah \nDonation Page : https://trakteer.id/destariamc/tip")
        .setFooter("DestariaMC Bot")
        message.channel.send(info);
}

module.exports.config = {
    name: "donation",
    aliases: ["donate","donasi","sawer"]
}