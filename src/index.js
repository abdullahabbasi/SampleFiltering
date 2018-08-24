import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { searchText } from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(searchText, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render( <Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
            registerServiceWorker();
