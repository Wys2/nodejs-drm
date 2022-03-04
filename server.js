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
const cliSelect = require('cli-select');

// Lang
log(chalk.inverse("Loading language files..."))
let languageArray = []

try {
    fs.readdirSync("./lang").forEach(pull => {
        var verif = require(`./lang/${pull}`)
        if(pull.endsWith(".json") && verif && verif.title){
            languageArray.push(verif.title)
        } else {
            log(chalk.bgRed(`${pull} isn't valid!`))
        }
    })
    log(chalk.bgGreen(`Loaded ${languageArray.length} languages!`))
} catch (error) {
    log(chalk.bgRed(error.message))
}

// Language Selector
let options = {
    values: languageArray,
    valueRenderer: (value, selected) => {
        if (selected) {
            return chalk.underline(value);
        }
 
        return value;
    },
    selected: "❮●❯",
    unselected: "❮ ❯"
}

cliSelect(options, (valueId, value) => {
    if (valueId !== null) {
        console.log('selected ' + valueId + ': ' + value);
    } else {
        console.log('cancelled');
    }
});