const Discord = require('discord.js');
const shorten = require('isgd');

exports.run = (client, message, args, tools) => {
    message.delete();
    if (!args[0]) return message.channel.send(' ** \n » Kullanım: g!kısalt <URL> <isim> \n » Örnek: g!kısalt Alıntıdır ** ')

    if(!args[1]) {

        shorten.shorten(args[0], function(kısalt) {
            if (kısalt.startsWith('Hata:')) message.channel.send('**Lütfen doğru URL adresi giriniz.**');

            message.channel.send(`**<${kısalt}>**`);
        })
    } else {
        shorten.custom(args[0], args[1], function(kısalt) {

            if (kısalt.startsWith('Hata:')) message.channel.send(`**<${kısalt}>**`);

            message.channel.send(`**<${kısalt}>**`);
        })
    }

};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'kısalt',
 description: 'İstediğiniz URLni Kısaltır. ',
 usage: 'kısalt'
};