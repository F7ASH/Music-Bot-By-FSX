module.exports.notInVoiceChannelEmbed = (Discord, message) => {
  const notInVoiceChannelEmbed = new Discord.MessageEmbed()
    .setColor(message.client.embedColor)
    .setDescription(
      ":x: You need to join a Voice Channel to use this command."
    );
  message.channel.send(notInVoiceChannelEmbed);
};

module.exports.notInSameVoiceChannelEmbed = (
  Discord,
  message,
  voiceChannelId
) => {
  const notInSameVoiceChannelEmbed = new Discord.MessageEmbed()
    .setColor(message.client.embedColor)
    .setDescription(
      `:x: You are not in a voice channel where music is being played,\nPlease Join <#${voiceChannelId}> To use Music Commands.`
    );
  message.channel.send(notInSameVoiceChannelEmbed);
};
