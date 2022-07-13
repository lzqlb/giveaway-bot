const Discord = require('discord.js');
const config = require('../config.json');

 

module.exports.run = async (client, message, args) => {
  if(message.author.bot) return;
  
  let prefix = config.prefix;
  
  if(!message.content.startsWith(prefix)) return;
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("・Menu d'aide du bot")
        .setDescription("Mon prefix est : !g")
        .addField(":gift: ・Giveaway : ", "> \`start  [nom-du-channel] [temps] [gagnants] [prix] \`, \`reroll[nom du prix]\`, \`end[nom du prix]\`")
        .addField(":toolbox: ・Information : ", "> \`eval\`,\`invite\`,\`stats\`")
        .setFooter(`✨・Teiko Giveaway • Prefix actuel : !g`, message.guild.iconURL({dynamic : true}))
        .setColor('#f9f9f6'))

}

module.exports.help = {
  name: "help"
}


