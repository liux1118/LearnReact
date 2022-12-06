import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { addNumberAction, subNumberAction } from '../store/modules/counter'

export class About extends PureComponent {

  calcNumber(num, isAdd) {
    if (isAdd) {
      this.props.addNumber(num)
    } else {
      this.props.subNumber(num)
    }
  }
  render() {
    const { counter, banners, recommends } = this.props
    return (
      <div>
        <h2>About Page: {counter}</h2>
        <div>
          <button onClick={e => this.calcNumber(1, true)}>+1</button>
          <button onClick={e => this.calcNumber(5, true)}>+5</button>
          <button onClick={e => this.calcNumber(10, true)}>+10</button>
          <button onClick={e => this.calcNumber(8, false)}>-8</button>
        </div>

        <div className="banner">
          <h2>轮播图数据:</h2>
          <ul>
            {
              banners.map((item, index) => {
                 return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
        <div className="recommend">
          <h2>推荐数据:</h2>
          <ul>
            {
              recommends.map((item, index) => {
                 return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     // 映射counter
//     counter: state.counter
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addNumber(num) {
//       dispatch(addNumberAction(num))
//     },
//     subNumber(num) {
//       dispatch(subNumberAction(num))
//     }
//   }
// }

// 返回对象 映射state到props
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends,
})
// 返回对象 映射dispatch到props
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumberAction(num)),
  subNumber: (num) => dispatch(subNumberAction(num))
})

// connect()返回值是一个高阶组件
/**
 * 第一个括号，执行connect高阶函数，
 * 第二个括号，返回一个高阶组件后，再传入一个组件，对这个组件执行其内部的拦截操作
 */
export default connect(mapStateToProps, mapDispatchToProps)(About)
