const Discord = require('discord.js');
var prefix = prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`EnderOyuncu`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=495214808484806657&scope=bot&permissions=208076716) | " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`EnderOyuncu - Yardım`, `:white_small_square: |** y!eğlence**: Eğlenmek için bulunan komutlar!\n:white_small_square: | **y!yetkili**: Sunucuyu yönetmek için gerekli olan komutlar! \n :white_check_mark: Yapımcım: Sergen#3367`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };