// Code by Wys#0001 || https://github.com/Wys2

// Startup
console.clear()

const log = console.log;
const chalk = require('chalk');
const package = require("./package.json")

log(chalk.inverse(`${package.name} V.${package.version}, by ${package.author}.`))
log(chalk.inverse("Loading Consts"))

// Constantes
const licenseKey = require('nodejs-license-key');
const fs = require("fs")

// Lang
log(chalk.inverse("Loading language files"))
let languageArray;

try {
    fs.readdirSync("./lang").forEach(lng => {
        let languageNum = 0
        let languages = fs.readdirSync(`./lang/${lng}/`).filter((file) => file.endsWith(".json"));
        for (lngs of languages) {
            let pull = require(`../lang/${lng}/${lngs}`);
            if (pull) {
                languageArray.set(lngs, pull);
                log(chalk.bgGreen(`Language ${lngs} has been loaded !`))
                languageNum++
            } else {
                console.warn(`Language ${lng} couldn't be loaded`);
                continue;
            }
        }
    })
    
} catch (error) {
    log(chalk.bgRed(error.message))
}
