const { prefix } = require("../../configs/config.json");
const ms = require("ms");
const {
  notInVoiceChannelEmbed,
  notInSameVoiceChannelEmbed,
} = require("../../utils/embeds");
module.exports = (Discord, client, message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );
  if (!command) return;
  const queue = client.player.getQueue(message);
  if (command) {
    if (command.category.toLowerCase() === "music") {
      const { channel } = message.member.voice;
      if (!channel) {
        return notInVoiceChannelEmbed(Discord, message);
      }
      if (
        client.player.isPlaying(message) &&
        channel.id != message.guild.me.voice.channel.id
      ) {
        return notInSameVoiceChannelEmbed(
          Discord,
          message,
          message.guild.me.voice.channel.id
        );
      }
      return command.run(message, args, client, Discord, client.player, queue);
    }
    command.run(message, args, client, Discord, client.player, queue);
  }
};
