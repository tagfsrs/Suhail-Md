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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_11_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc1LFxuICAgICAgICA3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDczLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICA0NyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJka0RZQVUxNHU2RG9xaEg2ZW03bGZxK1VpSlVvb21iVSs0Mi9WVEtQVktvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA2NzYzMjA3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjgwMDZBRjFENDE5QjEwQzE1RUREMTE3NDQ1OTAzRjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjI5MDg1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRPaWR1UXVBUTE2UVRta2xMN2xRcmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2QwZjhmMmYtMmEwMi00MGI1LWI1N2QtYTQwYzRjNDc2ZWIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgzLFxuICAgICAgMjA1LFxuICAgICAgNzgsXG4gICAgICA3MixcbiAgICAgIDE3NixcbiAgICAgIDg0LFxuICAgICAgNDEsXG4gICAgICAxNzIsXG4gICAgICAxNzIsXG4gICAgICAxNjEsXG4gICAgICAxODcsXG4gICAgICA4OCxcbiAgICAgIDE2OCxcbiAgICAgIDI0MSxcbiAgICAgIDE5MSxcbiAgICAgIDMzLFxuICAgICAgNTIsXG4gICAgICAxODUsXG4gICAgICAxNTAsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDE2OSxcbiAgICAgIDEzNixcbiAgICAgIDIzLFxuICAgICAgMzYsXG4gICAgICAxNDQsXG4gICAgICAxMjMsXG4gICAgICAxMSxcbiAgICAgIDEzMSxcbiAgICAgIDI1NCxcbiAgICAgIDE0NSxcbiAgICAgIDk4LFxuICAgICAgMjAwLFxuICAgICAgMTcwLFxuICAgICAgMTg2LFxuICAgICAgNDksXG4gICAgICA4OCxcbiAgICAgIDIzMCxcbiAgICAgIDQ1LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQTkwxVDg2RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDY3NjMyMDcwOjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NDc5MDkxNDU4ODgzNDo2NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNdWF6YW0gQWxpXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3FZck1JSEVKYSszN1FHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6UDhLQ0dOS3d2akVSOWt1RHJZMGZoTDloUmlycU9WUWJOZTNpaThLdGx3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkd1R1FQMllJYWtSZE1PZldwUVhYUjBueWFjNmtNMnRuN29wa3pIOFd4RWNCWjhnV0dIbTZKeVB1U25QOGdFd1RvWkczRDhrbStSVWw0NzdGSFM5b0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5USkFxQkQ0Wk5TOFl1YUpYMmVPNXJQeDBUWWVvOFhlYmhYSjNvVXoxT1Z1RlJOQUJsZjVSVFRwTmN2a1lDZjQ4aExEQ3pLUTAvVk9MMG95b1lmWkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA2NzYzMjA3MDo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTIyOTA4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1yWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXJZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL1gxRDhBVC9VL0FMSXNqeU5RTm5pUFAxYTdLbFpNK2FwT2Rtd1E4b0IvOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDE4MTg0MjM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxNjEwMjUxMjlcIn0iCn0="  // PUT your SESSION_ID 


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
