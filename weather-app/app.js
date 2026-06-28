const yargs = require ("yargs");
const {hideBin} = require ("yargs/helpers");
const chalk = require ("chalk");

const weatherData = {
    "Chicago": {
        temperature: "68",
        condition: "Windy",
    },

    "St Louis": {
        condition: "Rainy",
        temperature: "55",
    },

    "New York": {
        condition: "Sunny",
        temperature: "81",
    },
}

const argv = yargs(hideBin(process.argv))
    .option("city", {
        describe: "cityName",
        type: "string",
    })
    .help()
    .argv;

const city = argv.city;

function weatherDetails(cityName) {
    if (weatherData[cityName]) {
        console.log(chalk.green.bold("City: ") + chalk.yellow(cityName));
        console.log(chalk.cyan(`Temperature: ${weatherData[cityName].temperature}`));
        console.log(chalk.cyan(`Condition: ${weatherData[cityName].condition}`));
    } else {
        console.log(chalk.red(`The weather report is not available for the city you have chosen.`));
    }
}

weatherDetails(city);



/*
The purpose of package.json in managing dependencies is to list the required packages, 
organize them, and allow npm to automatically install and reproduce your project setup anywhere required.

The node_modules folder should not be included in version control because it is too large 
and not necessary to store in GitHub repositories.

When running npm install, npm reads your package.json and copies the dependency tree 
and it builds a local node_modules folder to download the libraries.
*/