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
    console.log('→ 1');
    await delay();
    console.log('→ 2');
    // continue

    return {
        mode: 'none',
        devtool: false,
    };
};
