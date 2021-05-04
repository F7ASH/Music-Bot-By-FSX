const { noplayersEmbed } = require("../../utils/embeds");
const filters = require("../../configs/filters.json");
module.exports = {
  name: "filter",
  aliases: ["setfilter", "addfilter"],
  category: "music",
  description: "Sets Filter To Queue!",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    if (args[0].toLowerCase() === "none" && queue.filter) {
      const currentFilter = queue.filter;
      message.react("👌");
      player.setFilter(message, queue.filter);
      const removedFilterEmbed = new Discord.MessgaeEmbed()
        .setColor(client.embedColor)
        .setDescription(`Removed **${currentFilter}** Filter Successfully!`);
      return message.channel.send(removedFilterEmbed);
    }
    if (args[0].toLowerCase() === "none" && !queue.filter) {
      message.react("❌");
      const noFilterAndTryingToRemoveFilter = new Discord.MessgaeEmbed()
        .setColor(client.embedColor)
        .setDescription(":x: There Is No Filter Applied to Remove it.");
      return message.channel.send(noFilterAndTryingToRemoveFilter);
    }
    if (!Object.keys(filters).includes(args[0].toLowerCase())) {
      message.react("❌");
      const notAValidFilterEmbed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(
          `:x: No Valid Filters Found,\n****Note :*** Use \`${client.prefx}filters\` to get list of all Avilable Filters.`
        );
      return message.channel.send(notAValidFilterEmbed);
    }
    message.react("👌");
    player.setFilter(message, args[0]);
    const addedFilterSuccessfulyEmbed = new Discord.MessageEmbed()
      .setColor(client.embedColor)
      .setDescription(`Successfully Added ${queue.filter} Filter to Queue!`);
    return message.channel.send(addedFilterSuccessfulyEmbed);
  },
};
