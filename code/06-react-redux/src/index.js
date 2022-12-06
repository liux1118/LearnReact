import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// 使用react-redux，将react与redux联系起来
// 1
import { Provider } from 'react-redux';
// 2
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
