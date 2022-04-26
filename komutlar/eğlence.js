const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Nays v12 sürümüyle sizlerle")
.setTitle(" ➤Nays Eğlence komutları" )
 .setTimestamp()
.setDescription(" **m!mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **n!fbi** = Bot FBi Gif Atar. \n **n!token** = Tokenimi Öğrenmek İstemezmisin?  \n   **n!yak** :  Sigara yakar \n **n!wasted** = Polis tarafından yakalanırsın.  \n  **n!atatürk** = Dene ve gör... (1881-1938) \n **n!ara155** = Polisi Arar \n **n!zar-at** = zar atar \n **n!yazı-tura** = yazı yada tura atar hangisi tutarsan kazanırsın \n  **n!mcskin** = ismini yazdığınız skini gösterir")
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
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}