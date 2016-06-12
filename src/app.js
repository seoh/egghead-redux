import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root.js'

import { counter } from './reducers/counter'
import { createStore } from './redux'
import { INCREMENT, DECREMENT } from './actions.js'

const store = createStore(counter)

const render = () => ReactDOM.render(
  <Root store={store} />
  , document.getElementById("app")
)

store.subscribe(render)
render()