// Code by Wys#0001 || https://github.com/Wys2

// Startup
console.clear()
const log = console.log;
const chalk = require('chalk');
const package = require("./package.json")

log(chalk.inverse(`${package.name} V.${package.version}, by ${package.author}.`))

// Constantes
log(chalk.inverse("Loading Consts..."))
const licenseKey = require('nodejs-license-key');
const fs = require("fs")

// Lang
log(chalk.inverse("Loading language files..."))
let languageArray = []

try {
    fs.readdirSync("./lang").forEach(pull => {
        if(pull.endsWith(".json")){
            languageArray.push(pull)
        } else {
            log(chalk.bgRed(`${pull} isn't a json file!`))
        }
    })
    log(chalk.bgGreen(`Loaded ${languageArray.length} languages!`))
} catch (error) {
    log(chalk.bgRed(error.message))
}

// Language Selector