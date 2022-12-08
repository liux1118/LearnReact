/**
 * npm install @reduxjs/toolkit 已集成redux-thunk、redux-devtool
 */

import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './features/counter';
import homeReducer from './features/home';

/**
 * configureStore传参
 * 1、reducer 将slice中的reducer可以组成一个对象传入此处
 * 2、middleware 可传入其他中间件
 * 3、devtools 是否配置redux-devtool工具，默认为true
 */
const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer
  }
});

export default store;
