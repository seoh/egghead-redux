import React, { Component } from 'react'
// import Counter from './Counter'
import TodoApp from './TodoApp'

import { counter } from '../reducers/counter'
import { createStore } from '../redux'

import { INCREMENT, DECREMENT } from '../actions.js'

export default class Root extends Component {
  render() {
    return (
      <TodoApp
        todos={this.props.store.getState().todos}
        store={this.props.store}
      />
    )
  }
}