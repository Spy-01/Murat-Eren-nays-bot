const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Nays Bot v12 sürümüyle sizlerle")
.setTitle(" <a:da3cbe2e93ef42258d4d24711e6a5c51:788743846246088714> Nays Ayarlanabilir abone sistemi komutları" )
 .setTimestamp()
.setDescription("**n!abone** : etiketlediğiniz kişiye abone rolü verir \n  **n!abonerol** : Etiketlediğiniz rol abone rolüolarak atanır \n **n!abone-yetkili-rol** : Etiketlediğiniz rol abone Yetkilisi rolü olarak atanıcak \n  **n!abonelog** : Etiketlediğiniz kanal abone log kanalı olarak atanıcak ")
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
  name: 'abonerolsistemi',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'abonerolsistemi'
}