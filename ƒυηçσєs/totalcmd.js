/**
   * Bot publico By sayo/breno *
   * Meu contato : wa.me/5562936180708 *
   * Visite meu rest api 😁 : https://sakatsumi.herokuapp.com/docs *
*/

const fs = require('fs')

const ceemde = JSON.parse(fs.readFileSync('./∂αтαвαsє/totalcmd.json'))

/**
* for add total command
* @params {direktori}
* dah lah
**/
const cmdadd = () => {
 ceemde[0].totalcmd += 1
 fs.writeFileSync('./∂αтαвαsє/totalcmd.json', JSON.stringify(ceemde))
}

module.exports = {
 cmdadd
}