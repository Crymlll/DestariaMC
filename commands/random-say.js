module.exports.run = (client, message, args, queue, searcher) => {
    message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("You don't have the required permissions to use this command.").then(m => m.delete(5000));
    if (args.length < 0){
        return message.reply("Nothing to say?").then(m => m.delete(5000));
    }else{
        message.channel.send(args.join(" "));
    }
}

module.exports.config = {
    name: "say",
    aliases: ["say"]
}