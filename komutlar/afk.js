const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
 
if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "725110280249540708") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Murat Eren#4841 Bana Ulaşın```')
  
  }
exports.run = function(client, message, args) {
 
  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Afk Olmak İçin Bir Sebep Belirtin.\n\n Örnek Kullanım : ${prefix}afk <sebep>`)
  if(!REASON) return message.channel.send(embed)
 
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Afk Moduna Başarıyla Girildi. Afk Olma Sebebi : **${REASON}**`)
  message.channel.send(afk)
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'afk',
  description: 'afk komutu',
  usage: 'afk'
};