export default (text = 'Хеллоу гайз!!! 🎉🎉🎉 🔥🔥🔥') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    /* Code splitting */
    element.addEventListener('click', async () => {
        // 1. индикатор загрузки
        element.innerHTML = 'Подготовка....';
        await (() => new Promise((resolve) => setTimeout(resolve, 2000)))(); // ждём 2 секунды
        element.innerHTML = 'Загружаю....';

        // 2. загрузить split point
        const {
            lazyLoadedText,
        } = await import(/* webpackChunkName: "lazyLoadedText" */ './lazyLoadedText');

        // 3. добавить в элемент загруженный текст
        element.innerHTML = lazyLoadedText;
    });

    return element;
};
