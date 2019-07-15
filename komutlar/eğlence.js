const Discord = require('discord.js');
var prefix = prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`EnderOyuncu`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=495214808484806657&scope=bot&permissio) | " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`EnderOyuncu - Eğlence`, `:white_small_square: | **y!söv**: Bot Etiketlediğiniz  Kişiye Söver.\n  :white_small_square: | **y!winner**: Bot Winner Çercevenizi Atar.\n :white_small_square: | **y!korkut**: Bot Sizi Korkutur.\n :white_small_square: | **y!balıktut**: Balık Tutarsınız.\n :white_small_square: | **y!havadurumu**: İstediğiniz Şehrin Hava Durumuna Bakarsınız. \n :white_small_square: | **y!inek**: İneğin Üzerine Yazdığınız Yazıyı Yazar.\n :white_small_square: | **y!atla**: Atlarsınız. \n :white_small_square: | **y!avatar**: İstediğiniz Kişinin Avatarına Bakarsınız.\n :white_small_square: | **y!tersavatar**: Bot Ters Avatarınızı Atar. \n :white_small_square: | **y!steamstore Aradığınız Oyun**: İstediğiniz Oyunun Fiyatı Dahil Bilgilerine Bakabilirsiniz. \n :white_small_square: | **y!espri**: Bot Size Espri Yapar \n  :white_small_square: | **y!atam**: Bot Avatarınızın Önüne Atamızın Resmini Koyar.\n :white_small_square: | **y!aşk-ölçer**: Etiketlediğiniz Kişiyle Aşkınızı Ölçer!`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = { //`) :white_small_square: | 
    enabled: true,
    guildOnly: false,
    aliases: ['eğlence'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'eğlence',
    description: 'eğlence',
    usage: 'eğlence'
  };