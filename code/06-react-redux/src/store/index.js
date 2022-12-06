import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from './modules/counter';
import homeReducer from './modules/home';

import userReducer from './modules/user';

/**
 * 正常情况下，store.dispatch(object)
 * 想要派发函数，store.dispatch(function)
 * npm install redux-thunk
 */

// combineReducers合并多个reducer 独立模块
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
  user: userReducer,
});

// combineReducers实现原理(了解)
// function reducer(state = {}, action) {
//   // 返回一个对象, store的state
//   return {
//     counter: counterReducer(state.counter, action),
//     home: homeReducer(state.home, action),
//     user: userReducer(state.user, action)
//   }
// }

// 开启redux-devtools调试工具
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// applyMiddleware(thunk) 应用中间件 applyMiddleware(thunk, xxx, xxx, xxx)
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

// 1554
