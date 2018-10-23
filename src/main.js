import React from 'react'; // ES6
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import '../style/main.scss';

import App from './component/app/app';
import createStore from './create-store';

const store = createStore();

// !: = development notes

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
// !: this will be what starts the entire application
ReactDom.render(<Provider store={store}><App/></Provider>, rootNode);
