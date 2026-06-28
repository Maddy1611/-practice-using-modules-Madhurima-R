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