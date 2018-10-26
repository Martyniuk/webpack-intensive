import React, { Component } from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

const Test = hot(
    class extends Component {
        render() {
            console.log('→ приветик');

            return <h1>Приветик!</h1>;
        }
    },
);

render(<Test />, document.getElementById('app'));
