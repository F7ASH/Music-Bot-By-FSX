const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "disconnect",
  aliases: ["dc", "exit", "leave"],
  category: "music",
  description: "Disconnect From a Voice Channel.",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    message.react("👋");
    queue.connection.disconnect();
    const disconnectedEmbed = new Discord.MessageEmbed()
      .setColor(client.embedColor)
      .setDescription("Disconnected From Voice Channel!");
    message.channel.send(disconnectedEmbed);
  },
};
