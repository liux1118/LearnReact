import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { fetchHomeMultidataAction } from '../store/actionCreators'

export class Category extends PureComponent {

  // 异步请求网络数据
  componentDidMount() {
    this.props.fetchHomeMultidate()
  }

  render() {
    const { counter, keywords } = this.props
    return (
      <div>
        <h2>Category: {counter}</h2>
        <div className="keyword">
          <h2>关键词数据：</h2>
          <ul>
            {
              keywords.map((item, index) => {
                return <li key={index}>{item.words}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  keywords: state.keywords
})

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidate: () => dispatch(fetchHomeMultidataAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
