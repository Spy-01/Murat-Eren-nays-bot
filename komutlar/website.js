const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("<a:da3cbe2e93ef42258d4d24711e6a5c51:788743846246088714> Burdan Websitemize Ulaşabilirsiniz ")
  .setDescription("[__**WebSite**__](websitelinkk)")
  .setFooter('Websitemizi Ziyaret ettiğin için teşekkürler..')
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'website',
  description: '',
  usage: ''
};