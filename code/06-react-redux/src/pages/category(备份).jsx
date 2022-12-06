import React, { PureComponent } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { changeBannersAction, changeRecommendsAction,changeKeywordsAction } from '../store/actionCreators'

export class Category extends PureComponent {

  // 异步请求网络数据
  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const data = res.data.data
      const banners = data.banner.list
      const recommends = data.recommend.list
      const keywords = data.keywords.list

      this.props.changeBanners(banners)
      this.props.changeRecommends(recommends)
      this.props.changeKeywords(keywords)
    })
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
  changeBanners: (banners) => dispatch(changeBannersAction(banners)),
  changeRecommends: (recommends) => dispatch(changeRecommendsAction(recommends)),
  changeKeywords: (keywords) => dispatch(changeKeywordsAction(keywords))
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
