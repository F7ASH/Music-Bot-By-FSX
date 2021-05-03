const { getPreview } = require("spotify-url-info");
module.exports = {
  name: "play",
  aliases: ["p"],
  category: "music",
  run: async (message, args, client, Discord, player) => {
    if (!args.length) {
      message.react("❌");
      const noSongTextEmbed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(":x: Please Enter Song name or Song Link to play.");
      return message.channel.send(noSongTextEmbed);
    }
    message.react("👌");
    player.play(message, args.join(" "));
  },
};
