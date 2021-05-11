module.exports = (Discord, client, player, playerStatus, message) => {
  const noMoreSongsInQueueEmbed = new Discord.MessageEmbed()
    .setColor(client.embedColor)
    .setDescription(
      `Songs in Queue are Finished Playing, The Queue Is Empty.\n****Note :*** Use ${client.prefix}play [song name] to play songs`
    );
  message.channel.send(noMoreSongsInQueueEmbed);
};
