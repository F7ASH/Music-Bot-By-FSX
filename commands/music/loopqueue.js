const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "loopqueue",
  category: "music",
  description: "",
  aliases: ["1q", "loopq", "loopque", "lque", "lqueue"],
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    const isAlreadyLooping = {
      song: false,
      queue: false,
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
    if (isAlreadyLooping.song) {
      message.react("❌");
      const songIsAlreadyLoopingEmbed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(
          ":x: The Current Song is Already looping, cannot loop the Queue when a song is Looping, turn off the song loop then try again."
        );
      return message.channel.send(songIsAlreadyLoopingEmbed);
    }
    if (isAlreadyLooping.queue) {
      player.setRepeatMode(message, 0);
      message.react("🔁");
      const stoppedLoopingQueue = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription("Stopped Looping the Queue!");
      return message.channel.send(stoppedLoopingQueue);
    }
    message.react("🔁");
    player.setRepeatMode(message, 2);
    const startedLoopingQueue = new Discord.MessageEmbed()
      .setColor(client.embedColor)
      .setDescription("Started Looping The Queue!");
    return message.channel.send(startedLoopingQueue);
  },
};
