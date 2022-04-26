const Discord = require("discord.js");

exports.run = (client, message) => {
  let üye = new Discord.MessageEmbed()
    .setAuthor("Üyedurum")
    .setColor("RANDOM")
   .addField("** <a:da3cbe2e93ef42258d4d24711e6a5c51:788743846246088714> Toplam Kullanıcı**",message.guild.memberCount )
  
    .setTimestamp()
  return message.channel.send(üye);
};

module.exports.conf = {
  aliases: ["üyedurum"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "üyedurum",
  description: "",
  usage: ""
};
