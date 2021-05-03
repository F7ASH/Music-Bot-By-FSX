const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "shuffle",
  aliases: ["mix", "rearrange"],
  category: "music",
  description: "Shuffle all the songs in Queue.",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      noplayersEmbed(Discord, message);
    }
    if (queue.songs.length < 3) {
      const lessSongsInQueueToShuffleEmbed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(
          `:x: There should be more than 3 songs in Queue to Shuffle.`
        );
      return message.channel.send(lessSongsInQueueToShuffleEmbed);
    }
    player.shuffle(message);
    const shuffledQueueEmbed = new Discord.MessageEmbed()
      .setColor(client.embedColor)
      .setDescription(`Shuffled ${queue.songs.length} Songs in Queue!`);

    return message.channel.send(shuffledQueueEmbed);
  },
};
