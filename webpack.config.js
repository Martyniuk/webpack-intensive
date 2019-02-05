/**
 * Типы конфигов вебпак:
 * Object
 * Function
 * Promise
 */
module.exports = () => {
    // Что угодно

    return {
        mode: 'none',
        devtool: false,
    };
};

module.exports = Promise.resolve({
    mode: 'none',
    devtool: false,
});
