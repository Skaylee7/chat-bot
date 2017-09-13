const http = require('http');
const Discord = require('discord.js');
const bot = new Discord.Client();
const express = require('express');
const app = express();
const Cleverbot = require("cleverbot-node");
const cleverbot = new Cleverbot;

setInterval(function () {
    http.get("http://cat-bot.herokuapp.com");
}, 300000); // every 5 minutes (300000)

//start stuff for Heroku
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (request, response) {
    response.send('Hello World!');
})

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
})
//end stuff for heroku

var cleverbotToken = process.env.responseKey;
var botKey = process.env.botKey;
bot.login(botKey).catch(err => {
    console.error(err.stack)
});

const help = require("./commands/help.js");
const ping = require("./commands/ping.js");
const color = require("./commands/color.js");
const talk = require("./commands/talk.js");
const serverinfo = require("./commands/serverinfo.js");
const ban = require("./commands/ban.js");
const kick = require("./commands/kick.js");

bot.on("ready", () => {
    console.log("Bot is up");
    // var server = bot.guilds.get(serverXD);
    // server.members.forEach(function (person) {
    //     person.user.messagesSent = 0;
    // });
    bot.user.setGame("?help");
});

bot.on("message", (message) => {
    var wm = message.content.toUpperCase();
    var command = wm.split(" ")[0];

    if(message.isMentioned(bot.user)) {
        talk.talk(message, bot, cleverbot, cleverbotToken)
    } else if (command == "?HELP") {
        help.help(message, bot);
    } else if (command == "?PING") {
        ping.ping(message, bot);
    } else if (command == "?COLOR") {
        color.color(message, bot)
    } else if (command == "?SI"|| command == "?SERVERINFO") {
        serverinfo.serverinfo(message, bot);
    } else if (command == "?BAN") {
        ban.ban(message, bot);
    } else if (command == "?KICK") {
        kick.kick(message, bot);
    }

});