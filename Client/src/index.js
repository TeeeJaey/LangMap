import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Main from './components/Main.component';
import 'bootstrap/dist/css/bootstrap.css';
import store from './Store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store} >
    <Main />
  </Provider>,
  
  document.getElementById('root')
);
