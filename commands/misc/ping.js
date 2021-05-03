module.exports = {
  name: "ping",
  aliases: ["latency"],
  cooldown: 1000 * 10,
  description: "give users ping",
  category: "misc",
  run: async (message) => {
    message.reply("pong");
  },
};
