/**
 * reducer
 * 一个纯函数
 * 将传入的state和action结合起来生成一个新的state
 */
const { ADD_NUMBER, CHANGE_NAME } = require('./constants');

// 初始化数据
const initialState = {
  name: 'Kylin',
  counter: 100
};

/**
 * 两个参数
 * 1.store中目前保存的store
 * 2.本次需要更新的action（dispatch传入的action）
 * 返回值：会作为store之后存储的state
 * 给state一个默认值
 */
function reducer(state = initialState, action) {
  console.log('reducer:', state, action);
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    default:
      return state;
  }
}

module.exports = reducer;
