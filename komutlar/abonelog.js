let db = require("quick.db")
let ayarlar = require("../ayarlar.json")

exports.run = async(client, message) => {


  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`❌ Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`❌ **Bir kanal etiketlemen gerekmekte örnek: __${ayarlar.prefix}abonelog #kanal__**`)
  
  
  db.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`✅ **Abone kanalı başarıyla "${log}" olarak ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 0
}
exports.help = {
  name: 'abonelog'
}

exports.play = {
  kullanım: 'n!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}