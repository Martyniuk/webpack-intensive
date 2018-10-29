// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

// Styles
import Styles from './postcss.css';
import kitty from '../../theme/images/kitty.jpg';
import ReactLogo from '../../theme/images/react.svg';

const Clicker = hot(module)(
    class extends Component {
        state = {
            count: 0,
        };

        inc = () => this.setState(({ count }) => ({
            count: count + 1,
        }));

        dec = () => this.setState(({ count }) => ({
            count: count - 1,
        }));

        render() {
            const { count } = this.state;

            return (
                <section className = { Styles.clicker }>
                    <h1>Count: {count}</h1>
                    <img src = { kitty } />
                    <ReactLogo />
                    <div>
                        <button onClick = { this.inc }>Increment</button>
                        <button onClick = { this.dec }>Decrement</button>
                    </div>
                </section>
            );
        }
    },
);

render(<Clicker />, document.getElementById('app'));
