const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");



exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	const istatistikozel = new Discord.RichEmbed()
    .setColor(0x36393F)
.setDescription("EnderOyuncu Yetkili İstatistik")
  .addField(` Bot Sahipleri:`, ` ve `, true)
  .addField(':white_check_mark:   Shard:', '1/1', true)
	.addField(":white_check_mark:   Bellek Kullanımı:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField(":white_check_mark:   Sunucu Sayısı:", `${client.guilds.size.toLocaleString()}`, true)
  .addField(":white_check_mark:   Kullanıcı Sayısı:", `${client.users.size}`, true)
  .addField(":white_check_mark:   Toplam Kullanıcı Sayısı:", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField(":white_check_mark:    Kanal Sayısı:", `${client.channels.size.toLocaleString()}`, true)
  .addField(`:white_check_mark:   Ne Kadar Süredir Aktif:`, `${duration}`, true)
  .addField(":ok_hand:  Ping:", `${client.ping}`, true)
  .addField(":ok_hand:   Discord.js Sürümü:", `${Discord.version}`, true)
  .addField(`:heart: Premium:`, "Aktif Değil", true)
  .addField(`Davet Et`, `[Tıkla](https://discordapp.com/oauth2/authorize?client_id=495214808484806657&scope=bot&permissions=2080767167)`, true)
  message.channel.sendEmbed(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};