import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root.js'

import store from './store'

const render = () => {
  ReactDOM.render(
    <Root/>
    , document.getElementById("app")
  )
}

store.subscribe(render)
render()