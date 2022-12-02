import React from 'react';
import HelloWorld from './components/HelloWorld';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello React'
    };
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <HelloWorld />
      </div>
    );
  }
}