module.exports.run = (client, message, args, queue, searcher) => {
    message.channel.send("just blank");
}

module.exports.config = {
    name: "blank",
    aliases: ["blank"]
}