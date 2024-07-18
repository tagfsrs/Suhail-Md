const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Muazamali²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923067632070";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_22_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICA1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDcxLFxuICAgICAgICA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2LFxuICAgICAgICA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY2LFxuICAgICAgICA5MSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA2NSxcbiAgICAgICAgODgsXG4gICAgICAgIDM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY3LFxuICAgICAgICAzNixcbiAgICAgICAgMTY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgyLFxuICAgICAgICA2NixcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyLFxuICAgICAgICAxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidEwvdGdyZ3FtVGROWUw3Z3Y5bllhY1d4a2lVVWpXZDd3c0dVcXdBd2NNQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNjc2MzIwNzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMwOEE5QUM3ODdFNjJEMkYyODhBMzAzMkQ5M0JEQkUyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI4NzMyMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0bzNUZXY3elEtcUVxSWQ3VGJyWFpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2ZWE5ZjBiLWE2OTctNGQxYy1iOGJmLWI1YzM2ZGNmNzc4ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDE5NCxcbiAgICAgIDE2MSxcbiAgICAgIDE4LFxuICAgICAgMjA2LFxuICAgICAgMjIzLFxuICAgICAgMTI3LFxuICAgICAgMTUwLFxuICAgICAgMjUxLFxuICAgICAgMTYsXG4gICAgICA2NixcbiAgICAgIDcsXG4gICAgICAyNixcbiAgICAgIDE0MSxcbiAgICAgIDE2MCxcbiAgICAgIDIxNSxcbiAgICAgIDEzMixcbiAgICAgIDE1LFxuICAgICAgMTYzLFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgNTUsXG4gICAgICA5MSxcbiAgICAgIDIzMCxcbiAgICAgIDE4LFxuICAgICAgMjUwLFxuICAgICAgMTEsXG4gICAgICAxMDAsXG4gICAgICAxMTYsXG4gICAgICAxODUsXG4gICAgICA3LFxuICAgICAgMjM2LFxuICAgICAgMjIxLFxuICAgICAgNDksXG4gICAgICAxNTYsXG4gICAgICAxNixcbiAgICAgIDI0MixcbiAgICAgIDIzOCxcbiAgICAgIDE3LFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0I5N1FLTjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2NzYzMjA3MDo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTQ3OTA5MTQ1ODg4MzQ6NzFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTXVhemFtIEFsaVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0txWXJNSUhFSk9GNDdRR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwielA4S0NHTkt3dmpFUjlrdURyWTBmaEw5aFJpcnFPVlFiTmUzaWk4S3Rsdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyTlhPdGZ6N012STZJcU9lNE1jUXJRR3dRbjVrbk5wYVliWGNWdUEyWFJDNkhTR1lEdDhPUnJjSWYybm0rZUhCNTNCbm9IQ042VENvWTFTMEJDZk1EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuL0hLNEszVCtUVTlJZW1KalltNEU3cS9JZ1NMVG00ZnJZMXBmYTM1MU1NWVpwWUthTTM4L3hsL2hkVExCZUZTbzdaRmFmcDVUaGR4ajRIc3lpaVVBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNjc2MzIwNzA6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyODczMTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNcmhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1yaC5qc29uIjogIntcImtleURhdGFcIjpcIlNBZHRtbGdncm9WT3libnJ1T0E0VW51cHRHQ1k1djZtU282K3FEMGFqZWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAxODE4NDIzNCxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyODcyNzkxMjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
