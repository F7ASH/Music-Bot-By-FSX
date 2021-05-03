const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "autoplay",
  aliases: ["ap"],
  category: "music",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    const autoplayStatus = player.toggleAutoplay(message);
    const toggledAutoplayEmbed = new Discord.MessageEmbed()
      .setColor(client.embedColor)
      .setDescription(
        `Autoplay is Turned ${autoplayStatus ? "**On**" : "**Off**"}`
      );
    return message.channel.send(toggledAutoplayEmbed);
  },
};
