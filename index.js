const { executionAsyncResource } = require('async_hooks');
const Discord = require('discord.js');
const { measureMemory } = require('vm');
const ytdl = require('ytdl-core');
const fs = require('fs')

const { YTSearcher } = require('ytsearcher');

const searcher = new YTSearcher({
    key: process.env.YTSearcher,
    revealed: true
});

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (e, f) => {
    if(e) return console.error(e);
    f.forEach(file => {
        if(!file.endsWith(".js")) return
        console.log(`${file}        ✅`)
        let cmd = require(`./commands/${file}`);
        let cmdName = cmd.config.name;
        client.commands.set(cmdName, cmd)
        cmd.config.aliases.forEach(alias => {
            client.aliases.set(alias, cmdName);
        })
    })
})



const queue = new Map();

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} READY!`)

    var activity =0;
        var activity = setInterval(() => {
            client.user.setActivity('d!help',{
                type : "LISTENING"
            }).catch(console.error);
        }, 1000 * 3);
        
        activity = setInterval(() => {
            client.user.setActivity('play.destaria.xyz',{
                type : "PLAYING"
            }).catch(console.error);
        }, 1000 * 3);
})

client.on("message", async(message) => {
    const prefix = 'd!';

    if(!message.content.startsWith(prefix)) return
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

    if(!cmd) return

    try {
        cmd.run(client, message, args, queue, searcher);
    }catch (err){
        return console.error(err)
    }
        
})

client.login(process.env.token)