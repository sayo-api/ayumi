/**
   * Bot publico By sayo/breno *
   * Meu contato : wa.me/5562936180708 *
   * Visite meu rest api 😁 : https://sakatsumi.herokuapp.com/docs *
*/

const chalk = require('chalk')

const color = (text, color) => {
 return !color ? chalk.green(text): chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
 return !bgcolor ? chalk.green(text): chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
 color,
 bgcolor
}