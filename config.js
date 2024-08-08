//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "+254732605323";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09ndEVhWklLS2NFZUIxQ3AzL2JDYmxzblRrSHduUHJUaTdDTmFnbUswaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWhYa1ZYRWlhVjRDb3hMeGxRdEJ2K2ZQNVdpV3UwMWFJZThCYlp6MVozQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSkUwNWdQQ1FsbWNnclhIV2VSVXVRNE9rSDFQaGoyRXE2Skc2R3V4V21JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHa2pLN1RnYm5BV1RIRkVIR1lhSWJ6ZldFZFhlK25QVnA0MWl2bTU3ZVZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9LZFpYd09yL1p0blV0NDRsUWduNGQ3S0dlZUhNU0ZZZVROcEl0OVY0bGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh6ZUpUSE81WUVzS1pucU5zWHR5aXY5MkNHS3dXenN1SEczRnZWU1FkMEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdPYUZKMmRCWXF0YkRqKzN3OVloUlN6Yk9xUnp0MC9wWDJaWDAvYWZXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic29FZmk4UW4rYlJqSzJ2OU8yZGNmOTRpdmpKS1l1KzVKdGFtNWpsZ25DMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRSeHNDL1ZaYVVxVlZQUmlBTlloZXFLQ3p1ZzYvUHdDNmZ1aEFlMUY5WmdoVk5iRFNRWVpkR1NHb29ibEhrZ1Q5OC8raVJpRVFuQXE2cE43S01mSEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUwLCJhZHZTZWNyZXRLZXkiOiJmVkQ1MlN2TGFlMkRWeXc3UDh1TjhBOEFHdVlBMUZrb3loUjdmcXlFRmM4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDczMjYwNTMyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2OUJCMzFBMkY5NTBCMjQ5OTBBQ0U0NTY3OTY3QzNCNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMDYxNDUyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MzI2MDUzMjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjgzNjQ2RDY4QTI3OThDN0ZBNjY0ODc3NUNBQjE4Q0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzA2MTQ1M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidzdBNFZ2cGFUMmVJckZ3bTI3ZHhfZyIsInBob25lSWQiOiI2YWFiMDgxYi1lMDc1LTRjZGMtYjA2NS1jZjZiYmIwYThkYWYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1NhQ2pLK3plbEc0SUxMdjdyVFpFNFJUNHNZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMvNDJoeXVKUi9FMTh3dTFSK1ptaVk2c2prUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJEQUJTVkU0WSIsIm1lIjp7ImlkIjoiMjU0NzMyNjA1MzIzOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUGF1bCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2FJOW9RR0VMMnB6N1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRVMwVkJiSHBMZWNaUldpQUJJSk9XdENnYWtCSElGUktHMlNkbTlZT0tDZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoia0pIY1dCQTVHOUt5QmJFb0VrWk9oajJZazEzRTk4cGtwYUpQK1AwbmhVTmNIMjlUTndwL3ZPbC81OEZnMk9BcHJBdEJzNDUvVHdhMmtrd1RNTkl5Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IndlRTJCa3BOOStBaHVnTDZ6WTRTT21WdkhZbE1lS1RWdk9vbnNGNmVNZ3ZkVVUyMGlXcUVDMmVESzljdTBmcHhFa0VTVGZXbCtmNllkeDUxT2xoNkNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzMyNjA1MzIzOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkV0RlFXeDZTM25HVVZvZ0FTQ1RsclFvR3BBUnlCVVNodGtuWnZXRGlnbyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzA2MTQ1MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJZGcifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "mpendautamu bot",
  ownername: process.env.OWNER_NAME || "pauloh",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-C6yLYgfO5xHWzQcug6pYT3BlbkFJYpcw7Jt3Ontqwg3jiks5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
