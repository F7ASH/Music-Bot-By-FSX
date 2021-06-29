const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "skipnplay",
  aliases: ["snp", "skipnp", "snplay", "replace"],
  category: "music",
  description: "Skips the current song in queue.",
  run: (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    if (!args.length) {
      message.react("❌");
      const noSongTextEmbed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(":x: Please Enter Song name or Song Link to play.");
      return message.channel.send(noSongTextEmbed);
    }
    message.react("⏭️");
    player.playSkip(message, args.join(" "));
    const stoppedPlayingEmbed = new Discord.MessageEmbed()
      .setDescription(
        `Skipped [${queue.songs[0].name}](${queue.songs[0].url}) And Playing the Entred song.`
      )
      .setColor(client.embedColor);
    message.channel.send(stoppedPlayingEmbed);
  },
};
