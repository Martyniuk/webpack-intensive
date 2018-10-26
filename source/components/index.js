import React, { Component } from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

import Styles from './styles.css';

import { Test2 } from '../components-2';

const Test = hot(module)(
    class extends Component {
        render() {
            console.log('→ приветик');

            return (
                <>
                    <h1 className = { Styles.hello }>Хелоу!</h1>
                    <Test2 />
                </>
            );
        }
    },
);

render(<Test />, document.getElementById('app'));
