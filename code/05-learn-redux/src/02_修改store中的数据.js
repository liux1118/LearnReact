const store = require('./store');
const { ADD_NUMBER, CHANGE_NAME } = require('./store/constants');

// 获取数据
console.log('getState:', store.getState());

// 修改store中的数据：必须通过action进行修改
const nameAction = { type: CHANGE_NAME, name: 'Arms' };
// 派发action进行修改
store.dispatch(nameAction);

console.log('getState2:', store.getState());

const counterAction = { type: ADD_NUMBER, num: 10 };

store.dispatch(counterAction);

console.log('getState3:', store.getState());
