import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, HashRouter} from 'react-router-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import store from '../src/services/store';
import { Provider } from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
    <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
