const Discord = require('discord.js')
const db = require('quick.db')
 if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "725110280249540708") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Murat Eren#4841 Bana Ulaşın```')

}
exports.run = async (client ,message, args) =>{
if(args[0] === 'aktif') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send('Başarılı Şekilde `Aktif` Edildi. Bot ban yetkisi Olanların Mesajını Silmeyecektir.')
  return
}
if (args[0] === 'deaktif') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send('Başarılı Şekilde `Deaktif` Edildi')
return
}
  message.channel.send('Lüten `Aktif` yada `Deaktif` Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel','küfür-engel','küfür'],
 permLevel: 0
};
 
exports.help = {
 name: 'küfür-ayarla',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};
 