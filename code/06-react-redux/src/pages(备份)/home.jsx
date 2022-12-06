import React, { PureComponent } from 'react'
import store from '../store'
import {addNumberAction,} from '../store/actionCreators'

export class Home extends PureComponent {
  constructor() {
    super()
    this.state = {
      // counter: 0
      counter: store.getState().counter // 初始化
    }
  }
  // 挂载时订阅
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({counter: state.counter})
    })
  }

  addNumber(num) {
    store.dispatch(addNumberAction(num))
  }

  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <div>
          <button onClick={e => this.addNumber(1)}>+1</button>
          <button onClick={e => this.addNumber(5)}>+5</button>
          <button onClick={e => this.addNumber(10)}>+10</button>
        </div>
      </div>
    )
  }
}

export default Home