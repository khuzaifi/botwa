/**
   * Create By Bernekellboy
   * Contact Me on wa.me/6289695073357
   * Follow https://github.com/Bernekellboy
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'a9a05974d30e',
}

// Other
global.owner = ['6285782708395','6285782708395','6285782708395']
global.ownernumber = 'wa.me/6285782708395'
global.ownername = 'KhuzaifiGanz🔥'
global.botname = 'KhuzaifiGanz - BOT🤖'
global.packname = '© KHUZAIFIGANZ-MD'
global.facebook = 'Khuzaifi Ganz'
global.allfriend = '📺 All My Friends And All Creator Bot Whatsapp'
global.quotes = '📜 terkadang kita harus berjuang diluar zona nyaman, untk mendapatkan sesuatu yg diinginkan. kejamnya dunia sampai membuatku lupa ,apa itu rasa bahagia.'
global.author = 'Ig : @snssus_'
global.sessionName = 'nekell'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✅ Done Success',
    admin: '❌Fitur Khusus Admin Group!',
    botAdmin: '📢 Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: '❌ Fitur Khusus Owner Bot',
    group: '❌ Fitur Digunakan Hanya Untuk Group!',
    private: '❌ Fitur Digunakan Hanya Untuk Private Chat!',
    bot: '❌ Fitur Khusus Pengguna Nomor Bot',
    wait: '⌛ Sabar Loading...',
}
global.thumb = fs.readFileSync('./lib/nekell.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
