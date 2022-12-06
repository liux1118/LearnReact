/**
 * redux代码优化:
 *  1.将派发的action生成过程放到一个actionCreators函数中
 *  2.将定义的所有actionCreators的函数, 放到一个独立的文件中: actionCreators.js
 *  3.actionCreators和reducer函数中使用字符串常量是一致的, 所以将常量抽取到一个独立constants的文件中
 *  4.将reducer和默认值(initialState)放到一个独立的reducer.js文件中, 而不是在index.js
 */
const store = require('./store');
const { addNumberAction, changeNameAction } = require('./store/actionCreators');

// 当数据改变时，执行
const unsubscribe = store.subscribe(() => {
  console.log('订阅数据变化：', store.getState());
});

// 派发action进行修改
store.dispatch(changeNameAction('Arms'));
store.dispatch(addNumberAction(10));

// 当执行这个函数时，将会取消订阅
unsubscribe();

store.dispatch(addNumberAction(20));
