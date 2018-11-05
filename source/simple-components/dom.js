export default (text = 'Hello!') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    element.addEventListener('click', async () => {
        element.textContent = 'fetching...';

        await (() => new Promise((resolve) => setTimeout(resolve, 2000)))();

        const { default: text } = await import('./lazyLoadedText');

        element.textContent = text;
    });

    return element;
};
