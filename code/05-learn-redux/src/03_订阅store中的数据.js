const store = require('./store');
const { ADD_NUMBER, CHANGE_NAME } = require('./store/constants');

// 当数据改变时，执行
const unsubscribe = store.subscribe(() => {
  console.log('订阅数据变化：', store.getState());
});

// 修改store中的数据：必须通过action进行修改
const nameAction = { type: CHANGE_NAME, name: 'Arms' };
// 派发action进行修改
store.dispatch(nameAction);

// 当执行这个函数时，将会取消订阅
unsubscribe();

const counterAction = { type: ADD_NUMBER, num: 10 };
store.dispatch(counterAction);
