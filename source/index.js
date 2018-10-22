import './theme/init.css';
import component from './simple-components/dom';

let element = component(); // Store the element to re-render on print.js changes

document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./simple-components/dom', function() {
        // document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    });
}
