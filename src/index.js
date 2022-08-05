import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom';
import React from 'react';
import store from './redux/store';
import App from './App';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);
