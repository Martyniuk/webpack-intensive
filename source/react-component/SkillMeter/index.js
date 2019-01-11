// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

// Styles
import Styles from './styles.css';
import cat from '../../theme/assets/images/cat.jpg';
import { ReactComponent as ReactLogoSvg } from '../../theme/assets/images/react.svg';
import react from '../../theme/assets/images/react.svg';

// Components
import { Button } from '../Button';

const SkillMeter = hot(module)(
    class extends Component {
        state = {
            skill: 0,
        };

        inc = () => this.setState(({ skill }) => ({
            skill: skill + 1,
        }));

        dec = () => this.setState(({ skill }) => ({
            skill: skill - 1,
        }));

        render() {
            const { skill } = this.state;

            return (
                <section className = { Styles.skillMeter }>
                    <h1>Hello!</h1>
                    <h1>My Webpack skill: {skill}</h1>
                    <img src = { cat } />
                    <img src = { react } />
                    <div>
                        <Button
                            text = 'Increment'
                            onClick = { this.inc }
                        />
                        <Button
                            text = 'Decrement'
                            onClick = { this.dec }
                        />
                    </div>
                    <ReactLogoSvg width = { 150 } />
                </section>
            );
        }
    },
);

render(<SkillMeter />, document.getElementById('app'));
