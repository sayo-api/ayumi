require('./admin.js')
const {
 default: makeWASocket,
useSingleFileAuthState,
DisconnectReason,
getContentType,
WAProto,
downloadContentFromMessage,
prepareWAMessageMedia,
MediaType,
generateWAMessageFromContent,
proto,
WA_DEFAULT_EPHEMERAL,
useMultiFileAuthState
 } = require('@whiskeysockets/baileys')
 const fs = require('fs')
 const P = require('pino')
 const qrcode = require('qrcode-terminal')
 const moment = require('moment-timezone')
 const util = require('util')
 const chalk = require('chalk') 
 const ms = require('ms')
 const now = require('performance-now')
 const time = moment().tz('America/Sao_Paulo').format("HH:mm:ss")
 const execute = util.promisify(require('child_process').exec)
 const axios = require("axios");
 const cheerio = require("cheerio");
 const {
exec
 } = require('child_process')
 const mimetype = require('mime-types')
 const linkfy = require('linkifyjs')
 const cfonts = require('cfonts')
 

 //FUNC

 const {
color,
bgcolor
 } = require('./ƒυηçσєs/color')
 const {
TelegraPh
 } = require('./ƒυηçσєs/uploader')
 const {
educar_IA,
resposta_IA
 } = require('./ƒυηçσєs/ia.js');
 const {
imageToWebp,
videoToWebp,
writeExifImg,
writeExifVid
 } = require('./ƒυηçσєs/exif')
 const {
fetchJson,
fetchText,
getRandom,
getBuffer,
sleep
 } = require('./ƒυηçσєs/¿')
 const usedCommandRecently = new Set()

 //DB


 const ia_db = JSON.parse(fs.readFileSync('./∂αтαвαsє/ia/2/ia.json'));
 const _bv = JSON.parse(fs.readFileSync('./∂αтαвαsє/_bv.json'))
 const _seminternacional = JSON.parse(fs.readFileSync('./∂αтαвαsє/_seminternacional.json'))
 const _semlinked = JSON.parse(fs.readFileSync('./∂αтαвαsє/_semlinked.json'))
 const _cmdtotal = JSON.parse(fs.readFileSync('./∂αтαвαsє/totalcmd.json'))
 const antispamcmd = JSON.parse(fs.readFileSync('./∂αтαвαsє/_semspam.json'))

 const {
cmdadd
 } = require('./ƒυηçσєs/totalcmd.js')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: apikey } : {}) })) : '')



module.exports = ayu = async (ayu, m, chatUpdate, store) => {
try {
 if (!m.key.participant) m.key.participant = m.key.remoteJid
 m.key.participant = m.key.participant.replace(/:[0-9]+/gi, "")
 if (!m.message) return
 const fromMe = m.key.fromMe
 const content = JSON.stringify(m.message)
 const from = m.key.remoteJid
 const type = Object.keys(m.message).find((key) => !["senderKeyDistributionMessage", "messageContextInfo"].includes(key))

    const body = (getContentType(mek.message) === 'conversation') ? mek.message.conversation : (getContentType(mek.message) == 'imageMessage') ? mek.message.imageMessage.caption : (getContentType(mek.message) == 'videoMessage') ? mek.message.videoMessage.caption : (getContentType(mek.message) == 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (getContentType(mek.message) == 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage.selectedId : (getContentType(mek.message) == 'interactiveResponseMessage') ? (JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)).id : false
    const budy = (type === "conversation") ?
     mek.message.conversation: (type === "extendedTextMessage") ?
     mek.message.extendedTextMessage.text: ""
    const bady = mek.message.conversation ? mek.message.conversation: mek.message.imageMessage ? mek.message.imageMessage.caption: mek.message.videoMessage ? mek.message.videoMessage.caption: mek.message.extendedTextMessage ? mek.message.extendedTextMessage.text: (mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ''
    const bidy = bady.toLowerCase()
 const isCmd = body.startsWith(prefix)
 const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''

 const isMedia = (type === 'imageMessage' || type === 'videoMessage')
 const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
 const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
 const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
 const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

 const args = body.trim().split(/ +/).slice(1)
 const q = args.join(' ')
 const isGroup = from.endsWith('@g.us')
 const sender = m.key.fromMe ? (ayu.user.id.split(':')[0]+'@s.whatsapp.net' || ayu.user.id): (m.key.participant || m.key.remoteJid)
 const senderNumber = sender.split('@')[0]
 const botNumber = ayu.user.id.split(':')[0]
 const pushname = m.pushName || 'sem nome'
 const groupMetadata = isGroup ? await ayu.groupMetadata(from).catch(e => {}): ''
 const groupName = isGroup ? groupMetadata.subject: ''
 const participants = isGroup ? await groupMetadata.participants: ''
 const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id): ''
 const groupOwner = isGroup ? groupMetadata.owner: ''
 const isBotAdmins = isGroup ? groupAdmins.includes(botNumber): false
 const isAdmins = isGroup ? groupAdmins.includes(sender): false
 const isAntiSpamcmd = antispamcmd.includes('Ativado')
 const groupMembers = isGroup ? groupMetadata.participants: ''

 //ATIVAÇÃO

 const IA = isGroup ? ia_db.includes(from): false
 const isBv = isGroup ? _bv.includes(from): false
 const isInt = isGroup ? _seminternacional.includes(from): false
 const is_semlinked = isGroup ? _semlinked.includes(from): false


 const isMe = botNumber.includes(senderNumber)
 const isOwner = coderNumero.includes(senderNumber) || isMe



 const isUrl = (url) => {
if (linkfy.find(url)[0]) return true
return false
 }

 const reply = async(msg) => {
ayu.sendMessage(m.chat, { text: msg, mentions: [sender], contextInfo:{
    "externalAdReply": {  
    "showAdAttribution": false,  
    "containsAutoReply": true,
    "renderLargerThumbnail": false,  
    "title": "🌱 tohka bot 🍁", 
    "mediaType": 1,  
    "thumbnail": logo,  
    "mediaUrl": site,  
    "sourceUrl": site
    }
 }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}).then((res) => console.log(res)).catch((err) => console.log(err))

 }


 const isFiltered = (from) => !!usedCommandRecently.has(from)
 const addFilter = (from) => {
usedCommandRecently.add(from)
setTimeout(() => usedCommandRecently.delete(from), delayantispamcmd * 1000)
 }




 const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}

await ayu.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }

 const getExtension = async (type) => {
return await mimetype.extension(type)
 }

 const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk])
}
return buffer
 }

 const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}

