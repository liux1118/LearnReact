import React, { PureComponent } from 'react';

import Home from './pages/home';
import Profile from './pages/profile'
import About from './pages/about'
import Category from './pages/category'

import './style.css'

import store from './store'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      // counter: 0
      counter: store.getState().counter.counter // 初始化
    }
  }
  // 挂载时订阅
  componentDidMount() {
    console.log(store.getState())
    store.subscribe(() => {
      const state = store.getState().counter
      this.setState({counter: state.counter})
    })
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>learn react-redux</h2>
        <h2>App Counter: {counter}</h2>

        <div className="pages">
          <Home/>
          <Profile/>
          <About />
          <Category/>
        </div>
      </div>
    )
  }
}

export default App;
