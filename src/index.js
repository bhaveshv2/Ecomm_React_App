import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/index.js';
import { configureStore } from './store/index';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


