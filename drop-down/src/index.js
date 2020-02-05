import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import StoreProvider from './store/StoreProvider.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
