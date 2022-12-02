import React from 'react';
import ReactDOM from 'react-dom/client';

// 编写组件
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       message: 'Hello React'
//     };
//   }

//   render() {
//     const { message } = this.state;

//     return (
//       <div>
//         <h1>{message}</h1>
//       </div>
//     );
//   }
// }

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
