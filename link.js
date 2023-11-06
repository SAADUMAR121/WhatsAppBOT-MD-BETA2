

//-----------------------------------------------------------------------------------------------------------------------------------------------------
let ownr = process.env.OWNER === undefined ? '0,923321709439' : process.env.OWNER
//-------------
let ownrnum = ownr.toString().split(',')
//-----------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------
let sudo = process.env.SUDO === undefined ? '0,923321709439' : process.env.SUDO
//-------------
let sudonum = sudo.toString().split(',')
//-----------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------
let stickker = process.env.STICKER_PACK === undefined ? 'SaadUmar' : process.env.STICKER_PACK
//-------------
let stickkerr = stickker.toString().split(',')
//-----------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------
let prem = process.env.PREMIUM === undefined ? '923321709439' : process.env.PREMIUM
//-------------
let premiu = prem.toString().split(',')
//-----------------------------------------------------------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------------------------------------------------------
let apik = ["5ce9b2c90a","5CE9B2C90A","1544701A60","10F0975E30","C927B48B97","7C93A5956E","F5DBD2C1CF","0C60476A8533","4F7107108B","419B9CD9DBE9"] 
//-------------
let api = apik[Math.floor(Math.random() * apik.length)]
//-------------
global.apikeyset = process.env.ZENS_API === undefined ? `${api}` : process.env.ZENS_API //9
//-----------------------------------------------------------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------------------------------------------------------
let worktypez = process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
//-------------
let workres = worktypez.toLowerCase()  
//-------------
if (workres === 'public') {global.worktype = 'public'} 
//-------------
else {global.worktype = 'private'}
//-----------------------------------------------------------------------------------------------------------------------------------------------------






//-----------------------------------------------------------------------------------------------------------------------------------------------------
 global.autoTypingzz = process.env.AUTO_TYPING === undefined ? false : process.env.AUTO_TYPING //auto tying in gc (true to on, false to off)
 global.autoreadpmngczz = process.env.AUTO_READ_PM === undefined ? true : process.env.AUTO_READ //auto reading in gc and pm (true to on, false to off)
 global.autoReadGczz = process.env.AUTO_READ_GROUP === undefined ? true : process.env.AUTO_READ_GROUP //auto reading in gc (true to on, false to off)
 global.autoRecordzz = process.env.AUTO_RECORD === undefined ? false : process.env.AUTO_RECORD //auto recording (true to on, false to off)
 global.availablezz = process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE  //auto available (true to on, false to off)
//-----------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------
 global.vidmenuzz = process.env.VIDEO_MENU_URL === undefined ? 'https://aniyuki.com/anya-forger-gifs/' : process.env.VIDEO_MENU_URL //gif and video menu
//-----------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------
 global.vcardownerzz = `${ownrnum}` //ur owner number
 global.ownernamezz = process.env.VIDEO_MENU_URL === undefined ? "Saad Umar" : process.env.VIDEO_MENU_URL //ur owner name
 global.ytnamezz = process.env.VIDEO_MENU_URL === undefined ? "YT: saadumar650" : process.env.VIDEO_MENU_URL  //ur yt chanel name
 global.socialmzz = process.env.VIDEO_MENU_URL === undefined ? "GitHub: SAADUMAR121" : process.env.VIDEO_MENU_URL  //ur github or insta name
 global.locationzz = process.env.VIDEO_MENU_URL === undefined ? "Balochistan, Quetta" : process.env.VIDEO_MENU_URL  //ur location
//-----------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------
 global.ownerzz = `${sudonum}`
 global.ownertagzz = process.env.TAG_NUMBER === undefined ? '447405935355' : process.env.TAG_NUMBER  //ur tag number
 global.botnamezz = process.env.BOTNAME === undefined ? "Mr Bot" : process.env.BOTNAME //ur bot name
 global.linkzzz = process.env.THEME_URL === undefined ? 'https://www.youtube.com/@saadumar650' : process.env.THEME_URL //your theme url which will be displayed on whatsapp
 global.websitexzz = process.env.WEBSITE === undefined ? 'https://saadumar648.blogspot.com' : process.env.WEBSITE  //ur website to be displayed
 global.botscriptzz = 'https://github.com/SAADUMAR121/WhatsAppBot-MD-BETA2' //script link
 global.reactmojizz = process.env.REACT_EMOJI === undefined ? "😘" : process.env.REACT_EMOJI //ur menu react emoji
 global.themeemojizz = process.env.THEME_EMOJI === undefined ? "🦄" : process.env.THEME_EMOJI //ur theme emoji
 global.packnamezz = `${stickkerr[0]}` //ur sticker watermark packname
 global.authorzz = `${stickkerr[1]}` //ur sticker watermark author
