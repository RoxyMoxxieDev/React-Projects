import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import KeyTrigger from './components/KeyTrigger';
import store from './store/store';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <KeyTrigger />
  </Provider>
);
