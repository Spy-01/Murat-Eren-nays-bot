const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" Nays Bot v12 Sürümüyle Sizlerle")
.setTitle("  <a:da3cbe2e93ef42258d4d24711e6a5c51:788743846246088714> Nays logo menü komutları ( Türkçe Karakter Kullanmayınız )" )
 .setTimestamp()
.setDescription("**n!alev** : Alev Logo Yapar \n **n!altın** : Altın Logo Yapar \n **n!anime** : Anime Logo Yapar \n **n!arrow** : Arrow Logo Yapar \n **n!banner** : Banner Logo Yapar  \n **n!basit** : Basit Logo Yapar \n  **n!elmas** : Elmas Logo Yapar \n **n!green** : Green Logo Yapar \n  **n!habbo** Hobbo Logo Yapar \n **n!kalın** : Kalın Logo Yapar \n  **n!neonmavi** : NeonMavi Logo Yapar \n **n!sarı** : Sarı Logo Yapar \n ")
.setImage("https://cdn.discordapp.com/attachments/834125768787099719/834162663993901126/standard.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logomenü',
  category: 'logomenü',
  description: 'Yardım Menüsü.',
   usage:'logomenü'
}