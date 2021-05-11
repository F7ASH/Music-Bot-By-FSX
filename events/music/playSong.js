const { embedColor, prefix } = require("../../configs/config.json");
const YouTube = require("youtube-sr").default;
module.exports = async (
  Discord,
  client,
  player,
  playerStatus,
  message,
  queue,
  song
) => {
  message.guild.me.voice.setDeaf(true, "Playing Music");
  const status = playerStatus(queue, false);
  let songArtist = { name: "No Data" };
  if (song.youtube) {
    songArtist.name =
      song.info.videoDetails.media.artist ||
      song.info.videoDetails.ownerChannelName;
  } else {
    try {
      const [video] = await YouTube.search(song.name, { limit: 1 });
      songArtist.name = video.channel.name;
    } catch (e) {
      null;
    }
  }
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
      `[Web Link](${song.url}) | [Support Server](google.com)\n${status}\n\n***Details:***\n:small_blue_diamond: **Artist  :**  ${songArtist.name}\n:small_blue_diamond: **Duration  :**  ${song.formattedDuration}\n\n****Note:*** *use ${prefix}stats for more inforamtion of song.*`
    );

  await message.channel.send(playingSOngEmbed);
};
