const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "725110280249540708") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Murat Eren#4841 Bana Ulaşın```')

}
  let kişi = message.mentions.members.first() || message.author;
  message.channel.send(`**İstediğiniz Kişinin ID Numarası:** **${kişi.id}**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:['id'],
  permlevel:0
}

exports.help = {
  name : "id",
  description:"Birisinin İD Sini Alırsınız",
  usage:"!id"
}