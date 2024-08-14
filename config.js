//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254740458938";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 2;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05CUndQVjZPMVRFQXNZNXJoUVFvNHZWek9TSll6dGIvU2ozWVV3b0Uwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxPYnFTSFY0MFE2UDdJR0EzLzlLVjRKMWhnR2xRV3Bqb2ltSVJhOTQzQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRUFDVmZ2bDhiMlViNmNDc1Rvc0Z6VTFGQmVMWEZOakhjZUVEWXlnWVc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVS2hjMjF5aTlhVUgvNy8xVC9td0xjN2k5cXUwcnBteGpNQ0toZlBzc1NVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllBVmV1NzJjZ2ZqRXNkMkJkbjV1bEJKdzRueEJNYUlSbGNndmZwYWlKMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1yTEtTSDR1akFQQVlBenY1WTl5LzN2S1lFRnhxaGZYdjM0cVU4c20wR289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZhNmgrVk1hUyt0OU85d0F1L1E1Z2pkZnRvYnN0QlZxb281RmVLT3EwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXlITExOb1pJdmlydm5JUEpjNDQ4ZEhNL1pjVHNyWFh0T3R6aVh6aEtHMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IksycXl5ZEluT2trT0VHT21GL0JiTHpnc1NNcmtTQkpSb21wSHJ4TGJ6M0tzWUhoQlNnb2VpNVVwSTFkQk53L2ZCU2owTTNmSDlXTCtTTEhxVnhTREFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6IkhxSVppQzZibzdwRkFOdTQ0bHhtZENqRW9ubCtEWURsczBWb0ZFc3RwMFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRkNlBLc3FQUmJlcWE2TjNDVWRfRGciLCJwaG9uZUlkIjoiYzVhMTgxMWUtNGJjNS00YjE5LTgwOTItMzg5NTM2Yzc0N2U1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktMSzhEaUovTzBaT2QrRStEbitjSDdyTE5rWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBMFVBNVRLMGlIZ2YrTk5WK3Vaa2FVRisyMWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFhBRzJaNjgiLCJtZSI6eyJpZCI6IjI1NDc0MDQ1ODkzODo1NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWEvbXlBUXhNbnp0UVlZQ0NBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSXErNTJRVitmRkFjSlFXRVZ6SWRMOU9pNHZBeVg5V005S0FydUJYRmdGUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR0NKWkNKWmhOSXNNd0RuWC9qS0FYTnhoUVQwQ05yTzM2Z1ZQeEcyVnBGbzhQb050dUk1TXo2R0VESm93RndDNnQ1eGhPbEd1anBjSXdFeVBDMTRnQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IkNCUWRwYk02UU8xNzNsRGhNM3VXZHZZMC90ek5uRkVmY2wwUjZLU2FCMzBxcUs1R1NpY3JLazVUeUUwK3dtcXFCSE84NGhnTTZkQWw0SmhacUtQaUN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzQwNDU4OTM4OjU0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNLdnVka0ZmbnhRSENVRmhGY3lIUy9Ub3VMd01sL1ZqUFNnSzdnVnhZQlUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM2NTUzNzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSjRZIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "MR BENILLE🚀",
  ownername: process.env.OWNER_NAME || "MR BENILLE🚀",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
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
