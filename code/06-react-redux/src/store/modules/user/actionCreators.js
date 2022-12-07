import * as actionTypes from '../../constants';

export const changeUserAction = (user) => ({
  type: actionTypes.CHANGE_USER,
  user
});

export const changeAvatarAction = (avatar) => ({
  type: actionTypes.CHANGE_AVATAR,
  avatar
});
