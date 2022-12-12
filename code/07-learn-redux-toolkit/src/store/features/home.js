import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const homeSlice = createSlice({
  // 标记slice（片段）的名称，在redux-devtool显示对应名称
  name: 'home',
  // 初始化值
  initialState: {
    banners: [],
    recommends: []
  },
  // 放函数，相当于之前的reducer函数 reducer(state = initialState, action)
  // 具体看counter.js
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
    changeRecommendsAction(state, { payload }) {
      state.recommends = payload;
    }
  }

  // 推荐用法
  // 针对异步操作中三个状态进行监听（也可单独监听某个状态） fetchHomeMultidataAction
  // 写法一：
  // extraReducers: {
  //   // pending 计算属性名
  //   [fetchHomeMultidataAction.pending](state, action) {
  //     console.log('fetchHomeMultidataAction pending');
  //   },
  //   [fetchHomeMultidataAction.fulfilled](state, { payload }) {
  //     console.log('fetchHomeMultidataAction fulfilled');
  //     state.banners = payload.data.banner.list;
  //     state.recommends = payload.data.recommend.list;
  //   },
  //   [fetchHomeMultidataAction.rejected](state, action) {
  //     console.log('fetchHomeMultidataAction rejected');
  //   }
  // },
  // 写法二：
  // extraReducers: (builders) => {
  //   builders
  //     .addCase(fetchHomeMultidataAction.pending, (state, action) => {
  //       console.log('fetchHomeMultidataAction pending');
  //     })
  //     .addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
  //       console.log('fetchHomeMultidataAction fulfilled');
  //       state.banners = payload.data.banner.list;
  //       state.recommends = payload.data.recommend.list;
  //     });
  // }
});

/**
 * createAsyncThunk创建出来的action被dispatch时，会有三种状态 Promise
 * 1、pending
 * 2、fulfilled
 * 3、rejected
 */
/**
 * @Params 1、事件类型
 * @Params 2、函数
 */
export const fetchHomeMultidataAction = createAsyncThunk(
  'fetch/homeMultidata',
  async (extraInfo, { dispatch, getState }) => {
    console.log(extraInfo, dispatch, getState, 'extraInfo, store');
    const res = await axios.get('http://123.207.32.32:8000/home/multidata');

    // 取出数据，并且此处直接dispatch （可以不做）
    const banners = res.data.data.banner.list;
    const recommends = res.data.data.recommend.list;
    dispatch(changeBannersAction(banners));
    dispatch(changeRecommendsAction(recommends));

    // 返回结果，action会变成fulfilled状态
    return res.data;
  }
);

// 导出action
export const { changeBannersAction, changeRecommendsAction } =
  homeSlice.actions;

export default homeSlice.reducer;
