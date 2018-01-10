const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require("./settings.json");
//const salesonandoff = client.channels.find('name', 'sales');
client.on('ready', () => {
client.user.setPresence({ game: { name: "Sales: Off", type: 0 } });
client.channels.find('name','general').send("I'm now online again");
});

client.on('message', function(message, args) {
     if (message.content === settings.prefix + 'saleson') {
         if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("You do not have permissions to do this!");
       //message.reply("Sales are now online");
//client.user.setPresence({ game: { name: "Sales: On", type: 0 } });
        client.user.setGame("Sales: On");
    if (client.user.setGame("Sales: On")) {
        client.channels.find('name', "sales-status").send("@everyone Sales are now open!");
    } else {
        message.reply("Please DM LOLMOMMY7 with the Error code 1");
    }
     }
     if (message.content === settings.prefix + 'salesoff') {
         if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("You do not have permissions to do this!");
       //message.reply("Sales are now offline");
             client.user.setGame("Sales: Off");
    if (client.user.setGame("Sales: Off")) {
        client.channels.find('name', "sales-status").send("@everyone Sales are now closed!");
    } else {
        message.reply("Please DM LOLMOMMY7 with the Error code 2");
    }
     }
     if (message.content === settings.prefix + 'eval') {
         if (!message.user.id === 315515278853406720) return message.reply("You do not have permissions to execute that command!");
 //        var argesult = args.join(" ");
//var log = console.log(argesult);

try {
                eval(message.content.substring(settings.prefix.length + 5));
                var embed = new Discord.RichEmbed()
                    .addField("Code Executed", message.content.substring(settings.prefix.length + 5), true)
                    .setColor(0x00FF00);
                message.channel.sendEmbed(embed);
            }
            catch (sdd) {
                var embedas = new Discord.RichEmbed()
                    .addField("Error", sdd)
                    .setColor(0xFF0000);
                message.channel.sendEmbed(embedas);
    }
         }
});
client.login(procces.env.BOT_TOKEN);
