/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */

const delay = (timeout = 1000) =>
    new Promise(resolve => setTimeout(resolve, timeout));

module.exports = async () => {
    // Что угодно

    // pause 1000 ms
    await delay();
    // continue

    return {
        mode: 'none',
        devtool: false,
    };
};
