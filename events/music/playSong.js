const { embedColor, prefix } = require("../../configs/config.json");
module.exports = (
  Discord,
  client,
  player,
  playerStatus,
  message,
  queue,
  song
) => {
  const status = playerStatus(queue, false);
  const artist =
    song.info.videoDetails.media.artist ||
    song.info.videoDetails.ownerChannelName;
  const playingSOngEmbed = new Discord.MessageEmbed()
    .setTitle(song.name)
    .setAuthor("Now Playing")
    .setColor(embedColor)
    .setThumbnail(song.thumbnail)
    .setFooter(
      `Req. By: ${message.author.username}#${message.author.discriminator}`
    )
    .setTimestamp()
    .setDescription(
      `[Song Link](${song.url}) | [Lyrics](google.com)\n${status}\n\n***Details:***\n:small_blue_diamond: **Artist  :**  ${artist}\n:small_blue_diamond: **Duration  :**  ${song.formattedDuration}\n\n****Note:*** *use ${prefix}stats for more inforamtion of song.*`
    );

  message.channel.send(playingSOngEmbed);
};
