import React from 'react'; // ES6
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './component/app/app';
import reducer from './reducer/main-reducer';
import session from './lib/redux-session';
import reporter from './lib/redux-reporter';

import '../style/main.scss';

// !: = development notes

//------------------------------------------------------------
// Setup Store
//------------------------------------------------------------
const store = createStore(reducer, composeWithDevTools(applyMiddleware(reporter, session)));

//------------------------------------------------------------
// Render
//------------------------------------------------------------
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

// !: this will be what starts the entire application
ReactDom.render(<Provider store={store}><App/></Provider>, appContainer);
