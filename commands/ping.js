module.exports = {
    ping: function (message, bot) {

        message.reply("Pong!\nI have a ping of: `" + bot.ping + "ms`" +
                      "\nNot that clones can have ping..."); 
        return;

    }

};