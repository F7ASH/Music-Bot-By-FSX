module.exports = {
  name: "skip",
  aliases: ["next"],
  category: "music",
  description: "Skips the current song in queue.",
  run: (message, args, client, Discord, player) => {
    player.stop(message);
    const stoppedPlayingEmbed = new Discord.MessageEmbed()
      .setDescription("Skipped")
      .setColor(client.embedColor);
    message.channel.send(stoppedPlayingEmbed);
  },
};
