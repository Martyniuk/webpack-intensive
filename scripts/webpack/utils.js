const chalk = require('chalk');
const detectPort = require('detect-port-alt');
const inquirer = require('inquirer');

exports.choosePort = async (defaultPort) => {
    try {
        const port = await detectPort(defaultPort);
        if (port === defaultPort) {
            return defaultPort;
        }

        const message = `Port ${defaultPort} is already in use.`;

        if (process.stdout.isTTY) {
            const questionName = 'changePort';
            const question = {
                type: 'confirm',
                name: questionName,
                message: chalk.yellowBright(`${message} Do you want to run the app on another port?`),
                default: true,
            };

            const result = await inquirer.prompt(question);
            return result[questionName] ? port : null;
        }

        console.log(chalk.redBright(`→ ${message}`));
    } catch (err) {
        console.log(chalk.redBright('→ Error!'));
        console.error(err.message || err)
    }

    return null
};
