const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "volume",
  aliases: ["vol", "sound"],
  category: "music",
  description: "Get or set the volume of song.",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    if (!args.length) {
      const currentQueueVolume = queue.volume;
      currentQueueVolume > 50 ? message.react("🔊") : message.react("🔉");
      const currentQueueVolumeEmbed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(`Current Queue Volume is **${currentQueueVolume}**`);
      return message.channel.send(currentQueueVolumeEmbed);
    }
    const volumeToBeSet = parseInt(args[0]);
    if (isNaN(volumeToBeSet)) {
      message.react("❌");
      const enterAValidNumberAsArgumentEmbed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(":x: Please Enter a Valid Number to set Volume!");
      return message.channel.send(enterAValidNumberAsArgumentEmbed);
    }
    if (volumeToBeSet > 100 || volumeToBeSet < 0) {
      message.react("❌");
      const enterNumberBetween1And100Embed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(":x: Please Enter a Number Between 1 and 100.");
      return message.channel.send(enterNumberBetween1And100Embed);
    }
    player.setVolume(message, volumeToBeSet);
    volumeToBeSet > 50 ? message.react("🔊") : message.react("🔉");
    const volumeSetEmbed = new Discord.MessageEmbed()
      .setColor(client.embedColor)
      .setDescription(`Queue Volume Set to **${queue.volume}**`);
    return message.channel.send(volumeSetEmbed);
  },
};
