import React, { Component } from 'react';
import context from './context';

export default class Children extends Component {
  render() {
    const { number } = this.context;
    return <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{number}</div>;
  }
}

Children.contextType = context;
