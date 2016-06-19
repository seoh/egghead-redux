import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root.js'

import { todos } from './reducers/todo'
import { visibilityFilter } from './reducers/visibility'
import { createStore, combineReducers } from './redux'


const todoApp = combineReducers({
  todos, visibilityFilter
})
const store = createStore(todoApp)

const render = () => {
  ReactDOM.render(
    <Root store={store} />
    , document.getElementById("app")
  )
}

store.subscribe(render)
render()