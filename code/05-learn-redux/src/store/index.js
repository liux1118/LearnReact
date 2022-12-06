// @reduxjs/toolkit
const { createStore } = require('redux');

const reducer = require('./reducer.js');

/**
 * Redux三大原则
 * 1、单一数据源
 * 2、State是只读的
 * 3、使用纯函数来执行修改
 */

// 初始化数据
// const initialState = {
//   name: 'Kylin',
//   counter: 100
// };

/**
 * 两个参数
 * 1.store中目前保存的store
 * 2.本次需要更新的action（dispatch传入的action）
 * 返回值：会作为store之后存储的state
 * 给state一个默认值
 */
// function reducer(state = initialState, action) {
//   console.log('reducer:', state, action);
//   // 如果有新数据更新，需要返回新的state
//   // if (action.type === 'change_name') {
//   //   // 不可直接修改，只能用以下方式
//   //   return { ...state, name: action.name };
//   // }
//   switch (action.type) {
//     case 'change_name':
//       return { ...state, name: action.name };
//     case 'add_counter':
//       return { ...state, counter: state.counter + action.num };
//     default:
//       return state;
//   }

//   // 如果没有数据更新，需要返回之前的state
//   // return state;
// }

// 传reducer函数：纯函数
const store = createStore(reducer);

module.exports = store;
