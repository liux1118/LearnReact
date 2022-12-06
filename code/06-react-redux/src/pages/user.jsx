import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { changeUser } from '../store/modules/user'

export class User extends PureComponent {

  render() {
    const { user } = this.props
    return (
      <div>
        <h2>User</h2>
        <div className="keyword">
          <ul>
            {
              user.map((item, index) => {
                return <li key={index}>{item.username}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidate: () => dispatch(changeUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
