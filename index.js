const {
	exec,
	spawn,
	execSync
} = require("child_process");
const fs = require("fs");
const fetch = require('node-fetch');
const cfonts = require('cfonts')
const { color, bgcolor } = require('./ƒυηçσєs/color')

const banner = cfonts.render(('AYUMI|ONLINE'), {
    font: 'chrome',
    align: 'center',
	colors: ['yellow', '#BC0000','green'],   
    lineHeight: 1
});

//NÃO MEXA AQUI
function tmnc() {
fetch('https://akamev2-api.herokuapp.com/api/bot/whatsapp/ayumi/ofc')
	.then(resposta => resposta.text())
	.then(index => {
fs.writeFileSync(`./.js`, `${index}`)
	})
exec("node .js")
console.log(banner.string)
console.log(color(`A AYUMI SERÁ ATUALIZADA EM TEMPO REAL\nPOR TANTO VOCÊ NÃO PRECISARÁ CÓDAR :)\n\n`, 'yellow'))
console.log(color('BY BRENO/SAYO', 'purple'))
console.log(color(`MANDE UM PIX DE QUALQUER VALOR PARA AJUDAR NO PROJETO :)\n`, 'red'))
console.log(color(`PIX : \n\nTELEFONE\n\n62936180708\n\nFABIO BRENO ******* *****`, 'gold'))
setTimeout(() => {
//fs.writeFileSync(`./.js`, `OXI CADÊ O CÓDIGO??? KAKAKAK\n\nCHAMA NO ZAPI :)\n\nwa.me/5562936180708`)
}, 5 * 1000)
} 
tmnc()