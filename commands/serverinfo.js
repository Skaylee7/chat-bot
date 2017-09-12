const Discord = require('discord.js');

module.exports = {
    serverinfo: function (message, bot) {
        
        let wm = message.content.toUpperCase();

        let command = wm.split(" ")[0];

        const embed = new Discord.RichEmbed()
            .setAuthor('Server Info', message.author.avatarURL)
            .setColor('#9400ff')
            .setThumbnail(message.guild.iconURL)
            .setFooter('This action was preformed automatically', bot.user.avatarURL)
            .setTimestamp()
            .addField('Server Owner', message.guild.owner.user.username, false)
            .addField('Server Creation Date', message.guild.createdAt, false)
            .addField('Member Count', message.guild.memberCount, false)
            .addField('Server Region', message.guild.region, false);

        message.channel.send({
            embed
        });

        return;

    }

};