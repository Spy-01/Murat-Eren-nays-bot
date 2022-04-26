const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" Nays Bot v12 sürümüyle sizlerle")
.setTitle("  <a:da3cbe2e93ef42258d4d24711e6a5c51:788743846246088714> Nays Moderasyon komutları" )
 .setTimestamp()
.setDescription("  **n!ping** : Botun Pingini Gösterir \n   **n!forceban** : Kişiyi İD ile banlamanızı sağlar \n  **n!ban** : Etiketlenen Kişiyi direk banlar \n **n!unban** Banlanan bir Kişiyinin banını açar \n **n!id** : İstediğiniz Kişinin İD sini verir \n **n!küfür** : Küfür Korumasını açar \n **n!is** : Botun bilgisini Gösterir \n **n!sa-as** : sa-as komudunu ayarlayabilirsiniz \n **n!kick** : Etiketlenen kişiyi kickler \n**n!sunucubilgi** : Sunucunun Bilgisini paylaşır \n **n!sil** : İstediğiniz kadar mesaj siler \n **n!profil** : Kişinin Profili gösterir \n **n!token** : Sana tokenimi veririm \n **n!yetkilerim** : Sahip olduğum yetkileri söylerim \n **n!link** : Link engel sistemini açar \n  **n!üyedurum** : Sunucudaki üye durumunu gösterir \n **n!afk** : afk yazarak belirtiğiniz şekilde afk olabilirsiniz \n**n!davet** : Botu sunucuna davet etmek istrsen\n **n!bansay** : sunucundaki toplam ban sayısı gösterir\n**n!sohbetkapat** : yazdığınız kanala yazı yazmayı kapator\n **n!sohbetaç** :yazdığınız kanala yazı yazmayı açar ")
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
  name: 'moderasyon',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'moderasyon'
}