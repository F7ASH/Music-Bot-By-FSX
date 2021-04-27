const { readdirSync } = require("fs");

module.exports = (client, Discord) => {
  const commandsDirArray = [];
  const commandsDir = readdirSync("./commands", {
    withFileTypes: true,
  }).filter((directory) => {
    if (directory.isDirectory()) {
      commandsDirArray.push(directory.name);
    }
  });
  const loadCommandsDir = (dirs) => {
    const commandFiles = readdirSync(`./commands/${dirs}`).filter((file) =>
      file.endsWith(".js")
    );

    for (const file of commandFiles) {
      const fileName = file.replace(".js", "");
      const command = require(`../commands/${dirs}/${fileName}`);
      if (command.name) {
        client.commands.set(command.name, command);
      } else {
        continue;
      }
    }
  };
  commandsDirArray.forEach((dir) => loadCommandsDir(dir));
};

/**
 * @INFO
 * Last Coded by Parthasarathi from FiveSquareCo.
 */
