const config = require("../../configs/config.json");
module.exports = (Discord, client) => {
  console.log(`${client.user.username} is ready`);
  client.embedColor = config.embedColor;
  client.prefix = config.embedColor;
};