//-----------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------
 global.thumzz = process.env.THUMB_PIC === undefined ? 'https://github.com/Alien-alfa/Alien-alfa/blob/https://graph.org/file/56c0fb63b1eb1b2ca789c.jpgbeta/Alfa.jpg?raw=true' : process.env.THUMB_PIC //ur thumb pic
 global.log0zz = process.env.LOGO_PIC === undefined ? 'https://github.com/Alien-alfa/Alien-alfa/blob/https://graph.org/file/56c0fb63b1eb1b2ca789c.jpgbeta/Alfa.jpg?raw=true' : process.env.LOGO_PIC //ur logo pic
 global.err4rzz = process.env.ERROR_PIC === undefined ? 'https://github.com/Alien-alfa/Alien-alfa/blob/https://graph.org/file/56c0fb63b1eb1b2ca789c.jpgbeta/Alfa.jpg?raw=true' : process.env.ERROR_PIC //ur error pic
 global.thumbzz = process.env.THUMBNAIL_PIC === undefined ? 'https://github.com/Alien-alfa/Alien-alfa/blob/https://graph.org/file/56c0fb63b1eb1b2ca789c.jpgbeta/Alfa.jpg?raw=true' : process.env.THUMBNAIL_PIC //ur thumb pic
//-----------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------
global.premiumzz = `${premiu}` //ur premium numbers
//-----------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------
 global.antitagszz = process.env.ANTI_TAG === undefined ? true : process.env.ANTI_TAG
 global.spzz = process.env.ICON === undefined ? '✩' : process.env.ICON
//-----------------------------------------------------------------------------------------------------------------------------------------------------



//════════════════════════════//  ALIEN-ALFA-FUNCTIONS  //════════════════════════════//


//-----------------------------------------------------------------------------------------------------------------------------------------------------
global.devname = 'Saad Umar'
//-------------
global.devNum = ['923321709439','923198326328']
//-------------
global.SessName = './session.alfa.json'
//-------------
global.session = process.env.SESSION_ID || false
//-------------
global.listicon = process.env.LISTICON === undefined ? '✩' : process.env.LISTICON
//-------------
global.wm = process.env.WATERMARK === undefined ? 'SAAD UMAR' : process.env.WATERMARK
//-------------
global.mail = process.env.MAIL === undefined ? 'saadumar658@gmail.com' : process.env.MAIL
//-------------
global.youtube = process.env.YOUTUBE === undefined ? 'https://youtube.com/c/saadumar650' : process.env.YOUTUBE
//-------------
global.github = process.env.GITHUB === undefined ? 'https://github.com/SAADUMAR121' : process.env.GITHUB
//-------------
global.insta = process.env.INSTAGRAM === undefined ? 'https://www.instagram.com/saadumar.650/' : process.env.INSTAGRAM
//-------------
global.linkname = process.env.NAME === undefined ? 'Saad Umar' : process.env.NAME
//-------------
global.mainfooter = process.env.FOOTER === undefined ? 'Saad Umar' : process.env.FOOTER
//-------------
global.herokuapi = process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY
//-------------
global.herokuapp = process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
//-----------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------
global.alivemess = process.env.ALIVE_MESS === undefined ? 'null' : process.env.ALIVE_MESS
//-------------
aliveimage = process.env.ALIVE_IMAGE === undefined ? false : process.env.ALIVE_IMAGE 
//-------------
global.prefixx = process.env.PREFIX === undefined ? "" : process.env.PREFIX
//-------------
global.autodownloader = process.env.AUTO_DOWNLOADER === undefined ? false : process.env.AUTO_DOWNLOADER 
//-------------
global.alivemess = process.env.ALIVE_MESS === undefined ? 'null' : process.env.ALIVE_MESS
//-------------
global.aliveimage = process.env.ALIVE_IMAGE === undefined ? false : process.env.ALIVE_IMAGE 
//-------------
global.anticallmsg = process.env.ANTICALL_MSG 
//-----------------------------------------------------------------------------------------------------------------------------------------------------





