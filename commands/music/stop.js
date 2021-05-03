const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "stop",
  aliases: ["end"],
  category: "music",
  description: "Stops playing music.",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    await message.react("🛑");
    player.stop(message);
    const stoppedPlayingEmbed = new Discord.MessageEmbed()
      .setDescription("Stopped Playing Music!")
      .setColor(client.embedColor);
    message.channel.send(stoppedPlayingEmbed);
  },
};
