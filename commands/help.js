const Discord = require('discord.js');

module.exports = {
    help: function (message, bot) {


        let wm = message.content.toUpperCase();

        let command = wm.split(" ")[0];

        var overlord = message.guild.roles.find("name", "Creator");
        var vet = message.guild.roles.find("name", "Admin");

        const embed = new Discord.RichEmbed()
            .setAuthor('Bot Commands', message.author.avatarURL)
            .setColor('#9400ff')
            .setThumbnail(message.guild.iconURL)
            .setFooter('This action was preformed automatically', bot.user.avatarURL)
            .setTimestamp()
            .addField('?help', "Gives you the list of all the commands", false)
            .addField('?ping', "Gives you the ping of the bot", false)
            .addField('?color [color]', "Replace [color] with a valid color from #color-request", false)
            .addField('?si or ?serverinfo', "Gives you basic information on the server", false)
            .addField('?ban @user [reason]', 'Lets you ban anyone who has been a naughty cat');
            embed.addField('Mention Camilla\'s Clone', "you can talk to her!", false);

        message.author.send({
            embed
        });

        message.reply("You have been sent my commands in your dms");
        return;

    }

};