import * as actionTypes from '../../constants';

export const changeUser = (user) => ({
  type: actionTypes.CHANGE_USER,
  user,
});
