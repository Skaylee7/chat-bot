module.exports = {
    color: function (message, bot) {
        
        if(message.channel.id != "354773144193466380") {
            message.channel.send("Please only use this command in <#354773144193466380>");
            return;
        }

        let wm = message.content.toUpperCase();

        let command = wm.split(" ")[0];

        let args = wm.split(" ").slice(1);

        var number = parseInt(args[0]);

        var roles = bot.guilds.first().roles;

        var color1 = roles.find("name", "Secret");
        var color2 = roles.find("name", "ChalkPurple");
        var color3 = roles.find("name", "AngelPurple");
        var color4 = roles.find("name", "AngelPink");
        var color5 = roles.find("name", "Pink");
        var color6 = roles.find("name", "ChalkGreen");
        var color7 = roles.find("name", "GreenScreen");
        var color8 = roles.find("name", "NeonGreen");
        var color9 = roles.find("name", "Clover");
        var color10 = roles.find("name", "ArmyGreen");
        var color11 = roles.find("name", "Salmon");
        var color12 = roles.find("name", "Giraffe");
        var color13 = roles.find("name", "Slime");
        var color14 = roles.find("name", "Agua");
        var color15 = roles.find("name", "Blush");
        var color16 = roles.find("name", "SkyBlue");
        var color17 = roles.find("name", "LightBlue");
        var color18 = roles.find("name", "BluesClues");
        var color19 = roles.find("name", "CartoonBlue");
        var color20 = roles.find("name", "Bluejeans");

        switch (number) {
            case 1:
                message.member.addRole(color1)
                break;
            case 2:
                message.member.addRole(color2)
                break;
            case 3:
                message.member.addRole(color3)
                break;
            case 4:
                message.member.addRole(color4)
                break;
            case 5:
                message.member.addRole(color5)
                break;
            case 6:
                message.member.addRole(color6)
                break;
            case 7:
                message.member.addRole(color7)
                break;
            case 8:
                message.member.addRole(color8)
                break;
            case 9:
                message.member.addRole(color9)
                break;
            case 10:
                message.member.addRole(color10)
                break;
            case 11:
                message.member.addRole(color11)
                break;
            case 12:
                message.member.addRole(color12)
                break;
            case 13:
                message.member.addRole(color13)
                break;
            case 14:
                message.member.addRole(color14)
                break;
            case 15:
                message.member.addRole(color15)
                break;
            case 16:
                message.member.addRole(color16)
                break;
            case 17:
                message.member.addRole(color17)
                break;
            case 18:
                message.member.addRole(color18)
                break;
            case 19:
                message.member.addRole(color19)
                break;
            case 20:
                message.member.addRole(color20)
        }

        message.delete();

        return;

    }

};