await ayu.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }


 if (budy.startsWith('=>')) {
if (!isOwner) return
function Return(sul) {
 sat = JSON.stringify(sul, null, 2)
 bang = util.format(sat)
 if (sat == undefined) {
bang = util.format(sul)
 }
 return reply(bang)
}
try {
 reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
 reply(String(e))
}
 }

 if (budy.startsWith('>')) {
if (!isOwner) return
try {
 let evaled = await eval(budy.slice(2))
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
 await reply(evaled)
} catch (err) {
 await reply(String(err))
}
 }

 if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
 if (err) return reply(err)
 if (stdout) return reply(stdout)
})
 }

 function gp(pagina) {
return new Promise((resolve, reject) => {
 axios.get(`https://grupowhatsap.com/page/${pagina}/?amp=1`).then(tod => {
const $ = cheerio.load(tod.data)
var postagem = [];
$("div.grupo").each((_, say) => {
 var _ikk = $(say).find("a").attr('href');
 var _ikkli = $(say).find("img").attr('src');
 var _ikkkkk = {
img: _ikkli,
linkk: _ikk
 }
 postagem.push(_ikkkkk)
})
resolve(postagem)
 }).catch(reject)
});
 }

 const mentions = (teks,
memberr,
id) => {
(id == null || id == undefined || id == false) ? ayu.sendMessage(from,
 {
text: teks.trim(),
mentions: memberr
 }): ayu.sendMessage(from,
 {
text: teks.trim(),
mentions: memberr
 })
 }

 async function upBailyesimg(link) {
imgupservidor = await prepareWAMessageMedia({ image: { url: link } }, { upload: ayu.waUploadToServer })
return imgupservidor.imageMessage
}
async function upBailyesvideo(link) {
const vdupservidor = await prepareWAMessageMedia({ video: { url: link } }, { upload: ayu.waUploadToServer })
return vdupservidor.videoMessage
}



 /*function bio() {
setInterval(() => {
ayu.updateProfileStatus(time)
}, 10 * 1000)
}
bio()
*/

 //-----<sem spam de request>-----\\
 if (isCmd && isFiltered(from) && !isGroup) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mSPAM\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Spam', 'de', color(sender.split('@')[0]), 'palavras :', color(args.length)+']')
if (isAntiSpamcmd) {
 return reply(`「 ❗ 」Spam detectado. Espere ${delayantispamcmd} segundos`)
}
 }
 if (isCmd && isFiltered(from) && isGroup) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mSPAM\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Spam', 'de', color(sender.split('@')[0]), 'grupo: ', color(groupName), 'palavras :', color(args.length)+']')
