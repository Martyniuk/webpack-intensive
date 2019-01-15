export default (text = 'Хеллоу гайз!!! 🎉🎉🎉 🔥🔥🔥') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    /* Code splitting */
    element.addEventListener('click', async () => {
        element.innerHTML = 'Загружаю....';
        // 1. индикатор загрузки
        // 2. загрузить split point
        // 3. добавить в элемент загруженный текст
    });

    return element;
};
