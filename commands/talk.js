module.exports = {
    talk: function (message, bot, cleverbot, cleverbotToken) {

        let wm = message.content.toUpperCase();

        let args = wm.split(" ").slice(1);

        cleverbot.configure({
            botapi: cleverbotToken
        });
        
        cleverbot.write(args.join(" "), function (response) {
            message.reply(response.output);
        });

        return;

    }

};