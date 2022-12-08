import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  // 标记slice（片段）的名称，在redux-devtool显示对应名称
  name: 'counter',
  // 初始化值
  initialState: {
    counter: 1029
  },
  // 放函数，相当于之前的reducer函数 reducer(state = initialState, action)
  reducers: {
    // 相当于之前reducer函数中的case语句
    /**
     * @param {*} state
     * @param {*} action (type, payload)
     */
    addNumberAction(state, { payload }) {
      // state.counter = state.counter + payload;
      state.counter += payload;
    },
    subNumberAction(state, { payload }) {
      // console.log('counter reducer subNumber', state, action);
      // const payload = action.payload;
      state.counter = state.counter - payload;
    }
  }
});

export const { addNumberAction, subNumberAction } = counterSlice.actions;

export default counterSlice.reducer;
