const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "skipto",
  aliases: ["jump"],
  category: "music",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    const queueLength = queue.songs.length;
    const jumpToNumber = parseInt(args[0]);
    if (isNaN(jumpToNumber)) {
      message.react("❌");
      const enterAvalidNumberEmbed = new Discord.MessageEmbed()
        .setColor(client.errorEmbedColor)
        .setDescription(":x: Please Emter A Valid Number To Skip!");
      return message.channel.send(enterAvalidNumberEmbed);
    }
    if (queueLength <= jumpToNumber) {
      message.react("❌");
      const enteredNumberIsMoreThanQueueEmbed = new Discord.MessageEmbed()
        .setDescription(
          ":x: The Number You Entered Is Bigger than Queue Length!"
        )
        .setColor(client.errorEmbedColor);
      return message.channel.send(enteredNumberIsMoreThanQueueEmbed);
    }
    const { songs } = player.jump(message, jumpToNumber);
    message.react("👌");
    const JumpedSuccessfullyEmbed = new Discord.MessageEmbed()
      .setColor(client.embedColor)
      .setDescription(
        `Jumped ${queueLength - songs.length} The Track Successfully!`
      );
    return message.channel.send(JumpedSuccessfullyEmbed);
  },
};
