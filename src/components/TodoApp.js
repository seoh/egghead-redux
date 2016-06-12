import React, { Component } from 'react'
import { ADD_TODO } from '../actions.js'

export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <input ref={node => {
          this.input = node
        }} />
        <button onClick={() => {
          this.props.store.dispatch({
            type: ADD_TODO,
            text: this.input.value
          })
          this.input.value = ''
        }}>
          Add Todo
        </button>
        <ul>
          {
            this.props.todos.map(todo =>
              <li key={todo.id}>
                {todo.text}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}