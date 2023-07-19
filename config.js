import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['2347018087851', 'Dennis ❤️🫶', true], 
]

global.mods = ['2347018087851'] 
global.prems = ['2347018087851']
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

global.packname = 'Dennisᴮᴼᵀ' 
global.author = 'Dennis' 
global.fgig = 
global.dygp = 'https://chat.whatsapp.com/JJIry5Jw3FOL9v1DEe7efc'
global.fgsc = 'https://chat.whatsapp.com/JJIry5Jw3FOL9v1DEe7efc' 
global.fgyt = 
global.fglog = 'https://chat.whatsapp.com/JJIry5Jw3FOL9v1DEe7efc' 

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
