export default (text = 'Хеллоу гайз!!! 🎉🎉🎉') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
};