if (isAntiSpamcmd) {
 return reply(`「 ❗ 」Spam detectado. Espere ${delayantispamcmd} segundos`)
}
 }
 
 //================(IA-ON)=================\\

 if (IA && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
 if (m.key.fromMe) return
 if (type == 'extendedTextMessage' && prefix.includes(m.message.extendedTextMessage.contextInfo.quotedMessage[0])) return
 educar_IA(type, m)
 const ia_inity = await resposta_IA(bidy)
 console.log(resposta_IA(bidy))
 if (ia_inity) reply(ia_inity)
}
 }


 function check_semlinked() {
if (isUrl(bady) && is_semlinked && !isBotAdmins && !isAdmins) {
 reply('banido')
 kic = `${sender.split("@")[0]}@s.whatsapp.net`
 ayu.groupParticipantsUpdate(from, [kic], 'remove')
}
if (isUrl(bady) && is_semlinked && !isBotAdmins && isAdmins) {
 reply('😎')
}
 }
 check_semlinked()
 console.log(budy)
 if (!isGroup && isCmd && sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'purple')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Horário:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color(command)}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)
 if (!isGroup && !isCmd && sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Horário:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color('Não', 'red')}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)
 if (isGroup && isGroup && sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Horário:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color(command)}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'gold')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)
 if (!isGroup && isGroup && sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Horário:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color('Não', 'red')}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'gold')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)

 ayu.readMessages([m.key])


 //-----<RG de request>-----\\
 if (isCmd) cmdadd()
 switch (command) {

case 'ajuda':
 case 'help':
case 'comandos':
 case 'menu':
 reply("aguarde")
         try {
menuif =
`
╭━━ ⪩
▢ き⃟❗️ᴀʏᴜᴍɪ❗⃟ き
▢ ╭═══⊷
▢ ⌁ 𖠂 prefix:『${prefix}』
▢ ⌁ 𖠂 Data: ${time}
▢ ⌁ 𖠂 SeuNome: ${pushname}
▢ ⌁ 𖠂 TotalRequest: ${_cmdtotal[0].totalcmd}
▢ ╰═══⊷
╰━━━ ⪨\n\n
`
menu = menuif +
`
╭━━ ⪩
▢ き⃟✨ᴄᴏɴᴠᴇʀᴛᴇʀ✨️️⃟ き
▢ ╭═══⊷
▢ ⌁ 𖥂 ${prefix}s [_img/vídeo_] °
▢ ⌁ 𖥂 ${prefix}f [_img/vídeo_] °
▢ ⌁ 𖥂 ${prefix}figu [_img/vídeo_] °
▢ ⌁ 𖥂 ${prefix}sticker [_img/vídeo_] °
▢ ⌁ 𖥂 ${prefix}scredito [_img/vídeo_] °
▢ ⌁ 𖥂 ${prefix}s2 [_img/vídeo_] °
▢ ╰═══⊷
╰━━━ ⪨

╭━━ ⪩
▢ き⃟👩🏻‍💻 ɪɴᴛᴇʟɪɢᴇɴᴄɪᴀ ɪᴀ 👩🏻‍💻️⃟ き
▢ ╭═══⊷
▢ ⌁ 𖥂 ${prefix}ia [1/0] °
▢ ╰═══⊷
╰━━━ ⪨

╭━━ ⪩
▢ き⃟👥ᴀᴅᴍɪɴɪsᴛʀᴀᴄᴀᴏ / ɢʀᴜᴘᴏ👥️⃟ き
▢ ╭═══⊷
▢ ⌁ 𖥂 ${prefix}bv [1/0]
▢ ⌁ 𖥂 ${prefix}antinter [1/0]
▢ ⌁ 𖥂 ${prefix}semlinked [1/0]
▢ ⌁ 𖥂 ${prefix}kick [mention]
▢ ⌁ 𖥂 ${prefix}add [nmr]
▢ ⌁ 𖥂 ${prefix}mudarnomegp [nome]
▢ ⌁ 𖥂 ${prefix}gp
▢ ╰═══⊷
╰━━━ ⪨

╭━━ ⪩
▢ き⃟✍🏻ʟᴏɢᴏᴍᴀᴋᴇʀ✍🏻️⃟ き
▢ ╭═══⊷
▢ ⌁ 𖥂 ${prefix}shadow [texo]
▢ ⌁ 𖥂 ${prefix}stone [texo]
▢ ⌁ 𖥂 ${prefix}write [texo]
▢ ⌁ 𖥂 ${prefix}summer [texo]
▢ ⌁ 𖥂 ${prefix}wolfmetal [texo]
▢ ⌁ 𖥂 ${prefix}nature [texo]
▢ ⌁ 𖥂 ${prefix}roses [texo]
▢ ⌁ 𖥂 ${prefix}naturetypo [texo]
▢ ⌁ 𖥂 ${prefix}quotesunder [texo]
▢ ⌁ 𖥂 ${prefix}shine [texo]
▢ ⌁ 𖥂 ${prefix}smoke [texo]
▢ ╰═══⊷
╰━━━ ⪨

╭━━ ⪩
▢ き⃟🔎ᴘᴇsǫᴜɪsᴀs🔍️⃟ き
▢ ╭═══⊷
▢ ⌁ 𖥂 ${prefix}xvideos [texo] °
▢ ⌁ 𖥂 ${prefix}pornhub [texo] °
▢ ⌁ 𖥂 ${prefix}wallpaper [texo] °
▢ ╰═══⊷
╰━━━ ⪨

╭━━ ⪩
▢ き⃟💻ᴅᴏᴡɴʟᴏᴀᴅ 💻️️⃟ き
▢ ╭═══⊷
▢ ⌁ 𖥂 ${prefix}play [nome] °
▢ ⌁ 𖥂 ${prefix}playv [nome] °
▢ ⌁ 𖥂 ${prefix}ytmp3 [link] °
▢ ⌁ 𖥂 ${prefix}ytmp4 [link] °
▢ ╰═══⊷
╰━━━ ⪨

╭━━ ⪩
▢ き⃟😋ʜᴇɴᴛᴀɪ😋⃟ き
▢ ╭═══⊷
▢ ⌁ 𖥂 ${prefix}ass °
▢ ⌁ 𖥂 ${prefix}hentai °
▢ ⌁ 𖥂 ${prefix}milf °
▢ ⌁ 𖥂 ${prefix}oral °
▢ ⌁ 𖥂 ${prefix}paizuri °
▢ ⌁ 𖥂 ${prefix}ecchi °
▢ ⌁ 𖥂 ${prefix}ero °
▢ ╰═══⊷
╰━━━ ⪨

╭━━ ⪩
▢ き⃟🖌️ᴄᴀɴᴠᴀs🖌️⃟ き
▢ ╭═══⊷
▢ ⌁ 𖥂 ${prefix}circle
▢ ⌁ 𖥂 ${prefix}wasted
▢ ⌁ 𖥂 ${prefix}invert
▢ ⌁ 𖥂 ${prefix}dither
▢ ⌁ 𖥂 ${prefix}jail
▢ ⌁ 𖥂 ${prefix}pixelate
▢ ⌁ 𖥂 ${prefix}sepia
▢ ╰═══⊷
╰━━━ ⪨

╭━━ ⪩
▢ き⃟🎩ᴏᴡɴᴇʀ🎩⃟ き
▢ ╭═══⊷
▢ ⌁ 𖥂 > °
▢ ⌁ 𖥂 => °
▢ ⌁ 𖥂 $ °
▢ ⌁ 𖥂 ${prefix}entrar [link] °
▢ ⌁ 𖥂 ${prefix}exit [from] °
▢ ⌁ 𖥂 ${prefix}antispamcmd °
▢ ╰═══⊷
╰━━━ ⪨`

try {
ppimg = await ayu.profilePictureUrl(sender, "image")
 } catch {
ppimg = 'https://tohka.tech/img/tohka.jpg'
 }
linktyni = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);
interactiveMessage = {
body: { text: "https://tohka.tech" },
footer: { text: "bot disponivel no link acima" },
header: { title: menu, subtitle: "teste4", imageMessage: await upBailyesimg(api('tohka', '/api/canvas/' + 'bemvindod', {
texto: "MENU",
texto3: pushname,
texto2: 'horario: '+time,
img: linktyni.data,
img2: "https://i.pinimg.com/564x/63/24/45/6324451257c44c668f7b788366f571bc.jpg",
cor1: "fff",
cor2: "fff",
cor3: "000000"
}, 'apikey')), hasMediaAttachment: true },
nativeFlowMessage: { buttons: [{ 
name: "quick_reply",
buttonParamsJson:
JSON.stringify({
display_text: "PING ➲",
id: prefix + 'ping',
type: "payload",
payload: "Yes-Button-Payload"
})
},
{ 
name: "single_select",
buttonParamsJson:
buttonParamsJson = JSON.stringify({
title: "EXEMPLOS DE COMANDOS",
description: "",
sections: [ {
title: 'EXEMPLOS DE COMANDOS',
highlight_label: "online",
rows: [{
header: "play",
title: 'baixa musica pelo nome',
description:'' ,
id: prefix + 'play carta aberta mc cabelinho',
}]
},
{
title: '----------------',
highlight_label: "online",
rows: [{
header: "papel de parede",
title: 'baixa papel de parede pelo nome',
description:'' ,
id: prefix + 'wallpaper naruto',
}]
}]
})
}]
}}   
message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }
await ayu.relayMessage(m.chat, { viewOnceMessage: { message } }, {})
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break
case 'ping':
try{
var start = now()
var end = now()
velocidade = ms((start-end).toFixed(3))  
ayu.sendMessage(m.chat, { react: { text: `❕`, key: m.key }})
r = (Date.now() / 1000) - m.messageTimestamp
uptime = process.uptime()
hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
try {
ppimg = await ayu.profilePictureUrl(sender, "image")
} catch {
ppimg = 'https://tohka.tech/img/tohka.jpg'
}
infoveloz =
`❕_${hora}_❕

✎ ${ms(velocidade)}
`
        
linktyni = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);
interactiveMessage = {
body: { text: "https://tohka.tech" },
footer: { text: "bot disponivel no link acima" },
header: { title: infoveloz, subtitle: "teste4", imageMessage: await upBailyesimg(api('tohka', '/api/canvas/' + 'editbranca', {
nick: ms(velocidade),
img: linktyni.data
}, 'apikey')), hasMediaAttachment: true },
nativeFlowMessage: { buttons: [{ 
name: "cta_url",
buttonParamsJson:
JSON.stringify({
display_text: "TOHKA API ➲",
url: "https://tohka.tech",
merchant_url: "https://www.google.ca"
})
},
{ 
name: "quick_reply",
buttonParamsJson:
JSON.stringify({
display_text: "MENU ➲",
id: prefix + 'menu',
type: "payload",
payload: "Yes-Button-Payload"
})
}]
}}   
message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }
await ayu.relayMessage(m.chat, { viewOnceMessage: { message } }, {})
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break  
case "wallpaper":
if (!q) return reply("preciso do nome da pesquisa")
reply("aguarde")
try {
wall = await fetchJson(api('tohka', '/api/pesquisa/wallpaper', {
nome: q
}, 'apikey'))
ayu.relayMessage(m.chat, { 
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: {
body: {
text: "mostrando papeis de parede de: "+q
},
footer: {
text: "api usada no bot: " + site
},
header: {
title: "mostrando papeis de parede de: "+q,
subtitle: "site usado para pesquisa: 4kwallpapers",
},
carouselMessage: {
cards: [
{
header: {
imageMessage: await upBailyesimg(wall[0].img),
hasMediaAttachment: true,
},
body: { text: "📌" + wall[0].titulo + "\n📎" + wall[0].link },
nativeFlowMessage: {
buttons: [{ name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "📩 baixar bot ⬇️", id: "https://tohka.tech", copy_code: "https://tohka.tech" }) }],
},
},
{
header: {
imageMessage: await upBailyesimg(wall[1].img),
hasMediaAttachment: true,
},
body: { text: "📌" + wall[1].titulo + "\n📎" + wall[1].link },
nativeFlowMessage: {
buttons: [{ name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "📩 baixar bot ⬇️", id: "https://tohka.tech", copy_code: "https://tohka.tech" }) }],
},
},
{
header: {
imageMessage: await upBailyesimg(wall[2].img),
hasMediaAttachment: true,
},
body: { text: "📌" + wall[2].titulo + "\n📎" + wall[2].link },
nativeFlowMessage: {
buttons: [{ name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "📩 baixar bot ⬇️", id: "https://tohka.tech", copy_code: "https://tohka.tech" }) }],
}
}
]
}}}}
}, m);  
}catch(err){
reply("erro no comando")
console.log(err)
}
break

