require('./admin')
const { default: makeWASocket, useMultiFileAuthState, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto, Browsers, makeCacheableSignalKeyStore } = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const axios = require('axios')
const FileType = require('file-type')
const NodeCache = require("node-cache")
const yargs = require('yargs/yargs')
const _ = require('lodash')
const moment = require('moment-timezone')
const cfonts = require('cfonts')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, sleep } = require('./ƒυηçσєs/¿')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
 const ia_db = JSON.parse(fs.readFileSync('./∂αтαвαsє/ia/2/ia.json'));
 const _bv = JSON.parse(fs.readFileSync('./∂αтαвαsє/_bv.json'))
 const _seminternacional = JSON.parse(fs.readFileSync('./∂αтαвαsє/_seminternacional.json'))
 const _semlinked = JSON.parse(fs.readFileSync('./∂αтαвαsє/_semlinked.json'))
 const _cmdtotal = JSON.parse(fs.readFileSync('./∂αтαвαsє/totalcmd.json'))
 const antispamcmd = JSON.parse(fs.readFileSync('./∂αтαвαsє/_semspam.json'))
 const express = require('express');
 const app = express();

function naodormeporra() {
  axios.get('https://ayumi-botz.onrender.com/')
   .then(response => {
      console.log("acordando");
    })
   .catch(error => {
      console.error(error);
    });
}
setInterval(naodormeporra, 13 * 60 * 1000);
app.get('/', async (req, res) => {
  res.send("AYUMI bot")
});



const porta = process.env.PORT || 5000;
app.listen(porta, () => console.log("site Online na porta:", porta));

  const {
color,
bgcolor
 } = require('./ƒυηçσєs/color')
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())


global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: apikey } : {}) })) : '')

const banner = cfonts.render(('AYUMI|ONLINE'), {
    font: 'chrome',
    align: 'center',
	colors: ['yellow', '#BC0000','green'],   
    lineHeight: 1
});


const MAIN_LOGGER = require('@whiskeysockets/baileys/lib/Utils/logger').default;
const logger = MAIN_LOGGER.child({});
logger.level = 'silent';
const msgRetryCounterCache = new NodeCache();

    
async function connectToWhatsApp() {
const { version, isLatest } = await fetchLatestBaileysVersion()
const { state, saveCreds } = await useMultiFileAuthState(nomedasessao)
const ayu = makeWASocket({
        version,
        logger,
        printQRInTerminal: true,
        browser: Browsers.appropriate("Desktop"),
        auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, logger) },
        defaultQueryTimeoutMs: undefined,
        generateHighQualityLinkPreview: false,
        msgRetryCounterCache,

  })
ayu.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

