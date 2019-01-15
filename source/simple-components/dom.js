export default (text = 'Хеллоу гайз!!! 🎉🎉🎉 🔥🔥🔥') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    /* Code splitting */
    element.addEventListener('click', async () => {
        // 1. индикатор загрузки
        element.innerHTML = 'Загружаю....';

        await (() => new Promise((resolve) => setTimeout(resolve, 2000)))(); // ждём 2 секунды

        // 2. загрузить split point
        // 3. добавить в элемент загруженный текст
    });

    return element;
};
