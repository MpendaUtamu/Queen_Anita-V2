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
global.owner = process.env.OWNER_NUMBER || "+254786441428";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFmYjdLcEpyZVkxUFBMWGIySkxkNnVDQmxJMTFraHF0TmRFUjc2WHUwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjlINnJQczZVMnVrMUZxRUdNdkFPSFI5eEJLVTJOaWtGTW9tVGkxekt5VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFT05LSy9zK3l3L2IzN2Qydkt2a2pwWER4U1YrYTdPc2FIVDJjOThQZkZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJabUxwVlRVendwc2hiTS8zR1NhQUQ4dU1qOURHN0FMTTZOWmF4bjJGUFNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGZXlFUWdFZVp6WkFPOVRoNU9ROGI5Qk1Fajd3d3ZIeUF2cEdXb080MW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktWSUpQZ3kxeW9zK3pIR2FKV0REMENRME9rN3hGK2FMa1ZwampDVFNLMzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ZrL3o0Y3dnVXRiTFYyTlFVRHJpRTdLWlpVMW0yWjZKa0pTSWNibkxtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWFyVFFjT1JtNE1CNUNwelU2SmluVU9Id0M3TzI5UDF2Rkc0akhMNG0yOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF3elhoQWMzZjVSamJyUDVhRXdWeTRqMytGV0pkYlFKVEk2TjJkMkFnLzUrdWVTWmtTRHQzbDh3VEE5eHRCNXFDSE83ZnJSMWd5YmJpV0tVMlhQQ2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoidXZyRWxZM0lTd2J6eWJMNVhocE15OFE1eURNZ3c0elBONzlraFFUTndkQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3ODY0NDE0MjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkY3RThDMjNGQzEwREJGMDRGMTUyMTlDMTc4MjYwRkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjMzNzE5Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicTNXTG9NalJROG1ScXRBVl96MTF0dyIsInBob25lSWQiOiIyOGM5NjhkNC0xYTQwLTQwNzgtOWFkMS04ZThlZmUzMDQzMmQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXl6NTc0TUNzb3NOcWFiZCtCRDQySUFlN1EwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9qaE5JWUxYR05IeXFORDg2Nk8rKzRnOGtRST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0R1c5NlY2RCIsIm1lIjp7ImlkIjoiMjU0Nzg2NDQxNDI4OjIzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLSFNzK2NERUphUG83VUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjS09rZkYzYUVIM2RkdUorZEhuTHJGS3A5TFJSQXh6Z0pBdkFDYldTTHlRPSIsImFjY291bnRTaWduYXR1cmUiOiJxZjdSV0xVZ3hCa2prNlVGYTdpcnZuQVB5SHBScy8rUlR2TUVLSXJuRXN5WFQ0SFpzTzhONGl1M250UE8vdlBEMkRjNnRYaTZUVHRvQm1BZFJJLy9DZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRlVpamszNFZMOUplWmVuRmQ4K2syT1FnWXNOTFFDTHlCTjhDODh6S1k3Sk9qMmhWR2NzdExjUnlsUXY1YkhhaEVabXhDN2dlK0JTUHpSV2ZLRlJFanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3ODY0NDE0Mjg6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWENqcEh4ZDJoQjkzWGJpZm5SNXk2eFNxZlMwVVFNYzRDUUx3QW0xa2k4ayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjMzNzE4NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMbFIifQ=="
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
