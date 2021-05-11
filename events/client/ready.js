const config = require("../../configs/config.json");
const { status: statusOptions, interval } = require("../../configs/botStatus");

module.exports = (Discord, client) => {
  client.version = console.log(`${client.user.username} is ready`);
  client.embedColor = config.embedColor;
  client.prefix = config.prefix;
  client.developers = config.developers;
  const randomStatus = () => {
    const status = Math.floor(Math.random() * statusOptions.length);
    client.user.setActivity(statusOptions[status].text, {
      type: statusOptions[status].type,
    });
  };
  setInterval(randomStatus, interval);
};
