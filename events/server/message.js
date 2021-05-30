const { prefix } = require("../../configs/config.json");
const ms = require("ms");
const {
  notInVoiceChannelEmbed,
  notInSameVoiceChannelEmbed,
} = require("../../utils/embeds");
module.exports = (Discord, client, message) => {
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const prefixRegex = new RegExp(
    `^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`
  );
  let matchedPrefix;
  try {
    const [, mp] = message.content.match(prefixRegex);
    if (mp) {
      matchedPrefix = mp;
    }
  } catch (e) {
    null;
  }
  if (!prefixRegex.test(message.content)) return;
  const args = message.content.slice(matchedPrefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command && matchedPrefix != prefix) {
    const mentionedReplyEmbed = new Discord.MessageEmbed()
      .setColor(client.embedColor)
      .setAuthor(client.user.username)
      .setDescription(
        `:small_orange_diamond: Prefix For this Server is ${prefix}\n\n > Use \`${prefix}help\` For all Commands List!`
      )
      .setTimestamp();
    return message.channel.send(mentionedReplyEmbed);
  }
  const queue = client.player.getQueue(message);
  if (command) {
    if (command.devOnly || command.category.toLowerCase() === "dev") {
      let isDev = true;
      client.developers.forEach((dev) => {
        if (message.author.id != dev.id) {
          isDev = false;
        }
      });
      const notDevFunction = () => {
        const youAreNotADeveloperEmbed = new Discord.MessageEmbed()
          .setColor(client.errorEmbedColor)
          .setDescription(
            ":x: This is a Developer Only Command And You are not A Developer to use it."
          );
        return message.channel.send(youAreNotADeveloperEmbed);
      };
      isDev
        ? command.run({ message, Discord, client, args })
        : notDevFunction();
    }
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
