//═══════[© Ayumi 1.0 MD]════════\\
//                             °°°
//~ ° opa, bão? esse código e a versão gratis do bot.  °
//~ ° então você só poderá modificar essa parte aqui.°
//~ ° caso queira comprar a versão paga, editável.      °
//~ ° contate-me pelo whatsapp falando que deseja.   °
//~ ° adquirir o bot, vou deixar meu número abaixo.     °
//~ °     https://wa.me/5562936180708.
//~ ° alguma dúvida na instação? contate-me.              °
//                             °°°
//═══════[© Ayumi 1.0 MD]═════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api]════════\\
global.APIs = {
 sakatsumi: 'https://sakatsumi.p7api.xyz',
 akame: 'https://akamev2-api.herokuapp.com',
}
//═══════[api key]════════\\
/* 
°  https://sakatsumi.p7api.xyz  °
° https://akamev2-api.herokuapp.com °
faça login nesse site para conseguir sua apikey
*/

global.APIKeys = {
 'https://sakatsumi.p7api.xyz': 'sayo_ofc',
 'https://akamev2-api.herokuapp.com': 'sayo_ofc', 
}

global.keyofc = 'sayo_ofc'

//═══════[modification]════════\\
global.prefix = '#'
global.coderNumero = ['5562936180708']
global.logo = fs.readFileSync('./ıɱɢ/ayumi.jpg')
global.nomebot = ['ayumi']
global.nomedono = ['breno']
global.idgrupo = ['breno']
global.auutor = 'breno ' //nome dos créditos da figurinha > autor
global.pacote = 'ayumi ofc ' //nome dos créditos da figurinha > pacote
global.responder = {
 pronto: 'obrigado por esperar, aqui esta o resultado!',
 admin: 'este recurso e especial para admin do grupo',
 criador: 'este recurso e especial para o programador do bot',
 grupo: 'este recurso só pode usar em grupos',
 privado: 'opa, você não podr usar aqui no grupo, somente no meu pv!',
 aguarde: 'estou processando o comando',
 erronoservidor: 'ocorreu um erro no servidor interno',
 cdnome: 'insira o query',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
 fs.unwatchFile(file)
 console.log(chalk.green(`Upgrade '${__filename}'`))
 delete require.cache[file]
 require(file)
})