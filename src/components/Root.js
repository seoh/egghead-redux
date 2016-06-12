import React, { Component } from 'react'
import Counter from './Counter'

import { counter } from '../reducers/counter'
import { createStore } from '../redux'

import { INCREMENT, DECREMENT } from '../actions.js'

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.store = props.store
  }

  render() {
    return (
      <Counter
        value={this.store.getState()}
        onIncrement={() => this.store.dispatch({
          type: INCREMENT
        })}
        onDecrement={() => this.store.dispatch({
          type: DECREMENT
        })}
      />
    )
  }
}