ayu.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
ayu.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!ayu.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(ayu, mek, store)
require("./ayu")(ayu, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
ayu.ev.on('group-participants.update', async (num) => {
const mdata = await ayu.groupMetadata(num.id)
const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
const pushname = num.id

if (_seminternacional.includes(num.id) && !isBotAdmins) {
 if (num.action === 'add' && !num.participants[0].startsWith(55)) {
await ayu.sendMessage(mdata.id, {
 video: fs.readFileSync('./semfake.mp4'),
 gifPlayback: true,
 caption: 'Olá número fake, você não é permitido aqui, saia agora para própria segurança'
})
ayu.groupParticipantsUpdate(mdata.id, [num.participants[0]], 'remove')
return
 }
}
if (!_bv.includes(num.id)) return
try {
 try {
ppimg = await ayu.profilePictureUrl(num.participants[0], "image")
 } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
 }
 try {
ppgp = await ayu.profilePictureUrl(mdata.id, "image")
 } catch {
ppgp = 'https://image.flaticon.com/icons/png/512/124/124034.png'
 }
 if (num.action === 'add') {
linktyni = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);
bemvd = await getBuffer(api('tohka', '/api/canvas/' + 'bemvindod', {
texto3: "@"+num.participants[0].split('@')[0],
texto2: "seja muito bem vindo",
texto: "BEM VINDO",
membros: 0,
numero: 0,
cor1: "fff",
cor2: "fff",
cor3: "000",
img: linktyni.data,
img2: "https://i.pinimg.com/564x/81/4d/e3/814de32841bad7c9c9194ca39df7b346.jpg"
 }, 'apikey'))
ayu.sendMessage(mdata.id, {
 image: bemvd, mentions: num.participants, caption: `@${num.participants[0].split('@')[0]} bem vindo(a)`
})
 } else if (num.action === 'remove') {
linktyni = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);
adeus = await getBuffer(api('tohka', '/api/canvas/' + 'bemvindod', {
texto3: "@"+num.participants[0].split('@')[0],
texto2: "volte sempre",
texto: "DEUS",
membros: 0,
numero: 0,
cor1: "fff",
cor2: "fff",
cor3: "000",
img: linktyni.data,
img2: "https://i.pinimg.com/564x/81/4d/e3/814de32841bad7c9c9194ca39df7b346.jpg"
}, 'apikey'))
ayu.sendMessage(mdata.id, {
 image: adeus, mentions: num.participants, caption: `@${num.participants[0].split('@')[0]} saiu`
})
 }
} catch (e) {
 console.log(e);
}
 })
ayu.ev.on('contacts.update', update => {
for (let contact of update) {
let id = ayu.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
ayu.getName = (jid, withoutContact  = false) => {
id = ayu.decodeJid(jid)
withoutContact = ayu.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = ayu.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === ayu.decodeJid(ayu.user.id) ?
ayu.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
ayu.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await ayu.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ayu.getName(i + '@s.whatsapp.net')}\nFN:${await ayu.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:ayu-api@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://chat.whatsapp.com/IPVvve0ldQ1LCTUQpZqFXC\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;brasil;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
ayu.sendMessage(jid, { contacts: { displayName: `${list.length} contato`, contacts: list }, ...opts }, { quoted })}
ayu.public = true
//
//
ayu.ev.on('creds.update', saveCreds)
 //
 ayu.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
 //
 ayu.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await ayu.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//
ayu.sendText = (jid, text, quoted = '', options) => ayu.sendMessage(jid, { text: text, ...options }, { quoted })
//
ayu.sendTextWithMentions = async (jid, text, quoted, options = {}) => ayu.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 //
ayu.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await ayu.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //
ayu.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await ayu.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //
 ayu.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}

 ayu.cMod = (jid, copy, text = '', sender = ayu.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === ayu.user.id
return proto.WebMessageInfo.fromObject(copy)}
ayu.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await ayu.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: pacote, author: auutor, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await ayu.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
ayu.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
//
ayu.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await ayu.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
//
ayu.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
ayu.serializeM = (m) => smsg(ayu, m, store)
ayu.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`leia novamente`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("reconectando");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("reconectando...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("conexao aberta em outro servidor, reinicie o bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`delete a sessao e conecte novamente.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("reiniciando..");
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("reiniciando...");
connectToWhatsApp();
  } else {
console.log(`rasão de desconexão desconhecida: ${reason}|${connection}`);
connectToWhatsApp();
  }
}else if (connection === "open") {
console.log(banner.string)
console.log(color('BY BRENO/SAYO', 'purple'))
console.log(color(`MANDE UM PIX DE QUALQUER VALOR PARA AJUDAR NO PROJETO :)\n`, 'red'))
console.log(color(`PIX : \n\nTELEFONE\n\n62936180708\n\nFABIO BRENO ******* *****`, 'gold'))
ayu.sendMessage('5562936180708' + "@s.whatsapp.net", { text: `conectei nesse número!` });
}
// console.log('Connected...', update)
});
return ayu
}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`modificou ${__filename}`))
delete require.cache[file]
require(file)
})
