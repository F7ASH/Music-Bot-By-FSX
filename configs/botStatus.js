const { version } = require("../package.json");
const client = require("../index");
module.exports.status = [
  {
    text: `Five Square Co.`,
    type: "WATCHING",
  },
  {
    text: "Music Bot Template By Five Square Co.",
    type: "COMPETING",
  },
  {
    text: `Version ${version}`,
    type: "PLAYING",
  },
  {
    text: `Ultimate Music Exprience`,
    type: "LISTENING",
  },
];

module.exports.interval = 30000;
