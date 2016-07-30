import { todos } from './reducers/todo'
import { visibilityFilter } from './reducers/visibility'
import { createStore, combineReducers } from './redux'

const todoApp = combineReducers({
  todos, visibilityFilter
})
const store = createStore(todoApp)

export default store