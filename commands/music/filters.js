const filters = require("../../configs/filters.json");
// const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "filters",
  aliases: ["allfilters"],
  category: "music",
  description: "List of all Avilable Filters.",
  run: async (message, args, client, Discord, player, queue) => {
    let currentFilter = queue.filter || "None";
    const filterNames = Object.keys(filters);
    const allFiltersAvilableEmbed = new Discord.MessageEmbed()
      .setAuthor("Filters")
      .setColor(client.embedColor)
      .setDescription(
        `**Current Filter  :** \`\`\`${currentFilter}\`\`\`\n**Avilable Filters  :**\n\`\`\`${filterNames.join(
          ", "
        )}\`\`\`\n****Note :*** Use \`${
          client.prefix
        }filter [filterName]\` to add filter to song!`
      );
    message.channel.send(allFiltersAvilableEmbed);
  },
};
