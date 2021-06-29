// const { getPreview } = require("spotify-url-info");
module.exports = {
  name: "play",
  aliases: ["p"],
  category: "music",
  run: async (message, args, client, Discord, player) => {
    if (player.isPaused && !args.length) {
      message.react("▶️");
      player.resume(message);
      const resumedMusicEmbed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription("Resumed The Music!");
      return message.channel.send(resumedMusicEmbed);
    }
    if (!args.length) {
      message.react("❌");
      const noSongTextEmbed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(":x: Please Enter Song name or Song Link to play.");
      return message.channel.send(noSongTextEmbed);
    }
    if (args[0] === "ytp") {
      if (!args[1]) {
        message.react("❌");
        const noPlaylistID = new Discord.MessageEmbed()
          .setColor(client.embedColor)
          .setDescription(":x: Please Enter Youtube Playlist ID");
        return message.channel.send(noPlaylistID);
      }
      const playListURL = `https://www.youtube.com/playlist?list=${args[1]}`;
      message.react("👌");
      return player.play(message, playListURL);
    }
    message.react("👌");
    player.play(message, args.join(" "));
  },
};
