module.exports = {
    ban: function (message, bot) {

        let wm = message.content.toUpperCase();

        let aargs = wm.split(" ").slice(2);


        var overlord = message.guild.roles.find("name", "Cat overlord");
        var vet = message.guild.roles.find("name", "Vet");
        var head = message.guild.roles.find("name", "Head Vet");
        var lady = message.guild.roles.find("name", "Cat Lady");
        var hasPermission = false;

        if(message.member.roles.has(overlord.id) ||message.member.roles.has(vet.id) ||message.member.roles.has(head.id) ||message.member.roles.has(lady.id)) {
            hasPermission = true;
        } else {
            message.reply("Hey, you can't tell me what to do!");
            return;
        }

        if (hasPermission) {       
            var person = message.mentions.users.first().id;
            var reason = aargs.join(" ");

            if (reason == "") {
                message.reply("No reason has been given, and the reason will default to `It has been decided that you should be banned.`");
                message.guild.ban(person, "It has been decided that you should be banned");
            } else {
                message.guild.ban(person, reason);
            }

        } else {
            message.reply("You don't have the power to do this");
        }

        return;

    }

};