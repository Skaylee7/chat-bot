module.exports = {
    ping: function (message, bot) {

        message.reply("Pong!\nThe bot has a ping of: `" + bot.ping + "ms`"); 
        return;

    }

};