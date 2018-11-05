export default (text = 'Hello!') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    element.addEventListener('click', async () => {
        element.textContent = 'preparing...';

        await (() => new Promise((resolve) => setTimeout(resolve, 2000)))();

        element.textContent = 'fetching...';

        // const { default: text } = await import('./lazyText');

        /*
        ** prefetch: отмечает ресурс как возможно пригодившийся в будущем (browser downloads while idle state)
        ** preload: отмечает ресурс как необходимый ближайшее время (browser downloads immediately)
         */
        const { default: text } = await import('./lazyLoadedText');

        element.textContent = text;
    });

    return element;
};
