import React, { Component } from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

const Test = hot(module)(
    class extends Component {
        render() {
            return <h1>Хелоу!</h1>;
        }
    },
);

render(<Test />, document.getElementById('app'));
