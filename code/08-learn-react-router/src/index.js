import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// 使用router
/**
 * BrowserRouter
 * HashRouter
 */
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<h3>Loading...</h3>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// react-router会包含一些react-native的内容，web开发并不需要
// npm install react-router-dom

// 1567
