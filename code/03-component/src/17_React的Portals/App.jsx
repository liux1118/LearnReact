import React, { PureComponent } from 'react'
import { createPortal } from "react-dom"
import Modal from './Modal'

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <h1>App H1</h1>
        {
          // 挂载在id为Kylin的元素上而不是默认的root上
          createPortal(<h2>App H2</h2>, document.querySelector("#Kylin"))
        }

        {/* 2.Modal组件 */}
        <Modal>
          <h2>我是标题</h2>
          <p>我是内容, 哈哈哈</p>
        </Modal>
      </div>
    )
  }
}

export default App