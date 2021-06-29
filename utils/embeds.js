module.exports.notInVoiceChannelEmbed = (Discord, message) => {
  message.react("❌");
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
  message.react("❌");
  const notInSameVoiceChannelEmbed = new Discord.MessageEmbed()
    .setColor(message.client.embedColor)
    .setDescription(
      `:x: You are not in a voice channel where music is being played,\nPlease Join <#${voiceChannelId}> To use Music Commands.`
    );
  message.channel.send(notInSameVoiceChannelEmbed);
};

module.exports.noplayersEmbed = (Discord, message) => {
  message.react("❌");
  const noPlayersEmbed = new Discord.MessageEmbed()
    .setColor(message.client.embedColor)
    .setDescription(":x: No Music is playing Around You");
  message.channel.send(noPlayersEmbed);
};

module.exports.noArgsEmbed = (Discord, message) => {
  message.react("❌");
  const noArgsEmbed = new Discord.MessageEmbed()
    .setColor(message.client.embedColor)
    .setDescription(":x: No Time Provided to **seek/forward/rewind**");
  message.channel.send(noPlayersEmbed);
};

module.exports;
