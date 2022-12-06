import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

/**
 * 正常情况下，store.dispatch(object)
 * 想要派发函数，store.dispatch(function)
 * npm install redux-thunk
 */

// 开启redux-devtools调试工具
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// applyMiddleware(thunk) 应用中间件 applyMiddleware(thunk, xxx, xxx, xxx)
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

// 1552
