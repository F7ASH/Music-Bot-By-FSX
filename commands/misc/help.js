const {
  getAllCommandsInCategory,
  helpEmbedGen,
  firstLetterCapital,
} = require("../../utils/functions");
module.exports = {
  name: "help",
  aliases: [""],
  category: "misc",
  description: "Stops playing music.",
  run: async (message, args, client, Discord, player, queue) => {
    const mainPageEmbed = new Discord.MessageEmbed()
      .setAuthor(`${firstLetterCapital(client.user.username)} Help`)
      .setColor(client.embedColor)
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle("Help Menu")
      .setDescription(
        `React To Emoji to Get Commnads of that Category\n\n🎧   Music\n\n ✨   Misc\n\n > Use   \`+help <commandname> or <category> \` for help\n\n***Note:** All The commands are case insensitive
      `
      )
      .setFooter(`v${client.version} (Stable) | Made with ❤ in India`);
    const timedOutEmbed = new Discord.MessageEmbed()
      .setAuthor(`${firstLetterCapital(client.user.username)} Help`)
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(
        "**Help Message Timeout**\n\n> Use `+help ` For Help Menu \n > Use `+help <commandName> or <category> `\n\n ***Note:** All The commands are case insensitive"
      )
      .setColor(3092790)
      .setFooter(`v${client.version} (Stable) | Made with ❤ in India`);

    const emojiList = ["🏠", "🎧", "✨", "❌"];
    if (!args.length) {
      message.channel.send(mainPageEmbed).then((msg) => {
        msg.react("🏠");
        msg.react("🎧");
        msg.react("✨");
        msg.react("❌");

        const filter = (reaction, user) =>
          emojiList.includes(reaction.emoji.name) &&
          user.id === message.author.id;
        const reactionCollecter = msg.createReactionCollector(filter, {
          time: 120000,
        });
        reactionCollecter.on("collect", (reaction) => {
          reaction.users.remove(message.author);
          switch (reaction.emoji.name) {
            case emojiList[0]:
              msg.edit(mainPageEmbed);
              break;
            case emojiList[1]:
              msg.edit(
                helpEmbedGen(
                  "Music",
                  getAllCommandsInCategory("music", client),
                  client
                )
              );
              break;
            case emojiList[2]:
              msg.edit(
                helpEmbedGen(
                  "Misc",
                  getAllCommandsInCategory("misc", client),
                  client
                )
              );
              break;
            case emojiList[3]:
              reactionCollecter.stop();
              break;
            default:
              break;
          }
        });
        reactionCollecter.on("end", () => {
          msg.edit(timedOutEmbed);
          msg.reactions.removeAll();
        });
      });
    }
  },
};
