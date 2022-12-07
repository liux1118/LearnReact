import * as actionTypes from '../../constants';

// 初始化的数据
const initialState = {
  user: [
    {
      id: 1,
      username: 'Kylin'
    },
    {
      id: 2,
      username: 'Arms'
    },
    {
      id: 3,
      username: '熠熠星河'
    }
  ],
  avatar: {
    image:
      'https://portrait.gitee.com/uploads/avatars/user/2793/8380595_liux1118_1628671708.png!avatar30'
  }
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
    case actionTypes.CHANGE_USER:
      return { ...state, user: action.user };
    case actionTypes.CHANGE_AVATAR:
      return { ...state, avatar: action.avatar };
    default:
      return state;
  }
}

export default reducer;
