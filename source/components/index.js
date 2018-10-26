import { Component, createElement } from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

const Test = hot(module)(
    class extends Component {
        render() {
            console.log('→ приветик');

            return createElement('h1', null, 'Хелоу!');
        }
    },
);

render(createElement(Test), document.getElementById('app'));
