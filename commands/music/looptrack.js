const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "looptrack",
  category: "music",
  description: "",
  aliases: ["lt", "loopt", "looptrack", "ltrack", "loopsong", "lsong"],
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    const isAlreadyLooping = {
      queue: false,
      song: false,
    };
    switch (queue.repeatMode) {
      case 0:
        break;
      case 1:
        isAlreadyLooping.song = true;
        break;
      case 2:
        isAlreadyLooping.queue = true;
        break;
      default:
        break;
    }
    if (isAlreadyLooping.queue) {
      message.react("❌");
      const songIsAlreadyLoopingEmbed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(
          ":x: The Current Queue is Already looping, cannot loop the Track when Queue is Looping, turn off the Queue loop then try again."
        );
      return message.channel.send(songIsAlreadyLoopingEmbed);
    }
    if (isAlreadyLooping.song) {
      player.setRepeatMode(message, 0);
      message.react("🔂");
      const stoppedLoopingQueue = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription("Stopped Looping the Track!");
      return message.channel.send(stoppedLoopingQueue);
    }
    message.react("🔂");
    player.setRepeatMode(message, 1);
    const startedLoopingQueue = new Discord.MessageEmbed()
      .setColor(client.embedColor)
      .setDescription("Started Looping The Track!");
    return message.channel.send(startedLoopingQueue);
  },
};
