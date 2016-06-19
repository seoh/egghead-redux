import React, { Component } from 'react'
import FilterLink from './FilterLink'
import { ADD_TODO, TOGGLE_TODO,
         SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED
       } from '../actions.js'

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case SHOW_ALL: return todos;
    case SHOW_ACTIVE: return todos.filter(_ => !_.completed)
    case SHOW_COMPLETED: return todos.filter(_ => _.completed)
  }
}

export default class TodoApp extends Component {
  render() {
    const {
      store,
      todos,
      visibilityFilter
    } = this.props

    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    )

    return (
      <div>
        <input ref={node => {
          this.input = node
        }} />
        <button onClick={() => {
          store.dispatch({
            type: ADD_TODO,
            text: this.input.value
          })
          this.input.value = ''
        }}>
          Add Todo
        </button>
        <ul>
          { visibleTodos.map(todo =>
              <li key={todo.id}
                  onClick={() => {
                    store.dispatch({
                      type: TOGGLE_TODO,
                      id: todo.id
                    })
                  }}
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                  }}
              >
                {todo.text}
              </li>
          )}
        </ul>
        <p>
          Show:
          {' '}
          <FilterLink store={store} currentFilter={visibilityFilter}
                      filter={SHOW_ALL}>
            All
          </FilterLink>
          {' '}
          <FilterLink store={store} currentFilter={visibilityFilter}
                      filter={SHOW_ACTIVE}>
            Active
          </FilterLink>
          {' '}
          <FilterLink store={store} currentFilter={visibilityFilter}
                      filter={SHOW_COMPLETED}>
            Completed
          </FilterLink>
        </p>
      </div>
    )
  }
}