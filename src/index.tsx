import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './stores';
import { connectReduxDevtools } from 'mst-middlewares';
import { createRootStore } from './stores';

const rootStore = createRootStore();

connectReduxDevtools(require('remotedev'), rootStore);

const Root = (
  <React.StrictMode>
    <StoreProvider value={rootStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

ReactDOM.render(Root, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
