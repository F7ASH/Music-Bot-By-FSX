const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "mainuptime",
  aliases: ["mup", "dut", "dup"],
  category: "dev",
  devOnly: true,
  run: async ({ message, client, Discord }) => {
    const uptimeEmbed = new Discord.MessageEmbed()
      .setColor(client.embedColor)
      .setDesctiption(`**Uptime :** ${client.uptime}`);
    return message.channel.send(uptimeEmbed);
  },
};
