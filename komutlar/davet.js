const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("❤️ Beni Sunucuna Eklersen çok sevinirim ❤️")
  .setDescription("[__**Davet Et**__](https://discord.com/api/oauth2/authorize?client_id=832200119133667360&permissions=8&scope=bot) \n \n [__**Destek Sunucusu**__](https://discord.gg/erTqUNqSUd)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'davet',
  usage: 'davet'
};