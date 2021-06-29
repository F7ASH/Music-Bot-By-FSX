const config = require("../../configs/config.json");
const { status: statusOptions, interval } = require("../../configs/botStatus");
const { version } = require("../../package.json");
module.exports = (Discord, client) => {
  console.log(`${client.user.username} is ready`);
  client.version = version;
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
