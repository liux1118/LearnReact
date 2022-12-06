import * as actionTypes from './constants';

// 初始化的数据
const initialState = {
  counter: 200,
  banners: [],
  recommends: [],
  keywords: [],
};

/**
 * 两个参数
 * 1.store中目前保存的store
 * 2.本次需要更新的action（dispatch传入的action）
 * 返回值：会作为store之后存储的state
 * 给state一个默认值
 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case actionTypes.SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case actionTypes.CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case actionTypes.CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    case actionTypes.CHANGE_KEYWORDS:
      return { ...state, keywords: action.keywords };
    default:
      return state;
  }
}

export default reducer;
