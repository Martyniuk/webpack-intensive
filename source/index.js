// import './theme/init.css';
// import component from './simple-components/dom';

// let element = component();

// document.body.appendChild(element);

// if (module.hot) {
//     module.hot.accept('./simple-components/dom', function() {
//         document.body.removeChild(element);
//         element = component();
//         document.body.appendChild(element);
//     });
// }

import './javascript';
// import './react-component/SkillMeter';

if (process.env.NODE_ENV === 'development') {
    // что-то делать, или не делать
}

console.log('→ __DEV__', __DEV__);
console.log('→ __PROD__', __PROD__);
console.log('→ __ENV__', __ENV__);