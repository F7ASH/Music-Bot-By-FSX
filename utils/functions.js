const { MessageEmbed } = require("discord.js");

const firstLetterCapital = (string) => {
  return string.replace(/^\w/, (c) => c.toUpperCase());
};
const getMs = (time) => {
  return time.split(":").reduce((acc, time) => 60 * acc + +time);
};
const getAllCommandsInCategory = function (categoryName, client) {
  const { commands } = client;
  const commandsOfGivenCategory = commands
    .array()
    .filter((command) => command.category === categoryName);
  let description = "";
  commandsOfGivenCategory.forEach((cmd) => {
    description += `:small_blue_diamond: **${firstLetterCapital(
      cmd.name
    )} :**\nDescription: ${cmd.description}\nAliases: ${
      cmd.aiases ? cmd.aiases.join(", ") : "None"
    }  |  Cooldown: ${cmd.cooldown ? cmd.cooldown : 0}s\n\n`;
  });
  return description;
};
const helpEmbedGen = function (category, description, client) {
  const helpEmbed = new MessageEmbed()
    .setTitle(`${category} Commands`)
    .setAuthor(`${firstLetterCapital(client.user.username)} Help`)
    .setColor(client.embedColor)
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter(`v${client.version} (Stable) | Made with ❤ in India`)
    .setDescription(
      `${description} > Use   \`+help <commandname> or <category> \` for help`
    );
  return helpEmbed;
};
module.exports = {
  firstLetterCapital,
  getMs,
  getAllCommandsInCategory,
  helpEmbedGen,
};
