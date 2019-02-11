import component from './simple-components/dom';
// import './theme/main.css';

let element = component();
document.body.appendChild(element);

// TODO: hot reloading на React
// 1. react-hot-loader: babel-плагин
// 2. react-hot-loader: исходный код
// hot(module)(component);

if (module.hot) {
    module.hot.accept('./simple-components/dom', function() {
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}
