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
  const addedToQueueEmbed = new Discord.MessageEmbed()
    .setColor(embedColor)
    .setDescription(`Queued [${song.name}](${song.url}) [${song.user}]`);
  message.channel.send(addedToQueueEmbed);
};
