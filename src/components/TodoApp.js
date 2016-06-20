import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'
import TodoList from './TodoList'
import Footer from './Footer'
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

const TodoApp = ({
  store,
  todos,
  visibilityFilter
}) => {
  const visibleTodos = getVisibleTodos(
    todos,
    visibilityFilter
  )

  return (
    <div>
      <AddTodo onAddClick={ text =>
        store.dispatch({
          type: ADD_TODO,
          text
        })
      } />
      <TodoList
        todos={visibleTodos}
        onTodoClick={ id =>
          store.dispatch({
            type: TOGGLE_TODO,
            id
          })
        }
      />
      <Footer
        store={store}
        visibilityFilter={visibilityFilter} 
        onFilterClick={ filter =>
          store.dispatch({
            type: SET_VISIBILITY_FILTER,
            filter
          })
        }
      />
    </div>
  )
}

export default TodoApp
