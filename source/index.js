import 'style-loader!css-loader!./theme/init.css';
import component from './simple-components/dom';

const element = component()

document.body.appendChild(element)