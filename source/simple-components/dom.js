import lazyText from './lazyLoadedText';

export default (text = lazyText) => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
};
