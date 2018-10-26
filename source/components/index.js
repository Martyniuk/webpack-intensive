import React, { Component } from 'react';
import { render } from 'react-dom';

export class Test extends Component {
    render() {
        console.log('→ приветик');
        return <h1>Приветик!</h1>;
    }
}

render(<Test />, document.getElementById('app'));
