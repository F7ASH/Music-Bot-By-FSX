module.exports = (Discord, client, player, playerStatus, message, error) => {
  const errorReplyEmbed = new Discord.MessageEmbed()
    .setColor(client.embedColor)
    .setDescription("Oops! Something Went Wrong, Please Try Again.");
  message.channel.send(errorReplyEmbed);
  console.log(error);
};
