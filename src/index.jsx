import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import store from './components/App/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>
);
