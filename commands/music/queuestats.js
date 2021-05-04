const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "queuestats",
  aliases: ["qs", "questats"],
  category: "music",
  description: "Get or set the volume of song.",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    const queueStats = client.playerStatus(queue, false);
    const queueStatsEmbed = new Discord.MessageEmbed()
      .setAuthor("Queue Stats")
      .setColor(client.embedColor)
      .setDescription(
        `Total Duration: ${queue.formattedDuration}\n${queueStats}`
      );
    message.channel.send(queueStatsEmbed);
  },
};
