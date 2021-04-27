module.exports = {
  name: "stop",
  aliases: ["end"],
  category: "music",
  description: "Stops playing music.",
  run: (message, args, client, Discord, player) => {
    player.stop(message);
    const stoppedPlayingEmbed = new Discord.MessageEmbed()
      .setDescription("Stopped Playing Music!")
      .setColor(client.embedColor);
    message.channel.send(stoppedPlayingEmbed);
  },
};
