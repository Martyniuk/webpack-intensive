export default (text = 'Хеллоу!!! 🎉🎉🎉') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
};
