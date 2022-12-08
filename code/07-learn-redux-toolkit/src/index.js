import React from 'react';
import ReactDOM from 'react-dom/client';

// npm install react-redux
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式，生命周期执行两次
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// npm install @reduxjs/toolkit react-redux

/**
 * 1、configureStore
 * 2、createSlice
 * 3、createAsyncThunk
 */

// 1557
