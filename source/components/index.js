import { Component } from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

const Test = hot(module)(
    class extends Component {
        render() {
            console.log('→ приветик');

            return React.createElement('h1', null, 'Хелоу!');
        }
    },
);

render(React.createElement(Test), document.getElementById('app'));
