const Discord = require('discord.js');
var prefix = prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`EnderOyuncu`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=495214808484806657&scope=bot&permissions=) | " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
.addField(`EnderOyuncu - Yetkili`, `:white_small_square: |** y!rastgeleüye**: Sunucudan Rastgele Üye Seçer \n:white_small_square: | **y!oylama**: Sunucuda Oylama Yapar. \n :white_small_square: | **y!reklamtaraması**: Oynuyor Yerinde Reklam Yapılmışmı Kontrol Eder. \n :white_small_square: | **y!herkesedm**:Herkese Dm Duyuru Atar. \n :white_small_square: | **y!temizle**: Belirttiğiniz Kadar Yazıı Siler. \n :white_small_square: | **y!yazıkanalaç**: Yazı Kanal Açarsınız. \n :white_small_square: | **y!ping**: Ping Durumuna Bakarsınız. \n :white_small_square: | **y!yaz** Bota istediğiniz şeyi yazdırırsınız. \n :white_small_square: | **y!kanalıkilitle**: Belirttiğiniz Kanalı Belirttiğiniz Süre Kadar Kitler. \n :white_check_mark: Yapımcım: Sergen#3367`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yetkili',],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yetkili',
    description: 'yetkili',
    usage: 'yetkili'
  };