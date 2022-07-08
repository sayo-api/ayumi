/**
   * Bot publico By sayo/breno *
   * Meu contato : wa.me/5562936180708 *
   * Visite meu rest api 😁 : https://sakatsumi.herokuapp.com/docs *
*/

const fs = require('fs')
const fetch = require('node-fetch')
const axios = require('axios')


exports.fetchJson = async (url, options) => {
	try {
		options ? options: {}
		const res = await axios({
			method: 'GET',
			url: url,
			headers: {
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
			},
			...options
		})
		return res.data
	} catch (err) {
		return err
	}
}

exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
	fetch(url, options)
	.then(response => response.text())
	.then(text => {
		// console.log(text)
		resolve(text)
	})
	.catch((err) => {
		reject(err)
	})
})

exports.getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.getBuffer = async (url, options) => {
	try {
		options ? options: {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}