const delay = (timeout = 1000) =>
    new Promise(resolve => setTimeout(resolve, timeout));

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
module.exports = () => {
    return {
        mode: 'none',
        devtool: false,
    };
};
