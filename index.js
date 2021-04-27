/* Import 'dotenv' module to access .env file*/
require("dotenv").config();

/* Import 'Discord.js' module for making bot*/
const Discord = require("discord.js");

/* Run a new instance of client from discord.js module */
const client = new Discord.Client();

/* storing all commands and a Collection in Client */
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

/* Executing handlers in './middleware' */
["DistubeHandler", "CommandHandler", "EventHandler"].forEach((handler) => {
  require(`./middleware/${handler}`)(client, Discord);
});

/* Loging the client with token */
client.login(process.env.BOT_TOKEN);
