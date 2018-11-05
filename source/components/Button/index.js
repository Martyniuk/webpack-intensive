// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.css';

export class Button extends Component {
    render() {
        const { text, onClick } = this.props;

        return (
            <button
                className = { Styles.button }
                onClick = { onClick }>
                {text}
            </button>
        );
    }
}
