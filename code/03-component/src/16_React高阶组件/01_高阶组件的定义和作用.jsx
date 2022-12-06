import React, { PureComponent } from 'react'

// 定义一个高阶组件
/**
 * 高阶组件本身不是一个组件，而是一个函数
 * 接收一个组件作为它的参数
 * 返回一个新的组件
 */
function hoc(Cpn) {
  // 1.定义类组件
  class NewCpn extends PureComponent {
    render() {
      // 拦截了Cpn组件，新增了name属性
      return <Cpn name="Kylin"/>
    }
  }
  return NewCpn

  // 定义函数组件
  // function NewCpn2(props) {

  // }
  // return NewCpn2
}

class HelloWorld extends PureComponent {
  render() {
    return <h1>Hello World</h1>
  }
}

const HelloWorldHOC = hoc(HelloWorld)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorldHOC/>
      </div>
    )
  }
}

export default App