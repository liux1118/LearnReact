import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { changeUserAction, changeAvatarAction } from '../store/modules/user';

export class User extends PureComponent {
  render() {
    const { user, avatar } = this.props;
    return (
      <div>
        <h2>User</h2>
        <div className="keyword">
          <ul>
            {user.map((item, index) => {
              return <li key={index}>{item.username}</li>;
            })}
          </ul>
        </div>
        <div>
          <img src={avatar.image} alt="" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  avatar: state.user.avatar
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: () => dispatch(changeUserAction()),
  changeAvatar: () => dispatch(changeAvatarAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