case 'circle':
case 'wasted':
case 'invert':
case 'dither':
case 'jail':
case 'pixelate':
case 'sepia':
if ((!isMedia && !isQuotedImage)) return reply("marque alguma imagen")
    try {
    reply('criando figurinha')
    console.log('criando figurinha image')
    const encmedia = isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: m.message.imageMessage
    rane = getRandom('.'+ await getExtension(encmedia.mimetype))
    imgbuff = await getFileBuffer(encmedia, 'image')
    fs.writeFileSync(rane, imgbuff)
    const media = rane
    ran = getRandom('.'+media.split('.')[1])
    uploadd = await TelegraPh(media)
     scirculo = await api('tohka', '/api/canvas/' + command, {
        img: uploadd
     }, 'apikey')
     enviarfiguimg(from, scirculo, m, {
        packname: pacote, author: auutor
         })
         await fs.unlinkSync(media)
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break
case 'pornhub':
case 'xvideos':
reply("aguarde")
if (!q) return reply(`exemplo: ${prefix + command} mc piroquinha`)
    try {
if (command === "xvideos") {
xvideos = await fetchJson(api('tohka', '/api/pesquisa/' + command, {
nome: q
}, 'apikey'))
let xxx = `*🔞 XVIDEOS 🔞\n\ntotal de resultados: ${xvideos.length}\n\n`
for (let i = 0; i < xvideos.length; i++) {
xxx += `*Titulo :* ${xvideos[i].titulo}\n*Canal :* ${xvideos[i].canal}\n*Qualidade:* ${xvideos[i].qualidade}\n*Link:* ${xvideos[i].link}\n\n───────────────\n\n`
}
reply(xxx)
} else if (command === "pornhub") {
pornhub = await fetchJson(api('tohka', '/api/pesquisa/pornhubsrc', {
nome: q
}, 'apikey'))
let xxx = `*🔞 PORNHUB 🔞\n\ntotal de resultados: ${pornhub.length}\n\n`
for (let i = 0; i < pornhub.length; i++) {
xxx += `*Titulo :* ${pornhub[i].titulo}\n*Canal :* ${pornhub[i].canal}\n*Likes:* ${pornhub[i].likes}\n*Visualizações:* ${pornhub[i].visualizações}\n*Video preloader:* ${pornhub[i].video_preloader}\n*Link:* ${pornhub[i].link2}\n\n───────────────\n\n`
}
reply(xxx)
}
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break

case 'play':
if (!q) return reply(`exemplo: ${prefix + command} dj arana`)
    try {
reply("aguarde")
play = await getBuffer(api('tohka', '/api/dl/' + 'play2', {
nome: q
}, 'apikey'))
await ayu.sendMessage(m.chat, { audio: play, mimetype: 'audio/mpeg', ptt: false}, { quoted: m }) 
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break

case 'playv':
if (!q) return reply(`exemplo: ${prefix + command} edit anime 30 segundos`)
    try {
reply("aguarde")
play = await getBuffer(api('tohka', '/api/dl/' + 'playv', {
nome: q
}, 'apikey'))
await ayu.sendMessage(from, { video: { url: play }}, { quoted: m })  
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break

case 'ytmp3':
case 'ytmp4':
reply("aguarde")
if (!q.includes("youtu")) return reply(`exemplo: ${prefix + command} https://youtu.be/z4LGioi816M?si=Ha31qs1pMB4JKWSG`)
    try {
if (command === "ytmp3") {
ytmp3 = api('tohka', '/api/dl/ytmp3v2', {
link: q
}, 'apikey')
await ayu.sendMessage(m.chat, { audio: { url: ytmp3}, mimetype: 'audio/mpeg', ptt: false}, { quoted: m }) 
} else if(command === "ytmp4") {
ytmp4 = api('tohka', '/api/dl/ytmp4v2', {
link: q,
qualidade: 360 + "p"
}, 'apikey')
await ayu.sendMessage(m.chat, { video: { url: ytmp4}}, { quoted: m })     
}
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break

 case 'sticker': case 's': case 'stickergif': case 'sgif': case 'f': case 'figu': {
if ((isMedia && !m.message.videoMessage || isQuotedImage)) {
 reply('criando figurinha')
 console.log('criando figurinha image')
 const encmedia = isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: m.message.imageMessage
 rane = getRandom('.'+ await getExtension(encmedia.mimetype))
 imgbuff = await getFileBuffer(encmedia, 'image')
 fs.writeFileSync(rane, imgbuff)
 const media = rane
 ran = getRandom('.'+media.split('.')[1])
 const upload = await TelegraPh(media)
 await enviarfiguimg(from, util.format(upload), m, {
packname: pacote, author: auutor
 })
await fs.unlinkSync(media)
} else if ((isMedia && m.message.videoMessage.seconds < 11 || isQuotedVideo && m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
 reply('criando figurinha')
 console.log('criando figurinha vídeo')
 const encmedia = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: m.message.videoMessage
 rane = getRandom('.'+ await getExtension(encmedia.mimetype))
 imgbuff = await getFileBuffer(encmedia, 'video')
 fs.writeFileSync(rane, imgbuff)
 const media = rane
 ran = getRandom('.'+media.split('.')[1])
 const upload = await TelegraPh(media)
 await enviarfiguvid(from, util.format(upload), m, {
packname: pacote, author: auutor
 })
await fs.unlinkSync(media)
} else return reply(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração`)
 }
break

case 'scredito': case 's2': {
 if (!q.includes('/')) return reply(`Exemplo : ${prefix + command} nome1/nome2`)
 const pacote = q.substring(0, q.indexOf('/') - 0)
 const criador = q.substring(q.lastIndexOf('/') + 1)
 if ((isMedia && !m.message.videoMessage || isQuotedImage)) {
reply('criando figurinha')
console.log('criando figurinha image')
const encmedia = isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: m.message.imageMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguimg(from, util.format(upload), m, {
 packname: pacote, author: criador
})
await fs.unlinkSync(media)
 } else if ((isMedia && m.message.videoMessage.seconds < 11 || isQuotedVideo && m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
reply('criando figurinha')
console.log('criando figurinha vídeo')
const encmedia = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: m.message.videoMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguvid(m.chat, util.format(upload), m, {
 packname: pacote, author: criador
})
await fs.unlinkSync(media)
 } else return reply(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração`)
}
 break
 
case 'ass':
case 'hentai':
case 'milf':
case 'oral':
case 'paizuri':
case 'ecchi':
case 'ero':
    try {
reply("aguarde")
hentaitxt = 
`
${command} em ultra hd 🍑
`
hentai = await getBuffer(api('tohka', '/api/hentai/' + command, {
 }, 'apikey'))
ayu.sendMessage(m.chat, {
image: hentai, caption: hentaitxt
}, {
quoted: m
})
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break

case 'shadow':
case 'stone':
case 'write':
case 'summer':
case 'wolfmetal':
case 'nature':
case 'roses':
case 'naturetypo':
case 'quotesunder':
case 'shine':
case 'smoke':
if (!q) return reply(`exemplo: ${prefix + command} sayo`)
    try {
reply("aguarde")
potooxytxt = 
`
logo com o nome: ${q} gerada com sucesso!
`
potooxy = await getBuffer(api('tohka', '/api/photooxy/' + command, {
nome: q
 }, 'apikey'))
ayu.sendMessage(m.chat, {
image: potooxy, caption: potooxytxt
}, {
quoted: m
})
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break

 case 'ia':
if (!groupAdmins) return reply(responder.admin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
 if (IA) return reply('O modo IA ja ativo')
 ia_db.push(m.chat)
 fs.writeFileSync('./∂αтαвαsє/ia/2/ia.json', JSON.stringify(ia_db))
 reply('IA on neste grupo')
} else if (Number(args[0]) === 0) {
 if (!IA) return reply('IA ja esta desativada :/.')
 ia_db.splice(m.chat, 1)
 fs.writeFileSync('./∂αтαвαsє/ia/2/ia.json', JSON.stringify(ia_db))
 reply('IA desligada neste grupo')
} else {
 reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'bv':
if (!groupAdmins) return reply(responder.admin)
if (isBotAdmins) return reply(responder.botadm)
if (args.length < 1) return reply('???')
if (Number(args[0]) === 1) {
 if (isBv) return reply('O modo bv ja ativo')
 _bv.push(m.chat)
 fs.writeFileSync('./∂αтαвαsє/_bv.json', JSON.stringify(_bv))
 reply('BV on neste grupo')
} else if (Number(args[0]) === 0) {
 if (!isBv) return reply('BV ja esta desativado :/.')
 _bv.splice(m.chat, 1)
 fs.writeFileSync('./∂αтαвαsє/_bv.json', JSON.stringify(_bv))
 reply('BV desligada neste grupo')
} else {
 reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

 case 'semlinked':
if (!groupAdmins) return reply(responder.admin)
if (isBotAdmins) return reply(responder.botadm)
if (args.length < 1) return reply('???')
if (Number(args[0]) === 1) {
 if (is_semlinked) return reply('O modo semlinked ja ativo')
 _semlinked.push(from)
 fs.writeFileSync('./∂αтαвαsє/_semlinked.json', JSON.stringify(_semlinked))
 reply('semlinked on neste grupo')
} else if (Number(args[0]) === 0) {
 if (!is_semlinked) return reply('semlinked ja esta desativado :/.')
 _semlinked.splice(from, 1)
 fs.writeFileSync('./∂αтαвαsє/_semlinked.json', JSON.stringify(_semlinked))
 reply('semlinked desligada neste grupo')
} else {
 reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

 case 'antinter':
if (!groupAdmins) return reply(responder.admin)
if (args.length < 1) return reply('???')
if (isBotAdmins) return reply(responder.botadm)
if (Number(args[0]) === 1) {
 if (isInt) return reply('O modo ANTIINTERNACIONAL ja ativo')
 _seminternacional.push(from)
 fs.writeFileSync('./∂αтαвαsє/_seminternacional.json', JSON.stringify(_seminternacional))
 reply('ANTIINTER on neste grupo')
} else if (Number(args[0]) === 0) {
 if (!isInt) return reply('ANTIINTER ja esta desativado :/.')
 _seminternacional.splice(from, 1)
 fs.writeFileSync('./∂αтαвαsє/_seminternacional.json', JSON.stringify(_seminternacional))
 reply('ANTIINTER desligada neste grupo')
} else {
 reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break


 case 'entrar': {
if (!isOwner) return reply(responder.criador)
if (!q) return reply(`Preciso do link`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Inválido!')
reply(responder.aguarde)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await ayu.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
break
 case 'exit': {
if (!isOwner) return reply(responder.criador)
await ayu.groupLeave(from).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
break
 case 'kick': {
if (!isGroup) return reply(responder.grupo)
if (!groupAdmins) return reply(responder.admin)
if (isBotAdmins) return reply(responder.botadm)
let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ayu.groupParticipantsUpdate(from, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
break

 case 'antispamcmd':
try {
 if (!isOwner) return reply(responder.criador)
 if (Number(args[0]) === 1) {
if (isAntiSpamcmd) return reply('Ja esta ativo')
antispamcmd.push('Ativado')
fs.writeFileSync('./∂αтαвαsє/_semspam.json', JSON.stringify(antispamcmd))
reply('Ativou com sucesso o recurso de anti spam de comando no bot✔️')
} else if (Number(args[0]) === 0) {
fs.writeFileSync('./∂αтαвαsє/_semspam.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de anti spam de comando no bot✔️')
}
} catch {
 reply(msgerr)
}
break

 case 'add': {
if (!isGroup) return reply(responder.grupo)
if (!groupAdmins) return reply(responder.admin)
if (isBotAdmins) return reply(responder.botadm)
let users = m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
infokk = await ayu.groupParticipantsUpdate(from, [users], 'add')
fds = await ayu.groupInviteCode(from)
let convite = {
 groupInviteMessage: {
groupJid: from,
groupName: metadata.subject,
inviteCode: infokk[0].attrs.code,
inviteExpiration: infokk[0].attrs.expiration,
jpegThumbnail: null,
caption: null
 }
}
if (infokk[0].attrs.error.match("409")) return reply('O alvo já está no grupo!')
/*if(infokk[0].attrs.error.match("403")) return ayu.sendText(users, `https://chat.whatsapp.com/${fds}`, m, { detectLink: true })
if(infokk[0].attrs.error.match("408")) return ayu.sendText(users, `https://chat.whatsapp.com/${fds}`, m, { detectLink: true })
if(infokk[0].attrs.error.match("401")) return ayu.sendText(users, `https://chat.whatsapp.com/${fds}`, m, { detectLink: true })*/
 }
break
 case 'linkgroup':
try {
 if (!isGroup) return reply(responder.grupo)
 if (!groupAdmins) return reply(responder.admin)
 if (isBotAdmins) return reply(responder.botadm)
 linkgc = await ayu.groupInviteCode(from)
 console.log(linkgc)
 reply('https://chat.whatsapp.com/'+linkgc)
} catch {
 reply(msgerr)
}
break

 case 'mudarnomegp':
try {
 if (!isGroup) return reply(responder.grupo)
 if (!groupAdmins) return reply(responder.admin)
 if (isBotAdmins) return reply(responder.botadm)
 if (!q) return reply(responder.cdnome)
 ayu.groupUpdateSubject(from, q)
} catch (e) {
 console.log(e)
 reply(msgerr)
}
break

 case 'gp': case 'grupo': {
 if (!isGroup) return reply(responder.grupo)
 if (!groupAdmins) return reply(responder.admin)
 if (isBotAdmins) return reply(responder.botadm)
if (args[0] === 'abrir') {
 await ayu.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Grupo aberto com sucesso!`))
} else if (args[0] === 'fechar') {
 await ayu.groupSettingUpdate(from, 'announcement').then((res) => reply(`Grupo fechado com sucesso!`))
 } else {
 reply('abrir para abrir, fechar para fechar, lerdao vc em KKKKK')
}
 }
break


 }

} catch (e) {
const isError = String(e)

console.log(isError)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
 fs.unwatchFile(file)
 console.log(chalk.green(`modificou '${__filename}'`))
 delete require.cache[file]
 require(file)
})
