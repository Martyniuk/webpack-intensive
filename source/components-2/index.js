import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Styles from './styles.css';

export class Test2 extends Component {
    render() {
        console.log('→ приветик');

        return (
            <>
                <h1 className = { Styles.hello }>Хелоу!</h1>
                <h1 className = { Styles.hello }>Хелоу!</h1>
            </>
        );
    }
}
