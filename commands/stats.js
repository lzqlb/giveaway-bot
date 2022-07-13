const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let servercount = client.guilds.cache.size;
    let usercount = client.users.cache.size;
     
    let stats = new Discord.MessageEmbed()



    .setTitle(`Guild Count & Bot Users ${client.user.username}`)
    .setColor('RED')
    .addField("Guild Member Count ", `${servercount}`, true)
    .addField("Total Bot Users", `${usercount}`, true)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send(stats);
};

module.exports.help = {
    name: "stats"
}

