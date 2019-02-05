/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */

const delay = (timeout = 1000) =>
    new Promise(resolve => setTimeout(resolve, timeout));

module.exports = async () => {

    return {
        mode: 'none',
        devtool: false,
    };
};
