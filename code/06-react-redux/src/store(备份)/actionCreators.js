import * as actionTypes from './constants';
import axios from 'axios';

export const addNumberAction = (num) => ({
  type: actionTypes.ADD_NUMBER,
  num,
});

export const subNumberAction = (num) => ({
  type: actionTypes.SUB_NUMBER,
  num,
});

export const changeBannersAction = (banners) => ({
  type: actionTypes.CHANGE_BANNERS,
  banners,
});

export const changeRecommendsAction = (recommends) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends,
});

export const changeKeywordsAction = (keywords) => ({
  type: actionTypes.CHANGE_KEYWORDS,
  keywords,
});

export const fetchHomeMultidataAction = () => {
  // 如果是一个普通的action，那么我们这里需要返回action对象
  // 问题：对象中不能直接拿到从服务器请求的异步数据的
  // return {}

  // 如果返回的是一个函数，那么redux是不支持的，需要使用redux-thunk
  return function (dispatch, getState) {
    // thunk会对这个函数自动执行
    console.log('foo function execution-----', getState().counter);
    // 进行异步操作，网络请求
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const data = res.data.data;
      const banners = data.banner.list;
      const recommends = data.recommend.list;
      const keywords = data.keywords.list;

      dispatch(changeBannersAction(banners));
      dispatch(changeRecommendsAction(recommends));
      dispatch(changeKeywordsAction(keywords));
    });
  };
};
