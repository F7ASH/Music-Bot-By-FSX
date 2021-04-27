const { readdirSync } = require("fs");

module.exports = (client, Discord) => {
  const loadEventDir = (dirs, isDistube) => {
    const eventFiles = readdirSync(`./events/${dirs}`).filter((file) =>
      file.endsWith(".js")
    );

    for (const file of eventFiles) {
      const event = require(`../events/${dirs}/${file}`);
      const eventName = file.split(".")[0];
      isDistube
        ? client.player.on(
            eventName,
            event.bind(
              null,
              Discord,
              client,
              client.player,
              client.playerStatus
            )
          )
        : client.on(eventName, event.bind(null, Discord, client));
    }
  };
  ["client", "server"].forEach((dir) => loadEventDir(dir, false));
  ["music"].forEach((dir) => loadEventDir(dir, true));
};
