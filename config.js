import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['2349093924119', 'Razhfad❤️🫶', true], 
]

global.mods = ['2349093924119'] 
global.prems = ['2349093924119']
global.APIs = { 
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'Dennis'
}

global.packname = 'Pig Benis' 
global.author = 'Razhfad' 
global.fgig = 
global.dygp = 'https://wa.me/2349093924119'
global.fgsc = 'https://wa.me/2349093924119' 
global.fgyt = 
global.fglog = 'https://wa.me/2349093924119' 

global.wait = '*⌛ _loading..._*\n*▰▰▰▰▰▰▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '5'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
